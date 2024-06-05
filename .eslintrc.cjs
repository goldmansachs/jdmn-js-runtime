module.exports = {
    "extends": "eslint:recommended",
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "env": {
      "jest/globals": true,
      "jasmine": true
    },
    "rules": {
        // enable additional rules
        "no-mixed-spaces-and-tabs": ["off"],
        "indent": ["error", 4],
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],

        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "for-direction": "off",
    }
};