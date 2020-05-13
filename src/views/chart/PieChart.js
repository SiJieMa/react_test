import React from 'react';
import { connect } from 'react-redux';
import Chart from '@/components/chart/Chart';
const chartData = {
	backgroundColor: '#fff',
	title: {
		top: 30,
		text: '目的地用车情况',
		textStyle: {
			fontWeight: 'normal',
			fontSize: 16,
			color: '#57617B'
		},
		left: 'center'
	},
	color: ['#001529', '#1890FF', '#1b9436', '#751313'],
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		orient: 'vertical',
		x: 20,
		data: ['上海', '天津', '北京', '深圳', '香港'],
		top: 20
	},
	series: [
		{
			name: '费用支出',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{ value: 100, name: '上海' }, { value: 50, name: '天津' }, { value: 224, name: '北京' }, { value: 60, name: '深圳' }, { value: 60, name: '香港' }]
		}
	]
};

const PieChart = props => <Chart chartData={chartData} height={'500px'} style={{ padding: 0 }} {...props} />;

const mapStateToProps = state => {
	return {
		collapse: state.collapse
	};
};

export default connect(mapStateToProps)(PieChart);
