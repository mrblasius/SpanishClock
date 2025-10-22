document.getElementById('spin-button').addEventListener('click', spinTime);

function spinTime() {
    const clockDisplay = document.getElementById('clock-display');
    
    // 1. Generate a random hour (0-23 for 24-hour format)
    const hour = Math.floor(Math.random() * 24); 
    
    // 2. Generate a random minute, focusing on 5-minute intervals for easier practice
    // This array holds the possible minutes (0, 5, 10, 15, ..., 55)
    const minuteIntervals = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const minute = minuteIntervals[Math.floor(Math.random() * minuteIntervals.length)];

    // 3. Format the time (ensure leading zeros: "05:07" not "5:7")
    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    
    const newTime = `${formattedHour}:${formattedMinute}`;
    
    // 4. Apply a quick "spin" visual effect before updating
    // First, make it small (visual spin-down)
    clockDisplay.style.transform = 'scale(0.8)'; 
    clockDisplay.style.opacity = '0.5';

    // Wait a brief moment, then update the time and "spin-up"
    setTimeout(() => {
        clockDisplay.textContent = newTime;
        clockDisplay.style.transform = 'scale(1)'; // Spin-up to normal size
        clockDisplay.style.opacity = '1';
    }, 200); // 200ms delay to create the effect
}

// Set a starting time when the page loads
window.onload = spinTime;
