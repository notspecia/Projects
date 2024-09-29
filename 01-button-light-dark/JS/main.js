/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-09-11
 * @description 
 * Modalità notturna dopo un click
 */

// importante usare query selector!!! (deve essere restituito il singolo elemento e non una HTMLcollection / NodeList)
const body = document.querySelector("main");
const container = document.querySelector("div.container");
const button = document.querySelector("div.button");

// flag usata per passare da un tema all'altro
let flag = false;


button.addEventListener('click', () => {

    // !caso si passa DA tema light A tema dark
    if (flag === false) {
        body.classList.add("darkMode");
        container.classList.add("darkContainer");
        button.classList.add("darkButton");
        flag = true;

        // !caso si passa DA tema dark A tema light
    } else {
        body.classList.remove("darkMode");
        container.classList.remove("darkContainer");
        button.classList.remove("darkButton");
        flag = false;
    }
});


console.log(body, container, button);

