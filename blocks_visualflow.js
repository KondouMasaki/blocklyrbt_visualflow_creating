/**
 *	Basic
 */
Blockly.Blocks['forward'] = {
	init: function() {
		this.appendDummyInput().appendField("前へ進む");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(165);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['turn_right'] = {
	init: function() {
		this.appendDummyInput().appendField("右を向く");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(165);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['turn_left'] = {
	init: function() {
		this.appendDummyInput().appendField("左を向く");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(165);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['nop'] = {
	init: function() {
		this.appendDummyInput().appendField("何もしない");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(165);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
/**
 *	Standard
 */
Blockly.Blocks['floor_color_is'] = {
	init: function() {
		this.appendDummyInput().appendField("もしマスの色が");
		this.appendValueInput("color").setCheck("Number");
		this.appendDummyInput().appendField("と");
		this.appendStatementInput("equals").setCheck(null).appendField("等しい");
		this.appendStatementInput("not_equals").setCheck(null).appendField("等しくない");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['robot_direction_is'] = {
	init: function() {
		this.appendDummyInput().appendField("もしロボットの向きが");
		this.appendValueInput("direction").setCheck("Number");
		this.appendDummyInput().appendField("と");
		this.appendStatementInput("equals").setCheck(null).appendField("等しい");
		this.appendStatementInput("not_equals").setCheck(null).appendField("等しくない");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['movable_forward_is'] = {
	init: function() {
		this.appendDummyInput().appendField("もし前に");
		this.appendStatementInput("equals").setCheck(null).appendField("進めるなら");
		this.appendStatementInput("not_equals").setCheck(null).appendField("進めないなら");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['movable_is'] = {
	init: function() {
		this.appendValueInput("direction").setCheck("Number").appendField("もし");
		this.appendDummyInput().appendField("の方へ");
		this.appendStatementInput("equals").setCheck(null).appendField("進める");
		this.appendStatementInput("not_equals").setCheck(null).appendField("進めない");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
/**
 * Advanced
 */
Blockly.Blocks['times_loop'] = {
	init: function() {
		this.appendValueInput("times")
			.setCheck("Number")
			.appendField("ここを");
		this.appendDummyInput().appendField("回くり返す");
		this.appendStatementInput("equals").setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['floor_color_loop'] = {
	init: function() {
		this.appendDummyInput().appendField("マスの色が");
		this.appendValueInput("color").setCheck("Number");
		this.appendDummyInput().appendField("の間");
		this.appendStatementInput("equals").setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['movable_loop'] = {
	init: function() {
		this.appendValueInput("direction").setCheck("Number");
		this.appendDummyInput().appendField("の方へ進める間");
		this.appendStatementInput("equals").setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

/**
 * Expert
 */
Blockly.Blocks['write_register'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("レジスター")
			.appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"], ["E","4"], ["F","5"], ["G","6"], ["H","7"]]), "register_name");
		this.appendDummyInput()
			.appendField("に");
		this.appendValueInput("register_value")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField("を入れる");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['read_register'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("レジスター")
			.appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"], ["E","4"], ["F","5"], ["G","6"], ["H","7"]]), "register_name");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(195);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['get_floor_color'] = {
	init: function() {
		this.appendDummyInput().appendField("マスの色");
		this.setOutput(true, null);
		this.setColour(195);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['get_direction'] = {
	init: function() {
		this.appendDummyInput().appendField("ロボットの向き");
		this.setOutput(true, null);
		this.setColour(195);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
/**
 * Enhanced
 */
Blockly.Blocks['values_equal_is'] = {
	init: function() {
		this.appendValueInput("value1").setCheck("Number");
		this.appendValueInput("value2").setCheck("Number")
			.appendField("と");
		this.appendDummyInput().appendField("が");
		this.appendStatementInput("equals")
			.setCheck(null)
			.appendField("等しい");
		this.appendStatementInput("not_equals")
			.setCheck(null)
			.appendField("等しくない");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['values_equal_loop'] = {
	init: function() {
		this.appendValueInput("value1").setCheck("Number");
		this.appendValueInput("value2").setCheck("Number")
			.appendField("と");
		this.appendDummyInput().appendField("が等しい間");
		this.appendStatementInput("equals").setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['infinity_loop'] = {
	init: function() {
		this.appendDummyInput().appendField("ずっとくり返す");
		this.appendStatementInput("equals").setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['is_movable_to'] = {
	init: function() {
		this.appendValueInput("direction").setCheck("Number");
		this.appendDummyInput().appendField("の方へ進めるか");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(195);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
/**
 * Superior
 */
Blockly.Blocks['add_register'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("レジスター")
			.appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"], ["E","4"], ["F","5"], ["G","6"], ["H","7"]]), "register_name")
			.appendField("を");
		this.appendValueInput("opr_value").setCheck("Number");
		this.appendDummyInput().appendField("足す");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['sub_register'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("レジスター")
			.appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"], ["E","4"], ["F","5"], ["G","6"], ["H","7"]]), "register_name")
			.appendField("を");
		this.appendValueInput("opr_value").setCheck("Number");
		this.appendDummyInput().appendField("へらす");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['add_register_index'] = {
	init: function() {
		this.appendValueInput("register_index")
			.setCheck("Number")
			.appendField("レジスターの");
		this.appendValueInput("opr_value")
			.setCheck("Number")
			.appendField("番目を");
		this.appendDummyInput().appendField("足す");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['sub_register_index'] = {
	init: function() {
		this.appendValueInput("register_index")
			.setCheck("Number")
			.appendField("レジスターの");
		this.appendValueInput("opr_value")
			.setCheck("Number")
			.appendField("番目を");
		this.appendDummyInput().appendField("へらす");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['set_register_index'] = {
	init: function() {
		this.appendValueInput("register_index")
			.setCheck("Number")
			.appendField("レジスターの");
		this.appendValueInput("opr_value")
			.setCheck("Number")
			.appendField("番目に");
		this.appendDummyInput().appendField("を入れる");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['get_register_index'] = {
	init: function() {
		this.appendValueInput("register_index")
			.setCheck("Number")
			.appendField("レジスターの");
		this.appendDummyInput().appendField("番目");
		this.setInputsInline(true);
		this.setOutput(true, null);
		this.setColour(195);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
/**
 * Replete
 */
Blockly.Blocks['read_cell_value'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("数字をレジスター")
			.appendField(new Blockly.FieldDropdown([["A","0"], ["B","1"], ["C","2"], ["D","3"], ["E","4"], ["F","5"], ["G","6"], ["H","7"]]), "register_name")
			.appendField("に入れる");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['read_cell_value_index'] = {
	init: function() {
		this.appendDummyInput().appendField("数字をレジスターの");
		this.appendValueInput("register_index").setCheck("Number");
		this.appendDummyInput().appendField("番目に入れる");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(255);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['write_cell_value'] = {
	init: function() {
		this.appendValueInput("value")
			.setCheck("Number")
			.appendField("前に");
		this.appendDummyInput().appendField("を書く");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(165);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['values_compare'] = {
	init: function() {
		this.appendValueInput("value1").setCheck("Number")
			.appendField("じょうけん");
		this.appendValueInput("value2").setCheck("Number")
			.appendField("は");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["と等しい","equals"], ["と等しくない","not_equals"], ["より大きい","larger"], ["より大きいか等しい","larger_equals"], ["より小さい","smaller"], ["より小さいか等しい","smaller_equals"]]), "opr");
		this.setInputsInline(true);
		this.setOutput(true, "Boolean");
		this.setColour(45);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['expression_if'] = {
	init: function() {
	this.appendValueInput("expression")
			.setCheck("Boolean")
			.appendField("じょうけん");
		this.appendStatementInput("equals")
			.setCheck(null)
			.appendField("なり立つ");
		this.appendStatementInput("not_equals")
			.setCheck(null)
			.appendField("なり立たない");
		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
Blockly.Blocks['expression_loop'] = {
	init: function() {
		this.appendValueInput("expression")
			.setCheck("Boolean")
			.appendField("じょうけん");
		this.appendStatementInput("equals")
			.setCheck(null)
			.appendField("なり立つ間");
		this.setInputsInline(false);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

// Converter & Check
function convertToHankaku(str) {
	return str.replace(/[０-９]/g, function(s) {
			return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	});
}
function convertToInteger(str) {
	if (str.startsWith("(ControlOneTurn('")) {
		return str;
	}
	else {
		var v = convertToHankaku(str);
		return parseInt(v);
	}
}

/**
 *	Basic
 */
Blockly.JavaScript['forward'] = function(block) {
	var code = 'ControlOneTurn(\'{"opr": "forward"}\');\n';
	return code;
};
Blockly.JavaScript['turn_right'] = function(block) {
	var code = 'ControlOneTurn(\'{"opr": "turn_right"}\');\n';
	return code;
};
Blockly.JavaScript['turn_left'] = function(block) {
	var code = 'ControlOneTurn(\'{"opr": "turn_left"}\');\n';
	return code;
};
Blockly.JavaScript['nop'] = function(block) {
	var code = 'ControlOneTurn(\'{"opr": "nop"}\');\n';
	return code;
};
/**
 *	Standard
 */
Blockly.JavaScript['floor_color_is'] = function(block) {
	var value_color = convertToInteger(Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'if(ControlOneTurn(\'{"opr": "get_floor_color"}\') == ' + value_color + ') { ' + statements_equals + ' } else { ' + statements_not_equals + ' };\n';
	return code;
};
Blockly.JavaScript['robot_direction_is'] = function(block) {
	var value_direction = convertToInteger(Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'if(ControlOneTurn(\'{"opr": "get_direction"}\') == ' + value_direction + ') { ' + statements_equals + ' } else { ' + statements_not_equals + ' };\n';
	return code;
};
Blockly.JavaScript['movable_forward_is'] = function(block) {
	var statements_equals = convertToInteger(Blockly.JavaScript.statementToCode(block, 'equals'));
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'if(ControlOneTurn(\'{"opr": "is_movable_forward"}\')) { ' + statements_equals + ' } else { ' + statements_not_equals + ' };\n';
	return code;
};
Blockly.JavaScript['movable_is'] = function(block) {
	var value_direction = convertToInteger(Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'if(ControlOneTurn(\'{"opr": "is_movable", "direction": ' + value_direction + '}\')) { ' + statements_equals + ' } else { ' + statements_not_equals + ' };\n';
	return code;
};

/**
 * Advanced
 */
Blockly.JavaScript['times_loop'] = function(block) {
	var value_times = convertToInteger(Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var loopVar = Blockly.JavaScript.variableDB_.getDistinctName('count', Blockly.VARIABLE_CATEGORY_NAME);
	var code = 'ControlOneTurn(\'{"opr": "nop"}\')\n' + 
			'for(var ' + loopVar + ' = 0; ' + 
			loopVar + ' < ' + value_times + '; ' + 
			loopVar + '++, ControlOneTurn(\'{"opr": "nop"}\')) {\n' +
			statements_equals + '\n' +
			'highlightBlock(\'' + block.id + '\');}\n';
	return code;
};
Blockly.JavaScript['floor_color_loop'] = function(block) {
	var value_color = convertToInteger(Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var code = 'while(ControlOneTurn(\'{"opr": "get_floor_color"}\') == ' + value_color + ') { ' + statements_equals + ';\nhighlightBlock(\'' + block.id + '\');}\n';
	return code;
};
Blockly.JavaScript['movable_loop'] = function(block) {
	var value_direction = convertToInteger(Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var code = 'while(ControlOneTurn(\'{"opr": "is_movable", "direction": ' + value_direction + '}\')) { ' + statements_equals + '\nhighlightBlock(\'' + block.id + '\') };\n';
	return code;
};


/**
 * Expert
 */
Blockly.JavaScript['write_register'] = function(block) {
	var dropdown_register_name = block.getFieldValue('register_name');
	var value_register_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "set_register", "target": ' + dropdown_register_name + '}\', ' + value_register_value + ');\n';
	return code;
};
Blockly.JavaScript['read_register'] = function(block) {
	var dropdown_register_name = block.getFieldValue('register_name');
	var code = 'ControlOneTurn(\'{"opr": "get_register", "target": ' + dropdown_register_name + '}\')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['get_floor_color'] = function(block) {
  var code = 'ControlOneTurn(\'{"opr": "get_floor_color"}\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['get_direction'] = function(block) {
  var code = 'ControlOneTurn(\'{"opr": "get_direction"}\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
/**
 * Enhanced
 */
Blockly.JavaScript['values_equal_is'] = function(block) {
	var value_value1 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC));
	var value_value2 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'ControlOneTurn(\'{"opr": "nop"}\');\n';
	code += 'if (' + value_value1 + ' == ' + value_value2 + '){ ' + statements_equals + ' } else { ' + statements_not_equals + ' }\n';
	return code;
};
Blockly.JavaScript['values_equal_loop'] = function(block) {
	var value_value1 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC));
	var value_value2 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var code = 'ControlOneTurn(\'{"opr": "nop"}\');\n';
	code += 'while(' + value_value1 + ' == ' + value_value2 + '){ ' + statements_equals + '\n';
	code += 'highlightBlock(\'' + block.id + '\');ControlOneTurn(\'{"opr": "nop"}\');\n}\n';
	return code;
};
Blockly.JavaScript['infinity_loop'] = function(block) {
  var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
  var code = 'ControlOneTurn(\'{"opr": "nop"}\');\n';
  code += 'while(true) { ' + statements_equals + '\n';
  code += 'highlightBlock(\'' + block.id + '\');ControlOneTurn(\'{"opr": "nop"}\');\n}\n';
  return code;
};
Blockly.JavaScript['is_movable_to'] = function(block) {
  var value_direction = convertToInteger(Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC));
  var code = 'ControlOneTurn(\'{"opr": "is_movable", "direction": ' + value_direction + '}\') ? 1 : 0';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
/**
 * Superior
 */
Blockly.JavaScript['add_register'] = function(block) {
	var dropdown_register_name = block.getFieldValue('register_name');
	var value_opr_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'opr_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "add_register", "target": ' + dropdown_register_name + '}\', ' + value_opr_value + ');\n';
	return code;
};
Blockly.JavaScript['sub_register'] = function(block) {
	var dropdown_register_name = block.getFieldValue('register_name');
	var value_opr_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'opr_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "sub_register", "target": ' + dropdown_register_name + '}\', ' + value_opr_value + ');\n';
	return code;
};
Blockly.JavaScript['add_register_index'] = function(block) {
	var value_register_index = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_index', Blockly.JavaScript.ORDER_ATOMIC));
	var value_opr_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'opr_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "add_register_index"}\', ' + value_register_index + ' ,' + value_opr_value + ');\n';
	return code;
};
Blockly.JavaScript['sub_register_index'] = function(block) {
	var value_register_index = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_index', Blockly.JavaScript.ORDER_ATOMIC));
	var value_opr_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'opr_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "sub_register_index"}\', ' + value_register_index + ', ' + value_opr_value + ');\n';
	return code;
};
Blockly.JavaScript['set_register_index'] = function(block) {
	var value_register_index = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_index', Blockly.JavaScript.ORDER_ATOMIC));
	var value_opr_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'opr_value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "set_register_index"}\', ' + value_register_index + ' , ' + value_opr_value + ');\n';
	return code;
};
Blockly.JavaScript['get_register_index'] = function(block) {
	var value_register_index = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_index', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "get_register_index"}\', ' + value_register_index + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

/**
 * Replete
 */
Blockly.JavaScript['read_cell_value'] = function(block) {
	var dropdown_register_name = block.getFieldValue('register_name');
	var code = 'ControlOneTurn(\'{"opr": "read_cell_value", "target": ' + dropdown_register_name + '}\');\n';
	return code;
};
Blockly.JavaScript['read_cell_value_index'] = function(block) {
	var value_register_index = convertToInteger(Blockly.JavaScript.valueToCode(block, 'register_index', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "read_cell_value_index"}\', ' + value_register_index + ');\n';
	return code;
};
Blockly.JavaScript['write_cell_value'] = function(block) {
	var value_value = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC));
	var code = 'ControlOneTurn(\'{"opr": "write_cell_value"}\', ' + value_value + ');\n';
	return code;
};
Blockly.JavaScript['values_compare'] = function(block) {
	var value_value1 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC));
	var value_value2 = convertToInteger(Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC));
	var dropdown_opr = block.getFieldValue('opr');
	var code = 'ControlOneTurn(\'{"opr": "values_compare", "type": "' + dropdown_opr + '"}\', ' + value_value1 + ', ' + value_value2 + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['expression_if'] = function(block) {
	var value_expression = convertToInteger(Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var statements_not_equals = Blockly.JavaScript.statementToCode(block, 'not_equals');
	var code = 'ControlOneTurn(\'{"opr": "nop"}\');if(' + value_expression + ')';
	code += '{' + statements_equals + '}';
	code += 'else{' + statements_not_equals + '}\n';
	return code;
};
Blockly.JavaScript['expression_loop'] = function(block) {
	var value_expression = convertToInteger(Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC));
	var statements_equals = Blockly.JavaScript.statementToCode(block, 'equals');
	var code = 'ControlOneTurn(\'{"opr": "nop"}\')\n';
	code += 'while(' + value_expression + ')';
	code += '{' + statements_equals + '\n';
	code += 'ControlOneTurn(\'{"opr": "nop"}\');highlightBlock(\'' + block.id + '\');}\n';
	return code;
};
