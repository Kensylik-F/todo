import { useEffect, useState } from "react"
import { fetchTodo } from "./api/Fetching"


interface ITodo{
	userId: number
	id: number
	title: string
	completed: boolean
}

function App() {
  
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


  console.log(todo)
  return (
    <>
      
    </>
  )
}

export default App
