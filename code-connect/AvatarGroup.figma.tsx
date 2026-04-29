import figma from '@figma/code-connect'
import AvatarGroup from '../extracted-components/AvatarGroup'

figma.connect(AvatarGroup, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=7432-52415', {
  example: () => <AvatarGroup />,
})
