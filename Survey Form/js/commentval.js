$(document).ready(function() {
    // Function to show/hide comment fields based on radio button selection
    function toggleCommentField(radioId, commentFieldId, showOnValue) {
        $(radioId).change(function() {
            if ($(this).val() === showOnValue) {
                $(commentFieldId).prop('required', true).show();
            } else {
                $(commentFieldId).prop('required', false).hide();
            }
        });
    }

    toggleCommentField("#ISS_Dissatisfied", "[name='ISS_Comment']", 'Dissatisfied');
    toggleCommentField("#PRI_Dissatisfied", "[name='PRI_Comment']", 'Dissatisfied');
    toggleCommentField("#EP_Dissatisfied", "[name='EP_Comment']", 'Dissatisfied');
    toggleCommentField("#CSR_No", "[name='CSR_Comment']", 'No');
});
