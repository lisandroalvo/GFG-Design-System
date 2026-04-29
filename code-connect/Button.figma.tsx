import figma from '@figma/code-connect'
import Button from '../extracted-components/Button'

figma.connect(Button, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6543-36744', {
  example: () => <Button />,
})
