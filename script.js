//Starting page
let startingpage = document.querySelector("#startingpage");
let choose2 = document.querySelectorAll(".choose2");

//main page
let mainpage = document.querySelector("#mainpage");
let showchange = document.querySelector("#showchange");
let box = document.querySelectorAll(".box");

//winner page
let winnerpage = document.querySelector("#winnerpage");
let winnername = document.querySelector("#winnername");
let reset = document.querySelector("#reset");

//Select game mode
function singlemode() {
    alert("Sorry, this mode is not available");
}
function doublemode() {

    let name1 = prompt("Enter player1 name: ");
    let name2 = prompt("Enter player2 name: ");

    //To change turns
    // false -> X
    // true -> y
    let changeTurns = null;

    //select which you want to be
    choose2.forEach(choosenow => {
        choosenow.addEventListener("click", () => {
            if (choosenow.id === "playerx") {
                changeTurns = false;
                showchange.style.left = "0px";
            }
            else {
                changeTurns = true;
                showchange.style.left = "180px"
            }
            startingpage.style.display = "none";
            mainpage.style.display = "block";
        })
    })

    box.forEach(symbols => {
        symbols.addEventListener("click", () => {
            if (changeTurns == false) {
                symbols.innerHTML = "X";
                symbols.id = "X";
                symbols.style.pointerEvents = "none";
                showchange.style.left = "180px";

                changeTurns = true;
            }
            else {
                symbols.innerHTML = "O";
                symbols.id = "O";
                symbols.style.pointerEvents = "none";
                showchange.style.left = "0px";

                changeTurns = false;

            }
            winningfunc();
            drawfunc();
        })
    })

    // All possible winning combinations in array
    let winningcomb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    let winningfunc = () => {
        for (let i = 0; i <= 7; i++) {
            let w = winningcomb[i];
            if (box[w[0]].id == "" || box[w[1]].id == "" || box[w[2]].id == "") {
                continue;
            }
            else if (box[w[0]].id == "X" && box[w[1]].id == "X" && box[w[2]].id == "X") {
                //adding text
                // console.log("X is the winner");
                winnername.innerText = `Player X Wins `;

                mainpage.style.display = "none";
                winnerpage.style.display = "block";
            }
            else if (box[w[0]].id == "O" && box[w[1]].id == "O" && box[w[2]].id == "O") {
                //adding text
                // console.log("O is the winner");
                winnername.innerText = `Player O Wins `;

                mainpage.style.display = "none";
                winnerpage.style.display = "block";
            }
            else {
                continue;
            }
        }
    }

    // draw function
    let drawfunc = () => {
        if (box[0].id != "" && box[1].id != "" && box[2].id != "" && box[3].id != "" && box[4].id != "" && box[5].id != "" && box[6].id != "" && box[7].id != "" && box[8].id != "") {
            //adding text
            winnername.innerText = `Match Draw`;

            mainpage.style.display = "none";
            winnerpage.style.display = "block";
        }
    }

    //reset game
    reset.addEventListener("click", () => {
        window.location.reload();
    })
}
