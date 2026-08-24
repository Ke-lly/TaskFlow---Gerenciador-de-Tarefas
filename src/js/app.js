const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');
const mensagemVazia = document.getElementById('mensagem-vazia');

function verificarListaVazia() {
  if (lista.children.length === 0) {
    mensagemVazia.style.display = 'block';
  } else {
    mensagemVazia.style.display = 'none';
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const texto = input.value.trim();

  if (texto !== '') {
    const item = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const textoNode = document.createTextNode(texto);

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        item.classList.add('concluida');
      } else {
        item.classList.remove('concluida');
      }
    });

    item.appendChild(checkbox);
    item.appendChild(textoNode);
    lista.appendChild(item);

    input.value = '';

    verificarListaVazia();
  }
});

verificarListaVazia();