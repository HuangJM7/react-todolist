import * as React from 'react';
import { format } from 'date-fns'
import './TomatoList.scss'



const TomatoItem = function (props) {
	return (
		<div className="TomatoItem">
			<span className="timeRange">{format(new Date(props.started_at), 'H:mm')} - {format(new Date(props.ended_at), 'H:mm')}</span>
			{/* <span className="timeRange">{props.started_at} - {props.ended_at}</span> */}
			<span className="description">{props.description}</span>
		</div>
	)
}

class TomatoList extends React.Component<any, any> {
	constructor(props) {
		super(props)
	}

	get dates() {
		const dates = Object.keys(this.props.finishedTomatoes)
		return dates.sort((a, b) => Date.parse(b) - Date.parse(a)).splice(0, 3)
	}

	public render() {
		const list = this.dates.map(d => {
			const tomatoes = this.props.finishedTomatoes[d]
			return (
				<div key={d} className="dailyTomatoes">
					<div className="title">
						<span className="dateTime">{format(new Date(d), 'M月dd日')}</span>
						{/* <span className="dateTime">{d}</span> */}
						<span className="finishedCount">完成了{tomatoes.length}个番茄</span>
					</div>
					{
						tomatoes.map((t: any) => <TomatoItem key={t.id} {...t} />)
					}
				</div>

			)
		})

		return (
			<div className="TomatoList" id="TomatoList">
				{/* {format(new Date("2019-11-12T12:22:26.738Z"), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")} */}
				{list}
			</div>
		);
	}
}

export default TomatoList;