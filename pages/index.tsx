import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.aboutSection}>
                    <h1>About Us</h1>
                    <p>
                        Championing the values of intersectional feminist research, Bodhi is committed to the mission of rebalancing power dynamics across knowledge production and humanitarian interventions within and beyond the development sector. As such, we approach each project by first seeking to understand contextual settings (always through mediation of local knowledge) and build situated methodologies that seek to challenge existing power dynamics.
                    </p>
                </section>
                <section className={styles.storySection}>
                    <img src="/donkey.jpeg" alt="Our Story" className={styles.storyImage} />
                    <div className={styles.storyContent}>
                        <h1>Our Story</h1>
                        <p>
                            Bodhi Global Analysis was born out of a recognition that effective development programming required compelling evidence, and that there was a need for objective dispassionate research that went beyond pushing agendas, ticking boxes or fitting within preconceived frameworks. Thus, with the aim of injecting academic rigour into the research informing development policy and practice, Bodhi Global Analysis Ltd was incorporated in London in August 2017, followed by the establishment of a subsidiary in Nairobi in 2018.
                        </p>
                    </div>
                </section>
                
                <section className={styles.leadershipSection}>
                    <h2>Meet the team.</h2>
                    <p>We are a growing team of global experts, based predominantly in Kenya and the UK with national consultants in countries including Ethiopia, Iraq, Somalia and Tanzania. Our particular focus is on producing highly specific PEA and conflict analysis of cities, sectors, and issues and rural and urban contexts. We have significant expertise in gender and inclusion, localisation and triple-nexus programming.</p>
                    <h1>Leadership Team</h1>
                    <div className={styles.leadershipGrid}>
                        <div className={styles.leader}>
                            <img src="/ceo1.jpeg" alt="Leader 1" className={styles.leaderImage} />
                            <h2>Anna Louise Strachan, PhD</h2>
                            <p>Managing Director</p>
                        </div>
                        <div className={styles.leader}>
                            <img src="/ceo2.jpeg" alt="Leader 2" className={styles.leaderImage} />
                            <h2>Fredrik Eckardt</h2>
                            <p>Director of Finance</p>
                        </div>
                    </div>
                </section>
                <section className={styles.researchSection}>
                    <h1>Research</h1>
                    <div className={styles.researchGrid}>
                        <div className={styles.researcher}>
                            <img src="/ceo3.jpeg" alt="Researcher 1" className={styles.researchImage} />
                            <h2>Albert Mulli</h2>
                            <p>Head of Conflict and Peacebuilding</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo6.png" alt="Researcher 5" className={styles.researchImage} />
                            <h2>Charlotte Wiseman</h2>
                            <p>Head of Gender and Inclusion</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo4.jpeg" alt="Researcher 2" className={styles.researchImage} />
                            <h2>Hillary Owinyo</h2>
                            <p>Senior Evaluation Specialist</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo5.jpeg" alt="Researcher 3" className={styles.researchImage} />
                            <h2>Joseph Chiriyankandath</h2>
                            <p>Researcher</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo6.png" alt="Researcher 4" className={styles.researchImage} />
                            <h2>Laura Le Ray</h2>
                            <p>Researcher</p>
                        </div>
                        
                        <div className={styles.researcher}>
                            <img src="/ceo7.jpeg" alt="Researcher 6" className={styles.researchImage} />
                            <h2>Arinjay Butani</h2>
                            <p>Researcher</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo7.jpeg" alt="Researcher 7" className={styles.researchImage} />
                            <h2>Benedetta Zocchi, PhD</h2>
                            <p>Researcher</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo7.jpeg" alt="Researcher 8" className={styles.researchImage} />
                            <h2>Aoife Keogh</h2>
                            <p>Junior Researcher</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo10.jpeg" alt="Researcher 9" className={styles.researchImage} />
                            <h2>Narimaan Samir</h2>
                            <p>Research Assistant</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo2.jpeg" alt="Researcher 10" className={styles.researchImage} />
                            <h2>Rosa Pouakouyou</h2>
                            <p>Rosa Pouakouyou</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo2.jpeg" alt="Researcher 11" className={styles.researchImage} />
                            <h2>Jungyeon Lee</h2>
                            <p>Quantitative Research Assistant
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.researchSection}>
                    <h1>Business development</h1>
                    <div className={styles.researchGrid}>
                        <div className={styles.researcher}>
                            <img src="/ceo3.jpeg" alt="Researcher 1" className={styles.researchImage} />
                            <h2>Sam Wrighton, DPhil</h2>
                            <p>Head of Business Development</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo6.png" alt="Researcher 5" className={styles.researchImage} />
                            <h2>Lena Sherif</h2>
                            <p>Business Development Manager</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo4.jpeg" alt="Researcher 2" className={styles.researchImage} />
                            <h2>Kai Burley</h2>
                            <p>Technical Proposal Writer</p>
                        </div>
                       
                        <section className={styles.researchSection}>
                        <h1>Support</h1>  
                        <div className={styles.researchGrid}>
                        <div className={styles.researcher}>
                            <img src="/ceo5.jpeg" alt="Researcher 3" className={styles.researchImage} />
                            <h2>Sharmista Roy</h2>
                            <p>HR and EDI Manager</p>
                        </div>
                        <div className={styles.researcher}>
                            <img src="/ceo6.png" alt="Researcher 4" className={styles.researchImage} />
                            <h2>Roger Kipyegon</h2>
                            <p>Finance Assistant</p>
                        </div> 
                        </div>            
                        
                        </section>
                                          
                        
                        
                    </div>
                </section>
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
            </main>
        </div>
    );
};

export default Home;
