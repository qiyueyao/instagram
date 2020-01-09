import React from 'react';
import PropTypes from 'prop-types';

class Comments extends React.Component {
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { comments: [], newComment: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Call REST API
        this.setState({
            comments: [{owner: "User", text: "Comment Text", commentid: 0}],
        });
    }

    handleSubmit(event) {
        const array = this.state.comments;
        const newStruct = {
            commentid: this.state.comments.length,
            owner: "User",
            text: this.state.newComment,
        };
        array.push(newStruct);
        this.setState({ comments: array, newComment: '', });
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({ newComment: event.target.value });
    }




    render() {
        // Render number of likes
        // let postid = this.props.url;
        const space = '  ';
        const output = this.state.comments.map((comment) =>
            <p key={comment.commentid}>
                <strong>
                {comment.owner}
                </strong>
                {space}
                {comment.text}
            </p>
        );
        return (
            <div className="comments">
                {output}
                <form onSubmit={this.handleSubmit} id="comment-form">
                    Add Comment Here:
                    <input type="text" value={this.state.newComment} onChange={this.handleChange} />
                    <input type="submit" value="Comment" />
                </form>
            </div>
        );
    }
}

export default Comments;
