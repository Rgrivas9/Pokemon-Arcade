import { AnchorEl, HeadingEl, ImgEl } from "../HTMLelements";

export const ImgAnchor = (
  clase: string,
  href: string,
  src: string,
  alt: string,
  inner: string,
  order: number
): HTMLAnchorElement => {
  const anchor: HTMLAnchorElement = AnchorEl(clase, href);
  const img: HTMLImageElement = ImgEl("", src, alt);
  const h4:HTMLHeadingElement = HeadingEl(4, "", inner);
  if (order === 0) {
    anchor.appendChild(img);
    anchor.appendChild(h4);
  }
  if (order === 1) {
    anchor.appendChild(h4);
    anchor.appendChild(img);
  }
  return anchor;
};
