import figma from '@figma/code-connect'
import TreeItem from '../extracted-components/TreeItem'

figma.connect(TreeItem, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6601-51139', {
  example: () => <TreeItem />,
})
