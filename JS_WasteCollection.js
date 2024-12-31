function updateCollectionInfo() {
    const startDate = new Date('2025-01-03'); // Starting from January 3, 2025
    const today = new Date();
    
    // Calculate the number of weeks since the start date
    const timeDiff = today - startDate;
    const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    
    // Determine the next collection date (next Friday)
    const nextCollectionDate = new Date(today);
    nextCollectionDate.setDate(today.getDate() + (5 - today.getDay() + 7) % 7); // Next Friday

    // Determine which bin will be collected
    const binType = (weeksDiff % 2 === 0) ? "Recycling/Garden Waste" : "Rubbish";
    
    // Set the icon based on the bin type
    const recyclingIcons = document.getElementById('recycling-icons');
    const rubbishIcon = document.getElementById('rubbish-icon');
    const binText = document.getElementById('bin-text');
    
    if (binType === "Recycling/Garden Waste") {
        recyclingIcons.style.display = "block"; // Show recycling icons
        rubbishIcon.style.display = "none"; // Hide rubbish icon
        binText.innerHTML = `Next Collection: ${nextCollectionDate.toDateString()} - ${binType}`;
    } else {
        recyclingIcons.style.display = "none"; // Hide recycling icons
        rubbishIcon.style.display = "block"; // Show rubbish icon
        binText.innerHTML = `Next Collection: ${nextCollectionDate.toDateString()} - ${binType}`;
    }
}

// Initialize the collection info on page load
updateCollectionInfo();