import Lexer from './Lexer';
// import { exampleCode } from './example-code';

const code = `код РАВНО 5 ПЛЮС 9 ПЛЮС ( 4 МИНУС 6 );
    КОНСОЛЬ код;
    переменная РАВНО код ПЛЮС 3;
    КОНСОЛЬ переменная ПЛЮС код МИНУС 6;`;

const lexer = new Lexer(code);

lexer.lexAnalysis();

console.log(lexer.tokenList);
