/* Click color change image product */
jQuery(document).ready(function($) {
  jQuery('.engoj_select_color a').each(function(){
    jQuery(this).on("click",function(){
      var engoImage = jQuery(this).data('engojvariant-img');
      jQuery(this).parents('.engoj_grid_parent').find('.engoj_find_img img').attr({ src: engoImage }); 
      return false;
    });
  });
});

/* Live search */
var engoAutoComplate = {
  initProductsRecently: function() {
    var self = this;
    if (!jQuery.cookie('brilliant_products_recently') || jQuery.cookie('brilliant_products_recently') == null) {      
      $(".engoj-recently-wrapper").append('<div class="no-products" style="flex-direction: column;"> <!--?xml version="1.0" encoding="iso-8859-1"?--> <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewbox="0 0 455 455" style="enable-background:new 0 0 455 455;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M360.967,130.599c-4.06-0.818-8.018,1.8-8.841,5.86c-0.823,4.06,1.801,8.018,5.86,8.841 c1.147,0.232,2.013,1.286,2.013,2.45v160c0,1.355-1.145,2.5-2.5,2.5H179.676c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H357.5 c9.649,0,17.5-7.851,17.5-17.5v-160C375,139.46,369.099,132.247,360.967,130.599z"></path> <path d="M274.824,130.25H97.5c-9.649,0-17.5,7.851-17.5,17.5v160c0,8.063,5.48,15.046,13.326,16.982 c0.604,0.149,1.208,0.221,1.803,0.221c3.369,0,6.432-2.287,7.276-5.705c0.992-4.021-1.463-8.086-5.484-9.078 c-0.955-0.235-1.92-1.143-1.92-2.42v-160c0-1.355,1.145-2.5,2.5-2.5h177.324c4.142,0,7.5-3.357,7.5-7.5 S278.966,130.25,274.824,130.25z"></path> <path d="M235.363,170.798c-2.655-0.363-5.3-0.548-7.863-0.548c-31.706,0-57.5,25.794-57.5,57.5c0,2.563,0.185,5.209,0.548,7.863 c0.515,3.759,3.731,6.483,7.421,6.483c0.339,0,0.682-0.023,1.027-0.07c4.104-0.562,6.975-4.345,6.413-8.448 c-0.271-1.982-0.409-3.943-0.409-5.828c0-23.435,19.065-42.5,42.5-42.5c1.884,0,3.845,0.138,5.828,0.409 c4.108,0.564,7.886-2.309,8.448-6.413C242.338,175.143,239.467,171.359,235.363,170.798z"></path> <path d="M219.127,284.636c2.789,0.407,5.605,0.614,8.373,0.614c31.706,0,57.5-25.794,57.5-57.5c0-2.77-0.207-5.587-0.613-8.373 c-0.599-4.099-4.408-6.934-8.505-6.337c-4.099,0.599-6.936,4.406-6.337,8.505c0.303,2.071,0.456,4.158,0.456,6.205 c0,23.435-19.065,42.5-42.5,42.5c-2.044,0-4.132-0.153-6.205-0.456c-4.099-0.6-7.907,2.238-8.505,6.337 S215.028,284.037,219.127,284.636z"></path> <path d="M318.5,203.25c9.098,0,16.5-7.402,16.5-16.5c0-8.318-6.227-15.355-14.484-16.37c-2.293-0.277-4.585,0.509-6.218,2.142 l-10.027,10.027c-1.633,1.632-2.422,3.926-2.141,6.217C303.145,197.023,310.183,203.25,318.5,203.25z"></path> <path d="M117.5,114.75h30c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-30c-4.142,0-7.5,3.357-7.5,7.5 S113.358,114.75,117.5,114.75z"></path> <path d="M388.367,66.633C345.397,23.664,288.268,0,227.5,0S109.603,23.664,66.633,66.633C23.664,109.603,0,166.732,0,227.5 s23.664,117.897,66.633,160.867C109.603,431.336,166.732,455,227.5,455s117.897-23.664,160.867-66.633 C431.336,345.397,455,288.268,455,227.5S431.336,109.603,388.367,66.633z M15,227.5C15,110.327,110.327,15,227.5,15 c55.894,0,106.807,21.703,144.783,57.11L72.11,372.283C36.703,334.307,15,283.395,15,227.5z M227.5,440 c-55.894,0-106.807-21.703-144.783-57.11L382.89,82.717C418.297,120.693,440,171.606,440,227.5C440,344.673,344.673,440,227.5,440z "></path> </g> </svg> <div class="title_noprod"> <span> Sorry, there are no products. </span> </div> </div>');
    } else {
      $(".engoj-recently-wrapper > .no-products").remove();
      var arr = jQuery.cookie('brilliant_products_recently').split('|'); // split string to array
      for ( var i = 0; i < arr.length; i++){
        var handle = arr[i]; 
        self.ajaxProductsRecently(handle);
      }
      
      $('.js_prod_recent').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-brand-prev fa fa-angle-up"></button>',
        nextArrow: '<button type="button" class="slick-brand-next fa fa-angle-down"></button>',
        
         responsive: [
          {
            breakpoint: 1200,
            settings: {
            }
          },
          {
            breakpoint: 768,
            settings: {
            }
          },

          {
            breakpoint: 574,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    }
  },
  
  ajaxProductsRecently: function(handle) {
    var ajaxUrl = '/products/'+handle+'.js',
        result     = new Array();
    jQuery.ajax({
      type: 'GET',
      dataType: "json",
      url: ajaxUrl,
      beforeSend: function() {
        jQuery(".js_prod_recent").append('<div class="items d-flex align-items-md-center align-items-start engoj-recently-'+handle+'"><svg xml:space="preserve" style="enable-background:new 0 0 50 50;margin-top: -1px;" viewBox="0 0 24 30" height="20px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="0"><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="8">      <animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="16"><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect></svg></div>');
      },
      success: function(product) {
        var title            = product.title,
            price            = product.price,
            handle           = product.handle,
            image            = product.featured_image,
            template         = '<div class="img_left"> <a href="/products/'+ handle +'"> <img src="' + image + '" class="img-responsive" alt="'+title+'"> </a> </div> <div class="info_right position-absolute"> <a class="product-title" href="/products/'+ handle +'">'+title+'</a> <p class="price-product"><span class="price">'+ Shopify.formatMoney(price, window.money_format) +'</span></p> <div class="product-icon-action"> <div class="add-to-cart"> <a href="/products/'+ handle +'"><span>Buy now</span></a> </div> </div> </div>';       
        jQuery('.engoj-recently-'+handle).html(template);
      }
    });
  },
  
  ajaxProductItems : function( input_element, result_wrapper, result_element ){
    var ajaxUrl  = '/search',
        result     = new Array(),
        keyword   = input_element.val();

    jQuery.ajax({
        type: 'GET',
        data: {
            q: "*" + keyword + "*",
            type: "product",
            view: "json",
        },
        dataType: "json",      
        url: ajaxUrl,
        beforeSend: function() {
          result_wrapper.show();
          result_element.html('<p class="col-12"><svg xml:space="preserve" style="enable-background:new 0 0 50 50;margin-top: -1px;" viewBox="0 0 24 30" height="20px" width="21px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="0"><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="8">      <animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.15s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect><rect opacity="0.2" fill="#000" height="8" width="3" y="10" x="16"><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="0.2; 1; .2" attributeType="XML" attributeName="opacity"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 20; 10" attributeType="XML" attributeName="height"/><animate repeatCount="indefinite" dur="0.6s" begin="0.3s" values="10; 5; 10" attributeType="XML" attributeName="y"/></rect></svg> Loading...</p>');
        },
        complete:function(){
        },
        success: function ( reponse ) {
          var htmlbox = '';
          //result_element.html('');
          if( reponse.length > 0 ){
            for (var i = 0; i < reponse.length; i++) {

              var item              = reponse[i],
                  title            = item.title,
                  price            = item.price,
                  handle           = item.handle,
                  image            = item.featured_image,
                  compare_price    = item.compare_at_price  ? '<s class="price-old">' + Shopify.formatMoney(item.compare_at_price, window.money_format) + '</s>' : "",
                  sold_out	       = item.available          ? "" : "<span class='item-sold-out'>Sold out</span> ",
                  price            = item.available          ? item.price : item.out_stock_nofication,
                  hightlight     = title.replace(new RegExp('(' + keyword + ')', 'gi'), '<span class="hightlight">$1</span>'),
                  template         = '<div class="col-lg-4 col-sm-6 col-md-6"><ul class="prod_sidebar"><li class="product_info">'
                                      + '<a href="/products/'+ handle +'">'
                                      + '<img style="width: 100% "src="' + image + '" class="img-responsive"/>' 
                                      +'</a>'
                                      +'<h4 class="title-product"><a href="/products/'+ handle +'">' + hightlight +'</a></h4>'
                                      +'<span><p class="price-product mb-0"><span class="price">'+ Shopify.formatMoney(price, window.money_format) +'</span>'+ compare_price +'</p></span>'
                  					  + sold_out
                                      +'</li></ul></div>';
              htmlbox = htmlbox + template;
                 

            }
            result_element.html(htmlbox);
            
            if($('.js_productSearchResults .js_search_results li').length){
              $('.js_productSearchResults').show();
           
            }
          }else{
            result_element.html('<p class="col-12">No result found for your search.</p>');
             $('.js_productSearchResults').show();
          }
       }     
    });

  },
  
  ajaxSearch : function( options ){    
    var     ajax_timeout,
    		ajax_lost_focus,
            self        = this,
            search_input_id    = options.search_input.length   > 0   ? options.search_input    : '.js_engo_autocomplate',
            wrapper_id         = options.result_wrapper.length > 0   ? options.result_wrapper  : '.js_productSearchResults',
            result_id          = options.result_element.length > 0   ? options.result_element  : '.js_search_results';

    jQuery( document ).delegate( search_input_id ,'keyup',function( event ){
      var keyword           = jQuery(this).val(),
          search_element    = jQuery(this),
          result_wrapper    = jQuery( wrapper_id ),
          result_element    = result_wrapper.children( result_id );
        
      if( ajax_timeout ){ 
        clearTimeout(ajax_timeout);
      } 

      ajax_timeout = setTimeout(function() {
        if( keyword.length >= 2 ){
            self.ajaxProductItems( search_element ,result_wrapper, result_element );
        }else{
            result_element.html('<p class="col-12">You must enter at least 2 characters.</p>');
        } 
      },300);       
    }); 

  },
  
  init : function( options ){
    this.ajaxSearch( options );
  }
  
}

jQuery(document).ready(function($) {  
  engoAutoComplate.init({
    "search_input"      :   ".js_engo_autocomplate",
    "result_wrapper"   :   ".js_productSearchResults",
    "result_element"   :   ".js_search_results"
  });
      
  engoAutoComplate.initProductsRecently();
});


jQuery(document).ready(function($) {
  "use strict";

  
  function jsProdDetails(){
    if($(window).width() < 576){
    	$('.js_sticy_imgmb').addClass('js_prod_detail')
    }
    $(window).resize(function() {
      if($(window).width() < 576){
        $('.js_sticy_imgmb').addClass('js_prod_detail')
      }
    });
    
    $('.js_prod_detail').slick({
      dots: true,
      arrows:true,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
    });

  }
  
  function jsProdRelate(){
    $('.js_product_related').slick({
      dots: true,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false, 
            arrows: true
          }
        }
      ]
    });

  }
  
  function jsCollection(){
    $('.js_collection').slick({
      dots: true,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false, 
            arrows: true
          }
        }
      ]
    });

  }
  
   function slideProductDetail() {
    $('.js_prod_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dot: false,
      fade: false,
      infinite: false,
      asNavFor: '.js_prod_sub'
    });
    $('.js_prod_sub').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js_prod_main',
      dots: false,
      arrows: false,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            vertical: true,
            infinite: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: true,
            infinite: false,
          }
        },
        
        {
          breakpoint: 575,
          settings: {
            vertical: false,
            infinite: false,
          }
        }
      ]
    });
  
   }

   function slideProductDetail2() {
    $('.js_prod_main2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dot: false,
      fade: true,
      infinite: false,
      asNavFor: '.js_prod_sub2'
    });
    $('.js_prod_sub2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.js_prod_main2',
      dots: false,
      arrows: false,
      infinite: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            infinite: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: false,
          }
        },
        
        {
          breakpoint: 575,
          settings: {
            infinite: false,
          }
        }
      ]
    });
  
   }
  function slideProductDetailBottom() {
    $('.js_prod_main_bot').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dot: false,
      fade: false,
      infinite: false,
    });

  
   }
  
  function sizeGuide(){
    $('.btn_size_guide').on('click',function(){
      $('.content_size_guide').addClass('active');
      $('.js_sticky').removeClass('sticky_content');
      $('.overlay').addClass('active');
    });
    $('.overlay').on('click',function(){
      $('.content_size_guide').removeClass('active');
      $('.overlay').removeClass('active');
    });
    $('.close_size_guide').on('click',function(){
      $('.js_sticky').addClass('sticky_content');
      $('.content_size_guide').removeClass('active');
      $('.overlay').removeClass('active');
    });
  }
  
  function sortLayout() {
      if ($(window).width() < 1300) {
        $('.size_3').addClass('active');
        $('.size_4').removeClass('active');
        $('.size_5').addClass('d-none');
      }
      
      if ($(window).width() >= 1300) {
        $('.size_3').removeClass('active');
        $('.size_4').addClass('active');
        $('.size_5').removeClass('d-none');
      }
    
      if ($(window).width() < 768) {
        $('.size_2').addClass('active');
        $('.size_4').removeClass('active');
        $('.size_5').addClass('d-none');
        $('.size_4').addClass('d-none');
        $('.size_3').addClass('d-none');
      }
      $(window).resize(function(){
        if ($(window).width() < 1300) {
          $('.size_3').addClass('active');
          $('.size_4').removeClass('active');
          $('.size_5').addClass('d-none');
        }

        if ($(window).width() >= 1300) {
          $('.size_3').removeClass('active');
          $('.size_4').addClass('active');
          $('.size_5').removeClass('d-none');
        }

        if ($(window).width() < 768) {
          $('.size_2').addClass('active');
          $('.size_4').removeClass('active');
          $('.size_5').addClass('d-none');
          $('.size_4').addClass('d-none');
          $('.size_3').addClass('d-none');
        }
      });

      $('.size_5').on('click', function() {
        $('.js_size_prod').removeClass('col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12');
        $('.js_size_prod').addClass('col-lg-2dot4');
        $(this).addClass('active');
        $('.size_6').removeClass('active');
        $('.size_4').removeClass('active');
        $('.size_3').removeClass('active');
      });
      $('.size_4').on('click', function() {
        $('.js_size_prod').removeClass('col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12');
        $('.js_size_prod').addClass('col-md-3');
        $(this).addClass('active');
        $('.size_5').removeClass('active');
        $('.size_6').removeClass('active');
        $('.size_3').removeClass('active');
        $('.size_2').removeClass('active');
      });
      $('.size_3').on('click', function() {
        $('.js_size_prod').removeClass('col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12');
        $('.js_size_prod').addClass('col-md-4');
        $(this).addClass('active');
        $('.size_5').removeClass('active');
        $('.size_4').removeClass('active');
        $('.size_6').removeClass('active');
        $('.size_2').removeClass('active');
      });
      $('.size_2').on('click', function() {
        $('.js_size_prod').removeClass('col-lg-1 col-lg-2 col-lg-3 col-lg-4 col-lg-5 col-lg-6 col-lg-7 col-lg-8 col-lg-9 col-lg-10 col-lg-11 col-lg-12 col-lg-2dot4 col-md-1 col-md-2 col-md-3 col-md-4 col-md-5 col-md-6 col-md-7 col-md-8 col-md-9 col-md-10 col-md-11 col-md-12 col-12');
        $('.js_size_prod').addClass('col-6');
        $(this).addClass('active');
        $('.size_3').removeClass('active');
        $('.size_4').removeClass('active');
        $('.size_1').removeClass('active');
      });
    

   	    
    	
    }
  
  function changeProdListGrid(){
    $('.prod_grid').on('click',function(){
      $('.product-grid-view').addClass('active');
      $('.product-list-view').removeClass('active');
      $(this).addClass('active');
      $('.prod_list').removeClass('active');
      $('.prod_per').removeClass('active');

    });
    $('.prod_list').on('click',function(){
      $('.product-grid-view').removeClass('active');
      $('.product-list-view').addClass('active');
      $(this).addClass('active');
      $('.prod_grid').removeClass('active');
      $('.prod_per').addClass('active');
    });
  }
  
  function FilterPushLeft(){
    $('.js_filter').on('click',function(){
      $('.filter-to-left').toggleClass('active');
      $('.bg-minicart').addClass('active');    
    });
    
    
    $('.close_filter').on('click',function(){
      $('.filter-to-left').removeClass('active');
      $('.bg-minicart').removeClass('active'); 
    });
    $('.bg-minicart').on('click',function(){
      $('.filter-to-left').removeClass('active');
      $('.bg-minicart').removeClass('active'); 
    });
    
 
  }
  
  function heighthdSticky(){
    
    $('.detail-info').css({'top':function(){
      return $('.js_height_hd').outerHeight() + 10;
    }})
    
    $('.js-slide-item').css({'padding-top':function(){
      return $('.js_height_hd').outerHeight();
    }})
  }

  function listcollection(){
    $('.js_list_col').slick({
      dots: false,
      arrows:true,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
      nextArrow:'<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    
  }
  
  function jsDScollectionV1(){
    $('.js_ds_collectionv1').slick({
      dots: false,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false, 
            arrows: false
          }
        }
      ]
    });

  }
  
  function jsrelatepost(){
    $('.js_relate_post').slick({
      dots: true,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 2,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false, 
            arrows: true
          }
        }
      ]
    });

  }
  
  function jscolbreacrumb(){
    $('.js_col_breacrumb').slick({
      dots: false,
      arrows:true,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

  }
  
  function jsslidelookbook(){
    $('.js_slide_lookbook').slick({
      dots: false,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

  }
  
  function jschangeborder(){
    $('.js_change_border').on('click',function(){
      $('.js_change_border').parent().find('.js_change_border').removeClass('active')
      $(this).addClass('active');
      
    });

  }
  
  function jschangethumbnail(){
    $('.js_change_thumbnail').on('click',function(){
      $('.js_change_thumbnail').parent().find('.js_change_thumbnail').removeClass('active')
      $(this).addClass('active');
      
    });

  }
  
  function js_testimonial() {

    $('.js_testimonial').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="slick-brand-prev ti-angle-left"></button>',
      nextArrow: '<button type="button" class="slick-brand-next ti-angle-right"></button>'
    });
  
   }

  function js_prod_menu() {

    $('.js_prod_menu').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="slick-brand-prev fa fa-angle-left"></button>',
      nextArrow: '<button type="button" class="slick-brand-next fa fa-angle-right"></button>',
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
    });

  }
  
  function productnewh5(){
    $('.slick_product_new-h5').slick({
      arrows: true,
      infinite: false,
      dots: false ,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
      nextArrow:'<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            dots: false ,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            arrows: true,
            infinite: false,
            dots: false ,
          }
        }
      ]
    });
  } 
  
  function testimonialV1() {
    $('.js-testimonial-v1-slide').slick({
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      prevArrow: '<button class="testimonial-arrow arrow-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="testimonial-arrow arrow-next"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  
              
  function js_draw_filter(){
    $('.js-draw-filter-btn').on('click',function(){
      	$(this).addClass('js-draw-filter-open');
      	$(this).removeClass('js-draw-filter-btn');
     	 $('.js-draw-filter').removeClass('draw_filter').addClass('col-lg-3');
    	$('.js-draw-filter-2').removeClass('col-lg-12').addClass('col-lg-9');
      
      $('.js-draw-filter-open').on('click',function(){
        $(this).addClass('js-draw-filter-btn');
        $(this).removeClass('js-draw-filter-open');
        $('.js-draw-filter').addClass('draw_filter').removeClass('col-lg-3');
        $('.js-draw-filter-2').addClass('col-lg-12').removeClass('col-lg-9');
      })
      
      setTimeout(function(){
        js_draw_filter()
      })
    })
  } 
  
    function jstoolbarScroll(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 130) {
        $('.js-toolbar-icon').addClass("active");
      } else {
        $('.js-toolbar-icon').removeClass("active");
      };
    });
  }
  
  function jsProdDetails_gallery(){
    $('.js_prod_detail_gallery').slick({
      dots: true,
      arrows:true,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> <g id="Forma_1"> <path fill-rule="evenodd" clip-rule="evenodd" d="M834.107,232.981L618.365,17.218c-9.3-9.624-24.779-9.624-34.405,0 c-9.299,9.303-9.299,24.778,0,34.059l174.447,174.441H182.759c-13.42,0.021-24.086,10.686-24.086,24.108 c0,13.417,10.666,24.436,24.086,24.436h575.648L583.96,448.375c-9.299,9.63-9.299,25.12,0,34.401 c9.626,9.632,25.128,9.632,34.405,0l215.742-215.742C843.733,257.739,843.733,242.263,834.107,232.981z"/> </g> </g> <g id="Forma_1_copy_1_"> </g> </svg></button>',
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" baseProfile="basic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="500px" viewBox="0 0 1000 500" xml:space="preserve"> <g id="Forma_1_1_"> </g> <g id="Forma_1_copy_1_"> <g id="Forma_1_copy"> <path fill-rule="evenodd" clip-rule="evenodd" d="M811.881,225.728H245.96L417.457,51.275c9.143-9.269,9.143-24.751,0-34.055 c-9.463-9.627-24.679-9.627-33.821,0l-212.1,215.762c-9.462,9.282-9.462,24.765,0,34.054l212.1,215.742 c9.12,9.627,24.358,9.627,33.821,0c9.143-9.276,9.143-24.772,0-34.4L245.96,274.265h565.921c13.192,0,23.68-11.014,23.68-24.434 C835.561,236.411,825.073,225.749,811.881,225.728z"/> </g> </g> </svg></button>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  }
  
  function checkclickcol(){
    $('.js-check-click-col').on('click', function(){
    	$(this).toggleClass('active');
    })
  }
  
  function js_product_flashsale(){
    $('.slick_product_5').slick({
      arrows: true,
      infinite: true,
      dots: false ,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right" aria-hidden="true"></i></button>', 
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }
  
  function testimonialAndBlog() {
    $('.js-testimonial-v1').slick({
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<button class="testimonial-blog-arrow arrow-prev testimonial-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="testimonial-blog-arrow arrow-next testimonial-next"><i class="fa fa-angle-right"></i></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.js-blog-testi-v1').slick({
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: '<button class="testimonial-blog-arrow arrow-prev blog-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="testimonial-blog-arrow arrow-next blog-next"><i class="fa fa-angle-right"></i></button>',
      dots: false
    });
  }
  
  function jsbannerv1(){
    $('.js_banner_v1').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 600,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  }
  function product_v1() { 
          $('.js_section_product').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            speed: 900,
            autoplay: false,
            autoplaySpeed: 3500,
            dots: true,
            arrows: false,
            prevArrow:'<button type="button" class="prev-slide slick-arrow"><i class="fa fa-angle-left"></i> </button>',
            nextArrow:'<button type="button" class="next-slide slick-arrow"><i class="fa fa-angle-right"></i></button>', 
            responsive: [
              {
                breakpoint:920,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: true,
                }
              }
            ]
          });
        }
 function servicev1(){
    $('.slickjs-services-v1').slick({
      dots: false,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 757,
          settings: {
            slidesToShow: 1,
            arrows:true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
             arrows:true,
          }
        }
      ]
    });

  }
  
    function js_menu_horiontal() {  
    $('.bg-mobile-menu').on('click',function(){
      $('body').removeClass('active')
      $(this).removeClass('active')
      $('.tab-menu-mobile ul').removeClass('active, .active2')
      $('.tab-menu-1').addClass('active')
    })
    $('.js-link-click').each(function(){
      $(this).on('click',function(e){
        e.preventDefault()
        var id = $(this).attr('data-click')
        $(this).parents('.active').addClass('active2')
        var link = $('[data-open="'+id+'"]')
        link.addClass('active')
      })
    })
    $('.js-header-mobile-menu').each(function(){
      $(this).on('click',function(){
        var $link = $('.tab-menu-mobile').find('.active2').eq(-1)
        $(this).parent().removeClass('active')
        $link.removeClass('active2')
      })
    })
  }
  
  
  function Blogv1(){
    $('.js-blog-v1').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },


      ]
        });
        }
        
        
   function servicev1(){
    $('.slickjs-services-v1').slick({
      dots: false,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i></button>',
      nextArrow:'<button type="button" class="next-slide"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  }
  
    function slidehome2(){
    $('.slick-side-h2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: false,
      arrows: true,
     prevArrow:'<button type="button" class="prev-slide"><i class="fa fa-angle-left"></i> </button>',
      nextArrow:'<button type="button" class="next-slide"> <i class="fa fa-angle-right"></i></button>',
      fade: true, 
      responsive: [

        {
          breakpoint: 1200,
          settings: {
            infinite: true,
            dots: false ,
            arrows: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            dots: false ,
            arrows: true
          }
        },
        {
          breakpoint:900,
          settings: {
            dots: true ,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3500
          }
        }
      ]
    });
  }
  
   function productv3(){
    $('.js_product_v3').slick({
      arrows: true,
      infinite: true,
      dots: false ,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"> <g> <g> <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>',
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M390.965,241.681l-242.001-236c-7.907-7.711-20.57-7.553-28.282,0.355c-7.712,7.908-7.553,20.57,0.355,28.282L348.353,256 L121.037,477.681c-7.908,7.712-8.067,20.374-0.355,28.282c7.713,7.91,20.375,8.065,28.281,0.355l242.001-236 C394.823,266.555,397,261.391,397,256S394.823,245.445,390.965,241.681z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>', 
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
  }
  
   function productV5(){
    $('.js_product_v5').slick({
      dots: true,
      arrows:false,
      infinite: false,
      speed: 300,
      autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow:'<button type="button" class="prev-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"> <g> <g> <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8 c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712 L143.492,221.863z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>',
      nextArrow:'<button type="button" class="next-slide"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M390.965,241.681l-242.001-236c-7.907-7.711-20.57-7.553-28.282,0.355c-7.712,7.908-7.553,20.57,0.355,28.282L348.353,256 L121.037,477.681c-7.908,7.712-8.067,20.374-0.355,28.282c7.713,7.91,20.375,8.065,28.281,0.355l242.001-236 C394.823,266.555,397,261.391,397,256S394.823,245.445,390.965,241.681z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>', 
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

  }
   function testimonialV1() {
    $('.js-testimonial-v1-slide').slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      
      dots: true,
      prevArrow: '<button class="testimonial-arrow arrow-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="testimonial-arrow arrow-next"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  
testimonialV1();
  productV5();
  productv3();
   slidehome2();     
  Blogv1();
  js_menu_horiontal();
  servicev1();
  product_v1();
  jsbannerv1();
  testimonialAndBlog();
  js_product_flashsale();
  checkclickcol();
  jsProdDetails_gallery();
  jstoolbarScroll();
  js_draw_filter();
  testimonialV1();
  productnewh5();
  js_prod_menu();
  js_testimonial();
  jschangethumbnail();
  jsProdDetails();
  listcollection()
  jsProdRelate();
  slideProductDetail();
  sizeGuide();
  slideProductDetailBottom();
  sortLayout();
  changeProdListGrid();
  FilterPushLeft();
  jsCollection();
  heighthdSticky();
  jsDScollectionV1();
  jsrelatepost();
  jscolbreacrumb();
  slideProductDetail2();
//   js_product_recent();
  jsslidelookbook();
  jschangeborder();



});

jQuery(document).ready(function($) {
  $('[data-toggle="tooltip"]').tooltip(); 
});



jQuery(document).ready(function($) {
  "use strict";


  
  
  function promo(){
    $('.close_promo_topbar').on('click',function(){
      $('.promo_topbar').addClass("active");
    });
  }
  
  function search(){
    $('.js-search-destop').on('click', function() {
      $('.js-box-search').addClass('active');
      $('.bg_search_box').addClass('active');
      $('body').addClass('activedestop');
    });
    $('.js-drawer-close').on('click', function() {
      $('.js-box-search').removeClass('active');
      $('.bg_search_box').removeClass('active');
      $('body').removeClass('activedestop');
    });
    $('.bg_search_box').on('click', function() {
      $('.js-box-search').removeClass('active');
      $('.bg_search_box').removeClass('active');
      $('body').removeClass('activedestop');
    });
  }
  
  function minicart(){
    $('.js-call-minicart').on('click', function() {
      $('.js-minicart').addClass('active');
      $('.bg-minicart').addClass('active');
      $('body').addClass('activecart');
      $('body').addClass('cartover');

    });
    $('.close-mini-cart').on('click', function() {
      $('.js-minicart').removeClass('active');
      $('.bg-minicart').removeClass('active');
      $('.contentbody').removeClass('activecart');
      $('body').removeClass('cartover');
      $('body').removeClass('activecart');

    });
    $('.bg-minicart').on('click', function() {
      $('.js-minicart').removeClass('active');
      $('.bg-minicart').removeClass('active');
      $('.contentbody').removeClass('activecart');
      $('body').removeClass('cartover');
      $('body').removeClass('activecart');

    });
  
  }

  function menuhorizon() {
    
    $('.js-model_menu').on('click', function() {
      $('.js-horizon-menu').addClass('active');
      $('.js-bg-horizon-menu').addClass('active');
      $('body').addClass('cartover');
    });
    
    $('.js_close-menu-horizon').on('click', function() {
      $('.js-horizon-menu').removeClass('active');
      $('.js-bg-horizon-menu').removeClass('active');
      $('body').removeClass('cartover');
    });
    
    $('.js-bg-horizon-menu').on('click', function() {
      $('.js-horizon-menu').removeClass('active');
      $('.js-bg-horizon-menu').removeClass('active');
      $('body').removeClass('cartover');
    });

  }
  
  function jsmenuiconh(){
    $('.js_icon_horizon-menu').on( 'click', function() {
        $(this).parents().addClass('active');
    });
     $('.js-back').on( 'click', function() {
        $(this).parents().parents().find('.menu-horizon-list').removeClass('active');
    });       
            
            
  }
  
  function jscalllogindestop(){
    $('.js-call-popup-login').on( 'click', function() {
      $('.js-poup-login-destop').addClass('active');
      $('.js-bg-login-popup').addClass('active');
    });
    $('.js-eveland-close-login').on( 'click', function() {
      $('.js-poup-login-destop').removeClass('active');
      $('.js-bg-login-popup').removeClass('active');
    });
    $('.js-bg-login-popup').on( 'click', function() {
      $('.js-poup-login-destop').removeClass('active');
      $('.js-bg-login-popup').removeClass('active');
    });
  }
  
  function jsBackLogin(){
     $('.jsCreate_account').on('click', function() {
        $('.form_register').show();
        $('.formlogin').hide();    
    });
     $('.tab_navar_right').on('click', function() {
        $('.formlogin').show();
        $('.form_register').hide();    
    });

     $('.jsBack_login').on('click', function() {
        $('.formlogin').show();
        $('.form_register').hide();        
    });
     $('.jsacount_destop').on('click', function() {
        $('.formlogin').show();
        $('.form_register').hide();        
    });
}
  
 

  function jslogindestop(){
    $('.jsCreate_account').on('click', function() {
      $('.form_register-destop').show();
      $('.formlogin-destop').hide();    
    });
    $('.js-call-popup-login').on('click', function() {
      $('.formlogin-destop').show();
      $('.form_register-destop').hide();    
    });

    $('.jsBack_login').on('click', function() {
      $('.formlogin-destop').show();
      $('.form_register-destop').hide();        
    });
    $('.jsacount_destop').on('click', function() {
      $('.formlogin-destop').show();
      $('.form_register-destop').hide();        
    });
  }
  
  
  
  
  function mobilescroll() {
    var $nav = $(".jsmenumobile");
    $nav.removeClass('menu_mobilescroll');

    $(document).scroll(function() {

        $nav.toggleClass('menu_mobilescroll', $(this).scrollTop() > $nav.height());
    });
}
  
  function menumobile() {
    $('.menuleft').on('click', function() {
      $(this).toggleClass('active');
      $('.box_contentmenu').toggleClass('active');     
      $('.box_contentmenu_background').toggleClass('active');   
      $('body').addClass('activemenu_mobile')      
    });
    $('.box_contentmenu_background').on('click', function() {
      $(this).removeClass('active');
      $('.box_contentmenu').removeClass('active');
      $('.menuleft').removeClass('active');
      $('.box_contentmenu_background').removeClass('active');
      $('body').removeClass('activemenu_mobile');
    });
    $('.js-eveland-close').on('click', function() {
      $(this).removeClass('active');
      $('.box_contentmenu').removeClass('active');
      $('.menuleft').removeClass('active');
      $('.box_contentmenu_background').removeClass('active');
      $('body').removeClass('activemenu_mobile');      
    });
  }
  
    function menutoolbar() {
    $('.btn_bar').on('click', function() {
      $(this).toggleClass('active');
      $('.box_contentmenu').toggleClass('active');     
      $('.box_contentmenu_background').toggleClass('active');     
    });
    $('.box_contentmenu_background').on('click', function() {
      $(this).removeClass('active');
      $('.box_contentmenu').removeClass('active');
      $('.menuleft').removeClass('active');
      $('.box_contentmenu_background').removeClass('active');
    });
    $('.js-eveland-close').on('click', function() {
      $(this).removeClass('active');
      $('.box_contentmenu').removeClass('active');
      $('.menuleft').removeClass('active');
      $('.box_contentmenu_background').removeClass('active');
    });
  };
         
  
  
  
  function popup(){
    $('.jsclosepoup').on('click', function() {
      $('.jsengo_popup').addClass('d-none');

    });
  }
  function cookiepopup(){
    if (!jQuery.cookie('brilliant_pop_newletter') || jQuery.cookie('brilliant_pop_newletter') == null) {    
      $(window).on('load', function(){
        setTimeout($('.jsengo_popup').show(), 300 * 1000);
        jQuery('.jsclosepoup').click(function(e) {
          e.preventDefault();
          jQuery('.jsengo_popup').hide(); 
          jQuery.cookie('brilliant_pop_newletter', '1', {expires: 1, path:'/', domain: '' });
                                                        });
        });
      } else {
             $('.jsengo_popup').remove();
    }
}
  
  
  // Scroll to TOP
  function totop(){
  	 var back_to_top = $('#back-to-top');
    if (back_to_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    back_to_top.addClass('show');
                } else {
                    back_to_top.removeClass('show');
                }
            };
        $(window).on('scroll', function() {
            backToTop();
        });
        back_to_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
  }
  
  
  function popup2(){
    $('.jsclose_cookie').on('click', function() {
      $('.jscookie_popup').addClass('d-none');

    });
  }
  
  function jsmenu_fullwidth(){
  	var top = $('.js_height_hd').offset();
    var height = $('.js_height_hd').outerHeight();
    $('.js-full-width').css({'top' : top.top + height - 15 ,'position' : 'fixed' , 'left' :' 0' , 'right' : '0', 'width' : '100%' })
    
    $(window).scroll(function() {
      var height = $('.js_height_hd').outerHeight();
      if ($(window).scrollTop() >= height){      
        $('.js-full-width').css({'top' : height - 15 })
      }
      else{
        $('.js-full-width').css({'top' : top.top + height - 15  })
      }     
    });
  }
  
  function cookiepopup2(){
    if (!jQuery.cookie('cookie_popup') || jQuery.cookie('cookie_popup') == null) {    
      $(window).on('load', function(){
        setTimeout($('.jscookie_popup').show(), 300 * 1000);
        jQuery('.jsclose_cookie').click(function(e) {
          e.preventDefault();
          jQuery('.jscookie_popup').hide(); 
          jQuery.cookie('cookie_popup', '1', {expires: 1, path:'/', domain: '' });
                                                        });
        });
      } else {
                          $('.jscookie_popup').remove();
    }
  }
  
  
  jsmenu_fullwidth();
  totop();
  jslogindestop();
jscalllogindestop();
  popup();
  cookiepopup();
  popup2();
  cookiepopup2();
  menumobile();
  jsBackLogin();
  mobilescroll();
  menutoolbar();
  jsmenuiconh();
  menuhorizon();
  minicart();
  search();
  promo();

});

      
      $(document).on("change", ".engoj-agree", function() {
        var input_is_checked = $(".engoj-agree"), 
            btn_dynamic_checkout = $(".more_info").find(".js-button-checkout");
        input_is_checked.is(":checked") ? btn_dynamic_checkout.removeClass("btn-disabled") : btn_dynamic_checkout.addClass("btn-disabled");
      });
      
      ///////ZOOM IMAGE

  jQuery(document).ready(function( $ ) {
                
            
    (function ($) {
      var defaults = {
        url: false,
        callback: false,
        target: false,
        duration: 120,
        on: 'mouseover', // other options: grab, click, toggle
        touch: true, // enables a touch fallback
        onZoomIn: false,
        onZoomOut: false,
        magnify: 0.9
      };

      // Core Zoom Logic, independent of event listeners.
      $.zoom = function(target, source, img, magnify) {
        var targetHeight,
            targetWidth,
            sourceHeight,
            sourceWidth,
            xRatio,
            yRatio,
            offset,
            $target = $(target),
            position = $target.css('position'),
            $source = $(source);

        // The parent element needs positioning so that the zoomed element can be correctly positioned within.
        target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
        target.style.overflow = 'hidden';
        img.style.width = img.style.height = '';

        $(img)
        .addClass('zoomImg engoj_img_main')
        .css({
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: img.width * magnify,
          height: img.height * magnify,
          border: 'none',
          maxWidth: 'none',
          maxHeight: 'none'
        })
        .appendTo(target);

        return {
          init: function() {
            targetWidth = $target.outerWidth();
            targetHeight = $target.outerHeight();

            if (source === target) {
              sourceWidth = targetWidth;
              sourceHeight = targetHeight;
            } else {
              sourceWidth = $source.outerWidth();
              sourceHeight = $source.outerHeight();
            }

            xRatio = (img.width - targetWidth) / sourceWidth;
            yRatio = (img.height - targetHeight) / sourceHeight;

            offset = $source.offset();
          },
          move: function (e) {
            var left = (e.pageX - offset.left),
                top = (e.pageY - offset.top);

            top = Math.max(Math.min(top, sourceHeight), 0);
            left = Math.max(Math.min(left, sourceWidth), 0);

            img.style.left = (left * -xRatio) + 'px';
            img.style.top = (top * -yRatio) + 'px';
          }
        };
      };

      $.fn.zoom = function (options) {
        return this.each(function () {
          var
          settings = $.extend({}, defaults, options || {}),
              //target will display the zoomed image
              target = settings.target && $(settings.target)[0] || this,
              //source will provide zoom location info (thumbnail)
              source = this,
              $source = $(source),
              img = document.createElement('img'),
              $img = $(img),
              mousemove = 'mousemove.zoom',
              clicked = false,
              touched = false;

          // If a url wasn't specified, look for an image element.
          if (!settings.url) {
            var srcElement = source.querySelector('img');
            if (srcElement) {
              settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
            }
            if (!settings.url) {
              return;
            }
          }

          $source.one('zoom.destroy', function(position, overflow){
            $source.off(".zoom");
            target.style.position = position;
            target.style.overflow = overflow;
            img.onload = null;
            $img.remove();
          }.bind(this, target.style.position, target.style.overflow));

          img.onload = function () {
            var zoom = $.zoom(target, source, img, settings.magnify);

            function start(e) {
              zoom.init();
              zoom.move(e);

              // Skip the fade-in for IE8 and lower since it chokes on fading-in
              // and changing position based on mousemovement at the same time.
              $img.stop()
              .fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
            }

            function stop() {
              $img.stop()
              .fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
            }

            // Mouse events
            if (settings.on === 'grab') {
              $source
              .on('mousedown.zoom',
                  function (e) {
                if (e.which === 1) {
                  $(document).one('mouseup.zoom',
                                  function () {
                    stop();

                    $(document).off(mousemove, zoom.move);
                  }
                                 );

                  start(e);

                  $(document).on(mousemove, zoom.move);

                  e.preventDefault();
                }
              }
                 );
            } else if (settings.on === 'click') {
              $source.on('click.zoom',
                         function (e) {
                if (clicked) {
                  // bubble the event up to the document to trigger the unbind.
                  return;
                } else {
                  clicked = true;
                  start(e);
                  $(document).on(mousemove, zoom.move);
                  $(document).one('click.zoom',
                                  function () {
                    stop();
                    clicked = false;
                    $(document).off(mousemove, zoom.move);
                  }
                                 );
                  return false;
                }
              }
                        );
            } else if (settings.on === 'toggle') {
              $source.on('click.zoom',
                         function (e) {
                if (clicked) {
                  stop();
                } else {
                  start(e);
                }
                clicked = !clicked;
              }
                        );
            } else if (settings.on === 'mouseover') {
              zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

              $source
              .on('mouseenter.zoom', start)
              .on('mouseleave.zoom', stop)
              .on(mousemove, zoom.move);
            }

            // Touch fallback
            if (settings.touch) {
              $source
              .on('touchstart.zoom', function (e) {
                e.preventDefault();
                if (touched) {
                  touched = false;
                  stop();
                } else {
                  touched = true;
                  start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
                }
              })
              .on('touchmove.zoom', function (e) {
                e.preventDefault();
                zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
              })
              .on('touchend.zoom', function (e) {
                e.preventDefault();
                if (touched) {
                  touched = false;
                  stop();
                }
              });
            }

            if ($.isFunction(settings.callback)) {
              settings.callback.call(img);
            }
          };

          img.setAttribute('role', 'presentation');
          img.alt = '';
          img.src = settings.url;
        });
      };

      $.fn.zoom.defaults = defaults;
    }(window.jQuery));
	$('.js-zoom-img').zoom();	
    
    
  });
