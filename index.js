/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './core/store'

const createdStore = store();

const RNRedux = () => (
<Provider store={createdStore}>
<App/>
</Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux)
