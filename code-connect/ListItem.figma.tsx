import figma from '@figma/code-connect'
import ListItem from '../extracted-components/ListItem'

figma.connect(ListItem, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6591-48882', {
  example: () => <ListItem />,
})
