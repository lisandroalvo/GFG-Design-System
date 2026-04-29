import figma from '@figma/code-connect'
import LinearProgress from '../extracted-components/LinearProgress'

figma.connect(LinearProgress, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6586-46855', {
  example: () => <LinearProgress />,
})
