import{j as a}from"./jsx-runtime-SwSI87LU.js";import{c as B}from"./createSvgIcon-P27-pI5c.js";import{r as S}from"./index-C5e9SFkp.js";import{u as me,a as fe,b as i}from"./DefaultPropsProvider-BryCJ0gc.js";import{g as ue,a as xe,c as ve,s as Y,m as ye,b as he}from"./createSimplePaletteValueFilter-Ev50d7cE.js";import{u as V}from"./useSlot-BMasqcSd.js";const R=B(a.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"})),be=B(a.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),h=B(a.jsx("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}));function G(e){const o=S.useRef({});return S.useEffect(()=>{o.current=e}),o.current}function Ce(e){const{badgeContent:o,invisible:r=!1,max:n=99,showZero:t=!1}=e,c=G({badgeContent:o,max:n});let d=r;r===!1&&o===0&&!t&&(d=!0);const{badgeContent:l,max:p=n}=d?c:e,g=l&&Number(l)>p?`${p}+`:l;return{badgeContent:l,invisible:d,max:p,displayValue:g}}function Se(e){return ue("MuiBadge",e)}const Be=xe("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),b=10,C=4,Re=e=>{const{color:o,anchorOrigin:r,invisible:n,overlap:t,variant:c,classes:d={}}=e,l={root:["root"],badge:["badge",c,n&&"invisible",`anchorOrigin${i(r.vertical)}${i(r.horizontal)}`,`anchorOrigin${i(r.vertical)}${i(r.horizontal)}${i(t)}`,`overlap${i(t)}`,o!=="default"&&`color${i(o)}`]};return ve(l,Se,d)},we=Y("span",{name:"MuiBadge",slot:"Root"})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Ie=Y("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.badge,o[r.variant],o[`anchorOrigin${i(r.anchorOrigin.vertical)}${i(r.anchorOrigin.horizontal)}${i(r.overlap)}`],r.color!=="default"&&o[`color${i(r.color)}`],r.invisible&&o.invisible]}})(ye(({theme:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,"@media (forced-colors: active)":{border:"1px solid ButtonBorder"},transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.entries(e.palette).filter(he(["contrastText"])).map(([o])=>({props:{color:o},style:{backgroundColor:(e.vars||e).palette[o].main,color:(e.vars||e).palette[o].contrastText}})),{props:{variant:"dot"},style:{borderRadius:C,height:C*2,minWidth:C*2,padding:0}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}},{style:({ownerState:o})=>{const{vertical:r,horizontal:n}=o.anchorOrigin,t=o.overlap==="circular"?"14%":0;return{"--Badge-translateX":n==="right"?"50%":"-50%","--Badge-translateY":r==="top"?"-50%":"50%",top:r==="top"?t:"initial",bottom:r==="bottom"?t:"initial",right:n==="right"?t:"initial",left:n==="left"?t:"initial",transform:"scale(1) translate(var(--Badge-translateX), var(--Badge-translateY))",transformOrigin:`${n==="right"?"100%":"0%"} ${r==="top"?"0%":"100%"}`,[`&.${Be.invisible}`]:{transform:"scale(0) translate(var(--Badge-translateX), var(--Badge-translateY))"}}}}]})));function D(e){return{vertical:(e==null?void 0:e.vertical)??"top",horizontal:(e==null?void 0:e.horizontal)??"right"}}const je=S.forwardRef(function(o,r){const n=me({props:o,name:"MuiBadge"}),{anchorOrigin:t,className:c,classes:d,component:l,children:p,overlap:g="rectangular",color:w="default",invisible:X=!1,max:J=99,badgeContent:I,slots:K,slotProps:Q,showZero:j=!1,variant:v="standard",...ee}=n,{badgeContent:z,invisible:ae,max:oe,displayValue:re}=Ce({max:J,invisible:X,badgeContent:I,showZero:j}),ne=G({anchorOrigin:D(t),color:w,overlap:g,variant:v,badgeContent:I}),P=ae||z==null&&v!=="dot",{color:te=w,overlap:ie=g,anchorOrigin:se,variant:F=v}=P?ne:n,le=D(se),M=F!=="dot"?re:void 0,y={...n,badgeContent:z,invisible:P,max:oe,displayValue:M,showZero:j,anchorOrigin:le,color:te,overlap:ie,variant:F},O=Re(y),T={slots:K,slotProps:Q},[ce,de]=V("root",{elementType:we,externalForwardedProps:{...T,...ee},ownerState:y,className:fe(O.root,c),ref:r,additionalProps:{as:l}}),[pe,ge]=V("badge",{elementType:Ie,externalForwardedProps:T,ownerState:y,className:O.badge});return a.jsxs(ce,{...de,children:[p,a.jsx(pe,{...ge,children:M})]})});function s({variant:e="standard",color:o="primary",badgeContent:r,children:n,showZero:t=!1,max:c=99}){return a.jsx(je,{variant:e,color:o,badgeContent:e==="dot"?void 0:r,showZero:t,max:c,children:n})}s.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'dot'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'dot'"}]},description:'Maps to Figma "Variant" — Standard | Dot',defaultValue:{value:"'standard'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:'Maps to Figma "Color"',defaultValue:{value:"'primary'",computed:!1}},badgeContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Maps to Figma "Content" text — shown when variant=standard'},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The element the badge anchors to"},showZero:{required:!1,tsType:{name:"boolean"},description:"Hide badge when content is zero",defaultValue:{value:"false",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}}}};const Ve={title:"Components/Badge",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6587:47500\` · 13 variants

