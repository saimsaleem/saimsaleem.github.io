document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('servicebtn');

  button.addEventListener('click', function() {
    const linkUrl = 'https://www.fiverr.com/webdevsorcerer';
    window.open(linkUrl, '_blank');
  });
});
