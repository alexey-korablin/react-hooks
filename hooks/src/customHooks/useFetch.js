import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({ data: null, loading: true });

    // useEffect хук тут используется для того, чтобы предотвратить 
    // срабатывание хука состояния после того, как компонент будет
    // размонтирован. Пример: custom hook useFetch вызывается из компонента,
    // но по каким-то причинам пользователь переходит на другую страницу или 
    // выполняет иные действия приводящие к размонтированию компонента, при
    // этом api не успело ответить и следовательно работа useFetch не была 
    // завершена. В результате произойдет пустая операция записи состояния
    // в размонитрованный компонент. Избежать подобного поведения позволяет
    // хук useEffect с пустым списокм зависимостей (сработает только дважды)
    // и хук useRef, записывающий ссылку на триггер в переменную. В
    // последствии значение этой ссылки на нужное в соответствии с логикой
    // происходящего.
    useEffect(() => {
        return () => { isCurrent.current = false; }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true });
        fetch(url)
            .then(t => t.text())
            .then(t => {
                if (isCurrent.current) {
                    setState({ data: t, loading: false })
                }
            });
    }, [url])

    return state;
}