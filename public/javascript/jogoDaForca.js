const dicionarieWords = ["Avião", "Dinossauro", "Carro", "Ônibus", "Sapato", "Escola", "Dicionario", "Caderno"];
const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const secret = dicionarieWords[Math.floor(Math.random() * dicionarieWords.length)];
const errors = [];
const correct = [];

const jogoDaForca = {
  /**
   * @param {HTMLElement} container
   * @param {String[]} arr
   * @param {String} text 
   * @param {String} secret
   * @returns {void}
   */
  showLetters(container, arr, text, secret) {
    container.innerHTML = `<h3>${text}</h3>`;
    if (text.includes('Letras Erradas')) {
      arr.forEach((letter) => {
        container.innerHTML += `<span> ${letter} </span>`;
      });
    } else {
      secret.split("").forEach((letter) => {
        if (arr.includes(letter)) {
          container.innerHTML += `<span> ${letter} </span>`;
        } else {
          container.innerHTML += `<span> _ </span>`;
        }
      })
    }
  },
  /**
   * @param {HTMLElement} container 
   * @param {String[]} arr 
   * @param {String?} secret 
   * @param {String} message 
   * @returns {String}
   */
  isFinish(container, arr, secret, message) {
    if (arr.length === secret.length) {
      return message;
    } else if (secret === container.innerText) {
      return message;
    }
  },
  draw() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < errors.length; i++) {
      partesCorpo[i].style.display = "block";
    }
  },
  /**
   * @param {String[]} dicionarie 
   * @returns {String | Boolean}
   */
  isWord(dicionarie) {
    document.addEventListener('keyup', (e) => {
      dicionarie.forEach((letter) => {
        if (e.key.toUpperCase() === letter.toUpperCase()) {
          return true;
        }
      });
    });
  },

  loadGame(secret) {
    document.addEventListener("keyup", (e) => {
      const keyCode = e.key; // 65 - 90 (intervalo)
      if (this.isWord(alphabet)) {
        console.log("OK!")
        if (errors.includes(keyCode)) {

        } else if (secret.includes(keyCode)) {
          correct.push(keyCode)
        } else {
          errors.push(keyCode);
        }
        this.updateGame();
      }
    });
  },
  updateGame() {
    const secretContainer = document.querySelector('.palavra-secreta-container');
    this.showLetters(document.querySelector('.letras-erradas-container'), errors, 'Letras Erradas');
    this.showLetters(secretContainer, correct, "", secret);
    this.draw();
    this.isFinish("", errors, "", 'Fim de Jogo! Você perdeu!');
    this.isFinish(secretContainer, correct, secret, 'Parabéns! Você ganhou!');
  },
}

jogoDaForca.loadGame();
jogoDaForca.updateGame();