import $ from 'jquery'

export function addBeerToCatalog() {

  let newBeer = {};

  $('#inputForm input').each(function () {
    let inputValue = $(this).val();
    inputValue = (inputValue) ? inputValue.toString() : null;
    newBeer[$(this).attr("name")] = inputValue;
  })

  console.log(newBeer)  
}

console.log(addBeerToCatalog());

