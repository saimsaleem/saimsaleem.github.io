console.log("Loading")
window.addEventListener('load', function() {
    console.log("Ready")
    // All images and other resources have loaded
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');
  
    loadingScreen.style.display = 'none'; // Hide loading screen
    mainContent.style.display = 'block';   // Display main content

    const button = document.getElementById('servicebtn');

    button.addEventListener('click', function() {
      // Change the URL to the desired link
      const linkUrl = 'https://www.fiverr.com/webdevsorcerer';

      // Open the link in a new tab
      window.open(linkUrl, '_blank');
    });

  });

  