import {Component} from 'react'

import {
  AppContainer,
  Heading,
  Para,
  List,
  ColorsInputContainer,
  ColorInputContent,
  ColorCode,
  InputColor,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeColorId: gradientDirectionsList[0].value,
    firstInputColor: '#8ae323',
    secondInputColor: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    directionOption: gradientDirectionsList[0].value,
  }

  getTheDirection = id => {
    console.log(id)
    this.setState({activeColorId: id})
  }

  firstInputColorCode = event => {
    this.setState({firstInputColor: event.target.value})
  }

  secondInputColorCode = event => {
    this.setState({secondInputColor: event.target.value})
  }

  getResult = () => {
    const {firstInputColor, secondInputColor, activeColorId} = this.state
    this.setState({
      firstColor: firstInputColor,
      secondColor: secondInputColor,
      directionOption: activeColorId,
    })
  }

  getTheListOFDirection = () => {
    const {activeColorId} = this.state
    return (
      <List>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            key={eachItem.directionId}
            colorDetails={eachItem}
            activeId={activeColorId}
            getTheDirection={this.getTheDirection}
          />
        ))}
      </List>
    )
  }

  getTheColorsInput = () => {
    const {firstInputColor, secondInputColor} = this.state
    return (
      <ColorsInputContainer>
        <ColorInputContent>
          <ColorCode>{firstInputColor}</ColorCode>
          <InputColor
            type="color"
            value={firstInputColor}
            onChange={this.firstInputColorCode}
          />
        </ColorInputContent>
        <ColorInputContent>
          <ColorCode>{secondInputColor}</ColorCode>
          <InputColor
            type="color"
            value={secondInputColor}
            onChange={this.secondInputColorCode}
          />
        </ColorInputContent>
      </ColorsInputContainer>
    )
  }

  render() {
    const {firstColor, secondColor, directionOption} = this.state
    console.log(firstColor)
    return (
      <AppContainer
        firstColor={firstColor}
        secondColor={secondColor}
        direction={directionOption}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        {this.getTheListOFDirection()}
        <Para>Pick the Colors</Para>
        {this.getTheColorsInput()}
        <GenerateButton type="button" onClick={this.getResult}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}
export default GradientGenerator
