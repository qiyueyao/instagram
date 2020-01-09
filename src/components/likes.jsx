import React from 'react';
import PropTypes from 'prop-types';

class Likes extends React.Component {
    /* Display number of likes a like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { num_likes: 0, is_liked: false };
        this.activeLike = this.activeLike.bind(this);
    }

    componentDidMount() {
        // Call REST API to get number of likes
        this.setState({
            num_likes: 5,
            is_liked: false,
        });
    }
    activeLike() {
        let b = this.state.num_likes;
        let a = this.state.is_liked ? b - 1 : b + 1
        this.setState(prevState => ({
            num_likes: a,
            is_liked: !prevState.is_liked
        }));
    }

    render() {
        return (
            <div className="likes">
                <p>{this.state.num_likes} like{this.state.num_likes !== 1 ? 's' : ''}</p>
                <button id="like-unlike-button" onClick={this.activeLike}>
                    {this.state.is_liked ? 'unlike' : 'like'}
                </button>
            </div>
        );
    }
}

export default Likes;
