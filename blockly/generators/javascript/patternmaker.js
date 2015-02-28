/**
 * Custom drawing blocks for the paper doll designer
  Stripe block: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#by25u6
 */
'use strict';

goog.provide('Blockly.JavaScript.patternmaker');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['patternmaker_stripe'] = function(block) {
  var angle = block.getFieldValue('ANGLE');
  var code = "addStripe(" + angle + ");";
  return code;
};

Blockly.JavaScript['patternmaker_start'] = function(block) {
  var theCode = Blockly.JavaScript.statementToCode(block, 'RUN');
  return theCode;
};

Blockly.JavaScript['patternmaker_pen_color'] = function(block) {
  var colour_code = Blockly.JavaScript.valueToCode(block, 'PEN_COLOR', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setPenColor(' + colour_code + ');'; //in hex?
  return code;
};

Blockly.JavaScript['patternmaker_pen_size'] = function(block) {
  var value_pensize = Blockly.JavaScript.valueToCode(block, 'PEN_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setPenSize(' + value_pensize + ');';
  return code;
};

Blockly.JavaScript['patternmaker_repeatAcross'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');

  // Repeat n times (external number).
  var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
          Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  // spacing between items
  var spacing = Blockly.JavaScript.valueToCode(block, 'SPACING',
          Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

  if(direction === "DOWN") {
    var directionCode = 'moveDown(' + spacing + ');';
    var returnCode = 'moveDown(' + -1*spacing*repeats + ');';
  }
  else  if(direction === "UP") {
    spacing = -1 * spacing;
    var directionCode = 'moveDown(' + spacing + ');';
    var returnCode = 'moveDown(' + -1*spacing*repeats + ');';
  }
  else  if(direction === "LEFT") {
    spacing = -1 * spacing;
    var directionCode = 'moveRight(' + spacing + ');';
    var returnCode = 'moveRight(' + -1*spacing*repeats + ');';
  }
  else  if(direction === "RIGHT") {
    var directionCode = 'moveRight(' + spacing + ');';
    var returnCode = 'moveRight(' + -1*spacing*repeats + ');';
  }
  else {
    var directionCode = "";
    var returnCode = "";
  }

  var branch = Blockly.JavaScript.statementToCode(block, 'RUN');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  var code = '';
  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
  loopVar + ' < ' + endVar + '; ' +
  loopVar + '++) {\n' +
  branch +
  directionCode + '\n' + '}\n' + returnCode + '\n';
  return code;
}

Blockly.JavaScript['patternmaker_move_direction'] = function(block) {
  var dropdown_location = block.getFieldValue('DIRECTION');
  var value_move = Blockly.JavaScript.valueToCode(block, 'STEPS', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_move.length <= 0) {
    value_move = 0;
  }
  var code = "move(\'" + dropdown_location + "\'" + "," + value_move + ');';
  return code;
};


Blockly.JavaScript['patternmaker_setxy'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_x.length <= 0 || value_y.length <= 0) {
    var code = "";
  }
  else {
    var code = 'goToXY(' + value_x + ', ' + value_y + ');';
  }
  return code;
};

Blockly.JavaScript['patternmaker_goTo'] = function(block) {
  var dropdown_location = block.getFieldValue('LOCATION');
  var code = "goToLocation(" + "\'" + dropdown_location + "\');";
  return code;
};

Blockly.JavaScript['patternmaker_clear'] = function(block) {
  var code = 'clearPattern();';
  return code;
};

Blockly.JavaScript['patternmaker_draw_shape'] = function(block) {
  var dropdown_shape = block.getFieldValue('SHAPE');
  var code = "drawShape(" + "\'" + dropdown_shape + "\');";
  return code;
};

