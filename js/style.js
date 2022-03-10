
function style(feature) {
    var color;
    try{
        color=featuredata["data"][feature["properties"][trigger]]["color"];}
    catch{
        console.log("Failed for "+[feature["properties"][trigger]]);
        color="snow";
    }
    return {
        fillColor: color,
        weight: 0.7,
        opacity: 0.5,
        color: 'black',
        fillOpacity: .7
    };
}