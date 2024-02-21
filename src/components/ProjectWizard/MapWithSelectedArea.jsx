import React, { useEffect, useRef, useState } from "react";
import { Box, InputGroup } from "@chakra-ui/react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import GeoJSON from "ol/format/GeoJSON";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";

const MapWithSelectedArea = ({ geojson, width, height }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !geojson) return;

    const geojsonFormat = new GeoJSON();
    const features = geojsonFormat.readFeatures(geojson);
    const vectorSource = new VectorSource({
      features,
      format: new GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:4326",
      }),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 10,
        projection: "EPSG:4326",
      }),
      controls: [],
    });

    const extent = vectorSource.getExtent();

    map.getView().fit(extent, {
      padding: [50, 50, 50, 50],
    });

    return () => {
      map.setTarget(undefined);
    };
  }, [geojson]);

  return (
    <Box borderRadius={"8px"} overflow={"hidden"}>
      <Box ref={mapRef} style={{ width: width, height: height }}></Box>
    </Box>
  );
};

export default MapWithSelectedArea;
