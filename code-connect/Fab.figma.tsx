import figma from '@figma/code-connect'
import Fab from '../extracted-components/Fab'

figma.connect(Fab, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6556-38264', {
  example: () => <Fab />,
})
