import React, { Component } from 'react';
import './style.css';

class Blog extends Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json(); 

    this.setState({ articles: posts })
  }

  render() {
    return (
      <div>
        {
          this.state.articles.map(article => (
            <div key={article.title}>
              <p  className="card"
                  style={ { backgroundColor: 'red' } }>
                {article.title}
              </p>
            </div>
          ))
        }
      </div>
      );
  }
}

export default Blog;