var workspace = Blockly.inject(
	'blocklyDiv', 
	{
		toolbox: Control.prototype.createToolBox(),
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1.0,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2,
			pinch: true
		},
		grid: {
			spacing: 20,
			length: 3,
			color: '#ccc',
			snap: true,
		},
		scrollbars: true,
		trashcan: true,
		maxBlocks: Control.prototype.getMaxBlocks()
	}
);

workspace.addChangeListener(workspaceBlocksChanged);

var myInterpreter = null;

var highlightPause = false;
var latestCode = '';

var selectedPattern = "";
var currentPattern = 1;

var timeoutId = null;

let oldXMLCode = '';

// Load the interpreter now, and upon future changes.
generateCodeAndLoadIntoInterpreter();
workspace.addChangeListener(function(event) {
	if (!(event instanceof Blockly.Events.Ui)) {
		// Something changed. Parser needs to be reloaded.
		generateCodeAndLoadIntoInterpreter();
	}
});

Control.prototype.initGame();
workspaceBlocksChanged();

// resize workspace
const wsWidth = document.getElementById('workspaceColumn').parentNode.clientWidth - document.getElementById('mapColumn').clientWidth - 20;
if (wsWidth > 550) {
	document.getElementById('blocklyDiv').setAttribute('style', 'width: '+wsWidth+'px');
	Blockly.svgResize(workspace);
}

function initApi(interpreter, globalObject) {
	// Add an API function for the alert() block, generated for "text_print" blocks.
	interpreter.setProperty(globalObject, 'alert',
			interpreter.createNativeFunction(function(text) {
		text = arguments.length ? text : '';
	}));

	// Add an API function for the prompt() block.
	var wrapper = function(text) {
		return interpreter.createPrimitive(prompt(text));
	};
	interpreter.setProperty(globalObject, 'prompt',
			interpreter.createNativeFunction(wrapper));

	// Add an API function for highlighting blocks.
	var wrapper = function(id) {
		id = String(id || '');
		return interpreter.createPrimitive(highlightBlock(id));
	};
	interpreter.setProperty(globalObject, 'highlightBlock',
			interpreter.createNativeFunction(wrapper));
	
	// 
	var wrapper = function(cmd, arg1, arg2, arg3) {
		cmd = String(cmd || '');
		return interpreter.createPrimitive(ControlOneTurn(cmd, arg1, arg2, arg3));
	};
	interpreter.setProperty(globalObject, 'ControlOneTurn',
			interpreter.createNativeFunction(wrapper));
}

function highlightBlock(id) {
	workspace.highlightBlock(id);
	highlightPause = true;
}

function resetStepUi(clearOutput) {
	workspace.highlightBlock(null);
	highlightPause = false;
}

function generateCodeAndLoadIntoInterpreter() {
	// Generate JavaScript code and parse it.
	Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
	Blockly.JavaScript.addReservedWords('highlightBlock');
	latestCode = Blockly.JavaScript.workspaceToCode(workspace);
	resetStepUi(true);
}

function stepOneBlock() {
	highlightPause = false;
	let hasMoreCode = false;
	if (myInterpreter instanceof Interpreter) {
		do {
			try {
				if ((myInterpreter !== null) && (typeof myInterpreter.step == 'function')) {
					hasMoreCode = myInterpreter.step();
				}
				else {
					hasMoreCode = false;
				}
			}
			finally {
				if (!hasMoreCode) {
					stopStep();
				}
			}
		}while(hasMoreCode && !highlightPause);
	}
}

function stopStep() {
	clearInterval(timeoutId);
	myInterpreter = null;
	resetStepUi(false);
	setTimeout(function() {
		Control.prototype.showRunButton();
		Control.prototype.hideStopButton();
		Control.prototype.showResetButton();
		Control.prototype.showHintButton();
		Control.prototype.showRobotSpeed();
		Control.prototype.showPatternSelector();
		Control.prototype.showMessageBalloon();
		Control.prototype.showLeftBlocks();
		Control.prototype.hideRemainingEnergy();
	}, 1000);
}

function runCode() {
	selectedPattern = Control.prototype.patternSelector.value;
	if (Map.prototype.patterns > 1) {
		if (selectedPattern == "") {
			currentPattern = 1;
			Control.prototype.patternSelector.options[1].selected = true;
		}
		else {
			currentPattern = selectedPattern;
		}
	}
	else {
		currentPattern = 0;
	}
	
	runCodeBody();
}

