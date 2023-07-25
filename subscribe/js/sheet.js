const scriptURL = 'https://script.google.com/macros/s/AKfycbzBvLnPQrW90lTWJztkTc-7FolBs6_cdMgoBeKfpWDe59IbvUVCcMuIhmoqo5FYZxDX2A/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})