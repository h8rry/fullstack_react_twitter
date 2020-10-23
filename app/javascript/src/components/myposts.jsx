import React, {Component} from "react"
import '../styles.scss';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Myposts extends Component {
    constructor() {
        super()
        this.state = {
           text: "This is text",
           tweets: [],
           authenticated: false,
           username: " "
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    mySubmitHandler = (event) => {
        alert("You are submitting " + this.state.text);
        event.preventDefault();
      }

    componentDidMount () {
        fetch('/api/authenticated')
          .then(handleErrors)
          .then(data => {
              console.log(data)
              this.setState({
                username: data.username,
              })
          })
  }

  componentDidUpdate() {
    fetch(`/api/users/${this.state.username}/tweets`)
    .then(handleErrors)
    .then(data => {
     this.setState({
     tweets: data.tweets
    })
  })
  }
    
    render() {
        const { tweets } = this.state;
        return (
        <React.Fragment>
            <div className="border_about">
             Current user: {this.state.username}
                <form onSubmit={this.mySubmitHandler}>
                    <div class="form-group">
                        <textarea 
                        class="form-control" 
                        rows="3" 
                        placeholder="What is happening?"
                        onChange={this.handleChange} 
                        value={this.state.text} 
                        name="text" 
                        >
                        </textarea>

                        <span>Upload Image</span>
                        <button type="submit" class="btn btn-primary">Tweet</button>
                    </div>
                </form>
            </div>

          <div className="border_about">
            <div className="container">
            <div className="row">
            <div className="col-8">
            <p>Username@ username</p>
            <p>{this.state.text}</p>
            </div>
            <div className="col-4">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
            </div>            
            </div>
            </div>

            {tweets.map(tweet => {
              return (
            <div className="border_about">
            <div className="container">
            <div className="row">

               
            <div key={tweet.id}  className="col-8">
            <p>Username@ {tweet.username}</p>
            <p>{tweet.message}</p>
            </div>
            <div className="col-4">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
    
    </div>            
            </div>
            </div>
              )
            })}

            

        </React.Fragment>
    );
}
}

export default Myposts;