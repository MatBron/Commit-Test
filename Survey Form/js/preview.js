$(document).ready(function () {
    $('#start-survey-btn').on('click', function () {
        $('#registration-section').hide();
        $('#survey-section').show();
    });

    $('#preview-btn').on('click', function () {
        $('#registration-section').show();
        $('#survey-section').hide();
    });

    $('#survey-form').on('submit', function (e) {
        e.preventDefault();
        // Handle form submission logic here if needed
    });

    // Show/hide comment textareas based on radio button selections
    $('input[type="radio"]').on('change', function () {
        const $this = $(this);
        const commentTextarea = $this.closest('.radio-group').find('textarea');
        if ($this.val() === 'Dissatisfied') {
            commentTextarea.show();
        } else {
            commentTextarea.hide();
        }
    });
});