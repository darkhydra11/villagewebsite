const scheduleData = [

{
    date: "2026-04-03",
    services: [
        { location: "Horley", time: "12 noon", typeofservice: "Stations of the Cross", contact: "Guy Edwards", organist: "Charles" },
    ]
},

{
    date: "2026-04-04",
    services: [
        { location: "Balscote", time: "8pm", typeofservice: "Easter Fire and Blessing of the New Easter Candles", contact: "Guy Edwards", organist: "TBC" },
    ]
},

{
    date: "2026-04-05",
    services: [
        { location: "Hanwell", time: "9am", typeofservice: "Easter Communion", contact: "Guy Edwards", organist: "" },
        { location: "Horley", time: "11am", typeofservice: "Easter Communion", contact: "Guy Edwards", organist: "Charles" },
        { location: "Hornton", time: "11am", typeofservice: "Easter Communion", contact: "TBC", organist: "Keith" },
        { location: "Wroxton", time: "9:45am", typeofservice: "Easter Communion", contact: "Graeme Arthur", organist: "Keith" },
        { location: "Balscote", time: "10am", typeofservice: "Easter Service with Communion by Extension", contact: "Jonathan Perry", organist: "Pat / Katharine" },
        { location: "Drayton", time: "11am", typeofservice: "Easter Communion", contact: "Graeme Arthur", organist: "Marlene" },
        { location: "Shenington", time: "6pm", typeofservice: "Easter Communion", contact: "Guy Edwards", organist: "" },
    ]
},

{
    date: "2026-04-12",
    services: [
        { location: "Hornton", time: "11am", typeofservice: "Holy Communion", contact: "Revd Jane Haslam", organist: "Keith" },
    ]
},

{
    date: "2026-04-19",
    services: [
        { location: "Hanwell", time: "9am", typeofservice: "Holy Communion", contact: "Guy Edwards", organist: "" },
        { location: "Balscote", time: "10am", typeofservice: "Holy Communion", contact: "Revd Olwen Smith", organist: "Pat / Katharine" },
    ]
},

{
    date: "2026-04-22",
    services: [
        { location: "Shenington", time: "10am", typeofservice: "Holy Communion", contact: "Revd Glyn Evans", organist: "Pat" },
    ]
},

{
    date: "2026-04-26",
    services: [
        { location: "Wroxton", time: "9:45am", typeofservice: "Holy Communion", contact: "Revd Alice Jolley", organist: "Keith" },
        { location: "Drayton", time: "11am", typeofservice: "BCP Holy Communion", contact: "Guy Edwards", organist: "Marlene" },
        { location: "Hornton", time: "11am", typeofservice: "Holy Communion", contact: "Revd Alice Jolley", organist: "Keith" },
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