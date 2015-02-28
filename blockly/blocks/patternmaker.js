/**
 * Drawing blocks for paper doll designer
 */
'use strict';

goog.provide('Blockly.Blocks.patternmaker');

goog.require('Blockly.Blocks');

Blockly.Blocks['patternmaker_stripe'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendDummyInput()
        .appendField("draw ")
        .appendField(new Blockly.FieldAngle("0"), "ANGLE")
        .appendField("stripe")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['patternmaker_repeatAcross'] = {
    init: function() {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(43);
        this.appendDummyInput()
            .appendField("Repeat")
            .appendField(new Blockly.FieldDropdown([["down", "DOWN"], ["up", "UP"], ["right", "RIGHT"], ["left", "LEFT"]]), "DIRECTION");
        this.appendValueInput("TIMES")
            .setCheck("Number")
            .appendField("how many times:");
        this.appendValueInput("SPACING")
            .setCheck("Number")
            .appendField("space in between:");
        this.appendStatementInput('RUN');
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['patternmaker_start'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(197);
    this.appendDummyInput()
        .appendField("when Run Code clicked:");
    this.appendStatementInput('RUN');
    this.setInputsInline(true);
    this.setNextStatement(false);
    this.setTooltip('');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3y4338
Blockly.Blocks['patternmaker_pen_color'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendValueInput("PEN_COLOR")
        .appendField("set pen color to");
        //.appendField(new Blockly.FieldColour("#009900"), "PEN_COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yeduge
Blockly.Blocks['patternmaker_pen_size'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendValueInput("PEN_SIZE")
        .setCheck("Number")
        .appendField("set pen size to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }

};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nnbxts
Blockly.Blocks['patternmaker_move_direction'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["down", "DOWN"], ["right", "RIGHT"], ["up", "UP"], ["left", "LEFT"]]), "DIRECTION");
    this.appendValueInput("STEPS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("spaces");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#insmq3
Blockly.Blocks['patternmaker_setxy'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("set x: ");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField(" y: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bke78f
Blockly.Blocks['patternmaker_goTo'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(225);
    this.appendDummyInput()
        .appendField("go to")
        .appendField(new Blockly.FieldDropdown([["left shoulder", "LEFT_SHOULDER"], ["right shoulder", "RIGHT_SHOULDER"]]), "LOCATION");
            //.appendField(new Blockly.FieldDropdown([["left shoulder", "LEFT_SHOULDER"], ["right shoulder", "RIGHT_SHOULDER"], ["waist", "WAIST"], ["knees", "KNEES"], ["left toe", "LEFT_TOE"], ["right toe", "RIGHT_TOE"]]), "LOCATION");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['patternmaker_clear'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendDummyInput()
        .appendField("clear");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bke78f
Blockly.Blocks['patternmaker_draw_shape'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendDummyInput()
        .appendField("draw")
        .appendField(new Blockly.FieldDropdown([["star", "STAR"], ["circle", "CIRCLE"], ["diamond", "DIAMOND"], ["triangle", "TRIANGLE"]]), "SHAPE");
        //.appendField(new Blockly.FieldDropdown([["star", "STAR"], ["rectangle", "RECTANGLE"], ["circle", "CIRCLE"], ["diamond", "DIAMOND"], ["heart", "HEART"], ["triangle", "TRIANGLE"]]), "SHAPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};