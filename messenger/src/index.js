import Handlebars from 'handlebars';
import './index.css';
import * as Components from './components/components.js';
import * as Pages from './pages/pages.js';

Object.entries(Components).forEach(([name, component]) => {
   Handlebars.registerPartial(name, component);
});

const pages = {
   'main': [Pages.Main],
   'chats': [Pages.Chats],
   'settings': [Pages.Settings],
}

function navigate(page) {
   const [source, args] = pages[page];
   document.body.innerHTML = Handlebars.compile(source)(args)
}

document.addEventListener('DOMContentLoaded', () => navigate('main'));

document.addEventListener('click', e => {
   const nav = e.target.getAttribute('navigate');
   if (nav) {
      navigate(nav);
      e.preventDefault();
      e.stopImmediatePropagation();
   }
})