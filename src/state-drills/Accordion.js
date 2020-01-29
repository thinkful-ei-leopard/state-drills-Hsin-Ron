import React from 'react';


export default class Accordion extends React.Component {

    static defaultProps = { sections: [] };
    
    state = {
        clickedSection: null
    };

    handleClick = (clickedIndex) => {
        this.setState({
            clickedSection: clickedIndex
        })
    }

    renderElement(section, index, clickedSection) {
        
        return (
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                {section.title} 
                {(clickedSection === index) && <p>{section.content}</p>}
                </button>
            </li>
        );
    }

    // When a button is clicked, a p should be rendered below the button that was clicked (inside the li) 
    // that displays the section's content. You can use conditional rendering to display this p with the section content.

    render(){
        console.log(this.props);
        const { clickedSection } = this.state;

        return(
        <ul>

           {this.props.sections.map((section, index) => 
               this.renderElement(section, index, clickedSection)
           )}
           <p>TESTING ACCORDION</p>
            
        </ul>
        );
    }
}