import figma from '@figma/code-connect'
import Alert from '../extracted-components/Alert'

figma.connect(Alert, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6595-48211', {
  example: () => <Alert />,
})
