import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, MenuItem } from '@admiral-ds/react-ui';
import type { SelectProps, RenderOptionProps } from '@admiral-ds/react-ui';
import React, { ChangeEvent } from 'react';

import styled from 'styled-components';

const InvisibleItem = styled(MenuItem)`
  height: 1px;
  padding: 0;
`;

interface LastOptionProps extends RenderOptionProps {
  onVisible?: () => void;
}

const LastOption = ({ containerRef, onVisible, ...props }: LastOptionProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }
    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef?.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [containerRef, visible]);

  return <InvisibleItem ref={ref} {...props} />;
};

export const Template = ({ placeholder = 'Серийный номер', ...props }: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string>('');
  const [count, setCount] = React.useState<number>(8);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const renderOptions = React.useMemo(() => {
    const array = Array.from({ length: count }, (_, k) => {
      return `${k}0000`;
    }).map((item, index) => (
      <Option value={item} key={`${index}/${count}`}>
        {item}
      </Option>
    ));
    array.push(
      <Option
        key={`last/${count}`}
        value={''}
        renderOption={(options) => <LastOption {...options} onVisible={() => setCount(count + 5)} key={`last`} />}
      />,
    );

    return array;
  }, [count]);

  return (
    <>
      <ExampleSection text="Последним элементом списка опций select добавляется скрытый MenuItem, который отслеживает прокрутку списка до конца, и сообщает об этом вызывающему коду. По этому событию происходит изменение списка опций">
        <Select
          {...props}
          id="props_id"
          mode="searchSelect"
          placeholder={placeholder}
          value={selectValue}
          onChange={onChange}
          dropContainerClassName="dropContainerClass"
        >
          {renderOptions}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/progressiveRenderOptionsScroll')({
  component: () => <Template />,
  staticData: {
    title: 'Подгрузка данных при scroll',
  },
});
