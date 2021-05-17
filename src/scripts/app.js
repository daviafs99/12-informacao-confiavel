/**
 *
 * @param {HTMLElement} idDoSite
 */
$.getJSON("db/db.json", function (dados) {
  dados.forEach((pagina, index) => {
    console.log(pagina);
    $("#resultado-container").append(
      '<div class="resultado" id=' +
        index +
        ">" +
        '<img src="" pontuacao="' +
        pagina.reputacao +
        "></img>" +
        '<div class="texto-resultado">' +
        '<a href="' +
        pagina.url +
        '" class="dominio">' +
        '<h1 class="titulo">' +
        pagina.nome +
        "</h1>" +
        "</a>" +
        '<p class="not">' +
        pagina.descricao +
        "</p>" +
        "</div>" +
        "</div>"
    );

    var elemento = "#" + index + " img";

    if (pagina.reputacao < 4) {
      $(elemento).attr("src", "assets/ruim.png");
    } else if (pagina.reputacao >= 4 && pagina.reputacao <= 6) {
      $(elemento).attr("src", "assets/neutro.png");
    } else {
      $(elemento).attr("src", "assets/bom.png");
    }
  });
});
