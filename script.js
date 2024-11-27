let randomNumber = Math.floor(Math.random() * 100) + 1; // Nombre aléatoire entre 1 et 100
let attempts = 0;
let wallet = 0; // Portefeuille virtuel en crédits

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit-guess");
const restartButton = document.getElementById("restart-game");
const messageElement = document.getElementById("message");
const walletElement = document.getElementById("wallet");

// Vérifie la tentative de l'utilisateur
submitButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent =
      "Veuillez entrer un nombre valide entre 1 et 100.";
    return;
  }

  if (userGuess === randomNumber) {
    const prize = Math.floor(Math.random() * 50) + 10; // Gain aléatoire entre 10 et 50 crédits
    wallet += prize;

    messageElement.textContent = `🎉 Bravo ! Vous avez trouvé le nombre ${randomNumber} en ${attempts} tentatives et gagné ${prize} crédits !`;
    messageElement.style.color = "#27ae60";
    walletElement.textContent = wallet;
    submitButton.disabled = true; // Désactive le bouton après la victoire
  } else if (userGuess < randomNumber) {
    messageElement.textContent = "Trop petit ! Essayez encore.";
  } else {
    messageElement.textContent = "Trop grand ! Essayez encore.";
  }
});

// Redémarre le jeu
restartButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  messageElement.textContent = "";
  submitButton.disabled = false;
  messageElement.style.color = "#e74c3c";
});
