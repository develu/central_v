function carregarTabela(lst) {

    //var jsonString = JSON.stringify(lst)

    var tb = $("#id_table")

    tb.DataTable({
        "data": lst,
        "columns": [{
                "data": "id"

            },
            {
                "data": "nome"
            },
            {
                "data": "descrição"
            },    
            {
                "data": "url"
            },
            {
                "data": "caminho"
            },
            {
                "data": "data"
            },

        ],
        pageLength: 10,
        lengthChange: false,
        responsive: true,
        order: [
            [1, "desc"]
        ],
        dom: 'lTfgitp',
        columnDefs: [{
                "targets": [0, 1, 2, 3, 4, 5],
                "className": "text-center"
            },
            {
                targets: [],
                render: function (data, type, row) {
                    return data.length > 25 ?
                        data.substr(0, 25) + '…' :
                        data;
                }
            }
        ],
        oLanguage: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            },
            "select": {
                "rows": {
                    "_": "Selecionado %d linhas",
                    "0": "Nenhuma linha selecionada",
                    "1": "Selecionado 1 linha"
                }
            }
        }

    });
}



const visualizarCaminho = (caminho) => {

    
    let conteudoModal = document.getElementById("id_conteudo_caminho")
    conteudoModal.innerHTML = ""
    conteudoModal.innerHTML = caminho

    let modal = document.getElementById("id_modal_caminho")
    modal.style.display = "block"

}

const controleModalCaminho = (idModal) => {

    let modal = document.getElementById(idModal)
    
    if (modal.style.display == "none") {
        modal.style.display = "block"
    } else {
        modal.style.display = "none"
    }

}