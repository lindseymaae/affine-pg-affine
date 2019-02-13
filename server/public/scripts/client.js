$(document).ready(onReady);

function onReady() {
    console.log('jq is loaded');
    $('#submitButton').on('click', addFood);
    $('#tableBody').on('click', '.deleteButton', deleteFood);
    getFood();
}

function getFood() {
    $.ajax({
        url: '/restaurant',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        
        for (let i = 0; i < response.length; i++) {
            let food = response[i];
            $('#tableBody').append(`<tr >
                <td>${food.name}</td>
                <td>${food.type}</td>
                <td><button class="deleteButton" data-id=${food.id}>Delete</button></td>
            </tr>
            `)
        }//end for loop
    })//end .then
}//end getFood Function

function addFood() {
    $.ajax({
        url: '/restaurant',
        method: 'POST',
        data: {
            name: $('.nameInput').val(),
            type: $('.typeInput').val()
        }//end object
    }).then(function(){
   
    })//end ajax
    $('#tableBody').empty();
    getFood();
    $('.nameInput').val('');
    $('.typeInput').val('')
}//end function

function deleteFood (){
    console.log('delete button was clicked');
    console.log($(this).data().id);
    
    $.ajax({
        url: '/restaurant/' + $(this).data().id,
        method: 'DELETE'
    }).then(function( ){
        $('#tableBody').empty();
        getFood();
    });
}