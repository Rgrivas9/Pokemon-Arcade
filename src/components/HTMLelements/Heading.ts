export const Heading=(type:number,clase:string,inner:string):HTMLHeadingElement=>{
    const heading:HTMLHeadingElement=document.createElement(`h${type}`) as HTMLHeadingElement
    heading.setAttribute('class',clase)
    heading.innerHTML=inner
    return heading
}