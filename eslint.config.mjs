// eslint-disable-next-line unicorn/import-style
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
// Plugins
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    eslintPluginUnicorn.configs.recommended,
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "next",
        "prettier"
    ),
    ...compat.config({
        rules: {
            "react/prefer-stateless-function": "error",
            "react/button-has-type": "error",
            "react/no-unused-prop-types": "error",
            "react/jsx-pascal-case": "error",
            "react/jsx-no-script-url": "error",
            "react/no-children-prop": "error",
            "react/no-danger": "error",
            "react/no-danger-with-children": "error",
            "react/no-unstable-nested-components": [
                "error",
                { allowAsProps: true },
            ],
            "react/jsx-fragments": "error",
            "react/destructuring-assignment": [
                "error",
                "always",
                { destructureInSignature: "always" },
            ],
            "react/jsx-no-leaked-render": [
                "error",
                { validStrategies: ["ternary"] },
            ],
            "react/jsx-max-depth": ["error", { max: 5 }],
            "react/function-component-definition": [
                "warn",
                { namedComponents: "function-declaration" },
            ],
            "react/jsx-key": [
                "error",
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ],
            "react/jsx-no-useless-fragment": "warn",
            "react/jsx-curly-brace-presence": "warn",
            "react/no-typos": "warn",
            "react/display-name": "warn",
            "react/self-closing-comp": "warn",
            "react/jsx-sort-props": "warn",
            "react/react-in-jsx-scope": "off",
            "react/jsx-one-expression-per-line": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            quotes: [2, "double"],
            semi: [2, "always"],
            "unicorn/better-regex": "warn",
        },
    }),
];

export default eslintConfig;
