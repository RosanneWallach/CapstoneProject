import React from 'react'
import axios from 'axios'

class PersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            output: []
        }
    }
    /* Get */
    componentDidMount() {
        axios.get(`https://api.vschool.io/GaryJTwitter/todo/`)
            .then(res => {
                const output = res.data
                /* const persons = res.data
                this.setState({persons}) */
                console.log(res.data)
                this.setState({ output })
            })
    }

    /* handleChange = event => {
        this.setState({_id: event.target.value})
    } */
    /* Delete */
    handleSubmit = event => {
        event.preventDefault()

        axios.delete("https://api.vschool.io/GaryJTwitter/todo/" + this.state._id)
            .then(res => {
                window.location.reload(true)
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    /* Edit */
    //textarea tracking
    handleChangeDD = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleEdits = event => {
        event.preventDefault()

        const edit = {
            description: this.state.description
        }
        /* console.log("https://api.vschool.io/GaryJTwitter/todo/" + this.state._id) */
        axios.put("https://api.vschool.io/GaryJTwitter/todo/5e8196e8f468d266b6c890cc" /* + this.state._id */, edit )
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    render() {

        console.log(this.handleEdits)
        return (
            <React.Fragment>
                {this.state.output.map(person =>
                    <div key={person._id}>
                        <div>
                            <hr />
                            <p>Post ID: {person._id}</p>
                            <p>User: {person.title}</p>
                            <p>Says: {person.description}</p>
                            {/* Delete */}
                            <button type="submit" onClick={() => {
                                return axios.delete(`https://api.vschool.io/GaryJTwitter/todo/${person._id}`)
                                    .then(res => {
                                        console.log(res)
                                        console.log(res.data)
                                    })
                                    .catch(error => console.log(error))
                            }} >Delete</button>
                        
                        {/* Edit */}
                        <form onSubmit={this.handleEdits} className="center">
                            <textarea type="text" onChange={this.handleChangeDD} value={this.state.description} /* onClick={this.handleEdits}  *//>
                            <button type="submit"/*  onClick={() => axios.put(`https://api.vschool.io/GaryJTwitter/todo/${person._id}`)
                                .then(res => {
                                    console.log(res)
                                })
                                .catch(error => console.log(error))}  */>Edit</button>
                        </form>
                        {/* <h1>{this.state.description}</h1>
                        {console.log(`https://api.vschool.io/GaryJTwitter/todo/${person._id}`)}
                        
                        {/* {console.log(person._id)} */}
</div>
                    </div>
                )}
                {/* {this.state.title.map(person => 
                <p key={person._id}>{person.description}</p>)} */}
            </React.Fragment>
        )
    }
}

export default PersonList