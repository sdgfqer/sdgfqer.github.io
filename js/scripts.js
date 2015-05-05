/* Preloader */
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

/* Modal on Bootstrap 3 with answer in modal */
$(document).ready(function () {
    var metrika="";
    $.h5Validate.addPatterns({
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        name: /^[а-яА-ЯёЁa-zA-Z]+$/
    });
    $('form').h5Validate({
        errorClass: 'black'
    });
});

jQuery(document).ready(function($){
    $("#button_1, #button_2, #button_3, #button_4").on('click', function(e) {
        num = $(this).attr('id').split('_')[1]
        $('[name="call"]').val(num);
        e.preventDefault();
        $("#modal").reveal();
    });

    $("#modal-form").on('submit', function(e) {
        e.preventDefault();
        if($(this).h5Validate('allValid')) {
            sendAjax($(this));  
        } else {
            return false
            }
    })

    function sendAjax(obj) {
        data = $(obj).closest('form').serialize();
        $.ajax({
            url: "../send.php",
            type: "POST",
            data: data,
            beforeSend: function() {},
            success: function(msg) {
                $(obj).closest('form').trigger('reveal:close')
                $("#message").html(msg);
                $("#form_site").reveal();
            },
        });
    }
})


var openGallery = function(theme)
{
    $(this).magnificPopup
    ({
        mainClass: theme + ' mfp-with-zoom', // no zoom, just for bg fadeIn
        overflowY: 'hidden',
        delegate: '> li > a',
        type: 'image',
        gallery:
        {
            enabled: true
        },
        callbacks:
        {
            /**
             * Adds custom parameters to markup
             * For example data-description on <a> can be used as mfp-description in markup html
             *
             * @param template
             * @param values
             * @param item
             */
            markupParse: function(template, values, item)
            {
                values.description = item.el.data('description'); // or item.img.data('description');
            }
        },
        image:
        {
            headerFit: true,
            captionFit: true,
            preserveHeaderAndCaptionWidth: false,
            markup:
            '<div class="mfp-figure">'+
                '<figure>'+
                    '<header class="mfp-header">'+
                        '<div class="mfp-top-bar">'+
                            '<div class="mfp-title"></div>'+
                            '<div class="mfp-close"></div>'+
                            '<div class="mfp-decoration"></div>'+
                        '</div>'+
                    '</header>'+
                    '<section class="mfp-content-container">'+
                        '<div class="mfp-img"></div>'+
                    '</section>'+
                    '<footer class="mfp-footer">'+
                        '<figcaption class="mfp-figcaption">'+
                            '<div class="mfp-bottom-bar-container">'+
                                '<div class="mfp-bottom-bar">'+
                                    '<div class="mfp-counter"></div>'+
                                    '<div class="mfp-description"></div>'+
                                    '<div class="mfp-decoration"></div>'+
                                '</div>'+
                            '</div>'+
                        '</figcaption>'+
                    '</footer>'+
                '</figure>'+
            '</div>',
            titleSrc: function(item)
            {
                return item.el.attr('title');
            }
        }
    });
};

/* Magnific-popup for portfolio gallery */
$('.portfolio-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true
    }
});

/* Magnific-popup for news */
$('.back_call.b_news').magnificPopup({
  type:'inline',
  midClick: true
});

/* Parallax */
$(document).ready(function(){
    $('#start').localScroll(800);
    $('#how').parallax("0", 0.1);
    $('#news').parallax("0", 0.1);
    $('#contacts').parallax("0", 0.1);

})
