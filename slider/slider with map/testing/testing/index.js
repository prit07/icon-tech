let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let mapBox1 = document.querySelector(".map1-box");
let mapBox2 = document.querySelector(".map2-box");
let mapBox3 = document.querySelector(".map3-box");

let currentIndex = 0; // Initialize index variable

// Function to update the display based on the current index
function updateDisplay() {
    mapBox1.style.display = "none";
    mapBox2.style.display = "none";
    mapBox3.style.display = "none";
    box1.style.transform = "translateY(0px)";
    box2.style.transform = "translateY(0px)";
    box3.style.transform = "translateY(0px)";
    // Show the map box based on the current index
    if (currentIndex === 0) {
        mapBox1.style.display = "block";
        box1.style.transform = "translateY(-30px)";
    } else if (currentIndex === 1) {
        mapBox2.style.display = "block";
        box2.style.transform = "translateY(-30px)";
    } else if (currentIndex === 2) {
        mapBox3.style.display = "block";
        box3.style.transform = "translateY(-30px)";
    }
}

box1.addEventListener("click", function () {
    currentIndex = 0; 
    updateDisplay();
});

box2.addEventListener("click", function () {
    currentIndex = 1; 
    updateDisplay();
});

box3.addEventListener("click", function () {
    currentIndex = 2; 
    updateDisplay();
});

prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + 3) % 3; 
    updateDisplay();
});

next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % 3; 
    updateDisplay();
});
