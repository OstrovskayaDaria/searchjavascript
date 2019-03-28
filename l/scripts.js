//let data = "Hello My Dear Potato"
//let searchQuery = "potato"
//let searchResults = data.toLowerCase().includes(searchQuery)
//console.log(searchResults);

let $input = document.querySelector("input")
$input.onkeyup = filterCards

let $cards = document.querySelectorAll(".card")

function filterCards(event) {
  let searchQuery = event.target.value.toLowerCase()
  $cards.forEach(function compareWithSearchQuery($card) {
    let cardText = $card
          .querySelector("h2")
          .innerText
          .toLowerCase()
    console.log("cardText: ", cardText)
    console.log("searchQuery: ", searchQuery)
    if (cardText.includes(searchQuery)) {
      $card.style.display = "block"
    } else {
      $card.style.display = "none"
    }
  })
}
