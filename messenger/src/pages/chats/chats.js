import './chats.css';
export { default as Chats } from './chats.hbs?raw';

let activeChat = '';

document.addEventListener('click', e => {
   const contact = e.target.closest('.contact');
   
   if (contact) {
      if (activeChat !== '') {
         document.querySelector('.contact_active').classList.remove('contact_active');
         activeChat = '';
      }
      e.target.closest('.contact').classList.add('contact_active');
      activeChat = contact.getAttribute('contact');
      e.preventDefault();
      e.stopImmediatePropagation();
   }
})