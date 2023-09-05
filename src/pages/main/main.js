import './main.css';
export { default as Main } from './main.hbs?raw';


document.addEventListener('click', e => {
   const targetPopup = e.target.getAttribute('openLink');
   const closePopup = e.target.getAttribute('closePopup');
   if (targetPopup) {
      document.querySelector(`.popup_${targetPopup}`).classList.add('popup_open');
      e.preventDefault();
      e.stopImmediatePropagation();
   }
   if (closePopup) {
      document.querySelector(`.popup_${closePopup}`).classList.remove('popup_open');
      e.preventDefault();
      e.stopImmediatePropagation();
   }
})
