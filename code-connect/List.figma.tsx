import figma from '@figma/code-connect'
import List from '../extracted-components/List'

figma.connect(List, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11566-157133', {
  example: () => <List />,
})
