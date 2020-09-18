import $ from 'jquery'

let catalog = [];

let beerBasePattern = {
  name: "",
  type: "",
  alcohol: "",
  extract: "",
  ibu: "",
  hop: "",
  producer: "",
  country: "",
  photo: "",
  description: "",
}

function getForm() {

  let tempList = [];

  $('#inputForm input:text').each(function () {
    let inputValue = $(this).val();
    inputValue = (inputValue) ? inputValue.toString() : "";
    tempList[$(this).attr("name")] = inputValue;
  })
  console.log(tempList);
  return tempList;
}

function addBeerToCatalog() {

  let newBeer = getForm();
  let result = {};

  for (let key in newBeer) {

    let param = key;
    let formInput = newBeer[key];

    console.log(param);
    console.log(formInput);

    for (let key in result) {
      $("#catalogElementTable").find("#addBeer-" + key).html(result[key])
    }

  }



}

console.log(addBeerToCatalog());



