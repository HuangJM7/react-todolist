import * as React from 'react';
import TomatoAction from './TomatoAction'
import TomatoList from './TomatoList'
import { connect } from 'react-redux';
import './Tomatoes.scss'
import { addTomato, initTomatoes, updateTomato } from '../../Redux/actions/tomatoes'
import axios from "../../config/axios";
import _ from 'lodash'
import { format } from 'date-fns'

interface ITomatoesProps {
	addTomato: (payload: any) => any;
	updateTomato: (payload: any) => any;
	initTomatoes: (payload: any[]) => any;
	tomatoes: any[];
}

class Tomatoes extends React.Component<ITomatoesProps> {
	constructor(props: any) {
		super(props)
	}

	componentDidMount() {
		this.getTomatoes()
	}

	get unfinishedTomato() {
		return this.props.tomatoes.filter(t => !t.description && !t.ended_at && !t.aborted)[0]
	}

	//时间转换bug
	// get finishedTomatoes() {
	// 	const finishedTomatoes = this.props.tomatoes.filter(t => t.description && t.ended_at && !t.aborted)
	// 	const obj = _.groupBy(finishedTomatoes, (tometo) => {
	// 		console.log(tometo);
	// 		let formatvalue = format(tometo.created_at, 'YYYY-MM-D')
	// 		console.log(formatvalue);
	// 		return formatvalue
	// 	})
	// 	return obj
	// }

	getTomatoes = async () => {
		try {
			const response = await axios.get('tomatoes')
			this.props.initTomatoes(response.data.resources)

		} catch (e) {
			throw new Error(e)
		}
	}

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
				{/* <TomatoList finishedTomatoes={this.finishedTomatoes} /> */}
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
	updateTomato,
	initTomatoes
}

export default connect(mapStateToProps, mapDispatchToProps)(Tomatoes);