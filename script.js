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


/*
<body>
	<h1>Assignment 7</h1>
	<p id="balloon">🎈</p>
	<div id="tabbed-layout">
		<ul>
			<li><a id="tab1Link" href="">Tab 1</a></li>
			<li><a id="tab2Link" href="">Tab 2</a></li>
			<li><a id="tab3Link" href="">Tab 3</a></li>
		</ul>
*/

const balloon = document.getElementById("balloon")
//This selects our balloon element

function balloonIncrease() {
    //this is the function that will be called on the up or down keys
    const fontSize = parseFloat(window.getComputedStyle(balloon).fontSize);
    const fontResize = fontSize * 1.1;
    balloon.style.fontSize = fontResize + "px";
}

document.addEventListener("keydown", (event) => {
//This listens for a keypress
    if (event.key === "ArrowUp") {
    //Listens if the specific key was the up arrow
    console.log ("Test") //Before I figure out how to increase the emojis size, this will do.
    balloonIncrease(1)
    //calls the resize function
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

