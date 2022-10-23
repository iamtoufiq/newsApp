import React, { Component } from "react";

export class NewsAppComponets extends Component {
  // constructor() {
  //   super();
  //   // console.log("hello i am a constructor of news  itesm componets");
  // }
  render() {
    // let { description, title, url, urlToImage, content, author, publishedAt } =
    let { description, title, urlToImage, url } = this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{ width: "18rem", border: "2px solid black" }}
        >
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">{description.slice(0, 70)}....</p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More &gt;
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsAppComponets;
