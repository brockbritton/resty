import React, {useState, useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';

import './App.scss';
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
  headers: object;
  results: Array<Result>;
} ;

function App(): React.ReactElement {

  const [data, setData] = useState<DataType>();
  const [requestParams, setRequestParams] = useState<RequestParams>({
    method: '',
    url: '',
  });

  useEffect(() => {
    if (!(requestParams.url === '')) {
      console.log('I AM THE PARAMS', requestParams)
      callAxios(requestParams);
    }
  }, [requestParams]);

  const callApi = (newRequestParams: RequestParams ) => { 
    //calls the axios function using useEffect
    if (newRequestParams.url.length === 0) {
      alert('Please enter a URL');
    } else {
      setRequestParams(newRequestParams);
    }
  }

  const callAxios = async (requestParams: RequestParams) => {
    const response = await axios({
      method: requestParams.method,
      url: requestParams.url,
    });
    console.log('I AM THE RESPONSE', response.data)
    //response.headers
    setData({
      headers: response.headers,
      results: response.data.results,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {data ? <Results data={data} /> : null}
      <Footer />
    </React.Fragment>
  );
  
}

export default App;
