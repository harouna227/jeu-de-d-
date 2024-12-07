

// var imageGauche = document.querySelector('.img1').setAttribute('src', 'images/6.jpg')
// var imageDroite = document.querySelector('.img2').setAttribute('src', 'images/6.jpg')



function changeImage(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1); 
    var imageGauche = document.querySelector('.img1').setAttribute('src', "images/"+randomNumber1+".jpg");

    var randomNumber2 = Math.floor((Math.random() * 6) + 1); 
    var imageDroite = document.querySelector('.img2').setAttribute('src', "images/"+randomNumber2+".jpg");

    if ( randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerText = "Player 1 a gagne";
    } else if ( randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerText = "Player 2 a gagne";
    }
    else {
        document.querySelector('h1').innerText = "Egalite";
    }   
}

changeImage()
