import figma from '@figma/code-connect'
import Accordion from '../extracted-components/Accordion'

figma.connect(Accordion, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6583-46084', {
  example: () => <Accordion />,
})
