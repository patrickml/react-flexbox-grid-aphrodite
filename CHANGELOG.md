# Release notes

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

## 1.0.5

- Allow passing extra aphrodite style object to `Grid`, `Row`, or `Col` through
  the `styles` props. You can still pass `classNames` that will be appended, but
  using `styles` is encouraged over passing extra `classNames` to extend styles.
  https://github.com/patrickml/react-flexbox-grid-aphrodite/pull/10
- Fixed generated container styles
  https://github.com/patrickml/react-flexbox-grid-aphrodite/pull/8
- Added support for column order, eg. `<Col xsFirst lgLast>`
  https://github.com/patrickml/react-flexbox-grid-aphrodite/pull/9
