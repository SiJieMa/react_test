import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const { Option } = Select;

const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake'
					}
				]
			}
		]
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men'
					}
				]
			}
		]
	}
];

class BasicForm extends React.Component {
	state = {
		confirmDirty: false
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	handleConfirmBlur = e => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				sm: { span: 9 }
			},
			wrapperCol: {
				sm: { span: 6 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				sm: {
					span: 9,
					offset: 9
				}
			}
		};
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '86'
		})(
			<Select style={{ width: 70 }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		);

		return (
			<div className="shadow-radius">
				<div className="public-title">
					<h1>车辆信息录入</h1>
					<h1>
						更多表单antd表单组件参考：<a target="_blank" href="https://ant.design/components/form-cn/" rel="noopener noreferrer">Form </a>
					</h1>
				</div>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>


					<Form.Item
						label={
							<span>
								车牌号&nbsp;
								<Tooltip title="请您输入车辆车牌号？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname', {
							rules: [{ required: true, message: '请输入车辆车牌号！', whitespace: true }]
						})(<Input />)}
					</Form.Item>


					<Form.Item
						label={
							<span>
								型号&nbsp;
								<Tooltip title="请您输入型号？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname2', {
							rules: [{ required: true, message: '请输入型号！', whitespace: true }]
						})(<Input />)}
					</Form.Item>

					<Form.Item
						label={
							<span>
								载客人数&nbsp;
								<Tooltip title="请您输入载客人数？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname3', {
							rules: [{ required: true, message: '请输入载客人数！', whitespace: true }]
						})(<Input />)}
					</Form.Item>




					<Form.Item
						label={
							<span>
								司机&nbsp;
								<Tooltip title="请您输入司机？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname5', {
							rules: [{ required: true, message: '请输入司机！', whitespace: true }]
						})(<Input />)}
					</Form.Item>


					<Form.Item
						label={
							<span>
								公里数&nbsp;
								<Tooltip title="请您输入公里数？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname6', {
							rules: [{ required: true, message: '请输入公里数！', whitespace: true }]
						})(<Input />)}
					</Form.Item>

					<Form.Item
						label={
							<span>
								年检时间&nbsp;
								<Tooltip title="请您输入年检时间？">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator('nickname7', {
							rules: [{ required: true, message: '请输入年检时间！', whitespace: true }]
						})(<Input />)}
					</Form.Item>




					<Form.Item label="手机号码">
						{getFieldDecorator('phone', {
							rules: [{ required: true, message: '请输入手机号码！' }]
						})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						{getFieldDecorator('agreement', {
							valuePropName: 'checked'
						})(
							<Checkbox>
								我已经阅读过 <a href="#/agreement">协议</a>
							</Checkbox>
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit" onClick={()=>{alert("注册成功")}}>
						提交
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
export default Form.create()(BasicForm);
