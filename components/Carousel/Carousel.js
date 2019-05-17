class Carousel {
    constructor(carouselEle){
        this.carouselEle = carouselEle;

        this.imgData = this.carouselEle.dataset.tab;
        console.log(this.imgData)
        //reference left arrow and create click handler
        this.leftArrow = document.querySelector('.left-button');
        this.leftArrow.addEventListener('click', () => this.leftClick());
        //reference right arrow and create click handler
        this.rightArrow = document.querySelector('.right-button');
        this.leftArrow.addEventListener('click', () => this.rightClick());
    }
    leftClick(){

    }
    rightClick(){

    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
