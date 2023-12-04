

const Referenser = document.querySelector('#ul__Referenser')
const Tjänster = document.querySelector('#ul__Tjänster')
const Kontakt = document.querySelector('#ul__Kontakt')
const mainSection = document.querySelector('#main__Section')

  // Method for creating elements with fewer lines

 


Referenser.addEventListener('click', ()=>{
    const sectionUL = document.createElement('ul');
    sectionUL.setAttribute('id', 'sectionULID' )
    mainSection.appendChild(sectionUL);
    
    
    for (let index = 0; index < 3; index++) {
        const referensTag = document.createElement('span');
        referensTag.innerText='Hallå Haris detta är en loop som körs 3 gånger  för att slippa hämta samma element 3 gånger i koden. =) Klicka igen så försvinner texten.'
        sectionUL.appendChild(referensTag);
        }

        
        Referenser.addEventListener('click', () => {
            const sectionULs = document.querySelector('#sectionULID');
            sectionULs.remove(); 
            
            
            })

            
 })

 

 





