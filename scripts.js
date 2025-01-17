
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Get the target ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been submitted!');
    document.getElementById('contact-form').reset(); 
});

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('current-datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();