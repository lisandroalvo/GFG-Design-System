import figma from '@figma/code-connect'
import Autocomplete from '../extracted-components/Autocomplete'

figma.connect(Autocomplete, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6570-49856', {
  example: () => <Autocomplete />,
})
