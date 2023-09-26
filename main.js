import AutokUrlap from "./AutokUrlap.js"
import { AUTO } from "./adatok.js";
$(function(){
    let szuloElem = $(".taroloForm");
    
    new AutokUrlap(AUTO, szuloElem)
    
    $(window).on("hozzaad", (event)=>{
        AUTO.push(event.detail);
        console.log(AUTO);
    });
    
    
})