// const red = document.querySelector(".red");
// const cyan = document.querySelector(".cyan");
// const violet = document.querySelector(".violet");
// const orange = document.querySelector(".orange");
// const pink = document.querySelector(".pink");

// const centre = document.querySelector(".centre");

// console.log(window.getComputedStyle(red).backgroundColor);

// const getBGcolor = (selectedElement) => {
//     return window.getComputedStyle(selectedElement).backgroundColor
// };

// console.log(getBGcolor(pink));


// Event listener

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const centre = document.querySelector(".centre");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
};

var pinkElementColor = getBGcolor(pink);
pink.addEventListener("mouseenter", () => {
    centre.style.background = pinkElementColor;

});
