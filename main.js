let point = document.querySelectorAll('.point');
let imageSlider = document.querySelectorAll('.imageSlider');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let controlElement = document.querySelectorAll('.controlElement');
let chek = document.getElementById('chek');

function addActiveImage() {
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
    controlElement[counter].classList.add('selectedProject');   
};

point[0].classList.add('activeImage');
imageSlider[0].classList.add('activeImage');
controlElement[0].classList.add('selectedProject');

let counter = 0;

for(let i = 0; i < point.length; i++){
    point[i].addEventListener('click',()=>{
        for (let k = 0; k < imageSlider.length; k++){
            point[k].classList.remove('activeImage');
            imageSlider[k].classList.remove('activeImage');
            controlElement[k].classList.remove('selectedProject');    
        }
        counter = i;
        addActiveImage();
    }) 
    
}

for (let i = 0; i < point.length; i++) {
    controlElement[i].addEventListener('click', () => {
        for (let k = 0; k < imageSlider.length; k++) {
            point[k].classList.remove('activeImage');
            imageSlider[k].classList.remove('activeImage');
            controlElement[k].classList.remove('selectedProject');
        }
        counter = i;
        addActiveImage();
        
        if (counter == 0) {
            document.getElementById('city').textContent = 'Rostov-on-Don LCD admiral';
            document.getElementById('apartmentArea').textContent = '81 m2';
            document.getElementById('repairTime').textContent = '3.5 months';
        } else if (counter == 1) {
            document.getElementById('city').textContent = 'Sochi Thieves';
            document.getElementById('apartmentArea').textContent = '105 m2';
            document.getElementById('repairTime').textContent = '4 months';
        } else if (counter == 2) {
            document.getElementById('city').textContent = 'Rostov-on-Don Patriotic';
            document.getElementById('apartmentArea').textContent = '93 m2';
            document.getElementById('repairTime').textContent = '3 months';
        }
    })
}

leftBtn.addEventListener('click',() =>{
    for (let k = 0; k < imageSlider.length; k++) {
        point[k].classList.remove('activeImage');
        imageSlider[k].classList.remove('activeImage');
        controlElement[k].classList.remove('selectedProject');
    }
    counter--;
    if (counter < 0){
        counter = imageSlider.length-1;
    }
    addActiveImage();
  
})

rightBtn.addEventListener('click', () => {
    for (let k = 0; k < imageSlider.length; k++) {
        point[k].classList.remove('activeImage');
        imageSlider[k].classList.remove('activeImage');
        controlElement[k].classList.remove('selectedProject');
    }
    counter++;
    
    if (counter >= imageSlider.length) {
        counter = 0;
    }
    addActiveImage();
      
})

chek.addEventListener('click',() => {
if (counter == 0) {
    document.getElementById('city').textContent = 'Rostov-on-Don LCD admiral';
    document.getElementById('apartmentArea').textContent = '81 m2';
    document.getElementById('repairTime').textContent = '3.5 months';
} else if (counter == 1) {
    document.getElementById('city').textContent = 'Sochi Thieves';
    document.getElementById('apartmentArea').textContent = '105 m2';
    document.getElementById('repairTime').textContent = '4 months';
} else if (counter == 2) {
    document.getElementById('city').textContent = 'Rostov-on-Don Patriotic';
    document.getElementById('apartmentArea').textContent = '93 m2';
    document.getElementById('repairTime').textContent = '3 months';
}

});

