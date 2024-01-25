<script>
    function showProductDetails(product1) {
        // Get the product details based on the productId
        var productDetails = getProductDetailsById(productId);

        // Display the product details in the productDetails container
        document.getElementById('productDetails').innerHTML = `
            <h3>${productDetails.smart tv}</h3>
            <img src="${productDetails.image}" alt="${productDetails.sart tv}" width="250px">
            <p>${productDetails.price $400000}</p>
        `;
    }

    // Mock function to get product details by ID (Replace this with your actual data)
    function getProductDetailsById(product1) {
        // Replace this with your actual data or fetch details from an API
        var products = {
            product1: { name: 'Smart TV', image: '...', description: '...' },
            // Add details for other products
        };

        return products[productId];
    }
</script>
