import React from "react";

export function User(props: React.SVGProps<SVGSVGElement>) {
  const { width = 240, height = 240, color = "#000000" } = props;
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
    >
      {" "}
      <path d="M5,27c0-5,6.957-4.174,8-6.999V19c-3.778,0-5.914-1.884-5.914-1.884C9.06,15.473,6.326,4.043,13.049,4.043 c0,0,0.907-1.043,2.08-1.043c8.218,0,5.51,12.41,7.635,14.154c0,0-1.968,1.846-5.765,1.846v1.001C18.043,22.826,25,22,25,27H5z" />
    </svg>
  );
}