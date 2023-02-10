export const Select=(clase:string):HTMLSelectElement=>{
    const select:HTMLSelectElement=document.createElement('select')
    select.setAttribute('class',clase)
    return select
}