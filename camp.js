document.addEventListener("DOMContentLoaded", function () {
    var pincodeSection = document.getElementById("pincode-section");
    var mainContent = document.getElementById("main-content");

    document.getElementById("go").addEventListener("click", function () {
        var pincode = document.getElementById("pincode").value;

        if (pincode && pincode.length === 6 && !isNaN(pincode)) {
            pincodeSection.style.display = "none";
            mainContent.style.display = "block";
        } else {
            alert("Invalid pincode. Please enter a valid 6-digit pincode.");
        }
    });

    // Add event listener for setting reminders
    document.getElementById("set-reminder").addEventListener("click", function () {
        var reminderSlider = document.getElementById("reminder-slider");
        var reminderValue = reminderSlider.value;

        if (reminderValue == 1) {
            alert("Reminder set!");
        } else {
            alert("Reminder turned off.");
        }
    });
});