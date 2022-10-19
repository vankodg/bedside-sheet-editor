import {
  Button,
  Checkbox,
  Col,
  Grid,
  NumberInput,
  Group,
  Tooltip,
} from '@mantine/core';
import GroupLabelList from './settings/GroupLabelList';
import InputList from './settings/InputList';

type MyProps = {
  numOfRows: number;
  setNumOfRows: (x: number) => void;
  isFirstRow: boolean;
  setIsFirstRow: (x: boolean) => void;
  isFirstCol: boolean;
  setIsFirstCol: (x: boolean) => void;
  firstColLabelList: string[];
  setFirstColLabelList: (x: string[]) => void;
  isMidIndex: boolean;
  setIsMidIndex: (x: boolean) => void;
  isEndIndex: boolean;
  setIsEndIndex: (x: boolean) => void;
  downloadPng: () => void;
  downloadConfig: () => void;
};

export default function SettingContainer(props: MyProps) {
  return (
    <Group>
      <Grid
        justify="space-between"
        align="flex-start"
        grow
        style={{
          height: '50vh',
          width: 'calc(100% - 180px)',
          overflowY: 'scroll',
          margin: 0,
          marginBottom: 16,
        }}
      >
        <Col span={3}>
          <NumberInput
            label="Number of rows"
            id={'numOfRows'}
            min={0}
            max={100} /* just to be safe */
            type={'number'}
            value={props.numOfRows}
            onChange={(value) => {
              if (Number.isInteger(value) && 0 <= value && value <= 100) {
                props.setNumOfRows(value);
              }
            }}
          />
          <Checkbox
            mt="xs"
            mb="md"
            checked={props.isFirstRow}
            onChange={(event) =>
              props.setIsFirstRow(event.currentTarget.checked)
            }
            label="First row with hours"
          />
        </Col>
        <Col span={3}>
          <Checkbox
            mb="xs"
            checked={props.isFirstCol}
            onChange={(event) =>
              props.setIsFirstCol(event.currentTarget.checked)
            }
            label="First column"
          />
          <Tooltip
            label="Shows the first 5 characters of the column label in the middle column"
            color="primary"
            position="right"
            withArrow
            style={{ display: 'flex' }}
          >
            <Checkbox
              mb="xs"
              checked={props.isMidIndex}
              onChange={(event) =>
                props.setIsMidIndex(event.currentTarget.checked)
              }
              label="Mid-row indexes"
            />
          </Tooltip>
          <Tooltip
            label="Shows the first 5 characters of the column label in the last column"
            color="primary"
            position="right"
            withArrow
            style={{ display: 'flex' }}
          >
            <Checkbox
              mb="xs"
              checked={props.isEndIndex}
              onChange={(event) =>
                props.setIsEndIndex(event.currentTarget.checked)
              }
              label="Row-end indexes"
            />
          </Tooltip>
          <InputList
            isActive={props.isFirstCol}
            numOfRows={props.numOfRows}
            firstColLabelList={props.firstColLabelList}
            setFirstColLabelList={props.setFirstColLabelList}
          />
        </Col>
        <Col span={5}>
          <GroupLabelList isActive={props.isFirstCol} />
        </Col>
      </Grid>
      <Group direction="column" position="center">
        <Button onClick={() => props.downloadPng()}>Download PNG</Button>
        <Button
          onClick={(event: any): void => {
            event.preventDefault();
            props.downloadConfig();
          }}
        >
          Download config
        </Button>
      </Group>
    </Group>
  );
}
