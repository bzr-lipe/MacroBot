const btnMobile = document.getElementById('checkbox-menu');   

document.getElementById('accordion-header1').onclick=() => {
    let Accordion = document.getElementById('accordion-item1');
    let arrowAccordion = document.getElementById('accordion-arrow1');
    let titleAccordion = document.getElementById('accordion-title1');


    if(!Accordion.classList.contains('accordion-active')){
        arrowAccordion.style.transform='rotate(0deg)';
        Accordion.classList.add('accordion-active');
        titleAccordion.style.color = 'var(--color-main)'
    }else{
        Accordion.classList.remove('accordion-active');
        arrowAccordion.style.transform='rotate(90deg)';
        titleAccordion.style.color = 'var(--color-bg-light)'
    }
}

document.getElementById('accordion-header2').onclick=() => {
    let Accordion = document.getElementById('accordion-item2');
    let arrowAccordion = document.getElementById('accordion-arrow2');
    let titleAccordion = document.getElementById('accordion-title2');


    if(!Accordion.classList.contains('accordion-active')){
        arrowAccordion.style.transform='rotate(0deg)';
        Accordion.classList.add('accordion-active');
        titleAccordion.style.color = 'var(--color-main)'
    }else{
        Accordion.classList.remove('accordion-active');
        arrowAccordion.style.transform='rotate(90deg)';
        titleAccordion.style.color = 'var(--color-bg-light)'
    }
}

document.getElementById('accordion-header3').onclick=() => {
    let Accordion = document.getElementById('accordion-item3');
    let arrowAccordion = document.getElementById('accordion-arrow3');
    let titleAccordion = document.getElementById('accordion-title3');


    if(!Accordion.classList.contains('accordion-active')){
        arrowAccordion.style.transform='rotate(0deg)';
        Accordion.classList.add('accordion-active');
        titleAccordion.style.color = 'var(--color-main)'
    }else{
        Accordion.classList.remove('accordion-active');
        arrowAccordion.style.transform='rotate(90deg)';
        titleAccordion.style.color = 'var(--color-bg-light)'
    }
}


