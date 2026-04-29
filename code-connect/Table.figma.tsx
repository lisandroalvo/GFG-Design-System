import figma from '@figma/code-connect'
import Table from '../extracted-components/Table'

figma.connect(Table, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6594-46634', {
  example: () => <Table />,
})
