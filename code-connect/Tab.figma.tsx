import figma from '@figma/code-connect'
import Tab from '../extracted-components/Tab'

figma.connect(Tab, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6579-45104', {
  example: () => <Tab />,
})
