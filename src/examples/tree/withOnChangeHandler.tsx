import { ExampleSection } from '#routes/-helpers/examples';

import { Tree, TreeItemProps, TreeNode, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => <TreeNode key={'1'} label={'Корневой элемент'} {...options} />,
    id: '1',
    checked: false,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-3'} label={'Первый дочерний элемент'} {...options} />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-2'} label={'Текст  строки, третий уровень компонента 2'} {...options} />
            ),
            id: '2-2',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-3'} label={'Текст  строки, третий уровень компонента 3'} {...options} />
            ),
            id: '2-3',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-4'} label={'Текст  строки, третий уровень компонента 4'} {...options} />
            ),
            id: '2-4',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-5'} label={'Текст  строки с чекбоксом, третий уровень компонента 5'} {...options} />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 1'} key={'1-1'} />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 2'} key={'1-2'} />
        ),
      },
    ],
  },
];

export const TreeWithOnChangeHandler = () => {
  const handleCheckedChange = (ids: Array<string>) => {
    // eslint-disable-next-line no-console
    console.log('Выбранные элементы:', ids.toString());
  };
  const handleExpandedChange = (ids: Array<string>) => {
    // eslint-disable-next-line no-console
    console.log('Развернутые узлы:', ids.toString());
  };

  return (
    <>
      <ExampleSection text="События onExpandedChange и onCheckedChange добавлены для упрощения обработки изменений дерева в контролируемом состоянии">
        <Tree
          defaultModel={demo1_TreeModel}
          onCheckedChange={handleCheckedChange}
          onExpandedChange={handleExpandedChange}
        />
      </ExampleSection>
    </>
  );
};
