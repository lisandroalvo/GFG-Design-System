import figma from '@figma/code-connect'
import ToggleButton from '../extracted-components/ToggleButton'

figma.connect(ToggleButton, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6601-50975', {
  example: () => <ToggleButton />,
})
