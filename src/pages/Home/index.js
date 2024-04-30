import React from 'react'

import Hero from './Hero'
import DiscoverSection from './DiscoverSection'
import GetInTouchSection from './GetInTouchSection'

import styles from '../../styles/pages/home/index.module.css'

function HomePage() {
  return (
    <div className={styles.container}>
      <Hero />
      <DiscoverSection />
      <GetInTouchSection />
    </div>
  )
}

export default HomePage
