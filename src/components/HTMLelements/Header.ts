export const Header = (clase:string):HTMLElement=>{
    const header:HTMLElement=document.createElement('header')
    header.setAttribute('class',clase)
    return header
}