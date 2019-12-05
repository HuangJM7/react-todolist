import * as React from "react"
import { Menu, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import Todos from "../Todos/Todos"
import Tomatoes from "../Tomatoes/Tomatoes"
import Statistics from "../Statistics/Statistics"
import { connect } from "react-redux"
import { initTodos } from "../../Redux/actions/todos";
import { initTomatoes } from "../../Redux/actions/tomatoes";
import './Home.scss'

class SignUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentWillMount() {
        await this.getMe()
        await this.getTodos()
        await this.getTomatoes()
    }

    getTodos = async () => {
        try {
            const response = await axios.get('todos')
            const todos = response.data.resources.map((t: any) => Object.assign({}, t, { editing: false }))
            this.props.initTodos(todos)//
        } catch (e) {
            // throw new Error(e)
        }
    }
	getTomatoes = async () => {
		try {
			const response = await axios.get('tomatoes')
			console.log(response.data.resources);
			this.props.initTomatoes(response.data.resources)

		} catch (e) {
			// throw new Error(e)
		}
	}
    getMe = async () => {
        try {
            const response = await axios.get("me")
            this.setState({ user: response.data })

        } catch (e) {
            // if (e.response.status === 401) {
            //     this.props.history.push("/LogIn")//跳转登录页
            // }
            //重定向放在拦截器进行
            console.error("获取用户失败");
        }
    }
    logout = () => {
        localStorage.setItem('x-token', '')//注销JWT
        this.props.history.push("/LogIn")//跳转登录页
    }
    public render() {
        const menu = (
            <Menu style={{ padding: "0 10px" }}>
                <Menu.Item key="1"><Icon type="setting" />  设置  </Menu.Item>
                <Menu.Item key="2" onClick={this.logout}><Icon type="logout" />  注销  </Menu.Item>
            </Menu>
        );
        return (
            <div className="Home" id="Home">

                <header>
                    <h2 className="logo">LOGO</h2>
                    <Dropdown.Button overlay={menu} icon={<Icon type="down" />}>
                        <span>
                            <Icon type="user" style={{ padding: 5 }} />

                            {this.state.user && this.state.user.account}
                        </span>
                    </Dropdown.Button>
                </header>

                <main>
                    <Tomatoes />
                    <Todos />
                </main>
                <Statistics />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        ...ownProps
    }
}
const mapDispatchToProps = {
    initTodos, initTomatoes
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)