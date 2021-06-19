
 
var otps = document.querySelectorAll(".otpBox")
   
   for(const inputs of otps) {
     
      inputs.addEventListener("input", input)
      inputs.addEventListener("paste" , paste)
   }
   document.addEventListener("keyup", deleteOtp)
   
   function deleteOtp(e) {
     var keypress = e.keyCode;
     const  keys = [8, /* Add more keycodes here */]
     if( keys.includes( keypress ) ) {
       let target = e.target,
           prev = target.previousElementSibling;
       if( target.value == "" ) {
         prev.value = ""
         prev.focus()
       }else {
         target.focus()
       }
     }
   }
   
   
   function paste(e) {
     
     var  otp = e.clipboardData.getData("text/plain").trim()
      
     if(otp.length == otps.length) {
       for( var i in otp ) {
         otps[i].value = otp[i]
       }
     }
      e.preventDefault()
   }
   
   function input(e) {
     var next = this.nextElementSibling;
     
     var lastOtp = [].filter.call(otps,function(e) {
          return (
               e.value == "" &&
               [].indexOf.call(otps, e) < [].indexOf.call(otps,this)
               )
     }.bind(this))
     
     if(lastOtp.length > 0) {
       lastOtp[0].value = this.value
       this.value = ""
       lastOtp[0].nextElementSibling.focus()
     }else if ( this.value.length > 1 ) {
        var f = this.value.slice(0, 1),
            l = this.value.slice(1,2)
        this.value = f
        if((next && next.value == "")
            && this.value !== ""
           ) {
          next.focus()
          next.value = l
        }
     } 
   
   }
  
   function getOTPValue(callback) {
       var otp = "" 
       for(var o of otps){
          otp += o.value 
       } 
       if( callback ) callback( otp );
       else return otp;
   }
   
   
   