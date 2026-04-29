import figma from '@figma/code-connect'
import Toolbar from '../extracted-components/Toolbar'

figma.connect(Toolbar, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6583-46318', {
  example: () => <Toolbar />,
})
