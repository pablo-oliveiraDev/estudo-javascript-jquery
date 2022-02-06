

 var dados;
 

function consultaCep(){
    document.getElementById("texto").classList.add("mostrar");
    document.getElementById("Dados").classList.add("mostrar");
    var cep = document.getElementById("cep").value;
   
     Number(cep);
     
    console.log(cep);
    $.ajax({
        
        url:"https://viacep.com.br/ws/"+ cep +"/json/",
        type: "GET",
        
        success: function(response){
            console.log(response);
           
            document.getElementById("logradouro").innerHTML ='Logradouro: ' + response.logradouro;
            document.getElementById("Complemento").innerHTML ='Complemento: ' + response.complemento;
            document.getElementById("Bairro").innerHTML ='Bairro: ' + response.bairro;
            document.getElementById("Cidade").innerHTML ='Cidade: ' + response.localidade;
        }
    })
}
