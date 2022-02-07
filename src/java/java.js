

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
           
           $("#logradouro").html(response.logradouro);
           $("#UF").html(response.uf);
           $("#bairro").html(response.bairro);
           $("#localidade").html(response.localidade);
        }
    })
}
