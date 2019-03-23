 /* global $ */
 var coneyMap;
function initMap() {
        coneyMap = new google.maps.Map(document.getElementById('coneybeach'), {
          center: {lat: 40.5721, lng: -73.9793},
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