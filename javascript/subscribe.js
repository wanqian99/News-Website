//newsletters
var newsletters = {
 "newsletter": [
     {
         "image": "world",
         "title": "WORLD",
         "price": "$ 0.99",
         "description": "Sign up now to be the first to get notified on the latest happenings"
     },
     {
         "image": "travel",
         "title": "TRAVEL",
         "price": "$ 0.99",
         "description": "Sign up now to be the first to get notified on the latest travel updates"
     },
     {
         "image": "food",
         "title": "FOOD",
         "price": "$ 0.99",
         "description": "Sign up now to be the first to get notified on the latest food trends"
     },
     {
         "image": "sports",
         "title": "SPORTS",
         "price": "$ 0.99",
         "description": "Sign up now to be the first to get notified on the latest sports news"
     },
     {
         "image": "politics",
         "title": "POLITICS",
         "price": "$ 0.99",
         "description": "Sign up now to be the first to get notified on political updates"
     },
 ]}

var src = document.getElementById('newsletters-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(newsletters);
document.getElementById('newslettersaction').innerHTML += compiledHTML;



//newsletter bundles
var bundlednewsletters = {
 "newsletter": [
     {
         "image": "lifestyle",
         "title": "LIFESTYLE BUNDLE",
         "price": "$ 1.99",
         "description": "Sign up now to get notified on the latest lifestyle updates (Travel & Food)"
     },
     {
         "image": "all_topics",
         "title": "ALL TOPICS BUNDLE",
         "price": "$ 3.99",
         "description": "Sign up now to be the first to get notified on all the topical news and stories"
     }
 ]}

var src = document.getElementById('bundlednewsletters-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(bundlednewsletters);
document.getElementById('bundlednewslettersaction').innerHTML += compiledHTML;



//login form
function subscribeFunction() {
    var x = document.getElementById("subscribeForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}