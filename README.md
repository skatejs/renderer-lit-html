# skatejs/renderer-lit-html

*NOTE!!! This is not published to NPM yet and is not final. Once https://github.com/skatejs/skatejs/pull/1218 is merged, this will be officially released!*

> SkateJS renderer for [LitHTML](https://github.com/PolymerLabs/lit-html).

## Install

```sh
npm install @skatejs/renderer-lit-html lit-html skatejs
```

## Usage

```js
import { props, withProps } from './node_modules/skatejs/esnext/with-props.js';
import { withLitHtml } from './node_modules/@skatejs/renderer-lit-html/esnext/index.js';
import { html } from './node_modules/lit-html/lib/lit-html.js';

class Hello extends withComponent(withLitHtml()) {
  renderCallback ({ name }) {
    return html`<div>Hello, ${name}!</div>`;
  }
}

Hello.props = {
  name: { ...props.string, ...{ default: 'World' } }
};
```
