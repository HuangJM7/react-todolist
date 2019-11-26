import * as React from "react"
import { Input, Icon, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import "./SignUp.scss"

interface TSignUpState {
    account?: string,
    password?: string,
    passwordConformation?: string
}


class SignUp extends React.Component<any, TSignUpState> {
    constructor(props: any) {
        super(props)
        this.state = {
            account: '',
            password: '',
            passwordConformation: ''
        }
    }
    onChange = (key: keyof TSignUpState, value: string) => {
        const temp: TSignUpState = {}
        temp[key] = value
        this.setState(temp)

    }
    submit = async () => {
        const { account, password, passwordConformation } = this.state
        try {
            await axios.post("sign_up/user", {
                account,
                password,
            })
            this.props.history.push("/")//登录成功跳转主页面

        } catch (error) {
            alert('错误')
            this.setState({password: '',passwordConformation: ''})
            // throw new Error(error)
        }
    }
    public render() {
        const { account, password, passwordConformation } = this.state;
        return (
            <div className="signUp" id="SignUp">
                <h1>React todo-lis注册</h1>
                <Input
                    id="account"
                    allowClear
                    placeholder="输入用户名 "
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={account}
                    onChange={(e) => { this.onChange("account", e.target.value) }}
                />
                <Input.Password id="password" value={password} placeholder="输入密码" onChange={(e) => { this.onChange("password", e.target.value) }} />
                <Input.Password id="passwordConformation" value={passwordConformation} placeholder="确认密码" onChange={(e) => { this.onChange("passwordConformation", e.target.value) }} />
                <Button className="SignUpButton" type="primary" onClick={this.submit}>注册</Button>
                <p>如果你有账号,请  <Link to="/LogIn">登录</Link></p>
            </div>
        )
    }
}

export default SignUp;