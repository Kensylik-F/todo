import axios from "axios"


// interface ITodo{
// 	userId: number
// 	id: number
// 	title: string
// 	completed: boolean
// }


const URL = "http://localhost:3001/posts"


export const fetchTodo = async() =>{
	try{
		const res = await axios.get(URL)
		return res.data
	}catch(e){
		console.error(e)
	}
}