const scheduleData = [
    {
        date: "2025-11-09",
        services: [
            { location: "Alkerton", time: "10:50am", typeofservice: "Remembrance Service", contact: "" },
            { location: "Drayton", time: "10:50am", typeofservice: "Remembrance Service", contact: "" },
            { location: "Horley", time: "10:50am", typeofservice: "Remembrance Service", contact: "" },
            { location: "Balscote", time: "3pm", typeofservice: "Remembrance Service", contact: "" },
        ]
    },
 
    {
        date: "2025-11-11",
        services: [
            { location: "Alkerton Cenotaph", time: "10:50am", typeofservice: "Remembrance Service", contact: "" },
           
        ]
    },
    {
        date: "2025-09-21",
        services: [
            { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Guy" },
            { location: "Hanwell", time: "3pm", typeofservice: "Pet Service + Harvest", contact: "Alicia/Guy" },
        ]
    },

    {
        date: "2025-09-24",
        services: [
            { location: "Shenington", time: "10am", typeofservice: "Holy Communion", contact: "Guy" },
        ]
    },
    

    {
        date: "2025-09-28",
        services: [
            { location: "Wroxton (Village Hall)", time: "9:45am", typeofservice: "Harvest Service", contact: "Guy" },
            { location: "Hornton", time: "11am", typeofservice: "Village Service", contact: "?" },
            { location: "Drayton", time: "11am", typeofservice: "Harvest BCP Communion", contact: "Guy" },
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
    currentWeekEnd.setDate(currentDate.getDate() + 13); // Set to the end of the next 7 days

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


function displayHomeSchedule() {
        const currentDate = new Date();
        const currentWeekEnd = new Date(currentDate);
        currentWeekEnd.setDate(currentDate.getDate() + 6);

        let scheduleHTML = '<br><h2>This Week\'s Church Services</h2>';

        scheduleData.forEach(day => {
            const [year, month, dayOfMonth] = day.date.split('-').map(Number);
            const eventDate = new Date(year, month - 1, dayOfMonth);

            if (eventDate >= currentDate && eventDate <= currentWeekEnd) {
                scheduleHTML += `<div class="date"><strong>${formatDate(eventDate)}</strong></div>`;
                day.services.forEach(service => {
                    scheduleHTML += `
                        <div class="service">
                            <div class="location">Location: ${service.location}</div>
                            <div class="time">Time: ${service.time}</div>
                            <div class="typeofservice">Type of Service: ${service.typeofservice || 'N/A'}</div>
                            <div class="contact">Contact: ${service.contact}</div>
                        </div>
                    `;
                });
            }
        });

        document.getElementById('home-schedule-container').innerHTML = scheduleHTML;
    }

    document.addEventListener("DOMContentLoaded", function() {
        displayHomeSchedule();
        setInterval(displayHomeSchedule, 1000);
    });