export const Li = (clase:string):HTMLLIElement=>{
    const li:HTMLLIElement=document.createElement('li')
    li.setAttribute('class',clase)
    return li
}