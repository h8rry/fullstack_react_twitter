import React, {Component} from "react"
import '../styles.scss';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Post extends Component {
    constructor() {
        super()
        this.state = {
           text: "Type your message here",
           tweets: [], 
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

      newPost = (e) => {
        console.log("posted")
        if (e) { e.preventDefault(); }
        this.setState({
          error: '',
        });
    
        fetch('/api/tweets', safeCredentials({
          method: 'POST',
          body: JSON.stringify({
            tweet: {
              username: this.state.user,
              message: this.state.text
            }
          })
        }))
          .then(handleErrors)
          .catch(error => {
            this.setState({
              error: 'Could not add tweet',
            })
            console.log("Could not add tweet")
          })

      }

      /* doesn't work */

      deletePost () {
        fetch('/api/tweets/')
        .then(handleErrors)
        .then(data => {
         console.log(data);
         this.setState({
         tweets: data.tweets
        })
      })
      }

      /* doesn't work */

    componentDidMount () {
        fetch('/api/tweets')
        .then(handleErrors)
        .then(data => {
         console.log(data);
         this.setState({
         tweets: data.tweets
        })
      })
      }
    
      componentDidUpdate() {
        fetch('/api/tweets')
        .then(handleErrors)
        .then(data => {
         console.log(data);
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
                <form onSubmit={this.newPost}>
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
            <button onClick={this.deletePost} type="button" class="btn btn-danger">Delete</button>
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

export default Post;