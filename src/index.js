import { withRenderer } from 'skatejs/esnext';
import { render } from 'lit-html';

export const withLitHtml = Base =>
  class extends withRenderer(Base || HTMLElement) {
    rendererCallback(renderRoot, renderCallback) {
      render(renderCallback(), renderRoot);
    }
  };
