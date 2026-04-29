import figma from '@figma/code-connect'
import Badge from '../extracted-components/Badge'

figma.connect(Badge, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6587-47500', {
  example: () => <Badge />,
})
