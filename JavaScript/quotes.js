
const quotes = [
   { 
       quote:"Going a little farther, he fell with his face to the ground and prayed, My Father, if it is possible may this cup be taken from me. Yet not as I will, but as you will.",
       author:"matthew 26 : 39"
    },
    {
        quote:"Be joyful always pray continually give thanks in all circumstances, for this is God's will for you in Christ Jesus.",
        author:"Thessalonians 5:16~18"
    },
    {
        quote:"Finally, be strong in the Lord and in his mighty power. Put on the full armor of God so that you can take your stand against the devil's schemes.",
        author:"Ephesians 6:10~11"
    },
    {
        quote:"With your help I can advance against a troop ; with my God I can scale a wall.",
        author:"Psalms 18:29"
    }
]; 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML = todayQuote.quote;
author.innerHTML=todayQuote.author;