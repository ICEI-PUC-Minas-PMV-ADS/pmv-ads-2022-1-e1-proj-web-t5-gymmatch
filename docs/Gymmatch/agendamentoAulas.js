function leDados() {
  let strDados = localStorage.getItem('db')
  let objDados = {}
  if (strDados) {
    objDados = JSON.parse(strDados)
  } else {
    objDados = {
      aluno: [
        {
          nome: 'Otávio',
          academia: 'Academia 1',
          matricula: '12345',
          email: 'otavio@otavio.com',
          data: ' 06/05/2022',
          horario: '06:00'
        },
        {
          nome: 'Luisa',
          academia: 'Academia 3',
          matricula: '54321',
          email: 'luisa@luisa.com',
          data: ' 07/05/2022',
          horario: '07:00'
        },
        {
          nome: 'Marta',
          academia: 'Academia 5',
          matricula: '13542',
          email: 'marta@marta.com',
          data: ' 08/05/2022',
          horario: '10:00'
        }
      ]
    }
  }
  return objDados
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados))
}

function incluirAlunos() {
  // ler dados do localStorage
  let objDados = leDados()

  // Incluir contato
  let strNome = document.getElementById('nome').value
  let strAcademia = document.getElementById('academia').value
  let strMatricula = document.getElementById('matricula').value
  let strEmail = document.getElementById('email').value
  let strData = document.getElementById('data').value
  let strHorario = document.getElementById('horario').value
  let novoAluno = {
    nome: strNome,
    academia: strAcademia,
    matricula: strMatricula,
    email: strEmail,
    data: strData,
    horario: strHorario
  }
  location.reload()
  alert('Agendamento enviado!')

  objDados.aluno.push(novoAluno)

  // Salvar dados no localStorage

  salvaDados(objDados)
}

function imprimeDados() {
  let tela = document.getElementById('tela')
  let strHtml = ''
  let objDados = leDados()

  for (i = 0; i < objDados.aluno.length; i++) {
    strHtml += `<p>${objDados.aluno[i].nome} - ${objDados.aluno[i].academia} - ${objDados.aluno[i].matricula} - ${objDados.aluno[i].email} - ${objDados.aluno[i].data} - ${objDados.aluno[i].horario} </p>`
  }

  tela.innerHTML = strHtml
}

// pagina meus agendamentos

//function incluirTabela (){
//   let tela2 = document.getElementById ('tela2');
//   let strHtml = '';
//   let objDados = leDados ();

//   for (i=0; i< objDados.aluno.length; i++){
//        strHtml +=  `<table>
//                        <thead>
//                            <tr>
//                                <th>Nome</th>
//                                <th>Academia</th>
//                               <th>Matrícula</th>
//                               <th>Email</th>
//                               <th>Data</th>
//                              <th>Horário</th>
//                              <th>Ações</th>
//                           </tr>
//
//                        </thead>
//                           <tbody>
//                               <tr>
//                                   <td>${objDados.aluno[i].nome}</td> -
//                                   <td>${objDados.aluno[i].academia}</td> -
//                                   <td>${objDados.aluno[i].matricula}</td> -
//                                   <td>${objDados.aluno[i].email}</td> -
//                                   <td>${objDados.aluno[i].data}</td> -
//                                   <td>${objDados.aluno[i].horario}</td>
//                               </tr>
//                           </tbody>
//
//                   </table>`
//   }

//   tela2.innerHTML = strHtml;
//}

// config Botoes
document
  .getElementById('btnCarregaDados')
  .addEventListener('click', imprimeDados)
document
  .getElementById('btnAgendamento')
  .addEventListener('click', incluirAlunos)

console.log('teste')
console.log(leDados)
