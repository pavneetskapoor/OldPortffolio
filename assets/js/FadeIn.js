$(document).ready(function() {
    // Let's simulate some loading time.
    //alert("sometext");
    
    $('.circleInner').fadeIn(1500);
    
    $('.navbar-bottom').show();

    
    $('div').click(function() {
        
        if($(this).hasClass('grid_active')) {       
            $(this).removeClass('grid_active').addClass('grid_box');
        }
        
        else if($(this).hasClass('grid_box')) {       
            $(this).removeClass('grid_box').addClass('grid_active');
        }
        
        if($(this).is('#item1') && $(this).hasClass("grid_active")){
            document.getElementById("write").innerHTML+=  
                '<div class="grid_box grid_passive" id="item1"><a href="#/"><div class="grid-top"><div class="grid-top-left"><h4> Test </h4><p>Traditional food cooked with potatoes and bread. </p></div><div class="grid-top-right"><h4>$23</h4></div></div></a></div> ';

        }
        
        else if($(this).is('#item1') && $(this).hasClass("grid_box")){
            $('#write').children('#item1').remove();
            
        }
        
        else if($(this).is('#item2') && $(this).hasClass("grid_active")){
            document.getElementById("write").innerHTML+=  
                '<div class="grid_box grid_passive" id="item2"><a href="#/"><div class="grid-top"><div class="grid-top-left"><h4> Hello </h4><p>Traditional food cooked with potatoes and bread. </p></div><div class="grid-top-right"><h4>$23</h4></div></div></a></div> ';

        }
        
        else if($(this).is('#item2') && $(this).hasClass("grid_box")){
            $('#write').children('#item2').remove();
            
        }
        
        else if($(this).is('#item3') && $(this).hasClass("grid_active")){
            document.getElementById("write").innerHTML+=  
                '<div class="grid_box grid_passive" id="item3"><a href="#/"><div class="grid-top"><div class="grid-top-left"><h4> Hello </h4><p>Traditional food cooked with potatoes and bread. </p></div><div class="grid-top-right"><h4>$23</h4></div></div></a></div> ';

        }
        
        else if($(this).is('#item3') && $(this).hasClass("grid_box")){
            $('#write').children('#item3').remove();
            
        }
        
        
    });
    
    
//    $('div').click(function(event) {
//        
//        var write= $('#write');
//        
//        if($(event.target).is('#item1')){
////            log.html(event.target.id + 'was clicked.');
//            window.alert("Hello");
//        }
//        
//   });
    

});

/*$(document).ready(function()m{
    // to fade in on page load
    $("circleContent").css("display", "none");
    $("circleContent").fadeIn(400); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('circleContent').fadeOut(400, function(){
            document.location.href = redirect
        });
    });
})*/

//$('.grid-box').on('click', function(e) {
//    e.preventDefault();
//    $(this).toggleClass('ClickState')
//});



//$(document).ready(function(){
//    
//    $('.grid-box').click(function(){
//       
//        $(this).removeClass('grid-box').addClass('grid-active');  
//        
//    }); 
//    
//    $('.grid-active').click(function(){
//       
//        $(this).removeClass('grid-active').addClass('grid-box');
//        
//    }); 
//     
//});


