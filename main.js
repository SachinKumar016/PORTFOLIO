const scroll= new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth:true
});
rating=[];
function handle(){
    let ra=prompt("Give your rating (1-5):")
    if(ra===null){
        break;
    }
    rating.push(ra)
}
console.log(rating)