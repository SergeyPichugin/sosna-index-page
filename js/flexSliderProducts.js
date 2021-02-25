document.addEventListener('DOMContentLoaded', () => {

    // Render slides

    let wrapperSlides = document.querySelector('.flexProductSlider__wrapper')

    fetch('js/products.json', { mode: 'no-cors' })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.slides.forEach((item,key) => {
                wrapperSlides.innerHTML += `
                <a href="${item.href}" class="flexProductSlider__slide_link">
                    <div class="flexProductSlider__slide">
                        <img src="${item.image}" class="flexProductSlider__slide_img"/>
                        <div class="flexProductSlider__slide_top">
                            <div class="flexProductSlider__slide_top--title">${item.text}</div>
                            <div class="flexProductSlider__slide_top--price">${item.price}</div>
                        </div>                        
                    </div>
                </a>
                `                
            })            
        });



    // Slider
    let btnLeftSlide = document.querySelector('#slideProductLeft')
    let btnRightSlide = document.querySelector('#slideProductRight')
    let wrapper = document.querySelector('.flexProductSlider__wrapper')

    btnLeftSlide.addEventListener('click', () => {
        console.log('click left btn')
        wrapper.scrollBy(-200, 0)        
    })

    btnRightSlide.addEventListener('click', () => {
        console.log('click right btn')
        wrapper.scrollBy(200, 0)
    })

})