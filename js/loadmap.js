
//Document must contain a div called "map"

/* function load_map:-
    file : link or path of file
   size : discribes the size of the map box*/

function load_map(file,size=null){
    var map;
    var map = L.map('map',{ zoomControl: false, attributionControl:false}).setView([51.505, -0.09], 13);
    $.getJSON(file,function(data){
        stateLayer=L.geoJson(data,{style:style,onEachFeature: onEachFeature});
        stateLayer.addTo(map);
        map.fitBounds(stateLayer.getBounds());
    });
}