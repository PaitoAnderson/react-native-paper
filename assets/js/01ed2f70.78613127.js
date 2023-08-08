"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1839],{8599:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=o(87462),l=(o(67294),o(3905)),r=o(50214),p=(o(58764),o(29518));const a={title:"FAB.Group"},i=void 0,s={unversionedId:"components/FAB/FABGroup",id:"components/FAB/FABGroup",title:"FAB.Group",description:"A component to display a stack of FABs with related actions in a speed dial.",source:"@site/docs/components/FAB/FABGroup.mdx",sourceDirName:"components/FAB",slug:"/components/FAB/FABGroup",permalink:"/react-native-paper/docs/components/FAB/FABGroup",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/FAB/FABGroup.tsx",tags:[],version:"current",frontMatter:{title:"FAB.Group"},sidebar:"components",previous:{title:"AnimatedFAB",permalink:"/react-native-paper/docs/components/FAB/AnimatedFAB"},next:{title:"HelperText",permalink:"/react-native-paper/docs/components/HelperText/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"actions (required)",id:"actions-required",level:3},{value:"icon (required)",id:"icon-required",level:3},{value:"accessibilityLabel",id:"accessibilitylabel",level:3},{value:"color",id:"color",level:3},{value:"backdropColor",id:"backdropcolor",level:3},{value:"rippleColor",id:"ripplecolor",level:3},{value:"onPress",id:"onpress",level:3},{value:"onLongPress",id:"onlongpress",level:3},{value:"toggleStackOnLongPress",id:"togglestackonlongpress",level:3},{value:"delayLongPress",id:"delaylongpress",level:3},{value:"enableLongPressWhenStackOpened",id:"enablelongpresswhenstackopened",level:3},{value:"open (required)",id:"open-required",level:3},{value:"onStateChange (required)",id:"onstatechange-required",level:3},{value:"visible (required)",id:"visible-required",level:3},{value:"style",id:"style",level:3},{value:"fabStyle",id:"fabstyle",level:3},{value:'variant  <span class="badge badge-supported "><span class="badge-text">Available in v5.x with theme version 3</span></span>',id:"variant--available-in-v5x-with-theme-version-3",level:3},{value:"theme",id:"theme",level:3},{value:"label",id:"label",level:3},{value:"testID",id:"testid",level:3}],c={toc:u};function k(e){let{components:n,...o}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A component to display a stack of FABs with related actions in a speed dial.\nTo render the group above other components, you'll need to wrap it with the ",(0,l.kt)("a",{parentName:"p",href:"../Portal"},(0,l.kt)("inlineCode",{parentName:"a"},"Portal"))," component."),(0,l.kt)(p.Z,{screenshotData:"screenshots/fab-group.gif",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { FAB, Portal, PaperProvider } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [state, setState] = React.useState({ open: false });\n\n  const onStateChange = ({ open }) => setState({ open });\n\n  const { open } = state;\n\n  return (\n    <PaperProvider>\n      <Portal>\n        <FAB.Group\n          open={open}\n          visible\n          icon={open ? 'calendar-today' : 'plus'}\n          actions={[\n            { icon: 'plus', onPress: () => console.log('Pressed add') },\n            {\n              icon: 'star',\n              label: 'Star',\n              onPress: () => console.log('Pressed star'),\n            },\n            {\n              icon: 'email',\n              label: 'Email',\n              onPress: () => console.log('Pressed email'),\n            },\n            {\n              icon: 'bell',\n              label: 'Remind',\n              onPress: () => console.log('Pressed notifications'),\n            },\n          ]}\n          onStateChange={onStateChange}\n          onPress={() => {\n            if (open) {\n              // do something if the speed dial is open\n            }\n          }}\n        />\n      </Portal>\n    </PaperProvider>\n  );\n};\n\nexport default MyComponent;\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"actions-required"},"actions (required)")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"actions",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"icon-required"},"icon (required)")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"icon",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"accessibilitylabel"},"accessibilityLabel")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"accessibilityLabel",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"color"},"color")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"color",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"backdropcolor"},"backdropColor")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"backdropColor",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"ripplecolor"},"rippleColor")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"rippleColor",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"onpress"},"onPress")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"onPress",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"onlongpress"},"onLongPress")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"onLongPress",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"togglestackonlongpress"},"toggleStackOnLongPress")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"toggleStackOnLongPress",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"delaylongpress"},"delayLongPress")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"delayLongPress",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"enablelongpresswhenstackopened"},"enableLongPressWhenStackOpened")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"enableLongPressWhenStackOpened",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"open-required"},"open (required)")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"open",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"onstatechange-required"},"onStateChange (required)")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"onStateChange",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"visible-required"},"visible (required)")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"visible",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"style"},"style")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"style",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"fabstyle"},"fabStyle")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"fabStyle",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"variant--available-in-v5x-with-theme-version-3"},"variant  ",(0,l.kt)("span",{class:"badge badge-supported "},(0,l.kt)("span",{class:"badge-text"},"Available in v5.x with theme version 3")))),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"variant",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"theme"},"theme")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"theme",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"label"},"label")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"label",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"testid"},"testID")),(0,l.kt)(r.Z,{componentLink:"FAB/FABGroup",prop:"testID",mdxType:"PropTable"}),(0,l.kt)("hr",null),(0,l.kt)("span",null),(0,l.kt)("span",null),(0,l.kt)("span",null))}k.isMDXComponent=!0}}]);