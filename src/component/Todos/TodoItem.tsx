import * as React from "react"
import { Input, Icon, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from "../../config/axios";
import classnames from 'classnames'
import './TodoItem.scss'

class TodoItem extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            key: '',
            description: '',
            editText: this.props.description,
        }
    }
    update = (params: any) => {
        this.props.update(this.props.id, params)

    }
    toEditing = () => {
        this.props.toEditing(this.props.id)
    }
    onkeyUp = (e: any) => {
        if (e.keyCode === 13 && this.state.editText !== "") {
            this.update({ description: this.state.editText })
        }
    }
    onEnter = () => {
        if (this.state.editText !== "") {
            this.update({ description: this.state.editText })
        }
    }
    public render() {
        const Editing = <span className="editing">
            <input type="text" value={this.state.editText}
                onChange={e => { this.setState({ editText: e.target.value }) }}
                onKeyUp={this.onkeyUp}
            />
            <Icon type="enter" onClick={this.onEnter} />
            <Icon type="delete" theme='filled'
                onClick={e => { this.update({ deleted: true }) }} />
        </span>

        const Text = <span className="text" onDoubleClick={e => { this.toEditing() }}>{this.props.description}</span>
        return (
            <div className={classnames({
                TodoItem:true,
                editing:this.props.editing,
                completed:this.props.completed
            })} id="TodoItem" >
                <Checkbox
                    style={{padding:'0 4px'}}
                    checked={this.props.completed}
                    onChange={e => this.update({ completed: e.target.checked })} />

                {this.props.editing ? Editing : Text

                }

            </div>
        );
    }
}

export default TodoItem;