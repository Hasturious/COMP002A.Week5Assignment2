// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

const balloon = document.getElementById("balloon")
//This selects our balloon element

function balloonIncrease() {
    //this is the function that will be called on the up key
    const fontSize = parseFloat(window.getComputedStyle(balloon).fontSize);
    //parseFloat converts the number to a floating point value. The rest of this code just grabs us the value of the balloons font size
    const fontResize = fontSize * 1.1;
    //Increases the fontsize value by 10%
    balloon.style.fontSize = fontResize + "px";
    //this sets the new font size of the balloon is equal however many more pixels. The px is a string because thats how CSS sees units
}

function balloonDecrease() {
    const fontSize = parseFloat(window.getComputedStyle(balloon).fontSize);
    const fontResize = fontSize * .9;
    //Decreases the fontsize value by 10%
    balloon.style.fontSize = fontResize + "px";
}

document.addEventListener("keydown", (event) => {
//This listens for a keypress
    if (event.key === "ArrowUp") {
    //Listens if the specific key was the up arrow
    // console.log ("Test") Debug line from before I got the balloonIncrease / ballonDecrease functions to work
    balloonIncrease()
    //calls the resize function
    }
    if (event.key === "ArrowDown") {
        balloonDecrease()
    }
})

// https://stackoverflow.com/questions/56210352/how-do-i-get-the-current-font-size-of-selected-text-using-javascript 

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

function hideElement(element) {
    element.style.display = "none";
     // Hides the element
}

window.addEventListener('load', function() {
    // On loading the page this event triggers
    const nonDefault = document.querySelectorAll('#tab2, #tab3');
    // this selects both tabs
    nonDefault.forEach(hideElement)
    // calls the function
});
