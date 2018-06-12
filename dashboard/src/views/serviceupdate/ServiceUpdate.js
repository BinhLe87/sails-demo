import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, Form, Icon, Input, Button, Switch, List, Checkbox, Tag } from 'antd';
import './styles.scss';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 18 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 18 },
        sm: { span: 12 },
    },
}

@inject("stores")
class ServiceUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			service: {
				registerEndpoint: {
					status: ''
				},
				requirement: []
			},
			slugs: ['email', 'given_name', 'family_name', 'address', 'dob', 'phone', 'passport', 'selfie', 'proof_of_address']
		}
	}

	componentDidMount(){
		//this.props.location.hash
		const hash = this.props.location.hash.split('#')
		this.getServiceById(hash[1])
	}

	getServiceById = (hash) => {
		const {network} = this.props.stores;
		network.getSerivceById(hash)
		.then( data => {
			this.setState({
				service: data.data,
				loading: false
			})
		})
		.catch( err => console.log('err: ', err))
	}

	_handleSubmit = (e) => {
        const { handleSubmit } = this.props;
		e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
				console.log(values);
                handleSubmit && handleSubmit(values);
            }
        });
	}
	
	handleChangeStatus = () => {
		if(this.state.service.status === 'inactive'){
			this.setState({
				service: {
					...this.state.service,
					status: 'active'
				}
			})
		}
		else{
			this.setState({
				service: {
					...this.state.service,
					status: 'inactive'
				}
			})
		}
	}

	handleUpdateRequirements = (e, index) => {
		const {service}  = this.state;
		if(service.requirement.indexOf(this.state.slugs[index]) > -1 ){
			let {requirement} = service
			requirement.splice(requirement.indexOf(this.state.slugs[index]),1);
			this.setState({
				service: {
					...service,
					requirement
				}
			})
		}
		else{
			let {requirement} = service
			requirement.push(this.state.slugs[index])
			this.setState({
				service: {
					...service,
					requirement
				}
			})
		}
	}

	@observer
	render() {
		const { getFieldDecorator } = this.props.form;
		const slugs = this.state.slugs;
		// const data = {"_id":"5aeab0542128392d6e8350d1","updatedAt":"2018-06-04T03:35:09.733Z","createdAt":"2018-03-22T04:51:01.276Z","levelRequirement":"1","__v":0,"status":"active","userServiceRegister":null,"appid":{"android":"","ios":""},"order":1,"deeplink":{"android":"","ios":""},"rating":"","isRegistered":false,"registerEndpoint":{"callbackUrls":[],"status":"http://localhost:3000/blockpass/api/status","upload":"http://localhost:3000/blockpass/api/uploadData","login":"http://localhost:3000/blockpass/api/login","register":"http://localhost:3000/blockpass/api/register","website":"http://localhost:3000/blockpass"},"extras":[],"images":{"banner":"","backdrop":"","thumbnail":"http://www.userlogos.org/files/logos/Brentc/localhost_logo_black.png","logo":"http://www.userlogos.org/files/logos/Brentc/localhost_logo_black.png"},"contacts":{"language":[],"address":"","country":"","googlePlus":"","twitter":"","facebook":"","email":"","website":""},"publicKeyHash":"","publicKey":"","certRequirement":["demo-service-cert"],"certificate":["demo-service-cert"],"requirementDetail":[],"requirement":["email","given_name","family_name","address","dob","phone","passport","selfie","proof_of_address"],"slug":"blockpass-5877-1528083308102","tags":[],"clientSecret":"developer_service","clientId":"developer_service","longDescription":"This is a long description","shortDescription":"3rd service demo","isin":"","name":"developer_service"}
		const data = this.state.service
		const fields = [
			{
				name: '_id',
				title: 'Service ID',
				initialValue: data._id,
				customRender: _ => <Input disabled/>
			},
			{
				name: 'name',
				title: 'Service name',
				customRender: _ => <Input />,
				initialValue: data.name
			},
			{
				name: 'shortDescription',
				title: 'Short description',
				customRender: _ => <Input.TextArea autosize/>,
				initialValue: data.shortDescription
			},
			{
				name: 'longDescription',
				title: 'Long description',
				customRender: _ => <Input.TextArea autosize/>,
				initialValue: data.longDescription
			},
			{
				name: 'status',
				title: 'Status',
				customRender: _ => <Switch checked={data.status == 'active'} onChange={this.handleChangeStatus} />
			},
			{
				name: 'endpoint_status',
				title: '/status endpoint',
				customRender: _ => <Input />,
				initialValue: data.registerEndpoint.status
			},
			{
				name: 'endpoint_login',
				title: '/login endpoint',
				customRender: _ => <Input />,
				initialValue: data.registerEndpoint.login
			},
			{
				name: 'endpoint_register',
				title: '/register endpoint',
				customRender: _ => <Input />,
				initialValue: data.registerEndpoint.register
			},
			{
				name: 'endpoint_upload',
				title: '/upload endpoint',
				customRender: _ => <Input />,
				initialValue: data.registerEndpoint.upload
			},
			{
				name: 'requirement',
				title: 'Requirements',
				customRender: _ => (
					<List dataSource={slugs} renderItem={(item, index) => 
						(<List.Item><Checkbox key={item} checked={data.requirement.indexOf(item) != -1} onClick={(e) => this.handleUpdateRequirements(e, index)} >{item}</Checkbox></List.Item>)}/>
				),
				initialValue: data.registerEndpoint.status
			},
			{
				name: 'slug',
				title: 'Service slug',
				customRender: _ => <Input />,
				initialValue: data.slug
			},
			{
				name: 'tags',
				title: 'Service tags',
				customRender: _ => <Input/>,
				initialValue: data.tags
			}

			// {
			// 	name: 'username',
			// 	title: 'Username:',
			// 	rules: [{
			// 		message: 'must be human name',
			// 		required: true
			// 	}],
			// 	initialValue: 'John Doe',
			// 	customRender: _ => <Input/>
			// },
			// {
			// 	name: 'email',
			// 	title: 'Email:',
			// 	rules: [{
			// 		type: 'email',
			// 		message: 'must be email'
			// 	}],
			// 	initialValue: '',
			// 	placeholder: 'your email',
			// 	customRender: _ => <Input/>
			// },
			// {
			// 	name: 'password',
			// 	title: 'Password:',
			// 	rules: [{
			// 		type: 'string',
			// 		message: 'must be 8 letters long',
			// 	}],
			// 	initialValue: '',
			// 	customRender: _ => <Input type="password"/>
			// },
		]
		return (
            <Form onSubmit={this._handleSubmit}>
			{
				fields.map((item) => {
					let { name, title, rules, initialValue, customRender, ...extraInfo } = item;
					const displayComp = customRender(initialValue);
					return (
						<FormItem key={name} label={title} {...formItemLayout}>
						{getFieldDecorator(name, {
							rules: rules,
							initialValue: initialValue,
							...extraInfo
						})(displayComp)}
						</FormItem>
					)
				})
			}
				<Button type='primary' htmlType='submit'>
					Update
				</Button>
			</Form>
		);
	}
}

export default Form.create()(ServiceUpdate);