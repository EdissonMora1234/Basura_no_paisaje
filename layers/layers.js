var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Actores_1 = new ol.format.GeoJSON();
var features_Actores_1 = format_Actores_1.readFeatures(json_Actores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Actores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Actores_1.addFeatures(features_Actores_1);
var lyr_Actores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Actores_1, 
                style: style_Actores_1,
                popuplayertitle: "Actores",
                interactive: true,
    title: 'Actores<br />\
    <img src="styles/legend/Actores_1_0.png" /> Ciudadano<br />\
    <img src="styles/legend/Actores_1_1.png" /> Habitantes de calle<br />\
    <img src="styles/legend/Actores_1_2.png" /> Servidor Público<br />\
    <img src="styles/legend/Actores_1_3.png" /> Vendedores informales<br />\
    <img src="styles/legend/Actores_1_4.png" /> Recicladores<br />\
    <img src="styles/legend/Actores_1_5.png" /> <br />'
        });
var format_Residuos_2 = new ol.format.GeoJSON();
var features_Residuos_2 = format_Residuos_2.readFeatures(json_Residuos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residuos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residuos_2.addFeatures(features_Residuos_2);
var lyr_Residuos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residuos_2, 
                style: style_Residuos_2,
                popuplayertitle: "Residuos",
                interactive: true,
    title: 'Residuos<br />\
    <img src="styles/legend/Residuos_2_0.png" /> Bolsas de basura  cerradas en el piso<br />\
    <img src="styles/legend/Residuos_2_1.png" /> Bolsas de basura abiertas regadas en el piso<br />\
    <img src="styles/legend/Residuos_2_2.png" /> Canecas<br />\
    <img src="styles/legend/Residuos_2_3.png" /> Escombros<br />\
    <img src="styles/legend/Residuos_2_4.png" /> Otro dispersos<br />\
    <img src="styles/legend/Residuos_2_5.png" /> Papeles<br />\
    <img src="styles/legend/Residuos_2_6.png" /> <br />'
        });
var format_escenarios_3 = new ol.format.GeoJSON();
var features_escenarios_3 = format_escenarios_3.readFeatures(json_escenarios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_escenarios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_escenarios_3.addFeatures(features_escenarios_3);
var lyr_escenarios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_escenarios_3, 
                style: style_escenarios_3,
                popuplayertitle: "escenarios",
                interactive: true,
    title: 'escenarios<br />\
    <img src="styles/legend/escenarios_3_0.png" /> Equipamientos culturales<br />\
    <img src="styles/legend/escenarios_3_1.png" /> Equipamientos deportivos<br />\
    <img src="styles/legend/escenarios_3_2.png" /> Establecimiento comercial<br />\
    <img src="styles/legend/escenarios_3_3.png" /> Institución educativa<br />\
    <img src="styles/legend/escenarios_3_4.png" /> Predio privado<br />\
    <img src="styles/legend/escenarios_3_5.png" /> Vías<br />\
    <img src="styles/legend/escenarios_3_6.png" /> <br />'
        });
var group_Escenarios = new ol.layer.Group({
                                layers: [lyr_escenarios_3,],
                                fold: "open",
                                title: "Escenarios"});
var group_Residuos = new ol.layer.Group({
                                layers: [lyr_Residuos_2,],
                                fold: "open",
                                title: "Residuos"});
var group_Actores = new ol.layer.Group({
                                layers: [lyr_Actores_1,],
                                fold: "open",
                                title: "Actores"});
var group_base = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: "open",
                                title: "base"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Actores_1.setVisible(true);lyr_Residuos_2.setVisible(true);lyr_escenarios_3.setVisible(true);
var layersList = [group_base,group_Actores,group_Residuos,group_Escenarios];
lyr_Actores_1.set('fieldAliases', {'observacio': 'observacio', 'actores_ti': 'actores_ti', 'num_actor': 'num_actor', 'globalid': 'globalid', 'fecha': 'fecha', 'escenario_': 'escenario_', 'otro_escen': 'otro_escen', 'residuo_ti': 'residuo_ti', 'otro_resid': 'otro_resid', 'otro_actor': 'otro_actor', 'genero': 'genero', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_Residuos_2.set('fieldAliases', {'observacio': 'observacio', 'residuo_ti': 'residuo_ti', 'globalid': 'globalid', 'fecha': 'fecha', 'escenario_': 'escenario_', 'otro_escen': 'otro_escen', 'otro_resid': 'otro_resid', 'actores_ti': 'actores_ti', 'otro_actor': 'otro_actor', 'genero': 'genero', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'num_actor': 'num_actor', });
lyr_escenarios_3.set('fieldAliases', {'observacio': 'observacio', 'escenario_': 'escenario_', 'globalid': 'globalid', 'fecha': 'fecha', 'otro_escen': 'otro_escen', 'residuo_ti': 'residuo_ti', 'otro_resid': 'otro_resid', 'actores_ti': 'actores_ti', 'otro_actor': 'otro_actor', 'genero': 'genero', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'num_actor': 'num_actor', });
lyr_Actores_1.set('fieldImages', {'observacio': 'TextEdit', 'actores_ti': 'TextEdit', 'num_actor': 'TextEdit', 'globalid': 'TextEdit', 'fecha': 'DateTime', 'escenario_': 'TextEdit', 'otro_escen': 'TextEdit', 'residuo_ti': 'TextEdit', 'otro_resid': 'TextEdit', 'otro_actor': 'TextEdit', 'genero': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', });
lyr_Residuos_2.set('fieldImages', {'observacio': 'TextEdit', 'residuo_ti': 'TextEdit', 'globalid': 'TextEdit', 'fecha': 'DateTime', 'escenario_': 'TextEdit', 'otro_escen': 'TextEdit', 'otro_resid': 'TextEdit', 'actores_ti': 'TextEdit', 'otro_actor': 'TextEdit', 'genero': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'num_actor': 'TextEdit', });
lyr_escenarios_3.set('fieldImages', {'observacio': 'TextEdit', 'escenario_': 'TextEdit', 'globalid': 'TextEdit', 'fecha': 'DateTime', 'otro_escen': 'TextEdit', 'residuo_ti': 'TextEdit', 'otro_resid': 'TextEdit', 'actores_ti': 'TextEdit', 'otro_actor': 'TextEdit', 'genero': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'num_actor': 'TextEdit', });
lyr_Actores_1.set('fieldLabels', {'observacio': 'no label', 'actores_ti': 'no label', 'num_actor': 'no label', 'globalid': 'no label', 'fecha': 'no label', 'escenario_': 'no label', 'otro_escen': 'no label', 'residuo_ti': 'no label', 'otro_resid': 'no label', 'otro_actor': 'no label', 'genero': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_Residuos_2.set('fieldLabels', {'observacio': 'no label', 'residuo_ti': 'no label', 'globalid': 'no label', 'fecha': 'no label', 'escenario_': 'no label', 'otro_escen': 'no label', 'otro_resid': 'no label', 'actores_ti': 'no label', 'otro_actor': 'no label', 'genero': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'num_actor': 'no label', });
lyr_escenarios_3.set('fieldLabels', {'observacio': 'no label', 'escenario_': 'no label', 'globalid': 'no label', 'fecha': 'no label', 'otro_escen': 'no label', 'residuo_ti': 'no label', 'otro_resid': 'no label', 'actores_ti': 'no label', 'otro_actor': 'no label', 'genero': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'num_actor': 'no label', });
lyr_escenarios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});