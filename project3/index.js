
var questionsContenaire = document.getElementsByClassName('questions-contenaire');
console.log(questionsContenaire);

for(var i = 0; questionsContenaire.length; i++){
    questionsContenaire[i].addEventListener('click', function (){
        this.classList.toggle('active');
    })
};