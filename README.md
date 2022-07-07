# quote-generator
This is a random quote generator. I use asynchronous fetch request to Rest API to get the quotes. Then combine with Math.random() to pick the random quote to display.
Everytime we click the new quote button, a new quote and anther will be display. Also, when we click the Twitter button, it will open twitter in a new tab. And if we were logged in, it will allow us to tweet using this button.
There's a loader that loads between quotes. The idea is that when it take s long time to load, we want to signal to the user that something is happening behind the scines, even if we can't see it right now.
Other elements:
Fontawesome icon; Custom Google Font; Hero patterns vector background;
Most important thing:
When working with APIs, if you encounter the CORS ERROR, maybe a proxy API would help.
The code will be looks like this:
async function getQuote(){
    const proxyUrl = 'https://cros-anywhere.herokuapp.com';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{ 
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        alert('whoops',error)
    }
   }
   
To see more, I found this article is very helpfull.
https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

Enjoy!
