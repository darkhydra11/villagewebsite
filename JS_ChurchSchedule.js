const scheduleData = [
    {
        date: "2025-07-06",
        services: [
            { location: "Alkerton", time: "9am", typeofservice: "BCP Holy Communion", contact: "Guy" },
            { location: "Balscote", time: "10am", typeofservice: "Village Service", contact: "Alicia" },
            { location: "Horley", time: "11am", typeofservice: "All-age service + Holy Communion", contact: "Guy" },
        ]
    },
 
    {
        date: "2025-07-13",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Hornton", time: "11am", typeofservice: "School Service", contact: "Guy" },
            { location: "Drayton", time: "11am", typeofservice: "Mattins", contact: "Alicia" },
            { location: "Glebefields Nursing Home", time: "11:50am", typeofservice: "Morning Worship", contact: "Alicia"},
            { location: "Shenington", time: "6pm", typeofservice: "Taize Worship", contact: "Guy + Alicia" },
        ]
    },
    {
        date: "2025-07-20",
        services: [
            { location: "Hanwell", time: "9am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Alicia" },
        ]
    },
    

    {
        date: "2025-07-23",
        services: [
            { location: "Shenington", time: "10am", typeofservice: "Holy Communion", contact: "Alicia"},
        ]
    },


    {
        date: "2025-07-27",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Village Service", contact: "Guy"},
            { location: "Hornton", time: "11am", typeofservice: "Holy Communion", contact: "Alicia"},
            { location: "Drayton", time: "11am", typeofservice: "BCP Communion", contact: "Guy"},
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