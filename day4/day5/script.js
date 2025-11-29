$(document).ready(function(){
    $("#Signup-form").validate({
        rules:{ 
            fname:{
            required:true,
            minlength:4
        },
        sname:{
            required:true,
            minlength:4

        },
        day:{
            required:true
            
        },
        month:{
            required:true
        },
        year:{
            required:true
        },
        email:{
            required:true,
            email:true

        },
        password:{
            minlength:6

        }

        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 charechters"
            }
        }
       
    })
})   