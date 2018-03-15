var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_heated = new ol.layer.Image({
                            opacity: 1,
                            title: "heated",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/heated.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [5783, 3299],
                                imageExtent: [3212210.652344, 8309528.706902, 3501969.269718, 8474807.260491]
                            })
                        });

lyr_heated.setVisible(true);
var layersList = [baseLayer,lyr_heated];
