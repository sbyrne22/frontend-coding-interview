import { Photo } from "@/types/photos";

export async function fetchPhotos(): Promise<Photo[]> {
    const response = await fetch('/api/pexels');

    if (!response.ok) {
        throw new Error('Failed to fetch photos');
    }

    const data = await response.json();
    return data.photos as Photo[];
}