Built on **MUI Badge** with the GFG theme applied.

### Exact Figma token values (Badge uses standard MUI palette)
| Color | Hex |
|---|---|
| Primary | \`#1976d2\` |
| Secondary | \`#9c27b0\` |
| Error | \`#d32f2f\` |
| Warning | \`#ef6c00\` |
| Info | \`#0288d1\` |
| Success | \`#2e7d32\` |
| Font | Roboto Medium 12px |
| Dot size | 8×8px |

### Developer usage
\`\`\`tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
\`\`\`
        `}}},argTypes:{variant:{control:"select",options:["standard","dot"],description:'Maps to Figma "Variant" — Standard | Dot'},color:{control:"select",options:["default","primary","secondary","error","warning","info","success"],description:'Maps to Figma "Color"'},badgeContent:{control:"text",description:'Maps to Figma "Content" text'}}},m={args:{color:"primary",variant:"standard",badgeContent:4},render:e=>a.jsx("div",{style:{padding:"20px"},children:a.jsx(s,{...e,children:a.jsx(R,{sx:{fontSize:32,color:"#af9577"}})})})},f={render:()=>a.jsx("div",{style:{display:"flex",gap:"32px",padding:"20px",flexWrap:"wrap",alignItems:"flex-end"},children:["default","primary","secondary","error","warning","info","success"].map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[a.jsx(s,{color:e,badgeContent:4,children:a.jsx(R,{sx:{fontSize:32,color:"#af9577"}})}),a.jsx("span",{style:{fontSize:"11px",color:"#666",fontFamily:"Roboto, sans-serif"},children:e})]},e))}),parameters:{docs:{description:{story:"Figma: Color = Default | Primary | Secondary | Error | Warning | Info | Success"}}}},u={render:()=>a.jsx("div",{style:{display:"flex",gap:"32px",padding:"20px",flexWrap:"wrap",alignItems:"flex-end"},children:["primary","error","success","warning","info","secondary"].map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},children:[a.jsx(s,{variant:"dot",color:e,children:a.jsx(be,{sx:{fontSize:32,color:"#af9577"}})}),a.jsx("span",{style:{fontSize:"11px",color:"#666",fontFamily:"Roboto, sans-serif"},children:e})]},e))}),parameters:{docs:{description:{story:"Figma: Variant=Dot — 8×8px dot indicator, no content"}}}},x={render:()=>a.jsxs("div",{style:{display:"flex",gap:"32px",padding:"20px",alignItems:"center"},children:[a.jsx(s,{badgeContent:1,color:"primary",children:a.jsx(h,{sx:{fontSize:32}})}),a.jsx(s,{badgeContent:12,color:"error",children:a.jsx(h,{sx:{fontSize:32}})}),a.jsx(s,{badgeContent:100,color:"secondary",max:99,children:a.jsx(h,{sx:{fontSize:32}})}),a.jsx(s,{badgeContent:0,color:"primary",showZero:!0,children:a.jsx(R,{sx:{fontSize:32}})})]}),parameters:{docs:{description:{story:"Various badge content values — max prop caps at 99+, showZero forces display of 0"}}}};var $,N,W;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    variant: 'standard',
    badgeContent: 4
  },
  render: args => <div style={{
    padding: '20px'
  }}>
      <Badge {...args}><MailIcon sx={{
        fontSize: 32,
        color: '#af9577'
      }} /></Badge>
    </div>
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var H,L,A;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '20px',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }}>
          <Badge color={color} badgeContent={4}>
            <MailIcon sx={{
          fontSize: 32,
          color: '#af9577'
        }} />
          </Badge>
          <span style={{
        fontSize: '11px',
        color: '#666',
        fontFamily: 'Roboto, sans-serif'
      }}>{color}</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Color = Default | Primary | Secondary | Error | Warning | Info | Success'
      }
    }
  }
}`,...(A=(L=f.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,U,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '20px',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      {(['primary', 'error', 'success', 'warning', 'info', 'secondary'] as const).map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }}>
          <Badge variant="dot" color={color}>
            <NotificationsIcon sx={{
          fontSize: 32,
          color: '#af9577'
        }} />
          </Badge>
          <span style={{
        fontSize: '11px',
        color: '#666',
        fontFamily: 'Roboto, sans-serif'
      }}>{color}</span>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Variant=Dot — 8×8px dot indicator, no content'
      }
    }
  }
}`,...(k=(U=u.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var Z,q,_;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '20px',
    alignItems: 'center'
  }}>
      <Badge badgeContent={1} color="primary"><ShoppingCartIcon sx={{
        fontSize: 32
      }} /></Badge>
      <Badge badgeContent={12} color="error"><ShoppingCartIcon sx={{
        fontSize: 32
      }} /></Badge>
      <Badge badgeContent={100} color="secondary" max={99}><ShoppingCartIcon sx={{
        fontSize: 32
      }} /></Badge>
      <Badge badgeContent={0} color="primary" showZero><MailIcon sx={{
        fontSize: 32
      }} /></Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various badge content values — max prop caps at 99+, showZero forces display of 0'
      }
    }
  }
}`,...(_=(q=x.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const De=["Playground","AllColors","DotVariant","LargeValues"];export{f as AllColors,u as DotVariant,x as LargeValues,m as Playground,De as __namedExportsOrder,Ve as default};
