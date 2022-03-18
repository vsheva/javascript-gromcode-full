'use strict';

// algo
// 1. create function saveFuncCalls(func) {}
// 2. функцию withMemory
// 3. реализация масива calls функции withMemory
// a) в обертке создаем условие if Array.isArray true => push;
// b) return func.apply(this, arguments)
// 4. withMemory.calls = []
// 5. return withMemory



// algo
// 1. create function saveFuncCalls(func) {}
// 2. функцию withMemory
// 3. реализация масива calls функции withMemory
// a) в обертке создаем условие if Array.isArray true => push;
// b) return func.apply(this, arguments)
// 4. withMemory.calls = []
// 5. return withMemory



export function saveFuncCalls(func) {
    function withMemory(...args) {
        if (Array.isArray(withMemory.calls)) {
            withMemory.calls.push(args);
            return func.apply(this, args);
        }
    };

    withMemory.calls = [];

    return withMemory
}

