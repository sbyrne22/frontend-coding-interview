'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { fetchPhotos } from '@/lib/pexels';
// import { mockPhotos } from '@/mock/photos';
import { Photo } from '@/types/photos';
import PhotoCard from '@/components/PhotoCard';
import Logo from '@/components/Logo';
import styles from './photos.module.css';

export default function PhotosPage() {

    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        if (isLoading) return;

        if (!isAuthenticated) {
            router.push('/');
            return
        }

        fetchPhotos().then(setPhotos);
        // setPhotos(mockPhotos);
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
        return null; // or a spinner
    }

    if (!isAuthenticated) {
        return null; // prevents flash redirect loop
    }

    return (
        <div>
            <div className={styles.headingSection}>
                <Logo />
                <h1 className="headline">All Photos</h1>
            </div>
            {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    )
}