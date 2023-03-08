// 0 - Adicionar evento em botão para executar contexto da função
async function executar(){
    // 1 - Pegar id do input
    // 2 - Buscar personagem da api
    const id = 1 // ! Substituir pelo valor do INPUT !
    const personagem = await buscarPersonagemDaAPI(id)
    console.log(personagem)

    /* MONTAR ABAIXO HTML COM O VALOR RETORNADO DA API */
    // 3 - Pegar elemento de resultado do HTML
    // 4 - Atribuir valores do personagem na tela

    /* Dica:
        Dar console.log na variável 'personagem'
        para visualizar o objeto;
        Olhar a documentação de como o objeto é retornado
        https://rickandmortyapi.com/documentation/#character-schema
    */
}


/* Função para fazer uma request GET para a API utilizando o JS 
   Veremos logo em seguida! Foquem na leitura do Objeto na função acima.
*/
async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}