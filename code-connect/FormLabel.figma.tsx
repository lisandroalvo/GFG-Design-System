import figma from '@figma/code-connect'
import FormLabel from '../extracted-components/FormLabel'

figma.connect(FormLabel, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11436-165380', {
  example: () => <FormLabel />,
})
