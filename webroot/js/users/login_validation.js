define(["require","jquery","jqueryvalidate"],function(e){var t=e("jquery"),n=e("jqueryvalidate");t(document).ready(function(){jQuery("#UserLoginForm").validate({errorClass:"error",rules:{email:{required:!0,email:!0},password:{required:!0}},messages:{email:{required:"Please enter Email Address",email:"Please enter valid Email Address"},password:{required:"Please enter Password"}}})})});