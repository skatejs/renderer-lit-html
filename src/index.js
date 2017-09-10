import { render, html, TemplateResult } from 'lit-html';

export const withRenderer = Base => {
  const ElClass = Base || HTMLElement;
  return class extends ElClass {
    rendererCallback(renderRoot, renderCallback) {
      let result = html`${renderCallback()}`;
      return render(result, renderRoot);
    }
  };
};
