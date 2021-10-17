window.onload = function(){

    function buscandoCep(dadosCep){
        for(let campos in dadosCep){
            //console.log(dadosCep);
            if(document.querySelector(`#${campos}`)){
                document.querySelector(`#${campos}`).value= dadosCep[campos];
            }
        }
    }


    let dadosCep=async function(cepUrl){
        let url=`https://viacep.com.br/ws/${cepUrl}/json`;
        try {
            let consutaCep=await fetch(url);
            let dadosCep=await consutaCep.json();
            buscandoCep(dadosCep);
        } catch(error){
            alert(error);
        }
    
    }
//} 
const btnBuscaCep=document.querySelector("#btnBuscaCep");
const cxCep=document.querySelector("#cxCep");
    

    btnBuscaCep.addEventListener('click', function(){
        let cep = cxCep.value;
      dadosCep(cep);
    })
}

export {buscandoCep, dadosCep}