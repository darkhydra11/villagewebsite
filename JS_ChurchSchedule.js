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
    date: "2026-05-18",
    services: [
        { location: "St. Thomas of Canterbury, Wroxton", time: "7:30pm", typeofservice: "Celebratory Mass" },
    
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

function formatDate(date) {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString('en-GB', options);

}


// Page title
function createTitle(titleText) {

    return `<h2>${titleText}</h2>`;

}


// Date heading
function createDateHTML(eventDate) {

    return `
        <div class="date">
            <strong>${formatDate(eventDate)}</strong>
        </div>
    `;

}


// Individual service block
function createServiceHTML(service) {

    return `
        <div class="service">

            <div class="location">
                <strong>Location:</strong> ${service.location || 'N/A'}
            </div>

            <div class="time">
                <strong>Time:</strong> ${service.time || 'N/A'}
            </div>

            <div class="typeofservice">
                <strong>Service:</strong> ${service.typeofservice || 'N/A'}
            </div>

            <div class="contact">
                <strong>Minister:</strong> ${service.contact || 'N/A'}
            </div>

            <div class="organist">
                <strong>Organist:</strong> ${service.organist || 'N/A'}
            </div>

        </div>
    `;

}


// Generic schedule renderer
function renderSchedule(containerId, title, daysAhead) {

    // Today's date
    const currentDate = new Date();

    // Reset time to midnight
    currentDate.setHours(0, 0, 0, 0);

    // End date
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + daysAhead);

    let scheduleHTML = '<br>';
    scheduleHTML += createTitle(title);

    scheduleData.forEach(day => {

        // Convert YYYY-MM-DD into Date object
        const [year, month, dayOfMonth] = day.date.split('-').map(Number);

        const eventDate = new Date(year, month - 1, dayOfMonth);

        // Reset event time too
        eventDate.setHours(0, 0, 0, 0);

        // Check if event is within range
        if (eventDate >= currentDate && eventDate <= endDate) {

            scheduleHTML += createDateHTML(eventDate);

            day.services.forEach(service => {

                scheduleHTML += createServiceHTML(service);

            });

        }

    });

    // Display in page container
    const container = document.getElementById(containerId);

    if (container) {

        container.innerHTML = scheduleHTML;

    }

}


// Full schedule page
function displaySchedule() {

    renderSchedule(
        'schedule-container',
        "This Week's Services",
        13
    );

}


// Homepage schedule
function displayHomeSchedule() {

    renderSchedule(
        'home-schedule-container',
        "This Week's Church Services",
        6
    );

}


// Run when page loads
document.addEventListener('DOMContentLoaded', function () {

    displaySchedule();
    displayHomeSchedule();

    // Refresh every 10 minutes
    setInterval(displaySchedule, 600000);
    setInterval(displayHomeSchedule, 600000);

});