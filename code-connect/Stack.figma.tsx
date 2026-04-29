import figma from '@figma/code-connect'
import Stack from '../extracted-components/Stack'

figma.connect(Stack, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=11114-137757', {
  example: () => <Stack />,
})
