import * as React from "react"
import { Input, Icon, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import { Link  } from "react-router-dom";
import "./Login.scss"

interface TSLogInState {
    account?: string,
    password?: string,
}


class LogIn extends React.Component<any, TSLogInState> {
    constructor(props: any) {
        super(props)
        this.state = {
            account: '',
            password: '',
        }
    }
    onChange = (key: keyof TSLogInState, value: string) => {
        const temp: TSLogInState = {}
        temp[key] = value
        this.setState(temp)
        
    }
    submit = async () => {
        const { account, password, } = this.state
        try {
            await axios.post("sign_in/user", {
                account,
                password
            })
            this.props.history.push("/")//登录成功跳转主页面
            console.log(this.props);
            
        } catch (error) {
            console.log(this.props);
            // throw new Error(error)
            alert("密码或用户名错误")
            this.setState({password: ''})
        }
    }
    public render() {
        const { account, password } = this.state;
        return (
            <div className="LogIn" id="LogIn">
                <h1>React todo-list登录</h1>
                <Input
                    allowClear
                    placeholder="输入用户名 "
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={account}
                    onChange={(e) => { this.onChange("account", e.target.value) }}
                />
                <Input.Password value={password} onChange={(e) => { this.onChange("password", e.target.value) }} placeholder="输入密码" />
                <Button className="LogInButton" type="primary" onClick={this.submit}>登录</Button>
                <p>如果你没有账号,请  <Link to="/SignUp">注册</Link></p>
            </div>
        )
    }
}

export default LogIn;