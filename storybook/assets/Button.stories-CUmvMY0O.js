import{j as e}from"./jsx-runtime-SwSI87LU.js";import{c as p}from"./createSvgIcon-P27-pI5c.js";import{B as r}from"./Button-4Tqjva0R.js";import"./index-C5e9SFkp.js";import"./DefaultPropsProvider-BryCJ0gc.js";import"./createSimplePaletteValueFilter-Ev50d7cE.js";import"./Button-BUsbi3P-.js";import"./useId-BvXI2G-p.js";import"./useTimeout-BZPSDDpo.js";const k=p(e.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})),m=p(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})),P=p(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),H=p(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"})),K={title:"Components/Button",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'\n**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node `6543:36744`\n\nBuilt on **MUI Button** with the GFG theme applied. 270 variants in Figma.\n\n### Exact Figma color tokens (sourced from Figma MCP per variant node)\n| Color | Contained BG | Text | Outlined / Text color | Figma token |\n|---|---|---|---|---|\n| Primary | `#af9577` | `#fbf9f7` | `#af9577` | `--primary/dark-dust` |\n| Secondary | `#333333` | `#ffffff` | `#333333` | `--neutral/rodeo-black` |\n| Error | `#a34740` | `#fbf9f7` | `#a34740` | `--good-wine-(error)/wine-1` |\n| Warning | `#8a5d1f` | `#ffffff` | `#8a5d1f` | `--good-ochre-(warning)/ochre-1` |\n| Info | `#2b4a60` | `#fbf9f7` | `#2b4a60` | `--good-night-(info)/night-1` |\n| Success | `#637058` | `#fbf9f7` | `#637058` | `--good-sage-(success)/sage-1` |\n\n### Typography tokens\n| Token | Value |\n|---|---|\n| `--font/family/body` | Lato Bold |\n| `--font/size/overline` | 11px |\n| Letter spacing | 1.98px |\n| `--radius/button` | 6px |\n| Height Large | 44px |\n| Height Medium | 34px |\n| Height Small | 24px |\n\n### Developer usage\n```tsx\nimport Button from \'@mui/material/Button\';\n// Wrap app with <ThemeProvider theme={gfgTheme}>\n<Button variant="contained" color="primary" size="medium">\n  Button\n</Button>\n```\n        '}}},argTypes:{variant:{control:"select",options:["contained","outlined","text"],description:'Maps to Figma "Variant" — Contained | Outlined | Text'},color:{control:"select",options:["primary","secondary","error","warning","info","success"],description:'Maps to Figma "Color"'},size:{control:"select",options:["large","medium","small"],description:'Maps to Figma "Size" — Large (44px) | Medium (34px) | Small (24px)'},disabled:{control:"boolean",description:'Maps to Figma "State=Disabled"'},children:{control:"text",description:'Maps to Figma "Label" text property'}}},a={args:{variant:"contained",color:"primary",size:"medium",children:"Button",disabled:!1}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"contained",children:"Contained"}),e.jsx(r,{variant:"outlined",children:"Outlined"}),e.jsx(r,{variant:"text",children:"Text"})]}),parameters:{docs:{description:{story:"Figma: Variant = Contained | Outlined | Text (Primary color, Medium size)"}}}},n={render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:["primary","secondary","error","warning","info","success"].map(t=>e.jsx(r,{variant:"contained",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))}),parameters:{docs:{description:{story:"Figma: Color = Primary | Secondary | Error | Warning | Info | Success"}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{size:"small",children:"Small — 24px"}),e.jsx(r,{size:"medium",children:"Medium — 34px"}),e.jsx(r,{size:"large",children:"Large — 44px"})]}),parameters:{docs:{description:{story:"Figma: Size = Small (24px) | Medium (34px) | Large (44px)"}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{startIcon:e.jsx(k,{}),children:"Start Icon"}),e.jsx(r,{endIcon:e.jsx(m,{}),children:"End Icon"}),e.jsx(r,{startIcon:e.jsx(H,{}),endIcon:e.jsx(m,{}),children:"Both Icons"}),e.jsx(r,{variant:"outlined",startIcon:e.jsx(P,{}),color:"error",children:"Delete"})]}),parameters:{docs:{description:{story:'Figma: "Start Icon" and "End Icon" boolean properties'}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{children:"Enabled"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"outlined",disabled:!0,children:"Outlined Disabled"}),e.jsx(r,{variant:"text",disabled:!0,children:"Text Disabled"})]}),parameters:{docs:{description:{story:"Figma: State = Enabled | Disabled"}}}},d={render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:["primary","secondary","error","warning","info","success"].map(t=>e.jsx(r,{variant:"outlined",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})},l={render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:["primary","secondary","error","warning","info","success"].map(t=>e.jsx(r,{variant:"text",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Button',
    disabled: false
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Variant = Contained | Outlined | Text (Primary color, Medium size)'
      }
    }
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,B,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <Button key={color} variant="contained" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Color = Primary | Secondary | Error | Warning | Info | Success'
      }
    }
  }
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,j,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button size="small">Small — 24px</Button>
      <Button size="medium">Medium — 34px</Button>
      <Button size="large">Large — 44px</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Size = Small (24px) | Medium (34px) | Large (44px)'
      }
    }
  }
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,F,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button startIcon={<StarIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowForwardIcon />}>End Icon</Button>
      <Button startIcon={<SendIcon />} endIcon={<ArrowForwardIcon />}>Both Icons</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Delete</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: "Start Icon" and "End Icon" boolean properties'
      }
    }
  }
}`,...(C=(F=i.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var z,M,W;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Outlined Disabled</Button>
      <Button variant="text" disabled>Text Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: State = Enabled | Disabled'
      }
    }
  }
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var T,L,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <Button key={color} variant="outlined" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>)}
    </div>
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var E,O,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <Button key={color} variant="text" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>)}
    </div>
}`,...(A=(O=l.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Q=["Playground","Variants","Colors","Sizes","WithIcons","States","OutlinedColors","TextColors"];export{n as Colors,d as OutlinedColors,a as Playground,s as Sizes,c as States,l as TextColors,o as Variants,i as WithIcons,Q as __namedExportsOrder,K as default};
