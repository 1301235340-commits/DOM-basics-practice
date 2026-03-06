 console.log("Script started") 

function changeColor() {
    console.log("click");
    let color = prompt("Give a new color to the poem(e.g., blue or red):");
    let element = document.getElementById("poem-text");
    element.style.color = color;
}

function changeFontSize() {
    let size = prompt("Give it a different size (e.g., 24px):");
    let element = document.getElementById("poem-text");
    element.style.fontSize = size;
}

function changePoem() {
    let newTitle = prompt("Enter the title of the poem:");
    document.getElementById("poem-title").innerText = newTitle;
    
    let newText = prompt("Enter the text for the new poem:");
    document.getElementById("poem-text").innerText = newText;
}
