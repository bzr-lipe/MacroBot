const btnMobile = document.getElementById('checkbox-menu');   

const headerAccordion1 = document.getElementById('accordion-header1');



headerAccordion1.onclick=() => {
    let Accordion1 = document.getElementById('accordion-item1');
    let arrowAccordion1 = document.getElementById('accordion-arrow1');
    let titleAccordion1 = document.getElementById('accordion-title1');


    if(!Accordion1.classList.contains('accordion-active')){
        arrowAccordion1.style.transform='rotate(0deg)';
        Accordion1.classList.add('accordion-active');
        titleAccordion1.style.color = 'var(--color-main)'
    }else{
        Accordion1.classList.remove('accordion-active');
        arrowAccordion1.style.transform='rotate(90deg)';
        titleAccordion1.style.color = 'var(--color-bg-light)'
    }
}


