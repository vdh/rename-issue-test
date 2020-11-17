/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: [
		"react",
		"filenames",
	],
	settings: {
		react: {
			version: "detect",
		},
		"import/extensions": [".js", ".jsx"],
	},
	rules: {},
	overrides: [
		{
			// Rules for React component files only (files with PascalCase)
			files: [
				"[A-Z]*.js",
				"[A-Z]*.jsx",
				"[A-Z]/index.js",
				"[A-Z]/index.jsx",
			],
			rules: {

				// Ensure export matches filename
				"filenames/match-exported": ["error", "pascal"],
			},
		},
	],
};
