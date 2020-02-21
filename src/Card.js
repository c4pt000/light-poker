import React from "react";

export const RED = "#D30030";
export const BLACK = "#231F20";

// viewBox="-18 -18 36 36"
const paths = {
  D: (
    <>
      <path
        fill={RED}
        d="M.057 16.342S-6.392 8.436-13 0C-6.322-8.456-.059-16.342-.059-16.342S6.393-8.437 13 0C6.322 8.455.057 16.342.057 16.342z"
      />
      <path
        opacity=".1"
        fill="#FFF"
        d="M0-16.27C-.592-15.543-6.72-8.019-13 0-6.322 8.455-.057 16.342-.057 16.342l.057-.07V-16.27z"
      />
      <path
        opacity=".2"
        fill="#FFF"
        d="M-7.001 2.168S-7.856 1.119-8.733 0c.887-1.122 1.717-2.168 1.717-2.168l.015 4.336z"
      />
    </>
  ),
  C: (
    <>
      <path
        fill={BLACK}
        d="M-.92-3.09C-.92.213-3.608 2.9-6.91 2.9S-12.9.213-12.9-3.09s2.688-5.99 5.99-5.99S-.92-6.393-.92-3.09zM-.001 3.098A5.999 5.999 0 015.991 9.09a5.998 5.998 0 01-5.992 5.99 5.997 5.997 0 01-5.99-5.99 5.998 5.998 0 015.99-5.992zM6.91 2.9C3.607 2.9.92.213.92-3.09s2.688-5.99 5.99-5.99 5.99 2.687 5.99 5.99S10.213 2.9 6.91 2.9zM5.436-15.792c-.037.007-3.705.767-4.281 5.072L.573-7.475C.573-7.228.52-7 .129-7h-.258c-.391 0-.444-.228-.444-.475l-.581-3.246c-.576-4.305-4.244-5.065-4.281-5.072l-.065-.012.002-1.195H5.498l.002 1.195-.064.013z"
      />
      <path
        opacity=".06"
        fill="#FFF"
        d="M-5.436-15.792c.037.007 3.705.767 4.281 5.072l.581 3.246c.001.246.054.474.445.474H0v-10h-5.498l-.002 1.195.064.013zM0 15.08a5.997 5.997 0 01-5.991-5.99 5.998 5.998 0 015.99-5.992H0V15.08zM-6.909 2.901a5.997 5.997 0 01-5.991-5.99 5.998 5.998 0 015.99-5.992h.001V2.901zM6.911 2.901A5.997 5.997 0 01.92-3.089a5.998 5.998 0 015.99-5.992h.001V2.901z"
      />
      <path
        fill={BLACK}
        d="M-6-3a1 1 0 00-2 0 1 1 0 002 0zM7.911-3a1 1 0 00-2 0 1 1 0 002 0zM1 9a1 1 0 00-2 0 1 1 0 002 0z"
      />
    </>
  ),
  S: (
    <>
      <path
        fill={BLACK}
        d="M10.135 3.585C5.657 9.282 0 16.404 0 16.404S-5.657 9.282-10.135 3.585C-12.375.733-13.5-1.938-13.5-4.927c0-3.9 3.162-7.063 7.063-7.063 2.512 0 4.597 1.597 5.763 3.495l-.4-2.24c-.59-4.408-4.345-5.137-4.345-5.137l.002-1.049H5.418l.002 1.049s-3.755.729-4.345 5.137l-.4 2.24c1.166-1.898 3.251-3.495 5.763-3.495 3.9 0 7.063 3.162 7.063 7.063-.001 2.989-1.126 5.66-3.366 8.512z"
      />
      <path
        opacity=".06"
        fill="#FFF"
        d="M-10.135 3.585C-12.375.733-13.5-1.938-13.5-4.927c0-3.9 3.162-7.063 7.063-7.063 2.512 0 4.597 1.597 5.763 3.495l-.4-2.24c-.59-4.408-4.345-5.137-4.345-5.137l.002-1.049H0v33.324c0 .001-5.657-7.121-10.135-12.818zM-7.5-6.5a1 1 0 100 2 1 1 0 000-2z"
      />
    </>
  ),
  H: (
    <>
      <path
        fill={RED}
        d="M6.678 14.72C3.446 14.72.895 12.171 0 9.644c-.895 2.527-3.445 5.076-6.678 5.076A7.323 7.323 0 01-14 7.397c0-3.098 1.219-5.829 3.489-8.823C-6.054-7.302 0-14.72 0-14.72S6.054-7.302 10.511-1.427C12.781 1.567 14 4.902 14 8c0 4.045-3.279 6.72-7.322 6.72z"
      />
      <path
        opacity=".1"
        fill="#FFF"
        d="M-6.678 14.72c3.232 0 5.783-2.549 6.678-5.076V-14.72S-6.054-7.302-10.511-1.427C-12.781 1.567-14 4.299-14 7.396a7.323 7.323 0 007.322 7.324z"
      />
      <path opacity=".2" fill="#FFF" d="M-6.5 7.5a1 1 0 10-2 0 1 1 0 002 0z" />
    </>
  )
};

// { rank: "Q", type: "C" }
const Card = ({ rank, type }) => (
  <svg className="card" viewBox="0 0 60 90">
    <rect x="0" y="0" rx="3" ry="3" width="60" height="90" fill="#fff" />
    <path
      opacity="0.06"
      fill={BLACK}
      d="M54,3H30v84h24c1.656,0,3-1.343,3-3V6C57,4.343,55.656,3,54,3z"
    />
    <text
      x="50%"
      textAnchor="middle"
      transform="translate(-20, 15)"
      fontSize="14"
    >
      {rank}
    </text>
    <g transform="translate(10, 23) scale(0.33) rotate(180)">{paths[type]}</g>
    <g transform="translate(30, 51) rotate(180)">{paths[type]}</g>
  </svg>
);

export default Card;