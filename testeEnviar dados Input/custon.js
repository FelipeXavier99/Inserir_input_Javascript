// custom.js
document.addEventListener("DOMContentLoaded", function() {
    // Ler dados do campo input
    let nomeUsuario = document.getElementsByName("form_nome_usuario")[0].value;
    console.log(nomeUsuario);
  
    // Enviar os dados para o arquivo index.html
    document.getElementById("valor_form_nome_usuario").innerHTML = nomeUsuario;
  });
  
  // Chamar a função quando o usuário digitar algum valor   
  function receber() {
    // Receber dados do campo form_turma_usuario quando digitar no input
    var turmaUsuario = document.getElementById("form_turma_usuario").value;
    console.log(turmaUsuario);
  
    // Enviar dados para o campo valor_form_turma_usuario
    document.getElementById("valor_form_turma_usuario").innerHTML = turmaUsuario;
  }
  