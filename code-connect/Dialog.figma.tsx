import figma from '@figma/code-connect'
import Dialog from '../extracted-components/Dialog'

figma.connect(Dialog, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6586-47183', {
  example: () => <Dialog />,
})
