import figma from '@figma/code-connect'
import Menu from '../extracted-components/Menu'

figma.connect(Menu, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11402-158079', {
  example: () => <Menu />,
})
