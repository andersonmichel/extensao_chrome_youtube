/**
 * Aguarda o carregamento da página
 */
window.onload = function() {

    /**
     * Insere campo de busca na página do vídeo do Youtube
     */
    var form = `
    <form class="search-in-channel-form" method="get" action="">
        <input type="text" name="query" placeholder="Pesquisar no canal">
    </form>
    `;
    document.querySelector("#center").insertAdjacentHTML('beforeend', form);

    /**
     * Aplica estilo | Bloco inserido no final da tag head
     */
    var css = `
    <style>
    .search-in-channel-form input{
        border:1px solid #ccc;
        padding: 8px;
        border-radius: 2px;
    }
    </style>
    `;
    document.querySelector("head").insertAdjacentHTML('beforeend', css);
    
    /**
     * Aguarda um tempo - Isso foi necessário para o script funcionar (não sei o motivo)
     */
    setTimeout( function () {

        // Obtém o nome do canal 
        const action = '/c/' + document.querySelector("#upload-info a").innerHTML + '/search';
        // Define a action correta ao formulário de pesquisa
        document.querySelector(".search-in-channel-form").setAttribute("action", action);
        
    }, 10000);

};

