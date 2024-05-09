
import Form from './index';
import { render, screen, fireEvent} from '@testing-library/react';

describe('Testing Form Component', () => {
    test('Renders GET POST PUT DELETE buttons', async () => {
        render(<Form handleApiCall={console.log} />);
    
        screen.debug(); // this prints the "HTML" in our terminal.
    
        expect(screen.getByText(/GET/)).toBeVisible();
        expect(screen.getByText(/POST/)).toBeVisible();
        expect(screen.getByText(/PUT/)).toBeVisible();
        expect(screen.getByText(/DELETE/)).toBeVisible();
    });

    test('Calls a function on submit', async () => {
        const state = { formData: { method: '', url: ''} };
        const testFunction = (param: {method: string, url: string}) => {
        state.formData = param;
        }

        render(<Form handleApiCall={testFunction}/>)
        const postBtn = screen.getByText('POST');
        const urlInput = screen.getByTestId('url-input');
        fireEvent.click(postBtn);
        fireEvent.change(urlInput, { target: { value: 'test' }});
        fireEvent.click(screen.getByText('GO!'));
        expect(state.formData.method).toBe("POST");
        expect(state.formData.url).toBe("test");
    });
});