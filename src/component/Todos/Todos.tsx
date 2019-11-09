import * as React from "react"
import { Menu, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import TodoInput from "./TodoInput"
import TodoItem from './TodoItem'
import './Todos.scss'
import { async } from "q";

class Todos extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            todos: []
        }
    }

    addTodo = async (params: any) => {
        const { todos } = this.state
        try {
            const response = await axios.post("todos", params)
            this.setState({ todos: [response.data.resource, ...todos] })

        } catch (e) {
            throw new Error(e)
        }
    }
    componentDidMount() {
        this.getTodo()
    }
    getTodo = async () => {
        try {
            let response = await axios.get('todos')
            const todos=response.data.resources.map((t:any)=>Object.assign({},t,{editing:false}))
            this.setState({ todos: todos })


        } catch (e) {
            throw new Error(e)
        }
    }
    updaTodo = async (id: any, params: any) => {
        const { todos } = this.state
        try {
            const response = await axios.put(`todos/${id}`, params)
            let newTodos = todos.map((t: any) => {
                if (id === t.id) {
                    return response.data.resource
                } else {
                    return t
                }
            })
            this.setState({todos:newTodos})
        } catch (e) {
            // throw new Error(e)
        }
    }
    toEditing=(id:number)=>{
        const {todos}=this.state
        const newTodos= todos.map((t:any)=>{
            if(id===t.id){
                return Object.assign({},t,{editing:true})
            }else{
                return Object.assign({},t,{editing:false})
            }
        })
        this.setState({todos:newTodos})
    }
    public render() {
        return (
            <div className="Todos" id="Todos">
                <TodoInput addTodo={this.addTodo}></TodoInput>
                <main>
                    {
                        this.state.todos.map((t: any) => {
                            return <TodoItem key={t.id}{...t} update={this.updaTodo} 
                            toEditing={this.toEditing}
                            />
                        })
                    }
                </main>
            </div>
        )
    }
}

export default Todos;