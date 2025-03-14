const promise = new Promise((resolve) => {
  window.addEventListener('DOMContentLoaded',() => {
    resolve();
  });
});
export function addSymbol(symbol) {
  promise.then(() => {
    const id = "feb-ui-svg-symbol-container";
    if (!addSymbol.__svg) addSymbol.__svg = document.getElementById(id);
    if (!addSymbol.__svg) {
      addSymbol.__svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
      addSymbol.__svg.setAttribute("id", id);
      addSymbol.__svg.setAttribute("aria-hidden", "true");
      addSymbol.__svg.setAttribute(
        "style",
        "position: absolute; width: 0px; height: 0px; overflow: hidden;"
      );
      document.body.insertBefore(
        addSymbol.__svg,
        document.body.children.item(0)
      );
    }
    addSymbol.__svg.innerHTML += symbol;
  });
}
