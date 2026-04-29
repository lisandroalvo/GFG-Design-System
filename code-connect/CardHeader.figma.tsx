import figma from '@figma/code-connect'
import CardHeader from '../extracted-components/CardHeader'

figma.connect(CardHeader, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=15704-10477', {
  example: () => <CardHeader />,
})
