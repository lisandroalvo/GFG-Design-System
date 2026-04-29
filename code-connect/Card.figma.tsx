import figma from '@figma/code-connect'
import Card from '../extracted-components/Card'

figma.connect(Card, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=15704-10477', {
  example: () => <Card />,
})
