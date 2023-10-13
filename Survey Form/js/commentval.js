$(document).ready(function() {
    // Function to show/hide comment fields based on radio button selection
    function toggleCommentField(radioId, commentFieldId) {
        $(radioId).change(function() {
            if ($(this).val() === 'Dissatisfied') {
                $(commentFieldId).prop('required', true).show();
            } else {
                $(commentFieldId).prop('required', false).hide();
            }
        });
    }

    toggleCommentField("#ISS_Dissatisfied", "[name='ISS_Comment']");
    toggleCommentField("#PRI_Dissatisfied", "[name='PRI_Comment']");
    toggleCommentField("#EP_Dissatisfied", "[name='EP_Comment']");
});