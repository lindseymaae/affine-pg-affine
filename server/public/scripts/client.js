$(document).ready(onReady);

function onReady() {
    console.log('jq is loaded');
    $('#submitButton').on('click', addFood);
    $('#tableBody').on('click', '.deleteButton', deleteFood);
    getFood();
}

function getFood() {
    $.ajax({
        url: '/food',
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        
        for (let i = 0; i < response.length; i++) {
            let food = response[i];
            $('#tableBody').append(`<tr data-id=${response[i].id}>
                <td>${response[i].name}</td>
                <td>${response[i].type}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>
            `)
        }//end for loop
    })//end .then
}//end getFood Function

function addFood() {
    $.ajax({
        url: '/food',
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
    $.ajax({
        url: '/food',
        method: 'DELETE',
        data: $(this).closest('tr').data().id,
    }).then(function( response ){
        console.log( response );
        
    })
}