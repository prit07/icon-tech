jQuery(document).ready(function() {
    function toggleMenuMovil() {
        if (jQuery(window).width() < 769) {
            // Show the .menu-movil for mobile view
            if (jQuery('.menu-movil').length === 0) {
                // If .menu-movil was removed, reload or append it if necessary
                location.reload(); // Reload to show the menu, or re-append the element logic can go here
            } else {
                jQuery('.menu-movil').show();
            }
        } else {
            // Hide the .menu-movil for desktop view
            jQuery('.menu-movil').remove();
        }
    }

    // Initial check when the page loads
    toggleMenuMovil();

    // Check again when the window is resized
    jQuery(window).resize(function() {
        toggleMenuMovil();
    });
});
