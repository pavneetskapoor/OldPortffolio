//$(function() {
//    //----- OPEN
//    $('[data-popup-open]').on('click', function(e)  {
//        var targeted_popup_class = jQuery(this).attr('data-popup-open');
//        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
// 
//        e.preventDefault();
//    });
// 
//    //----- CLOSE
//    $('[data-popup-close]').on('click', function(e)  {
//        var targeted_popup_class = jQuery(this).attr('data-popup-close');
//        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
// 
//        e.preventDefault();
//    });
//});

$(document).ready(function($) {
    
    $(function () {
        
//        $(".btnClick").on('click', function(e){
//            
//            window.alert("helo");
//            e.preventDefault;
//            
//            $('#element_to_pop_up').bPopup();
//            
//        });
        
        $('#custom').on('click', function(e){

            
            e.preventDefault;
            
            $('#element_to_pop_up').bPopup();
            
        });
        
        
        $('#xclose').on('click', function(e){
            
            e.preventDefault;
            
            var bPopup= $('#element_to_pop_up').bPopup();
            bPopup.close();
        });
        
        $('#closeText').on('click', function(e){
            
            e.preventDefault;
            
            var bPopup= $('#element_to_pop_up').bPopup();
            bPopup.close();
        });
        
        
    });
    
    
});