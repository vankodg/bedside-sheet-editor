import { SVGProps } from 'react';

type MyProps = {
  label?: string;
  isLabelCentered?: boolean;
  transform?: string;
} & SVGProps<SVGRectElement>;

export default function Cell(props: MyProps) {
  var { label, isLabelCentered, transform, ...svgProps } = props;
  return (
    <g transform={transform ? transform : ''}>
      <rect style={{ fill: 'white', stroke: 'black' }} {...svgProps} />
      {props.label && !props.isLabelCentered && (
        <text
          x={props.x}
          y={props.y}
          dx={Number(props.width) * 0.05}
          dy={Number(props.height) * 0.85}
          style={{
            font: 'normal ' + Number(props.height) * 0.8 + 'px sans-serif',
          }}
        >
          {props.label}
        </text>
      )}
      {props.label && props.isLabelCentered && (
        <text
          x={Number(props.x) + (props.width ? Number(props.width) / 2 : 15)}
          y={Number(props.y) + (props.height ? Number(props.height) / 2 : 8)}
          dominantBaseline={'central'}
          textAnchor={'middle'}
          style={{
            font: 'normal ' + Number(props.height) * 0.8 + 'px sans-serif',
          }}
        >
          {props.label}
        </text>
      )}
    </g>
  );
}
