# ШРИ 2021. Задание 1. Вёрстка.

1. Клонировать репозиторий

    ```
    git clone git@github.com/yuli349/task1.git
    cd shri-2021-task-1-belitskaya
    ```
2. Установить зависимости

     ```
    npm install
    ````
3. Запустить приложение

     ```
    npm start
    ```

Команда `npm run build` запустит сборку.

## Описание
Функция renderTemplate возвращает html-разметку слайда, находится в src/index.js.

Шаблоны слайдов находятся в src/slides и состоят из компонентов (src/components) и хелперов (src/helpers).

## Порядок выполнения
- для создания приложения использовала React App;
- верстала адаптивные шаблоны для каждого слайда, используя измерения vh, vw, vmin, vmax;
- настроила, чтобы приложение открывалось по http://localhost:8080;
- добавила get-параметры, которые отображают номер слайда и тему;
- добавила renderTemplate, которая в зависимости от значения alias возвращает нужный html слайда;
- настроила сборку, используя React scripts;
- объединила все css и js файлы с помощью scripts/combine.js;
- запустила автотесты и правила стили для каждого слайда, некоторые автотесты в темной теме не проходили, пришлось подгонять точечно элементы (из-за этого использование констант sass/constants.scss частично уменьшилось);
- порефакторила код.