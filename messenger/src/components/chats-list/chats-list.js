import './chats-list.css';
export { default as ChatsList } from './chats-list.hbs?raw';

document.addEventListener('click', e => {
   const target = e.target.getAttribute('toggle');
   if (target) {
      document.querySelector('.chats-list').classList.toggle('chats-list_hidden');
      document.querySelector('.chats-list__hide').classList.toggle('chats-list__hide_turned');
      e.preventDefault();
      e.stopImmediatePropagation();
   }

})