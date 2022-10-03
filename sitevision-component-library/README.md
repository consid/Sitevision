# React Components Archive
A react component library with differnt types of react components.

## Getting started

### Install the project

```
npm i react-components-archive
```

### Import component in JS file
```js
import { Button } from 'react-components-archive';

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


