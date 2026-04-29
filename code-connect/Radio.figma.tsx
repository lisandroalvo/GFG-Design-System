import figma from '@figma/code-connect'
import Radio from '../extracted-components/Radio'

figma.connect(Radio, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6558-39273', {
  example: () => <Radio />,
})
