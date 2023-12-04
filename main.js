

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
 

  Referenser.addEventListener('click', () =>{ 
    mainSection.classList.toggle('Sectioninformation');
    if (mainSection.classList.contains('Sectioninformation')) {
      Showtexts.createSpan('Byggmax', 'Schenker', 'K-Rauta');
    }
      else {
        
      }

    
    
    
  });

  Tjänster.addEventListener('click', ()=> {
    Showtexts.createSpan('Solceller', 'Cevapi', 'Flygspaning')
  });

  Kontakt.addEventListener('click', () => {
    Showtexts.createSpan('Ida', 'Laila', 'Amna')
    
  })
  

