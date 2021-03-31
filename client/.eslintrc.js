module.exports = {
  env: {
    "browser": true,
    "es6": true
  },
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {
    "react/prop-types": "off"
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  parserOptions: {
    "tsconfigRootDir": __dirname,
    "project": "tsconfig.json"
  }
}