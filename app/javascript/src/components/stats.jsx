import React, {Component} from "react"
import '../styles.scss';

class Stats extends Component {

    constructor() {
        super()
        this.state = {
           username: " "
        }
    }

    /*
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
  */

    render() {
        return (
    <React.Fragment>
        <div className="border_stats">
            <p><span className="p_stats">Username:</span>{this.state.username}</p>
            <p><span className="p_stats">Tweet number:</span> 9999</p>
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