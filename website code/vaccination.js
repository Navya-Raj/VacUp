function displayInfo() {
    var dropdown = document.getElementById("infoDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var infoContainer = document.getElementById("selectedInfo");

    // Define information as a list based on selected option
    var infoMap = {
        "option1": [
            "<a href='https://www.cdc.gov/vaccines/vpd/pertussis/index.html#vacc'>Tdap Vaccine</a> (Tetanus, diphtheria, and whooping cough)",
            "<a href='https://www.cdc.gov/vaccines/vpd/flu/index.html'>Flu Vaccine</a> (Haemophilus influenzae type b)",
            "<a href='https://www.cdc.gov/vaccines/vpd/hepb/index.html'>Hepatitis B Vaccine</a>)"],
        "option2": [
            "<a href='https://www.cdc.gov/vaccines/vpd/mmr/public/index.html'>MMR Vaccine</a> (measles, mumps, and rubella)",
            "<a href='https://www.cdc.gov/vaccines/vpd/flu/index.html'>Flu Vaccine</a> (Haemophilus influenzae type b)",
            "<a href='https://www.cdc.gov/vaccines/vpd/hepb/index.html'>Hepatitis B Vaccine</a>)"],
        "option3": [
            "<a href='https://google.com'>HIB Vaccine</a> (Haemophilus influenzae type b)",
            "Item 2",
            "Item 3"],
        "option4": [
            "<a href='https://google.com'>HIB Vaccine</a> (Haemophilus influenzae type b)",
            "Item 2",
            "Item 3"],
        "option5": [
            "<a href='https://google.com'>HIB Vaccine</a> (Haemophilus influenzae type b)",
            "Item 2",
            "Item 3"],
    };

    // Clear previous content
    infoContainer.innerHTML = "";

        // Display the selected information as a list in the container
        infoMap[selectedOption].forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.innerHTML = item;
            infoContainer.appendChild(listItem);
    });
}

function scheduleAppointment() {
    // Redirect to the booking page
    window.location.href = 'appointment.html';
}