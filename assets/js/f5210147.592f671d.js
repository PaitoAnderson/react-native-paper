"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2384],{64421:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=o(87462),a=(o(67294),o(3905)),l=o(50214);const n={title:"Dialog.Title"},s=void 0,r={unversionedId:"components/Dialog/DialogTitle",id:"components/Dialog/DialogTitle",title:"Dialog.Title",description:"A component to show a title in a Dialog.",source:"@site/docs/components/Dialog/DialogTitle.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogTitle",permalink:"/react-native-paper/docs/components/Dialog/DialogTitle",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogTitle.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Title"},sidebar:"components",previous:{title:"Dialog.ScrollArea",permalink:"/react-native-paper/docs/components/Dialog/DialogScrollArea"},next:{title:"Divider",permalink:"/react-native-paper/docs/components/Divider"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component to show a title in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-title.png"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Title>This is a title</Dialog.Title>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(l.Z,{link:"Dialog/DialogTitle",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);