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
    <img src={props.src} alt={props.alt}/>
  )
}

class MovieItem extends React.Component {
  render() {
    const {data: {title, rate, image}} = this.props;
    return (
      <div>
        <Image src={image} alt={title}/>
        <p>{title}</p>
        <p>{rate}</p>
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
