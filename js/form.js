
    $(document).ready(function() {
        $("#contact-form").submit(function(event) {
            event.preventDefault(); // Prevent the default form submission
            var formData = $(this).serialize();
            
            $.ajax({
                type: "POST",
                url: $(this).attr("action"),
                data: formData,
                dataType: "json",
                success: function(response) {
                    // Handle success, e.g., display a thank you message
                    alert("Thank you for your submission!");
                    // You can customize this message or use a different method to display it.
                },
                error: function(response) {
                    // Handle error, e.g., display an error message
                    alert("An error occurred. Please try again later.");
                    // You can customize this message or use a different method to display it.
                }
            });
        });
    });

