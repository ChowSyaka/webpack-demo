require("./../css/style.css");
require("./../css/base.css");

const React = require("react");
const ReactDOM = require("react-dom");


var LogoImg = require("./../image/logo.png");

//logo组件
var Logo = React.createClass({
	render: function(){
		return (
			<div className="logo">
				<div className="logo-container">
					<img src= {LogoImg} />
				</div>
			</div>
		)
	}
})

//登录切换按钮组件
var LoginTable = React.createClass({
	render: function() {
		if(this.props.clasName){
			return <li className = "active" >{this.props.titles}</li>
		}else{
			return <li >{this.props.titles}</li>
		}
		
	}
})

//登录内容
var LoginBody = React.createClass({
	render: function() {
		if(!this.props.clasName){
			return  <span>
						<input type="text" className="login-code" placeholder="验证码" />
						<img src="/srm/login/verifycode" className="captcha-img" />
					</span>
		}else{
			return  <span></span>
		}
		
	}
})
//登录组件
var Login = React.createClass({
	getInitialState: function() {
    	return {active: true};
  	},
  	handleClick: function(event) {
  		if(event.target.className == "active"){
			return;
		}else{
			this.setState({active: !this.state.active});
		}
  			
	},
	render: function() {
	    return (
      		<div className="login-container">
	      		<div className="login-area">
	      			<ul className="login-tab" onClick={this.handleClick} >
			      		<LoginTable clasName={this.state.active} titles="CEVT采购平台" />
			      		<LoginTable clasName={!this.state.active} titles="易云采购平台" />
					</ul>
					<div className="login-border">
						<div className="active">
						<input type="text" value="" name="loginName" className="login-name" placeholder="用户名" />
						<input type="password" value="" name="loginPassword" className="login-password" placeholder="密码" />
						<LoginBody clasName={this.state.active} />
						<input type="button" value="登录" name="loginIn" className="loginBtn" />
						<p className="login-info">没有帐号？<a className="register">立即注册 </a><a className="forget">忘记密码？</a></p>
					</div>

					</div>
				</div>
			</div>
	    );
	}
});



ReactDOM.render(
	<div className="banner">
		<Logo />
		<Login />
	</div>,
	document.querySelector("#app")
);



// $(".login-tab li").on("click",function(){
// 	$(".active").removeClass("active");
// 	$(this).addClass("active");
// 	$(".login-border div").addClass("fn-hide");
// 	var cid=$(this).attr("cid");
// 	$("."+cid).removeClass("fn-hide");
// });
