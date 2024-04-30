import React from 'react';

import styles from '../../styles/pages/home/getInTouchSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const GetInTouchSection = () => {
  return (
    <div className={styles.container} id='get-in-touch-section'>
      <div className={styles.formContainer}>
        <h3 className={styles.heading}>Get in touch</h3>
        <p className={styles.introText}>
          Feel free to give us a call or send us an email with your questions or comments.
        </p>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Jane Smith" required />

          <label htmlFor="email">Email address *</label>
          <input type="email" id="email" placeholder="email@website.com" required />

          <label htmlFor="phone">Phone number *</label>
          <input type="tel" id="phone" placeholder="555-555-5555" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message here"></textarea>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>

      <div className={styles.infoContainer}>

        <iframe
          className={styles.googleMap}
          title='Location Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8209.952077881639!2d17.028934811153587!3d51.09806935843386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26f5e797c13%3A0x60b90fdb39913c16!2sWroclavia!5e0!3m2!1sen!2spl!4v1714479664956!5m2!1sen!2spl"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />

        <div className={styles.wrapper}>
          <h3 className={styles.heading}>Get in touch</h3>
          <p className={styles.contactDetail}><FontAwesomeIcon icon={faEnvelope} /> gora.erushenko@gmail.com</p>
          <h3 className={styles.heading}>Location</h3>
          <p className={styles.contactDetail}><FontAwesomeIcon icon={faMapMarkerAlt} /> Wroclaw, 02 PL</p>
          <h3 className={styles.heading}>Hours</h3>
          <ul className={styles.hoursList}>
            <div className={styles.hour}>Monday <span>9:00 AM – 10:00 PM</span> </div>
            <div className={styles.hour}>Tuesday <span>9:00 AM – 10:00 PM</span> </div>
            <div className={styles.hour}>Wednesday <span>9:00 AM – 10:00 PM</span> </div>
            <div className={styles.hour}>Thursday <span>9:00 AM – 10:00 PM</span> </div>
            <div className={styles.hour}>Friday <span>9:00 AM – 10:00 PM</span> </div>
            <div className={styles.hour}>Saturday <span>9:00 AM – 06:00 PM</span> </div>
            <div className={styles.hour}>Sunday <span>9:00 AM – 12:00 PM</span> </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
