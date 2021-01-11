let windows = document.getElementById('window');

function search(){

    let userSearch = document.getElementById('userSearch').value;

    let searchItem = 'https://en.wikipedia.org/wiki/' + userSearch;

    windows.src = searchItem;

}