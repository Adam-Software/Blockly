/**
 * @license
 * Copyright 2023 Adam LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * @fileoverview System call blocks for Blockly.
 * @suppress {checkTypes}
 */

'use strict';

goog.module('Blockly.libraryBlocks.systemCall');

const {createBlockDefinitionsFromJsonArray, defineBlocks} = goog.require('Blockly.common');

const blocks = createBlockDefinitionsFromJsonArray([
  // systems_os_system
  {
    "type": "systems_os_system",
    "message0": "os.systems() %1",
    "args0": [
      {
        "type": "input_value",
        "name": "param",
        "check": "String",
      },
    ],
    "output": null,
    "colour": 230,
    "tooltip": "Модуль подпроцесса позволяет создавать новые процессы, подключаться к их каналам ввода/вывода/ошибок и получать их коды возврата.",
    "helpUrl": "https://docs.python.org/3/library/os.html#os.system",
  },

  // systems_subprocess_call
  {
    "type": "systems_subprocess_call",
    "lastDummyAlign0": "RIGHT",
    "message0": "subprocess.call() %1 shell %2",
    "args0": [
      {
        "type": "input_value",
        "name": "param",
        "check": "String",
      },
      {
        "type": "field_checkbox",
        "name": "shell",
        "checked": true,
      },
    ],
    "inputsInline": false,
    "output": null,
    "colour": 230,
    "tooltip": "Модуль подпроцесса позволяет создавать новые процессы, подключаться к их каналам ввода/вывода/ошибок и получать их коды возврата.",
    "helpUrl": "https://docs.python.org/3/library/subprocess.html",
  },
]);
exports.blocks = blocks;

// Register provided blocks.
defineBlocks(blocks);
