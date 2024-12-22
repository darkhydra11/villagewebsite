const scheduleData = [
    {
        date: "2024-12-22",
        services: [
            { location: "Holy Trinity, Shenington", time: "4:30pm", typeofservice: "Carol Service", contact: "Alicia" },
            { location: "St. Etheldreda, Horley", time: "5pm", typeofservice: "Nativity and Carols", contact: "Guy" },
            { location: "Hornton Methodist Church, Hornton", time: "6pm", typeofservice: "Evening Service", contact: "Alicia" }
        ]
    },
    {
        date: "2024-12-23",
        services: [
            { location: "St. Mary Magdeline, Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "St. John's, Wroxton", time: "11:30am", typeofservice: "Morning Prayer", contact: "Guy" }
        ]
    },
    {
        date: "2024-12-24",
        services: [
            { location: "St. Peters, Hanwell", time: "11pm", typeofservice: "Midnight Mass", contact: "Guy" }
        ]
    },
    {
        date: "2024-12-25",
        services: [
            { location: "St. Etheldreda, Horley", time: "10am", typeofservice: "Christmas Day Service", contact: "Alicia" },
            { location: "All Saints, Wroxton", time: "11am", typeofservice: "Christmas Celebration", contact: "Alicia" }
        ]
    },

    {
        date: "2024-12-29",
        services: [
            { location: "Hornton Methodist Church, Honrton", time: "10am", typeofservice: "Breakfast Church", contact: "Alicia" },
            
        ]
    }
];

// Get the current date
const currentDate = new Date(); // Use the current date
const currentDay = currentDate.getDay();
const currentWeekStart = new Date(currentDate);
currentWeekStart.setDate(currentDate.getDate() - currentDay); // Set to the start of the week (Sunday)

const currentWeekEnd = new Date(currentDate );
currentWeekEnd.setDate(currentWeekStart.getDate() + 6); // Set to the end of the week (Saturday)

const scheduleContainer = document.getElementById('schedule-container');

scheduleData.forEach(day => {
    const eventDate = new Date(day.date);
    if (eventDate >= currentWeekStart && eventDate <= currentWeekEnd) {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.innerHTML = `<strong>${eventDate.toLocaleDateString()}</strong>`;
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