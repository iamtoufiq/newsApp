import React, { Component } from "react";
import NewsAppComponets from "./NewsAppComponets";
import Spinner from "./Spinner";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "news-com-au",
  //       name: "News.com.au",
  //     },
  //     author: null,
  //     title: "Aussie captain exposed, protest rocks cricket",
  //     description:
  //       "<p>Australian captain Pat Cummins says he will not feature as an ambassador for Cricket Australia&rsquo;s biggest financial backer. </p>",
  //     url: "https://www.news.com.au/sport/cricket/aussie-captain-pat-cummins-exposed-as-sportswashing-protest-rocks-cricket/news-story/07f293858e1a583a903f4bef17583750",
  //     urlToImage:
  //       "https://content.api.news/v3/images/bin/c62fe81976fc8b949a576f267f412ae2",
  //     publishedAt: "2022-10-18T02:47:00Z",
  //     content:
  //       "Australian captain Pat Cummins says he will not feature as an ambassador for Cricket Australia’s biggest financial backer. \r\nThe Test skipper on Tuesday spoke publicly as a storm erupted about his bo… [+6860 chars]",
  //   },
  //   {
  //     source: {
  //       id: "google-news-in",
  //       name: "Google News (India)",
  //     },
  //     author: "https://www.facebook.com/bbcnews",
  //     title:
  //       "Roger Binny: The 'good guy' to head the world's richest cricket board",
  //     description:
  //       "The soft-spoken former India all-rounder's decisions at the top will shape cricket globally.",
  //     url: "https://www.bbc.com/news/world-asia-india-63274980",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/B42F/production/_127172164_w915518373.jpg",
  //     publishedAt: "2022-10-18T00:07:35+00:00",
  //     content:
  //       "Roger Michael Humphrey Binny - many friends like to call him by his full name - is one of the good guys. \r\nHis most likely elevation as president of the Board of Control for Cricket in India (BCCI) i… [+4814 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-sport",
  //       name: "BBC Sport",
  //     },
  //     author: null,
  //     title: "'Performance of their lives' - but Scots need more",
  //     description:
  //       "Stunning two-time T20 world champions West Indies is one of the greatest moments in Scottish cricket - but the team's task has only just begun.",
  //     url: "http://www.bbc.co.uk/sport/cricket/63282537",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/C942/production/_127222515_scot.jpg",
  //     publishedAt: "2022-10-17T17:22:28.9039094Z",
  //     content:
  //       "Stunning two-time T20 world champions West Indies is one of the greatest moments in Scottish cricket - but the team's task has only just begun.\r\nThe Scots beat Group B's favourites by 42 runs in the … [+4692 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  constructor() {
    super();
    // console.log("hello i am a constructor of news componets");
    this.state = {
      // article: this.articles,
      article: [],
      loading: true,
      page: 1,
    };
    console.log("i am in constructor of news app");
  }
  async componentDidMount() {
    console.log("i am in component did mount of news app");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9b611928f004fbda64a5f1232c36d94&pageSize=${this.props.pagesize}&page=1`;
    this.setState({
      loading: true,
    });
    let respon = await fetch(url);
    let respOnseJson = await respon.json();
    console.log(respOnseJson);
    this.setState({
      article: respOnseJson.articles,
      totalResults: respOnseJson.totalResults,
      loading: false,
    });
  }

  handleNextOneClick = async () => {
    console.log("next");
    if (
      Math.ceil(this.state.totalResults / this.props.pagesize) <
      this.state.page + 1
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9b611928f004fbda64a5f1232c36d94&pageSize=${
        this.props.pagesize
      }&page=${this.state.page + 1}`;
      this.setState({
        loading: true,
      });
      let respon = await fetch(url);
      let respOnseJson = await respon.json();
      console.log(respOnseJson);
      this.setState({ article: respOnseJson.articles, loading: false });

      this.setState({
        page: this.state.page + 1,
      });
    }
  };
  handlePreviousOneClick = async () => {
    console.log("preious");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f9b611928f004fbda64a5f1232c36d94&pageSize=${
      this.props.pagesize
    }&page=${this.state.page - 1}`;
    let respon = await fetch(url);
    let respOnseJson = await respon.json();
    console.log(respOnseJson);
    this.setState({ article: respOnseJson.articles });

    this.setState({
      page: this.state.page - 1,
    });
  };
  render() {
    console.log("i am inside render methd of news app");
    let fakeImage =
      "https://opt.toiimg.com/recuperator/img/toi/m-69414758/69414758.jpg";
    const fakeDesciption =
      " “Keep your face always toward the sunshine—and shadows will fall behind you.” —Walt Whitman";
    return (
      <div className=" container my-3  " style={{ border: "2px solid red" }}>
        <h1 className="text-center">our topHeadlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.article.map((elem, index) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <NewsAppComponets
                    title={elem.title ? elem.title : "sorry This is null"}
                    urlToImage={elem.urlToImage ? elem.urlToImage : fakeImage}
                    description={
                      elem.description ? elem.description : fakeDesciption
                    }
                    url={elem.url ? elem.url : "jnl"}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousOneClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextOneClick}
            disabled={
              Math.ceil(this.state.totalResults / this.props.pagesize) <
              this.state.page + 1
            }
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
