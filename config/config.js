// Please modify the Capitalised Text and Booleans to easily configure your site

var FirstNameIns = "Michael";
var LastNameIns = "Martin";
var MainUsernameIns = "@IzMichael";
var Email = "themichael77@outlook.com"

// Social Data
var GitHubIns = "IzMichael";
var TwitterIns = "IzMichael7";
var BlogIns = "https://blog.izmichael.xyz";

// Other Text
var Subtitle = "And this is my website."

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// DO NOT MODIFY BELOW THIS LINE
function onLoad() {
    // Names
    var fullNameSection = document.getElementById("name");
    var firstNameSection = document.getElementById("firstname");
    var usernameSection = document.getElementById("usernameMain");
    var pageTitle = document.getElementById("title");
    var fullName = FirstNameIns + " " + LastNameIns;
    pageTitle.innerHTML = fullName;
    fullNameSection.innerHTML = fullName;
    usernameSection.innerHTML = MainUsernameIns;
    firstNameSection.innerHTML = FirstNameIns;

    // Email / Contact Form
    var contactForm = document.getElementById("contactForm");
    contactForm.setAttribute("action", "https://formsubmit.co/" + Email);

    // Social Links
    var github = document.getElementById("github");
    var twitter = document.getElementById("twitter");
    var blog = document.getElementById("blog");
    // Social Modules
    if (GitHubLink = false) {
        github.classList.add("hidden")
    }
    if (TwitterLink = false) {
        twitter.classList.add("hidden")
    }
    if (BlogLink = false) {
        blog.classList.add("hidden")
    }
    // Social Data
    github.setAttribute("href", "https://github.com/" + GitHubIns);
    twitter.setAttribute("href", "https://twitter.com/" + TwitterIns);
    blog.setAttribute("href", BlogIns);

    // Other Text
    var subtitleSection = document.getElementById("subtitle")
    subtitleSection.innerHTML = Subtitle
}