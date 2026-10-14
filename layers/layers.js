var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_madha_shp_1 = new ol.format.GeoJSON();
var features_madha_shp_1 = format_madha_shp_1.readFeatures(json_madha_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_madha_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_madha_shp_1.addFeatures(features_madha_shp_1);
var lyr_madha_shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_madha_shp_1, 
                style: style_madha_shp_1,
                popuplayertitle: 'madha_shp',
                interactive: true,
                title: '<img src="styles/legend/madha_shp_1.png" /> madha_shp'
            });
var format_railways_2 = new ol.format.GeoJSON();
var features_railways_2 = format_railways_2.readFeatures(json_railways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_2.addFeatures(features_railways_2);
var lyr_railways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_2, 
                style: style_railways_2,
                popuplayertitle: 'railways',
                interactive: true,
                title: '<img src="styles/legend/railways_2.png" /> railways'
            });
var format_road_3 = new ol.format.GeoJSON();
var features_road_3 = format_road_3.readFeatures(json_road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_3.addFeatures(features_road_3);
var lyr_road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_road_3, 
                style: style_road_3,
                popuplayertitle: 'road',
                interactive: true,
                title: '<img src="styles/legend/road_3.png" /> road'
            });
var format_water_4 = new ol.format.GeoJSON();
var features_water_4 = format_water_4.readFeatures(json_water_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_4.addFeatures(features_water_4);
var lyr_water_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_4, 
                style: style_water_4,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_4.png" /> water'
            });
var format_waterways_5 = new ol.format.GeoJSON();
var features_waterways_5 = format_waterways_5.readFeatures(json_waterways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_5.addFeatures(features_waterways_5);
var lyr_waterways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterways_5, 
                style: style_waterways_5,
                popuplayertitle: 'waterways',
                interactive: true,
                title: '<img src="styles/legend/waterways_5.png" /> waterways'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_madha_shp_1.setVisible(true);lyr_railways_2.setVisible(true);lyr_road_3.setVisible(true);lyr_water_4.setVisible(true);lyr_waterways_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_madha_shp_1,lyr_railways_2,lyr_road_3,lyr_water_4,lyr_waterways_5];
lyr_madha_shp_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'STATE_UT': 'STATE_UT', 'Shape_Leng': 'Shape_Leng', 'STATE_LGD': 'STATE_LGD', 'Dist_LGD': 'Dist_LGD', 'Subdis_LGD': 'Subdis_LGD', 'Sub_dist': 'Sub_dist', 'District': 'District', 'Subdis_Typ': 'Subdis_Typ', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_railways_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_road_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_water_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_waterways_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_madha_shp_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'STATE_UT': '', 'Shape_Leng': '', 'STATE_LGD': '', 'Dist_LGD': '', 'Subdis_LGD': '', 'Sub_dist': '', 'District': '', 'Subdis_Typ': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_railways_2.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_road_3.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_water_4.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_waterways_5.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', 'Shape_Leng': '', });
lyr_madha_shp_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'STATE_UT': 'no label', 'Shape_Leng': 'no label', 'STATE_LGD': 'no label', 'Dist_LGD': 'no label', 'Subdis_LGD': 'no label', 'Sub_dist': 'no label', 'District': 'no label', 'Subdis_Typ': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_railways_2.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_road_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_water_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_waterways_5.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', 'Shape_Leng': 'no label', });
lyr_waterways_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});