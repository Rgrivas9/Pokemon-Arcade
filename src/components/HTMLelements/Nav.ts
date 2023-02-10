export const Nav=(clase:string):HTMLElement=>{
    const nav:HTMLElement=document.createElement('nav')
    nav.setAttribute('class',clase)
    return nav
}