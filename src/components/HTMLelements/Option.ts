export const Option=(clase:string,inner:string):HTMLOptionElement=>{
    const option:HTMLOptionElement=document.createElement('option')
    option.setAttribute('class',clase)
    option.innerHTML=inner
    return option
}