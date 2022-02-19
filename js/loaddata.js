
function load_data(link){
    $.getJSON(link, function(json) {
        data=json;
        trigger=json["trigger"];
        document.getElementById("info").innerHTML=json["desc"];
        document.getElementById("title").innerHTML=json["title"];
    });
}