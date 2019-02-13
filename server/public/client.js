$(document).ready(onReady);

function onReady(){
    console.log('jq is loaded');
    getFood();
}

function getFood(){
    $.ajax({
        url: '/food',
        method: 'GET'
    }).then(function(response){
        for( let i=0; i<response.length; i++){
            let food = response[i];
            $('#tableBody').append(`<tr>
                <td>${food.name}</td>
                <td>${food.tye}</td>
            </tr>
`)
        }//end for loop
    })//end .then
}//end getFood Function