import {NavLink} from 'react-router-dom';
import {useRef, useState} from 'react';
import clover from "../../files/clover.png";

function Navbar({isLogged, setLogged, keyForNavbar}) {

    const menu = useRef();
    // const okMessage = useRef();
    // const input = useRef();
    // const form = useRef();
    // const [code, setCode] = useState('');
    // const checkCode = (e) => {
    //     e.preventDefault();
    //     let time = new Date() < new Date(2021, 8, 18, 14, 20);
    //
    //     if (code === 'q') {
    //         if (time) {
    //             setLogged();
    //             okMessage.current.innerHTML = 'Пароль верный! Выберите раздел!';
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //             form.current.innerHTML = '';
    //         } else {
    //             setCode('');
    //             okMessage.current.innerHTML = 'Срок действия пароля истек'
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         }
    //     } else {
    //         if (code === '') {
    //             okMessage.current.innerHTML = 'Введите пароль!';
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         } else {
    //             setCode('');
    //             okMessage.current.innerHTML = 'Пароль неверный! Попробуйте еще раз'
    //             setTimeout(() => {
    //                 okMessage.current.innerHTML = ''
    //             }, 2000)
    //         }
    //     }
    // }

    function notShow() {
        menu.current.classList.remove('show');
    }

    return (

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fs-5'>
            <div className='container-fluid px-1'>
                <NavLink to='/' className='navbar-brand fs-2 fst-italic' onClick={notShow}><img className='fs-3'
                                                                                                src={clover}
                                                                                                alt='clover'/> CleverKUDViN</NavLink>
                {keyForNavbar &&  <span className='nav-link fs-6 text-center'>
                    Ключ: <br/>{keyForNavbar}
                </span>}
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                        aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div ref={menu} className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item m-2'>
                            <NavLink to='letters' className='nav-link' onClick={notShow}>
                                Буквы
                            </NavLink>
                        </li>
                        <li className='nav-item m-2'>
                            <NavLink to='syllables' className='nav-link' onClick={notShow}>
                                Слоги
                            </NavLink>
                        </li>
                        <li className='nav-item m-2'>
                            <NavLink to='numbers' className='nav-link' onClick={notShow}>
                                Счёт
                            </NavLink>
                        </li>
                        <li className='nav-item m-2'>
                            <NavLink to='tasks' className='nav-link' onClick={notShow}>
                                Задачи
                            </NavLink>
                        </li>
                        <li className='nav-item dropdown m-2'>
                            <a className='nav-link' href='#' id='navbarDropdown' role='button'
                               data-bs-toggle='dropdown' aria-expanded='false'>
                                Примеры
                            </a>
                            <ul className='dropdown-menu dropdown-menu-dark bg-dark' aria-labelledby='navbarDropdown'>
                                <li><NavLink to='examples' className='nav-link m-2' onClick={notShow}>
                                    Лёгкие
                                </NavLink></li>
                                <li><NavLink to='hardExamples' className='nav-link m-2' onClick={notShow}>
                                    Сложные
                                </NavLink></li>
                                <li><NavLink to='insertValue' className='nav-link m-2' onClick={notShow}>
                                    Вставить число
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown m-2'>
                            <a className='nav-link' href='#' id='navbarDropdown' role='button'
                               data-bs-toggle='dropdown' aria-expanded='false'>
                                Отдых
                            </a>
                            <ul className='dropdown-menu dropdown-menu-dark bg-dark' aria-labelledby='navbarDropdown'>
                                <li><NavLink to='popit' className='nav-link m-2' onClick={notShow}>
                                    Popit
                                </NavLink></li>
                            </ul>
                        </li>
                    </ul>


                    <ul className='navbar-nav'>
                        <li className='nav-item m-2'>
                            <hr className='dropdown-divider text-white'/>
                        </li>
                        <li className='nav-item m-2'>
                            <a className='nav-link' data-bs-toggle='offcanvas' data-bs-target='#offcanvasBottom'
                               aria-controls='offcanvasBottom'>Контакты</a>
                        </li>
                    </ul>
                    {/*<div ref={okMessage} className='okMessage'></div>*/}
                    {/*{!isLogged ? <form className='d-flex' onSubmit={checkCode} ref={form}>*/}
                    {/*    <input className='form-control me-1' type='search' placeholder='Введите ключ' aria-label='Search' value={code} onChange={(e) => setCode(e.target.value)} ref={input}/>*/}
                    {/*    <button className='btn btn-outline-success' type='submit'>Отправить</button>*/}
                    {/*</form> : null}*/}
                </div>
            </div>
        </nav>
    )
}

export default Navbar