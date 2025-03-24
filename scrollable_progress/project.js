// Variables
const expandingCapsule = document.querySelector('.expanding-capsule');
const progressBar = document.getElementById('progress-bar');
const initialCapsuleHeight = window.innerHeight - 400; // Initial capsule height
const maxAdditionalHeight = 400; // Maximum additional height to add

// Calculate total scroll height
const scrollHeight = document.body.scrollHeight - window.innerHeight;

// Handle scroll event
function handleScroll() {
    // Calculate scroll progress (0 to 1)
    const scrollProgress = window.scrollY / scrollHeight;
    
    // Update progress bar
    progressBar.style.width = `${scrollProgress * 100}%`;
    
    // Calculate capsule expansion based on scroll position
    // We want to elongate the capsule as we scroll down
    const additionalHeight = scrollProgress * maxAdditionalHeight;
    
    // Update expandable capsule height
    expandingCapsule.style.bottom = `${250 - additionalHeight}px`;
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial setup
handleScroll();