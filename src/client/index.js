//const rr = require('../server/index.js ')
//const dotenv = require('dotenv');
//const aylien = require("aylien_textapi");
//dotenv.config({ path: './config.env' });

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/base.css'
import './styles/footer.css'
import './styles/form.css'
import './styles/header.css'
import './styles/resets.css'
console.log(checkForName);

//alert("I EXIST")
console.log("CHANGE!!");
console.log(`Your API key is ${process.env.API_KEY}`);
//const kye =  rr.process.env.KEY
//console.log(resData);
if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('sw.js').then(registration => {
       console.log('SW registered: ', registration);
       caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
      caches.delete(cacheName);
    });
  });
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }
 