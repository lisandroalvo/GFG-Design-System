import figma from '@figma/code-connect'
import TextField from '../extracted-components/TextField'

figma.connect(TextField, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6570-48313', {
  example: () => <TextField />,
})
