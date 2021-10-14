import { SVGProps } from 'react';

type MyProps = SVGProps<SVGRectElement>;

export default function Cell(props: MyProps) {
  return (
    <rect
      style={{ fill: 'white', stroke: 'black' }}
      x={0}
      y={0}
      width="30"
      height="1em"
      {...props}
    />
  );
}
