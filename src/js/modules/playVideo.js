//incarca playerul youtube in POO
export default class VideoPlayer{
    constructor(triggers,overlay)
    {
        this.btns=document.querySelectorAll(triggers);
        this.overlay=document.querySelector(overlay);
        this.close=this.overlay.querySelector('.close');
    }

    bindTriggers()
    {
        this.btns.forEach(btn=>
            {
                btn.addEventListener('click',()=>
                {
                    if(document.querySelector('iframe#frame'))
                    {
                        this.overlay.style.display='flex';
                        document.body.style.overflow = "hidden";
                    }
                    else{
                        const path=btn.getAttribute('data-url');
                        this.createPlayer(path);
                    }
              
                });
            });
    }

    bindCloseBtn()
    {
        this.close.addEventListener('click',()=>
        {
            this.overlay.style.display='none';
            this.player.stopVideo();
        });
    }

    overlayClose()
{
    this.overlay.addEventListener('click', (e) => {
        //cand dau click in afara modal window inchid modal window
        //daca param estee true atunci lucreaza
     
            this.overlay.style.display = "none";
            document.body.style.overflow = "";
            this.player.stopVideo();
       
        
    });
}

   

    createPlayer(url)
    {
        //frame asta ii selectorul la divul unde va fi playerul
        this.player= new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
           
          });
          console.log(this.player);
          this.overlay.style.display='flex';
          document.body.style.overflow = "hidden";
    }

 /*
    play()
    {
   
    }
*/
    //facem player video utiliand yputube palyer api
    init()
    {
        // 2. This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  
        this.bindTriggers();
        this.bindCloseBtn();
        this.overlayClose();
    }
}