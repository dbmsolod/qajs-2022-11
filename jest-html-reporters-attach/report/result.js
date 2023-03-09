window.jest_html_reporters_callback__({"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":4,"numPassedTests":35,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":4,"numTotalTests":35,"startTime":1678348161738,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":9,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1678348166515,"runtime":4743,"slow":false,"start":1678348161772},"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/api.spec.lesson-8.js","failureMessage":null,"testResults":[{"ancestorTitles":["Авторизация"],"duration":504,"failureMessages":[],"fullName":"Авторизация POST – /Account/v1/User – Создание нового пользователя.","status":"passed","title":"POST – /Account/v1/User – Создание нового пользователя."},{"ancestorTitles":["Авторизация"],"duration":371,"failureMessages":[],"fullName":"Авторизация POST – /Account/v1/Authorized – Авторизация с существующими и верными логином и паролем.","status":"passed","title":"POST – /Account/v1/Authorized – Авторизация с существующими и верными логином и паролем."},{"ancestorTitles":["Авторизация"],"duration":487,"failureMessages":[],"fullName":"Авторизация POST – /Account/v1/GenerateToken – Генерация токена.","status":"passed","title":"POST – /Account/v1/GenerateToken – Генерация токена."},{"ancestorTitles":["Получаем список книг, чтобы взять ISBN."],"duration":340,"failureMessages":[],"fullName":"Получаем список книг, чтобы взять ISBN. Get – /BookStore/v1/Books – Получение списка книг.","status":"passed","title":"Get – /BookStore/v1/Books – Получение списка книг."},{"ancestorTitles":["Создание (привязка) книги к пользователю."],"duration":358,"failureMessages":[],"fullName":"Создание (привязка) книги к пользователю. POST – /BookStore/v1/Books – Создание книги.","status":"passed","title":"POST – /BookStore/v1/Books – Создание книги."},{"ancestorTitles":["Обновление книги"],"duration":394,"failureMessages":[],"fullName":"Обновление книги PUT – /BookStore/v1/Books/{ISBN} – Обновление книги.","status":"passed","title":"PUT – /BookStore/v1/Books/{ISBN} – Обновление книги."},{"ancestorTitles":["Получение информации о книге."],"duration":329,"failureMessages":[],"fullName":"Получение информации о книге. GET – /BookStore/v1/Book?ISBN={ISBN} – Инфо о книге.","status":"passed","title":"GET – /BookStore/v1/Book?ISBN={ISBN} – Инфо о книге."},{"ancestorTitles":["Удаление привязки книги к пользователю."],"duration":393,"failureMessages":[],"fullName":"Удаление привязки книги к пользователю. DELETE – /BookStore/v1/Book – Удаление книги.","status":"passed","title":"DELETE – /BookStore/v1/Book – Удаление книги."},{"ancestorTitles":["Удаление пользователя."],"duration":386,"failureMessages":[],"fullName":"Удаление пользователя. DELETE – /Account/v1/User/{UUID} – Удаление существующего пользователя.","status":"passed","title":"DELETE – /Account/v1/User/{UUID} – Удаление существующего пользователя."}]},{"numFailingTests":0,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1678348168357,"runtime":1814,"slow":false,"start":1678348166543},"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/api.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["API tests"],"duration":385,"failureMessages":[],"fullName":"API tests 1. Создание пользователя c ошибкой, логин уже используется.","status":"passed","title":"1. Создание пользователя c ошибкой, логин уже используется."},{"ancestorTitles":["API tests"],"duration":334,"failureMessages":[],"fullName":"API tests 2. Создание пользователя c ошибкой, пароль не подходит.","status":"passed","title":"2. Создание пользователя c ошибкой, пароль не подходит."},{"ancestorTitles":["API tests"],"duration":340,"failureMessages":[],"fullName":"API tests 3. Создание пользователя успешно.","status":"passed","title":"3. Создание пользователя успешно."},{"ancestorTitles":["API tests"],"duration":236,"failureMessages":[],"fullName":"API tests 4. Генерация токена c ошибкой.","status":"passed","title":"4. Генерация токена c ошибкой."},{"ancestorTitles":["API tests"],"duration":200,"failureMessages":[],"fullName":"API tests 5. Генерация токена успешно.","status":"passed","title":"5. Генерация токена успешно."}]},{"numFailingTests":0,"numPassingTests":15,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1678348168647,"runtime":285,"slow":false,"start":1678348168362},"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/app.spec.js","failureMessage":null,"testResults":[{"ancestorTitles":["app.js coverage"],"duration":2,"failureMessages":[],"fullName":"app.js coverage \"nameIsValid\" является функцией и определена.","status":"passed","title":"\"nameIsValid\" является функцией и определена."},{"ancestorTitles":["app.js coverage"],"duration":0,"failureMessages":[],"fullName":"app.js coverage Слово \"Dmitry\" является именем.","status":"passed","title":"Слово \"Dmitry\" является именем."},{"ancestorTitles":["app.js coverage"],"duration":1,"failureMessages":[],"fullName":"app.js coverage Фраза с пробелом не является именем.","status":"passed","title":"Фраза с пробелом не является именем."},{"ancestorTitles":["app.js coverage"],"duration":0,"failureMessages":[],"fullName":"app.js coverage Имена, состоящие менее чем из двух букв не принимаются.","status":"passed","title":"Имена, состоящие менее чем из двух букв не принимаются."},{"ancestorTitles":["app.js coverage"],"duration":0,"failureMessages":[],"fullName":"app.js coverage \"fullTrim\" является функцией и определена.","status":"passed","title":"\"fullTrim\" является функцией и определена."},{"ancestorTitles":["app.js coverage"],"duration":0,"failureMessages":[],"fullName":"app.js coverage Для фразы с пробелом \"Благо дарю\" возвращается одно слово без пробела \"Благодарю\".","status":"passed","title":"Для фразы с пробелом \"Благо дарю\" возвращается одно слово без пробела \"Благодарю\"."},{"ancestorTitles":["app.js coverage"],"duration":0,"failureMessages":[],"fullName":"app.js coverage Если пробелов несколько, то все они удаляются.","status":"passed","title":"Если пробелов несколько, то все они удаляются."},{"ancestorTitles":["app.js coverage"],"duration":13,"failureMessages":[],"fullName":"app.js coverage Если на вход функции передана НЕ строка, то происходит ошибка.","status":"passed","title":"Если на вход функции передана НЕ строка, то происходит ошибка."},{"ancestorTitles":["app.js coverage"],"duration":1,"failureMessages":[],"fullName":"app.js coverage \"getTotal\" является функцией и определена.","status":"passed","title":"\"getTotal\" является функцией и определена."},{"ancestorTitles":["app.js coverage"],"duration":1,"failureMessages":[],"fullName":"app.js coverage Если на вход функции передано НЕ число, то выдаётся ошибка \"Скидка должна быть числом\".","status":"passed","title":"Если на вход функции передано НЕ число, то выдаётся ошибка \"Скидка должна быть числом\"."},{"ancestorTitles":["app.js coverage"],"duration":1,"failureMessages":[],"fullName":"app.js coverage При отрицательном значении скидки, выдаётся ошибка \"Процент скидки не может быть отрицательным\".","status":"passed","title":"При отрицательном значении скидки, выдаётся ошибка \"Процент скидки не может быть отрицательным\"."},{"ancestorTitles":["Параметризированные тесты для getTotal"],"duration":0,"failureMessages":[],"fullName":"Параметризированные тесты для getTotal 10 * 10 – 10% = 90","status":"passed","title":"10 * 10 – 10% = 90"},{"ancestorTitles":["Параметризированные тесты для getTotal"],"duration":1,"failureMessages":[],"fullName":"Параметризированные тесты для getTotal 10 * 10 – 0% = 100","status":"passed","title":"10 * 10 – 0% = 100"},{"ancestorTitles":["Параметризированные тесты для getTotal"],"duration":0,"failureMessages":[],"fullName":"Параметризированные тесты для getTotal 300 * 1234 – 100% = 0","status":"passed","title":"300 * 1234 – 100% = 0"},{"ancestorTitles":["Параметризированные тесты для getTotal"],"duration":1,"failureMessages":[],"fullName":"Параметризированные тесты для getTotal 99.99 * 1234 – 5% = 117218.27699999999","status":"passed","title":"99.99 * 1234 – 5% = 117218.27699999999"}]},{"numFailingTests":0,"numPassingTests":6,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1678348171423,"runtime":2765,"slow":false,"start":1678348168658},"testFilePath":"/home/runner/work/qajs-2022-11/qajs-2022-11/specs/api.spec.lesson-7.js","failureMessage":null,"testResults":[{"ancestorTitles":["Авторизация."],"duration":428,"failureMessages":[],"fullName":"Авторизация. POST – /Account/v1/User – Создание нового пользователя.","status":"passed","title":"POST – /Account/v1/User – Создание нового пользователя."},{"ancestorTitles":["Авторизация."],"duration":379,"failureMessages":[],"fullName":"Авторизация. POST – /Account/v1/Authorized – Авторизация с существующими и верными логином и паролем.","status":"passed","title":"POST – /Account/v1/Authorized – Авторизация с существующими и верными логином и паролем."},{"ancestorTitles":["Авторизация."],"duration":409,"failureMessages":[],"fullName":"Авторизация. POST – /Account/v1/Authorized – Ошибка авторизация с НЕсуществующими логином и паролем.","status":"passed","title":"POST – /Account/v1/Authorized – Ошибка авторизация с НЕсуществующими логином и паролем."},{"ancestorTitles":["Получение информации о пользователе."],"duration":492,"failureMessages":[],"fullName":"Получение информации о пользователе. POST – /Account/v1/GenerateToken – Генерация токена.","status":"passed","title":"POST – /Account/v1/GenerateToken – Генерация токена."},{"ancestorTitles":["Получение информации о пользователе."],"duration":354,"failureMessages":[],"fullName":"Получение информации о пользователе. GET – /Account/v1/User/{UUID} – Получаем данные существующего пользователя.","status":"passed","title":"GET – /Account/v1/User/{UUID} – Получаем данные существующего пользователя."},{"ancestorTitles":["Удаление пользователя."],"duration":372,"failureMessages":[],"fullName":"Удаление пользователя. DELETE – /Account/v1/User/{UUID} – Удаление существующего пользователя.","status":"passed","title":"DELETE – /Account/v1/User/{UUID} – Удаление существующего пользователя."}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":true,"collectCoverageFrom":["./src/**"],"coverageDirectory":"/home/runner/work/qajs-2022-11/qajs-2022-11/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":1,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/runner/work/qajs-2022-11/qajs-2022-11/node_modules/jest-html-reporters/index.js",{"publicPath":"./jest-html-report","filename":"report.html"}]],"rootDir":"/home/runner/work/qajs-2022-11/qajs-2022-11","runTestsByPath":false,"seed":636066661,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/qajs-2022-11/qajs-2022-11/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"none","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"coverageLinkPath":"../coverage/lcov-report/index.html"},"endTime":1678348171428,"_reporterOptions":{"publicPath":"./jest-html-report","filename":"report.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})