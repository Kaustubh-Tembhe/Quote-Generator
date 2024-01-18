document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.querySelector('.quote'),
    authorName = document.querySelector('.name'),
    quoteBtn = document.querySelector("button"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy");

    function randomQuote() {
        quoteBtn.classList.add("loading");
        quoteBtn.innerText = "Loading Quote";
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
            console.log(result);
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");

        });
    }
    function speak(){
        soundBtn.classList.add("speak");
        let utterace = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        speechSynthesis.speak(utterace)
        soundBtn.classList.remove("speak");

    }

   function copy(){
        navigator.clipboard.writeText(quoteText.innerText +" - " +authorName.innerText);
   }
      

    

    quoteBtn.addEventListener("click", randomQuote);
    soundBtn.addEventListener("click",speak);
    copyBtn.addEventListener("click",copy);
});