module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // var는 사용할 수 없다
    'no-var': ['error'],
    // 줄바꿈은 유닉스 스타일로 통일하겠다
    'linebreak-style': ['error', 'unix'],
    // 세미콜론은 사용하지 않겠다(타입스크립트 프로젝트에서 권장)
    semi: ['error', 'never'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // if 문에서 return을 하면 else 문에서 return을 할 수 없다
    // 'no-else-return': ['error'],
    // 불필요한 반복문은 사용할 수 없다
    'no-unreachable-loop': ['error'],
    // 도달하지 못하는 코드는 사용할 수 없다
    'no-unreachable': ['error'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],
    // if ~ else 중첩은 허용하지 않는다
    // 'max-depth': [
    //   'error',
    //   {
    //     max: 1
    //   }
    // ],
    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    // 삼항연산자를 허용하지 않는다
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],

    // 중첩된 object 앞뒤에는 공백이 있어야 한다.
    'object-curly-spacing': ['error', 'always'],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    'array-bracket-spacing': ['error', 'never'],
    // 중괄호의 스타일을 통일
    'brace-style': ['error'],
    // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
    curly: ['error', 'multi-line', 'consistent'],

    // no-alert 룰과 충돌하므로 끔
    'no-restricted-globals': ['off'],
    // alert, confirm, prompt 는 사용을 권장하지 않는다
    'no-alert': ['warn'],
    // console.log 는 사용할 수 없다
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ]
  }
}
