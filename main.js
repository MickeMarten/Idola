

const Referenser = document.querySelector('#ul__Referenser')
const Tjänster = document.querySelector('#ul__Tjänster')
const Kontakt = document.querySelector('#ul__Kontakt')
const mainSection = document.querySelector('#main__Section')


  class Showtext {
    constructor() { 
    
  }
    createSpan(Företag1, Företag2, Företag3){
      const referenserLista = [Företag1, Företag2, Företag3];
      referenserLista.forEach((företag) => {
      const span = document.createElement('span');
      span.innerText = företag;
      mainSection.appendChild(span);
      })
    
   }
  }

  const Showtexts = new Showtext;
  const Showtexts2 = new Showtext;

  Referenser.addEventListener('click', () =>{ 
    Showtexts.createSpan('Byggmax', 'Schenker', 'K-Rauta')
  });

  Tjänster.addEventListener('click', ()=> {
    Showtexts2.createSpan('Solceller', 'Cevapi', 'Flygspaning')
  });
  

