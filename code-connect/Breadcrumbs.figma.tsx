import figma from '@figma/code-connect'
import Breadcrumbs from '../extracted-components/Breadcrumbs'

figma.connect(Breadcrumbs, 'https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS?node-id=6572-50436', {
  example: () => <Breadcrumbs />,
})
