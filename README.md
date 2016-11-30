# react-flexbox-grid-aphrodite

Inline Flexbox Grid for React

[![npm version](https://badge.fury.io/js/react-flexbox-grid-aphrodite.svg)](https://badge.fury.io/js/react-flexbox-grid-aphrodite) [![NPM Status](http://img.shields.io/npm/dm/react-flexbox-grid-aphrodite.svg?style=flat-square)](https://www.npmjs.org/package/react-flexbox-grid-aphrodite)

React-Flexbox-Grid-Aphrodite is a set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ). Instead of using css and worrying about css modules and webpack we used some JS functions to generate all of the CSS found in the flexboxgrid library. We then load that JS into [aphrodite](https://github.com/Khan/aphrodite) which then will only pull the classes you need into the dom. This means less overhead and less data sent over the wire that its css counterpart.

## Installation

React-Flexbox-Grid can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox-grid):

```
npm i -S react-flexbox-grid-aphrodite
```

It has peer dependency requirements on `react` and `aphrodite` modules, which can be installed and added to the package manifest like so:

```
npm i -S react aphrodite
```

Once you have the workflow ready, you can just require and use the components:

```jsx
import React from 'react'
import { Grid } from 'react-flexbox-grid-aphrodite'

React.render(<Grid />, document.querySelector('#main'))
```

## Code snippets

```jsx
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

const MyComponent = () => (
  <Grid>
    <Row>
      <Col xs={6} md={3}>Hello, world!</Col>
    </Row>
  </Grid>
);
```

## Contributors

- [@patrickml](https://github.com/patrickml)
- [@koleok](https://github.com/koleok)

## Credits

- [https://github.com/roylee0704/react-flexbox-grid]() for the original react components

## License

MIT
