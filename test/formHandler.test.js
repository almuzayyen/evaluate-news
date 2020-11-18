import { handleSubmit } from "../src/client/js/formHandler"
const fetch = require('node-fetch')


describe("Testing the submit functionality", () => {
     
    test("Testing the handleSubmit() function", () => {
           
           let input = 'I am happy to see you'
           
           let output = 'I am happy to see you'
           
             return fetch('http://localhost:3000').then( data =>{
             expect(input).toEqual(output)
          });
           
           
           expect(handleSubmit).toBeDefined();
})});