"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6126],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(76775),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var g=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},89673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={title:"Getting Started"},s="Getting Started",p={unversionedId:"guides/getting-started",id:"guides/getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/guides/01-getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/react-native-paper/docs/guides/getting-started",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/guides/01-getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Theming",permalink:"/react-native-paper/docs/guides/theming"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Customization",id:"customization",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a Terminal in your project's folder and run:")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-paper\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-paper\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)("inlineCode",{parentName:"li"},"v5")," there is a need to install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/th3rdwave/react-native-safe-area-context"},"react-native-safe-area-context")," for handling safe area.")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,r.kt)("p",null,"Additionaly for ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS")," platform there is a requirement to link the native parts of the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're on a vanilla React Native project, you also need to install and link ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oblador/react-native-vector-icons"},"react-native-vector-icons"),".")),(0,r.kt)("p",null,"Specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialCommunityIcons")," icon pack needs to be included in the project, because some components use those internally (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"AppBar.BackAction")," on Android). "),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,r.kt)("p",null,"The library has specified dedicated steps for each platform. Please follow their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"installation guide")," in order to properly use icon fonts."),(0,r.kt)("p",null,"If you don't want to install vector icons, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satya164/babel-plugin-optional-require"},"babel-plugin-optional-require")," to opt-out."),(0,r.kt)("p",null,"If you use Expo, you don't need to install vector icons. But if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," file, make sure that it includes ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-preset-expo"),"."),(0,r.kt)("p",null,"To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-paper/babel")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," section in your ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," for production environment. It should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n  env: {\n    production: {\n      plugins: ['react-native-paper/babel'],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"If you created your project using Expo, it'll look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function(api) {\n  api.cache(true);\n  return {\n    presets: ['babel-preset-expo'],\n    env: {\n      production: {\n        plugins: ['react-native-paper/babel'],\n      },\n    },\n  };\n};\n")),(0,r.kt)("p",null,"The plugin only works if you are importing the library using ES2015 import statements and not with ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above examples are for the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," using Babel 7. If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native <= 0.55"),", you'll have a ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," file instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file and the content of the file will be different.")),(0,r.kt)("p",null,"If you're using Flow for typechecking your code, you need to add the following under the ",(0,r.kt)("inlineCode",{parentName:"p"},"[options]")," section in your ",(0,r.kt)("inlineCode",{parentName:"p"},".flowconfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"module.file_ext=.js\nmodule.file_ext=.native.js\nmodule.file_ext=.android.js\nmodule.file_ext=.ios.js\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Wrap your root component in ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-paper"),". If you have a vanilla React Native project, it's a good idea to add it in the component which is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),". This will usually be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file. If you have an Expo project, you can do this inside the exported component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport { name as appName } from './app.json';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <PaperProvider>\n      <App />\n    </PaperProvider>\n  );\n}\n\nAppRegistry.registerComponent(appName, () => Main);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PaperProvider")," component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level."),(0,r.kt)("p",null,"If you have another provider (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"), wrap it outside ",(0,r.kt)("inlineCode",{parentName:"p"},"PaperProvider")," so that the context is available to components rendered inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal")," from the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Provider as PaperProvider } from 'react-native-paper';\nimport { Provider as StoreProvider } from 'react-redux';\nimport App from './src/App';\nimport store from './store';\n\nexport default function Main() {\n  return (\n    <StoreProvider store={store}>\n      <PaperProvider>\n        <App />\n      </PaperProvider>\n    </StoreProvider>\n  );\n}\n")),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"You can provide a custom theme to customize the colors, typescales etc. with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," component. Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/LightTheme.tsx"},"Material Design 3 default theme")," to see what customization options are supported."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst theme = {\n  ...DefaultTheme,\n  colors: {\n    ...DefaultTheme.colors,\n    primary: 'tomato',\n    secondary: 'yellow',\n  },\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For MD2 check the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v2/LightTheme.tsx"},"Material Design 2 default theme"),".")))}m.isMDXComponent=!0}}]);