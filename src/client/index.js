
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import{mohammed} from './js/formHandler'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

console.log(checkForName);
const bt = document.getElementById(inputName);
checkForName();
console.log(bt)
 handleSubmit();

console.log (handleSubmit)

//alert("I EXIST")
console.log("CHANGE!!");
console.log(`Your API key is ${process.env.API_KEY}`);


 if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
 }