const btnMobile = document.getElementById('checkbox-menu');   

const btnAccordion1 = document.getElementById('accordion-btn1');
const Accordion1 = document.getElementById('accordion-item1');


btnAccordion1.onclick=() => {
    
    if(Accordion1.style.height = '68px' ){
        Accordion1.style.height='167px';
    }else{
        Accordion1.style.height='68px';
    }
}


