**conditional-piping**

# About
Pipe and compose with conditional stop and loop.

# Get started
```
  import {cPipe, dPipe, wPipe, cCompose} from "conditional-piping";

  const inc = n => ++n;
  const dec = n => --n;
  const double = n => n * 2;
  let breakConditionFn = res=>4===res;

  // Run through piped functions till end or breakCondition
  let piped = cPipe(breakConditionFn)(inc,double,dec);
  expect(piped(1)).to.equal(4); // breaked

  // Run through composed functions till end or breakCondition
  piped = cCompose(breakConditionFn)(dec, double, inc);
  expect(piped(1)).to.equal(4); // breaked


  // Loop cPipe till breakCondition
  piped = dPipe(res=>10 < res)(inc,double);
  expect(piped(1)).to.equal(11); // breaked

  // While not breakCondition loop cPipe
  piped = wPipe(res=>10 < res)(inc,double);
  expect(piped(1)).to.equal(11); // breaked
```

# Run & Test
`npm run build` - для создания сброки, которая потом может быть экспортирована

`npm run __tests__-m` или `npm run __tests__-m:devtool` для возможности дебага в chrome devtool (сразу запускает хром-девтул)

`npm run bench-c` или `npm run bench-d` - запуск тестов производительности для вариантов функций

# Todos
1. Возможно, стоит сделать ещё необязательный параметр - функция для оценки того, нужно ли перейти на начало pipe. По аналогии со словами break и continue оно должно называться continueCondition
2. Возможно, в breakCondition() и continueCondition() нужно вторым параметром передавать промежуточный state до выполнения текущей функции в pipe и третьим параметром - входной стейт всей функции pipe
3. Посмотреть скорость работы без ...args (cPipe(arr)) и без cPipe()(), а с cPipe(arr, brCond, conCond)