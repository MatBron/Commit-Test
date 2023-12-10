$(document).ready(function () {
    var sub_category = 0
      $('#box_searchopad select[name=filter_category_id]').change(function () {

        $('#box_searchopad select[name=\'filter_manufacturer_id\']').html("<option value=\"\">All Manufacturers</option>")

      $('#box_searchopad #loader').html('<img src="../catalog/view/theme/default/image/ajax_load.gif" >&nbsp;&nbsp;')

        if ($('#box_searchopad input[name=filter_sub_category]').prop('checked')) {sub_category = 1} else {sub_category = 0}


        $('#box_searchopad .cell-box select[name=\'filter_manufacturer_id\']').load('index.php?route=module/optionssearch/manufacturer&filter_category_id=' + $('#box_searchopad #filter_category_id').attr('value') + '&filter_sub_category=' + sub_category);

        $('#box_searchopad #group').load('index.php?route=module/optionssearch/groups&filter_category_id=' + $(this).val() + '&filter_sub_category=' + sub_category,
        function () {
          $('#box_searchopad #loader').empty();
        });
    });

        $('#box_searchopad input[name=filter_sub_category]').change(function () {

          $('#box_searchopad select[name=\'filter_manufacturer_id\']').html("<option value=\"\">All Manufacturers</option>")

      $('#box_searchopad #loader').html('<img src="../catalog/view/theme/default/image/ajax_load.gif" >&nbsp;&nbsp;')

          if ($('#box_searchopad input[name=filter_sub_category]').prop('checked')) {sub_category = 1} else {sub_category = 0}

          $('#box_searchopad select[name=\'filter_manufacturer_id\']').load('index.php?route=module/optionssearch/manufacturer&filter_category_id=' + $('#box_searchopad #filter_category_id').attr('value') + '&filter_sub_category=' + sub_category);

          $('#box_searchopad #group').load('index.php?route=module/optionssearch/groups&filter_category_id=' + $('#box_searchopad #filter_category_id').attr('value') + '&filter_sub_category=' + sub_category,
          function () {
            $('#box_searchopad #loader').empty();
        });
    });


          $('#box_searchopad select[name=filter_manufacturer_id]').change(function () {
            $('#box_searchopad #loader').html('<img src="../catalog/view/theme/default/image/ajax_load.gif" >&nbsp;&nbsp;')

      if ($('#box_searchopad input[name=filter_sub_category]').prop('checked')) {sub_category = 1} else {sub_category = 0}

          $('#box_searchopad #group').load('index.php?route=module/optionssearch/groups&filter_category_id=' + $('#box_searchopad #filter_category_id').attr('value') + '&filter_sub_category=' + sub_category + '&filter_manufacturer_id=' + $(this).val(),
          function () {
            $('#box_searchopad #loader').empty();
        });
    });

  });