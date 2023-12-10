$(document).ready(function () {


    $("#box_searchopad input[name=\'filter_name\']").autocomplete({
      delay: 0,
      source: function (request, response) {
        if ($('#box_searchopad input[name=filter_description]').prop('checked')) { filter_description = 1 } else { filter_description = 0 }
        $.ajax({
          url: 'index.php?route=module/optionssearch/autocomplete&filter_name=' + encodeURIComponent(request.term) + '&filter_description=' + encodeURIComponent(filter_description),
          dataType: 'json',
          success: function (json) {
            response($.map(json, function (item) {
              return {
                label: item.name,
                image: item.image
              }
            }));
          }
        });
      },
      select: function (event, ui) {
        $("#box_searchopad input[name=\'filter_name\']").val(ui.item.label);
        return false;
      }
    }).data("autocomplete")._renderItem = function (ul, item) {
      return $("<li></li>")
        .data("item.autocomplete", item)
        .append("<a><table><tr>" + "<td><img src='" + item.image + "'></td>" + "<td valign=middle>&nbsp;" + item.label + "</td></tr></table></a>")
        .appendTo(ul);
    };



    $("#box_searchopad input[name=\'filter_model\']").autocomplete({
      delay: 0,
      source: function (request, response) {
        $.ajax({
          url: 'index.php?route=module/optionssearch/autocomplete&filter_model=' + encodeURIComponent(request.term),
          dataType: 'json',
          success: function (json) {
            response($.map(json, function (item) {
              return {
                label: item.model,
                image: item.image
              }
            }));
          }
        });
      },
      select: function (event, ui) {
        $("#box_searchopad input[name=\'filter_model\']").val(ui.item.label);
        return false;
      }
    }).data("autocomplete")._renderItem = function (ul, item) {
      return $("<li></li>")
        .data("item.autocomplete", item)
        .append("<a><table><tr>" + "<td><img src='" + item.image + "'></td>" + "<td valign=middle style='padding-left:5px;'>" + item.label + "</td></tr></table></a>")
        .appendTo(ul);
    };



    $('#box_searchopad input[name=filter_name]').click(function () {
      $('#box_searchopad input[name=\'filter_model\']').val("")
    });
    $('#box_searchopad input[name=filter_description]').click(function () {
      $('#box_searchopad input[name=\'filter_model\']').val("")
    });
    $('#box_searchopad input[name=filter_model]').click(function () {
      $('#box_searchopad input[name=\'filter_name\']').val("")
    });


  });