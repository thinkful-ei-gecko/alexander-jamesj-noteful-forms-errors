import React from 'react'
import './CircleButton.css'
import PropTypes from 'prop-types'

export default function NavCircleButton(props) {
  const { tag, component, className, children, ...otherProps } = props

  return React.createElement(
    props.component || props.tag,
    {
      className: ['NavCircleButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavCircleButton.defaultProps ={
  tag: 'a'
}

NavCircleButton.propTypes = {
  tag: PropTypes.string,
  component: PropTypes.func,
  otherProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array
}
