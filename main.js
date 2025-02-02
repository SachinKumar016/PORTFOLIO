const scroll= new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth:true
});
let rating=[];
let i=0;
let sum=0;
function handle() {
    let ra = parseInt(prompt("Give your rating (1-5):"), 10);

    if (isNaN(ra) || ra < 1 || ra > 5) {
        alert("Please enter a valid rating between 1 and 5.");
        return;
    }

    rating.push(ra);
    sum = rating.reduce((acc, curr) => acc + curr, 0);

    let aver = sum / rating.length;
    
    let ratingElement = document.getElementsByClassName('te')[0];
    if (ratingElement) {
        ratingElement.textContent = aver.toFixed(1); // Display average rating with 1 decimal place
    }

    console.log(rating);
}
function rels() {
    // Hide the first element with class "Base"
    let baseElement = document.getElementsByClassName('Base')[0];
    if (baseElement) {
        baseElement.style.display = "none";
    }

    // Show the first element with class "result"
    let resultElement = document.getElementsByClassName('result')[0];
    if (resultElement) {
        resultElement.style.display = "block";
    }
};
function rel(){
    let baseElement = document.getElementsByClassName('result')[0];
    if (baseElement) {
        baseElement.style.display = "none";
    }

    // Show the first element with class "result"
    let resultElement = document.getElementsByClassName('Base')[0];
    if (resultElement) {
        resultElement.style.display = "block";
    }
}