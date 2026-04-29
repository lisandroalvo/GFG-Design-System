import figma from '@figma/code-connect'
import InputLabel from '../extracted-components/InputLabel'

figma.connect(InputLabel, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11140-154655', {
  example: () => <InputLabel />,
})
