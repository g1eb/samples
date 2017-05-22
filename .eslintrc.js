module.exports = {
    "env": {
        "browser": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    }
};
