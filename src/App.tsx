import React, {useState} from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

export type RequestParams = {
  method: string,
  url: string,
}

export type Result = {
  name: string;
  url: string;
};

export type DataType = {
  count: number;
  results: Result[];
} | null;

function App(): React.ReactElement {

  const [data, setData] = useState<DataType>(null);
  const [requestParams, setRequestParams] = useState<RequestParams>({
    method: '',
    url: '',
  });

  const callApi = (requestParams: RequestParams ) => { 
    setData({
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    });
    setRequestParams(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
  
}

export default App;