function runNextPattern() {
	if (Map.prototype.patterns > 1) {
		let allPassed = false;
		
		if (selectedPattern == "") {
			// ぜんぶ を選択している場合
			if (currentPattern < Map.prototype.patterns) {
				currentPattern++;
				Control.prototype.selectPattern(currentPattern);
				runCodeBody();
			}
			else {
				Control.prototype.patternSelector.options[0].selected = true;
				showAllClearDialog();
			}
		}
		else {
			// 特定パターンを選択している場合
			const p = Map.prototype.patterns;
			let passNum = 0;
			let notPass = -1;
			for (let i = p; i > 0; i--) {
				if (Control.prototype.patternSelector.options[i].getAttribute('class') == 'pass') {
					passNum++;
				}
				else {
					notPass = i;
				}
			}
			if (passNum == p) {
				// 全パターンをクリアーしている
				showAllClearDialog();
			}
			else {
				Swal.fire({
					title: getNextPatternTitle(),
					text: 'つぎはパターン ' + notPass + ' をやってみる？',
					showDenyButton: true,
					confirmButtonText: 'はい',
					denyButtonText: 'いいえ',
				}).then((result) => {
					if (result.isConfirmed) {
						currentPattern = notPass;
						Control.prototype.selectPattern(currentPattern);
						runCodeBody();
					}
				});;
			}
		}
	}
}

/**
 * すべてのパターンをクリアーしたときのメッセージを表示する
 */
function showAllClearDialog() {
	Swal.fire({
		title: getHappyIcons(),
		text: getAllPatternClearText(),
		confirmButtonText: "OK"
	});
}

function runCodeBody() {
	Control.prototype.beforeRun();
	
	if (!myInterpreter) {
		// DBG
		//alert(latestCode);
		
		Control.prototype.hideRunButton();
		Control.prototype.showStopButton();
		Control.prototype.hideResetButton();
		Control.prototype.hideHintButton();
		Control.prototype.hideRobotSpeed();
		Control.prototype.hidePatternSelector();
		Control.prototype.hideMessageBalloon();
		Control.prototype.hideLeftBlocks();
		Control.prototype.hideRemainingEnergy();
		
		resetStepUi(true);
		myInterpreter = new Interpreter(latestCode, initApi);

		// DBG
		//alert(latestCode);
		
		let spd = 1000;
		switch(parseInt(Control.prototype.getRobotSpeed())) {
			case 0:
				spd = 1500;
				break;
			case 2:
				spd = 700;
				break;
			case 3:
				spd = 400;
				break;
			case 4:
				spd = 200;
				break;
			default:
				break;
		}

		highlightPause = true;
		timeoutId = setInterval(stepOneBlock, spd);
	}
}

function ControlOneTurn(cmd, arg1, arg2, arg3) {
	const ret = Control.prototype.oneTurn(cmd, arg1, arg2, arg3);
	
	if (Control.prototype.goal) {
		stopStep();
		Control.prototype.setPatternPass();
		setTimeout(function() {
			Swal.fire({
				title: "&#" + getClearFace() + ";",
				text: getClearText(),
				confirmButtonText: "OK"
			}).then((result) => {
				runNextPattern();
			});;
		}, 1000);
		return ret;
	}
	
	if (Control.prototype.emptyLife) {
		stopStep();
		setTimeout(function() {
			Swal.fire({
				title: "&#" + getTiredFace() + ";",
				text: (Map.prototype.start.soft ? "イテテ、かべにぶつかっちゃった……" : "命令が多くて、つかれちゃった……"),
				confirmButtonText: "もう一度"
			});
		}, 1000);
		return ret;
	}
	
	return ret;
}

function forceStop() {
	stopStep();
}

function resetMap() {
	Control.prototype.beforeRun();
}

function workspaceBlocksChanged() {
	Control.prototype.updateLeftBlocks(workspace.remainingCapacity());
	
	const currentCode = createXML();
	if (oldXMLCode != currentCode) {
		Control.prototype.setPatternsNotPass();
		oldXMLCode = currentCode;
	}
}

function putHint() {
	const xml = Blockly.Xml.textToDom(Map.prototype.hintBlocks);
	Blockly.Xml.domToWorkspace(xml, workspace);
	Swal.fire({
		title: "&#129300;",
		text: "ヒントの命令をおいたよ",
	});
}

/**
 * 現在のブロックのXMLを作る
 */
function createXML() {
	const xml = Blockly.Xml.workspaceToDom(workspace);
	return Blockly.Xml.domToText(xml);
}

/**
 * ヒント用のXMLを作る
 */
