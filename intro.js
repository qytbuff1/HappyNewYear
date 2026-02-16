var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function(){
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.box-button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
    // Ensure title, message and signature are visible when popup opens
    var titleEl = document.getElementById('name-cua-em')
    var msgEl = document.getElementById('message-content')
    var sigEl = document.querySelector('.fixedContent')
    if(titleEl){ titleEl.style.display = 'block'; titleEl.style.opacity = '1' }
    if(msgEl){ msgEl.style.display = 'block'; msgEl.style.opacity = '1' }
    if(sigEl){ sigEl.style.display = 'block'; sigEl.style.opacity = '1' }
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
    // Reset any inline styles so CSS controls hide/show after close
    var titleEl = document.getElementById('name-cua-em')
    var msgEl = document.getElementById('message-content')
    var sigEl = document.querySelector('.fixedContent')
    if(titleEl){ titleEl.style.display = ''; titleEl.style.opacity = '' }
    if(msgEl){ msgEl.style.display = ''; msgEl.style.opacity = '' }
    if(sigEl){ sigEl.style.display = ''; sigEl.style.opacity = '' }
})


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}