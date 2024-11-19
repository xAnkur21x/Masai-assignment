document.addEventListener("DOMContentLoaded", function() {
    // Using getElementById to select the heading and change its text
    const heading = document.getElementById("main-heading");
    heading.textContent = "Updated DOM Practice Page Heading";

    // Using getElementsByClassName to change the color of paragraphs with class text-content
    const textContents = document.getElementsByClassName("text-content");
    Array.from(textContents).forEach(paragraph => {
        paragraph.style.color = "blue";
    });

    // Using querySelector to change the background color of the container div
    const container = document.querySelector(".container");
    container.style.backgroundColor = "#f0f0f0";

    // Using querySelectorAll to change the text of all paragraphs inside the container
    const containerParagraphs = document.querySelectorAll(".container p");
    containerParagraphs.forEach(paragraph => {
        paragraph.textContent = "This text has been updated!";
    });

    // Using getElementById to change the source of the main image
    const mainImage = document.getElementById("main-image");
    mainImage.src = "https://via.placeholder.com/300";
});