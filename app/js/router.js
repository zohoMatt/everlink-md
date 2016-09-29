/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './model/store';

import MainPage from './components/MainPage';

const app = document.getElementById('app');
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={MainPage}></Route>
		</Router>
	</Provider>,
	app
);
