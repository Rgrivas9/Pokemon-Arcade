export const Button = (clase:string,inner:string):HTMLButtonElement=>{
    const button:HTMLButtonElement=document.createElement('button')
    button.setAttribute('class',clase)
    button.innerHTML=inner
    return button
}