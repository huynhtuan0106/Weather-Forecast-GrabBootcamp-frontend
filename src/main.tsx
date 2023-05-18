import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/styles.scss';
// import * as bootstrap from 'bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Provider } from 'react-redux';
import store from '@stores/store';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

import '@utils/axios.config';

import moment from 'moment';

// const mockParams = {
//   latitude: 16.4498,
//   longitude: 107.56235,
//   startDateTime: '2020-12-01T00:00:00',
//   endDateTime: '2020-12-07T23:00:00',
// };

// axios
//   .get(`/weathers`, {
//     params: mockParams,
//   })
//   .then((res) => {
//     console.log('Get weather by coordinates');
//     console.log(JSON.parse(res.request.response));
//   })
//   .catch((err) => console.error(err));

console.log(`Moment: ${moment().format()}`);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
