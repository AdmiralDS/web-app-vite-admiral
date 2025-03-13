import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { DropMenu, MenuItem, Pill, refSetter, RenderOptionProps } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import HeartOutline from '@admiral-ds/icons/build/category/HeartOutline.svg?react';
import AlertOutline from '@admiral-ds/icons/build/category/AlertOutline.svg?react';
import BonusOutline from '@admiral-ds/icons/build/category/BonusOutline.svg?react';
import BurnSolid from '@admiral-ds/icons/build/category/BurnSolid.svg?react';
import { forwardRef, useMemo, useState } from 'react';

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = css<{ $status?: Status }>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'Error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'Success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'Special':
        return `var(--admiral-color-Purple_Purple60Main, ${theme.color['Purple/Purple 60 Main']})`;
      case 'Warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'Attention':
        return `var(--admiral-color-Attention_Attention50Main, ${theme.color['Attention/Attention 50 Main']})`;
      default:
        return `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`;
    }
  }}
`;

const getFontColorByStatus = css<{ $status?: Status }>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'Attention':
        return `var(--admiral-color-Special_DarkStaticNeutral00, ${theme.color['Special/Dark Static Neutral 00']})`;
      case 'Error':
      case 'Success':
      case 'Special':
      case 'Warning':
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      default:
        return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
    }
  }}
`;

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
`;

const stylesByStatusCssMixin = css<{ $status?: Status }>`
  background-color: ${getBackgroundColorByStatus};
  color: ${getFontColorByStatus};
`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>`
  ${stylesByStatusCssMixin};
  width: fit-content;

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${getFontColorByStatus};
  }
`;

const StyledPillIcon = styled.div<{ $status?: Status }>`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: ${getFontColorByStatus};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${getFontColorByStatus};
    }
  }
`;

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};

interface PillMenuProps {
  options: Array<PillOptionProps>;
}

const PillMenu = forwardRef<HTMLDivElement, PillMenuProps>(({ options, ...props }, ref) => {
  const [selectedPill, setSelectedPill] = useState<PillOptionProps | undefined>(options[0]);

  const model = useMemo(() => {
    return options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [options]);

  return (
    <DropMenu
      items={model}
      dropContainerClassName="dropContainerClass"
      selected={selectedPill?.id}
      onSelectItem={(id) => setSelectedPill(options.find((item) => item.id === id))}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
        return (
          <StatusPill
            {...props}
            ref={refSetter(ref, buttonRef as React.Ref<HTMLDivElement>)}
            $status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon $status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon $status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

const items: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Success',
    icon: <BonusOutline />,
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Error',
    icon: <AlertOutline />,
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Warning',
    icon: <BurnSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
    icon: <HeartOutline />,
  },
  {
    id: '5',
    label: 'Option five',
  },
];

export const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          Компонент может быть с выпадающим меню. Позволяет выбирать различные статусы (цвета) индикатора.
          <br />
          <br />
          Для добавления выпадающего меню к кастомному StatusPill используется компонент DropMenu.
        </>
      }
    >
      <PillMenu options={items} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/pills/menu')({
  component: () => <Template />,
  staticData: {
    title: 'PillMenu. С выпадающим меню',
    description: '',
  },
});
