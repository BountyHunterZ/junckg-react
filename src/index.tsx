import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
import './alltypes.d.ts'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';


ReactDOM.render(<App />, document.getElementById('root'));

bulmaCarousel.attach('#carousel-demo', {
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    navigation: false,
    pagination: false
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
