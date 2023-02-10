export const Main=(clase:string):HTMLElement=>{
    const main:HTMLElement=document.createElement('main')
    main.setAttribute('class',clase)
    return main
}