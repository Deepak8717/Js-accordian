const btns =  document.querySelectorAll(".acc-btn");

function accordian(){
    //this = the btn | icon & bg changed
    this.classList.toggle("is-open");


    // the acc-content
    const content = this.nextElementSibling;

    if(content.style.maxHeight){
        content.style.maxHeight = null;
    }else{
        content.style.maxHeight = content.scrollHeight + "px";
    }

    //event
   
}
btns.forEach((el)=>el.addEventListener("click", accordian));
