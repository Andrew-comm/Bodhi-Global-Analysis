import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/service.module.css';

const Services: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Services</h1>
                <section className={styles.servicesSection}>
                    <p>
                        At Bodhi Global Analysis we produce in-depth research and evaluations to support the development of informed international development strategies and interventions. All our services are tailored to client needs and programme objectives.
                    </p>
                    <p>
                        Our reports mainstream gender, as we strongly believe in the importance of gender-sensitive analysis as a means of enabling stakeholders and donors to develop equitable and durable development solutions. We also mainstream consideration of minorities including those with disabilities and those of diverse sexual orientation and gender identity. All our work is conducted in line with feminist research principles, and we ensure that local expertise and knowledge is afforded significant attention through our participatory research approaches.
                    </p>
                </section>
                <section className={styles.productsSection}>
                    <div className={styles.productsContent}>
                        <h2>Our Products</h2>
                        <ul className={styles.dottedList}>
                            <li>City-level conflict analysis</li>
                            <li>Political Economy Analysis (PEA)</li>
                            <li>Gender assessments</li>
                            <li>Migration assessments</li>
                            <li>City-level Countering Violent Extremism (CVE) assessments</li>
                            <li>Impact Assessments</li>
                            <li>Monitoring and Evaluation</li>
                            <li>Field research and data collection</li>
                            <li>Bespoke analysis and advisory</li>
                            <li>Strategic research for Social and Behaviour Change Communications</li>
                        </ul>
                    </div>
                    <div className={styles.productsImage}>
                        <img src="/mountain view.avif" alt="Our Products" />
                    </div>
                </section>

                <section className={styles.analysisSection}>
                    <div className={styles.analysisItem}>
                        <h3>01</h3>
                        <h4>Political Economy Analysis</h4>
                        <p>Our political economy analyses are grounded in an understanding of the context at the macro, meso and micro levels. We look at political and economic processes — the key institutions, structures, stakeholders, distribution of resources, and competing interests — that underpin an issue, sector or region. We work in an intersectional way to determine how a given context or issue affects people - particularly the most marginalised - differently.</p>
                    </div>
                    <div className={styles.analysisItem}>
                        <h3>02</h3>
                        <h4>Conflict Analysis</h4>
                        <p>Our approach to conflict analysis emphasises the importance of local context and the perspectives of affected communities. Moreover, we believe that gender sensitive conflict analysis is essential in understanding the causes, impact, and resolution of conflict. Our conflict analysis reports include a scenario planning component based on research findings, which broadly reflect potential changes in the conflict situation and the likely impact on programming, in terms of the risks and opportunities that each scenario represents.</p>
                    </div>
                    <div className={styles.analysisItem}>
                        <h3>03</h3>
                        <h4>Contextual and Situational Analysis</h4>
                        <p>Our approach to contextual and situational analysis, draws on our expertise in PEA and conflict analysis. In presenting the context for future programming we aim to analyse opportunities, barriers, and bottlenecks, highlight existing interventions by other stakeholders, their level of success and impact on policy, or gaps that persist, so as to produce the most comprehensive systematic analysis to inform organisations’ strategic decision-making.</p>
                    </div>
                </section>

                <section className={styles.whyChooseSection}>
                    <div className={styles.whyChooseImage}>
                        <img src="/muslim.avif" alt="Why Choose Bodhi" />
                    </div>
                    <div className={styles.whyChooseContent}>
                        <h2>Why Choose Bodhi?</h2>
                        <p>We follow a strict code of research best practice to ensure the high quality of our work, as well as sound management practices to allow for prompt delivery of outcomes and risk mitigation. Every aspect of our work reflects the company’s core values of integrity and objectivity.</p>
                        <ul className={styles.dottedList}>
                            <li>We provide comprehensive evidence based recommendations that reflect ground realities</li>
                            <li>We believe in producing objective knowledge through sound research processes, combining academic rigour with policy relevance</li>
                            <li>We are committed to constant learning and innovating our research tools to adapt to specific country contexts, improve efficiency and data quality</li>
                            <li>Operating in FCAS, a full understanding of the conflict situation underpins our analysis and recommendations</li>
                            <li>Our starting point is to understand the political context which injects nuance in the analysis of issues</li>
                            <li>We are proficient and experienced in the use of participatory research tools, including training enumerators, researchers and organisational staff in the effective application of the tools</li>
                            <li>Our attitude and work ethic is defined by our genuine engagement with the issues and a desire to contribute to humanitarian and development outcomes</li>
                            <li>We pride ourselves on our integrity, efficiency and attention to detail</li>
                            <li>We mainstream gender in all our work and take an intersectional approach to ensure minorities and the most marginalised are afforded equitable attention</li>
                        </ul>
                    </div>
                </section>
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
    );
};

export default Services;

