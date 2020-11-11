import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render() {
        console.log(this.context)
        return (
            <button className="light-theme">Switch Theme</button>
        )    
    }
}

Button.contextType = ThemeContext

export default Button