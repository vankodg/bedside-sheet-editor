import { SVGProps } from 'react';

type MyProps = { label?: string } & SVGProps<SVGRectElement>;

export default function Cell(props: MyProps) {
  return (
    <>
      <rect
        style={{ fill: 'white', stroke: 'black' }}
        x={0}
        y={0}
        width="30"
        height="1em"
        {...props}
      />
      {props.label && (
        <text
          x={props.x}
          y={props.y}
          dx={Number(props.width) * 0.1}
          dy={Number(props.height) * 0.9}
          style={{
            font: 'normal ' + Number(props.height) * 0.8 + 'px sans-serif',
          }}
        >
          {props.label}
        </text>
      )}
    </>
  );
}
