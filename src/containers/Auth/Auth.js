import React from "react"

// own components
import "./Auth.scss"
import Login from "../Login/Login"
import Button from "../../components/Button/Button"
import {LogOut, HelpCircle, UserPlus} from "react-feather"


function Auth() {
  return (
    <div className="Auth">
      <div className="top-header auth-wrapper">
        <Button type={"muted"} title={"Выйти из игры"} onClick={() => console.log("Выйти из игры")} icon={<LogOut   />} />
        
        <Button type={"muted"} title={"Тех.Поддержка"} onClick={() => console.log("Тех.Поддержка")} icon={<HelpCircle   />} />
      </div>
      <div className="login-component__wrapper auth-wrapper">
      <Login />
        <div className="login-component-create">
          <h3>Ты еще не с нами?</h3>
          <img src={require("../../assets/image/login/create-new-art.png")} alt="create-new art" />
          <Button type={"primary"} title={"Создать акаунт"} onClick={() => console.log("Создать акаунт")} icon={<UserPlus   />} />
        </div>
      </div>
      <div className="footer auth-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </div>
  )
}

export default Auth