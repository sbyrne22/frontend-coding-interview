import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '@/context/AuthContext';
import SignInPage from '../page';

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe('SignInPage', () => {
    beforeEach(() => {
        localStorage.clear();
        pushMock.mockClear();
    });

    it('submits form and sets auth', async () => {
        render(
            <AuthProvider>
                <SignInPage />
            </AuthProvider>
        );

        await userEvent.type(screen.getByLabelText(/username/i), 'test@test.com');
        await userEvent.type(screen.getByLabelText(/password/i), 'password');

        await userEvent.click(screen.getByRole('button', { name: /sign in/i }));

        expect(localStorage.getItem('auth')).toBe('true');
        expect(pushMock).toHaveBeenCalledWith('/photos');
    });
});