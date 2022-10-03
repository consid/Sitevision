# Sitevision component library
A react component library with different types of react components.

## Getting started

### Install the project

```
npm i @consid/sitevision-component-library
```

### Import component in JS file
```js
import { Button } from '@consid/sitevision-component-library';

const App = ({ }) => {
  return (
    <Button
      backgroundColor="darkblue"
      color="white"
      label="Click me!" />
  );
};

```

## Live demo in Storybook
[Link to live demo site](https://consid.github.io/Sitevision/)
## Available Scripts
### Build the library

```
npm run rollup
```

### Publish the library

```
npm publish --access public
```

### Run tests

```
npm run test
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build-storybook
```
### Publish Github Pages of Storybook

```
npm run deploy-storybook
```
## Authors
- [Filip Huhta](https://github.com/filiphuhta)
