// Validating Empty Field
function check_empty(ele) {
    if(ele.id == "f1-submit"){
        if (document.getElementById('f1-comp-name').value == "" ||
        document.getElementById('f1-al-1').value == "" ||
        document.getElementById('f1-al-2').value == "" ||
        document.getElementById('f1-province').value == "" || 
        document.getElementById('f1-postal-code').value == "") 
        {
        alert("Fill All Fields !");
        } else {
        document.getElementById('form-1').submit();
        alert("Form Submitted Successfully...");
        }
    }else if(ele.id == "f2-submit"){
        if (document.getElementById('f2-al-1').value == "" ||
        document.getElementById('f2-al-2').value == "" ||
        document.getElementById('f2-province').value == "" || 
        document.getElementById('f2-postal-code').value == "") 
        {
        alert("Fill All Fields !");
        } else {
        document.getElementById('form-2').submit();
        alert("Form Submitted Successfully...");
        }
        
    }else if(ele.id == "f3-submit"){
        if (document.getElementById('f3-al-1').value == "" ||
        document.getElementById('f3-al-2').value == "" ||
        document.getElementById('f3-province').value == "" || 
        document.getElementById('f3-postal-code').value == "") 
        {
        alert("Fill All Fields !");
        } else {
        document.getElementById('form-3').submit();
        alert("Form Submitted Successfully...");
        }
        
    }else if(ele.id == "f4-submit"){
         if (document.getElementById('f4-al-1').value == "" ||
        document.getElementById('f4-al-2').value == "" ||
        document.getElementById('f4-province').value == "" || 
        document.getElementById('f4-postal-code').value == "") 
        {
        alert("Fill All Fields !");
        } else {
        document.getElementById('form-4').submit();
        alert("Form Submitted Successfully...");
        }
    }
}
//Function To Display Popup
function div_show(ele) {
    var id = "#";
    switch(ele.id){
        case "button-1":
            id = "popup-1";
            break;
        case "button-2":
            id = "popup-2";
            break;
        case "button-3":
            id = "popup-3";
            break;
        case "button-4":
            id = "popup-4";
            break;
    }
document.getElementById(id).style.display = "block";
}
//Function to Hide Popup
function div_hide(ele){
    var id = "#";
switch(ele.id){
    case "close-1":
        id = "popup-1";
        break;
    case "close-2":
        id = "popup-2";
        break;
    case "close-3":
        id = "popup-3";
        break;
    case "close-4":
        id = "popup-4";
        break;
}
document.getElementById(id).style.display = "none";
}

// Inline popups
$('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
