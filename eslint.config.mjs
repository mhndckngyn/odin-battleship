import globals from "globals";
import pluginJs from "@eslint/js";

module.exports = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
