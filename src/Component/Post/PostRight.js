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

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What's new ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
              {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
              {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}