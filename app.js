// login //
var productTemplate;

var displayLoginDialogue = () => {
    $(".loginForm").show();
    $(".Aboutmain-section").hide();
    $(".eventsContainer").hide();
    $(".studentContainer").hide();
    $("#carouselExampleIndicators").hide();
}
var HideLoginDialogue = () => {
    $(".loginForm").fadeOut();
    $("#carouselExampleIndicators").show();
}

var keyupAndOnclick = {
}
    

var images = {
    right: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>',
    wrong: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>'
}
    //input feild is empty
var logmeErrors = () => {
    
    
    var email = $("#exampleInputEmail1").val();
    var password = $("#exampleInputPassword1").val();

       
        if($('.checkIp').attr('checked', false) && (password == "")){
            $(".inputErrors").show();
        }
        if((email == '') && $('.checkIp').attr('checked', false)){
            $(".inputErrors").show();
        }
        
        if($('.checkIp').attr('checked', false) &&(email == '' && password == '')){
            $(".inputErrors").show();
        }
        if($('.checkIp').attr('checked', false) && ((password != "") && (email != ''))){
            $(".checkbox").show();
        }
     
        if(($("input[type=checkbox]").is(
            ":checked")) && (email != '' && password != '')){
                 $(".checkbox").hide();
            }
        if(($("input[type=checkbox]").is(
            ":checked")) && (email != '' && password == '')){
                 $(".ipPasswordError").show();
                 $(".inputErrors").hide();
            }
        if(($("input[type=checkbox]").is(
            ":checked")) && (email == '' && password != '')){
                 $(".ipEmailError").show();
                 $(".inputErrors").hide();
            }
        
        if(($("input[type=checkbox]").is(
            ":checked")) && (email == '' && password == '')){
                $(".checkbox").hide();
                $(".inputErrors").show();
            }


        if((keyupAndOnclick.count2 == 1) && (keyupAndOnclick.count1 == 2) && (keyupAndOnclick.element.value.length == 10) && (keyupAndOnclick.firstCharAlpha >= 65 && keyupAndOnclick.firstCharAlpha <= 90)){
            $(".validationlist").hide();

        }
        if(($("input[type=checkbox]").is(
            ":checked")) && (email != '' && password != '') && ((keyupAndOnclick.count2 == 1) && (keyupAndOnclick.count1 == 2) && (keyupAndOnclick.element.value.length == 10) && (keyupAndOnclick.firstCharAlpha >= 65 && keyupAndOnclick.firstCharAlpha <= 90))){
                $(".loginForm").fadeOut();
                $(".Aboutmain-section").show();
                $(".eventsContainer").show();
                $(".studentContainer").show();
                $("#carouselExampleIndicators").fadeIn();

                resetFeilds();

            }else{
                $(".loginContainer").show();
                $(".inputErrors").show();
            }


    resetFeilds = () => {
        document.querySelector("#exampleInputEmail1").value = "";
        document.querySelector("#exampleInputPassword1").value = "";
        document.querySelector('.checkIp').checked = false;
    }
    
}
    // keypess events
