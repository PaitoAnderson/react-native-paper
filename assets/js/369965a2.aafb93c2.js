"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6501],{89642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905)),s=n(50214);const r={title:"Modal"},l=void 0,i={unversionedId:"components/Modal",id:"components/Modal",title:"Modal",description:"The Modal component is a simple way to present content above an enclosing view.",source:"@site/docs/components/Modal.mdx",sourceDirName:"components",slug:"/components/Modal",permalink:"/react-native-paper/docs/components/Modal",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Modal.tsx",tags:[],version:"current",frontMatter:{title:"Modal"},sidebar:"components",previous:{title:"Menu.Item",permalink:"/react-native-paper/docs/components/Menu/MenuItem"},next:{title:"Portal",permalink:"/react-native-paper/docs/components/Portal/"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Modal component is a simple way to present content above an enclosing view.\nTo render the ",(0,a.kt)("inlineCode",{parentName:"p"},"Modal")," above other components, you'll need to wrap it with the ",(0,a.kt)("a",{parentName:"p",href:"./Portal"},(0,a.kt)("inlineCode",{parentName:"a"},"Portal"))," component."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"medium",src:"/react-native-paper/screenshots/modal.gif"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Modal, Portal, Text, Button, Provider } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const showModal = () => setVisible(true);\n  const hideModal = () => setVisible(false);\n  const containerStyle = {backgroundColor: 'white', padding: 20};\n\n  return (\n    <Provider>\n      <Portal>\n        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>\n          <Text>Example Modal.  Click outside this area to dismiss.</Text>\n        </Modal>\n      </Portal>\n      <Button style={{marginTop: 30}} onPress={showModal}>\n        Show\n      </Button>\n    </Provider>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("span",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(s.Z,{link:"Modal",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);