# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

 
Clara Rezende <br/>
	Idade: 26
Ocupação: Educadora infantil.	
Aplicativos:
• Instagram
• Facebook
Motivações:
• Aumento da qualida-de de vida;
• Melhorar o seu con-dicionamento físico;
• Possui uma lesão do joelho.	
Frustrações:
• Dificuldade para en-caixar uma rotina de treino adaptada;
• Manter a frequência de treino nos dias frios;
• Dificuldade de manter uma alimentação saudável;
• Quer ter acesso a ficha de treino pela Web.	
Hobbies, História:
• Clara é apaixonada por corrida, mas de-vido a sua lesão op-tou por treinar em uma academia;
• Tem como principal interesse treinos que foque no aeróbico.

Arthur Souza
	Idade: 45
Ocupação: Mecânico, trabalha em diversas concessionarias de carros.	
Aplicativos:
• Facebook.
Motivações:
• Perda de peso;
• Melhora da sua condição física e de sua respiração;
• Recomendação médica.
Frustrações:
• Muita dificuldade para executar os exercícios;
• Pouca disciplina para manter uma rotina de treinos;
• Dificuldade em manter uma dieta balanceada;
• Mensalidade muito cara para sua renda.	
Hobbies, História:
• Arthur nunca foi de praticar atividades físicas, mas devido a orientação médica, ele precisa praticar para controlar suas doenças crônica;
• Tem histórico de problemas cardíacos na família, sente necessidade de melhorar os seus hábitos alimentares.


 Marcelo Falcão
	Idade: 27
Ocupação: Músico, cantor, compositor e influenciador digital. 	
Aplicativos:
• Facebook;
• WhatsApp;
• You tube;
• Instagram.
Motivações:
•Atingir 10 milhões de seguidores em suas redes sociais;
• Ter uma carreira musical consolidada no exterior;
• Ser premiado com o Grammy;
• Estético/metrossexual.	
Frustrações:
• Usuário de drogas;
• Consome muitos alimentos industrializados;
• Frequenta academia apenas no verão;
• Dorme no máximo 04 horas por dia;
• Dificuldade de alimentar antes do treino.	
Hobbies, História:
• Frequentador de festas e baladas;
• Aptidão musical apresentada quando Marcelo Falcão era criança e foi presenteado com um violão.


 Rafaela Santos
	Idade: 28
Ocupação: Personal Trainer, nutróloga. 	
Aplicativos:
• Instagram;
• Twitter;
• Tiktok.
Motivações:
• Hipertrofia;
• Saúde e bem estar;
• Conhecimento nutricional dos alimentos.	
Frustrações:
• Ausência dos alunos durante os treinos em períodos frios;
• A falta de informações que seus alunos possuem sobre informações nutricionais dos alimentos; 
• Falta de incentivo das academias para que os alunos pratiquem atividades diferentes.	
Hobbies, História:
• Praticar exercícios físicos;
• Passear com pet;
• Leitura e comparti-lhar conhecimento;
• Nutrição e saúde;
• Influenciadora digital e criadora de conte-údo fit;
• Participa de aulas de yoga.



Ângelo Rodrigues
	Idade: 35
Ocupação: Contador.
Empreendedor (dono de academia).	
Aplicativos:
• Instagram;
• Facebook;
• Twitter.
Motivações:
• Crescimento do em-preendimento;
• Trazer inovação para o seu negócio;
• Investimentos;
• Abrir novas unidades da academia.	
Frustrações:
• Taxas de juros ele-vadas sem retornos;
• Pouco incentivo go-vernamental;
• Pouca receita da academia em perío-dos sazonais.	
Hobbies, História:
• Prática de atividade física, em específico ciclismo;
• Leitura;
• Gosta de participar de eventos sobre empreendedorismo.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administr           | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
