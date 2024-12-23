const scheduleData = [
    {
        date: "2024-12-22",
        services: [
            { location: "Shenington", time: "4:30pm", typeofservice: "Carol Service", contact: "Alicia" },
            { location: "Horley", time: "5pm", typeofservice: "Nativity and Carols", contact: "Guy" },
            { location: "Hornton Methodist", time: "6pm", typeofservice: "Carol Service", contact: "" },
            { location: "Wroxton", time: "6:30pm", typeofservice: "Carol Service", contact: "Alicia" },
        ]
    },
    {
        date: "2024-12-24",
        services: [
            { location: "Shenington", time: "4pm", typeofservice: "Crib Service", contact: "Alicia" },
            { location: "Hornton", time: "5:30pm", typeofservice: "Crib Service", contact: "Cate Fokes" },
            { location: "Hanwell", time: "11:30pm", typeofservice: "Midnight Mass", contact: "Guy" },
            { location: "Wroxton", time: "11:30pm", typeofservice: "Midnight Mass", contact: "Guy" },
        ]
    },
    {
        date: "2024-12-25",
        services: [
            { location: "Alkerton", time: "9am", typeofservice: "BCP Holy Communion", contact: "Guy" },
            { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Alicia" },
            { location: "Horley", time: "10:30am", typeofservice: "Holy Communion", contact: "Guy" },
            { location: "Drayton", time: "11am", typeofservice: "BCP Holy Communion", contact: "Alicia" },
        ]
    },
    {
        date: "2024-12-29",
        services: [
            { location: "Hornton Methodist Church, Honrton", time: "10am", typeofservice: "Breakfast Church", contact: "Alicia" },
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

// Call the function to display the schedule initially
displaySchedule();

// Set an interval to refresh the schedule every hour (3600000 milliseconds)
setInterval(displaySchedule, 3600000);