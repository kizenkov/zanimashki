import {useRef, useState, useEffect} from 'react';
import ExampleValue from './ExampleValue';
import helper from '../../files/helper1.gif';
import Contacts from '../Contacts/Contacts';
// import {Redirect} from 'react-router-dom';

function InsertValue({isLogged, colorsArray, showKey, right, lang}) {

    let [sec, setSec] = useState(60);

    const [A1, setA1] = useState(Math.trunc(Math.random() * 11));
    const [B1, setB1] = useState(Math.trunc(Math.random() * 11));
    const [C1, setC1] = useState(Math.trunc(Math.random() * 11));
    const [D1, setD1] = useState(Math.trunc(Math.random() * 11));

    const [A2, setA2] = useState(Math.trunc(Math.random() * 11));
    const [B2, setB2] = useState(Math.trunc(Math.random() * 11));
    const [C2, setC2] = useState(Math.trunc(Math.random() * 11));
    const [D2, setD2] = useState(Math.trunc(Math.random() * 11));

    const [A3, setA3] = useState(Math.trunc(Math.random() * 11));
    const [B3, setB3] = useState(Math.trunc(Math.random() * 11));
    const [C3, setC3] = useState(Math.trunc(Math.random() * 11));
    const [D3, setD3] = useState(Math.trunc(Math.random() * 11));

    const [A4, setA4] = useState(Math.trunc(Math.random() * 11));
    const [B4, setB4] = useState(Math.trunc(Math.random() * 11));
    const [C4, setC4] = useState(Math.trunc(Math.random() * 11));
    const [D4, setD4] = useState(Math.trunc(Math.random() * 11));

    const [A5, setA5] = useState(Math.trunc(Math.random() * 11));
    const [B5, setB5] = useState(Math.trunc(Math.random() * 11));
    const [C5, setC5] = useState(Math.trunc(Math.random() * 11));
    const [D5, setD5] = useState(Math.trunc(Math.random() * 11));

    let arr = [];
    const button = useRef();
    // const result = useRef();
    const time = useRef();

    //timer
    let showTime;
    useEffect(() => {
        showTime = setInterval(function () {
            setSec(sec - 1)
        }, 1000);
        if (sec === 0) {
            showResult();
            clearInterval(showTime);
        }
        return () => {
            clearInterval(showTime);
        }
    }, [sec])

    function showResult() {
        clearInterval(showTime);
        let score = 0;
        button.current.disabled = true;
        arr.forEach(function (el) {
            el[4].current.disabled = true;
            el[5].current.disabled = true;
            el[6].current.disabled = true;
            el[7].current.disabled = true;
        });

        arr.forEach(function (el) {
            if ((+el[4].current.value === el[1] - el[0])) {
                el[6].current.innerHTML = '✓';
                el[6].current.style.color = 'lime';
                score += 1;
            } else {
                el[6].current.innerHTML = el[1] - el[0];
                el[6].current.style.color = 'red';
            }

            if (el[8]) {
                if (+el[5].current.value === el[2] - el[3]) {
                    el[7].current.innerHTML = '✓';
                    el[7].current.style.color = 'lime';
                    score++;
                } else {
                    el[7].current.innerHTML = el[2] - el[3];
                    el[7].current.style.color = 'red';
                }
            } else {
                if (+el[5].current.value === el[2] + el[3]) {
                    el[7].current.innerHTML = '✓';
                    el[7].current.style.color = 'lime';
                    score++;
                } else {
                    el[7].current.innerHTML = el[2] + el[3];
                    el[7].current.style.color = 'red';
                }
            }
        })
        // result.current.innerHTML = 'Оценка: ' + score;
        if (score >= right) {
            showKey();
        }

        setTimeout(() => {
            if (time.current) {
                window.scrollTo(document.body.scrollWidth, 0);
                setSec(60);
                // result.current.innerHTML = '';
                button.current.disabled = false;
                arr.forEach(function (el) {
                    el[4].current.innerHTML = el[5].current.innerHTML = el[6].current.innerHTML = el[7].current.innerHTML = null;
                    el[4].current.value = el[5].current.value = el[6].current.value = el[7].current.value = null;
                    el[4].current.disabled = el[5].current.disabled = el[6].current.disabled = el[7].current.disabled = false;
                });

                setA1(Math.trunc(Math.random() * 11));
                setB1(Math.trunc(Math.random() * 11));
                setC1(Math.trunc(Math.random() * 11));
                setD1(Math.trunc(Math.random() * 11));
                setA2(Math.trunc(Math.random() * 11));
                setB2(Math.trunc(Math.random() * 11));
                setC2(Math.trunc(Math.random() * 11));
                setD2(Math.trunc(Math.random() * 11));
                setA3(Math.trunc(Math.random() * 11));
                setB3(Math.trunc(Math.random() * 11));
                setC3(Math.trunc(Math.random() * 11));
                setD3(Math.trunc(Math.random() * 11));
                setA4(Math.trunc(Math.random() * 11));
                setB4(Math.trunc(Math.random() * 11));
                setC4(Math.trunc(Math.random() * 11));
                setD4(Math.trunc(Math.random() * 11));
                setA5(Math.trunc(Math.random() * 11));
                setB5(Math.trunc(Math.random() * 11));
                setC5(Math.trunc(Math.random() * 11));
                setD5(Math.trunc(Math.random() * 11));
            }
        }, 5000);
        window.scrollTo(0, document.body.scrollHeight);
    }

    // if (!isLogged) return <Redirect to='/'/>

    return (
        <div><br/>
            <ExampleValue arr={arr} a={A1} b={B1} c={C1} d={D1} colorsArray={colorsArray}/>
            <ExampleValue arr={arr} a={A2} b={B2} c={C2} d={D2} colorsArray={colorsArray} isInputSecond={true}/>
            <ExampleValue arr={arr} a={A3} b={B3} c={C3} d={D3} colorsArray={colorsArray}/>
            <ExampleValue arr={arr} a={A4} b={B4} c={C4} d={D4} colorsArray={colorsArray} isInputSecond={true}/>
            <ExampleValue arr={arr} a={A5} b={B5} c={C5} d={D5} colorsArray={colorsArray}/>
            <div className='row align-items-center text-center'>
                <span className='col-lg-5 col-md-12 col-sm-12 col-xs-12 fs-4 fst-italic p-1 time'
                      ref={time}>
                    {lang === 'ru' && <>Осталось: </>}
                    {lang === 'en' && <>Rest: </>}
                    {sec < 10 && sec >= 0 && '0'}{sec}
                    {lang === 'ru' && <> сек</>}
                    {lang === 'en' && <> sec</>}
                </span>
                <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <button className='btn btn-success' onClick={showResult} ref={button}>
                        {lang === 'ru' && <>Подтвердить</>}
                        {lang === 'en' && <>Confirm</>}
                    </button>
                </div>
                {/*<span className='col-lg-6 col-md-12 col-sm-12 col-xs-12 result' ref={result}></span>*/}
            </div>
            <div>
                <img className='helper' src={helper} alt='helper'/>
            </div>
            <Contacts lang={lang}/>
        </div>
    )
}

export default InsertValue