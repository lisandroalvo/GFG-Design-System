import{j as t}from"./jsx-runtime-SwSI87LU.js";import{r as k}from"./index-C5e9SFkp.js";import{u as L,a as N,b as u}from"./DefaultPropsProvider-BryCJ0gc.js";import{g as E,a as D,c as V,s as g,m as O,b as B}from"./createSimplePaletteValueFilter-Ev50d7cE.js";import{u as f}from"./useSlot-BMasqcSd.js";import{c as S}from"./createSvgIcon-P27-pI5c.js";import{a as Me}from"./useId-BvXI2G-p.js";import{a as Fe,C as We,B as Re}from"./Button-BUsbi3P-.js";import{P as ze,T as Be}from"./Typography-DxtLGdhG.js";import"./useTimeout-BZPSDDpo.js";import"./useTheme-ZwBhRu-c.js";function Oe(e){return E("MuiAlert",e)}const q=D("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","outlined","standard"]);function Pe(e){return E("MuiIconButton",e)}const Y=D("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),$e=e=>{const{classes:o,disabled:a,color:r,edge:i,size:n,loading:c}=e,d={root:["root",c&&"loading",a&&"disabled",r!=="default"&&`color${u(r)}`,i&&`edge${u(i)}`,`size${u(n)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return V(d,Pe,o)},ke=g(Fe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.loading&&o.loading,a.color!=="default"&&o[`color${u(a.color)}`],a.edge&&o[`edge${u(a.edge)}`],o[`size${u(a.size)}`]]}})(O(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:o=>!o.disableRipple,style:{"--IconButton-hoverBg":e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),O(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(B()).map(([o])=>({props:{color:o},style:{color:(e.vars||e).palette[o].main,"--IconButton-hoverBg":e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Y.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${Y.loading}`]:{color:"transparent"}}))),Le=g("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Ne=k.forwardRef(function(o,a){const r=L({props:o,name:"MuiIconButton"}),{edge:i=!1,children:n,className:c,color:d="default",disabled:y=!1,disableFocusRipple:x=!1,size:P="medium",id:A,loading:p=null,loadingIndicator:m,...$}=r,b=Me(A),C=m??t.jsx(We,{"aria-labelledby":b,color:"inherit",size:16}),h={...r,edge:i,color:d,disabled:y,disableFocusRipple:x,loading:p,loadingIndicator:C,size:P},l=$e(h);return t.jsxs(ke,{id:p?b:A,className:N(l.root,c),centerRipple:!0,internalNativeButton:!0,focusRipple:!x,disabled:y||p,ref:a,...$,ownerState:h,children:[typeof p=="boolean"&&t.jsx("span",{className:l.loadingWrapper,style:{display:"contents"},children:t.jsx(Le,{className:l.loadingIndicator,ownerState:h,children:p&&C})}),n]})}),Ee=S(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),De=S(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Ve=S(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Ue=S(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),He=S(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),qe=e=>{const{variant:o,color:a,severity:r,classes:i}=e,n={root:["root",`color${u(a||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return V(n,Oe,i)},Ye=g(ze,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,o[a.variant]]}})(O(({theme:e})=>{const o=e.palette.mode==="light"?e.darken:e.lighten,a=e.palette.mode==="light"?e.lighten:e.darken;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(B(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:a(e.palette[r].light,.9),[`& .${q.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(B(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${r}Color`]:o(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${q.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}}})),...Object.entries(e.palette).filter(B(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)}}}))]}})),_e=g("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ge=g("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ze=g("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),_={success:t.jsx(Ee,{fontSize:"inherit"}),warning:t.jsx(De,{fontSize:"inherit"}),error:t.jsx(Ve,{fontSize:"inherit"}),info:t.jsx(Ue,{fontSize:"inherit"})},Je=k.forwardRef(function(o,a){const r=L({props:o,name:"MuiAlert"}),{action:i,children:n,className:c,closeText:d="Close",color:y,icon:x,iconMapping:P=_,onClose:A,role:p="alert",severity:m="success",slotProps:$={},slots:b={},variant:C="standard",...h}=r,l={...r,color:y,severity:m,variant:C,colorSeverity:y||m},I=qe(l),v={slots:b,slotProps:$},[xe,Ae]=f("root",{ref:a,shouldForwardComponentProp:!0,className:N(I.root,c),elementType:Ye,externalForwardedProps:{...v,...h},ownerState:l,additionalProps:{role:p,elevation:0}}),[he,Se]=f("icon",{className:I.icon,elementType:_e,externalForwardedProps:v,ownerState:l}),[be,Ce]=f("message",{className:I.message,elementType:Ge,externalForwardedProps:v,ownerState:l}),[U,H]=f("action",{className:I.action,elementType:Ze,externalForwardedProps:v,ownerState:l}),[Ie,we]=f("closeButton",{elementType:Ne,externalForwardedProps:v,ownerState:l}),[Te,je]=f("closeIcon",{elementType:He,externalForwardedProps:v,ownerState:l});return t.jsxs(xe,{...Ae,children:[x!==!1?t.jsx(he,{...Se,children:x||P[m]||_[m]}):null,t.jsx(be,{...Ce,children:n}),i!=null?t.jsx(U,{...H,children:i}):null,i==null&&A?t.jsx(U,{...H,children:t.jsx(Ie,{size:"small","aria-label":d,title:d,color:"inherit",onClick:A,...we,children:t.jsx(Te,{fontSize:"small",...je})})}):null]})});function Ke(e){return E("MuiAlertTitle",e)}D("MuiAlertTitle",["root"]);const Qe=e=>{const{classes:o}=e;return V({root:["root"]},Ke,o)},Xe=g(Be,{name:"MuiAlertTitle",slot:"Root"})(O(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2}))),et=k.forwardRef(function(o,a){const r=L({props:o,name:"MuiAlertTitle"}),{className:i,...n}=r,c=r,d=Qe(c);return t.jsx(Xe,{gutterBottom:!0,component:"div",ownerState:c,ref:a,className:N(d.root,i),...n})});function s({severity:e="success",variant:o="standard",title:a,children:r="This is an alert message.",onClose:i,action:n}){return t.jsxs(Je,{severity:e,variant:o,onClose:i,action:n,children:[a&&t.jsx(et,{children:a}),r]})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'info' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:'Maps to Figma "Type" — Error | Warning | Info | Success',defaultValue:{value:"'success'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:'Maps to Figma "Variant" — Filled | Outlined | Standard',defaultValue:{value:"'standard'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:'Maps to Figma "Title" boolean — shows bold title when provided'},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Maps to Figma "Description"',defaultValue:{value:"'This is an alert message.'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Maps to Figma "On Close" boolean — shows × button when provided'},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Maps to Figma "Action" boolean — custom action element'}}};const ut={title:"Components/Alert",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · 12 variants

Built on **MUI Alert** with the GFG theme applied.

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Type | \`severity\` | Error / Warning / Info / Success |
| Variant | \`variant\` | Filled / Outlined / Standard |
| On Close | \`onClose\` | boolean in Figma → callback in code |
| Title | \`title\` | boolean in Figma → string in code |
| Description | \`children\` | text |
| Action | \`action\` | boolean in Figma → ReactNode in code |

### Developer usage
\`\`\`tsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

<Alert severity="success" variant="standard" onClose={() => {}}>
  <AlertTitle>Title</AlertTitle>
  Your message here.
</Alert>
\`\`\`
        `}}},argTypes:{severity:{control:"select",options:["success","error","warning","info"],description:'Maps to Figma "Type"'},variant:{control:"select",options:["standard","filled","outlined"],description:'Maps to Figma "Variant"'},title:{control:"text",description:'Maps to Figma "Title" boolean — provide string to show title'},children:{control:"text",description:'Maps to Figma "Description"'}}},w={args:{severity:"success",variant:"standard",children:"This is a success alert — check it out!"}},T={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[t.jsx(s,{severity:"success",children:"Success — your changes have been saved."}),t.jsx(s,{severity:"error",children:"Error — something went wrong. Please try again."}),t.jsx(s,{severity:"warning",children:"Warning — your session will expire in 5 minutes."}),t.jsx(s,{severity:"info",children:"Info — a new version of the app is available."})]}),parameters:{docs:{description:{story:"Figma: Type = Error | Warning | Info | Success (Standard variant)"}}}},j={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[t.jsx(s,{severity:"info",variant:"standard",children:"Standard — subtle background."}),t.jsx(s,{severity:"info",variant:"filled",children:"Filled — strong background colour."}),t.jsx(s,{severity:"info",variant:"outlined",children:"Outlined — border only."})]}),parameters:{docs:{description:{story:"Figma: Variant = Standard | Filled | Outlined"}}}},M={args:{severity:"warning",title:"Low storage",children:"Your account is almost out of storage. Delete unused files to continue."},parameters:{docs:{description:{story:'Figma: "Title" boolean enabled — provide a title string'}}}},F={args:{severity:"info",children:"This alert can be dismissed.",onClose:()=>console.log("closed")},parameters:{docs:{description:{story:'Figma: "On Close" boolean — provide onClose handler to show × button'}}}},W={args:{severity:"warning",children:"Your trial ends in 3 days.",action:t.jsx(Re,{color:"inherit",size:"small",children:"Upgrade"})},parameters:{docs:{description:{story:'Figma: "Action" boolean — pass action element'}}}},R={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[t.jsx(s,{severity:"success",variant:"filled",children:"Success — filled."}),t.jsx(s,{severity:"error",variant:"filled",children:"Error — filled."}),t.jsx(s,{severity:"warning",variant:"filled",children:"Warning — filled."}),t.jsx(s,{severity:"info",variant:"filled",children:"Info — filled."})]})},z={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:[t.jsx(s,{severity:"success",variant:"outlined",children:"Success — outlined."}),t.jsx(s,{severity:"error",variant:"outlined",children:"Error — outlined."}),t.jsx(s,{severity:"warning",variant:"outlined",children:"Warning — outlined."}),t.jsx(s,{severity:"info",variant:"outlined",children:"Info — outlined."})]})};var G,Z,J;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    variant: 'standard',
    children: 'This is a success alert — check it out!'
  }
}`,...(J=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '560px'
  }}>
      <Alert severity="success">Success — your changes have been saved.</Alert>
      <Alert severity="error">Error — something went wrong. Please try again.</Alert>
      <Alert severity="warning">Warning — your session will expire in 5 minutes.</Alert>
      <Alert severity="info">Info — a new version of the app is available.</Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Type = Error | Warning | Info | Success (Standard variant)'
      }
    }
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,re;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '560px'
  }}>
      <Alert severity="info" variant="standard">Standard — subtle background.</Alert>
      <Alert severity="info" variant="filled">Filled — strong background colour.</Alert>
      <Alert severity="info" variant="outlined">Outlined — border only.</Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Figma: Variant = Standard | Filled | Outlined'
      }
    }
  }
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ae,se;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Low storage',
    children: 'Your account is almost out of storage. Delete unused files to continue.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma: "Title" boolean enabled — provide a title string'
      }
    }
  }
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ne,le;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    children: 'This alert can be dismissed.',
    // eslint-disable-next-line no-console
    onClose: () => console.log('closed')
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma: "On Close" boolean — provide onClose handler to show × button'
      }
    }
  }
}`,...(le=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,de,pe;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    children: 'Your trial ends in 3 days.',
    action: <MuiButton color="inherit" size="small">Upgrade</MuiButton>
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma: "Action" boolean — pass action element'
      }
    }
  }
}`,...(pe=(de=W.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,ge,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '560px'
  }}>
      <Alert severity="success" variant="filled">Success — filled.</Alert>
      <Alert severity="error" variant="filled">Error — filled.</Alert>
      <Alert severity="warning" variant="filled">Warning — filled.</Alert>
      <Alert severity="info" variant="filled">Info — filled.</Alert>
    </div>
}`,...(me=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ve,fe,ye;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '560px'
  }}>
      <Alert severity="success" variant="outlined">Success — outlined.</Alert>
      <Alert severity="error" variant="outlined">Error — outlined.</Alert>
      <Alert severity="warning" variant="outlined">Warning — outlined.</Alert>
      <Alert severity="info" variant="outlined">Info — outlined.</Alert>
    </div>
}`,...(ye=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const gt=["Playground","AllSeverities","AllVariants","WithTitle","WithClose","WithAction","FilledAllSeverities","OutlinedAllSeverities"];export{T as AllSeverities,j as AllVariants,R as FilledAllSeverities,z as OutlinedAllSeverities,w as Playground,W as WithAction,F as WithClose,M as WithTitle,gt as __namedExportsOrder,ut as default};
