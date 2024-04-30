import React from 'react'
import { useTranslation } from 'react-i18next'

import ImageGrid from './ImageGrid'

import styles from '../../styles/pages/gallery/index.module.css'

const GalleryPage = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <h1>{t('Our Gallery')}</h1>

      <ImageGrid />
    </div>
  )
}

export default GalleryPage
