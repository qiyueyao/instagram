import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Likes from './likes';
import Comments from './comments';

class Posts extends React.Component {
    /* Display number of likes a like/unlike button for one post
     * Reference on forms https://facebook.github.io/react/docs/forms.html
     */

    constructor(props) {
        super(props);
        this.state = {
        age: '',
        img_url: '',
        owner: '',
        owner_imag_url: '',
        };
    }

    componentDidMount() {
        this.setState({
            img_url: "./post.png",
            owner: "User",
            owner_img_url: "./user.png",
            all_comments: "./all"
          });
    }
    render() {
        return (
        <div className="border">
            <div>
            <img src={this.state.owner_img_url} alt="1" className="photo1" />
            </div>
            <div className="name">{this.state.owner}</div>
            <div><img src={this.state.img_url} alt="2" className="photo2" /></div>
            <div className="content">
            <Likes />
            <br />
            <a href={this.state.all_comments}>View All Comments</a>
            <Comments />
            </div>
            <br />
        </div>
        );
    }
}

export default Posts;
