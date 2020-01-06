import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { User, Lock } from "react-feather";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
class Login extends Component {
  render() {
    return <div className="Login">
      <img src={require("../../assets/image/logo.png")} alt="rush role play logo"/>
      <div className="login-wrapper">
        <Input placeholder={"Введите логин"} icon={<User />} type={"text"}/>
        <Input placeholder={"Введите пароль"} icon={<Lock />} type="password" />
        <div className="checkbox">
          <label><input type="checkbox" /> <span className="checkmark"></span> Быстрый вход</label>
        </div>

        <Button type={"secondary"} title={"Войти в игру"} onClick={() => console.log("Создать акаунт")}  />
        <span className="forgot-password" onClick={() => console.log("Забыли пароль?")}>Забыли пароль?</span>
      </div>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}
 
export default connect(
  mapStateToProps
)(Login);
