import * as React from 'react';
import styles from './search.module.css';

interface Props {
    name: string;
    category: string;
    url: string;
    relevance: number;
}

export const SearchEntry: React.FC<Props> = ({name, category, url, relevance}) => {
    return (
        <a href={url}>
            <div className={' bg-white shadow-sm rounded mb-3 p-3'}>
                <div className='mb-3'>
                    <div className={styles.entryName}>{name}</div>
                    <div className={styles.entryCategory}>{category}</div>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.relevanceContainer}>
                        {`Relevance: ${relevance}`}
                    </div>
                </div>
            </div>
        </a>
    );
};



