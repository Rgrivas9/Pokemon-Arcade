import "./login.css";
import {
  FooterEl,
  HeaderEl,
  MainEl,
  HeadingEl,
  InputEl,
  ButtonEl,
  DivEl,
} from "../../components/HTMLelements";
import { ImgButton } from "../../components/buttons/imgButton";
import { setItem } from "../../utils/localStorage/setItem";
import { clean } from "../../utils/other/clean";
import { ImgAnchor } from "../../components/buttons/ImgAnchor";
import { checkUser } from "../../utils/other/checkUser";
import { logOut } from "../../utils/events/logOut";
import { startlogIn } from "../../utils/events/startlogIn";
import { getItem } from "../../utils/localStorage/getItem";
import { Pokemon } from "../../utils/fetch/data";

export const login = (pokemonList:Pokemon[]): void => {
  /* ---------------------------------------------------------RESETEAMOS EL BODY */
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  clean(body);
  /* ---------------------------------------------------------SETEAMOS EL COLOR ELEGIDO POR EL USUARIO */
  const record: string = getItem(`${getItem("userPK")}records`)
  record ? body.setAttribute("class", record.split(',')[3]) : body.setAttribute("class", "bugpoison")
  
  /* ---------------------------------------------------------SETEAMOS EL LUGAR EN EL LOCAL STORAGE */
  setItem("pagePK", "login");
  /* ---------------------------------------------------------CREAMOS EL HEADER, MAIN Y FOOTER */
  const header: HTMLElement = HeaderEl("headerPrincipal");
  const main: HTMLElement = MainEl("mainPrincipal");
  const footer: HTMLElement = FooterEl("footerPrincipal");
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
  /* ----------------------------------------------------------HEADER */
  const btnSwitch: HTMLButtonElement = ImgButton(
    "switchPrincipal",
    "",
    "",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675189215/gamesHub/paint-palette_hgwh5c.png",
    "Change color icon"
  );
  header.appendChild(btnSwitch);
  /* ----------------------------------------------------------MAIN */
  const h1: HTMLHeadElement = HeadingEl(1, "h1Login", "Pokemon arcade");
  const divInput: HTMLDivElement = DivEl("divLogin");
  const input: HTMLInputElement = InputEl("inputLogin", "Introduce tu nombre");
  input.value = getItem("userPK");
  const logout: HTMLButtonElement = ImgButton(
    "logoutLogin",
    "",
    "",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675277789/gamesHub/cerrar-sesion_npnjo3.png",
    "logout icon"
  );
  const welcome: HTMLHeadingElement = HeadingEl(
    3,
    "welcome",
    `Bienvenido ${getItem("userPK")}!`
  );
  divInput.appendChild(welcome);
  divInput.appendChild(input);
  divInput.appendChild(logout);
  checkUser([input], [welcome, logout]);
  const startButton: HTMLButtonElement = ButtonEl("startLogin", "Start");
  startButton.removeAttribute('disabled')
  main.appendChild(h1);
  main.appendChild(divInput);
  main.appendChild(startButton);
  /* ---------------------------------------------------------FOOTER */
  const anchor1: HTMLAnchorElement = ImgAnchor(
    "github",
    "https://github.com/Rgrivas9",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/github_cxjker.png",
    "Github icon",
    "GitHub",
    0
  );
  const anchor2: HTMLAnchorElement = ImgAnchor(
    "vercel",
    "https://vercel.com/rgrivas9",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675183434/gamesHub/vercel_xqulbz.png",
    "Vercel icon",
    "Vercel",
    1
  );
  footer.appendChild(anchor1);
  footer.appendChild(anchor2);
  /* ---------------------------------------------------------LISTENERS */
  startButton.addEventListener("click", () => startlogIn(input.value,main,logout,pokemonList));
  logout.addEventListener("click", () => logOut([input], [welcome, logout]));
};
