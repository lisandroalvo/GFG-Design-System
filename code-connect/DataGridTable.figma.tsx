import figma from '@figma/code-connect'
import DataGridTable from '../extracted-components/DataGridTable'

figma.connect(DataGridTable, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=10136-136874', {
  example: () => <DataGridTable />,
})
