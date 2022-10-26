import {
  Group,
  TextInput,
  Text,
  NumberInput,
  Grid,
  Col,
  ActionIcon,
  Button,
} from '@mantine/core';
import { IconTrash, IconPlus } from '@tabler/icons';
import { GroupLabel } from '../../utils/types';

type GroupLabelListProps = {
  isActive: boolean;
  groupLabelList: GroupLabel[];
  setGroupLabelList: (x: GroupLabel[]) => void;
};

export default function GroupLabelList(props: GroupLabelListProps) {
  var { isActive, groupLabelList, setGroupLabelList } = props;
  return (
    <Group direction="column" style={{ alignItems: 'normal' }}>
      <Text>Group labels of the first column</Text>
      {[...Array(groupLabelList.length)].map((_, rowIdx) => (
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
              disabled={!isActive}
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
              disabled={!isActive}
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
              disabled={!isActive}
            />
          </Col>
          <Col span={1}>
            <ActionIcon
              onClick={() => {
                let newArray: GroupLabel[] = [...groupLabelList];
                newArray.splice(rowIdx, 1);
                setGroupLabelList(newArray);
              }}
              disabled={!isActive}
            >
              <IconTrash />
            </ActionIcon>
          </Col>
        </Grid>
      ))}
      <Button
        leftIcon={<IconPlus size={26} />}
        onClick={() => {
          let newArray: GroupLabel[] = [
            ...groupLabelList,
            { label: '', startRow: 0, endRow: 0 },
          ];
          setGroupLabelList(newArray);
        }}
        disabled={!isActive}
      >
        Add new group label
      </Button>
    </Group>
  );
}
