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
   'error': [Pages.Error, { errorMessage: 'Страница не найдена', errorCode: '404' }],
}

function navigate(page) {
   const [source, args] = pages[page];
   document.body.innerHTML = Handlebars.compile(source)(args)
}

document.addEventListener('DOMContentLoaded', () => navigate('main'));

document.addEventListener('click', e => {
   const nav = e.target.getAttribute('navigate');
   if (nav) {
      if (nav === 'error__404') {
         pages.error[1].errorMessage = 'Страница не найдена';
         pages.error[1].errorCode = '404';
         navigate('error');
      } else if (nav === 'error__500') {
         pages.error[1].errorMessage = 'Что-то пошло не так...';
         pages.error[1].errorCode = '500';
         navigate('error');
      } else {
         navigate(nav);
      }
      e.preventDefault();
      e.stopImmediatePropagation();
   }
})
