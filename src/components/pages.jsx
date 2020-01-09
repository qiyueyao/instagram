import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Posts from './posts';
import Navigation from './navigation';

class Pages extends React.Component {

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { results: [] };
        this.generatePages = this.generatePages.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.setState({
            results: [{postid:1},{postid:2},{postid:3},{postid:4},{postid:5}]
        });
    }

    generatePages() {
        this.setState({results: [{postid:1},{postid:2},{postid:3},{postid:4},{postid:5}]});
    }

    refresh() {
        this.setState({ results: [], next: "" });
        setTimeout(() => {
            this.setState({ results: []});
        }, 3000);
    }

    render() {
        const output = this.state.results.map((page) =>
            <section key={page.postid}> <Posts /> <br />
            </section>);
        return (
            <div>
            <Navigation />
            <div className="main">
                <InfiniteScroll
                    dataLength={output.length}
                    pullDownToRefresh
                    pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
                    releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
                    refreshFunction={this.refresh}
                    next={this.generatePages}
                    hasMore={true}
                    loader={<h1>Loading...</h1>}>
                    {output}
                </InfiniteScroll>
            </div>
            </div>
        );

    }
}

export default Pages;
