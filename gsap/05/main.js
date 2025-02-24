const container = document.querySelectorAll(".container");
const bigbox = document.querySelectorAll("#bigbox");
const smallBox = document.querySelectorAll("#smallBox")

document.getElementById("btn").onclick = () => {

        (smallBox.parentNode === container ? bigbox : container) .
        appendChild(smallBox)    

}