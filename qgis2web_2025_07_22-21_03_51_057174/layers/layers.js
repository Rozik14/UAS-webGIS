var wms_layers = [];

var format_batasjkt48s_0 = new ol.format.GeoJSON();
var features_batasjkt48s_0 = format_batasjkt48s_0.readFeatures(json_batasjkt48s_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasjkt48s_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasjkt48s_0.addFeatures(features_batasjkt48s_0);
var lyr_batasjkt48s_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasjkt48s_0, 
                style: style_batasjkt48s_0,
                popuplayertitle: 'batas jkt48s',
                interactive: true,
                title: '<img src="styles/legend/batasjkt48s_0.png" /> batas jkt48s'
            });
var format_areabanjir48s_1 = new ol.format.GeoJSON();
var features_areabanjir48s_1 = format_areabanjir48s_1.readFeatures(json_areabanjir48s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areabanjir48s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areabanjir48s_1.addFeatures(features_areabanjir48s_1);
var lyr_areabanjir48s_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areabanjir48s_1, 
                style: style_areabanjir48s_1,
                popuplayertitle: 'area banjir48s',
                interactive: true,
                title: '<img src="styles/legend/areabanjir48s_1.png" /> area banjir48s'
            });
var format_AreaAmanBanjir_2 = new ol.format.GeoJSON();
var features_AreaAmanBanjir_2 = format_AreaAmanBanjir_2.readFeatures(json_AreaAmanBanjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaAmanBanjir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaAmanBanjir_2.addFeatures(features_AreaAmanBanjir_2);
var lyr_AreaAmanBanjir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaAmanBanjir_2, 
                style: style_AreaAmanBanjir_2,
                popuplayertitle: 'Area Aman Banjir',
                interactive: true,
                title: '<img src="styles/legend/AreaAmanBanjir_2.png" /> Area Aman Banjir'
            });
var format_buffersungai100m_3 = new ol.format.GeoJSON();
var features_buffersungai100m_3 = format_buffersungai100m_3.readFeatures(json_buffersungai100m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffersungai100m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffersungai100m_3.addFeatures(features_buffersungai100m_3);
var lyr_buffersungai100m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffersungai100m_3, 
                style: style_buffersungai100m_3,
                popuplayertitle: 'buffer sungai 100m',
                interactive: true,
                title: '<img src="styles/legend/buffersungai100m_3.png" /> buffer sungai 100m'
            });
var format_buffersungai200m_4 = new ol.format.GeoJSON();
var features_buffersungai200m_4 = format_buffersungai200m_4.readFeatures(json_buffersungai200m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffersungai200m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffersungai200m_4.addFeatures(features_buffersungai200m_4);
var lyr_buffersungai200m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffersungai200m_4, 
                style: style_buffersungai200m_4,
                popuplayertitle: 'buffer sungai 200m',
                interactive: true,
                title: '<img src="styles/legend/buffersungai200m_4.png" /> buffer sungai 200m'
            });
var format_sungaigabungan48s_5 = new ol.format.GeoJSON();
var features_sungaigabungan48s_5 = format_sungaigabungan48s_5.readFeatures(json_sungaigabungan48s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaigabungan48s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaigabungan48s_5.addFeatures(features_sungaigabungan48s_5);
var lyr_sungaigabungan48s_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaigabungan48s_5, 
                style: style_sungaigabungan48s_5,
                popuplayertitle: 'sungai gabungan48s',
                interactive: true,
                title: '<img src="styles/legend/sungaigabungan48s_5.png" /> sungai gabungan48s'
            });
var format_SekolahResikoBanjirRendah_6 = new ol.format.GeoJSON();
var features_SekolahResikoBanjirRendah_6 = format_SekolahResikoBanjirRendah_6.readFeatures(json_SekolahResikoBanjirRendah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahResikoBanjirRendah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahResikoBanjirRendah_6.addFeatures(features_SekolahResikoBanjirRendah_6);
var lyr_SekolahResikoBanjirRendah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahResikoBanjirRendah_6, 
                style: style_SekolahResikoBanjirRendah_6,
                popuplayertitle: 'Sekolah Resiko Banjir Rendah',
                interactive: true,
                title: '<img src="styles/legend/SekolahResikoBanjirRendah_6.png" /> Sekolah Resiko Banjir Rendah'
            });
var format_SekolahAmanBanjir_7 = new ol.format.GeoJSON();
var features_SekolahAmanBanjir_7 = format_SekolahAmanBanjir_7.readFeatures(json_SekolahAmanBanjir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahAmanBanjir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahAmanBanjir_7.addFeatures(features_SekolahAmanBanjir_7);
var lyr_SekolahAmanBanjir_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahAmanBanjir_7, 
                style: style_SekolahAmanBanjir_7,
                popuplayertitle: 'Sekolah Aman Banjir',
                interactive: true,
                title: '<img src="styles/legend/SekolahAmanBanjir_7.png" /> Sekolah Aman Banjir'
            });
