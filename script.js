const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"); 
// let firstQuote = String;

// window.onload = async () => {
//     let someData = await promiseOfSomeData;
//     someData ? quoteText.innerText = firstQuote : {};
// };
// const promiseOfSomeData = fetch("https://cors.deno.dev/https://mfaas.deno.dev/quotes/random").then(r => r.json()).then(data => {
//     firstQuote = data.quote;
// });


// random quote function
function randomQuote(){

    // fetching a random quote and parsing it to js object
    fetch("https://cors.deno.dev/https://mfaas.deno.dev/quotes/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.quote;
        authorName.innerText = result.actor;
    });
}

quoteBtn.addEventListener("click", randomQuote);