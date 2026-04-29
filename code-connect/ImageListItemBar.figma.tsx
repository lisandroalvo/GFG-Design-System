import figma from '@figma/code-connect'
import ImageListItemBar from '../extracted-components/ImageListItemBar'

figma.connect(ImageListItemBar, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=1606-8880', {
  example: () => <ImageListItemBar />,
})
