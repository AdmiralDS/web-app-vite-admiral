import { ExampleSection } from '#routes/-helpers/examples';

import FolderSolid from '@admiral-ds/icons/build/documents/FolderSolid.svg?react';
import { Tree, TreeItemProps, TreeNode, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';
import { useState } from 'react';

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => <TreeNode key={'1'} label={'Первый уровень 1'} {...options} />,
    id: '1',
    expanded: true,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-1'} icon={FolderSolid} label={'Второй уровень 1'} {...options} />
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

export const TreeVariants = () => {
  const [dataList, setDataList] = useState<TreeItemProps[]>(demo2_TreeModel);

  const handleChange = (dataList: TreeItemProps[]) => {
    setDataList(dataList);
  };
  return (
    <>
      <ExampleSection text="Без чекбоксов">
        <Tree withCheckbox={false} model={dataList} />
      </ExampleSection>
      <ExampleSection text="С чекбоксами">
        <Tree model={dataList} onChange={handleChange} />
      </ExampleSection>
    </>
  );
};
