import figma from '@figma/code-connect'
import Select from '../extracted-components/Select'

figma.connect(Select, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6570-41424', {
  example: () => <Select />,
})
