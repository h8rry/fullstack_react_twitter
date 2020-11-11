import React, {Component} from "react"
import '../styles.scss';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Post extends Component {
    constructor() {
        super()
        this.state = {
           text: "Type your message here",
           tweets: [], 
           username: " ",
           logged_user: "example user"
        }
        this.handleChange = this.handleChange.bind(this)
      /*  this.deletePost = this.deletePost.bind(this) */
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

      deletePost (id, user)  {

      if (user == this.state.logged_user) {

      fetch(`/api/tweets/${id}`, safeCredentials({
        method: 'DELETE',
      }))
        .then(handleErrors)
        .catch(error => {
          this.setState({
            error: 'Could not delete tweet',
          })
          console.log("Could not delete tweet")
        })
      } else {
        console.log("Could not delete tweet")
      }
    }

    componentDidMount () {
      fetch('/api/authenticated')
        .then(handleErrors)
        .then(data => {
            console.log(data)
            this.setState({
              logged_user: data.username,
            })
        })

        fetch('/api/tweets').then(handleErrors).then(data => {
          console.log(data);
          this.setState({tweets: data.tweets})
        })

    }

    render() {
        const { tweets } = this.state;
        return (
        <React.Fragment>
            <div className="border_write_tweet">
                <form onSubmit={this.newPost}>
                    <div class="form-group">
                        <textarea 
                        class="form-control" 
                        rows="3" 
                        placeholder="What is happening?"
                        onChange={this.handleChange} 
                        value={this.state.text} 
                        onFocus={(e) => {
                          console.log('Focused on input');
                          this.setState({
                            text: " "
                        })
                        }}
                        name="text" 
                        >
                        </textarea>

                        <span>Upload Image</span>
                        <button type="submit" class="btn btn-secondary tweet_button">Tweet</button>
                    </div>
                </form>
            </div>

            {tweets.map(tweet => {
              return (
            <div className="border_tweets">
            <div className="container">
            <div className="row">

               
            <div key={tweet.id}  className="col-8">
            <p className="p_stats">Username@ {tweet.username}</p>
            <p>{tweet.message}</p>
            </div>

            <div className="col-4">
            <button onClick={ () => this.deletePost(tweet.id, tweet.username)} type="button" class="btn btn-danger delete_button">Delete</button>
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