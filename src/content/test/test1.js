import React, {Component} from 'react';



class WaterIsBoil extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const temper=this.props.temperature;
    return <div>the water is {temper>=100 ? '' : 'not'} boil</div>;}
}

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);

  }
  handleChange(e){
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
  	const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
    const scale=scaleName[this.props.scale];
    return <div>
          {scale}
          <input value={this.props.temperature} type="text" onChange={this.handleChange}/>
        </div>
  }
}

export default class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state={scale : 'c', temperature : ''}
    this.onCTemperatureChange=this.onCTemperatureChange.bind(this);
    this.onFTemperatureChange=this.onFTemperatureChange.bind(this);
  }
   toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

 toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
 tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
  onCTemperatureChange(value){
    this.setState({scale : 'c' , temperature : value});
  }
  onFTemperatureChange(value){
    this.setState({scale : 'f' , temperature : value});
  }
  render(){
    const temper=this.state.temperature;
    const scale=this.state.scale;
    const cTemper=scale==='c'? temper : this.tryConvert(temper,this.toCelsius);
    const fTemper=scale=='f'? temper :  this.tryConvert(temper,this.toFahrenheit);
    return <div>
          <TemperatureInput scale='c' temperature= {cTemper} onTemperatureChange={this.onCTemperatureChange}/>
          <TemperatureInput scale='f' temperature= {fTemper} onTemperatureChange={this.onFTemperatureChange}/>
          <WaterIsBoil temperature = {cTemper}/>
      </div>
  }
}

