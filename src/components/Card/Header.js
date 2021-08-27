import React from 'react'

import Title from '../ui/Title'

const Header = ({ ...props }) => <Title>{props.children}</Title>

export default Header