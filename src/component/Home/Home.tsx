import * as React from "react"
import { Menu, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import Todos from "../Todos/Todos"
import Tomatoes from "../Tomatoes/Tomatoes"
import './Home.scss'

class SignUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentWillMount() {
        window.addEventListener("beforeunload", function (event) {
            event.preventDefault()
            window.location.href="https://huangjm7.github.io/react-todolist/build"
        });
        await this.getMe()
    }
    getMe = async () => {
        try {
            const response = await axios.get("me")
            this.setState({ user: response.data })

        } catch (e) {
            // if (e.response.status === 401) {
            //     this.props.history.push("/LogIn")//跳转登录页
            // }
            //通过拦截器重定向
            console.error("获取用户失败");

        }
    }
    logout = () => {
        localStorage.setItem('x-token', '')//注销
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
            </div>
        )
    }
}

export default SignUp;