import { Button, Checkbox, Col, Grid, NumberInput, Group } from '@mantine/core';
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
  downloadPng: () => void;
  downloadConfig: () => void;
};

export default function SettingContainer(props: MyProps) {
  return (
    <Group>
      <Grid
        justify="space-between"
        align="flex-start"
        style={{
          height: '50vh',
          width: 'calc(100% - 180px)',
          overflowY: 'scroll',
          margin: 0,
          marginBottom: 16,
        }}
      >
        <Col span={5}>
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
        <Col span={5}>
          <Checkbox
            mb="xs"
            checked={props.isFirstCol}
            onChange={(event) =>
              props.setIsFirstCol(event.currentTarget.checked)
            }
            label="First column"
          />
          <InputList
            isActive={props.isFirstCol}
            numOfRows={props.numOfRows}
            firstColLabelList={props.firstColLabelList}
            setFirstColLabelList={props.setFirstColLabelList}
          />
        </Col>
        <Col span={2}></Col>
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
