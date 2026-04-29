import figma from '@figma/code-connect'
import RadioGroup from '../extracted-components/RadioGroup'

figma.connect(RadioGroup, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6558-39344', {
  example: () => <RadioGroup />,
})
