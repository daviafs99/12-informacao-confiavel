/**
 *
 * @param {HTMLElement} idDowebpage
 */

function renderizaElementos() {
  resultado_container = $("#resultado-container");
  resultado_container.empty();

  for (key in localStorage) {
    webpage = JSON.parse(localStorage.getItem(key));
    if (webpage == null) {
      break;
    } else {
      let reputation =
        webpage.reputation.design +
        webpage.reputation.information +
        webpage.reputation.ui +
        webpage.reputation.partiality;

      resultado_container.append(
        "<div class='resultado' id='" +
          key +
          "'>" +
          "<img src='' pontuacao='" +
          reputation +
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
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", 1)' class='dropdown-item' href='#'>Design agradável</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", 2)' class='dropdown-item' href='#'>Informativo</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", 3)' class='dropdown-item' href='#'>Interface Intuitiva</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", 4)' class='dropdown-item' href='#'>Imparcialidade</a></li>" +
          "</ul>" +
          "</div>" +
          "<div class='dropdown'>" +
          "<button class='btn btn-secondary dropdown-toggle dislike' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>" +
          "Não gostei" +
          "</button>" +
          "<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", -1)' class='dropdown-item' href='#'>Poluição visual</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", -2)' class='dropdown-item' href='#'>Informações falsas</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", -3)' class='dropdown-item' href='#'>Interface confusa</a></li>" +
          "<li><a onClick='changeReputation(\"" +
          key +
          "\", -4)' class='dropdown-item' href='#'>Conteúdo muito parcial</a></li>" +
          "</ul>" +
          "</div>" +
          //Fim dos botões de avaliação
          "</div>"
      );
      let element = "#" + key + " img";

      if (reputation < 0) {
        $(element).attr("src", "assets/icons/ruim.png");
      } else if (reputation > 0) {
        $(element).attr("src", "assets/icons/bom.png");
      } else {
        $(element).attr("src", "assets/icons/neutro.png");
      }
    }
  }
}

function search() {
  var input, filter;
  input = $("#keywords");
  filter = input.val().toUpperCase();
  listawebpages = $("#resultado-container").children();

  listawebpages.each((index, element) => {
    var tagLink = element.reputation.children[1].children[0];

    var domain = tagLink.getAttribute("href");
    var name = tagLink.children[0].textContent;

    var description = element.reputation.children[1].children[1].textContent;

    if (
      description.toUpperCase().includes(filter) ||
      name.toUpperCase().includes(filter) ||
      domain.toUpperCase().includes(filter)
    ) {
      element.reputation.style.display = "";
    } else {
      element.reputation.style.display = "none";
    }
  });
}

function changeReputation(key, category) {
  element = JSON.parse(localStorage.getItem(key));
  console.log(element);

  localStorage.removeItem(key);

  switch (category) {
    case 1:
      console.log(1);
      element.reputation.design = element.reputation.design + 1;
      break;
    case 2:
      console.log(2);
      element.reputation.information = element.reputation.information + 1;
      break;
    case 3:
      console.log(3);
      element.reputation.ui = element.reputation.ui + 1;
      break;
    case 4:
      console.log(4);
      element.reputation.partiality = element.reputation.partiality + 1;
      break;
    case -1:
      console.log(-1);
      element.reputation.design = element.reputation.design - 1;
      break;
    case -2:
      console.log(-2);
      element.reputation.information = element.reputation.information - 1;
      break;
    case -3:
      console.log(-3);
      element.reputation.ui = element.reputation.ui - 1;
      break;
    case -4:
      console.log(-4);
      element.reputation.partiality = element.reputation.partiality - 1;
      break;
  }

  localStorage.setItem(key, JSON.stringify(element));
  renderizaElementos();
}
function filtroBaixo(){
  for (key in localStorage) {
    webpage = JSON.parse(localStorage.getItem(key));
  if (webpage == null) {
      break;
    } else {
      let reputation =
        webpage.reputation.design +
        webpage.reputation.information +
        webpage.reputation.ui +
        webpage.reputation.partiality;
      if(reputation <= 0){
        $(`#${key}`).css("display", 'none');
      }
    }
  }

}

$.getJSON("db/db.json", function (data) {
  data.forEach((webpage, index) => {
    localStorage.setItem(`webpage_${index}`, JSON.stringify(webpage));
  });
  renderizaElementos();
});
