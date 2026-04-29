import figma from '@figma/code-connect'
import AppBar from '../extracted-components/AppBar'

figma.connect(AppBar, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11545-171494', {
  example: () => <AppBar />,
})
