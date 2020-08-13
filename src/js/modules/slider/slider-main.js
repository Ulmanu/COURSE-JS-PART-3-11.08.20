//sliderul main cu mostenirea din slider
import Slider from './slider';

export default class MainSlider extends Slider {
    constructor( btns) {
        super( btns);
    }
    //n-directia sliderului
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        try {
            this.hanson.style.opacity = '0';
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch (e) {}

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.classList.add("animated");
            slide.style.display = 'none';

        });
        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('slideInDown');
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers()
    {
        if(this.container){
            this.hanson = document.querySelector('.hanson');
            this.btns.forEach(item => {
                item.addEventListener('click', () => {
                    this.plusSlides(1);
    
                });
    
                item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                });
    
            });
            
            document.querySelectorAll('.prevmodule').forEach(item=>
                {
                    item.addEventListener('click',(e)=>
                    {
                        e.stopPropagation();
                        e.preventDefault();
                        this.plusSlides(-1);
                    });
                });
            
            
                document.querySelectorAll('.nextmodule').forEach(item=>
                    {
                        //bug din cauza ca nextmodule ii in next si iesa ca se apasa de 2 ori
                        item.addEventListener('click',(e)=>
                        {
                            e.stopPropagation();
                            e.preventDefault();
                            this.plusSlides(1);
                        });
                    });
                }
    }

    render() {
        try {
        
        
                this.showSlides(this.slideIndex);
                this.bindTriggers();

            }
           
         catch (e) {

        }


       
    }
}