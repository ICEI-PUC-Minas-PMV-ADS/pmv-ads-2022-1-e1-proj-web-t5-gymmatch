# Template padrão do site

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

> **Links Úteis**:
>
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
      <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <header id="header">
      <nav>
        <a class="logo" href="">Gymmatch</a>
        <ul class="menu">
          <a href=""><li>Fidelização</li></a>
          <a href=""><li>Benefícios</li></a>
          <a href=""><li>Depoimentos</li></a>
          <a href=""><li>Dúvidas</li></a>
          <a href=""><li>Informações Nutricionais</li></a>
          <a href=""><li>Login</li></a>
        </ul>
      </nav>
    </header>
    <main>
      <section class="text">
        <p>
          Existem estudos que mostram que a prática de exercício físico no clima
          frio queima até 30% a mais de calorias. No inverno o corpo necessita
          de mais calorias para conseguir se manter aquecido. Isso acontece
          porque o metabolismo acelera seu funcionamento até cinco vezes o
          normal. Manter uma dieta equilibrada e praticar uma atividade no frio
          é um grande aliado para quem quer perder peso. Os resultados vão
          depender da frequência e intensidade.
        </p>
        <p>
          Outra vantagem está no reforço do sistema imunológico. Se exercitar no
          inverno reforça nossa resistência física e permite o combate de
          doenças como gripes e resfriados, muito comuns nessa época do ano.
          Isso ocorre porque a exposição ao frio aumenta o número de leucócitos
          e granulócitos, que são os responsáveis pelo funcionamento do sistema
          imunológico.
        </p>
      </section>
      <div class="image">
        <img src="img/home.jpg"Academia" />
      </div>
    </main>
  </body>
</html>
