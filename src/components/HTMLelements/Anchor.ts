export const Anchor = (clase:string,href:string):HTMLAnchorElement=>{
    const a:HTMLAnchorElement=document.createElement('a')
    a.setAttribute('class',clase)
    a.setAttribute('href',href)
    a.setAttribute('target',"_blank")
    return a
}