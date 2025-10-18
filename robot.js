var Robot = function() {
};
Robot.prototype = {
	"type": 0,
	"direction": 0,
	"life": 0,
	"registers": {
		"A": 0,
		"B": 0,
		"C": 0,
		"D": 0,
		"E": 0,
		"F": 0,
		"G": 0,
		"H": 0
	},
	"registers_index": [
		"A", "B", "C", "D", "E", "F", "G", "H"
	],
	"position": {
		"x": 0,
		"y": 0
	},
	"type_dic": {
		"Basic": 0,
		"Standard": 1,
		"Advanced": 2,
		"Expert": 3,
		"Enhanced": 4,
		"Superior": 5,
		"Replete": 6,
		"Master": 7
	},
	"direction_dic": {
		"up": 0,
		"right": 1,
		"down": 2,
		"left": 3
	},
	"direction_image": {
		"up": "up.png",
		"right": "right.png",
		"down": "down.png",
		"left": "left.png"
	},
	"ghost_image": {
		"up": "up_s.png",
		"right": "right_s.png",
		"down": "down_s.png",
		"left": "left_s.png"
	}
};
/**
 * 数字から向きの文字を取得
 */
Robot.prototype.getDirectionName = function(value) {
	switch(value) {
		case 0:
			return "up";
			break;
		case 1:
			return "right";
			break;
		case 2:
			return "down";
			break;
		case 3:
			return "left";
			break;
		default:
			return "up";
	}
};
/**
 * ロボットの画像を取得
 */
Robot.prototype.getImage = function() {
	return Robot.prototype.direction_image[Robot.prototype.getDirectionName(Robot.prototype.direction)];
};
/**
 * ロボットのゴーストの画像を取得
 */
Robot.prototype.getGhost = function(dir) {
	return Robot.prototype.ghost_image[Robot.prototype.getDirectionName(dir)];
};
/**
 * レジスターを初期化する
 */
Robot.prototype.initRegisters = function() {
	var ptr = Robot.prototype.registers;
	ptr.A = 0;
	ptr.B = 0;
	ptr.C = 0;
	ptr.D = 0;
	ptr.E = 0;
	ptr.F = 0;
	ptr.G = 0;
	ptr.H = 0;
};

/**
 * レジスター名を数値から取得する
 */
Robot.prototype.getRegisterName = function(value) {
	return Robot.prototype.registers_index[value];
};
