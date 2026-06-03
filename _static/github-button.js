// Add GitHub profile button to navbar
document.addEventListener('DOMContentLoaded', function() {
  // Find the navbar area where the theme button was
  const navbar = document.querySelector('.bd-header-article .navbar-nav');
  
  if (navbar) {
    // Create a new list item for the GitHub button
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';
    
    // Create the button element
    const button = document.createElement('a');
    button.href = 'https://github.com/esk0ik3';
    button.className = 'btn btn-sm nav-link pst-navbar-icon';
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', 'GitHub Profile');
    button.setAttribute('data-bs-placement', 'bottom');
    button.setAttribute('data-bs-toggle', 'tooltip');
    button.setAttribute('data-bs-original-title', 'GitHub Profile');
    
    // Create SVG icon (GitHub logo)
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'svg-inline--fa fa-github fa-lg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('data-prefix', 'fab');
    svg.setAttribute('data-icon', 'github');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 0 496 512');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('d', 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM134.8 328c-.8 1.6-3.9 2.3-6.2 2.3-2.4 0-4.4-.7-4.1-2.3.3-1.6 3-2.3 5.2-2.3 2.4 0 4.4.7 4.1 2.3zm76.1-56.6c-1.3-1.6-4.9-2.3-7.9-1 3.3-1 4.1 4.3.3 6.2-3.6 2.3-8.8 1.1-10.3-2-1.1-1.6-4.3-2.3-6.2-2.3v4.1c2.4 0 5.5 1.3 6.9 3.3 1.3 1.6 3 3.6 6.9 3.6 3.9 0 5.6-2 5.6-5.6 0-1.3-.1-2.5-.4-3.3zm50.1 2.3c-1.3 1.6-4.7 2.3-7.2 2.3-2.6 0-4.2-.7-4.6-2.3 0-1.6 3.2-2.3 5.8-2.3 2.6 0 4.2.7 4.2 2.3zm129.9 51.5l-39.3-21.4c2.6-3.6 4.3-7.9 4.3-12.7 0-11.6-9.4-21-21-21-11.6 0-21 9.4-21 21 0 4.8 1.8 9.1 4.3 12.7l-39.3 21.4c-4.6 2.7-7.9 7.2-7.9 12.4v36.3h112v-36.3c0-5.2-3.3-9.7-7.9-12.4zM464 250.6c0 22.1-17.9 40-40 40H32c-22.1 0-40-17.9-40-40V109.6c0-22.1 17.9-40 40-40h392c22.1 0 40 17.9 40 40v141z');
    
    svg.appendChild(path);
    button.appendChild(svg);
    
    // Add text label
    const textNode = document.createTextNode(' GitHub');
    button.appendChild(textNode);
    
    listItem.appendChild(button);
    navbar.appendChild(listItem);
  }
});