function showXML() {
	const myBlockXml = createXML();
	
	// remove id attr
	let txt = "";
	while(myBlockXml.indexOf(" id=\"") >= 0) {
		const idx = myBlockXml.indexOf(" id=\"");
		txt += myBlockXml.substring(0, idx);
		myBlockXml = myBlockXml.substring(idx + 5);
		myBlockXml = myBlockXml.substring(myBlockXml.indexOf("\"") + 1);
	}
	txt += myBlockXml;
	
	// position fix
	const idx = txt.indexOf("x=\"");
	let newTxt = txt.substring(0, idx) + "x=\"10\" y=\"10\">";
	txt = txt.substring(txt.indexOf("y=\"") + 3);
	newTxt += txt.substring(txt.indexOf("<"));
	
	console.log(newTxt);
}

function getClearFace() {
	switch(Math.floor(Math.random() * 8)) {
		case 0:
			return "128513";
		case 1:
			return "128515";
		case 2:
			return "128516";
		case 3:
			return "128518";
		case 4:
			return "128521";
		case 5:
			return "128522";
		case 6:
			return "129303";
		case 7:
			return "128077";
	}
}

function getClearText() {
	let txt = "";
	switch(Math.floor(Math.random() * 5)) {
		case 0:
			txt += "やったー！";
			break;
		case 1:
			txt += "わーい！";
			break;
		case 2:
			txt += "やった！！";
			break;
		case 3:
			txt += "いえーい！";
			break;
		case 4:
			txt += "ありがとう！";
			break;
	}
	if (Math.floor(Math.random() * 2) == 0) {
		txt += "ゴール";
		switch(Math.floor(Math.random() * 2)) {
			case 0:
				txt += "したよ！";
				break;
			case 1:
				txt += "できたよ！";
				break;
		}
	}
	else {
		txt += "ゴールに";
		switch(Math.floor(Math.random() * 5)) {
			case 0:
				txt += "着いたよ！";
				break;
			case 1:
				txt += "着けたよ！";
				break;
			case 2:
				txt += "来たよ！";
				break;
			case 3:
				txt += "来れたよ！";
				break;
			case 4:
				txt += "行けたよ！";
				break;
		}
	}
	
	return txt;
}

function getTiredFace() {
	switch(Math.floor(Math.random() * 6)) {
		case 0:
			return "128549";
		case 1:
			return "128553";
		case 2:
			return "128555";
		case 3:
			return "128557";
		case 4:
			return "128560";
		case 5:
			return "128565";
	}
}

function getAllPatternClearText() {
	let txt = "全てのパターンでゴール";
	switch(Math.floor(Math.random() * 4)) {
		case 0:
			txt = "やったね！" + txt;
			break;
		case 1:
			txt = "すごいね！" + txt;
			break;
		case 2:
			txt = "すばらしい！" + txt;
			break;
		case 3:
			txt = "かんぺき！" + txt;
			break;
	}
	switch(Math.floor(Math.random() * 4)) {
		case 0:
			txt += "したよ！";
			break;
		case 1:
			txt += "できたよ！";
			break;
		case 2:
			txt += "に行けたよ！";
			break;
		case 3:
			txt += "に着けたよ！";
			break;
	}
	return txt;
}

function getHappyIcons() {
	let txt = "&#" + getHappyIcon() + ";&#" + getClearFace() + ";&#" + getHappyIcon() + ";";
	switch(Map.prototype.patterns) {
		case 2:
			return txt;
		case 3:
			return "&#" + getHappyIcon() + ";" + txt + "&#" + getHappyIcon() + ";";
		default:
			return "&#" + getHappyIcon() + ";&#" + getHappyIcon() + ";" + txt + "&#" + getHappyIcon() + ";&#" + getHappyIcon() + ";";
	}
}

function getHappyIcon() {
	switch(Math.floor(Math.random() * 14)) {
		case 0:
			return "128174";
		case 1:
			return "127804";
		case 2:
			return "127800";
		case 3:
			return "127989";
		case 4:
			return "128144";
		case 5:
			return "127880";
		case 6:
			return "128147";
		case 7:
			return "128157";
		case 8:
			return "9829";
		case 9:
			return "10083";
		case 10:
			return "128149";
		case 11:
			return "128150";
		case 12:
			return "128155";
		case 13:
			return "128276";
	}
}

function getNextPatternTitle() {
	let txt = '&#';
	switch(Math.floor(Math.random() * 2)) {
		case 0:
			txt += '129300';
			break;
		case 1:
			txt += '129488';
			break;
	}
	txt += '&#';
	switch(Math.floor(Math.random() * 2)) {
		case 0:
			txt += '128073';
			break;
		case 1:
			txt += '8594';
			break;
	}
	return txt;
}