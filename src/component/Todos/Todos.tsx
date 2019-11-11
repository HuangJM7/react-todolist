import * as React from "react"
import { Collapse } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { initTodos, updateTodo } from "../../Redux/actions";
import axios from "../../config/axios";
import TodoInput from "./TodoInput"
import TodoItem from './TodoItem'
import './Todos.scss'
import { connect } from 'react-redux';

const { Panel } = Collapse;


class Todos extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        //旧数据保存在Todos.state中
        // this.state = {
        //     todos: []
        // }
    }
    
    get unDeleteTodos() {
        return this.props.todos.filter((t: any) => { return !t.deleted })
    }
    get unCompletedTodos() {
        return this.unDeleteTodos.filter((t: any) => { return !t.completed })
    }
    get completedTodos() {
        return this.unDeleteTodos.filter((t: any) => { return t.completed })
    }
    componentDidMount() {//生命周期函数,初始化数据
        this.getTodos()
    }
    //新的数据获取函数,将数据保存在store中
    getTodos = async () => {
        try {
            const response = await axios.get('todos')
            const todos = response.data.resources.map((t: any) => Object.assign({}, t, { editing: false }))
            this.props.initTodos(todos)//
        } catch (e) {
            throw new Error(e)
        }
    }
    //旧的数据获取函数,将数据保存在todos的state中
    // getTodo = async () => {
    //     try {
    //         let response = await axios.get('todos')
    //         const todos = response.data.resources.map((t: any) => Object.assign({}, t, { editing: false }))
    //         this.setState({ todos: todos })
    //     } catch (e) {
    //         throw new Error(e)
    //     }
    // }
    //本地数据保存在父组件,通过props传递函数变动数据
    // addTodo = async (params: any) => {
    //     const { todos } = this.state
    //     try {
    //         const response = await axios.post("todos", params)
    //         this.setState({ todos: [response.data.resource, ...todos] })
    //     } catch (e) {
    //         throw new Error(e)
    //     }
    // }
    // updaTodo = async (id: any, params: any) => {
    //     const { todos } = this.state
    //     try {
    //         const response = await axios.put(`todos/${id}`, params)
    //         let newTodos = todos.map((t: any) => {
    //             if (id === t.id) {
    //                 return response.data.resource
    //             } else {
    //                 return t
    //             }
    //         })
    //         this.setState({ todos: newTodos })
    //     } catch (e) {
    //         // throw new Error(e)
    //     }
    // }
    // toEditing = (id: number) => {
    //     const { todos } = this.state
    //     const newTodos = todos.map((t: any) => {
    //         if (id === t.id) {
    //             return Object.assign({}, t, { editing: true })
    //         } else {
    //             return Object.assign({}, t, { editing: false })
    //         }
    //     })
    //     this.setState({ todos: newTodos })
    // }


    public render() {
        return (
            <div className="Todos" id="Todos">
                <TodoInput ></TodoInput>
                <main>
                    {
                        this.unCompletedTodos.map((t: any) => {
                            return <TodoItem key={t.id}{...t}
                            />
                        })
                    }
                    <Collapse defaultActiveKey={['1']} bordered={false}  >
                        <Panel header="已完成任务" key="1">
                            <p>{
                                this.completedTodos.map((t: any) => {
                                    return <TodoItem key={t.id}{...t}
                                    />
                                })
                            }</p>
                        </Panel>
                    </Collapse>

                </main>
            </div>
        )
    }
}
const mapStateToProps = (state: any, ownProps: any) => {//绑定store的state到props中
    return {
        todos: state.todos,
        ...ownProps
    }
}
const mapDispatchToProps = {//绑定dispatch函数到props中
    initTodos,
    updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);