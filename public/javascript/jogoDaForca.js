import Emitter from './emitter.js';

const dicionarieWords = ["Aviao", "Dinossauro", "Carro", "Onibus", "Sapato", "Escola", "Dicionario", "Caderno"];
const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const jogoDaForca = {
  logic: {
    missWords: [],
    hitsWords: [],
    /**
     * @param {NodeListOf<HTMLElement> | NodeListOf<Element>} btnVirtualKeyboard 
     */
    eventKeyboard(btnVirtualKeyboard) {
      document.addEventListener('keyup', (e) => {
        const keyCode = e.keyCode; // Alphabet UNICODE interval is 65 to 90.
        const key = e.key;
        if (this.isLetter(keyCode)) {
          // console.log(key.toLowerCase());
          // Função contento a logica do jogo
          this.checkSecret(key, this.switchWord, btnVirtualKeyboard);
        }
      });
    },
    /**
     * @param {NodeListOf<HTMLElement> | NodeListOf<Element>} btnVirtualKeyboard - Elementos/Botões do Teclado Virtual.
     * @param {String[]} alphabet - Alfabeto...
     */
    eventVirtualKeyboard(btnVirtualKeyboard, alphabet) {
      btnVirtualKeyboard.forEach((element) => {
        element.addEventListener('click', (e) => {
          /**
           * @type {HTMLElement | any}
           */
          const btn = e.target;
          if (alphabet.includes(btn.innerText.toLowerCase())) {
            this.checkSecret(btn.innerText.toLowerCase(), this.switchWord, btnVirtualKeyboard);
          }
        });
      });
    },
    /**
     * @param {Number} cod - Código UNICODE do teclado.
     * @returns {Boolean} - Retorna se uma das teclas pressionadas é um número.
     */
    isLetter(cod) {
      return cod >= 65 && cod <= 90;
    },
    /**
    * @param {String[]} dicionarie - Dicionario com as palavras a serem sorteadas.
    * @returns {String}
    **/
    switchWord: dicionarieWords[Math.floor(Math.random() * dicionarieWords.length)],
    /**
     * @param {String} key - Letra escolhida.
     * @param {String} secret - Palavra secreta.
     * @param {NodeListOf<HTMLElement>} keyboard - Elementos do Teclado Virtual.
     * @param {String[]} arr
     */
    checkSecret(key, secret, keyboard) {
      if (this.missWords.includes(key)) {
        console.warn("Letra Repetida!");
      } else {
        if (secret.includes(key)) {
          console.log(secret, key);
          this.hitsWords.push(key);
          this.showLetterHit(keyboard);
        } else {
          this.missWords.push(key);
          this.showLetterMiss(keyboard);
        }
      }
    },
    /**
     * @param {NodeListOf<HTMLElement>} container
     */
    showLetterMiss(container) {
      container.forEach((element) => {
        element.addEventListener('click', (e) => {
          /**
           * @param {HTMLElement} btn
          **/
          const btn = e.target;
          
        })
      })
    },
    /**
     * @param {NodeListOf<HTMLElement>} container
    **/
    showLetterHit(container) {

    }
  }
}

const keyboard = document.querySelectorAll('.btn-keyboard');
jogoDaForca.logic.eventVirtualKeyboard(keyboard, alphabet);
jogoDaForca.logic.eventKeyboard(keyboard);

