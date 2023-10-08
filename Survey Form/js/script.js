const scriptURL = 'https://script.google.com/macros/s/AKfycbwMlhRDqV7XjxhWB5sTaNdnufBmgHzgYvwFwbjFGTAUHo4P1cWUw10LjY-POw9qZjXv/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        form.reset()
        alert('Thank you for taking the time to give us your feedback. ')
        window.location.href = 'thankyou.html';

    })
    .catch(error => console.error('Error!', error.message))
})