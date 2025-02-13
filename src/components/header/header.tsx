import { Toggle } from "./Toggle/ToggleMode"
import './header.scss'


export const Header: React.FC = () =>{
	return (
		<div className="header-container">
			<div>SEARCH</div>
			<div className="wrapper-profile">
				<div className="btn">
					<Toggle/>
				</div>
				<p>PROFILE</p>
			</div>
			
		</div>
	)
} 