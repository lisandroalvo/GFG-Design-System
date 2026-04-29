import figma from '@figma/code-connect'
import DateTimeField from '../extracted-components/DateTimeField'

figma.connect(DateTimeField, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=1251-806500', {
  example: () => <DateTimeField />,
})
