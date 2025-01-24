import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';

import FolderSolid from '@admiral-ds/icons/build/documents/FolderSolid.svg?react';
import { T, Tree, TreeItemProps, TreeNode, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';

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
              <TreeNode key={'1-1-2'} icon={FolderSolid} label={'Третий уровень 2'} {...options} />
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} label={'Первый уровень 2'} {...options} />
    ),
    id: '4',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'5'} icon={FolderSolid} label={'Первый уровень с пустым массивом children'} {...options} />
    ),
    children: [],
    id: '5',
  },
];

export const Template = () => {
  return (
    <>
      <ExampleSection>
        <Tree defaultSelected={'1-1'} defaultModel={demo2_TreeModel} withCheckbox={false} />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/tree/uncontrolled')({
  component: () => <Template />,
  staticData: {
    title: 'Tree. Неконтролируемое дерево',
  },
});
