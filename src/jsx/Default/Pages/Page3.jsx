import React, {useEffect} from 'react';
//import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import {Order} from '/js/orderAPI.js';

//import {actions} from '/js/actions.js';

class Page3 extends React.Component {
	
		constructor(props){
			super(props)
			if(!props.order.fName) props.history.push('/')
		}
	
		clear = () =>{
			this.props.update( new Order() );
		}
	
	
		data = [
			{label: "Order ID", value: this.props.order.id },
			{label: "Name", value: this.props.order.lName + ", " + this.props.order.fName },
			{label: "Quantity", value: this.props.order.quantity },
			{label: "Price", value: "$" + (this.props.order.quantity * 12.99) }
		]
	
		render() { 
			return (
				<div className="page3" >
					<h2>Order Successfull!</h2>
					<div className="panel panel-default form-horizontal">
						<div className="panel-body">
							<table >  
								<tbody>
								{this.data.map(i=>(
									<tr> 
										<td><label className='control-label'>{i.label}</label></td>
										<td>{i.value}</td>
									</tr>
								))}							
								 </tbody>
							</table>  
							<hr/>
							<div className="text-right">
								<Link to="/" onClick={this.clear}  >
									<button type="button" className="btn btn-primary" >Place Another Order</button> 	
								</Link>
							</div>
						</div>
					</div>
				</div>
			)
		}
}

export default withRouter(Page3);


/*
const mapStateToProps = (state, ownProps) => {
	
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch),
})

export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page3));

*/