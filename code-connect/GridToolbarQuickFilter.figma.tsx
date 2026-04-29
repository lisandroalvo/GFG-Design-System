import figma from '@figma/code-connect'
import GridToolbarQuickFilter from '../extracted-components/GridToolbarQuickFilter'

figma.connect(GridToolbarQuickFilter, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=9893-16342', {
  example: () => <GridToolbarQuickFilter />,
})
