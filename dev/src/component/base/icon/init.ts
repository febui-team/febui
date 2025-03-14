import { FIconPath } from "@/types/icon";

let __svg: SVGAElement | null = null;
const SVG_ELE_ID = "feb-ui-svg-symbol-container";
export class FebIconSymbol {
  private _name: string

  public get id() {
    return this._name
  }

  constructor(name: string, path: FIconPath | FIconPath[]) {
    this._name = 'feb-ui-svg-symbol-' + name;
    if (!__svg) __svg = document.getElementById(SVG_ELE_ID) as unknown as SVGAElement;
    if (!__svg) {
      __svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as unknown as SVGAElement;
      __svg.setAttribute("id", SVG_ELE_ID);
      __svg.setAttribute("aria-hidden", "true");
      __svg.setAttribute(
        "style",
        "position: absolute; width: 0px; height: 0px; overflow: hidden;"
      );
      document.body.insertBefore(__svg, document.body.children.item(0));
    }
    const sameNameSymbol = __svg.querySelector('#' + this._name)
    if (sameNameSymbol) return
    const pathStr = Array.isArray(path)
      ? path.map((p) => `<path d="${p.d}" fill="${p.fill} p-id="${p.id}"></path>`).join('')
      : `<path d="${path.d}"${path.fill ? ` fill=${path.fill}` : ""}${path.id ? ` p-id=${path.id}` : ""}></path>`
    __svg.innerHTML += `<symbol id="${this._name}" viewBox="0 0 1024 1024">${pathStr}</symbol>`;
  }
}
