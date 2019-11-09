import * as React from "react"
import { Input, Icon, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import { Link } from "react-router-dom";




class SignUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: {}
        }
    }
    async componentWillMount() {
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
        var temp = null
        if (this.state.user !== "") {
            temp = <div>
                <p>{"欢迎," + this.state.user.account}</p>
                <Button className="LogInButton" type="primary" onClick={this.logout}>注销</Button>
            </div>
        }
        return (
            temp
        )
    }
}

export default SignUp;