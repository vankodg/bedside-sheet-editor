import { Button, Checkbox, Col, Grid, NumberInput } from '@mantine/core';
import InputList from './settings/InputList';

type MyProps = {
  numOfRows: number;
  setNumOfRows: (x: number) => void;
  isFirstCol: boolean;
  setIsFirstCol: (x: boolean) => void;
  firstColLabelList: string[];
  setFirstColLabelList: (x: string[]) => void;
  download: () => void;
};

export default function SettingContainer(props: MyProps) {
  return (
    <Grid
      justify="space-between"
      align="flex-start"
      style={{
        height: '50vh',
        overflowY: 'scroll',
        margin: 0,
        marginBottom: 16,
      }}
    >
      <Col span={4}>
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
      </Col>
      <Col span={4}>
        <Checkbox
          mb="xs"
          checked={props.isFirstCol}
          onChange={(event) => props.setIsFirstCol(event.currentTarget.checked)}
          label="First Column?"
        />
        <InputList
          numOfRows={props.numOfRows}
          firstColLabelList={props.firstColLabelList}
          setFirstColLabelList={props.setFirstColLabelList}
        />
      </Col>
      <Col span={2}>
        <Button onClick={() => props.download()}>Download</Button>
      </Col>
    </Grid>
  );
}
