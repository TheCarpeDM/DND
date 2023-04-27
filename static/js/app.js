// Dropdown Menus (code modified from: https://codepen.io/LukyVj/pen/ZEMrgMr)
const selects = document.querySelectorAll('.select');

window.addEventListener('DOMContentLoaded', () => {
  selects.forEach(select => {
    const button = select.querySelector('button');
    const full_height = [];
    
    [...select.querySelectorAll('div > a')].map(link => {
      const styles = window.getComputedStyle(link);
      const box = link.getBoundingClientRect();
      const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom) || 0;
      const height = box.height + margin;
      full_height.push(height);

      link.addEventListener('click', () => {
        const link_text = link.textContent;
        const button_text = button.textContent;
        button.textContent = link_text;
        button.style.animationName="popOut";
        button.addEventListener("animationend", () => {
          button.style.animationName="none"
        });
        const span = document.createElement('span');
        span.textContent = button_text;
        link.innerHTML = "";
        link.appendChild(span)
        link.blur()
      })
    });
    
    const totalHeight = full_height.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    select.dataset.totalHeight = totalHeight;
    select.style.setProperty('--max-height', totalHeight);  
  });
});

// Coefficients
var sizeCoef = 0.07909636;  
var acCoef = 0.18098322;  
var hpCoef = 0.03810668;
var strCoef = -0.05702636; 
var dexCoef = -0.03802873;
var conCoef = 0.12440479; 
var intCoef = 0.14611386;  
var wisCoef = 0.14004083;  
var chaCoef = 0.05820986; 
var legendary_nanCoef = -3.02979347;
var fly_YesCoef = -0.32659132; 
var swim_YesCoef = -0.43662237; 
var type_beastCoef = 1.20509042; 
var type_celestialCoef = -0.24721319; 
var type_constructCoef = 2.58533629;
var type_dragonCoef = -0.32959655;                                             
var type_elementalCoef = 0.47856361;
var type_feyCoef = -1.49799827;  
var type_fiendCoef = 1.71708598;
var type_giantCoef = 0.90638153;
var type_humanoidCoef = -0.0469929; 
var type_monstrosityCoef = 0.782792; 
var type_oozeCoef = 1.6085642;   
var type_plantCoef = 0.92353568;  
var type_swarmofTinybeastsCoef = 1.68812587;
var type_undeadCoef = 1.27772706;
