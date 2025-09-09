/*
html
home tag
guest tag
home score buttons x3
away score buttons x3



js
Variables needed
Home score
Guest Score

addScore +1
addScore +2
addScore +3

functions
score1
score2
score3
*/

let homeTotal = document.getElementById('home-total')
let guestTotal = document.getElementById('guest-total')
let homeScore = 0
let guestScore = 0
let addScore = 1

function hScore1() {
    homeScore += addScore
    homeTotal.textContent = homeScore
}

function hScore2() {
    homeScore += addScore + 1
    homeTotal.textContent = homeScore
}

function hScore3() {
    homeScore += addScore + 2
    homeTotal.textContent = homeScore
}

function aScore1() {
    guestScore += addScore
    guestTotal.textContent = guestScore
}

function aScore2() {
    guestScore += addScore + 1
    guestTotal.textContent = guestScore
}

function aScore3() {
    guestScore += addScore + 2
    guestTotal.textContent = guestScore
}