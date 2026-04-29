import figma from '@figma/code-connect'
import DialogActions from '../extracted-components/DialogActions'

figma.connect(DialogActions, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=170-161662', {
  example: () => <DialogActions />,
})
