import React,{Component} from 'react';
import '../../iconfont.css'
import './navstyle.css';
export default class TopNav extends Component{
	render(){
		return <div className="top-nav"> 
		<div className="container">
			<TopNavLeft />
			<TopNavRight />
		</div>
		</div>
	}
}

class TopNavLeft extends Component{
		render(){
			return <ul className="top-nav-left">
		<li><a href="https://www.mi.com/index.html" target='_blank'>小米商城</a></li>
		<li><a href="http://www.miui.com/" target='_blank'>MIUI</a></li>
		<li><a href="http://www.miliao.com/" target='_blank'>米聊</a></li>
		<li><a href="http://game.xiaomi.com/hy/index.html" target='_blank'>游戏</a></li>
		<li><a href="http://www.duokan.com/" target='_blank'>多看阅读</a></li>
		<li><a href="https://i.mi.com/" target='_blank'>云服务</a></li>
		<li><a href="https://jr.mi.com/index.html" target='_blank'>金融</a></li>
		<li><a href="https://www.mi.com/appdownload/" target='_blank'>小米商城移动版</a></li>
		<li><a href="https://static.mi.com/feedback/" target='_blank'>问题反馈</a></li>
		</ul>
		}
}

class TopNavRight extends Component{
	render(){
		return <div className="top-nav-right">
				 <ul>
				 	<li><a href="https://account.xiaomi.com/" target='_self'>登录</a></li>
				 	<li><a href="https://account.xiaomi.com/pass/register" target='_self'>注册</a></li>
				 	<li><a href="https://account.xiaomi.com/" target='_self'>消息通知</a></li>
				 </ul>
				 <TopNavBuyCar />
			   </div>
	}
}

class TopNavBuyCar extends Component{
	
	constructor(props){
		super(props);
		this.state={goodCount:0};
	}
	render(){
		return <div className="top-nav-buycar">
					<i className="iconfont">&#xe602;</i>
					<span>购物车({this.state.goodCount})</span>
					<div className="buycar-tips">购物车中还没有商品，赶紧选购吧！</div>
		       </div>
	}

}