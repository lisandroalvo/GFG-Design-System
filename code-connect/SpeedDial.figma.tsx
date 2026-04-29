import figma from '@figma/code-connect'
import SpeedDial from '../extracted-components/SpeedDial'

figma.connect(SpeedDial, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6599-50822', {
  example: () => <SpeedDial />,
})
