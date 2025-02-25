function updateCollectionInfo() {
    const startDate = new Date('2025-02-21'); // Starting from February 21, 2025
    const today = new Date();
    
    // Calculate the number of weeks since the start date
    const timeDiff = today - startDate;
    const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    
    // Determine the next collection date (next Friday)
    const nextCollectionDate = new Date(today);
    nextCollectionDate.setDate(today.getDate() + (5 - today.getDay() + 7) % 7); // Next Friday

    // Determine which bin will be collected
    let binType;
    
    // Set the bin type based on the current week
    if (weeksDiff % 2 === 0) {
        binType = "Rubbish"; // This week is rubbish
    } else {
        binType = "Recycling/Garden Waste"; // Next week is recycling
    }
    
    // Set the icon based on the bin type
    const recyclingIcons = document.getElementById('recycling-icons');
    const rubbishIcon = document.getElementById('rubbish-icon');
    const binText = document.getElementById('bin-text');
    
    if (binType === "Recycling/Garden Waste") {
        recyclingIcons.style.display = "block"; // Show recycling icons
        rubbishIcon.style.display = "none"; // Hide rubbish icon
    } else {
        recyclingIcons.style.display = "none"; // Hide recycling icons
        rubbishIcon.style.display = "block"; // Show rubbish icon
    }

    // Format the date to a more readable format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = nextCollectionDate.toLocaleDateString('en-UK', options);

    // Set the inner HTML for binText with improved layout
    binText.innerHTML = `
        <h3>Next Collection</h3>
        <br> 
        <p>${formattedDate}</p>
        <p>${binType}</p>
    `;
}

// Initialize the collection info on page load
updateCollectionInfo();