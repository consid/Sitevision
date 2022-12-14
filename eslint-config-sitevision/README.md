# Eslint Config 

## Getting started

### Install the project

```
npm i @consid/eslint-config-sitevision
```
### Add the linting configuration:
In [WebApps](https://developer.sitevision.se/docs/webapps/webapps-2/getting-started) and [RestApps](https://developer.sitevision.se/docs/rest-api/restapps) you need to add the linting that should be used. You will need to extend the configuration ***@consid/eslint-config-sitevision*** in your ***package.json*** file. 
```json
"eslintConfig": {
    "extends": [
      "@sitevision/eslint-config-recommended",
      "@sitevision/eslint-config-webapp-react",
      "@consid/eslint-config-sitevision"
    ]
  },
```

You will now use Consids default [EsLint](https://eslint.org/) configuration.

## Linting rules
There is several rules in this npm package. The rules that is used is listed under **Warnings** / **Error**. 
### Warnings 

[semi ](https://eslint.org/docs/latest/rules/semi) 

[prefer-spread ](https://eslint.org/docs/latest/rules/prefer-spread)

[indent ](https://eslint.org/docs/latest/rules/indent)

[arrow-spacing ](https://eslint.org/docs/latest/rules/arrow-spacing)

[comma-spacing ](https://eslint.org/docs/latest/rules/comma-spacing)

[key-spacing ](https://eslint.org/docs/latest/rules/key-spacing)

[max-statements-per-line ](https://eslint.org/docs/latest/rules/max-statements-per-line)

[array-bracket-spacing ](https://eslint.org/docs/latest/rules/array-bracket-spacing)

[object-curly-spacing ](https://eslint.org/docs/latest/rules/object-curly-spacing)

[operator-linebreak ](https://eslint.org/docs/latest/rules/operator-linebreak)

[linebreak-style ](https://eslint.org/docs/latest/rules/linebreak-style)

[quotes ](https://eslint.org/docs/latest/rules/quotes)

### Error 

[func-names ](https://eslint.org/docs/latest/rules/func-names)

[prefer-arrow-callback ](https://eslint.org/docs/latest/rules/prefer-arrow-callback)

[no-use-before-define ](https://eslint.org/docs/latest/rules/no-use-before-define)

[no-unreachable-loop ](https://eslint.org/docs/latest/rules/no-unreachable-loop)

[no-floating-decimal ](https://eslint.org/docs/latest/rules/no-floating-decimal)

[dot-notation ](https://eslint.org/docs/latest/rules/dot-notation)

[no-empty-function ](https://eslint.org/docs/latest/rules/no-empty-function)

[func-style ](https://eslint.org/docs/latest/rules/func-style)

[no-var ](https://eslint.org/docs/latest/rules/no-var)


## Ignore files from being linted
You can ignore files from being linted in ***package.json***.
```json
"eslintConfig": {
       "ignorePatterns": ["src/", "index.js"]
  },

```
## Authors
- [Alexander Lesser](https://github.com/alexanderlesser)
- [Filip Huhta](https://github.com/filiphuhta)
