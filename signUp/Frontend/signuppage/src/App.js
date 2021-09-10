import React , {component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends React.Component{
    constructor(){
        super()
        this.state= {
            userId : '',
            Lastname : ''
        }
        this.changeId = this.changeId.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeId(event){
        this.setState({
            userId : event.target.value
        })
    }
    changepassword(event){
        this.setState({
            password : event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            userId : this.state.userId,
            password : this.state.password
        }
        axios.post('http://localhost:8007/signUp/add',registered)
        .then(
            res => console.log(res.data)
        )

        this.setState({
            userId : ' ',
            password : ' '
        })
    }
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" placeholder="Enter your Id" onChange={this.changeId} 
                            value={this.state.userId} className='form-control form-group'/>

                            <input type="text" placeholder="Enter your Password" onChange={this.changepassword} 
                            value={this.state.password} className='form-control form-group'/>

                            <input type = 'submit' className='btn btn-danger btn-block' value='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
