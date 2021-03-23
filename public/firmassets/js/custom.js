
(function(){

    document.getElementById("menubar").style.width="265px";

     function myFunction(){
        document.getElementById("menubar").style.width == "265px" ? "30px" : "265px"; 
    }

    var el = document.getElementById('threelines');
    
    if(el){
      el.addEventListener('click', myFunction, false);
    }

})()