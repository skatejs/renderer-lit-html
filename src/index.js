import { withRenderer } from 'skatejs/esnext';

export const withLitHtml = Base =>
  class extends withRenderer(Base || HTMLElement) {
    rendererCallback(renderRoot, renderCallback) {
      renderCallback().renderTo(renderRoot);
    }
  };
