import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [1.4241, -30.9249, -8],
        center: [18.4241, -33.9249],
        scale: 600
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies
        geography="./map/features.json"
        fill="#2C065D"
        stroke="#08f1a4"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[18.5241, -33.9249]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I am here"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
