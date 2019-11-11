import * as React from "react"
import { Icon, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import classnames from 'classnames'
import './TodoItem.scss'
import { connect } from 'react-redux';
import { editTodo, updateTodo } from '../../Redux/actions'

class TodoItem extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            editText: this.props.description,//input初始值
        }
    }

    updateTodo = async (params: any) => {//
        try {
            const response = await axios.put(`todos/${this.props.id}`, params)//请求接口数据
            this.props.updateTodo(response.data.resource)//更新store数据
        } catch (e) {
            throw new Error(e)
        }
    }
    editTodo = () => {
        this.props.editTodo(this.props.id)//item进入编辑模式,显示Input框
    }

    // update = (params: any) => {
    //     this.props.update(this.props.id, params)

    // }
    // toEditing = () => {
    //     this.props.toEditing(this.props.id)
    // }


    onkeyUp = (e: any) => {
        if (e.keyCode === 13 && this.state.editText !== "") {
            // this.update({ description: this.state.editText })//调用父组件传递的事件handler
            this.updateTodo({ description: this.state.editText })//更新store数据
        }
    }
    onEnter = () => {
        if (this.state.editText !== "") {
            // this.update({ description: this.state.editText })
            this.updateTodo({ description: this.state.editText })//更新store数据
        }
    }


    public render() {
        const Editing = <span className="editing">
            <input type="text" value={this.state.editText}
                onChange={e => { this.setState({ editText: e.target.value }) }}
                onKeyUp={this.onkeyUp}
            />
            <span>
                <Icon type="enter" onClick={this.onEnter} />
                <Icon type="delete" theme='filled'
                    onClick={e => { this.updateTodo({ deleted: true }) }} />
            </span>

        </span>

        const Text = <span className="text" onDoubleClick={this.editTodo}>{this.props.description}</span>
        return (
            <div className={classnames({
                TodoItem: true,
                editing: this.props.editing,
                completed: this.props.completed
            })} id="TodoItem" >
                <Checkbox
                    style={{ padding: '0 4px' }}
                    checked={this.props.completed}
                    onChange={e => this.updateTodo({ completed: e.target.checked })} />

                {this.props.editing ? Editing : Text}

            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    ...ownProps
})

const mapDispatchToProps = {
    editTodo,
    updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);