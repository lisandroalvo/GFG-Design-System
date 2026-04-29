import figma from '@figma/code-connect'
import FormHelperText from '../extracted-components/FormHelperText'

figma.connect(FormHelperText, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11140-154883', {
  example: () => <FormHelperText />,
})
