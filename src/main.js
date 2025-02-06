import './style.css'

const colors = [
    "blue", "green", "purple", "red", "yellow", "orange"
]

const currentColor=""

const options = document.querySelectorAll(
    '[name="option"]'
)

let total = 0
let correct = 0

const main = document.querySelector("#main-box")
const selected = document.querySelector("#select-box")

const wrong = document.querySelector("#wrong");
const right = document.querySelector("#right");

const correctCount = document.querySelector("#correct")
const totalCount = document.querySelector("#total")

const gameOver = document.querySelector("#game-over")
const newGame = document.querySelector("#newGameButton")
const totalCorrect = document.querySelector("#totalCorrect")

newGame.addEventListener("click", ()=>{
    main.classList=[""]
    selected.classList=[""]
    wrong.classList.add("hidden")
    right.classList.add("hidden")
    correctCount.innerHTML=0
    totalCount.innerHTML=0
    total = 0
    correct=0
    gameOver.classList.add("hidden")
})

totalCount.addEventListener(
    "change",
    ()=>{
        console.log(
            "changes"
        )
    }
)

options.forEach((option)=>{
    option.addEventListener(
        "click",
        ()=>{
            total += 1
            if(total <= 10){
                const selectedColor = option.value
                const randomIndex = Math.floor((Math.random() * 6))
                const randomColor = colors[randomIndex]

                main.classList=""
                main.classList.add(randomColor)
                selected.classList=""
                selected.classList.add(selectedColor)   

                if(randomColor === selectedColor){
                    right.classList.remove("hidden")
                    wrong.classList.add("hidden")
                    correct += 1
                }else{
                    right.classList.add("hidden")
                    wrong.classList.remove("hidden")
                }

                correctCount.innerHTML = correct
                totalCount.innerHTML = total
            }
            
            if(total===10){
                totalCorrect.innerHTML=correct
                gameOver.classList.remove("hidden")
            }
        }
    )
})



console.log(options)