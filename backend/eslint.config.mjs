import { Linter } from "eslint";

/** @type {Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.ts"], // Archivos TypeScript
    ignores: ["node_modules/", "dist/"], // Carpeta ignorada
    languageOptions: {
      parser: "@typescript-eslint/parser", // Parser para TypeScript
      sourceType: "module", // Soporte para ESM (import/export)
      ecmaVersion: "latest", // Últimas características de ECMAScript
    },
    plugins: ["@typescript-eslint", "import"], // Plugins activos
    rules: {
      // Reglas generales
      "no-console": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "always", // Requiere extensión `.ts` en imports
        },
      ],
      "import/no-unresolved": "off", // TypeScript ya maneja resolución de imports

      // Reglas específicas de TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
