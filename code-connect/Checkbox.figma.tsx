import figma from '@figma/code-connect'
import Checkbox from '../extracted-components/Checkbox'

figma.connect(Checkbox, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6543-43052', {
  example: () => <Checkbox />,
})
