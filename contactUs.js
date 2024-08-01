
var btnSubmit = () => {

    var email = $("#email").val();
    var username = $("#name").val();
    var phone = $("#phone").val();

        if((email != "") && (username != "") && (phone != "")){
            $(".ipErrors").hide();
            resetFeild();
        }else{
            $(".ipErrors").show();
        }

        if(email == ""){
            $(".ipErrors").show();
        }else{
            $(".ipErrors").hide();
        }

        if(username == ""){
            $(".ipErrors").show();
        }else{
            $(".ipErrors").hide();
        }

        if(phone == ""){
            $(".ipErrors").show();
        }else{
            $(".ipErrors").hide();
        }

    resetFeild = () => {
        
        document.querySelector("#email").value = "";
        document.querySelector("#name").value = "";
        document.querySelector('#phone').value = "";
    }
    resetFeild();
}