var password = (event) => {
    var element = event.target;

    if(element.value.length[0] != ''){
        $(".ipPasswordError").hide();
        $(".inputErrors").hide();
    }
}
var email = (event) => {
    var element = event.target;

    if(element.value.length[0] != '' ){
        $(".ipEmailError").hide();
        $(".inputErrors").hide();
    }
}
var validatekeyup = (event) => {
    keyupAndOnclick.element = event.target;
    
    
    // visibility validity

    if (keyupAndOnclick.element.value.length > 0){
        $(".validationlist").show();
    } else {
        $(".validationlist").hide();
    }

    
    //1. Password must contain 10 characters

    if(keyupAndOnclick.element.value.length == 10){
        $(".validate1").css("color", "white");
        $("#showicon1").html(images.right);  
        $("#showicon2").hide();
        $("#showicon1").show();
    }else{
        $(".validate1").css("color", "red");
        $("#showicon2").html(images.wrong);
        $("validationlist").show();
        $("#showicon1").hide();
        $("#showicon2").show();

    }

    //2. Password must contain first letter as a alphabte

    keyupAndOnclick.firstCharAlpha = keyupAndOnclick.element.value.charCodeAt(0);
    if(keyupAndOnclick.firstCharAlpha >= 65 && keyupAndOnclick.firstCharAlpha <= 90){
        $(".validate2").css("color", "white");
        $("#showIconFirstChar1").html(images.right); 
        $("#showIconFirstChar2").hide();
        $("#showIconFirstChar1").show();
    }else{
        $(".validate2").css("color", "red");
        $("#showIconFirstChar2").html(images.wrong);
        $("#showIconFirstChar1").hide();
        $("#showIconFirstChar2").show();
    }

    //3. Password must contain two digits

    keyupAndOnclick.count1 = 0;
    for(var i = 0; i <= 10; i++){
        if(keyupAndOnclick.element.value.charCodeAt(i) >= 48 && keyupAndOnclick.element.value.charCodeAt(i) <=58){
            keyupAndOnclick.count1++;
        }
    }
    if(keyupAndOnclick.count1 == 2){
        $(".validate3").css("color", "white");
        $("#showIconOfDigits1").html(images.right);
        $("#showIconOfDigits2").hide();
        $("#showIconOfDigits1").show();
    }else{
        $(".validate3").css("color", "red");
        $("#showIconOfDigits2").html(images.wrong);
        $("#showIconOfDigits1").hide();
        $("#showIconOfDigits2").show();
    }

    //4. Password must contain spacial char

    keyupAndOnclick.count2 = 0;
    for(var j = 0; j <= 10; j++){
        if((keyupAndOnclick.element.value.charCodeAt(j) >= 33 && keyupAndOnclick.element.value.charCodeAt(j) <= 47) || (keyupAndOnclick.element.value.charCodeAt(j) >= 58 && keyupAndOnclick.element.value.charCodeAt(j) <= 64)) 
            keyupAndOnclick.count2++;
        }

    if(keyupAndOnclick.count2 == 1){
        $(".validate4").css("color", "white");
        $("#showIconOfSpecialSyb1").html(images.right);
        $("#showIconOfSpecialSyb2").hide();
        $("#showIconOfSpecialSyb1").show();
    }else{
        $(".validate4").css("color", "red");
        $("#showIconOfSpecialSyb2").html(images.wrong);
        $("#showIconOfSpecialSyb1").hide();
        $("#showIconOfSpecialSyb2").show();
    }

    if((keyupAndOnclick.count2 == 1) && (keyupAndOnclick.count1 == 2) && (keyupAndOnclick.element.value.length == 10) && (keyupAndOnclick.firstCharAlpha >= 65 && keyupAndOnclick.firstCharAlpha <= 90)){
        $(".validationlist").hide();

    }
}

// // -------on page load------------------//

function loginAlertFun (){
    $(".loginForm").show();
}


function myFunction() {
    timeout = setTimeout(displayLoginOnLoad, 1000);
  }
  
  function displayLoginOnLoad(){
    $("#carouselExampleIndicators").hide();
    document.querySelector(".loginContainer2").style.display = "block"
}

// -------- buy products page ------------

var pDetails = [
    {
        name : "Aqua Natural RO",
        actualPrice : "₹4,990",
        DiscountPrice : "₹14,990",
        rating : "4.5",
        imageUrl : "images/kentUltraWater1",
    },
    {
        name : "Aqua Natural RO",
        actualPrice : "₹4,990",
        DiscountPrice : "₹14,990",
        rating : "4.5",
        imageUrl : "images/kentUltraWater1",
    },
    {
        name : "Aqua Natural RO",
        actualPrice : "₹4,990",
        DiscountPrice : "₹14,990",
        rating : "4.5",
        imageUrl : "images/kentUltraWater1",
    },
]



