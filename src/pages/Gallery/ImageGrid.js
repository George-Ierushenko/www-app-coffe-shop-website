import React from 'react'

import image1 from '../../static/image1.png'
import image2 from '../../static/image2.png'
import image3 from '../../static/image3.png'
import image4 from '../../static/image4.png'
import image5 from '../../static/image5.png'
import image6 from '../../static/image6.png'


import styles from '../../styles/pages/gallery/imageGrid.module.css'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
]

const ImageGrid = () => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <img className={styles.image} src={image} alt="Coffee shop" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
