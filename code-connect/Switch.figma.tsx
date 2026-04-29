import figma from '@figma/code-connect'
import Switch from '../extracted-components/Switch'

figma.connect(Switch, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6564-39128', {
  example: () => <Switch />,
})
