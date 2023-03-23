/**
 * @license
 * Copyright 2023 Adam LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * @fileoverview Generating Python for system_call blocks.
 */
'use strict';

goog.module('Blockly.Python.system_call');

const {NameType} = goog.require('Blockly.Names');
const {pythonGenerator: Python} = goog.require('Blockly.Python');

// If any new block imports any library, add that library name here.
Python.addReservedWords('os, subprocess, sh, ls, app, bno055_webgl.server');

// systems_os_system
Python['systems_os_system'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  var value_param = Blockly.Python.valueToCode(block, 'param', Blockly.Python.ORDER_NONE);
  var code = 'os.system(' + value_param + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

// common_app_echo
Python['systems_subprocess_call'] = function(block) {
  Blockly.Python.definitions_['import_subprocess'] = 'import subprocess';
  var value_param = Blockly.Python.valueToCode(block, 'param', Blockly.Python.ORDER_NONE);
  var checkbox_shell = (block.getFieldValue('shell') == 'TRUE') ? 'True' : 'False';
  var code = 'subprocess.call(' + value_param + ', ' + 'shell=' + checkbox_shell +')';
  return [code, Blockly.Python.ORDER_NONE];
};