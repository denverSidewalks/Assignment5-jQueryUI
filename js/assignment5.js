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
 /**  window.clearTimeout( timerId ) ; 
  * 
  */
 var winObject = window.open( "pop.html", "windowName", "top=200,left=100,width=450,height=100,status" ) ;
 }
 else { window.setTimeout( init , 1000 ) ; }
 function resetTimer()
{
counter = 0;
console.log(counter)
console.log("resetTimer click")
}
}

document.addEventListener( "DOMContentLoaded" , init , false ) ;
/**
function resetTimer()
{
counter = 0;
console.log(counter)
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;
*/
