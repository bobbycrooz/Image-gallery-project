const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next')
const imageList = document.querySelectorAll('img');
imageIndex = 0;
// the function




prevBtn.addEventListener("click",function(){
    imageList[imageIndex].classList.remove('active');
    imageIndex--;
    imageList[imageIndex].classList.add('active')

    nextBtn.disabled = false;

    if(imageIndex == 0 ){
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener("click",function(){
    imageList[imageIndex].classList.remove('active');
    imageIndex++;
    imageList[imageIndex].classList.add('active')

    prevBtn.disabled = false;

    if(imageIndex == imageList.length -1){
        nextBtn.disabled = true;
    }
})