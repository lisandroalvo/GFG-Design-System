import figma from '@figma/code-connect'
import Slider from '../extracted-components/Slider'

figma.connect(Slider, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6562-39045', {
  example: () => <Slider />,
})
