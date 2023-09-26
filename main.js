import AutokUrlap from "./AutokUrlap.js"
import { AUTO } from "./adatok.js";
$(function(){
    let szuloElem = $(".taroloForm");
    
    new AutokUrlap(szuloElem)
    
    $(window).on("hozzaad", (event)=>{
        //console.log(event.detail)
        AUTO.push(event.detail);
        console.log(AUTO);
    });
    
    
})