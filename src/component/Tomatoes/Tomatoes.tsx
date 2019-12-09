import * as React from 'react';
import TomatoAction from './TomatoAction'
import TomatoList from './TomatoList'
import { connect } from 'react-redux';
import './Tomatoes.scss'
import { addTomato, updateTomato } from '../../Redux/actions/tomatoes'
import axios from "../../config/axios";
import _ from 'lodash'
import { format } from 'date-fns'

interface ITomatoesProps {
	addTomato: (payload: any) => any;
	updateTomato: (payload: any) => any;
	tomatoes: any[];
}

class Tomatoes extends React.Component<ITomatoesProps> {
	constructor(props: any) {
		super(props)
	}

	get unfinishedTomato() {
		return this.props.tomatoes.filter(t => !t.description && !t.ended_at && !t.aborted)[0]
	}

	// format(`2019-11-12T12:22:26.738Z`,'YYYY-MM-D')
	// data-fns时间转换bug,版本更新,不接受字符串格式参数,接受Date或number类型
	get finishedTomatoes() {
		const finishedTomatoes = this.props.tomatoes.filter(t => t.description && t.ended_at && !t.aborted)
		return _.groupBy(finishedTomatoes, (tometo) => {
			return format(new Date(tometo.started_at), 'yyyy-MM-dd')
		})
	}
	//数据初始化在HOME进行
	// getTomatoes = async () => {
	// 	try {
	// 		const response = await axios.get('tomatoes')
	// 		console.log(response.data.resources);
	// 		this.props.initTomatoes(response.data.resources)

	// 	} catch (e) {
	// 		// throw new Error(e)
	// 	}
	// }

	startTomato = async () => {
		try {
			const response = await axios.post('tomatoes', { duration: 1500000 })
			this.props.addTomato(response.data.resource)
		} catch (e) {
			throw new Error(e)
		}
	}

	public render() {
		return (
			<div className="Tomatoes" id="Tomatoes">
				<TomatoAction startTomato={this.startTomato} unfinishedTomato={this.unfinishedTomato} updateTomato={this.props.updateTomato} />
				<TomatoList finishedTomatoes={this.finishedTomatoes} />
			</div>
		);
	}
}

const mapStateToProps = (state: any, ownProps: any) => ({
	tomatoes: state.tomatoes,
	...ownProps
})

const mapDispatchToProps = {
	addTomato,
	updateTomato
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes);