import $ from 'jquery'

export function addBeerToCatalog() {

  let newBeer = {};

  $('#inputForm input').each(function () {
    let inputValue = $(this).val();
    inputValue = (inputValue) ? inputValue.toString() : null;
    newBeer[$(this).attr("name")] = inputValue;
  })
  
  $(document).ready(function(){
    $("#submitFormButton").click(function(){
      let desc = $.trim($("#beerInputDescription").val())
      desc = desc ? desc.toString() : null;
      let description = {"description" : desc}
      
    })    
  });
    
  console.log(newBeer);

  return newBeer
}

console.log(addBeerToCatalog());

