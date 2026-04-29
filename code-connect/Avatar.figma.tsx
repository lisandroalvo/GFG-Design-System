import figma from '@figma/code-connect'
import Avatar from '../extracted-components/Avatar'

figma.connect(Avatar, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6587-47403', {
  example: () => <Avatar />,
})
