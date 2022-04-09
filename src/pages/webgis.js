import React from "react";
import {
  MapContainer,
  LayersControl,
  TileLayer,
  GeoJSON,
  FeatureGroup,
} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css"
import styled from "styled-components";
import { GatsbySeo } from "gatsby-plugin-next-seo";

import pTowers from "../../geojson/ptowers.json";
import Layout from "../templates/Layout";

const webgis = () => {
  const position = [32.42074, 53.68302];
  const createPopups = (feature = {}, layer) => {
    const { properties = {} } = feature;
    const { fid } = properties;
    const popup = L.popup();
    const html = `
      <div class="popup-container">
      <p> Id: ${fid.toString()}</p>
      </div>
      `;
    popup.setContent(html);
    layer.bindPopup(popup);
  };
  return (
    <>
      <Layout>
        <GatsbySeo
          title="Borj-e Kabotar | WebGIS"
          description="The WebGIS of Borj-e Kabotar"
          canonical="https://www.borjekabotar.com/webgis/"
        />

        <Wrapper>
          <div>
            <MapContainer
              center={position}
              zoom={6}
              style={{ height: "100%", width: "100%", position: "absolute" }}
            >
              <LayersControl position="topright">
                {/* <LayersControl.BaseLayer checked name="OpenStreetMap.Mapik">
                  <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer> */}
                <LayersControl.BaseLayer checked name="Esri WorldImagery">
                  <TileLayer
                    attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              <FeatureGroup>
                <MarkerClusterGroup
                >
                  <GeoJSON
                    data={pTowers}
                    onEachFeature={createPopups}
                  ></GeoJSON>
                </MarkerClusterGroup>
              </FeatureGroup>
            </MapContainer>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.section`
  .leaflet-top {
    top: 50%;
    position: absolute;
    z-index: 1000;
    pointer-events: none;
    transform: translate(0%, -50%);
  }
`;

export default webgis;
