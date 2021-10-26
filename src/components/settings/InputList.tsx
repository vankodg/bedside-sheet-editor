import { Group, TextInput } from '@mantine/core';

type InputListProps = {
  numOfRows: number;
  firstColLabelList: string[];
  setFirstColLabelList: (x: string[]) => void;
};

export default function InputList(props: InputListProps) {
  return (
    <Group direction="column">
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <TextInput
          key={rowIdx}
          placeholder={'Label of column ' + (rowIdx + 1)}
          value={props.firstColLabelList[rowIdx] || ''}
          onChange={(event) => {
            let newArray = [...props.firstColLabelList];
            newArray[rowIdx] = event.currentTarget.value;
            props.setFirstColLabelList(newArray);
          }}
        />
      ))}
    </Group>
  );
}
