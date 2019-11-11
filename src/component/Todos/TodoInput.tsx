import * as React from "react"
import { connect } from 'react-redux';
import { Input, Icon, Dropdown } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import { addTodo } from "../../Redux/actions";


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
    addTodo = async () => {
        try {
            if (this.state.description !== '') {
                // this.props.addTodo({ description: this.state.description })//调用父组件传递的事件handler
                const response = await axios.post('todos', { description: this.state.description })
                this.props.addTodo(response.data.resource)//更新store
            }
        } catch (e) {
            throw new Error(e)
        }
        this.setState({ description: '' })//input置空

    }

    public render() {
        const { description } = this.state;
        //判断input内容存在与否,保存JSX变量
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

const mapStateToProps = (state:any, ownProps:any) => ({
	...ownProps
})

const mapDispatchToProps = {
	addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoInput);