
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

A metodologia diz respeito aos recursos e ferramentas que o grupo utilizou no nosso trabalho, para a concepção da nossa pesquisa escolhemos o método ágil, em específico o SCRUM, que seria segundo Fábio Cruz:
Scrum é um framework estrutural que está sendo usado para gerenciar o desenvolvimento de produtos complexos desde o início da 1990. Scrum não é um processo ou uma técnica para construir produtos; em vez disso, é um framework dentro do qual você pode empregar vários processos ou técnica [...] esta definição consiste em papéis, eventos, artefatos e as regras do Scrum que unem os demais e os mantem integrados (CRUZ,2018).

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow, publicado pela primeira vez e popularizado por Driessen em 2010.
Segundo Antunes (2021), O Git Flow delimita um método de branchs bem estabelecidos, concebidos e fundados pelas releases. Isto dá origem a uma base sólida que controla projetos maiores. O Git Flow trabalha com seis branchs ao todo, sendo o Develop e o Main os principais, que duram por todo projeto; enquanto Suporte, Feature, Bugfix e Hotfix que existem até se fundirem com as branches principais.


## Gerenciamento de Projeto

No que se diz respeito a divisão de funções e a organização do grupo, o grupo está utilizando a ferramenta Trello, que foi elaborado para trabalhar a base do método kanban, que foi estruturado da seguinte forma:
    • Recursos e material: Este template tem como função a de identificar o significado das etiquetas empregadas na nossa pesquisa, juntamente com facilitar a busca de material acadêmico para a elaboração do projeto.
    • Backlog: Representa o Product Backlog do nosso projeto, todas as atividades realizadas no decorrer se encontram presentes na lista.
    • A fazer: Representa o Sprint Backlog, são as atividades que o grupo está realizando no momento
    • Em andamento: Quando uma tarefa é iniciada, ela é movida para cá.
    • Testes: Representam a checagem de Qualidade de uma determinada ferramenta desenvolvida. Quando as tarefas são testadas e aprovadas pela sua funcionalidade, eles são movidos para o “Concluído”.
    • Concluido: Representa as tarefas finalizadas do trabalho, que não necessitam mais de revisão e que estão prontas para a entrega final.
    • Trancado: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu 
> Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

No processo ágil definido pelo grupo, se tornou necessário a divisão de tarefas especificadas pela metodologia do SCRUM, o grupo se organizou da seguinte forma:
● Scrum Master: Roberto Gontijo
● Product Owner: Welbscley Lucas
● Equipe de Desenvolvimento: Matheus Santos, Raul Vitor, Maria Luiza Barbosa, Flávia Cerqueira, Rodrigo Pimentel

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

O quadro kanban feito pelo grupo se encontra disponível no link https://trello.com/b/CYgE4Q9Q/gymmatch.

As etiquetas do projeto foram definidas como:
    • Documentação
    • Desenvolvimento
    • Infraestrutura
    • Testes
    • Gerência de Projetos 

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue:

Ambiente
Plataforma
Link de Acesso
Repositório de 
código fonte
GitHub
https://classroom.github.com/a/2Gkv4WVz

Documentos do projeto
Google Drive
https://drive.google.com/drive/

Projeto de Interface e Wireframes
Marvelapp, Whisical
https://marvelapp.com/prototype/dcd2346
https://whimsical.com/gymmatch-67T732Lpb43T46NuchKnmp
Meio de Comunicação do Grupo
Whats app, Microsoft Teams
https://web.whatsapp.com/
https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software
Gerenciamento de Projetos
Trello
https://trello.com/b/CYgE4Q9Q/gymmatch

