import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';

import FolderSolid from '@admiral-ds/icons/build/documents/FolderSolid.svg?react';
import ErrorTriangleSolid from '@admiral-ds/icons/build/service/ErrorTriangleSolid.svg?react';
import { Button, T, Tree, TreeItemProps, TreeNode, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const handleNodeClick = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(`clicked ${id}`);
};

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        key={'1'}
        {...options}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          options.onClick?.(e);
          handleNodeClick('1');
        }}
      >
        <T as="div" style={{ paddingTop: 2 }} font="Subtitle/Subtitle 2">
          Элемент дерева с кастомным заголовком
        </T>
      </TreeNode>
    ),
    id: '1',
    expanded: true,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode
            key={'1-1'}
            icon={FolderSolid}
            label={'Второй уровень 1'}
            {...options}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              options.onClick?.(e);
              handleNodeClick('1-1');
            }}
          />
        ),
        id: '1-1',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-1'} icon={FolderSolid} label={'Третий уровень 1'} {...options} />
            ),
            id: '1-1-1',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <div style={{ paddingLeft: '138px' }}>
                <T font="Subtitle/Subtitle 2" as="div" key={'1-1-2'} {...options}>
                  Кастомный элемент с кнопкой
                </T>
                <Button appearance="success">Кнопка</Button>
              </div>
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} {...options}>
        Кастомный заголовок с иконкой <ErrorTriangleSolid style={{ width: '20px', marginLeft: '8px' }} />
      </TreeNode>
    ),
    id: '4',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <>
        <T font="Subtitle/Subtitle 2" as="div" key={'5'} {...options}>
          Кастомный элемент с кнопкой
        </T>
        <Button>Кнопка</Button>
      </>
    ),
    children: [],
    id: '5',
  },
];

const StyledTree = styled(Tree)`
  width: 500px;
  gap: 8px;
`;

export const Template = () => {
  return (
    <>
      <ExampleSection text="Дерево без checkbox c заданной кастомной шириной в 500px и расстоянием между строками 8px">
        <StyledTree defaultSelected={'1-1'} defaultModel={demo2_TreeModel} withCheckbox={false} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tree/custom')({
  component: () => <Template />,
  staticData: {
    title: 'Tree. Кастом',
  },
});
