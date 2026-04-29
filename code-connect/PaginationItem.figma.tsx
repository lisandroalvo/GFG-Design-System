import figma from '@figma/code-connect'
import PaginationItem from '../extracted-components/PaginationItem'

figma.connect(PaginationItem, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6598-49207', {
  example: () => <PaginationItem />,
})
