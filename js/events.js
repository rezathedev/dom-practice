function makeRed (){
    document.body.style.backgroundColor = 'red'
}

const makeBlueButton = document.getElementById ('make-blue')
      makeBlueButton.onclick = makeBlue;

      function makeBlue(){
        document.body.style.backgroundColor = 'blue'
      }

      const makePurpleButton = document.getElementById ('make-purple');
      makePurpleButton.onclick = function makePurple (){
        document.body.style.backgroundColor = 'purple'
      }

const makePinkButton = document.getElementById ('make-pink')
makePinkButton.addEventListener('click', makePink)

function makePink(){
        document.body.style.backgroundColor = 'pink'
      }
      
const makeGreenButton = document.getElementById ('make-green')
      makeGreenButton.addEventListener ('click', function makeGreen () {
        document.body.style.backgroundColor = 'green'
      })

document.getElementById ('make-goldenrod').addEventListener ('click', function (){
        document.body.style.backgroundColor = 'goldenrod'
    })