import React, { useState, useMemo } from 'react';

import { useFetch } from '../customHooks/useFetch';

const computeLongestWord = (arr) => {
    if (!arr) {
        return [];
    }

    console.log('computed');

    let longestWord = '';
    JSON.parse(arr).forEach(sentence => 
        sentence.split(' ').forEach(w => {
            if (w.length > longestWord.length) { longestWord = w }
        })
    )

    return longestWord;
}

export const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const { data } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json');

    // console.log(data);

    // Ниже производятся какие-то вычисления, возможно тяжелые. Эти 
    // вычисления будут производиться при каждой перерисовке клмпонента.
    // Данное поведение обеспечивает кнопка с обработчиком кликов, который
    // изменяет состояние компонента. В данном случае предотвращать 
    // перерисовку компонента не нужно, нужно лишь избежать повторных 
    // вычислений. Для этого используется хук useMemo.
    // !!! Важно: функции, производящие вычисления должны быть за пределами
    // компонента. В противном случае они будут пересоздаваться и (если они)
    // являются частью зависимостей хука useMemo, то будет происходить
    // цикл вычислений.
    const longestWord = useMemo(() => computeLongestWord(data), [data])

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>{longestWord}</div>
        </div>
    );
}