import figma from '@figma/code-connect'
import Tooltip from '../extracted-components/Tooltip'

figma.connect(Tooltip, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6590-48770', {
  example: () => <Tooltip />,
})
