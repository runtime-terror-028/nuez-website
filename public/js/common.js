document.addEventListener("DOMContentLoaded", function() {
    // Function to load external HTML
    function loadExternalHTML(selector, url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
    }
  
    // Load header and footer
    loadExternalHTML("header", "template/header.html");
    loadExternalHTML("footer", "template/footer.html");
  });
  