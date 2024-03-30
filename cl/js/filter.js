
  // Get the input element
  let searchInput = document.getElementById('search');

  // Add event listener for input change
  searchInput.addEventListener('input', function() {
    // Get the search term and convert to lowercase
    let searchTerm = searchInput.value.toLowerCase();

    // Get all product items
    let productItems = document.querySelectorAll('.ecart-list');

    // Loop through each product item
    productItems.forEach(function(item) {
      // Get the product name
      let productName = item.querySelector('.name a').textContent.toLowerCase();

      // Check if the product name contains the search term
      if (productName.includes(searchTerm)) {
        // Show the product item
        item.style.display = 'block';
      } else {
        // Hide the product item
        item.style.display = 'none';
      }
    });
  });

  function addToWishList(productId) {
    // Add your logic to add the product to the wishlist
    console.log('Adding product to wishlist:', productId);
  }

  function addToCompare(productId) {
    // Add your logic to add the product to the compare list
    console.log('Adding product to compare:', productId);
  }
