import Navbar from './components/Navbar/Navbar';

import './App.css';
import {Route} from 'react-router-dom';
import {useState} from "react";
import Main from "./components/Main/Main";
import Syllables from "./components/Syllables/Syllables";
import Tasks from "./components/Tasks/Tasks";
import Examples from "./components/Examples/Examples";
import InsertValue from "./components/InsertValue/InsertValue";
import Popit from "./components/Popit/Popit";
import Letters from "./components/Letters/Letters";
import Numbers from "./components/Numbers/Numbers";
import Contacts from "./components/Contacts/Contacts";

function App() {

    const [isLogged, setIsLogged] = useState(true)

    let setLogged = () => {
        setIsLogged(true);
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <div class='row'>
                <Navbar isLogged={isLogged} setLogged={setLogged}/>
            </div>
            <div class='row'>
    <Route exact path='/' render={() => <Main
                                              isLogged={isLogged} />}/>
    <Route path='/letters' render={() => <Letters isLogged={isLogged}/>}/>
    <Route path='/syllables' render={() => <Syllables isLogged={isLogged}/>}/>
    <Route path='/numbers' render={() => <Numbers isLogged={isLogged}/>}/>
    <Route path='/tasks' render={() => <Tasks isLogged={isLogged}/>}/>
    <Route path='/examples' render={() => <Examples n={10} isLogged={isLogged}/>}/>
    <Route path='/hardExamples' render={() => <Examples n={30} isLogged={isLogged}/>}/>
    <Route path='/insertValue' render={() => <InsertValue isLogged={isLogged}/>}/>
    <Route path='/contacts' render={() => <Contacts/>}/>
    <Route path='/popit' render={() => <Popit/>}/>
</div>
        </div>
    )
}

export default App;