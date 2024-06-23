// components/jobs.tsx

import styles from '../styles/jobs.module.css';
import Navbar from '../components/Navbar';


const Jobs = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.jobsSection}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Work with Us</h2>
                    <div className={styles.flexContainer}>
                        <div className={styles.imageContainer}>
                            <img src="/muslim.avif" alt="Image Description" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3>Join Our Team: Unleash Your Potential with Us!</h3>
                            <p>
                                Welcome to the heart of innovation and impact. We are an international development
                                company committed to creating sustainable solutions that change the world. Our mission
                                extends beyond borders, touching lives and communities with transformative projects.
                                If you're passionate about making a tangible difference and eager to engage in work
                                that matters, you've found the right place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.jobsSection}>
                <div className={styles.content}>
                    <div className={`${styles.flexContainer} ${styles.reverse}`}>
                        <div className={styles.imageContainer}>
                            <img src="/train3.jpeg" alt="Image Description" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.subHeading}>Why Choose Us?</h3>
                <ul className={styles.list}>
                    <li>
                        <strong>Remote Flexibility with a Twist:</strong> Embrace the freedom to work from home in the UK or Kenya. Our team meets up weekly at our office in Kenya, or a WeWork in London. This blend of remote and in-person work environments fosters collaboration, creativity, and a strong team bond.
                    </li>
                    <li>
                        <strong>Travel Opportunities:</strong> Our projects span the globe, offering you the chance to explore new cultures, landscapes, and perspectives. Travel with purpose, engage with diverse communities, and contribute to meaningful change. Our research team regularly travel and work in countries across Africa, Asia, and the Middle East.
                    </li>
                    <li>
                        <strong>Value-Driven Work:</strong> Every project we undertake is a step towards a better future. We're not just about business; we're about impactful work that addresses real-world challenges. Join us in our commitment to excellence and making a difference.
                    </li>
                    <li>
                        <strong>Accelerated Career Growth:</strong> As a small firm, we offer unparalleled opportunities for professional development and career advancement. Here, your contributions are recognized and rewarded. You're not just a number; you're a vital part of our success story. With us, you have the room to grow, lead, and innovate.
                    </li>
                </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.jobsSection}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Work with Us</h2>
                    <div className={styles.flexContainer}>
                        <div className={styles.imageContainer}>
                            <img src="/office.jpeg" alt="Image Description" />
                        </div>
                        <div className={styles.textContainer}>
                            <strong>Who We're Looking For</strong>
                            <p>We seek dynamic, driven individuals who are committed to our mission of international development. Ideal candidates are:
                            </p>

                            <ul className={styles.list}>
                    <li>
                    Passionate about creating positive change

                    </li>
                    <li>
                    Skilled in their field, with a continuous learning mindset
                    </li>
                    <li>
                    Able to work independently and as part of a diverse team
                    </li>
                    <li>
                    Flexible, with a readiness to embrace new challenges and opportunities
                    </li>                    
                    <li>
                    Excellent communicators, capable of engaging with partners and communities across cultures
                    </li>
                </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.jobsSection}>
                <div className={styles.content}>
                    <div className={`${styles.flexContainer} ${styles.reverse}`}>
                        <div className={styles.imageContainer}>
                            <img src="/train3.jpeg" alt="Image Description" />
                        </div>
                        <div className={styles.textContainer}>
                            <h3 className={styles.subHeading}>What We Offer</h3>
                <ul className={styles.list}>
                    <li>
                    Competitive compensation and benefits
                    </li>
                    <li>
                    Flexible work arrangements
                    </li>
                    <li>
                    Opportunities for international travel and cultural exchange
                    </li>
                    <li>
                    A supportive, collaborative team environment
                    </li>

                    <li>
                    A supportive, collaborative team environment
                    </li>
                    <li>
                    Extensive opportunities for career growth and professional development
                    </li>
                    <li>
                    Ready to embark on a career journey that's rewarding in every sense? Apply now and join us in shaping a sustainable, inclusive future. Together, we can achieve extraordinary things. Welcome to a place where your work truly matters. Welcome to our team.
                    </li>
                </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.openPositionsSection}>
                <h2 className={styles.heading}>Open Positions</h2>
                <div className={styles.position}>
                    <h3>Research Assistant - United Kingdom</h3>
                    <p className={styles.closingDate}>Closing: Sun, 30 Jun 2024 23:59:59 +0000</p>
                </div>
            </div>


            <footer className={styles.contactSection}>
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
    );
};

export default Jobs;
