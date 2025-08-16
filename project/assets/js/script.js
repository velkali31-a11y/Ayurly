<script>
    // Add event listeners to all "Buy Now" buttons
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to the buy page
            window.location.href = 'buy.html';
        });
    });
</script>




