//slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}



//home page worldnews
var homeworldnews = {
 "news": [
     {
         "title": "#WORLD",
         "description": "Portland shooting amplifies tensions in US presidential race",
         "image": "portland_shooting",
         "link": "world.html#World1"
     },
     {
         "title": "#WORLD",
         "description": "Firefighters make headway against lightning-sparked California wildfires",
         "image": "california_wildfires",
         "link": "world.html#World1"
     },
     {
         "title": "#WORLD",
         "description": "Germany wants end to coronavirus border chaos in EU",
         "image": "germany_border_chaos",
         "link": "world.html#World1"
     }
 ]}

var src = document.getElementById('homeworldnews-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(homeworldnews);
document.getElementById('homeworldnewsaction').innerHTML += compiledHTML;



//home page latestnews
var latestnews = {
 "news": [
     {
         "title": "#POLITICS",
         "description": "Biden: Trump has 'no sense of service, no loyalty to any cause other than himself'",
         "image": "biden_trump",
         "link": "politics.html#Politics1"
     },
     {
         "title": "#FOOD",
         "description": "Japan's tuna market, the world's largest, hit hard by coronavirus pandemic",
         "image": "japan_tuna_market",
         "link": "food.html#Food1"
     },
     {
         "title": "#WORLD",
         "description": "EU microplastics ban needs to aim smaller, advisers say",
         "image": "microplastics_ban",
         "link": "world.html#World1"
     },
     {
         "title": "#SPORTS",
         "description": "Football: Bergwijn scores winner as Netherlands edge Poland in Nations League",
         "image": "football_bergwijn",
         "link": "sports.html#Sports1"
     },
     {
         "title": "#TRAVEL",
         "description": "No boarding pass required: These summery films will entertain globetrotters elsewhere",
         "image": "summery_films",
         "link": "travel.html#Travel1"
     },
     {
         "title": "#POLITICS",
         "description": "Trump administration unleashes a new effort to undermine election integrity",
         "image": "trump_election",
         "link": "politics.html#Politics1"
     }
 ]}

var src = document.getElementById('latestnews-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(latestnews);
document.getElementById('latestnewsaction').innerHTML += compiledHTML;