document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-now');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');
  
    bookButtons.forEach(button => {
      button.addEventListener('click', function() {
        modal.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle form submission (e.g., send booking details to server)
      // For demonstration purposes, just close the modal
      modal.style.display = 'none';
    });
  });