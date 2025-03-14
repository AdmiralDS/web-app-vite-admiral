import { ExampleSection } from '#routes/-helpers/examples';

import FolderSolid from '@admiral-ds/icons/build/documents/FolderSolid.svg?react';
import ErrorTriangleSolid from '@admiral-ds/icons/build/service/ErrorTriangleSolid.svg?react';
import { Link, T, TextButton, Tree, TreeItemProps, TreeNode, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';
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
                  Кастомный заголовок с кнопкой
                </T>
                <TextButton text="Кнопка" />
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
      <TreeNode key={'4'} {...options}>
        <Link
          appearance="secondary"
          dimension="s"
          href=""
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
        >
          Ссылка <ErrorTriangleSolid style={{ width: '20px', marginLeft: '8px' }} />
        </Link>
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
        <TextButton text="Кнопка" />
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

export const TreeCustom = () => {
  return (
    <>
      <ExampleSection text="Дерево без checkbox c заданной кастомной шириной в 500px и расстоянием между строками 8px">
        <StyledTree defaultSelected={'1-1'} defaultModel={demo2_TreeModel} withCheckbox={false} />
      </ExampleSection>
    </>
  );
};
