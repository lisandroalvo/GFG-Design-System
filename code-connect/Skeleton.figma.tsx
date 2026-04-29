import figma from '@figma/code-connect'
import Skeleton from '../extracted-components/Skeleton'

figma.connect(Skeleton, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6596-49017', {
  example: () => <Skeleton />,
})
