export const num: number = 0;
import { character } from "./getChar";
interface Stats {
  name: string;
  base: number;
}
export interface Hability {
  name: string;
  description: string;
}
export interface Moves {
  name: string;
  type: string;
  accuracy: any;
}
export interface Images {
  front: string;
  back: string;
  main: string;
  shiny: string;
}
export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  stats: Stats[];
  type: string[];
  habilities: Hability[];
  moves: Moves[];
  images: Images;
}

export const getPokemons = async (n:number,m:number) => {
  const body = document.querySelector<HTMLBodyElement>('body') as HTMLBodyElement
  const img:HTMLImageElement= document.createElement('img')
  img.setAttribute('src','https://res.cloudinary.com/di0zpa5yw/image/upload/v1675693289/gamesHub/mewgif_mx5wq6.gif')
  const div:HTMLDivElement=document.createElement('div')
  div.setAttribute('class','spinner')
  div.innerHTML='<p>Cargando...</>'
  div.appendChild(img)
  body.appendChild(div)
  const promises = []
  while (n < m) {
    n++;
    const pokemon: Promise<Pokemon> = character(n);
    promises.push(pokemon);
  }
  const pokemonListResponse = await Promise.allSettled(promises)
  const pokemonList: Pokemon[] = pokemonListResponse.map((promise: any)=>promise.value);
  body.removeChild(div)
  return pokemonList;
};

