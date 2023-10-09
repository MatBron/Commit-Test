const scriptURL = 'https://script.google.com/macros/s/AKfycbwMlhRDqV7XjxhWB5sTaNdnufBmgHzgYvwFwbjFGTAUHo4P1cWUw10LjY-POw9qZjXv/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  
  if (confirm("Do you want to submit your form?")) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Show an alert instead of updating the span
            window.location.href = 'thankyou.html';
        })
        .catch(error => console.error('Error!', error.message));
  } 

});