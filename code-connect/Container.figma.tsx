import figma from '@figma/code-connect'
import Container from '../extracted-components/Container'

figma.connect(Container, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=7660-81184', {
  example: () => <Container />,
})
