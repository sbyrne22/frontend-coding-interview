'use client';
import { useState } from 'react';
import { Photo } from '@/types/photos';
import styles from './photo-card.module.css';

type Props = {
    photo: Photo;
};

export default function PhotoCard({ photo }: Props) {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <div className={`${styles.photoCard} flexSB`}>
            <div className={`${styles.mainImageContent} flexSB`}>
                <button className={`${styles.likeButton} ${liked ? styles.liked : styles.unliked}`} type="button" aria-label="Toggle liking the photo" onClick={() => setLiked(!liked)}></button>
                <img className={styles.photo} src={photo.src.medium} alt={photo.alt}></img>
                <div className={styles.imageInfo}>
                    <p className={styles.photographer}>{photo.photographer}</p>
                    <p className={styles.photoAlt}>{photo.alt}</p>
                    <div className={styles.colorSection}><span>{photo.avg_color}</span> <div className={styles.photoColorBlock} style={{ backgroundColor: photo.avg_color }}></div></div>
                </div>
            </div>
            <a className={styles.portfolioLink} href={photo.photographer_url} aria-label={`Go to ${photo.photographer} portfolio`} target='_blank' rel="noopener noreferrer"><span className={styles.linkIcon}></span> Portfolio</a>
        </div>
    )
}
