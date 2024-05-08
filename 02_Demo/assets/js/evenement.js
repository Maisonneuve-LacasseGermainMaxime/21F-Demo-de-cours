let body = document.body;
let main = document.querySelector("main");
let h1 = document.querySelector("h1");

function init() {
    // body.addEventListener("click", onClic, true);
    // main.addEventListener("click", onClic, true);
    // h1.addEventListener("click", onClic, true);

    body.addEventListener("click", onClic);
    main.addEventListener("click", onClic);
    h1.addEventListener("click", onClic);
}

function onClic(evenement) {
    let attache = evenement.currentTarget;
    let declencheur = evenement.target;
    
    console.log(
        "click sur " + declencheur.tagName,
        "declencheur:",
        declencheur,
        "Élément HTML attaché au AddEventListener:",
        attache
    );
}

init();
