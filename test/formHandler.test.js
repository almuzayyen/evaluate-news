import { handleSubmit } from "../src/client/js/formHandler"
const fetch = require('node-fetch')
const httpMocks = require('node-mocks-http');

/*
describe("Testing the submit functionality", () => {
     
    test("Testing the handleSubmit() function", () => {
           
           let input = 'I am happy to see you'
           
           let output = 'I am happy to see you'
           
             return fetch('http://localhost:3000/test').then( data =>{
             expect(input).toEqual(output)
          });
           
           
           expect(handleSubmit).toBeDefined();
})});*/


describe('test fetch requst ' , () => {
    test('test creat requst', () => {
    const next = jest.fn();
    const req = httpMocks.createRequest({ 
        body: { 
        url: "http://localhost:3000/test"
        }
    });
    const res = httpMocks.createResponse();
    
});
})
