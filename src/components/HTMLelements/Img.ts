export const Img=(clase:string,src:string,alt:string):HTMLImageElement=>{
    const img:HTMLImageElement=document.createElement('img')
    img.setAttribute('class',clase)
    img.setAttribute('src',src)
    img.setAttribute('alt',alt)
    return img
}