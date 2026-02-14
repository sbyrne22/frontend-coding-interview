import { render, screen } from '@testing-library/react';
import { AuthProvider } from '@/context/AuthContext';
import PhotosPage from '../page';

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe('PhotosPage auth behavior', () => {
    it('redirects to sign in if not authenticated', () => {
        // Render the page inside the real provider but with localStorage cleared
        localStorage.clear();

        render(
          <AuthProvider>
            <PhotosPage />
          </AuthProvider>
        );

        expect(pushMock).toHaveBeenCalledWith('/');
    });
});