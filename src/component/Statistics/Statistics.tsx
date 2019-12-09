import * as React from "react"
import { connect } from "react-redux"
import Polygon from "./Polygon"
import TodoHistory from './TodoHistory/TodoHistory'
import { format } from 'date-fns'
import _ from "lodash"
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
    get dailyTodos() {
        return _.groupBy(this.finishedTodos, (todo) => {
            return format(new Date(todo.updated_at), 'yyyy-MM-d')
        })
    }
    public render() {
        return (
            <div className="Statistics" id="Statistics">
                <ul>
                    <li>
                        <div className="description">
                            <span className="title">统计</span>
                            <span className="subtitle">累计完成任务</span>
                            <span className="quantity">{this.finishedTodos.length}</span>
                        </div>
                    </li>
                    <li>
                        <div className="description">
                            <span className="title">番茄历史</span>
                            <span className="subtitle">累计完成番茄</span>
                            <span className="quantity">{this.finishedTodos.length}</span>
                        </div>
                    </li>
                    <li>
                        <div className="description">
                            <span className="title">任务历史</span>
                            <span className="subtitle">累计完成任务</span>
                            <span className="quantity">{this.finishedTodos.length}</span>
                        </div>
                        <Polygon data={this.dailyTodos} totalFinishedCount={this.finishedTodos.length} />
                    </li>
                </ul>
                <TodoHistory />
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