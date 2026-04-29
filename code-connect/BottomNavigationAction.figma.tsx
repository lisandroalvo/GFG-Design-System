import figma from '@figma/code-connect'
import BottomNavigationAction from '../extracted-components/BottomNavigationAction'

figma.connect(BottomNavigationAction, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6572-50288', {
  example: () => <BottomNavigationAction />,
})
