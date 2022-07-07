let apiQuotes = [];
const newQuoteBtn = document.querySelector('#new-quote');
const quote = document.querySelector('#quote');
const author = document.querySelector('.quote-author');
const quoteText = document.querySelector('.quote-text');
const twitterBtn = document.querySelector('#twitter');
const loader = document.querySelector('#loader');
const quoteContainer = document.querySelector('#quote-container');

// Show Loading
function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function removeLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get Quotes From API
async function getQuotes(){
    showLoadingSpinner();
    const apiUrl = "https://type.fit/api/quotes";
    try{
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       newQuote();
    }catch(error){
        alert(error);
    }
}

// Generate New Quotes
function newQuote(){
    showLoadingSpinner();
    const randomIndex =Math.floor(Math.random()*apiQuotes.length); 
    const randomQuote = apiQuotes[randomIndex];
    quote.textContent = randomQuote.text;
    if(quote.textContent.length > 110){
       quoteText.classList.add('long-quote');
    }
    if(randomQuote.author){
        author.textContent = randomQuote.author;
    }else{
        author.textContent = 'Unknown';
    }
    removeLoadingSpinner();
}

// Tweet Quote
function TweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text= ${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',TweetQuote);
//  On load
getQuotes();
