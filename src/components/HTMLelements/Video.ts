export const Video=(clase:string,src:string,alt:string):HTMLVideoElement=>{
    const video:HTMLVideoElement=document.createElement('video')
    video.setAttribute('class',clase)
    video.setAttribute('src',src)
    video.setAttribute('alt',alt)
    return video
}