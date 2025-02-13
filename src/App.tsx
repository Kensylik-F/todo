// import { TodoList } from "./components/TodoList/TodoList"
// import './App.scss'
import { Calendar } from './components/Calendar/Calendar'
import { Header } from './components/header/header'
import './components/style/app.scss'
import './components/style/theme.scss'
function App() {
  
  return (
    <div className="app">
		<div className="sidebar">
		    <h1>Todo</h1>
		</div>
		<div className="main">
			<Header/>
			<Calendar/>
			<main className='main-content'>main content</main>
    	</div>
	</div>
  )
}

export default App
