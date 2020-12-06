var minion = 'https://api.funtranslations.com/translate/minion.json';
var submit = document.getElementById('submit');
var display = document.getElementById('display');
submit.addEventListener('click',()=>{
    var text = document.getElementById('input').value;
    var get = minion+'?text='+text;
    console.log(get);
    getrequestvalue(get);
});

function getrequestvalue(url) {
    display.innerText = 'Please wait.....';
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        display.innerText = json.contents.translated;
    })
    .catch(data =>{
        display.innerText = '';
        alert("Too Many Requests: Rate limit of 5 requests per hour exceeded");
    })
}