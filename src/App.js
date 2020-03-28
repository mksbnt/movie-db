import React from 'react';
import './App.css';

const movie = {
  title: "Hesher",
  rate: 8.1,
  image: "https://lh3.googleusercontent.com/proxy/RZW-DK87fvRzHuJMGCbBdkvd06VXxT3nZVf_4IPU7jqmrFNy9pKjreXuqS1P8zCWw2UDyaWbEAEPDUfLnWK3VKDy0lonIfkqK6c7uBfJUKRfQaE",
  overview: "Hesher is a 2010 American dark comedy/drama film co-written and directed by Spencer Susser and starring Joseph Gordon-Levitt, Rainn Wilson, Natalie Portman (who also produced the film) and Devin Brochu.",
}

function Image(props) {
  return (
    <img width="100%" src={props.src} alt={props.alt}/>
  )
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleLike = () => {
    this.setState({
      like: !this.state.like
    })
  }

  render() {
    const {data: {title, rate, image, overview}} = this.props;
    console.log('state ', this.state)
    return (
      <div style={{maxWidth: "300px"}}>
        <Image src={image} alt={title}/>
        <p>{title}</p>
        <p>{rate}</p>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button type="button" onClick={this.handleLike}
                  className={this.state.like ? "btn--like" : null}>Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie}/>
    </div>
  );
}

export default App;
