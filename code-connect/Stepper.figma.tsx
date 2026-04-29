import figma from '@figma/code-connect'
import Stepper from '../extracted-components/Stepper'

figma.connect(Stepper, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6576-51238', {
  example: () => <Stepper />,
})
