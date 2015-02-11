/**
 * @author Eric
 */
var counter = 0 ;

function init()
{
 var panel = document.getElementById( "panel" ) ;
 counter++ ; 
 panel.innerHTML += "<span style='background:black;color:white;margin:2px;'>"+counter+ "</span>" ;
 if ( counter >= 10 ) 
 { 
  /**var left = 500 (screen.width/2)-(450/2);*/
  /**var top = 500 (screen.height/2)-(100/2);*/
 
 var winObject = window.open( "pop.html", "windowName", "top=500,left=500,width=450,height=100,status" ) ;
 }
 else { window.setTimeout( init , 1000 ) ; }
 


}

document.addEventListener( "DOMContentLoaded" , init , false ) ;

 function stay() {
 
 		
 	   
  	   var winObject = window.close( "pop.html", "windowName") ;
  	   
 	  /** window.opener.location.reload(true);*/

   /**var timer_Reset = window.setTimeout( init , 1000 ) ;*/


       }
       
  function refresh() {
  	            window.opener.location.href = "index.html"
  	                        }    
       
  function exit() {
  	
   window.opener.location.href = "http://www.google.com"
  }
       
 
  /** (document.getElementById("stay").onclick){
  var winObject = window.close( "pop.html", "windowName") ;
 }*/
 /**function resetTimer()
{
counter = 0;
console.log(counter);
console.log("resetTimer click");
}*/
/**
document.getElementById("stay").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("stay").innerHTML = "YOU CLICKED ME!";
}
*/

/**
function resetTimer()
{
counter = 0;
console.log(counter)
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;
*/
/**ocument.getElementById("stay").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("stay").innerHTML = "YOU CLICKED ME!";
}*/
