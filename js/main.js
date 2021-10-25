/*Challenge - Rock, Paper, Scissors, Lizard, Spock using es6 and served by a simple node server (http module), no peaking at your past R,P,S code and push to Github.*/

let score = 0

const buttons = document.querySelectorAll('input')

buttons.forEach(el => el.addEventListener('click', startGame))

function startGame(e){
    
    let userChoice = e.target.value
    console.log(userChoice)

    fetch(`/api?input=${userChoice}`)  
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })  
    .catch(err => {
        console.log(`error ${err}`)
    })
}