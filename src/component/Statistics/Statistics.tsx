import * as React from "react"
import { connect } from "react-redux"
import "./Statistics.scss"

interface IstattisticsProps {
    todos: any[]
}


class Statistics extends React.Component<IstattisticsProps, any>{
    constructor(props) {
        super(props)
    }
    
    get finishedTodos() {
        return this.props.todos.filter(t => t.completed && !t.delete)
    }
    public render() {
        return (
            <div className="Statistics" id="Statistics">
                <ul>
                    <li>统计</li>
                    <li>目标</li>
                    <li>番茄历史</li>
                    <li>任务历史
                        累计完成{this.finishedTodos.length}个任务
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {//绑定store的state到props中
    return {
        todos: state.todos,
        ...ownProps
    }
}

export default connect(mapStateToProps)(Statistics);