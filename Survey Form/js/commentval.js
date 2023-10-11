// Number 4 Question
// Add an event listener to the "Yes" radio button.
document.querySelector('input[name="CSR"][value="Yes"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#CSR_Comment').type = 'hidden';
});
// Add an event listener to the "No" radio button.
document.querySelector('input[name="CSR"][value="No"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to text.
    document.querySelector('#CSR_Comment').type = 'text';
});

// Number 3 question
document.querySelector('input[name="EP"][value="Dissatisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to text.
    document.querySelector('#EP_Comment').type = 'text';
});
document.querySelector('input[name="EP"][value="Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#EP_Comment').type = 'hidden';
});
document.querySelector('input[name="EP"][value="Very Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#EP_Comment').type = 'hidden';
});

// Number 2 question
document.querySelector('input[name="PRI"][value="Dissatisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to text.
    document.querySelector('#PRI_Comment').type = 'text';
});
document.querySelector('input[name="PRI"][value="Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#PRI_Comment').type = 'hidden';
});
document.querySelector('input[name="PRI"][value="Very Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#PRI_Comment').type = 'hidden';
});

// Number 1 question
document.querySelector('input[name="ISS"][value="Dissatisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to text.
    document.querySelector('#ISS_Comment').type = 'text';
});
document.querySelector('input[name="ISS"][value="Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#ISS_Comment').type = 'hidden';
});
document.querySelector('input[name="ISS"][value="Very Satisfied"]').addEventListener('change', function () {
    // Change the type of the commentBox input field to hidden.
    document.querySelector('#ISS_Comment').type = 'hidden';
});
