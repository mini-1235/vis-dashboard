import React from "react";
import { FrontBar } from "./Bar";
import { Arrow } from "./Arrow";
// import { scaleLinear } from 'd3-scale';
import * as d3 from "d3";
export function Rank({ A, B, x, y,full,data }) {
  const total = full
  const width = 200;
  const barHeight = 5;
  // const data = Math.floor(Math.random() * total + 1);
  const xScale = d3.scaleLinear().domain([0, total]).range([0, width]);
  console.log(data)
  return (
    <svg>
      <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="-5" width={total} height="35" stroke="grey" stroke-width="2" fill="none" />
        <text x="3" y="10">
          {A}
        </text>
        <Arrow x1={25} x2={50} y1={-30} y2={-30}></Arrow>
        <text x="70" y="10">
          {B}
        </text>
        <FrontBar
          {...{
            xScale,
            barHeight,
            data,
            y,
          }}
        ></FrontBar>
      </g>
    </svg>
  );
}
