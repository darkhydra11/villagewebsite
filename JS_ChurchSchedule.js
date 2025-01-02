const scheduleData = [
    {
        date: "2025-1-5",
        services: [
            { location: "Alkerton", time: "9am", typeofservice: "BCP Holy Communion", contact: "Guy" },
            { location: "Balscote", time: "10am", typeofservice: "Village Service", contact: "Jonathon Perry" },
            { location: "Horley", time: "11am", typeofservice: "Holy Communion", contact: "Guy" },
        ]
    },
    {
        date: "2025-1-12",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Shenington", time: "9:45am", typeofservice: "Village Service", contact: "Guy" },
            { location: "Hornton", time: "11am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Drayton", time: "11am", typeofservice: "Mattins", contact: "Guy" },
            { location: "Glebefields Nursing Home, Drayton", time: "11:50am", typeofservice: "", contact: "Guy" },
        ]
    },
    {
        date: "2025-1-19",
        services: [
            { location: "Hanwell", time: "9am", typeofservice: "BCP Holy Communion", contact: "Alicia" },
            { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Guy" },
        ]
    },
    {
        date: "2025-1-22",
        services: [
            { location: "Shenington", time: "10am", typeofservice: "Holy Communion", contact: "Alicia" },
        ]
    },
    {
        date: "2025-1-26",
        services: [
            { location: "Wroxton", time: "9:45am", typeofservice: "Village Service", contact: "Alicia" },
            { location: "Hornton", time: "11am", typeofservice: "Village Service", contact: "Alicia" },
            { location: "Drayton", time: "11am", typeofservice: "BCP Holy Communion", contact: "Guy" },
        ]
    }
];

// Function to format the date as (day date month, year)
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function displaySchedule() {
    const currentDate = new Date();
    const currentWeekEnd = new Date(currentDate);
    currentWeekEnd.setDate(currentDate.getDate() + 6); // Set to the end of the next 7 days

    const scheduleContainer = document.getElementById('schedule-container');
    scheduleContainer.innerHTML = ''; // Clear previous schedule

    // Add line break before the title
    const lineBreak = document.createElement('br');
    scheduleContainer.appendChild(lineBreak);

    // Add title
    const title = document.createElement('h2');
    title.innerText = "This Week's Services";
    scheduleContainer.appendChild(title);

    scheduleData.forEach(day => {
        const eventDate = new Date(day.date);
        if (eventDate >= currentDate && eventDate <= currentWeekEnd) {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date';
            dateDiv.innerHTML = `<strong>${formatDate(eventDate)}</strong>`; // Use the formatDate function
            scheduleContainer.appendChild(dateDiv);

            day.services.forEach(service => {
                const serviceDiv = document.createElement('div');
                serviceDiv.className = 'service';
                serviceDiv.innerHTML = `
                    <div class="location">Location: ${service.location}</div>
                    <div class="time">Time: ${service.time}</div>
                    <div class="typeofservice">Type of Service: ${service.typeofservice}</div>
                    <div class="contact">Contact: ${service.contact}</div>
                `;
                dateDiv.appendChild(serviceDiv);
            });
        }
    });
}

// Call the function ```javascript
displaySchedule();

setInterval(displaySchedule, 3600000);