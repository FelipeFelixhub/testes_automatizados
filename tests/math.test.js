const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
expect(math.soma(2, 3)).toBe(5); 
}); 


test('subtracao 5 - 3 igual a 2', () => { 
expect(math.subtracao(5, 3)).toBe(2); 
}); 

test('divisao 10 / 2 igual a 5', () => { 
expect(math.divisao(10, 2)).toBe(5); 
}); 

test('multiplicacao 10 * 2 igual a 20', () => { 
expect(math.multiplicacao(10, 2)).toBe(20); 
}); 