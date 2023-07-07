
document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByTagName('img');
    var imageCount = images.length;
    var loadedImages = 0;
    Array.from(images).forEach(function(image) {
      if (image.complete) {
        loadedImages++;
      } else {
        image.addEventListener('load', function() {
          loadedImages++;
          if (loadedImages === imageCount) {
            showPage();
          }
        });
        image.addEventListener('error', function() {
          loadedImages++;
          if (loadedImages === imageCount) {
            showPage();
          }
        });
      }
    });
  
    if (loadedImages === imageCount) {
      showPage();
    }
  
    function showPage() {
        document.getElementById('animation-container').style.display = 'flex';
        document.getElementById('image-container').style.display = 'flex';
        document.getElementById('content-container2').style.display = 'block';
        document.getElementById('content-container').style.display = 'block';
       
    }
  });
  