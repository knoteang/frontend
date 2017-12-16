import React,{Component} from 'react'
import { Divider,Card,Icon,Accordion,Segment } from 'semantic-ui-react'

import logo from '../Profile/daniel.jpg';

export default class PostRight extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted>
        <Accordion inverted>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What is Social Network ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            a dedicated website  that enables users to communicate 
           with each other by posting information, comments.  network of social
            interactions and personal relationships.
            </p> 
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What's about PS POST ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
            PS POST community is a place where you can connect 
            with others to find someone who interesting and share
             your opinion or experience.
            </p>
          </Accordion.Content>

          
         
        </Accordion>
      </Segment>
    )
  }
}