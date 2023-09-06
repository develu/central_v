

function buscarCep() {

    let cep = document.getElementById('id_cep').value

    fetch("https:viacep.com.br/ws/" + cep + "/json/")
        .then(Response => Response.json())
        .then(json => {

            console.log(json)

            document.getElementById('id_rua').value = json.logradouro;
            document.getElementById('id_complemento').value = json.complemento;
            document.getElementById('id_cidade').value = json.localidade;
            document.getElementById('id_bairro').value = json.bairro;
            document.getElementById('id_uf').value = json.uf;

        })


}










