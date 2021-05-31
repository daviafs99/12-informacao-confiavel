/**
 *
 * @param {HTMLElement} idDowebpage
 */
$.getJSON("db/db.json", function (data) {
  data.forEach((webpage, index) => {
    $("#resultado-container").append(
      "<div class='resultado' id=" +
        index +
        ">" +
        "<img src='' pontuacao='" +
        webpage.reputation +
        "'></img>" +
        "<div class='texto-resultado'>" +
        "<a href='" +
        webpage.url +
        "' class='dominio'>" +
        "<h1 class='titulo'>" +
        webpage.name +
        "</h1>" +
        "</a>" +
        "<p class='not'>" +
        webpage.description +
        "</p>" +
        "</div>" +
        //Comeco dos botões de avaliação
        "<div class='dropdown'>" + 
        "<button class='btn btn-secondary dropdown-toggle like' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>" +
          "Gostei" + 
        "</button>" +
        "<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>" +
          "<li><a class='dropdown-item' href='#'>Bem organizado</a></li>" +
          "<li><a class='dropdown-item' href='#'>Informativo</a></li>" +
          "<li><a class='dropdown-item' href='#'>Interface Intuitiva</a></li>" +
          "<li><a class='dropdown-item' href='#'>Design agradável</a></li>" +
        "</ul>" +
      "</div>" +

      "<div class='dropdown'>" + 
        "<button class='btn btn-secondary dropdown-toggle dislike' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>" +
          "Não gostei" + 
        "</button>" +
        "<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>" +
          "<li><a class='dropdown-item' href='#'>Poluição visual</a></li>" +
          "<li><a class='dropdown-item' href='#'>Informações falsas</a></li>" +
          "<li><a class='dropdown-item' href='#'>Má interação com a comunidade</a></li>" +
          "<li><a class='dropdown-item' href='#'>Conteúdo muito parcial</a></li>" +
        "</ul>" +
      "</div>" +
      //Fim dos botões de avaliação

      "</div>"
    );

    var element = "#" + index + " img";

    if (webpage.reputation < 4) {
      $(element).attr("src", "assets/icons/ruim.png");
    } else if (webpage.reputation >= 4 && webpage.reputation <= 6) {
      $(element).attr("src", "assets/icons/neutro.png");
    } else {
      $(element).attr("src", "assets/icons/bom.png");
    }
  });
});

function search() {
  var input, filter;
  input = $("#keywords");
  filter = input.val().toUpperCase();
  listawebpages = $("#resultado-container").children();

  listawebpages.each((index, element) => {
    var tagLink = element.children[1].children[0];

    var domain = tagLink.getAttribute("href");
    var name = tagLink.children[0].textContent;

    var description = element.children[1].children[1].textContent;

    if (
      description.toUpperCase().includes(filter) ||
      name.toUpperCase().includes(filter) ||
      domain.toUpperCase().includes(filter)
    ) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}
