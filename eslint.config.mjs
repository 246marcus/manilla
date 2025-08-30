import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable React escaping errors
      "react/no-unescaped-entities": "off",
      
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable image optimization warnings
      "@next/next/no-img-element": "off",
      
      // Disable missing alt text warnings
      "jsx-a11y/alt-text": "off",
      
      // Disable missing dependency warnings
      "react-hooks/exhaustive-deps": "off",
      
      // Disable prefer-const warnings
      "prefer-const": "off",
      
      // Disable require import warnings
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
