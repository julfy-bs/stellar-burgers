# [Проект: Stellar Burgers](<https://github.com/julfy-bs/stellar-burgers>)

***
"Stellar Burgers" - учебный проект сайта для бургер ресторана.

Работа выполнена на курсе [Web+][yandex-practicum-web-plus] от [Yandex Практикум][yandex-practicum-url] в соответствии
со всеми пунктами [стандартов Яндекс.Практикума по оформлению HTML и CSS кода][yandex-styleguide].

## Функционал приложения

- [x] Добавлен детальный просмотр подробностей заказа и информации об ингредиентах в модальном окне.
- [x] Отображается Loader при загрузке данных с сервера.
- [x] Добавляет блокировку кнопки оформить заказ до выбора булки и как минимум одного ингредиента.
- [x] Добавляет блокировку функционала перетаскивания ингредиентов в корзину до выбора булки.

## История версий

- ***Версия 0.3.0***

  - Добавляет redux хранилище в приложение с использованием redux-toolkit.
  - Дорабатывает интерфейс навигации по ингредиентам, добавляя функционал смены вкладки при скролле страницы. Также скроллит страницу до нужного блока при нажатии на вкладку.
  - Реализовывает функционал drag&drop для добавления ингредиентов в корзину и сортировки внутри корзины.
  - Добавляет отправку запроса на сервер при оформлении заказа в корзине.

- ***Версия 0.2.0***

    - Заменяет компоненты приложения с классовых на функциональные.
    - Подключает API.
    - Добавляет Loader.
    - Добавляет функциональные компоненты Modal и ModalOverlay.
    - Добавляет функциональные компоненты содержимого модальных окон: IngredientDetails и OrderDetails.

- ***Версия 0.1.0***

    - Инициализирует приложение с помощью CRA.
    - Устанавливает [библиотеку UI-компонентов][project-ui-library].
    - Организовывает файловую структуру.
    - Добавляет классовые компоненты AppHeader, BurgerIngredients, BurgerConstructor.
    - Добавляет проверку типов данных компонентов с помощью PropTypes.

| Спринт | Версия |                                          Технологии                                          |                 Чеклисты                 |               Макеты               |
|:------:|:------:|:--------------------------------------------------------------------------------------------:|:----------------------------------------:|:----------------------------------:|
|   7    | 0.1.0  |           [HTML5][tech-html], [CSS3][tech-css], [JS][tech-js], [React][tech-react]           | [чеклист 7 спринта][project-checklist-1] | [макет 7 спринта][project-figma-1] |
|   7    | 0.2.0  |           [HTML5][tech-html], [CSS3][tech-css], [JS][tech-js], [React][tech-react]           | [чеклист 7 спринта][project-checklist-1] | [макет 7 спринта][project-figma-1] |
|   8    | 0.3.0  | [JS][tech-js], [React][tech-react], [Redux][tech-redux], [Redux-toolkit][tech-redux-toolkit] | [чеклист 8 спринта][project-checklist-2] | [макет 8 спринта][project-figma-2] |

## Доступные скрипты

### `npm start`

Запускает приложение в режиме разработке на локальном сервере http://localhost:3000.

### `npm test`

Исполняет все написанные файлы тестирования

### `npm run build`

Генерирует оптимизированную сборку проекта в папке `build/`

### `npm run eject`

После запуска команды CRA необратимо копирует все инфраструктурные файлы конфигурации из пакета react-scripts в сам
проект и редактирует package.json файл

## Запустить проект

- Клонировать проект - `git clone git@github.com:julfy-bs/stellar-burgers.git`
- Установить зависимости `npm install`
- Запустить сервер для разработки `npm run start`

&copy; Автор - [Сутужко Богдан][author-github]

[//]: # 'Общие переменные для проектов Yandex'

[yandex-practicum-web-plus]: https://practicum.yandex.ru/promo/long-courses/web

[yandex-practicum-url]: https://practicum.yandex.ru/

[yandex-styleguide]: https://code.s3.yandex.net/web-developer/static/design-rules/index.html

[//]: # 'Общие переменные автора'

[author-github]: https://github.com/julfy-bs

[//]: # 'Переменные приложения'

[project-checklist-1]: https://code.s3.yandex.net/web-plus/checklists/checklist_pdf/checklist_7.pdf
[project-checklist-2]: https://code.s3.yandex.net/web-plus/checklists/checklist_pdf/checklist_8.pdf

[project-figma-1]: https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link?node-id=0%3A1
[project-figma-2]: https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-(3-%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B0)_external_link?type=design&node-id=2973-2131&t=yKnqfxFYJJXliLJ3-0

[project-ui-library]: https://yandex-practicum.github.io/react-developer-burger-ui-components/docs/readme

[//]: # 'Переменные используемых технологий'

[tech-html]: https://html5.org/

[tech-css]: https://www.w3.org/Style/CSS/Overview.en.html

[tech-js]: https://www.javascript.com/

[tech-react]: https://react.dev/

[tech-redux]: https://redux.js.org/

[tech-redux-toolkit]: https://redux-toolkit.js.org/