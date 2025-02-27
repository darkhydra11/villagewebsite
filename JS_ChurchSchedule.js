const scheduleData = [
    {
        date: "2025-03-02",
        services: [
            { location: "Alkerton", time: "9am", typeofservice: "BCP Holy Communion", contact: "Guy" },
            { location: "Balscote", time: "10am", typeofservice: "Village Service", contact: "Alicia" },
            { location: "Horley", time: "11am", typeofservice: "Holy Communion", contact: "Guy" },
        ]
    },
    {
        date: "2025-03-05",
        services: [
            { location: "Drayton", time: "2pm", typeofservice: "Service of Ashing", contact: "Guy" },
        ]
    },
    {
        date: "2025-03-09",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Shenington", time: "9:45am", typeofservice: "Morning Worship", contact: "Guy" },
            { location: "Hornton", time: "11am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Drayton", time: "11am", typeofservice: "Mattins", contact: "Guy" },
            { location: "Glebefields Nursing Home, Drayton", time: "11:50am", typeofservice: "", contact: "Guy" },
        ]
    },
    {
        date: "2025-03-16",
        services: [
            { location: "Hanwell", time: "9am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Alicia" },
        ]
    },
    
        
    {
        date: "2025-03-23",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Village Service", contact: "Alicia" },
            { location: "Hornton", time: "11am", typeofservice: "Village Service", contact: "Alicia" },
        ]
    },

    {
        date: "2025-03-26",
        services: [
            { location: "Shenington", time: "10am", typeofservice: "Holy Communion" },
        ]
    },

    {
        date: "2025-03-30",
        services: [
            { location: "Horley", time: "10am", typeofservice: "Craft for Children", contact: "Alicia" },
            { location: "Horley", time: "11am", typeofservice: "Family Service", contact: "Alicia" },
            { location: "Drayton", time: "11am", typeofservice: "CW Holy Communion", contact: "Rev. Olwen Smith" },
        ]
    },
];

// Function to format the date as (day date month, year)
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to create the title HTML
function createTitle() {
    return "<h2>This Week's Services</h2>";
}

// Function to create the date HTML
function createDateHTML(eventDate) {
    return `<div class="date"><strong>${formatDate(eventDate)}</strong></div>`;
}

// Function to create the service HTML
function createServiceHTML(service) {
    return `
        <div class="service">
            <div class="location">Location: ${service.location}</div>
            <div class="time">Time: ${service.time}</div>
            <div class="typeofservice">Type of Service: ${service.typeofservice || 'N/A'}</div>
            <div class="contact">Contact: ${service.contact}</div>
        </div>
    `;
}

// Function to display the schedule
function displaySchedule() {
    const currentDate = new Date();
    const currentWeekEnd = new Date(currentDate);
    currentWeekEnd.setDate(currentDate.getDate() + 6); // Set to the end of the next 7 days

    // Build the HTML string
    let scheduleHTML = '<br>'; // Add a line break before the title
    scheduleHTML += createTitle(); // Add the title

    // Iterate through the schedule data
    scheduleData.forEach(day => {
        const [year, month, dayOfMonth] = day.date.split('-').map(Number);
        const eventDate = new Date(year, month - 1, dayOfMonth); // Create a new date object

        if (eventDate >= currentDate && eventDate <= currentWeekEnd) {
            // Add a div for the date
            scheduleHTML += createDateHTML(eventDate);

            // Iterate through the services for the day
            day.services.forEach(service => {
                scheduleHTML += createServiceHTML(service);
            });
        }
    });

    // Set the innerHTML of the schedule container
    const scheduleContainer = document.getElementById('schedule-container');
    scheduleContainer.innerHTML = scheduleHTML; // Set the built HTML
}

// Call the displaySchedule function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    displaySchedule();
    // Refresh the schedule every second (1000 milliseconds)
    setInterval(displaySchedule, 1000);
});