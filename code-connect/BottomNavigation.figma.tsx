import figma from '@figma/code-connect'
import BottomNavigation from '../extracted-components/BottomNavigation'

figma.connect(BottomNavigation, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6572-50307', {
  example: () => <BottomNavigation />,
})
