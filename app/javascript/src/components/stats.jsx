import React, {Component} from "react"
import '../styles.scss';
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Stats extends Component {

    _isMounted = false;

    constructor() {
        super()
        this.state = {
           username: " ",
           tweets: [],
        }
    }

    componentDidMount () {
        this._isMounted = true;
        if (this._isMounted) {
        fetch('/api/authenticated')
          .then(handleErrors)
          .then(data => {
              console.log(data)
              this.setState({
                username: data.username,
              })
          })
        }
  }

  // componentDidUpdate() {
  //   fetch(`/api/users/${this.state.username}/tweets`)
  //   .then(handleErrors)
  //   .then(data => {
  //    this.setState({
  //    tweets: data.tweets
  //   })
  // })
  // }

  componentWillUnmount() {
    this._isMounted = false;
  }
  

    render() {
        return (
    <React.Fragment>
        <div className="border_stats">
            <p><span className="p_stats">Username: </span>{this.state.username}</p>
            <p><span className="p_stats">Tweet number:</span> {this.state.tweets.length}</p>
            <p><span className="p_stats">Trends:</span></p>
            <span className="list_stats">
            <li>#Example trend</li>
            <li>#Another example trend</li>
            <li>#Lorem Ipsum</li>
            </span>
        </div>
    </React.Fragment>
  )
        }
    }

export default Stats;