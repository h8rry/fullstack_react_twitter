import React from 'react';
import '../styles.scss';

function ExamplePost() {
    return (
        <React.Fragment>
          <div className="border_about">
            <div className="container">
            <div className="row">
            <div className="col-8">
            <p>Username@ username</p>
            <p>Example tweet goes here...</p>
            </div>
            <div className="col-4">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default ExamplePost;