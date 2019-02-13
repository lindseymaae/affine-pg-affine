$(document).ready(onReady);

function onReady(){
    console.log('jq is loaded');
    
}

function getFood(){
    $.ajax({
        url: '/food',
        method: 'GET'
    }).then((response))
}