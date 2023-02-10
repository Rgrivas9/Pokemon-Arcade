export const Section=(clase:string):HTMLElement=>{
    const section:HTMLElement=document.createElement('section')
    section.setAttribute('class',clase)
    return section
}