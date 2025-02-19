import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { columnFlexMixin, ExampleSection } from '../../-helpers/examples';
import {
  SegmentedControl,
  SegmentedControlBadge,
  SegmentedControlItem,
  SegmentedControlProps,
  TooltipHoc,
} from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

const ExampleSectionColumn = styled(ExampleSection)`
  ${columnFlexMixin}
`;

const TooltipedSegmentedControlItem = TooltipHoc(SegmentedControlItem);

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const Template = () => {
  return (
    <>
      <ExampleSectionColumn header="С включенной иконкой слева">
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconStart selected')}
          >
            <SegmentedControlItem name={`first${index}`} value="1" iconStart={<StarSolid />}>
              Button 1
            </SegmentedControlItem>
            <SegmentedControlItem name={`first${index}`} value="2" iconStart={<StarSolid />}>
              Button 2
            </SegmentedControlItem>
            <SegmentedControlItem name={`first${index}`} value="3" iconStart={<StarSolid />}>
              Button 3
            </SegmentedControlItem>
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
      <ExampleSectionColumn header="С включенной иконкой справа">
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconEnd selected')}
          >
            <SegmentedControlItem name={`second${index}`} value="1" iconEnd={<StarSolid />}>
              Button 1
            </SegmentedControlItem>
            <SegmentedControlItem name={`second${index}`} value="2" iconEnd={<StarSolid />}>
              Button 2
            </SegmentedControlItem>
            <SegmentedControlItem name={`second${index}`} value="3" iconEnd={<StarSolid />}>
              Button 3
            </SegmentedControlItem>
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
      <ExampleSectionColumn header="С бейджами">
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with badge selected')}
          >
            <SegmentedControlItem name={`third${index}`} value="1">
              Button
              <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
            </SegmentedControlItem>
            <SegmentedControlItem name={`third${index}`} value="2">
              Button
              <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
            </SegmentedControlItem>
            <SegmentedControlItem name={`third${index}`} value="3">
              Button
              <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
            </SegmentedControlItem>
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
      <ExampleSectionColumn
        header="Icon Only"
        text="При использовании компонента только с иконками, обязательно используйте подсказки"
      >
        {appearanceMap.map((appearance, index) => (
          <SegmentedControl
            appearance={appearance}
            // eslint-disable-next-line no-console
            onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with icon only selected')}
          >
            <TooltipedSegmentedControlItem
              renderContent={() => 'Button1'}
              name={`forth${index}`}
              value="1"
              iconStart={<StarSolid />}
              displayAsSquare
            />
            <TooltipedSegmentedControlItem
              renderContent={() => 'Button2'}
              name={`forth${index}`}
              value="2"
              iconStart={<StarSolid />}
              displayAsSquare
            />
            <TooltipedSegmentedControlItem
              renderContent={() => 'Button3'}
              name={`forth${index}`}
              value="3"
              iconStart={<StarSolid />}
              displayAsSquare
            />
          </SegmentedControl>
        ))}
      </ExampleSectionColumn>
    </>
  );
};

export const Route = createFileRoute('/components/segmentedControl/variants')({
  component: () => <Template />,
  staticData: {
    title: 'SegmentedControl. Варианты',
    description: '',
  },
});
