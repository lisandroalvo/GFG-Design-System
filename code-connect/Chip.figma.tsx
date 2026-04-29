import figma from '@figma/code-connect'
import Chip from '../extracted-components/Chip'

figma.connect(Chip, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6588-47683', {
  example: () => <Chip />,
})
