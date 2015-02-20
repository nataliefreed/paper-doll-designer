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
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['patternmaker_pen_color'] = function(block) {
  var colour_name = block.getFieldValue('PEN_COLOR');
  var code = 'setPenColor("' + colour_name + '");'; //I think this is in hex
  return code;
};

Blockly.JavaScript['patternmaker_pen_size'] = function(block) {
  var value_pensize = Blockly.JavaScript.valueToCode(block, 'PEN_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setPenSize(' + value_pensize + ');';
  return code;
};

Blockly.JavaScript['patternmaker_move_up'] = function(block) {
  var value_moveup = Blockly.JavaScript.valueToCode(block, 'MOVE_UP', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'moveUp(' + value_moveup + ');';
  return code;
};

Blockly.JavaScript['patternmaker_move_right'] = function(block) {
  var value_moveright = Blockly.JavaScript.valueToCode(block, 'MOVE_RIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'moveRight(' + value_moveright + ');';
  return code;
};


Blockly.JavaScript['patternmaker_setx'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setX(' + value_x + ');';
  return code;
};


Blockly.JavaScript['patternmaker_sety'] = function(block) {
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'setY(' + value_y + ');';
  return code;
};

Blockly.JavaScript['patternmaker_clear'] = function(block) {
  var code = 'clearPattern();';
  return code;
};

Blockly.JavaScript['patternmaker_draw_shape'] = function(block) {
  var dropdown_shape = block.getFieldValue('SHAPE');
  var value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('COLOR');
  var code = 'drawShape(' + dropdown_shape + ', ' + value_width + ', ' + value_height + ', ' + colour_color + ');';
  return code;
};

