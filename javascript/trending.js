//trending page editor's pick
var editorpicknews = {
 "news": [
     {
         "title": "#POLITICS",
         "description": "Ignoring warnings, Trump again suggests supporters should try to vote twice",
         "image": "trump_vote",
         "link": "politics.html#Politics1"
     },
     {
         "title": "#FOOD",
         "description": "Shake Shack to open fourth outlet",
         "image": "shakeshack",
         "link": "food.html#Food1"
     },
     {
         "title": "#WORLD",
         "description": "Scientists see downsides to high-profile Covid-19 vaccines from Russia, China",
         "image": "covid19_vaccine",
         "link": "world.html#World1"
     },
     {
         "title": "#SPORTS",
         "description": "Confident England ready for Iceland",
         "image": "england_iceland",
         "link": "sports.html#Sports1"
     }
 ]}

var src = document.getElementById('editorpick-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(editorpicknews);
document.getElementById('editorpickaction').innerHTML += compiledHTML;



//trending page editor's pick
var trendingnews = {
 "news": [
     {
         "title": "#POLITICS",
         "description": "Trump suggests supporters should try to vote twice",
         "image": "trump_vote",
         "link": "politics.html#Politics1",
         "mins": "10mins read"
     },
     {
         "title": "#FOOD",
         "description": "Shake Shack to open fourth outlet at Suntec City",
         "image": "shakeshack",
         "link": "food.html#Food1",
         "mins": "5mins read"
     },
     {
         "title": "#WORLD",
         "description": "Scientists see downsides to Covid-19 vaccines",
         "image": "covid19_vaccine",
         "link": "world.html#World1",
         "mins": "8mins read"
     },
     {
         "title": "#SPORTS",
         "description": "Football: Confident England ready for Iceland",
         "image": "england_iceland",
         "link": "sports.html#Sports1",
         "mins": "5mins read"
     },
     {
         "title": "#TRAVEL",
         "description": "Recharge at hotel Amara Sanctuary Resort Sentosa",
         "image": "amara_resort",
         "link": "travel.html#Travel1",
         "mins": "10mins read"
     },
     {
         "title": "#WORLD",
         "description": "TikTok deal: US and China ratchet up tit-for-tat",
         "image": "tiktok",
         "link": "world.html#World1",
         "mins": "3mins read"
     },
     {
         "title": "#SPORTS",
         "description": "Football: Everton sign Brazil midfielder Allan from Napoli for estimated £25m",
         "image": "everton_sign_brazil",
         "link": "sports.html#Sports1",
         "mins": "5mins read"
     },
     {
         "title": "#TRAVEL",
         "description": "Top tips and tricks to combat jet lag when travelling",
         "image": "jet_lag",
         "link": "travel.html#Travel1",
         "mins": "10mins read"
     },
     {
         "title": "#FOOD",
         "description": "Singapore eateries struggle with keeping rogue diners in check",
         "image": "wine_rvlt",
         "link": "food.html#Food1",
         "mins": "5mins read"
     },
     {
         "title": "#POLITICS",
         "description": "Barr says streets are 'safer' after killing of an alleged Antifa member",
         "image": "barr_antifa",
         "link": "politics.html#Politics1",
         "mins": "10mins read"
     },
     {
         "title": "#TRAVEL",
         "description": "Holidays on the horizon: 5 things to do in Brunei",
         "image": "brunei_holiday",
         "link": "travel.html#Travel1",
         "mins": "10mins read"
     },
     {
         "title": "#WORLD",
         "description": "US announces Taiwan initiative, citing China pressure",
         "image": "us_taiwan",
         "link": "world.html#World1",
         "mins": "3mins read"
     },
     {
         "title": "#FOOD",
         "description": "7 podcasts to serve - shaken or stirred",
         "image": "booze_fizz_spritz",
         "link": "food.html#Food1",
         "mins": "5mins read"
     },
     {
         "title": "#POLITICS",
         "description": "Cruz's school choice plan threatens Senate GOP unity",
         "image": "cruz_senate",
         "link": "politics.html#Politics1",
         "mins": "10mins read"
     },
     {
         "title": "#FOOD",
         "description": "Taipei street food vendor, 80, gets place in Michelin guide",
         "image": "taipei_street_food",
         "link": "food.html#Food1",
         "mins": "5mins read"
     },
     {
         "title": "#TRAVEL",
         "description": "Top tips and tricks to combat jet lag when travelling",
         "image": "jet_lag",
         "link": "travel.html#Travel1",
         "mins": "10mins read"
     },
     {
         "title": "#POLITICS",
         "description": "Fauci unsure by 'rounding the corner on the virus'",
         "image": "fauci_virus",
         "link": "politics.html#Politics1",
         "mins": "10mins read"
     },
     {
         "title": "#SPORTS",
         "description": "Haas want eventual 2021 driver pairing through 2022",
         "image": "motor_haas",
         "link": "sports.html#Sports1",
         "mins": "5mins read"
     },
 ]}

var src = document.getElementById('trendingnews-template').innerHTML;
var compile = Handlebars.compile(src);
var compiledHTML = compile(trendingnews);
document.getElementById('trendingnewsaction').innerHTML += compiledHTML;





//referenced from Codepen: https://codepen.io/gugui3z24/pen/VzZzgr?editors=1000, edited and added CSS
'use strict';

var numberOfItems = $('#page .list-group').length; // Get total number of the items that should be paginated
var limitPerPage = 6; // Limit of items per each page
$('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

// Add next button after all the page numbers  
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  // Check if page number that was clicked on is the current page that is being displayed
  if ($(this).hasClass('active')) {
    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
  } else {
    var currentPage = $(this).index(); // Get the current page number
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
    $("#page .list-group").hide(); // Hide all items in loop, this case, all the list groups
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++; // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#page .list-group").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#page .list-group").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});