// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function generates a random number from 1 - 6 and sees if the user guessed it correctly.
 */
function guessThatNumber () {
  // initializing variables and constants
  const MIN = 1;
  const MAX = 6;
  let randomNumber = Math.floor((Math.random() * MAX) + MIN);
  let userGuess = parseInt(document.getElementById('user-guess').value);
  let displayAns = "";
  
  // if randomNumber = userGuess, display "You got it right!"
  if (randomNumber == userGuess) {
    displayAns = "You got it right!"
  }
  // if randomNumber != userGuess, display "Wrong guess, try again."
  if (randomNumber != userGuess) {
    displayAns = "Wrong guess, try again."
  }

  // display response to user
  document.getElementById('response').innerHTML = displayAns
}