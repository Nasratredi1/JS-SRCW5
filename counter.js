if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);

}

function count() {
    let counter = localStorage.getItem('conunter');
    conter++;
    ducument.querySelector('h1').innnerHTML = counter;
    localStorage.setItem('counter', counter);


}

ducument.addEventListner('DOMContentLoaded', function() {
    ducument.querySelector('h1').innerHTML = localStorage.getItem('çounter');
    ducument.querySelector('button').onclick = count;
});