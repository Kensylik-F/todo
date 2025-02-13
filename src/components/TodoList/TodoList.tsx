import { useEffect, useState } from "react";
import { ITodo } from "../../types/type";
import { fetchTodo } from "../../api/Fetching";
import { TodoItem } from "../TodoItem/TodoItem";




export const TodoList: React.FC = () =>{

	const [todo, setTodo] = useState<ITodo[]>([])
	
	useEffect(()=>{
		const getTodo = async()=>{
		  try{
			const data = await fetchTodo()
			if(Array.isArray(data)){
			  setTodo(data)
			}else {
			  console.error('Invalid seminar data format');
			}
		  }catch(e){
			console.error('Invalid seminar data format', e);

		  }
		}
		getTodo()
	},[])
	return (
		<div className="ListContainer">
			<h1>TODO</h1>
			{todo.map((item) =>(
				<div key={item.id}>
					<TodoItem {...item}/>
				</div>
			))}
		</div>
	)
}