# Демо-сайт [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/AdmiralDS/web-app-vite-admiral?file=src%2FApp.tsx)

Демо-сайт - приложение для демонстрации примеров использования компонентов библиотеки @admiral-ds/react-ui

# Template [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/AdmiralDS/web-app-vite-admiral/tree/template?file=src%2FApp.tsx)

Темплейт приложения web с подключенной библиотекой @admiral-ds/react-ui

# Template + styled-components v5 [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/AdmiralDS/web-app-vite-admiral/tree/styled-components-v5?file=src%2FApp.tsx)

Темплейт приложения web с подключенной библиотекой @admiral-ds/react-ui и библиотекой styled-components v5

Инструкция по добавлению нового примера для компонента:

1. Перейдите в src/examples/components/{название компонента} и создайте файл с названием, отражающим смысл создаваемого примера. Используйте синтаксис camelCase. В файле создайте новый пример и экспортируйте его в виде отдельного компонента.

Н-р: в src/examples/components/accordion создаётся файл accordionDimension.tsx, из которого экспортируется компонент AccordionDimension с соответствующим примером.

2. Перейдите в src/routes/components/{название компонента} и создайте файл с тем же названием, что был создан в 1-м пункте. При создании файла автоматически будет сгенерирован его контент, и обновлен файл routeTree.gen.ts. В файле будет создан компонент Route, где в свойстве component нужно будет указать компонент с примером, а в свойстве staticData указать название (title) и описание (description) примера.

Н-р: component: () => <AccordionDimension />, staticData: { title: 'Accordion. Размеры', description: 'Два размера: 56 и 40 px.'}

3. В файле src/examples/components.json найдите описание необходимого компонента и добавьте информацию о новом примере (name и path) по аналогии с уже имеющимися данными. Параметр path автоматически генерируется в компоненте Route во 2-м пункте.
