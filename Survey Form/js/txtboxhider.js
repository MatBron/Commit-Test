$(function () {
    $('#ISS_Dissatisfied').click(function () {
        $('.txb_iss').attr('hidden', false);
    });
    $('#ISS_Satisfied').click(function () {
        $('.txb_iss').attr('hidden', true);
    });
    $('#ISS_VerySatisfied').click(function () {
        $('.txb_iss').attr('hidden', true);
    });

    $('#PRI_Dissatisfied').click(function () {
        $('.txb_pri').attr('hidden', false);
    });
    $('#PRI_Satisfied').click(function () {
        $('.txb_pri').attr('hidden', true);
    });
    $('#PRI_VerySatisfied').click(function () {
        $('.txb_pri').attr('hidden', true);
    });

    $('#EP_Dissatisfied').click(function () {
        $('.txb_ep').attr('hidden', false);
    });
    $('#EP_Satisfied').click(function () {
        $('.txb_ep').attr('hidden', true);
    });
    $('#EP_VerySatisfied').click(function () {
        $('.txb_ep').attr('hidden', true);
    });

    $('#CSR_Yes').click(function () {
        $('.txb_csr').attr('hidden', true);
    });
    $('#CSR_No').click(function () {
        $('.txb_csr').attr('hidden', false);
    });
});