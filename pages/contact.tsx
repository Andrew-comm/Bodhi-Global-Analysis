import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Article.module.css';

const Article: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.articleSection}>
                <div className={styles.backgroundImage} style={{ backgroundImage: "url('/muslim.avif')" }}></div>
                <div className={styles.overlay}>
                    <h1 className={styles.articleTitle}>Reframing Feminist Research: Negotiating Boundaries in Researching with Single Man Refugees</h1>
                    <p className={styles.authors}>Meena Masood and Benedetta Zocchi</p>
                    <p className={styles.date}>21st June 2024</p>
                    <p className={styles.readTime}>6 minute read</p>
                </div>
            </section>  

            <section className={styles.content}>
                <p className={styles.articleparagraph}>
                Reframing Feminist Research: Negotiating Boundaries in Researching with Single Man Refugees


                </p>
                <p>
                    The exploration of women researching men is pivotal within feminist discourse, particularly regarding women’s safety and reflexivity. Scholars like Pini (2005), Kloß (2017), and Harries (2022) underscore the need for ethical guidelines and boundary-setting, highlighting how women researchers must take additional precautions in male-dominated environments. These assumptions permeate conventional inquiries and ethical review processes, often risking normalising the notion that young women working alone with men are inherently unsafe. This concern is exacerbated when studying stigmatised groups, such as refugees and migrants from the Global South. As feminist researchers, we face challenges that extend beyond our personal safety and compel us to scrutinise how safety measures might inadvertently reinforce racialised perceptions of masculinity.
                </p>
                <p>
                    Media often depicts refugees as an uncontrollable and overwhelming flow, aligning with narratives such as “the Refugee Crisis” and "Fortress Europe," which frame migration from the Global South as a threat (Almustafa, 2021; Rheindorf and Wodak, 2020). Refugees, predominantly young men, are portrayed as constantly on the move, with nothing to lose (Charsley and Wray, 2015; Bonjour and Duyvendak, 2018). This depiction intersects with racial stereotypes historically applied to black and brown men, perpetuating the portrayal of them as potentially dangerous (Donaldson and Howson, 2009; Gorman-Murray and Hopkins, 2014; Helms, 2023). Images of crowded boats or young men climbing border fences oversimplify and perpetuate harmful stereotypes (Connell, 2005; Połońska-Kimunguyi, 2022). These portrayals shape public perception, policy decisions, and research approaches towards migrants and refugees (Shinozaki, 2012).
                </p>
                <p>
                    Feminist research actively challenges stereotypical portrayals of race and gender. Several feminist scholars have worked to debunk racialised and gendered views of refugee men (Silvey, 2006; Olivius, 2016; Bilgiç, 2018; Helms, 2023). However, these stereotypes infiltrate not only the content of refugee-focused research but also its practice.
                </p>
                <p>
                    As women researching male refugees, we crafted our methodologies according to existing ethical protocols. These guidelines often implicitly assumed that, as women working with unknown and undocumented men, we were inherently in danger. This assumption suggested that our safety concerns were directly tied to the gender, race, and status of our research participants.
                </p>
                <div className={styles.perspective}>
                    <div className={styles.meenaPerspective}>
                        <h2>Meena’s Perspective:</h2>
                        <p>
                            As a first-generation Afghan refugee and having previously worked with an NGO in Greece, I anticipated how some research participants, especially Afghans with whom I shared a language and background, would perceive me. In particular, I knew that people, at times, felt an increased sense of familiarity. Aware that my age and gender could affect perceptions, I aimed to establish clear, respectful boundaries from the outset. I clarified my role as a researcher, limited the personal information I shared, avoided extensive social interactions outside the research context, and refrained from probing into sensitive topics. This approach was partly driven by a desire to distinguish myself from Greek authorities and NGO personnel who often required people to share such information. Additionally, I wanted to prevent distress and even re-traumatisation among participants. While I shared my Afghan heritage to build rapport, I always maintained a professional distance.
                        </p>
                    </div>
                    <div className={styles.benedettaPerspective}>
                        <h2>Benedetta’s Perspective:</h2>
                        <p>
                            In contrast, my approach centred on welcoming intimacy. As a white European woman with a background as a refugee rights activist, I aimed to minimise power dynamics by establishing human connections beyond the research scope. While this did not fully resolve the power imbalance, it allowed for meaningful relationships. I wanted participants to see my interest extending beyond their refugee status and research topics. I felt safer interacting with men when a genuine connection was established, as it fostered mutual trust and respect. Often, I discarded rigid interview scripts in favour of letting conversations flow naturally, which enriched my research. This method turned her work into a collaborative process, thinkingwithparticipants rather than just studying them. Additionally, I perceived that my gender and appearance as a young European woman often led to protective behaviours towards me, with participants advising me on safe places to go and offering to accompany me for safety.
                        </p>
                    </div>
                </div>
                <p>
                    Despite our different approaches, we noticed a key similarity: neither of us felt in danger as we both prioritised what made us feel safe in our unique contexts. For Benedetta, safety was rooted in forming genuine human connections that transcended the transactional nature of research. For Meena, it was crucial to set clear boundaries and understand the limits of her role as a researcher. Both approaches, while different, ensured we navigated our fieldwork without feeling threatened.
                </p>
                <p>
                    In conclusion, our discussion on feminist approaches to researching refugee men revealed three central points. First, risk assessments must consider how racialised men are unjustly perceived as threatening, particularly for young women researchers. This requires a nuanced examination of where and why risk is assumed, ensuring that racialised assumptions are challenged. Second, there is a pivotal difference between discomfort and danger. Discomfort can emerge without danger and can be mitigated by negotiating boundaries. It can also be productive in recognising and mitigating power dynamics. Third, feminist research practices are diverse, shaped by the unique personalities and positions of researchers and participants. This pluralistic approach to feminist research allows for comprehensive and respectful engagement, transforming interviews into dialogues that challenge power dynamics arising from race, gender, and age.
                </p>
            </section>

            <h1>More articles.</h1>
            <div className={styles.imageSection}>
            <div className={styles.row}>
                <div className={styles.imageItem}>
                    <img src="../images/image1.jpeg" alt="Image 1" />
                    <p className={styles.imageDescription}>Bodhi’s pilot enumerator training course successfully touches down in Kenya</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image2.jpeg" alt="Image 2" />
                    <p className={styles.imageDescription}>Reflections on AidEx 2022</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image3.jpeg" alt="Image 3" />
                    <p className={styles.imageDescription}>The gendered impact of the climate crisis in Turkana County, Kenya</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageItem}>
                    <img src="../images/image4.jpeg" alt="Image 4" />
                    <p className={styles.imageDescription}>On World Cities Day, Putting Urban Issues into Perspective</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image5.jpeg" alt="Image 5" />
                    <p className={styles.imageDescription}>Addressing Vulnerabilities: A Closer Look at Migrant Communities</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image1.jpeg" alt="Image 6" />
                    <p className={styles.imageDescription}>Our commitment: Women's Empowerment Principles</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageItem}>
                    <img src="../images/image2.jpeg" alt="Image 7" />
                    <p className={styles.imageDescription}>Data collection and development research: Introducing Bodhi’s enumerator training programme</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image3.jpeg" alt="Image 8" />
                    <p className={styles.imageDescription}>Integrating conflict-sensitivity into refugee responses</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image4.jpeg" alt="Image 9" />
                    <p className={styles.imageDescription}>Integrating conflict-sensitivity into refugee responses</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageItem}>
                    <img src="../images/image5.jpeg" alt="Image 10" />
                    <p className={styles.imageDescription}>Challenging the status quo on localisation</p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image1.jpeg" alt="Image 11" />
                    <p className={styles.imageDescription}>Challenging the status quo on localisation
                    </p>
                </div>
                <div className={styles.imageItem}>
                    <img src="../images/image2.jpeg" alt="Image 12" />
                    <p className={styles.imageDescription}>On World Cities Day, Putting Urban Issues into Perspective</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageItem}>
                    <img src="../images/image3.jpeg" alt="Image 13" />
                    <p className={styles.imageDescription}>Integrating conflict-sensitivity into refugee responses</p>
                </div>
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

export default Article;
