import { pokeapi } from "../pages/pokedex/pokeapi";
import { getItem } from "../utils/localStorage/getItem";
import { setItem } from "../utils/localStorage/setItem";
import { ButtonEl, DivEl, HeadingEl, ImgEl } from "./HTMLelements";
import { Pokemon } from "../utils/fetch/data";

export const GameFigure = (
  clase: string,
  name: string,
  src: string,
  pokemonList:Pokemon[]
): HTMLElement => {
  const record: string[] = getItem(`${getItem("userPK")}records`).split(',')
  const fig: HTMLElement = document.createElement("figure");

  const img: HTMLImageElement = ImgEl("figureimg", src, `${name} image`);
  const div: HTMLDivElement = DivEl("");
  const h2: HTMLHeadingElement = HeadingEl(2, "", name);
  const score: HTMLHeadingElement = HeadingEl(3, `${name}score`, "");
  record[0]=='Easy' ? score.innerHTML=`Record: ${record[1]}` : score.innerHTML=`Record: ${record[2]}` 
  const difficulty: HTMLButtonElement = ButtonEl("difficultyHome", `${record[0]}`);
  fig.appendChild(img);
  fig.appendChild(h2);
  div.appendChild(score);
  div.appendChild(difficulty);
  fig.appendChild(div);
  fig.setAttribute("class", clase);
  difficulty.addEventListener("click", () => {
    difficulty.innerHTML == "Easy"
      ? (difficulty.innerHTML = "Hard")
      : (difficulty.innerHTML = "Easy");
    record[0]=difficulty.innerHTML 
    setItem(`${getItem("userPK")}records`,record.toString()) 
    record[0]=='Easy' ? score.innerHTML=`Record: ${record[1]}` : score.innerHTML=`Record: ${record[2]}`
  });
  img.addEventListener('click',()=>{
    setItem('PKDif',record[0])
    pokeapi(pokemonList)})
  return fig
};
