import { useEffect, useState } from "react"
import './Toggle.scss'


export const Toggle: React.FC = () =>{

	const [toggleMode, setToggleMode] = useState(false)

	useEffect(()=>{
		const saveItem = localStorage.getItem('theme')
		if(saveItem === 'dark'){
			setToggleMode(true)
			document.documentElement.setAttribute('data-theme', 'dark')
		}else{
			setToggleMode(false)
			document.documentElement.setAttribute('data-theme', 'light')

		}
	},[])

	const toggleTheme = () =>{
		const newTheme = toggleMode ? 'light' : 'dark'
		setToggleMode(!toggleMode)
		document.documentElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)

	}
	return (
		<button className={`toggle-btn ${toggleMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
			<span className="emoji">{toggleMode ? '🌑' : '☀️'}</span>
		</button>
	)
}