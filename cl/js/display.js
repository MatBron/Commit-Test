function display(view) {
	if (view == 'list') {
		$('.product-grid').attr('class', 'product-list');
		
		$('.product-list .ecart-list > div').each(function(index, element) {
			html  = '<div class="right">';
			
			var price = $(element).find('.price').html();
			
			if (price != null) {
				html += '<div class="price">' + price  + '</div>';
			}
			
			html += '  <div class="cart">' + $(element).find('.cart').html() + '</div>';
			html += '  <div class="wishlist">' + $(element).find('.wishlist').html() + '</div>';
			html += '  <div class="compare">' + $(element).find('.compare').html() + '</div>';
			html += '</div>';			
			
			html += '<div class="left">';
			
			var image = $(element).find('.image').html();
			
			if (image != null) { 
				html += '<div class="image">' + image + '</div>';
			}
					
			html += '  <div class="name">' + $(element).find('.name').html() + '</div>';
			html += '  <div class="description">' + $(element).find('.description').html() + '</div>';
			
			var rating = $(element).find('.rating').html();
			
			if (rating != null) {
				html += '<div class="rating">' + rating + '</div>';
			}
				
			html += '</div>';
	
			$(element).html(html);
		});	
		
		$('.display').html('&nbsp;&nbsp;<a onclick="display(\'grid\');"><img src="../catalog/view/theme/eCart/image/product-grid.png"></a>&nbsp;<img src="../catalog/view/theme/eCart/image/product-list-active.png">');	
		
		$.cookie('display', 'list');
	} else {
		$('.product-list').attr('class', 'product-grid');
		
		$('.product-grid .ecart-list > div').each(function(index, element) {
			html = '';
			
			var image = $(element).find('.image').html();
			
			if (image != null) {
				html += '<div class="image">' + image + '</div>';
			}
			
			html += '<div class="name">' + $(element).find('.name').html() + '</div>';
			html += '<div class="description">' + $(element).find('.description').html() + '</div>';
			
			var price = $(element).find('.price').html();
			
			if (price != null) {
				html += '<div class="price">' + price  + '</div>';
			}
			
			var rating = $(element).find('.rating').html();
			
			if (rating != null) {
				html += '<div class="rating">' + rating + '</div>';
			}
						
			html += '<div class="cart">' + $(element).find('.cart').html() + '</div>';
			html += '<div class="wishlist">' + $(element).find('.wishlist').html() + '</div>';
			html += '<div class="compare">' + $(element).find('.compare').html() + '</div>';
			
			$(element).html(html);
		});	
			
		$('.display').html('&nbsp;&nbsp;<img src="../catalog/view/theme/eCart/image/product-grid-active.png">&nbsp;<a onclick="display(\'list\');"><img src="../catalog/view/theme/eCart/image/product-list.png"></a>');
		
		$.cookie('display', 'grid'); 
	}
}

view = $.cookie('display');

if (view) {
	display(view);
} else {
	display('list');
}