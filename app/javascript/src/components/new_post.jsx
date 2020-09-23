import React from 'react';
import '../styles.scss';

function NewPost() {
    return (
        <React.Fragment>
            <div className="border_about">
                <form>
                    <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="What is happening?"></textarea>
                        <span>Upload Image</span>
                        <button type="submit" class="btn btn-primary">Tweet</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default NewPost;