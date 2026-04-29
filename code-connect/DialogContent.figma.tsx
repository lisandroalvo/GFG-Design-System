import figma from '@figma/code-connect'
import DialogContent from '../extracted-components/DialogContent'

figma.connect(DialogContent, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=127-59928', {
  example: () => <DialogContent />,
})
