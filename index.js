let homeScore = 0;
let guestScore = 0;

let homePoints = document.getElementById("home_score");
let guestPoints = document.getElementById("guest_score")

function home_try_add() {
    homeScore += 5;
    homePoints.textContent = homeScore;
}

function home_conv_add() {
    homeScore += 2;
    homePoints.textContent = homeScore;
}

function home_pen_add() {
    homeScore += 3;
    homePoints.textContent = homeScore;
}

function guest_try_add() {
    guestScore += 5;
    guestPoints.textContent = guestScore;
}

function guest_conv_add() {
    guestScore += 2;
    guestPoints.textContent = guestScore;
}

function guest_pen_add() {
    guestScore += 3;
    guestPoints.textContent = guestScore;
}

function new_game() {
    homeScore = 0;
    guestScore = 0;
    guestPoints.textContent = guestScore;
    homePoints.textContent = homeScore;
}