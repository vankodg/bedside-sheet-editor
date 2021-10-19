import { Group, TextInput } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

export type handlerType = {
  setState: Dispatch<SetStateAction<string[]>>;
  append: (...items: string[]) => void;
  prepend: (...items: string[]) => void;
  insert: (index: number, ...items: string[]) => void;
  apply: (fn: (item: string, index?: number) => string) => void;
  remove: (...indices: number[]) => void;
  reorder: ({ from, to }: { from: number; to: number }) => void;
  setItem: (index: number, item: string) => void;
  setItemProp: <K extends keyof string, U extends string[K]>(
    index: number,
    prop: K,
    value: U,
  ) => void;
};

type InputListProps = {
  numOfRows: number;
  firstColLabelList: string[];
  handlerFirstColLabelList: handlerType;
};

export default function InputList(props: InputListProps) {
  return (
    <Group direction="column">
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <TextInput
          key={rowIdx}
          placeholder={'Label of column ' + (rowIdx + 1)}
          value={props.firstColLabelList[rowIdx] || ''}
          onChange={(event) =>
            props.handlerFirstColLabelList.setItem(
              rowIdx,
              event.currentTarget.value,
            )
          }
        />
      ))}
    </Group>
  );
}
