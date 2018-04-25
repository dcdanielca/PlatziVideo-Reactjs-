import React from 'react';
import {render} from 'react-dom';
import data from './src/api.json';
import Category from './src/playlist/components/category';

const container = document.getElementById('app');

// ReactDOM.render(qué voy a renderizar, dónde);
render(<Category data={data}/>, app);



