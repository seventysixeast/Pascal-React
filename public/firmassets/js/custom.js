
(function(){

    

     function myFunction(){
     	if(document.getElementById("menubar").style.width=="265px"){
     		document.getElementById("menubar").style.width = "64px"; 
     	} else {
			document.getElementById("menubar").style.width="265px";
     	}
       
    }

    var el = document.getElementById('threelines');
    
    if(el){
      el.addEventListener('click', myFunction, false);
    }

})()