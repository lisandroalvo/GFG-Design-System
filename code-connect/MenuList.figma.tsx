import figma from '@figma/code-connect'
import MenuList from '../extracted-components/MenuList'

figma.connect(MenuList, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11404-174321', {
  example: () => <MenuList />,
})
