
    let portImg = 0;
    let Pimages =[];
    let Ptime = 3000;

    Pimages[0] = 'projects/portfolio1.png';
    Pimages[1] = 'projects/portfolio2.png';
    Pimages[2] = 'projects/portfolio3.png';
    Pimages[3] = 'projects/portfolio4.png';

    function PortfolioImage(){
    document.portfolioImage.src = Pimages[portImg];

        if(portImg < Pimages.length - 1){
            portImg++;
        }
        else {
            portImg = 0;
        }
        setTimeout("PortfolioImage()", Ptime);
        }
    window.addEventListener('load', PortfolioImage);
    
    var thesisImg = 0;
    var images =[];
    var time = 3000;

    images[0] = 'projects/thesis1.png';
    images[1] = 'projects/thesis2.png';
    images[2] = 'projects/thesis3.png';
    images[3] = 'projects/thesis4.png';

    function thesisImage(){
    document.thesisImage.src = images[thesisImg];

        if(thesisImg < images.length - 1){
            thesisImg ++;
        }
        else {
            thesisImg = 0;
        }
        setTimeout("thesisImage()", time);
        }  
    window.addEventListener('load', thesisImage);

