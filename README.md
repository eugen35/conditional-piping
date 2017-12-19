**conditional-piping**

# About
Pipe and compose with conditional stop and loop.

## Run & Test
`npm start`

mocha tests: `npm run test-m` или `npm run test-m:devtool` для возможности дебага в chrome devtool (сразу запускает хром-девтул)

Также более длинный вариант дебага тестов в chrome devtool: `npm run test-m:debug`.
После запуска скрипта, обеспечивающего возможность дебага в хром девтулс нужно:
Зайти в chrome, в адресной строке вбить chrome://inspect/ и кликнуть Open Dedicated DevTools for Node link => Developer Tools will be opened; и нажать кнопку Resume.

# Todos
1. Возможно, стоит сделать ещё необязательный параметр - функция для оценки того, нужно ли перейти на начало pipe. По аналогии со словами break и continue оно должно называться continueCondition