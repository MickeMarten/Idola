const Referenser = document.querySelector('#ul__Referenser')
const Tjänster = document.querySelector('#ul__Tjänster')
const Kontakt = document.querySelector('#ul__Kontakt')
const main = document.querySelector('#main')


  class Showtext {
    constructor() { 
    
    
  }

    clearMain() {
      while (main.firstChild)
      main.removeChild(main.firstChild);
    }

    createSpan(Företag1, Företag2, Företag3){
      this.clearMain();
      const mainSection = document.createElement('section');
      main.appendChild(mainSection);
      mainSection.classList.add('Sectioninformation');

      const referenserLista = [Företag1, Företag2, Företag3];
      referenserLista.forEach((företag) => {
      const span = document.createElement('span');
      span.innerText = företag;
      mainSection.appendChild(span);
      })
    
   }
  }

  const Showtexts = new Showtext;
  
 
  Referenser.addEventListener('click', () =>{ 
    
    Showtexts.createSpan('Byggmax', 'Schenker', 'K-Rauta'); 
    });

  Tjänster.addEventListener('click', ()=> {
    Showtexts.createSpan('Solceller', 'Cevapi', 'Flygspaning')
  });

  Kontakt.addEventListener('click', () => {
    Showtexts.createSpan('Ida', 'Laila', 'Amna')
    
  })
  

