import figma from '@figma/code-connect'
import Pagination from '../extracted-components/Pagination'

figma.connect(Pagination, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6598-49376', {
  example: () => <Pagination />,
})
