import figma from '@figma/code-connect'
import MenuItem from '../extracted-components/MenuItem'

figma.connect(MenuItem, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6576-50735', {
  example: () => <MenuItem />,
})
