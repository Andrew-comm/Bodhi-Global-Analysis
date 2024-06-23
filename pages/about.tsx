import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';
import sectionsData from '../data/sectionsData';

const About: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setSelectedSection(id);
    };

    const handleBack = () => {
        setSelectedSection(null);
    };

    const selectedContent = sectionsData.find(section => section.id === selectedSection);

    return (
        <div>
        <Navbar/>

        <div className={styles.container}>
            
            
            
            <h1>Recent Projects</h1>
            <p>Bodhi collaborates with clients across the humanitarian, development, and peace-keeping sectors, bringing an innovative, intersectional, and expert-based approach to all its projects. Our diverse and international team of researchers includes experts in conflict, gender, climate change, and forced displacement, and we have successfully carried out Monitoring & Evaluation (M&E) and research projects across Fragile and Conflict-Affected Situations (FCAS) in Africa, Asia, and Latin America. Here is a selection of projects and clients we have worked with.</p>

            <div className={styles.filtercontainer}>
            <main className={styles.main}>
                <section className={styles.filtersSection}>
                    <div className={styles.filters}>
                        <div className={styles.filter}>
                            <label className={styles.label} htmlFor="type">Type:</label>
                            <select className={styles.selectInput} name="type" id="type">
                                <option value="any">Any</option>
                                <option value="116">116</option>
                                <option value="emergency">Emergency</option>
                                <option value="recovery">Recovery</option>
                                <option value="research">Research</option>
                                <option value="evaluation">Evaluation</option>
                            </select>
                        </div>
                        <div className={styles.filter}>
                            <label className={styles.label} htmlFor="location">Location:</label>
                            <select className={styles.selectInput} name="location" id="location">
                                <option value="any">Any</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Latin America">Latin America</option>
                                <option value="Europe">Europe</option>
                                <option value="Middle East">Middle East</option>
                            </select>
                        </div>
                        <div className={styles.filter}>
                            <button className={styles.clearFilters}>Clear filters</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
            
            <main className={styles.main}>


                {selectedSection === null ? (
                    <>
                        <div className={styles.sectionsContainer}>
                            {sectionsData.map(({ id, city, topic, linkText, imageSrc }) => (
                                <div key={id} className={styles.section}>
                                    <img src={imageSrc} alt={city} className={styles.sectionImage} />
                                    <h2>{city}</h2>
                                    <h3>{topic}</h3>
                                    <button onClick={() => handleClick(id)} className={styles.linkButton}>
                                        {linkText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.detailContainer}>
                        <button onClick={handleBack} className={styles.backButton}>Back</button>
                        <h1 className={styles.pageTitle}>{selectedContent?.city}</h1>
                        <p className={styles.description}>{selectedContent?.topic}</p>
                        <p>{selectedContent?.details}</p>
                        <img src={selectedContent?.detailImageSrc} alt={selectedContent?.city} className={styles.detailImage} />
                    </div>
                )}
            </main>
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
        </div>
    );
};

export default About;
