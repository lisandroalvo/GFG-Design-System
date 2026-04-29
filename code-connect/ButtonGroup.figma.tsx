import figma from '@figma/code-connect'
import ButtonGroup from '../extracted-components/ButtonGroup'

figma.connect(ButtonGroup, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6543-39843', {
  example: () => <ButtonGroup />,
})
