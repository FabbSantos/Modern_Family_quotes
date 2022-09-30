Access-Control-Allow-Origin: https://amazing.site

const quoteText = document.querySelectorAll(".quote"),
quoteBtn = document.querySelector("button");




// random quote function
function randomQuote(){

    // fetching a random quote and parsing it to js object
    fetch("https://mfaas.herokuapp.com/api/quotes/random").then(res => res.json()).then(result =>{
        console.log(result);
    });
}

quoteBtn.addEventListener("click", randomQuote);