import figma from '@figma/code-connect'
import FormGroupCheckbox from '../extracted-components/FormGroupCheckbox'

figma.connect(FormGroupCheckbox, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6543-43147', {
  example: () => <FormGroupCheckbox />,
})
