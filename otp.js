var otps = document.querySelectorAll(".otpBox")
   
   for(const inputs of otps) {
     
      inputs.addEventListener("input", input)
      inputs.addEventListener("paste" , paste)
   }
   
   function paste(e) {
      e.preventDefault()
     var  otp = e.clipboardData.getData("text/plain")
     if(otp.length == otps.length) {
       for( var i in otp ) {
         otps[i].value = otp[i]
       }
     }
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
        if(next && next.value == "") {
          next.focus()
          next.value = l
        }
     }else {
         if( next ) {
          next.focus()
       }
     }
     
     
   
   }
  