"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4337],{15692:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>T,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),s=t(50214);const o={title:"DataTable"},r=void 0,i={unversionedId:"components/DataTable/DataTable",id:"components/DataTable/DataTable",title:"DataTable",description:"Data tables allow displaying sets of data.",source:"@site/docs/components/DataTable/DataTable.mdx",sourceDirName:"components/DataTable",slug:"/components/DataTable/",permalink:"/react-native-paper/docs/components/DataTable/",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/DataTable/DataTable.tsx",tags:[],version:"current",frontMatter:{title:"DataTable"},sidebar:"components",previous:{title:"Chip",permalink:"/react-native-paper/docs/components/Chip/"},next:{title:"DataTable.Cell",permalink:"/react-native-paper/docs/components/DataTable/DataTableCell"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],b={toc:c};function T(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,n.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Data tables allow displaying sets of data."),(0,l.kt)("div",{class:"screenshots"},(0,l.kt)("figure",null,(0,l.kt)("img",{class:"large",src:"/react-native-paper/screenshots/data-table.png"}),(0,l.kt)("figcaption",null,"Data table"))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { DataTable } from 'react-native-paper';\n\nconst optionsPerPage = [2, 3, 4];\n\nconst MyComponent = () => {\n  const [page, setPage] = React.useState<number>(0);\n  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);\n\n  React.useEffect(() => {\n    setPage(0);\n  }, [itemsPerPage]);\n\n  return (\n    <DataTable>\n      <DataTable.Header>\n        <DataTable.Title>Dessert</DataTable.Title>\n        <DataTable.Title numeric>Calories</DataTable.Title>\n        <DataTable.Title numeric>Fat</DataTable.Title>\n      </DataTable.Header>\n\n      <DataTable.Row>\n        <DataTable.Cell>Frozen yogurt</DataTable.Cell>\n        <DataTable.Cell numeric>159</DataTable.Cell>\n        <DataTable.Cell numeric>6.0</DataTable.Cell>\n      </DataTable.Row>\n\n      <DataTable.Row>\n        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>\n        <DataTable.Cell numeric>237</DataTable.Cell>\n        <DataTable.Cell numeric>8.0</DataTable.Cell>\n      </DataTable.Row>\n\n      <DataTable.Pagination\n        page={page}\n        numberOfPages={3}\n        onPageChange={(page) => setPage(page)}\n        label=\"1-2 of 6\"\n        optionsPerPage={optionsPerPage}\n        itemsPerPage={itemsPerPage}\n        setItemsPerPage={setItemsPerPage}\n        showFastPagination\n        optionsLabel={'Rows per page'}\n      />\n    </DataTable>\n  );\n}\n\nexport default MyComponent;\n")),(0,l.kt)("span",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)(s.Z,{link:"DataTable/DataTable",mdxType:"PropTable"}))}T.isMDXComponent=!0}}]);