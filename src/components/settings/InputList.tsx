import { Group, TextInput, Text } from '@mantine/core';

type InputListProps = {
  isActive: boolean;
  numOfRows: number;
  firstColLabelList: string[];
  setFirstColLabelList: (x: string[]) => void;
};

export default function InputList(props: InputListProps) {
  return (
    <Group direction="column" style={{ alignItems: 'normal' }}>
      <Text>Labels in the first column</Text>
      {[...Array(props.numOfRows)].map((_, rowIdx) => (
        <TextInput
          key={rowIdx}
          placeholder={'Label of row ' + (rowIdx + 1)}
          value={props.firstColLabelList[rowIdx] || ''}
          onChange={(event) => {
            let newArray = [...props.firstColLabelList];
            newArray[rowIdx] = event.currentTarget.value;
            props.setFirstColLabelList(newArray);
          }}
          disabled={!props.isActive}
        />
      ))}
    </Group>
  );
}
