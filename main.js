const scroll= new LocomotiveScroll({
    el:document.querySelector('[data-scroll-container]'),
    smooth:true
});
const rating = JSON.parse(localStorage.getItem("ratings")) || [];
let sum = rating.reduce((acc, curr) => acc + curr, 0);

// Function to update the displayed average rating
function updateAverage() {
    let aver = sum / rating.length || 0;
    let ratingElement = document.getElementsByClassName('te')[0];
    if (ratingElement) {
        ratingElement.textContent = aver.toFixed(1); // Display average rating with 1 decimal place
    }
}

// Function to handle rating submission
function handle() {
    if (localStorage.getItem("userRated")) {
        alert("You have already submitted a rating!");
        return;
    }

    let ra = parseInt(prompt("Give your rating (1-5):"));

    if (isNaN(ra) || ra < 1 || ra > 5) {
        alert("Please enter a valid rating between 1 and 5.");
        return;
    }

    rating.push(ra);
    sum += ra;

    localStorage.setItem("ratings", JSON.stringify(rating));
    localStorage.setItem("userRated", "true"); // Mark user as rated

    updateAverage();
}

// Update rating display on page load
updateAverage();
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