 // Function to change the color of the title on click
 document.querySelector('.title').addEventListener('click', function() {
    this.style.color = 'red';
});

//Function to log a message when hovering over images
const images = document.querySelectorAll('span.image');
images.forEach(image => {
    image.addEventListener('mouseover', function() {
        console.log('Hovering over an image');
    });
});

//  Function to toggle visibility of paragraphs on click
const paragraphs = document.querySelectorAll('section p');
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', function() {
        this.classList.toggle('hidden');
    });
});

//  Function to alert when the footer is clicked
document.querySelector('#footer').addEventListener('click', function() {
    alert('Footer clicked!');
});



// Function to change image on double-click
const figureImages = document.querySelectorAll('section span.image img');
figureImages.forEach(img => {
    img.addEventListener('dblclick', function() {
        this.src = '';
    });
});

//  Function to prevent right-click on the header
document.querySelector('#header').addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

//  Function to log the window size on resize
window.addEventListener('resize', function() {
    console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
});

// Function to redirect to a new page on link click
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = this.href;
    });
});

//  Function to console log when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document fully loaded');
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
    });
}

// Function to show an alert before scrolling to the top
function showAlertAndScroll() {
    if (confirm('Scroll to the top of the page?')) {
        scrollToTop();
    }
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'none';
}

// Event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    // Show the loading overlay on page load
    const loadingOverlay = document.createElement('div');
    loadingOverlay.classList.add('loading-overlay');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loadingOverlay.appendChild(loader);
    document.body.appendChild(loadingOverlay);

    // Simulate a delay and hide the loading overlay after some time (you can adjust the delay time)
    setTimeout(hideLoadingOverlay, 2000);

    const topSection = document.createElement('section');
    topSection.classList.add('scroll-top-section');

    const topButton = document.createElement('button');
    topButton.textContent = 'Go to Top';
    topButton.classList.add('scroll-top-button');
    topButton.style.position = 'fixed'; // Set button position to fixed
    topButton.style.right = '20px'; // Adjusting the distance from the right side
    topButton.style.bottom = '20px'; // Adjusting the distance from the bottom
    topButton.style.zIndex = '1'; // Set the z-index to 1
    topSection.appendChild(topButton);

    topButton.addEventListener('click', showAlertAndScroll);

    // Inserting the new section above the footer
    const footer = document.getElementById('footer');
    footer.parentNode.insertBefore(topSection, footer);
});

// JavaScript code using Intersection Observer API for fading elements
const fadeOutElements = document.querySelectorAll('.fade-out');
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeOptions = {
    threshold: 0.5 // Adjust the threshold as needed
};

const fadeOutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.style.opacity = '0';
        } else {
            entry.target.style.opacity = '1';
        }
    });
}, fadeOptions);

fadeOutElements.forEach(element => {
    fadeOutObserver.observe(element);
});

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.opacity = '0';
        }
    });
}, fadeOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});