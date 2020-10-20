import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

import PDFViewer from '../components/PDFViewer/PDFViewer';
import PDFJSBackend from '../components/backends/pdfjs';

function AboutPage(props) {
    console.log(props)
    return (
        <div >
            <Hero title={props.title} subtitle={props.subtitle} subtext={props.subtext} />
            <Content >
                <p className="aboutmetext">Name given is Akmal Hazim. I'm trained as a Full Stack Developer, who is now a Full Stack Web Developer with experience in Laravel, Angular, Vue, React and also vanilla.</p>

                <p className="aboutmetext">I am always keen on collaborating with people for us to experiences together and increase the depth of our knowledge to learn from all.</p>

                <p className="aboutmetext">I'm constantly learning new things, some of them currently are gaining more experience with MongoDB, ExpressJS, and Automation testing.</p>

                <p className="aboutmetext">Watch this space as I continue to add projects to my repertoire. Keep up with my coding journey on my <a href="https://github.com/zac-dodol">github</a> and check out my resume below!</p>

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

