import { Group, TextInput, Text, NumberInput, Grid, Col } from '@mantine/core';
import { useLocalStorage } from '../../utils/myHooks';

type GroupLabelListProps = {
  isActive: boolean;
};
type GroupLabel = {
  label: string;
  startRow: number;
  endRow: number;
};

export default function GroupLabelList(props: GroupLabelListProps) {
  const [numOfGroupLabels, setNumOfGroupLabels] = useLocalStorage(
    'numOfGroupLabels',
    2,
  );
  const [groupLabelList, setGroupLabelList] = useLocalStorage<GroupLabel[]>(
    'groupLabelList',
    [
      { label: '', startRow: 1, endRow: 3 },
      { label: '', startRow: 4, endRow: 6 },
    ],
  );
  return (
    <Group direction="column" style={{ alignItems: 'normal' }}>
      <Text>Group labels of the first column</Text>
      {[...Array(numOfGroupLabels)].map((_, rowIdx) => (
        <Grid key={rowIdx} grow>
          <Col span={6}>
            <TextInput
              placeholder={'Label of group ' + (rowIdx + 1)}
              value={groupLabelList[rowIdx].label || ''}
              onChange={(event) => {
                let newArray: GroupLabel[] = [...groupLabelList];
                newArray[rowIdx].label = event.currentTarget.value;
                setGroupLabelList(newArray);
              }}
              disabled={!props.isActive}
            />
          </Col>
          <Col span={2}>
            <NumberInput
              value={groupLabelList[rowIdx].startRow}
              onChange={(value) => {
                let newArray: GroupLabel[] = [...groupLabelList];
                newArray[rowIdx].startRow = value;
                setGroupLabelList(newArray);
              }}
              hideControls
              disabled={!props.isActive}
            />
          </Col>
          <Col span={2}>
            <NumberInput
              value={groupLabelList[rowIdx].endRow}
              onChange={(value) => {
                let newArray: GroupLabel[] = [...groupLabelList];
                newArray[rowIdx].endRow = value;
                setGroupLabelList(newArray);
              }}
              hideControls
              disabled={!props.isActive}
            />
          </Col>
        </Grid>
      ))}
    </Group>
  );
}
