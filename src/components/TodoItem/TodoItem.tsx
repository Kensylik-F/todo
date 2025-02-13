import { ITodo } from "../../types/type";
import './TodoItem.scss'



export const TodoItem: React.FC<ITodo> = ({completed,title}) =>{
	
	return (
		<div className="container">
			<input type="checkbox" checked={completed}/>
			<div>
				<h1>{title}</h1>
			</div>
		</div>
	)
}