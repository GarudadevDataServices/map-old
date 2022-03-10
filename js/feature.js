function onEachFeature(feature, layer) {
    var highlight= {
      weight: 3,
      opacity:1,
      color:'red',
      fillOpacity: .7};

    var output;
    var _color;
    
    try{
        output=featuredata["data"][feature["properties"][trigger]]["matter"];
        _color=featuredata["data"][feature["properties"][trigger]]["color"];}
    catch{
        console.log("Failed for "+[feature["properties"][trigger]]);
        return;
    }

    layer.on("mouseover", function (e) { 
        if (tapped){return;}
        if(lastClickedLayer){
            stateLayer.resetStyle(lastClickedLayer);
            lastClickedLayer=null;
            }
            lastClickedLayer=layer;
            layer.setStyle(highlight);
            document.getElementById("result").innerHTML=output;
            document.getElementById("result").style.backgroundColor=_color;
        }); 

    layer.on("click", function (e) { 
        console.log("cliked");
        if (checkLayer==layer){
            stateLayer.resetStyle(checkLayer);
            checkLayer=null;
            tapped=false;
            return;
        }
        tapped=true;
        if(lastClickedLayer){
                stateLayer.resetStyle(lastClickedLayer);
        }
        lastClickedLayer=layer;
        checkLayer=layer;
        layer.setStyle(highlight);
        document.getElementById("result").innerHTML=output;
        document.getElementById("result").style.backgroundColor=_color;
    });   
}