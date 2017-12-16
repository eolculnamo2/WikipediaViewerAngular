
function go(){
    var search = document.getElementById("search").value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search +"&format=json&origin=*";
    alert(search);
}