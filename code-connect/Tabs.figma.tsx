import figma from '@figma/code-connect'
import Tabs from '../extracted-components/Tabs'

figma.connect(Tabs, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6579-45197', {
  example: () => <Tabs />,
})
