"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{25537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),o=(a(67294),a(3905)),r=a(50214),p=a(58764),s=a(29518);const l={title:"Appbar"},i=void 0,c={unversionedId:"components/Appbar/Appbar",id:"components/Appbar/Appbar",title:"Appbar",description:"A component to display action items in a bar. It can be placed at the top or bottom.",source:"@site/docs/components/Appbar/Appbar.mdx",sourceDirName:"components/Appbar",slug:"/components/Appbar/",permalink:"/react-native-paper/docs/components/Appbar/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Appbar/Appbar.tsx",tags:[],version:"current",frontMatter:{title:"Appbar"},sidebar:"components",previous:{title:"ActivityIndicator",permalink:"/react-native-paper/docs/components/ActivityIndicator"},next:{title:"Appbar.Action",permalink:"/react-native-paper/docs/components/Appbar/AppbarAction"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Top bar",id:"top-bar",level:3},{value:"Bottom bar",id:"bottom-bar",level:3},{value:"Props",id:"props",level:2},{value:"dark",id:"dark",level:3},{value:"children (required)",id:"children-required",level:3},{value:'mode  <span class="badge badge-supported "><span class="badge-text">Available in v5.x with theme version 3</span></span>',id:"mode--available-in-v5x-with-theme-version-3",level:3},{value:'elevated  <span class="badge badge-supported "><span class="badge-text">Available in v5.x with theme version 3</span></span>',id:"elevated--available-in-v5x-with-theme-version-3",level:3},{value:"safeAreaInsets",id:"safeareainsets",level:3},{value:"theme",id:"theme",level:3},{value:"style",id:"style",level:3},{value:"Theme colors",id:"theme-colors",level:2}],b={toc:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component to display action items in a bar. It can be placed at the top or bottom.\nThe top bar usually contains the screen title, controls such as navigation buttons, menu button etc.\nThe bottom bar usually provides access to a drawer and up to four actions."),(0,o.kt)("p",null,"By default Appbar uses primary color as a background, in dark theme with ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptive")," mode it will use surface colour instead.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme"},"Dark Theme")," for more informations"),(0,o.kt)(s.Z,{screenshotData:"screenshots/appbar.png",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"top-bar"},"Top bar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as React from \'react\';\nimport { Appbar } from \'react-native-paper\';\n\nconst MyComponent = () => (\n  <Appbar.Header>\n    <Appbar.BackAction onPress={() => {}} />\n    <Appbar.Content title="Title" />\n    <Appbar.Action icon="calendar" onPress={() => {}} />\n    <Appbar.Action icon="magnify" onPress={() => {}} />\n  </Appbar.Header>\n);\n\nexport default MyComponent;\n')),(0,o.kt)("h3",{id:"bottom-bar"},"Bottom bar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Appbar, FAB, useTheme } from 'react-native-paper';\nimport { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nconst BOTTOM_APPBAR_HEIGHT = 80;\nconst MEDIUM_FAB_HEIGHT = 56;\n\nconst MyComponent = () => {\n  const { bottom } = useSafeAreaInsets();\n  const theme = useTheme();\n\n  return (\n    <Appbar\n      style={[\n        styles.bottom,\n        {\n          height: BOTTOM_APPBAR_HEIGHT + bottom,\n          backgroundColor: theme.colors.elevation.level2,\n        },\n      ]}\n      safeAreaInsets={{ bottom }}\n    >\n      <Appbar.Action icon=\"archive\" onPress={() => {}} />\n      <Appbar.Action icon=\"email\" onPress={() => {}} />\n      <Appbar.Action icon=\"label\" onPress={() => {}} />\n      <Appbar.Action icon=\"delete\" onPress={() => {}} />\n      <FAB\n        mode=\"flat\"\n        size=\"medium\"\n        icon=\"plus\"\n        onPress={() => {}}\n        style={[\n          styles.fab,\n          { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },\n        ]}\n      />\n    </Appbar>\n  );\n};\n\nconst styles = StyleSheet.create({\n  bottom: {\n    backgroundColor: 'aquamarine',\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    bottom: 0,\n  },\n  fab: {\n    position: 'absolute',\n    right: 16,\n  },\n});\n\nexport default MyComponent;\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"dark"},"dark")),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"dark",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"children-required"},"children (required)")),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"children",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"mode--available-in-v5x-with-theme-version-3"},"mode  ",(0,o.kt)("span",{class:"badge badge-supported "},(0,o.kt)("span",{class:"badge-text"},"Available in v5.x with theme version 3")))),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"mode",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"elevated--available-in-v5x-with-theme-version-3"},"elevated  ",(0,o.kt)("span",{class:"badge badge-supported "},(0,o.kt)("span",{class:"badge-text"},"Available in v5.x with theme version 3")))),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"elevated",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"safeareainsets"},"safeAreaInsets")),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"safeAreaInsets",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"theme"},"theme")),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"theme",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"style"},"style")),(0,o.kt)(r.Z,{componentLink:"Appbar/Appbar",prop:"style",mdxType:"PropTable"}),(0,o.kt)("hr",null),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"theme-colors"},"Theme colors"),(0,o.kt)(p.Z,{themeColorsData:{default:{backgroundColor:"theme.colors.surface"},elevated:{backgroundColor:"theme.colors.elevation.level2"}},componentName:"Appbar",mdxType:"ThemeColorsTable"}),(0,o.kt)("span",null))}u.isMDXComponent=!0}}]);