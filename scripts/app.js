/**
 *
 * @param {HTMLElement} idDoSite
 */
$.getJSON("db/db.json", function (dados) {
  dados.forEach((site, index) => {
    $("#resultado-container").append(
      '<div class="resultado" id=' +
        index +
        ">" +
        '<img src="" pontuacao="' +
        site.reputacao +
        '"></img>' +
        '<div class="texto-resultado">' +
        '<a href="' +
        site.url +
        '" class="dominio">' +
        '<h1 class="titulo">' +
        site.nome +
        "</h1>" +
        "</a>" +
        '<p class="not">' +
        site.descricao +
        "</p>" +
        "</div>" +
        "</div>"
    );

    var elemento = "#" + index + " img";

    if (site.reputacao < 4) {
      $(elemento).attr("src", "assets/ruim.png");
    } else if (site.reputacao >= 4 && site.reputacao <= 6) {
      $(elemento).attr("src", "assets/neutro.png");
    } else {
      $(elemento).attr("src", "assets/bom.png");
    }
  });
});

function buscador() {
  var input, filter, ul, li, a, i, txtValue;
  input = $("#keywords");
  filter = input.val().toUpperCase();
  listaSites = $("#resultado-container").children();

  listaSites.each((index, element) => {
    htmlString = element.outerHTML;
    if (htmlString.includes(filter)) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}
