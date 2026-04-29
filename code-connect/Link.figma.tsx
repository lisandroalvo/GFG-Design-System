import figma from '@figma/code-connect'
import Link from '../extracted-components/Link'

figma.connect(Link, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6574-50682', {
  example: () => <Link />,
})
