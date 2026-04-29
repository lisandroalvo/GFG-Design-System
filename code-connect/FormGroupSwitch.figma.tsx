import figma from '@figma/code-connect'
import FormGroupSwitch from '../extracted-components/FormGroupSwitch'

figma.connect(FormGroupSwitch, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=642-108242', {
  example: () => <FormGroupSwitch />,
})
