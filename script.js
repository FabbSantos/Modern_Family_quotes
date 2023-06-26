const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
soundBtn = document.querySelector(".sound"), 
copyBtn = document.querySelector(".copy"), 
twitterBtn = document.querySelector(".twitter"),
tooltip = document.querySelector(".tooltiptext");



// random quote function
async function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote..."

    // fetching a random quote and parsing it to js object

    const res = await fetch("https://mfaas.deno.dev/quotes/random");
    const result = await res.json();
    quoteText.innerText = result.quote;
    authorName.innerText = result.actor;
    setTimeout(() => { 
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    }, 500);
}

soundBtn.addEventListener("click", () =>{
    // an api that represents a speech request
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText} `);
    speech.lang= 'en-US';
    speechSynthesis.speak(speech);
} )

copyBtn.addEventListener("click", () =>{

    // copying the quote text
    // write.Text() writes the specified text into clipboard
    navigator.clipboard.writeText(quoteText.innerText);
    tooltip.classList.add("copied");

} )
copyBtn.addEventListener("mouseout", ( )=>{
    tooltip.classList.remove("copied");
})

twitterBtn.addEventListener("click", () =>{
    let tweet = `https://twitter.com/intent/tweet?url="${quoteText.innerText}"%0A%0A—%20${authorName.innerText}%0A%0ASee%20your%20quote%20in%20Phil's-Osophy:%20https://phil-osophy.netlify.app/`;
    window.open( tweet, "_blank"); //opening a new tab in twitter with the quote text
})


quoteBtn.addEventListener("click", randomQuote);
