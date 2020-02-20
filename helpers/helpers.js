// Generate A or B for A/B tests
const AorB = function () {
    return (Math.random() > 0.5) ? "A" : "B";
}
/*
if (AorB = "A") {
    // Put what to do for Group A here
} else {
    // Put what to do for Group B here
}
*/


// Query strings from a URL
function getQueryStrings(query_string_name) {
    const all_query_strings = new URL(window.location).search;
    const searchParams = new URLSearchParams(all_query_strings);
    return searchParams.get(query_string_name);
}
// const audience_category = getQueryStrings("group");


// Simplify selecting an element by CSS selector
function select(css_selector) {
    return document.querySelector(css_selector);
}
// const audience_category_input = select("#hidden-yui_3_17_2_1_1582120639035_73217");


// Show a hidden element
function show(element) {
    return element.style.display = "";
}
// const someElement = select(".css-selector");
// show(someElement);


// Hide a visible element
function hide(element) {
    return element.style.display = "none";
}
// const someElement = select(".css-selector");
// hide(someElement);


// Change or Set text of an element
function setText(textElement, newString) {
    return textElement.innerText = newString;
}
// const someTextElement = select(".title");
// setText(someTextElement, "New text");


// Change or Set the content of a form field
function fillField(inputElement, stringToAdd) {
    return inputElement.value = stringToAdd;
}
// const someInputElement = select("input");
// fillField(someInputElement, "New text in field");


// Change an image (and alt text)
function swapImage(currentImage, newImageSource, newImageAltText = "") {
    currentImage.setAttribute("src", newImageSource);
    currentImage.setAttribute("alt", newImageAltText);
}
// const someImage = select("#main-image");
// swapImage(img, "linktoyournewimage.com", "new alt text")
