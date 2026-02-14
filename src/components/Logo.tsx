'use client';

import Image from 'next/image';
import styles from './logo.module.css';

export default function Logo() {
    return (
        <Image className={styles.logo} width={150} height={150} src={'/logo.svg'} alt='Logo' />
    )
}
