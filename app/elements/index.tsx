import {FunctionComponent} from 'react'

import Basic from './Basic'
import Heading from './Heading'
import Text from './Text'
import Section from './Layout/Section'
import Column from './Layout/Column'
import Row from './Layout/Row'
import Image from './Image'
import Paragraph from './Paragraph'
import Button from './Button'
import Icon from './Icon'

const elements : {
    [type: string]: FunctionComponent<any>
} = {
    Body: Basic,
    Layout: Basic,
    Heading,
    Section,
    Column,
    Row,
    Text,
    Image,
    Paragraph,
    Button,
    Icon
}

export default elements
