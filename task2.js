 var arithmeticSearcher = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
console.log('423 + 4324'.match(arithmeticSearcher));
console.log('423 / 43'.match(arithmeticSearcher));

