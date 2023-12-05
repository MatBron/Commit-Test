function OCXAutosuggestSearch(){
	var current_obj = $('#search input[name=\'filter_name\']');
	
	$.ajax({
		url: 'index.php?route=module/autosuggest_search/search',
		data: 'filter_name=' + encodeURIComponent($(current_obj).val()),
		success: function(data){
			$('#popupAutoSuggestContent').html(data);
			
			customSetLocationAutoSPopup(current_obj);
			
			if (autoSPopupStatus == 0  ){  
				loadAutoSPopup();
			}	
		}
	});
}

$(document).ready(function(){
	$('#search input[name=\'filter_name\']').typeWatch({
		callback: OCXAutosuggestSearch,
		wait: 750,
		highlight: false,
		captureLength: 1	})

	$('#search input[name=\'filter_name\']').bind('keyup', function(){
		if ( ($(this).val().length < 1) && autoSPopupStatus ){
			disableAutoSPopup();
		}
	});
	
	$("#popupAutoSuggestClose").click(function(){
		disableAutoSPopup();
	});

	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && autoSPopupStatus==1){
			disableAutoSPopup();
		}
	});

});