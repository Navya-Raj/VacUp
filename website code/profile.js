document.addEventListener("DOMContentLoaded", function () {
    // Initial month and year
    let currentMonth = 1; // February (0-based)
    let currentYear = 2024;

    // Reference to the calendar body
    const calendarBody = document.getElementById("calendar-body");

    // Function to generate calendar for a given month and year
    function generateCalendar(month, year) {
        // Clear existing calendar
        calendarBody.innerHTML = "";

        // Get the first day of the month
        const firstDay = new Date(year, month, 1).getDay();

        // Get the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Create calendar rows
        let dayCount = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            // Create calendar cells
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                // Fill in the days of the month
                if (i === 0 && j < firstDay) {
                    // Empty cells before the first day
                    cell.textContent = "";
                } else if (dayCount > daysInMonth) {
                    // Empty cells after the last day
                    cell.textContent = "";
                } else {
                    // Fill in the day
                    cell.textContent = dayCount;

                    // Mark the specific date "2 February 2024" with a class
                    if (dayCount === 2 && month === 1 && year === 2024) {
                        cell.classList.add("marked-date");
                    }

                    dayCount++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    // Function to update the current month and regenerate the calendar
    function updateCalendar() {
        const currentMonthElement = document.querySelector(".calendar-current-month");
        currentMonthElement.textContent = getMonthName(currentMonth) + " " + currentYear;

        generateCalendar(currentMonth, currentYear);
    }

    // Function to get the name of the month
    function getMonthName(month) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return months[month];
    }

    // Function to navigate to the previous month
    window.prevMonth = function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    };

    // Function to navigate to the next month
    window.nextMonth = function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    };

    // Initial calendar generation
    updateCalendar();
});