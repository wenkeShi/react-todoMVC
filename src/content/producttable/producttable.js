import React,{Component} from 'react';
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
 
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}

	handleChange(e){
		this.props.onSearchBarChange(e.target.value);
	}
	handleClick(e){
		this.props.onStockOnly(e.target.checked);
	}

	render(){
		return <div>
					<input placeholder="Search..."  onChange={this.handleChange}  value={this.props.value} type='text'/>
					<div><input type='checkbox' onClick={this.handleClick} checked={this.props.isStockOnly} />Only show products in stock</div>
				</div>
		
	}
}

class ProductRow extends Component {
	constructor(props){
		super(props);
	}
	render(){
		let color=this.props.stocked ? '' : 'red';
		let style={color : color}
		return <tr>
			<td style={style}>{this.props.productName}</td>
			<td>{this.props.productPrice}</td>
		</tr> 
	}
}

class ProductCategoryRow extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <tr><th colSpan='2'>{this.props.category} </th></tr>
	}
}
class ProductTable extends Component{
	constructor(props){ 
		super(props);
	}

	render(){
		let rows=[];
		let lastCategory=null;
		PRODUCTS.forEach((product)=>{
			if((!product.stocked&& this.props.isStockOnly)||product.name.indexOf(this.props.searchName)===-1){return;}
			if(!(product.category===lastCategory)){rows.push(<ProductCategoryRow category={product.category} key={product.category}/>); lastCategory=product.category;}
			rows.push(<ProductRow productName={product.name} productPrice={product.price} stocked={product.stocked} key={product.name}/>);
		});

		return <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
							{rows}
					</tbody>
		</table>
	}
}


export default class FilterableProductTable extends Component{
	constructor(props){
		super(props);
		this.state={
			searchName  : '',
			isStockOnly : false
		};
		this.handleStockOnly=this.handleStockOnly.bind(this);
		this.handleSearchChange=this.handleSearchChange.bind(this);
	}
	handleStockOnly(value){
		this.setState({isStockOnly : value});
	}
	handleSearchChange(value){
		this.setState({searchName : value});
	}
	render(){
		return <div>
			<SearchBar value={this.state.searchName} isStockOnly={this.state.isStockOnly} onStockOnly={this.handleStockOnly} onSearchBarChange={this.handleSearchChange}/>
			<ProductTable isStockOnly={this.state.isStockOnly} searchName={this.state.searchName}  />
		</div>
	}
}