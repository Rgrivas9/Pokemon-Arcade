import "./home.css";
import { GameFigure } from "../../components/GameFigure";
import { setItem } from "../../utils/localStorage/setItem";
import { clean } from "../../utils/other/clean";
import { login } from "../login/login";
import {
  DivEl,
  FooterEl,
  HeaderEl,
  HeadingEl,
  MainEl,
} from "../../components/HTMLelements";
import { getItem } from "../../utils/localStorage/getItem";
import { ImgAnchor } from "../../components/buttons/ImgAnchor";
import { Pokemon } from "../../utils/fetch/data";
import { ImgButton } from "../../components/buttons/imgButton";

export const home = (pokemonList: Pokemon[]): void => {
  /* ---------------------------------------------------SETEAMOS EL LUGAR */
  const previous: string = getItem("pagePK");
  setItem("pagePK", "home");
  const body = document.querySelector<HTMLBodyElement>(
    "body"
  ) as HTMLBodyElement;
  clean(body);
  const record: string = getItem(`${getItem("userPK")}records`);
  body.setAttribute("class", record.split(",")[3]);
  /* ---------------------------------------------------REHACEMOS EL HEADER Y EL MAIN. EL FOOTER SE QUEDA IGUAL */
  const header: HTMLElement = HeaderEl("headerPrincipal");
  const main: HTMLElement = MainEl("mainPrincipal");
  const footer: HTMLElement = FooterEl("footerPrincipal");
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
  /* ---------------------------------------------------DESHACEMOS ANIMACIÓN */
  const cover: HTMLDivElement = DivEl("coverHome");
  if (previous == "login") {
    main.appendChild(cover);
    setTimeout(() => {
      cover.classList.add("nocoverHome");
    }, 200);
    setTimeout(() => {
      cover.classList.add("hidden");
    }, 500);
  }
  /* -----------------------------------------------------HEADER */
  const btnSwitch: HTMLButtonElement = ImgButton(
    "switchPrincipal",
    "",
    "",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675189215/gamesHub/paint-palette_hgwh5c.png",
    "Change color icon"
  );
  header.appendChild(btnSwitch);
  const letsPlay: HTMLHeadingElement = HeadingEl(
    2,
    "letsplay",
    `Juguemos a algo ${getItem("userPK")}`
  );
  const exitBtn: HTMLButtonElement = ImgButton(
    "exitButton",
    "",
    "",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675264883/gamesHub/salida_bspcsc.png",
    "exit icon"
  );
  header.appendChild(letsPlay);
  header.appendChild(exitBtn);
  /* ------------------------------------------------------MAIN */
  const pokemon: HTMLElement = GameFigure(
    "pokemonFigure",
    "Pokemon Battle",
    "https://res.cloudinary.com/di0zpa5yw/image/upload/v1675262466/gamesHub/pokebola_otj1s7.png",
    pokemonList
  );
  main.appendChild(pokemon);
  /* ------------------------------------------------------FOOTER */
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
  /* ------------------------------------------------------LISTENERS */
  exitBtn.addEventListener("click", () => login(pokemonList));
};
