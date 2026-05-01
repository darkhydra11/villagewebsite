const scheduleData = [

{
    date: "2026-05-03",
    services: [
        { location: "Alkerton", time: "9am", typeofservice: "BCP Holy Communion", contact: "Guy Edwards", organist: "" },
        { location: "Balscote", time: "10am", typeofservice: "Village Service", contact: "Guy Edwards", organist: "Pat / Katharine" },
        { location: "Horley", time: "11am", typeofservice: "Holy Communion", contact: "Graeme Arthur", organist: "Charles?" },
    ]
},

{
    date: "2026-05-10",
    services: [
        { location: "Wroxton", time: "9:45am", typeofservice: "Village Service", contact: "Guy Edwards", organist: "" },
        { location: "Drayton", time: "11am", typeofservice: "Mattins", contact: "Guy Edwards", organist: "Marlene" },
        { location: "Hornton", time: "11am", typeofservice: "Village Service", contact: "Isabelle + Others", organist: "" },
        { location: "Shenington", time: "6pm", typeofservice: "Evening Worship", contact: "Guy Edwards", organist: "" },
    ]
},

{
    date: "2026-05-17",
    services: [
        { location: "Hanwell", time: "9am", typeofservice: "Holy Communion", contact: "Guy Edwards", organist: "" },
        { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Guy Edwards", organist: "Pat / Katharine" },
    ]
},

{
    date: "2026-05-24",
    services: [
        { location: "Wroxton", time: "9:45am", typeofservice: "Village Service (Pentecost)", contact: "Guy Edwards", organist: "Keith" },
        { location: "Drayton", time: "11am", typeofservice: "BCP Holy Communion", contact: "Alice Jolley", organist: "Marlene" },
        { location: "Hornton", time: "11am", typeofservice: "Village Service", contact: "Guy Edwards", organist: "Keith" },
    ]
},

{
    date: "2026-05-27",
    services: [
        { location: "Shenington", time: "10am", typeofservice: "Holy Communion", contact: "Glyn Evans", organist: "Pat" },
    ]
},

{
    date: "2026-05-31",
    services: [
        { location: "Drayton", time: "11am", typeofservice: "BCP Holy Communion (Trinity Sunday Benefice Service)", contact: "Guy Edwards", organist: "Marlene" },
    ]
}

];

// Function to format the date
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}

// Title
function createTitle() {
    return "<h2>This Week's Services</h2>";
}

// Date section
function createDateHTML(eventDate) {
    return `<div class="date"><strong>${formatDate(eventDate)}</strong></div>`;
}

// Service block
function createServiceHTML(service) {
    return `
        <div class="service">
            <div class="location"><strong>Location:</strong> ${service.location}</div>
            <div class="time"><strong>Time:</strong> ${service.time}</div>
            <div class="typeofservice"><strong>Service:</strong> ${service.typeofservice || 'N/A'}</div>
            <div class="contact"><strong>Minister:</strong> ${service.contact}</div>
            <div class="organist"><strong>Organist:</strong> ${service.organist || 'N/A'}</div>
        </div>
    `;
}

// Main schedule page
function displaySchedule() {

    const currentDate = new Date();
    const currentWeekEnd = new Date(currentDate);
    currentWeekEnd.setDate(currentDate.getDate() + 13);

    let scheduleHTML = '<br>';
    scheduleHTML += createTitle();

    scheduleData.forEach(day => {

        const [year, month, dayOfMonth] = day.date.split('-').map(Number);
        const eventDate = new Date(year, month - 1, dayOfMonth);

        if (eventDate >= currentDate && eventDate <= currentWeekEnd) {

            scheduleHTML += createDateHTML(eventDate);

            day.services.forEach(service => {
                scheduleHTML += createServiceHTML(service);
            });
        }

    });

    const scheduleContainer = document.getElementById('schedule-container');
    if (scheduleContainer) {
        scheduleContainer.innerHTML = scheduleHTML;
    }
}


// Home page version
function displayHomeSchedule() {

    const currentDate = new Date();
    const currentWeekEnd = new Date(currentDate);
    currentWeekEnd.setDate(currentDate.getDate() + 6);

    let scheduleHTML = "<br><h2>This Week's Church Services</h2>";

    scheduleData.forEach(day => {

        const [year, month, dayOfMonth] = day.date.split('-').map(Number);
        const eventDate = new Date(year, month - 1, dayOfMonth);

        if (eventDate >= currentDate && eventDate <= currentWeekEnd) {

            scheduleHTML += `<div class="date"><strong>${formatDate(eventDate)}</strong></div>`;

            day.services.forEach(service => {

                scheduleHTML += `
                    <div class="service">
                        <div class="location"><strong>Location:</strong> ${service.location}</div>
                        <div class="time"><strong>Time:</strong> ${service.time}</div>
                        <div class="typeofservice"><strong>Service:</strong> ${service.typeofservice || 'N/A'}</div>
                        <div class="contact"><strong>Minister:</strong> ${service.contact}</div>
                        <div class="organist"><strong>Organist:</strong> ${service.organist || 'N/A'}</div>
                    </div>
                `;

            });

        }

    });

    const homeContainer = document.getElementById('home-schedule-container');
    if (homeContainer) {
        homeContainer.innerHTML = scheduleHTML;
    }

}


// Run when page loads
document.addEventListener("DOMContentLoaded", function() {

    displaySchedule();
    displayHomeSchedule();

    // Refresh every 10 minutes instead of every second
    setInterval(displaySchedule, 600000);
    setInterval(displayHomeSchedule, 600000);

});