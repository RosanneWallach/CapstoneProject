import React from 'react'
import axios from 'axios'

class PersonInput extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = event => {
        this.setState({
            title: event.target.value,
        })
    }
    handleChangeD = event => {
        this.setState({
            description: event.target.value,
        })
    }

    /* Post */
    handleSubmit = event => {
        event.preventDefault()

        const user = {
            title: this.state.title,
            description: this.state.description
        }
        axios.post(`https://api.vschool.io/GaryJTwitter/todo/`, user)
            .then(res => {
                window.location.reload(true)
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }




    render() {
        return (
            <div className="formLayout">
                <form onSubmit={this.handleSubmit} className="pie">
                    <label>UserName:
                    <textarea type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <label>Comment: <textarea type="text" name="description" onChange={this.handleChangeD} /> </label>
                    <button type="submit">Add</button>
                </form>
                {/* <h1>{this.state.title}</h1>
            <h1>{this.state.description}</h1> */}
            </div>
        )
    }
}

export default PersonInput