// JavaScript File// AIzaSyAnfseSfQHLVrnhecHfN3wx9zW76th8Azk
 /* global $ */
 var miamiMap;
function miamiMap() {
        miamiMap = new google.maps.Map(document.getElementById('miamibeach'), {
          center: {lat: 25.7907, lng: -80.1300},
          zoom: 16
        });
      }
   console.log($("#volunteer"));   
   $(document).ready(function(){
$("#volunteer").click(function(){
    alert("You have signed up to volunteer on March 23,2019"); 
});
});

 $(document).ready(function(){
$("#alertClean").click(function(){
    alert("User9835 has cleaned the left side of the beach, focus your attention elsewhere!"); 
});
});