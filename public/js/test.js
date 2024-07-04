// Assuming you have a <div> with id="contentContainer" for inserting header and footer
let contentContainer = document.getElementById('test');

// Function to fetch and insert HTML content
function fetchAndInsertHTML(url, container) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Append fetched HTML content to the container
            container.innerHTML += html;
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

// Fetch and insert header
fetchAndInsertHTML('/template/header.html', contentContainer);

// // Fetch and insert footer
// fetchAndInsertHTML('path/to/footer.html', contentContainer);
