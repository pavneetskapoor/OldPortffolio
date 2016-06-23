

    var entrees1;
    var entreesText;
    
    var appetizer1;
    var appetizerText;
    
    var dessert1;
    var dessertText;
    
    var beverages1;
    var beveragesText;
    
    var mp1;
    var mpText;

    var sides1;
    var sidesText;
    
    var itemNum=1;
    var itemArray= [];

    var totalCost=0;
    
    $(document).ready(function() {
             
        
        $.ajax({
            type: 'GET',
            url: 'MenuFetch.php',
            dataType: 'JSON',
//            async: false,
            success: function(data){
                
                entrees1=data['entrees'];
                entreesText= data['entreesText'];
                
                appetizer1= data['appetizer'];
                appetizerText= data['appetizerText'];
            
                dessert1= data['dessert'];
                dessertText= data['dessertText'];
            
                beverages1= data['beverages']
                beveragesText= data['beveragesText'];
                
                mp1= data['mp'];
                mpText= data['mpText'];
                
                sides1= data['sides'];
                sidesText= data['sidesText']
                
            function Grid(x,y,z){
                parseInt(x);
                var id1;
                var id2;
                var newID= "item";
                
            
                    if (x>0){

                        if (y==="mp"){ 
                            id1="#box1";
                            id2="#box2";
                        }
                        
                        else if(y==="appetizer"){
                            id1= "#box3";
                            id2= "#box4";
                        }

                        else if(y==="entrees"){
                            id1= "#box5";
                            id2= "#box6";
                        }
                        else if(y==="dessert"){
                            id1="#box7";
                            id2="#box8";
                        }
                        else if (y==="beverages"){
                            id1="#box9";
                            id2="#box10";
                        }
                        else{
                            id1="#box11";
                            id2="#box12";
                        }

                        for (i=0; i< x; i++){
                            
                            if ((i%2)===0){
                                $('<div />',{
                                    "class": 'grid_box grid_passive',

                                }).attr('id',newID+itemNum).appendTo(id1);
                                
                                document.getElementById(newID+ itemNum).innerHTML+=
                                    "<a href= '#/'><div class='grid-top-right'><h4 id='cost'>$"+z[i]['Cost'] +"</h4></div><div class='grid-top'><div class='grid-top-left'><h4>"+z[i]['Name'] +"</h4><p>"+ z[i]['Description'] +"</p></div></div></a>";

                                  itemArray.push(newID + itemNum);

                            }
                            else{
                                $('<div />',{
                                    "class": 'grid_box grid_passive',

                                }).attr('id',newID+itemNum).appendTo(id2); 
                                 
                                document.getElementById(newID+ itemNum).innerHTML+=
                                    "<a href= '#/'><div class='grid-top-right'><h4 id='cost'>$"+z[i]['Cost'] +"</h4></div><div class='grid-top'><div class='grid-top-left'><h4>"+z[i]['Name'] +"</h4><p>"+ z[i]['Description'] +"</p></div></div></a>";   
                            
                                itemArray.push(newID + itemNum);
                            }
                            
                            if(z[i]['Customize'] === "1"){
                            
                                $('#'+ newID + itemNum).find("a").attr( 
                                    { href: "#/", "class": "btnClick"}); 
                               
                            
                            }
                            
                            itemNum ++;
                        }
                    }
                }
                
                Grid(mp1,"mp",mpText);
                Grid(appetizer1, "appetizer", appetizerText);
                Grid(entrees1,"entrees", entreesText);
                Grid(dessert1, "dessert", dessertText);
                Grid(beverages1,"beverages", beveragesText);
                Grid(sides1,"sides",sidesText);
                
                
                
                
                
                //CLICK FUNCTION FOR GRID_BOX
                $('div').click(function() {
                    
                    if($(this).hasClass('grid_active')) {       
                        $(this).removeClass('grid_active').addClass('grid_box');
                        
                        
                    }

                    else if($(this).hasClass('grid_box')) {       
                        $(this).removeClass('grid_box').addClass('grid_active');
                        if( $(this).find("a").attr("class")==="btnClick"){
                            $('#element_to_pop_up').bPopup();
                            
                        }
                    }
                    
                    
        
                    var divId= $(this).attr('id');
                    
                    if ($.inArray(divId, itemArray) > -1){
                            
                        
                            if( $(this).hasClass("grid_active")){
                                $(this).clone().removeClass('grid_active').addClass('grid_box').appendTo($('#write'));            
                            
                            }
                            else{
                                $('#write').children('#'+divId).remove();
//                                totalCost= totalCost - parseFloat()
                                var negCost= $('#'+divId).find(".grid-top-right").end().find('h4').html()
                                totalCost= totalCost - parseFloat(negCost.substring(1,negCost.length));
                            }
                        
                            totalCost=0;
                            //COST 
                            $('#write').find(".grid-top-right").each(function(){
                                
                                var costStr= $(this).find('h4').html();
//                                window.alert(costStr);
                                var cost= costStr.substring(1,costStr.length);
//                                window.alert(cost);
                                var other= parseFloat(cost).toFixed(2);
                                totalCost += parseFloat(other);
//                                window.alert(totalCost);
                                
                            });
                        
                            $('#total').text("Your total: $" + totalCost.toFixed(2));
                    }
                        
                 
                    
                    });
                
                    $('#clear').click(function() {
                            var list= document.getElementById("write");
                            while(list.hasChildNodes()){
                                list.removeChild(list.firstChild);
                            }

                            $('div').each(function(){
                                if($(this).hasClass("grid_active")){
                                    $(this).removeClass("grid_active").addClass("grid_box");
                                }
                            })
                            
                            $('#total').text("Your total: ");
                            totalCost=0;
                    });
                
                    $('#write').click(function(){
                       window.alert("hello"); 
                    });
            
                    }  
                });
            
                
        
        
//        jQuery.getJSON("MenuFetch.php", function(data){
//            entrees1=data['entrees'];
//            appetizer1= data['appetizer'];
//            dessert1= data['dessert'];
//            beverages1= data['beverages']
//            window.alert(entrees1);
//        });
        
       

    });
    