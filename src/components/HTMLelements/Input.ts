export const Input=(clase:string,place:string):HTMLInputElement=>{
    const input:HTMLInputElement=document.createElement('input')
    input.setAttribute('class',clase)
    input.setAttribute('placeholder',place)
    return input
}