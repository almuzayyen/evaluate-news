import { checkForName,validate } from './nameChecker'

const  bt = document.getElementById('inputName');
  function handleSubmit (event) {
     
    bt.addEventListener('click',(oEvent) =>{
    oEvent.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
    checkForName(formText)

    console.log("::: Form Submitted :::")
      if( formText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
        fetch('http://localhost:3000',{
         method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text:formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        let resultData=res      
         resultData.forEach(element => {
           console.log(element)
           let scoreTag =element.score_tag
           let agreement = element.agreement
       let sentenceList = element.sentence_list[0].text
       document.getElementById('results').innerHTML = `<ul> <li> Score Tag :${scoreTag} <br></li>
        <li>Sentence List : ${sentenceList} <br></li> 
        <li>Agreement: ${agreement}</li> 
       </ul>`
          });
        

    })
  }
  else 
  {
    validate();
   
  }
})

};


export { handleSubmit  }