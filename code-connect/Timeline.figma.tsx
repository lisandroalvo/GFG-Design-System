import figma from '@figma/code-connect'
import Timeline from '../extracted-components/Timeline'

figma.connect(Timeline, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6602-51689', {
  example: () => <Timeline />,
})
