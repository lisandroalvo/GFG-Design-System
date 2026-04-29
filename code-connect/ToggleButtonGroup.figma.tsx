import figma from '@figma/code-connect'
import ToggleButtonGroup from '../extracted-components/ToggleButtonGroup'

figma.connect(ToggleButtonGroup, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6601-51012', {
  example: () => <ToggleButtonGroup />,
})
