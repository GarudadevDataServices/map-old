
//Document must contain a div called "map"

/* function load_map:-
    file : link or path of file
   size : discribes the size of the map box*/

function load_map(file,size=null){
    var map;
    set_map_size(size);
    var map = L.map('map',{ zoomControl: false, attributionControl:false}).setView([51.505, -0.09], 13);
    $.getJSON(file,function(data){
        stateLayer=L.geoJson(data,{style:style,onEachFeature: onEachFeature});
        stateLayer.addTo(map);
        map.fitBounds(stateLayer.getBounds());
    });
}

function set_map_size(size){
    if (size==null){
        /*document.getElementById("map").style.width=screen.width*0.7;
    document.getElementById("map").style.height=screen.height*0.9;*/}
    else{
	document.getElementById("map").style.width=size[0]+"px";
	document.getElementById("map").style.height=size[1]+"px";}
}