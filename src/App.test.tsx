
import React from 'react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, screen} from '@testing-library/react';
import App from './App.tsx';

const server = setupServer(
    http.get('/*', () => {
      return HttpResponse.json({results: [{
        name: "banananana", url: "https://banana.com"
      }]})
    }),
    http.post('/*', () => {
      return HttpResponse.json({results: [{
        name: "banananana", url: "https://banana.com"
      }]})
    }),
    http.put('/*', () => {
      return HttpResponse.json({results: [{
        method: "banananana", url: "https://banana.com"
      }]})
    }),
    http.delete('/*', () => {
      return HttpResponse.json({results: [{
        method: "banananana", url: "https://banana.com"
      }]})
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Integration app testing:', () => {
    test('Recieves request params from Form component and updates state', async () => {
        render(<App />)
        const postBtn = screen.getByText('GET');
        const urlInput = screen.getByTestId('url-input');
        fireEvent.change(urlInput, { target: { value: 'banana.com' }});
        fireEvent.click(postBtn);
        fireEvent.click(screen.getByText('GO!'));
        screen.debug();
        const result = await screen.findByText(/banananana/);
        expect(result).toBeVisible();
    });
});