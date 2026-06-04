import{j as a}from"./jsx-runtime-SwSI87LU.js";import{r as S}from"./index-C5e9SFkp.js";import{u as v,a as k}from"./DefaultPropsProvider-BryCJ0gc.js";import{g as M,a as T,c as w,s as u}from"./createSimplePaletteValueFilter-Ev50d7cE.js";import{P as pe,T as m,t as U}from"./Typography-DxtLGdhG.js";import{u as f}from"./useSlot-BMasqcSd.js";import{B}from"./Button-4Tqjva0R.js";import"./useTheme-ZwBhRu-c.js";import"./Button-BUsbi3P-.js";import"./useId-BvXI2G-p.js";import"./useTimeout-BZPSDDpo.js";function me(e){return M("MuiCard",e)}T("MuiCard",["root"]);const ue=e=>{const{classes:t}=e;return w({root:["root"]},me,t)},Ce=u(pe,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),I=S.forwardRef(function(t,o){const r=v({props:t,name:"MuiCard"}),{className:i,raised:n=!1,...d}=r,s={...r,raised:n},l=ue(s);return a.jsx(Ce,{className:k(l.root,i),elevation:n?8:void 0,ref:o,ownerState:s,...d})});function he(e){return M("MuiCardContent",e)}T("MuiCardContent",["root"]);const ye=e=>{const{classes:t}=e;return w({root:["root"]},he,t)},ge=u("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),fe=S.forwardRef(function(t,o){const r=v({props:t,name:"MuiCardContent"}),{className:i,component:n="div",...d}=r,s={...r,component:n},l=ye(s);return a.jsx(ge,{as:n,className:k(l.root,i),ownerState:s,ref:o,...d})});function be(e){return M("MuiCardHeader",e)}const P=T("MuiCardHeader",["root","avatar","action","content","title","subheader"]),xe=e=>{const{classes:t}=e;return w({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},be,t)},Se=u("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${P.title}`]:t.title},{[`& .${P.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),ve=u("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),Me=u("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Te=u("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${U.root}:where(& .${P.title})`]:{display:"block"},[`.${U.root}:where(& .${P.subheader})`]:{display:"block"}}),we=S.forwardRef(function(t,o){const r=v({props:t,name:"MuiCardHeader"}),{action:i,avatar:n,component:d="div",disableTypography:s=!1,subheader:l,title:C,slots:h={},slotProps:y={},...F}=r,c={...r,component:d,disableTypography:s},p=xe(c),g={slots:h,slotProps:y};let b=C;const[Z,ee]=f("title",{className:p.title,elementType:m,externalForwardedProps:g,ownerState:c,additionalProps:{variant:n?"body2":"h5",component:"span"}});b!=null&&b.type!==m&&!s&&(b=a.jsx(Z,{...ee,children:b}));let x=l;const[te,ae]=f("subheader",{className:p.subheader,elementType:m,externalForwardedProps:g,ownerState:c,additionalProps:{variant:n?"body2":"body1",color:"textSecondary",component:"span"}});x!=null&&x.type!==m&&!s&&(x=a.jsx(te,{...ae,children:x}));const[oe,re]=f("root",{ref:o,className:p.root,elementType:Se,externalForwardedProps:{...g,...F,component:d},ownerState:c}),[se,ne]=f("avatar",{className:p.avatar,elementType:ve,externalForwardedProps:g,ownerState:c}),[ie,de]=f("content",{className:p.content,elementType:Te,externalForwardedProps:g,ownerState:c}),[le,ce]=f("action",{className:p.action,elementType:Me,externalForwardedProps:g,ownerState:c});return a.jsxs(oe,{...re,children:[n&&a.jsx(se,{...ne,children:n}),a.jsxs(ie,{...de,children:[b,x]}),i&&a.jsx(le,{...ce,children:i})]})});function Re(e){return M("MuiCardMedia",e)}T("MuiCardMedia",["root","media","img"]);const je=e=>{const{classes:t,isMediaComponent:o,isImageComponent:r}=e;return w({root:["root",o&&"media",r&&"img"]},Re,t)},Ae=u("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:r,isImageComponent:i}=o;return[t.root,r&&t.media,i&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),Ne=["video","audio","picture","iframe","img"],He=["picture","img"],Be=S.forwardRef(function(t,o){const r=v({props:t,name:"MuiCardMedia"}),{children:i,className:n,component:d="div",image:s,src:l,style:C,...h}=r,y=Ne.includes(d),F=!y&&s?{backgroundImage:`url("${s}")`,...C}:C,c={...r,component:d,isMediaComponent:y,isImageComponent:He.includes(d)},p=je(c);return a.jsx(Ae,{className:k(p.root,n),as:d,role:!y&&s?"img":void 0,ref:o,style:F,ownerState:c,src:y?s||l:void 0,...h,children:i})});function Pe(e){return M("MuiCardActions",e)}T("MuiCardActions",["root","spacing"]);const ke=e=>{const{classes:t,disableSpacing:o}=e;return w({root:["root",!o&&"spacing"]},Pe,t)},Fe=u("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Ue=S.forwardRef(function(t,o){const r=v({props:t,name:"MuiCardActions"}),{disableSpacing:i=!1,className:n,...d}=r,s={...r,disableSpacing:i},l=ke(s);return a.jsx(Fe,{className:k(l.root,n),ownerState:s,ref:o,...d})});function X({title:e,subheader:t,image:o,imageHeight:r=194,children:i,actions:n,smallScreen:d=!1,blank:s=!1,elevation:l=1,sx:C}){const h=d?"100%":344;return s?a.jsx(I,{elevation:l,sx:{width:h,minHeight:120,...C}}):a.jsxs(I,{elevation:l,sx:{width:h,...C},children:[(e||t)&&a.jsx(we,{title:e,subheader:t}),o&&a.jsx(Be,{component:"img",height:r,image:o,alt:e||""}),i&&a.jsx(fe,{children:i}),n&&a.jsx(Ue,{sx:{justifyContent:"flex-end"},children:n})]})}X.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"string"},description:"Card title"},subheader:{required:!1,tsType:{name:"string"},description:"Card subtitle / secondary text"},image:{required:!1,tsType:{name:"string"},description:"Media — image URL"},imageHeight:{required:!1,tsType:{name:"number"},description:"Media height in px",defaultValue:{value:"194",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card body content"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Action buttons"},smallScreen:{required:!1,tsType:{name:"boolean"},description:'Maps to Figma "Small Screen" boolean',defaultValue:{value:"false",computed:!1}},blank:{required:!1,tsType:{name:"boolean"},description:'Maps to Figma "Blank" boolean — empty card shell',defaultValue:{value:"false",computed:!1}},elevation:{required:!1,tsType:{name:"number"},description:"Elevation shadow (Figma default: 1)",defaultValue:{value:"1",computed:!1}},sx:{required:!1,tsType:{name:"object"},description:""}}};const Ve={title:"Components/Card",component:X,tags:["autodocs"],parameters:{docs:{description:{component:`
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6562:38678\`

Built on **MUI Card** with the GFG theme applied. Border radius 4px, standard MUI elevation shadows.

### Developer usage
\`\`\`tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';

<Card>
  <CardHeader title="Title" subheader="Subtitle" />
  <CardContent>Content goes here.</CardContent>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
\`\`\`
        `}}}},R={args:{title:"Card Title",subheader:"Secondary text",children:a.jsx(m,{variant:"body2",color:"text.secondary",children:"Card content goes here. Cards can contain text, media, and actions."})}},j={args:{title:"Shrimp and Chorizo Paella",subheader:"September 14, 2024",image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=194&fit=crop",children:a.jsx(m,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests."}),actions:a.jsxs(a.Fragment,{children:[a.jsx(B,{variant:"text",color:"primary",size:"small",children:"Share"}),a.jsx(B,{variant:"text",color:"primary",size:"small",children:"Learn More"})]})}},A={args:{title:"Confirm deletion",children:a.jsx(m,{variant:"body2",children:"Are you sure you want to delete this item? This action cannot be undone."}),actions:a.jsxs(a.Fragment,{children:[a.jsx(B,{variant:"text",color:"primary",size:"small",children:"Cancel"}),a.jsx(B,{variant:"contained",color:"error",size:"small",children:"Delete"})]})}},N={args:{blank:!0},parameters:{docs:{description:{story:'Figma: "Blank=True" — empty card shell'}}}},H={args:{title:"Small Screen Card",subheader:"Compact layout",children:a.jsx(m,{variant:"body2",color:"text.secondary",children:"Reduced padding for mobile layouts."}),smallScreen:!0},parameters:{docs:{description:{story:'Figma: "Small Screen=True" — full width'}}}};var $,z,q;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    subheader: 'Secondary text',
    children: <Typography variant="body2" color="text.secondary">Card content goes here. Cards can contain text, media, and actions.</Typography>
  }
}`,...(q=(z=R.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var E,D,O;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Shrimp and Chorizo Paella',
    subheader: 'September 14, 2024',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=194&fit=crop',
    children: <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook together with your guests.</Typography>,
    actions: <>
        <Button variant="text" color="primary" size="small">Share</Button>
        <Button variant="text" color="primary" size="small">Learn More</Button>
      </>
  }
}`,...(O=(D=j.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var _,L,W;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Confirm deletion',
    children: <Typography variant="body2">Are you sure you want to delete this item? This action cannot be undone.</Typography>,
    actions: <>
        <Button variant="text" color="primary" size="small">Cancel</Button>
        <Button variant="contained" color="error" size="small">Delete</Button>
      </>
  }
}`,...(W=(L=A.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var G,V,Y;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    blank: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma: "Blank=True" — empty card shell'
      }
    }
  }
}`,...(Y=(V=N.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var J,K,Q;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Small Screen Card',
    subheader: 'Compact layout',
    children: <Typography variant="body2" color="text.secondary">Reduced padding for mobile layouts.</Typography>,
    smallScreen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Figma: "Small Screen=True" — full width'
      }
    }
  }
}`,...(Q=(K=H.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ye=["Default","WithMedia","WithActions","Blank","SmallScreen"];export{N as Blank,R as Default,H as SmallScreen,A as WithActions,j as WithMedia,Ye as __namedExportsOrder,Ve as default};
