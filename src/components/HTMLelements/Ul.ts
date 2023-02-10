export const Ul = (clase:string):HTMLUListElement=>{
    const ul:HTMLUListElement=document.createElement('ul')
    ul.setAttribute('class',clase)
    return ul
}