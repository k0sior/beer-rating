import beerBase from "./BeerBase"
import { InputForm } from "./InputForm"
import $ from 'jquery'



let beerBasePattern = {
    name: "",
    type: "",
    alcohol: "",
    extract: "",
    hop:"",
    producer: "",
    country: "",
    photo: "",
    description: "",
}

function addBeerToCatalogue () {

    let tempList = [];

    $('#inputForm input:text').each(function() {
        let inputValue = $(this).val();
        inputValue = (inputValue) ? inputValue : "";
        tempList[$(this).attr("name")] = inputValue;
    })

    return tempList
    
}

