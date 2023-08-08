"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1904],{78089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(87462),i=(o(67294),o(3905)),l=o(50214),a=(o(58764),o(29518));const s={title:"Dialog.Actions"},r=void 0,c={unversionedId:"components/Dialog/DialogActions",id:"components/Dialog/DialogActions",title:"Dialog.Actions",description:"A component to show a list of actions in a Dialog.",source:"@site/docs/components/Dialog/DialogActions.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogActions",permalink:"/react-native-paper/docs/components/Dialog/DialogActions",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogActions.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Actions"},sidebar:"components",previous:{title:"Dialog",permalink:"/react-native-paper/docs/components/Dialog/"},next:{title:"Dialog.Content",permalink:"/react-native-paper/docs/components/Dialog/DialogContent"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"children (required)",id:"children-required",level:3},{value:"style",id:"style",level:3},{value:"theme",id:"theme",level:3}],g={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A component to show a list of actions in a Dialog."),(0,i.kt)(a.Z,{screenshotData:"screenshots/dialog-actions.png",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, Dialog, Portal } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Actions>\n          <Button onPress={() => console.log('Cancel')}>Cancel</Button>\n          <Button onPress={() => console.log('Ok')}>Ok</Button>\n        </Dialog.Actions>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"children-required"},"children (required)")),(0,i.kt)(l.Z,{componentLink:"Dialog/DialogActions",prop:"children",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"style"},"style")),(0,i.kt)(l.Z,{componentLink:"Dialog/DialogActions",prop:"style",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("div",null,(0,i.kt)("h3",{id:"theme"},"theme")),(0,i.kt)(l.Z,{componentLink:"Dialog/DialogActions",prop:"theme",mdxType:"PropTable"}),(0,i.kt)("hr",null),(0,i.kt)("span",null),(0,i.kt)("span",null),(0,i.kt)("span",null))}u.isMDXComponent=!0}}]);