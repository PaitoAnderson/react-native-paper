"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9585],{13491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),i=t(50214);const s={title:"AnimatedFAB"},r=void 0,l={unversionedId:"components/FAB/AnimatedFAB",id:"components/FAB/AnimatedFAB",title:"AnimatedFAB",description:"An animated, extending horizontally floating action button represents the primary action in an application.",source:"@site/docs/components/FAB/AnimatedFAB.mdx",sourceDirName:"components/FAB",slug:"/components/FAB/AnimatedFAB",permalink:"/react-native-paper/docs/components/FAB/AnimatedFAB",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/FAB/AnimatedFAB.tsx",tags:[],version:"current",frontMatter:{title:"AnimatedFAB"},sidebar:"components",previous:{title:"FAB",permalink:"/react-native-paper/docs/components/FAB/"},next:{title:"FAB.Group",permalink:"/react-native-paper/docs/components/FAB/FABGroup"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An animated, extending horizontally floating action button represents the primary action in an application."),(0,o.kt)("div",{class:"screenshots"},(0,o.kt)("img",{class:"small",src:"/react-native-paper/screenshots/animated-fab.gif"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  StyleProp,\n  ViewStyle,\n  Animated,\n  StyleSheet,\n  Platform,\n  ScrollView,\n  Text,\n  SafeAreaView,\n  I18nManager,\n} from 'react-native';\nimport { AnimatedFAB } from 'react-native-paper';\n\nconst MyComponent = ({\n  animatedValue,\n  visible,\n  extended,\n  label,\n  animateFrom,\n  style,\n  iconMode,\n}) => {\n  const [isExtended, setIsExtended] = React.useState(true);\n\n  const isIOS = Platform.OS === 'ios';\n\n  const onScroll = ({ nativeEvent }) => {\n    const currentScrollPosition =\n      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;\n\n    setIsExtended(currentScrollPosition <= 0);\n  };\n\n  const fabStyle = { [animateFrom]: 16 };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <ScrollView onScroll={onScroll}>\n        {[...new Array(100).keys()].map((_, i) => (\n          <Text>{i}</Text>\n        ))}\n      </ScrollView>\n      <AnimatedFAB\n        icon={'plus'}\n        label={'Label'}\n        extended={isExtended}\n        onPress={() => console.log('Pressed')}\n        visible={visible}\n        animateFrom={'right'}\n        iconMode={'static'}\n        style={[styles.fabStyle, style, fabStyle]}\n      />\n    </SafeAreaView>\n  );\n};\n\nexport default MyComponent;\n\nconst styles = StyleSheet.create({\n  container: {\n    flexGrow: 1,\n  },\n  fabStyle: {\n    bottom: 16,\n    right: 16,\n    position: 'absolute',\n  },\n});\n")),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(i.Z,{link:"FAB/AnimatedFAB",mdxType:"PropTable"}))}d.isMDXComponent=!0}}]);