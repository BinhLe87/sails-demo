import React, {Component} from 'react';
import { inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom'
import {Table} from 'antd';

@inject("stores")
class ServiceList extends Component{

    state = {
        serviceList: []
    }

    componentDidMount(){
        this.getServiceList();
    }

    getServiceList(){
        const {network} = this.props.stores;
        network.getServiceList()
        .then( data => {
            this.setState({
                serviceList: data.result
            })
        })
        .catch( err => console.log('err: ' ,err))
    }

    render(){
        const columns = [{
            title: 'ID',
            dataIndex: '_id',
        }, {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record, index) => {
                return(
                    <Link to={{pathname: '/services/update', hash: record._id }} >{record.name} </Link>
                )
            }
        }, {
            title: 'Status',
            dataIndex: 'status'
        }]


        return(
            <div>
                <Table dataSource={this.state.serviceList} columns={columns} rowKey="_id" />
            </div>
        )
    }


}

export default ServiceList