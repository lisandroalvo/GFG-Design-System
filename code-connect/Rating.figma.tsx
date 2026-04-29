import figma from '@figma/code-connect'
import Rating from '../extracted-components/Rating'

figma.connect(Rating, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6562-39624', {
  example: () => <Rating />,
})
