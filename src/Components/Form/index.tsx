import React, {useState} from 'react';
import './Form.scss';

export type FormData = {
  method: string;
  url: string;
};

export interface FormProps {
  handleApiCall: (arg0: FormData) => void;
}

function Form(props: FormProps): React.ReactElement {
  
  const [method, setMethod] = useState<string>('GET');
  const [url, setUrl] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input data-testid='url-input' name='url' type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <button id="get" onClick={() => setMethod('GET')}>GET</button>
        <button id="post" onClick={() => setMethod('POST')}>POST</button>
        <button id="put" onClick={() => setMethod('PUT')}>PUT</button>
        <button id="delete" onClick={() => setMethod('DELETE')}>DELETE</button>
      </label>
    </form>
  );
}

export default Form;
