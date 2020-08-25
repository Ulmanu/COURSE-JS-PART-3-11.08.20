//functia cordeon
export default class ShowInfo{
    constructor(triggers)
    {
        this.btns=document.querySelectorAll(triggers);

    }

    init()
    {
        this.btns.forEach(btn=>
            {
                btn.addEventListener('click',()=>
                {
                    if(btn.closest('.module__info-show').nextElementSibling.style.display=='block')
                    {
                               
                        btn.closest('.module__info-show').nextElementSibling.classList.remove("animated");
                        btn.closest('.module__info-show').nextElementSibling.classList.remove('slideInDown');
                        btn.closest('.module__info-show').nextElementSibling.style.display='none';
                     
                    }
                    else{
                        btn.closest('.module__info-show').nextElementSibling.style.display='block';
                            
                        btn.closest('.module__info-show').nextElementSibling.classList.add("animated");
                        btn.closest('.module__info-show').nextElementSibling.classList.add('slideInDown');
                    }
                  

                
                    
                });
            });
    }
}