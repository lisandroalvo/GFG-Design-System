import figma from '@figma/code-connect'
import TransferList from '../extracted-components/TransferList'

figma.connect(TransferList, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6562-38660', {
  example: () => <TransferList />,
})
