export const Div=(clase:string):HTMLDivElement=>{
    const div:HTMLDivElement=document.createElement('div')
    div.setAttribute('class',clase)
    return div
}