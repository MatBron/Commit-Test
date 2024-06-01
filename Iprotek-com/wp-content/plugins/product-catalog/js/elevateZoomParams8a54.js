//var for_zoom;
//
//if(catalogThumbsZoom == "on"){
//    for_zoom = ".for_zoom img, .thumbs-block img";
//}
//else if(catalogThumbsZoom == "off"){
//    for_zoom = ".for_zoom img";
//}
if(typeof allowZooming != 'undefined') {

    if(view_num == 5) {
        jQuery(for_zoom).hover(function(){
            for_zoom = jQuery(this);
            zoom_start();
        },function(){
            zoom_resize();
        });
    }
    else{ zoom_start(); }
    
    jQuery(window).resize(function(){
        zoom_resize();
    });
}

function zoom_resize(){
        jQuery('img.zoomed').removeData('elevateZoom');//remove zoom instance from image
        jQuery('.zoomWrapper img.zoomed').unwrap();
        jQuery('.zoomContainer').remove();
        if(jQuery(window).width() > 640){
           if(view_num == 5) { jQuery(for_zoom).hover(function(){ for_zoom = jQuery(this); zoom_start(); }) } else{ zoom_start(); }
        }
        var image_width = jQuery('.main-image-block a').find("img").width();
        var image_height = jQuery('.main-image-block a').find("img").height();
        jQuery('.zoomWrapper').width(image_width);
        jQuery('.zoomWrapper').height(image_height);
}
function zoom_remove(){
        jQuery('img.zoomed').removeData('elevateZoom');//remove zoom instance from image
        jQuery('.zoomWrapper img.zoomed').unwrap();
        jQuery('.zoomContainer').remove();
}
function zoom_start(){
    //    alert(allowZooming);
        if(allowZooming == "on"){
            if(catalogZoomType == "window"){
                jQuery(for_zoom).elevateZoom({
                    responsive : true, // -
                    imageCrossfade : true, // -
                    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', // +
                    easingType : "zoomdefault", // -
                    easingDuration : 2000, // -
                    containLensZoom : false, //    +

                //    //////////////////////     Zoom Window      ///////////////////////

                    zoomType : catalogZoomType, // -    Lens,window,Inner
                    zoomWindowWidth : catalogWindowWidth, // + arandzin patuhani width
                    zoomWindowHeight : catalogWindowHeight, // + arandzin patuhani width
                    zoomWindowOffetx : catalogWindowOffetx, // + arandzin patuhani nkaric heravorutyun
                    zoomWindowOffety : catalogWindowOffety, // + arandzin patuhani nkaric heravorutyun
                    zoomWindowPosition : catalogWindowPosition, // + arandzin patuhani  tarber dirqer
                    zoomWindowFadeIn : catalogWindowFadeIn, // + nkaric arandzin xoshoracuyci korelu u galu fade- y
                    zoomWindowFadeOut : catalogWindowFadeOut, // + nkaric arandzin xoshoracuyci korelu u galu fade- y
                    borderSize : catalogBorderSize, // + arandzin xoshoracuyci bordery
                    borderColour : "#" + catalogBorderColour, // + arandzin xoshoracuyci guyn
                    lensSize : catalogLensSize, // + window - vaxt zoom i chapy auto
                    constrainSize: 200,

                       //////////////////////     Lens Options      ///////////////////////

                //    lensBorder : false,
                    lensFadeIn : catalogLensFadeIn, // + nkari vri xoshoracuyci korelu u galu fade- y
                    lensFadeOut : catalogLensFadeOut, // +
                //    zoomLens : catalogZoomLens, // + xoshoracuyci scrolly  - chashxatec
                    lensShape : catalogLensShape, // + kara lini square [] nkari vri cursor-xoshoracuycy
                    lensColour : "#" + catalogLensColour, // + mkan xoshoeracuyci guyny
                    lensOpacity : catalogLensOpacity, // + mkan xoshoeracuyci opacity
                    lenszoom : false, // + mkan xoshoeracuyci zumy
                    cursor : catalogCursor,  // + cursor-y default, cursor, crosshair
                    scrollZoom : catalogScrollZoom, // +
                    easing : catalogEasing, // +

                    tint : catalogTint,     // + overlay-y
                    tintColour : "#" + catalogTintColour,    // + overlayi guyby
                    tintOpacity : catalogTintOpacity,     // + overlayi opacityn
                    zoomTintFadeIn : catalogZoomTintFadeIn, // // + overlay-i galu u gnaluy fade-y
                    zoomTintFadeOut : catalogZoomTintFadeOut, // +

                //    lensBorder : 100, // -      chashxatec

                });
            }
            else {
                jQuery(for_zoom).elevateZoom({
                    responsive : true, // -
                    imageCrossfade : true, // -
                    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', // +
                    easingType : "zoomdefault", // -
                    easingDuration : 2000, // -
                    containLensZoom : true, //    +
                    zoomType : catalogZoomType, // -    ashxatan    Lens,window,Inner
                    lensFadeIn : catalogLensFadeIn, // + nkari vri xoshoracuyci korelu u galu fade- y
                    lensFadeOut : catalogLensFadeOut, // +
                    lensShape : catalogLensShape, // + kara lini square [] nkari vri cursor-xoshoracuycy
                    lensColour : "#" + catalogLensColour, // + mkan xoshoeracuyci guyny
                    lensOpacity : catalogLensOpacity, // + mkan xoshoeracuyci opacity
                    lenszoom : false, // + mkan xoshoeracuyci zumy
                    cursor : catalogCursor,  // + cursor-y default, cursor, crosshair
                    scrollZoom : catalogScrollZoom, // +
                    easing : catalogEasing, // +

                });
            }
        }
        
        
        
}