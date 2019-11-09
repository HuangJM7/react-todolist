import * as React from "react"
import { Input, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";


class TodoInput extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            description: ''
        }
    }
    onKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            this.addTodo()
        }
    }
    addTodo = () => {
        if (this.state.description !== '') {
            this.props.addTodo({ description: this.state.description })
            this.setState({ description: '' })
        }

    }
    public render() {
        const { description } = this.state;
        const suffix = description ? <Icon type="enter" onClick={this.addTodo} /> : <span />;
        return (
            <div className="TodoInput" id="TodoInput">
                <Input
                    placeholder="添加新任务"
                    suffix={suffix}
                    value={description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    onKeyUp={this.onKeyUp}
                />
            </div>
        );
    }
}

export default TodoInput;