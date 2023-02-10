import { ButtonEl, ImgEl } from "../HTMLelements/index";

export const ImgButton = (
  claseBtn: string,
  inner: string,
  claseImg: string,
  src: string,
  alt: string
): HTMLButtonElement => {
  const btn: HTMLButtonElement = ButtonEl(claseBtn, inner);
  const img: HTMLImageElement = ImgEl(claseImg, src, alt);
  btn.appendChild(img);
  return btn;
};
