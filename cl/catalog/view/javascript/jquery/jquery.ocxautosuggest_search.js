//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var autoSPopupStatus = 0;

//loading popup with jQuery magic!
function loadAutoSPopup(){
	//loads popup only if it is disabled
	if(autoSPopupStatus==0){
		$("#popupAutoSuggest").slideDown("slow");
		autoSPopupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disableAutoSPopup(){
	//disables popup only if it is enabled
	if(autoSPopupStatus==1){
		//$("#popupAutoSuggest").fadeOut("slow");
		$("#popupAutoSuggest").slideUp("slow");
		autoSPopupStatus = 0;
	}
}


function customSetLocationAutoSPopup(object){
	$("#popupAutoSuggest").css({
		"left": $(object).offset().left,
		"top": $(object).offset().top + $(object).parent().height(),
		"width": $(object).parent().width() - 6
	});
}

//centering popup
function centerAutoSPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupAutoSuggest").height();
	var popupWidth = $("#popupAutoSuggest").width();
	//centering
	$("#popupAutoSuggest").css({
		"left": windowWidth/2-popupWidth/2
	});
	
}