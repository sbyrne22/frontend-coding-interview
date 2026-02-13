'use client';

import {useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './photos.module.css';

export default function PhotosPage() {

    return (
        <div>
            <div className={styles.headingSection}>
                {/* Logo Here */}
                <h1 className={styles.title}>All Photos</h1>
            </div>
            {/* Photo Card Here */}
        </div>
    )
}