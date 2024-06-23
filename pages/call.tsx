// components/call.tsx

import styles from '../styles/call.module.css';
import Navbar from '../components/Navbar';


const Call = () => {
   
    return (

        <div>

            <Navbar/>

        <div className={styles.contactSection}>
            <h2 className={styles.heading}>Contact Us</h2>
            <p className={styles.paragraph}>
                We apply subject expertise, primary research, and high-level analysis to conduct political economy and conflict analyses for different regions. Our particular focus is on producing highly specific PEA and conflict analysis of cities, sectors, and issues. Our reports reflect a high level of academic training, regional expertise, and policy experience, and are aimed at achieving practical policy interventions.
            </p>

            <div className={styles.learnMoreSection}>
                <h2 className={styles.subHeading}>Want to learn more?</h2>
                <p className={styles.subParagraph}>Let's talk.</p>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <div className={styles.inputLine} contentEditable="true" data-placeholder="Type your name"></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <div className={styles.inputLine} contentEditable="true" data-placeholder="Type your email"></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <div className={styles.inputLine} contentEditable="true" data-placeholder="Type the message subject"></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <div className={styles.inputLine} contentEditable="true" data-placeholder="Message*" style={{ height: '100px' }}></div>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send message</button>
                </form>
            </div>

            <footer className={styles.footerSection}>
                <img src="/sim.jpeg" alt="Bodhi Global Analysis" className={styles.contactImage} />
                    <div className={styles.contactContent}>
                        <h2>Bodhi Global Analysis</h2>
                        <p>London – Nairobi</p>
                    </div>
                    <div className={styles.contactContent}>
                        <p>Email: info@bodhiglobalanalysis.com</p>
                        <div className={styles.socialIcons}>
                            <img src="/twitter.png" alt="Twitter" className={styles.icon} />
                            <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
                        </div>
                    </div>
                </footer>

        </div>
        
        </div>
        
    );
};

export default Call;
