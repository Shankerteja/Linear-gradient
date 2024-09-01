// Write your code here
import React from 'react'
import {DirectionItem, Direction, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeId, colorDetails, getTheDirection} = props
  const {value} = colorDetails
  const addStyle = activeId === colorDetails.value
  const {displayText} = colorDetails
  const getDirection = () => {
    getTheDirection(value)
  }

  return (
    <ListItem>
      <DirectionItem addstyle={addStyle} onClick={getDirection} as="button">
        <Direction>{displayText}</Direction>
      </DirectionItem>
    </ListItem>
  )
}
export default GradientDirectionItem
