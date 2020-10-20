import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

import PDFViewer from '../components/PDFViewer/PDFViewer';
import PDFJSBackend from '../components/backends/pdfjs';

function AboutPage(props) {
    return (
        <div >
            <Hero title={props.title} subtitle={props.subtitle} subtext={props.subtext} />
            <Content >
                <p className="aboutmetext">Hello, call me Hazwan. I'm an Anthropologist by training who is now a Full Stack Web Developer with experience in Webpack, Babel, Node JS, React Js, Python, Python Flask and PostgreSQL.</p>

                <p className="aboutmetext">My dream is to one day start my own business where I get to build things that can have a meaningful impact on society. I am always on the lookout for people and experiences to learn from to make this happen.</p>

                <p className="aboutmetext">I'm constantly learning new things, some of them currently are gaining more experience with MongoDB, Express JS, and React Native.</p>

                <p className="aboutmetext">Watch this space as I continue to add projects to my repertoire. Keep up with my coding journey on my <a href="https://github.com/HazFaiz">github</a> and check out my resume below!</p>

            </Content>
            <div className="aboutme">
                <div className="pdfviewer">
                    <PDFViewer
                        backend={PDFJSBackend}
                        src='/AkmalHazimBinOthman_CV.pdf'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;

