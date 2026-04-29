import figma from '@figma/code-connect'
import MobileStepper from '../extracted-components/MobileStepper'

figma.connect(MobileStepper, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6576-51238', {
  example: () => <MobileStepper />,
})
