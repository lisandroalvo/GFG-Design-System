import figma from '@figma/code-connect'
import Paper from '../extracted-components/Paper'

figma.connect(Paper, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6584-46711', {
  example: () => <Paper />,
})
