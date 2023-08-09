import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import HeaderCounter from "./features/headerCounter/headerCounter"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderCounter />
                <Counter />
            </header>
        </div>
    )
}

export default App
