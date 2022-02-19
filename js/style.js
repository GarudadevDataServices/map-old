
function style(feature) {
    var color;
    try{
        color=data["data"][feature["properties"][trigger]]["color"];}
    catch{
        console.log("Failed for "+[feature["properties"][trigger]]);
        color="snow";
    }
    return {
        fillColor: color,
        weight: 0.5,
        opacity:0.7,
        color: 'black',
        fillOpacity: .7
    };
}