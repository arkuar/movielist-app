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
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-props-no-spreading": ["error", {
      "exceptions": ["input"]
    }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-associated-control": [ "error", {
      "controlComponents": ["Field"]
    }],
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