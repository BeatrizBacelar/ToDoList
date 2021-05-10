// 1 - Referenciar o input
let input = document.querySelector('input[name=tarefa]');

//2 - Referenciar o button
let btn = document.querySelector('#botao');

//3 - Referenciar a lista 
let lista = document.querySelector('#lista');

let tarefas = [
    'Ler livro',
    'Iniciar projeto',
    'Fazer devocional',
    'Movie´s friends',
    'Reunião vendas'

];

function renderizarTarefas(){
    // Limpar a listagem de items antes de renderizar novamente a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        // Criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        // Criar um texto 
        let itemTexto = document.createTextNode(tarefa);

        // Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1 -Precisamos "escutar" o vendo de click no botão
btn.onclick = function(){
// 2 - Precisamos capturar o valor digitado pelo usuário no input
let novaTarefa = input.value;

if (novaTarefa != ''){
    // 3 - Precisamos atualizar a nova tarefa na listar (array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa);

    // Executando a função para renderizar as tarefas
    renderizarTarefas();

    // Limpar o input
    input.value = '';

   

}else{
    let card = document.querySelector('.card');

    let span = document.createElement('span');
    span.setAttribute('class', 'alert alert-warning');
    
    let msg = document.createTextNode('Você precisa informar  a tarefa!!');

    span.appendChild(msg);
    card.appendChild(span);
    }

}





