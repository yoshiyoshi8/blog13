import React from 'react';
import styles from 'styles/pagination.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ prevText = '', prevUrl = '', nextText = '', nextUrl = '' }) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl} className={styles.iconText}>
            <FontAwesomeIcon icon={faChevronCircleLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.prev}>
          <Link href={nextUrl} className={styles.iconText}>
            <FontAwesomeIcon icon={faChevronCircleRight} color="var(--gray-25)" />
            <span>{nextText}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
