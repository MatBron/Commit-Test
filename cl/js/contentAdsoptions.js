$('#box_search input').keydown(function(e) {
	if (e.keyCode == 13) {
		contentAdsoptions();
	}
  });

  function contentAdsoptions() {
	url = 'index.php?route=product/optionssearch';
        
	var filter_name = $('#box_searchopad #filter_name').attr('value');

	if (filter_name) {
		url += '&filter_name=' + encodeURIComponent(filter_name);
	}

	if ($('#box_searchopad #filter_description').attr('checked')) {
		url += '&filter_description=1';
	}
         
        
        
	var filter_model = $('#box_searchopad #filter_model').attr('value');

	if (filter_model) {
		url += '&filter_model=' + encodeURIComponent(filter_model);
	}
 
    
	var filter_category_id = $('#box_searchopad #filter_category_id').attr('value');

	if (filter_category_id) {
		url += '&filter_category_id=' + encodeURIComponent(filter_category_id);
	}

	var filter_sub_category = $('#box_searchopad input[name=\'filter_sub_category\']:checked').attr('value');
  
	if (filter_sub_category) {
		url += '&filter_sub_category=true';
	}

 
       var filter_manufacturer_id = $('#box_searchopad #filter_manufacturer_id').attr('value');

	if (filter_manufacturer_id) {
		url += '&filter_manufacturer_id=' + encodeURIComponent(filter_manufacturer_id);
	}
 
    
      var filter_pricemin = $('#box_searchopad #filter_pricemin').attr('value');

	if (filter_pricemin) {
		url += '&filter_pricemin=' + encodeURIComponent(filter_pricemin);
	}

       var filter_pricemax = $('#box_searchopad #filter_pricemax').attr('value');

	if (filter_pricemax) {
		url += '&filter_pricemax=' + encodeURIComponent(filter_pricemax);
	}


         var groups='';
              $.each($('#box_searchopad #filter_groups'), function (key,val) {
                   if(val.value != '') {
                  groups += "&" + val.name + "=" + val.value
                   }
               });
        url += groups

	location = url;
}