var format_SekolahResikoBanjirSedang_8 = new ol.format.GeoJSON();
var features_SekolahResikoBanjirSedang_8 = format_SekolahResikoBanjirSedang_8.readFeatures(json_SekolahResikoBanjirSedang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahResikoBanjirSedang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahResikoBanjirSedang_8.addFeatures(features_SekolahResikoBanjirSedang_8);
var lyr_SekolahResikoBanjirSedang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahResikoBanjirSedang_8, 
                style: style_SekolahResikoBanjirSedang_8,
                popuplayertitle: 'Sekolah Resiko Banjir Sedang',
                interactive: true,
                title: '<img src="styles/legend/SekolahResikoBanjirSedang_8.png" /> Sekolah Resiko Banjir Sedang'
            });
var format_SekolahResikoBanjirTinggi_9 = new ol.format.GeoJSON();
var features_SekolahResikoBanjirTinggi_9 = format_SekolahResikoBanjirTinggi_9.readFeatures(json_SekolahResikoBanjirTinggi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahResikoBanjirTinggi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahResikoBanjirTinggi_9.addFeatures(features_SekolahResikoBanjirTinggi_9);
var lyr_SekolahResikoBanjirTinggi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahResikoBanjirTinggi_9, 
                style: style_SekolahResikoBanjirTinggi_9,
                popuplayertitle: 'Sekolah Resiko Banjir Tinggi',
                interactive: true,
                title: '<img src="styles/legend/SekolahResikoBanjirTinggi_9.png" /> Sekolah Resiko Banjir Tinggi'
            });
var format_sekolahjakarta_10 = new ol.format.GeoJSON();
var features_sekolahjakarta_10 = format_sekolahjakarta_10.readFeatures(json_sekolahjakarta_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolahjakarta_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolahjakarta_10.addFeatures(features_sekolahjakarta_10);
var lyr_sekolahjakarta_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolahjakarta_10, 
                style: style_sekolahjakarta_10,
                popuplayertitle: 'sekolah jakarta',
                interactive: true,
                title: '<img src="styles/legend/sekolahjakarta_10.png" /> sekolah jakarta'
            });

lyr_batasjkt48s_0.setVisible(true);lyr_areabanjir48s_1.setVisible(true);lyr_AreaAmanBanjir_2.setVisible(true);lyr_buffersungai100m_3.setVisible(true);lyr_buffersungai200m_4.setVisible(true);lyr_sungaigabungan48s_5.setVisible(true);lyr_SekolahResikoBanjirRendah_6.setVisible(true);lyr_SekolahAmanBanjir_7.setVisible(true);lyr_SekolahResikoBanjirSedang_8.setVisible(true);lyr_SekolahResikoBanjirTinggi_9.setVisible(true);lyr_sekolahjakarta_10.setVisible(true);
var layersList = [lyr_batasjkt48s_0,lyr_areabanjir48s_1,lyr_AreaAmanBanjir_2,lyr_buffersungai100m_3,lyr_buffersungai200m_4,lyr_sungaigabungan48s_5,lyr_SekolahResikoBanjirRendah_6,lyr_SekolahAmanBanjir_7,lyr_SekolahResikoBanjirSedang_8,lyr_SekolahResikoBanjirTinggi_9,lyr_sekolahjakarta_10];
lyr_batasjkt48s_0.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_areabanjir48s_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_AreaAmanBanjir_2.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_buffersungai100m_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_buffersungai200m_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_sungaigabungan48s_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SekolahResikoBanjirRendah_6.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SekolahAmanBanjir_7.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_SekolahResikoBanjirSedang_8.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SekolahResikoBanjirTinggi_9.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', 'fid': 'fid', 'DN': 'DN', });
lyr_sekolahjakarta_10.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_batasjkt48s_0.set('fieldImages', {'KAB_NAME': '', });
lyr_areabanjir48s_1.set('fieldImages', {'fid': '', 'DN': '', });
lyr_AreaAmanBanjir_2.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_buffersungai100m_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_buffersungai200m_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_sungaigabungan48s_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_SekolahResikoBanjirRendah_6.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SekolahAmanBanjir_7.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', });
lyr_SekolahResikoBanjirSedang_8.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SekolahResikoBanjirTinggi_9.set('fieldImages', {'addr_full': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'type_id': 'TextEdit', 'name_id': 'TextEdit', 'operator': 'TextEdit', 'SDT': 'TextEdit', 'SDN': 'TextEdit', 'Alamat': 'TextEdit', 'KAB_NAME': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_sekolahjakarta_10.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', });
lyr_batasjkt48s_0.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_areabanjir48s_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_AreaAmanBanjir_2.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_buffersungai100m_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_buffersungai200m_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_sungaigabungan48s_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SekolahResikoBanjirRendah_6.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SekolahAmanBanjir_7.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SekolahResikoBanjirSedang_8.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SekolahResikoBanjirTinggi_9.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', 'fid': 'no label', 'DN': 'no label', });
lyr_sekolahjakarta_10.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_sekolahjakarta_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});