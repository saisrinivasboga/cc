function showContent(content) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content section
    document.getElementById(content).style.display = 'block';
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block'; // Show the response message
    setTimeout(() => {
        responseMessage.style.display = 'none'; // Hide the message after 3 seconds
    }, 3000);
    document.getElementById('contact-form').reset(); // Reset the form fields
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwr79mE8qzHIllpBBwAD06NiX5CcfvuXaTLWBpVAsJcJN7b67p-CgdDvfDVvG8IlCXm/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Success!', response);
        document.getElementById('response-message').style.display = 'block'; // Show response message
        setTimeout(() => {
            document.getElementById('response-message').style.display = 'none'; // Hide the message after 3 seconds
        }, 3000);
        form.reset(); // Reset form fields
    })
    .catch(error => {
        console.error('Error!', error.message);
    });
});
