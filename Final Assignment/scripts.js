document.addEventListener("DOMContentLoaded", function() {
    // Get form element
    const form = document.getElementById("contact-form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Check if all fields are valid
        if (form.checkValidity()) {
            const formData = new FormData(form);

            fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data, null, 2));
                alert("Successfully submitted!");
            })
            .catch((err) => {
                console.error(err);
                alert("Failed to submit. Please try again.");
            });
        } else {
            // If form is not valid, display error messages
            form.reportValidity();
        }
    });

    // Add event listener for hiring checkbox
    const hiringCheckbox = document.querySelector('input[name="reason"][value="Hiring"]');
    const hiringRateInput = document.getElementById("hiring-rate");

    hiringCheckbox.addEventListener("change", function() {
        if (hiringCheckbox.checked) {
            hiringRateInput.required = true;
        } else {
            hiringRateInput.required = false;
        }
    });
});
