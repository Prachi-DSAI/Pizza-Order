/* navigation bar */
var scrollposition = window.pageYOffset;    /* let say 0px at initial-position */
 window.onscroll = function(){
     var current_scrollposition = window.pageYOffset;   /* let say 50px*/
     if(scrollposition < current_scrollposition)  /* 0px is less than 50px => true */
       {
         document.getElementById("navbar").style.top = "-120px"; /*navbar will hide*/
       }
     else
       {
         document.getElementById("navbar").style.top = "0"; /*navbar will show*/
       }
       scrollposition = current_scrollposition;
 }

/* sign-in page */
function signin(){
  var username = document.getElementById("ip1").value;
  var password = document.getElementById("ip2").value;
  if((username=="bhupen" && password=="12345") || (username=="prachi" && password=="12345") || (username=="anubhav" && password=="12345") || (username=="kritika" && password=="12345") || (username=="navjeet" && password=="12345"))
  {
    window.location = "index1.html";
  }
  else
  {
    alert("Incorrect Username or Password");
    alert("Try again");
  }
} 
/* go to sign-in page */ 

function order(){
  window.location = "index.html";
}
/*about us*/
function about(){
  window.location = "about.html";
}
/* go to payment section */
function paySec(){
  window.location = "payment.html";
}
/*go to end part*/
function ty(){
  window.location = "end.html";
}

/* coupon */
function couponApplied(){
  var appliedCouponValue = document.getElementById("Coupon").value; /* coupon code input-value*/
 
     if(appliedCouponValue=="M4pTu5" || appliedCouponValue=="Fs8Iq8" || appliedCouponValue=="tDw6Lv" ||
        appliedCouponValue=="Jr5qk0" || appliedCouponValue=="Wd9ie5" || appliedCouponValue=="mUx3y0" ||
        appliedCouponValue=="gP2Vr7")
        {
          document.getElementById("couponValue").innerHTML = "APPLIED"; /* override the initial */
          document.getElementById("couponValue").style.color = "rgb(46, 221, 46)";  /*colored green to value*/
          document.getElementById("totalAmount").innerHTML = "Rs 699";
          document.getElementById("Coupon").value = "";    /*reset the input-box */
        }
     else
        {
          document.getElementById("couponValue").innerHTML = "NIL";
          document.getElementById("couponValue").style.color = "white";
          document.getElementById("totalAmount").innerHTML = "Rs 859";
          document.getElementById("Coupon").value = "";   /*reset the input-box*/
          window.alert("Try Valid Code Only!");  
        }   

}