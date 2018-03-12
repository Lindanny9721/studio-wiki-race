import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class WikiLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links : "Loading..."
        };
    }
    componentDidMount() {
        var self = this;
        WikiApi.getLinks(this.props.title).then(function(titles) {
            for (var i = 0; i < titles.length; i++) {
                console.log(titles[i]);
            }
            self.setState({ links: titles });
        });
    }
      render() {
    return (
      <div>
      {this.state.links}
      </div>
    );
  }
}