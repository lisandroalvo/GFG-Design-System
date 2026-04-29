import figma from '@figma/code-connect'
import CircularProgress from '../extracted-components/CircularProgress'

figma.connect(CircularProgress, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6586-47016', {
  example: () => <CircularProgress />,
})
