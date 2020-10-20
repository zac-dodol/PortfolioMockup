import React from 'react'

import codes from "../assets/images/codes.png"
import framework from "../assets/images/framework.png"
import dusk from "../assets/images/dusk.jpg"

import Card from "./Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 0, title: 'HTML5, CSS3 & JS',
                subTitle: `Programming & scripting with jQuery, bootstrap, plugins and library.`,
                imgSrc: codes,
                link: '#',
                github: '#',

                selected: false
            }, {
                id: 1, title: 'Framework',
                subTitle: 'Experience in both mobile and web developing frameworks. Includes Laravel, Angular, Vue & React',
                imgSrc: framework,
                link: '#',
                github: '#',
                selected: false
            }, {
                id: 2, title: 'Automation Testing',
                subTitle: 'Experience using automation testing while on product development',
                imgSrc: dusk,
                link: '#',
                github: '#',
                selected: false
            },

            ]
        }
    }

    handleCardClick = (id, card) => {


        let items = [...this.state.items]

        //For the particular item that was selected, if its selected is true, set it to false and vice versa
        items[id].selected = items[id].selected ? false : true

        //To get only 1 item active at a time, we set all the other unselected items to selected false
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (item) => {

        return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />

    }

    render() {

        let columns = []

        this.state.items.forEach((item, idx) => {
            columns.push(
                this.makeItems(item)
            )

            // if ((idx + 1) % 2 === 0) { columns.push(<div className="w-100 separating-div" key={null}></div>) }
        })

        return (
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {columns}
                </Row>
            </Container>
        )
    }


}

export default Carousel;




// render() {
//     let columns = []
//     this.state.items.forEach((item, idx) => {

//         columns.push(
//             this.makeItems(item)
//         )
//         if ((idx + 1) % 3 === 0) { columns.push(<div className="w-100" key={null}></div>) }
//     })


//     return (
//         <Container fluid={true}>
//             <Row className="justify-content-around">
//                 {columns}
//             </Row>
//         </Container>
//     )
// }




