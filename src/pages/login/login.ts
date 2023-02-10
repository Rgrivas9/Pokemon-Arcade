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
import { globalRandomNumber } from "../../utils/other/randomNumber";

export const login = (pokemonList: Pokemon[]): void => {
  /* ---------------------------------------------------------RESETEAMOS EL BODY */
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  clean(body);
  /* ---------------------------------------------------------SETEAMOS EL COLOR ELEGIDO POR EL USUARIO */
  const typelist: string[][] = [];
  const types: string[][] = [];
  for (const pokemon of pokemonList) {
    typelist.push(pokemon.type);
  }
  let index = 0;
  typelist.sort();
  for (const type of typelist) {
    index++;
    if (index != typelist.length) {
      if (type[0] !== typelist[index][0] || type[1] !== typelist[index][1]) {
        types.push(type);
      }
    }
  }
  const record: string = getItem(`${getItem("userPK")}records`);
  if (record) {
    body.setAttribute("class", record.split(",")[3]);
  } else {
    const color:string[]=types[globalRandomNumber(types.length) - 1]
    color.length==1 ? body.setAttribute('class',color[0]) : body.setAttribute('class',color.join(''))
    color.length==1 ? setItem('colorPK',color[0]) : setItem('colorPK',color.join(''))
  }

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
  startButton.removeAttribute("disabled");
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
  startButton.addEventListener("click", () =>{
    btnSwitch.setAttribute('disabled','true')
    startlogIn(input.value, main, logout, pokemonList,types)}
  );
  logout.addEventListener("click", () => logOut([input], [welcome, logout]));
  btnSwitch.addEventListener("click", () => {
    const color:string[]=types[globalRandomNumber(types.length) - 1]
    let colour:string=''
    color.length==1 ? colour=color[0] : colour=color.join('')
    body.setAttribute('class',colour)
    setItem('colorPK',colour)
  });
  window.addEventListener("keydown", (ev) => {
    if (localStorage.getItem('pagePK')=='login'){
    if (ev.which === 13) {
      btnSwitch.setAttribute('disabled','true')
      startlogIn(input.value, main, logout, pokemonList,types)}}
  });
};
