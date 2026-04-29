import figma from '@figma/code-connect'
import DateField from '../extracted-components/DateField'

figma.connect(DateField, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=1174-13306', {
  example: () => <DateField />,
})
