import{j as a}from"./jsx-runtime-SwSI87LU.js";import{r as c}from"./index-C5e9SFkp.js";import{u as h,a as y,b as W}from"./DefaultPropsProvider-BryCJ0gc.js";import{g as C,a as D,c as v,s as p,m as V,r as he}from"./createSimplePaletteValueFilter-Ev50d7cE.js";import{u as ye,P as Y,T as _}from"./Typography-DxtLGdhG.js";import{u as f}from"./useSlot-BMasqcSd.js";import{F as Ce,a as De,M as ve,B as be}from"./Modal-DXBn0c7W.js";import{a as ke}from"./useId-BvXI2G-p.js";import{B as u}from"./Button-4Tqjva0R.js";import"./useTheme-ZwBhRu-c.js";import"./useTimeout-BZPSDDpo.js";import"./index-BQcl82tf.js";import"./index-vofeE47f.js";import"./Button-BUsbi3P-.js";function Se(t){return C("MuiDialog",t)}D("MuiDialog",["root","backdrop","scrollPaper","scrollBody","container","paper","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);const H=c.createContext({}),Te=p(be,{name:"MuiDialog",slot:"Backdrop"})({zIndex:-1}),We=t=>{const{classes:e,scroll:o,maxWidth:s,fullWidth:i,fullScreen:r}=t,n={root:["root"],backdrop:["backdrop"],container:["container",`scroll${W(o)}`],paper:["paper",`paperWidth${W(String(s))}`,i&&"paperFullWidth",r&&"paperFullScreen"]};return v(n,Se,e)},we=p(ve,{name:"MuiDialog",slot:"Root"})({"@media print":{position:"absolute !important"}}),Me=p("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.container,e[`scroll${W(o.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),je=p(Y,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperWidth${W(String(o.maxWidth))}`],o.fullWidth&&e.paperFullWidth,o.fullScreen&&e.paperFullScreen]}})(V(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`}},{props:{maxWidth:"xs",scroll:"body"},style:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`}})),...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e,scroll:"body"},style:{[t.breakpoints.down(t.breakpoints.values[e]+64)]:{maxWidth:"calc(100% - 64px)"}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0}},{props:({ownerState:e})=>e.fullScreen&&e.scroll==="body",style:{margin:0,maxWidth:"100%"}}]}))),Be=c.forwardRef(function(e,o){const s=h({props:e,name:"MuiDialog"}),i=ye(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,"aria-modal":d=!0,children:M,className:G,fullScreen:X=!1,fullWidth:J=!1,maxWidth:K="sm",onClick:F,onClose:j,open:A,PaperComponent:Q=Y,role:Z="dialog",scroll:ee="paper",slots:te={},slotProps:oe={},transitionDuration:P=r,...ae}=s,m={...s,fullScreen:X,fullWidth:J,maxWidth:K,scroll:ee},b=We(m),B=c.useRef(),se=x=>{B.current=x.target===x.currentTarget},ie=x=>{F&&F(x),B.current&&(B.current=null,j&&j(x,"backdropClick"))},R=ke(l),re=c.useMemo(()=>({titleId:R}),[R]),g={slots:te,slotProps:oe},[ne,le]=f("root",{elementType:we,shouldForwardComponentProp:!0,externalForwardedProps:g,ownerState:m,className:y(b.root,G),ref:o}),[ce,pe]=f("backdrop",{elementType:Te,shouldForwardComponentProp:!0,externalForwardedProps:g,ownerState:m,className:b.backdrop}),[de,ue]=f("paper",{elementType:je,shouldForwardComponentProp:!0,externalForwardedProps:g,ownerState:m,className:b.paper,additionalProps:{elevation:24,role:Z,"aria-describedby":n,"aria-labelledby":R,"aria-modal":d,tabIndex:-1,[Ce]:""}}),[me,ge]=f("container",{elementType:Me,externalForwardedProps:g,ownerState:m,className:b.container}),[xe,fe]=f("transition",{elementType:De,externalForwardedProps:g,ownerState:m,additionalProps:{appear:!0,in:A,timeout:P,role:"presentation"}});return a.jsx(ne,{closeAfterTransition:!0,slots:{backdrop:ce},slotProps:{backdrop:{transitionDuration:P,...pe}},onClose:j,open:A,onClick:ie,...le,...ae,children:a.jsx(xe,{...fe,children:a.jsx(me,{onMouseDown:se,...ge,children:a.jsx(de,{as:Q,...ue,children:a.jsx(H.Provider,{value:re,children:M})})})})})});function Re(t){return C("MuiDialogTitle",t)}const Fe=D("MuiDialogTitle",["root"]),Ae=t=>{const{classes:e}=t;return v({root:["root"]},Re,e)},Pe=p(_,{name:"MuiDialogTitle",slot:"Root"})({padding:"16px 24px",flex:"0 0 auto"}),Oe=c.forwardRef(function(e,o){const s=h({props:e,name:"MuiDialogTitle"}),{className:i,id:r,...n}=s,l=s,d=Ae(l),{titleId:M=r}=c.useContext(H);return a.jsx(Pe,{component:"h2",className:y(d.root,i),ownerState:l,ref:o,variant:"h6",id:r??M,...n})});function Ne(t){return C("MuiDialogContent",t)}D("MuiDialogContent",["root","dividers"]);const Ue=t=>{const{classes:e,dividers:o}=t;return v({root:["root",o&&"dividers"]},Ne,e)},$e=p("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.dividers&&e.dividers]}})(V(({theme:t})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${Fe.root} + &`]:{paddingTop:0}}}]}))),Ie=c.forwardRef(function(e,o){const s=h({props:e,name:"MuiDialogContent"}),{className:i,dividers:r=!1,...n}=s,l={...s,dividers:r},d=Ue(l);return a.jsx($e,{className:y(d.root,i),ownerState:l,ref:o,...n})});function ze(t){return C("MuiDialogContentText",t)}D("MuiDialogContentText",["root"]);const qe=t=>{const{classes:e}=t,s=v({root:["root"]},ze,e);return{...e,...s}},Ee=p(_,{shouldForwardProp:t=>he(t)||t==="classes",name:"MuiDialogContentText",slot:"Root"})({}),Le=c.forwardRef(function(e,o){const s=h({props:e,name:"MuiDialogContentText"}),{children:i,className:r,...n}=s,l=qe(n);return a.jsx(Ee,{component:"p",variant:"body1",color:"textSecondary",ref:o,ownerState:n,className:y(l.root,r),...s,classes:l})});function Ve(t){return C("MuiDialogActions",t)}D("MuiDialogActions",["root","spacing"]);const Ye=t=>{const{classes:e,disableSpacing:o}=t;return v({root:["root",!o&&"spacing"]},Ve,e)},_e=p("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),He=c.forwardRef(function(e,o){const s=h({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:r=!1,...n}=s,l={...s,disableSpacing:r},d=Ye(l);return a.jsx(_e,{className:y(d.root,i),ownerState:l,ref:o,...n})});function w({open:t=!0,maxWidth:e="sm",title:o,children:s,actions:i,onClose:r,fullWidth:n=!0}){return a.jsxs(Be,{open:t,maxWidth:e,fullWidth:n,onClose:r,children:[o&&a.jsx(Oe,{children:o}),s&&a.jsx(Ie,{dividers:!!o,children:typeof s=="string"?a.jsx(Le,{children:s}):s}),i&&a.jsx(He,{children:i})]})}w.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"Controls open state",defaultValue:{value:"true",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:'Maps to Figma "Max Width" — xs | sm | md | lg | xl',defaultValue:{value:"'sm'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Dialog title"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog content"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when backdrop/Escape pressed"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const lt={title:"Components/Dialog",component:w,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`127:59921\` · 5 variants

Built on **MUI Dialog** with the GFG theme applied. Border radius 4px, standard MUI elevation-24 shadow.

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Max Width | \`maxWidth\` | xs / sm / md / lg / xl |

### Developer usage
\`\`\`tsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

<Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>Content</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
  </DialogActions>
</Dialog>
\`\`\`
        `}}},argTypes:{open:{control:"boolean"},maxWidth:{control:"select",options:["xs","sm","md","lg","xl"],description:'Maps to Figma "Max Width" — 5 variants'},title:{control:"text"}}},k={args:{open:!0,maxWidth:"sm",title:"Dialog Title",children:"Dialog content goes here. Use dialogs sparingly — only for information that requires user attention or action.",actions:a.jsxs(a.Fragment,{children:[a.jsx(u,{variant:"text",color:"primary",children:"Cancel"}),a.jsx(u,{variant:"contained",color:"primary",children:"Confirm"})]})}},S={render:()=>{const[t,e]=c.useState(!1);return a.jsxs("div",{style:{padding:"40px"},children:[a.jsx(u,{onClick:()=>e(!0),children:"Open Dialog"}),a.jsx(w,{open:t,maxWidth:"sm",title:"Delete item?",onClose:()=>e(!1),actions:a.jsxs(a.Fragment,{children:[a.jsx(u,{variant:"text",color:"primary",onClick:()=>e(!1),children:"Cancel"}),a.jsx(u,{variant:"contained",color:"error",onClick:()=>e(!1),children:"Delete"})]}),children:"This action cannot be undone. Are you sure you want to permanently delete this item?"})]})},parameters:{docs:{description:{story:"Interactive example — click to open. Escape key or backdrop click closes."}}}},T={render:()=>{const[t,e]=c.useState(!1),[o,s]=c.useState("sm");return a.jsxs("div",{style:{padding:"40px",display:"flex",gap:"12px",flexWrap:"wrap"},children:[["xs","sm","md","lg","xl"].map(i=>a.jsxs(u,{variant:"outlined",onClick:()=>{s(i),e(!0)},children:["Open ",i.toUpperCase()]},i)),a.jsxs(w,{open:t,maxWidth:o,title:`Max Width: ${o}`,onClose:()=>e(!1),actions:a.jsx(u,{variant:"contained",onClick:()=>e(!1),children:"Close"}),children:['This dialog uses maxWidth="',o,'" — maps to Figma "Max Width" property (5 variants total).']})]})},parameters:{docs:{description:{story:"All 5 Figma Max Width variants — xs | sm | md | lg | xl"}}}};var O,N,U;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'Dialog Title',
    children: 'Dialog content goes here. Use dialogs sparingly — only for information that requires user attention or action.',
    actions: <>
        <Button variant="text" color="primary">Cancel</Button>
        <Button variant="contained" color="primary">Confirm</Button>
      </>
  }
}`,...(U=(N=k.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var $,I,z;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: '40px'
    }}>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} maxWidth="sm" title="Delete item?" onClose={() => setOpen(false)} actions={<>
              <Button variant="text" color="primary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
            </>}>
          This action cannot be undone. Are you sure you want to permanently delete this item?
        </Dialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example — click to open. Escape key or backdrop click closes.'
      }
    }
  }
}`,...(z=(I=S.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var q,E,L;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');
    return <div style={{
      padding: '40px',
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(s => <Button key={s} variant="outlined" onClick={() => {
        setSize(s);
        setOpen(true);
      }}>
            Open {s.toUpperCase()}
          </Button>)}
        <Dialog open={open} maxWidth={size} title={\`Max Width: \${size}\`} onClose={() => setOpen(false)} actions={<Button variant="contained" onClick={() => setOpen(false)}>Close</Button>}>
          This dialog uses maxWidth="{size}" — maps to Figma "Max Width" property (5 variants total).
        </Dialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All 5 Figma Max Width variants — xs | sm | md | lg | xl'
      }
    }
  }
}`,...(L=(E=T.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ct=["Default","Interactive","AllSizes"];export{T as AllSizes,k as Default,S as Interactive,ct as __namedExportsOrder,lt as default};
