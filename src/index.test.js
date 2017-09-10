import { withRenderer } from ".";

class MyElement extends withRenderer() {
  renderCallback({ name }) {
    return `<div>Hello, ${name}!</div>`;
  }
}
customElements.define("my-element", MyElement);

describe("@skatejs/renderer-lit-html", () => {
  it("renders", () => {
    const el = new MyElement();
    expect(el.innerHTML).toEqual("");
    el.rendererCallback(el, el.renderCallback.bind(el, { name: "World" }));
    expect(el.innerHTML).toEqual("<div>Hello, World!</div>");
    el.rendererCallback(el, el.renderCallback.bind(el, { name: "Bob" }));
    expect(el.innerHTML).toEqual("<div>Hello, Bob!</div>");
  });
});