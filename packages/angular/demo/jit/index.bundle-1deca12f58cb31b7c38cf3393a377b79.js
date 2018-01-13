webpackJsonp([2],{148:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(92),n=(a.n(r),a(124)),p=(a.n(n),a(125)),o=(a.n(p),a(126)),l=a(5),i=a(326);Object(l._8)(),Object(o.a)().bootstrapModule(i.a)},326:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(5),n=a(66),p=a(89),o=a(139),l=a(351),i=function(){function e(){}return e.decorators=[{type:r.E,args:[{imports:[n.a,p.b,o.a],declarations:[l.a],bootstrap:[l.a]}]}],e.ctorParameters=function(){return[]},e}()},351:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(5),n=a(352),p=a(145),o=(a.n(p),a(146)),l=(a.n(o),a(147)),i=(a.n(l),function(){function e(){this.locale=null,this.schema=n.a,this.value={},this.color="black",this.dragula=p,this.markdownit=o,this.hljs=l,this.schemaSchema=n.b}return e.prototype.ngOnInit=function(){var e=this;"zh-CN"===navigator.language&&a(541)("./"+navigator.language+".js").then(function(t){e.locale=t.locale})},Object.defineProperty(e.prototype,"formattedSchema",{get:function(){return JSON.stringify(this.schema,null,"  ")},enumerable:!0,configurable:!0}),e.prototype.updateSchema=function(e){var t=e.value;try{this.schema=JSON.parse(t)}catch(e){console.log(e)}},Object.defineProperty(e.prototype,"valueHtml",{get:function(){return l.highlight("json",JSON.stringify(this.value,null,"  ")).value},enumerable:!0,configurable:!0}),e.prototype.updateValue=function(e){var t=e.value,a=e.isValid;this.value=t,this.color=a?"black":"red"},e.decorators=[{type:r.m,args:[{selector:"app",changeDetection:r.i.OnPush,template:'\n    <div>\n        <a href="https://github.com/plantain-00/schema-based-json-editor/tree/master/packages/angular/demo" target="_blank">the source code of the demo</a>\n        <br/>\n        <div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">\n            <json-editor [schema]="schemaSchema"\n                [initialValue]="formattedSchema"\n                (updateValue)="updateSchema($event)"\n                theme="bootstrap3"\n                icon="fontawesome4"\n                [locale]="locale"\n                [dragula]="dragula"\n                [markdownit]="markdownit"\n                [hljs]="hljs"\n                [forceHttps]="false">\n            </json-editor>\n        </div>\n        <div style="width: 500px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">\n            <json-editor [schema]="schema"\n                [initialValue]="value"\n                (updateValue)="updateValue($event)"\n                theme="bootstrap3"\n                icon="fontawesome4"\n                [locale]="locale"\n                [dragula]="dragula"\n                [markdownit]="markdownit"\n                [hljs]="hljs"\n                [forceHttps]="false">\n            </json-editor>\n        </div>\n        <div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px">\n            Value:\n            <pre [style.borderColor]="color"><code [innerHTML]="valueHtml"></code></pre>\n        </div>\n    </div>\n    '}]}],e.ctorParameters=function(){return[]},e}())},352:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var r={type:"object",title:"GUI:",description:"a description example",properties:{stringExample:{type:"string",title:"A string example",description:"a string description example",default:"a default string example",minLength:20,maxLength:25},booleanExample:{type:"boolean",title:"A boolean example",description:"a boolean description example",default:!0},numberExample:{type:"number",title:"A number example",description:"a number description example",default:123.4,minimum:10,exclusiveMinimum:!0,maximum:1e3,exclusiveMaximum:!0},integerExample:{type:"integer",title:"A integer example",description:"a integer description example",default:124,multipleOf:2},nullExample:{type:"null",title:"A null example",description:"a null description example",default:null},objectExample:{type:"object",title:"A object example",description:"a object description example",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},default:{},required:["propertyExample1","propertyExample2"]},arrayExample:{type:"array",title:"A array example",description:"a array description example",items:{type:"string",maxLength:15},default:["default item 1","default item 2"],minItems:1,uniqueItems:!0},readOnlyExample:{type:"string",readonly:!0,default:"abc"},readOnlyAndOptionalExample:{type:"string",readonly:!0,default:"abc"},enumExample:{type:"string",enum:["enum 1","enum 2"]},optionalExample:{type:"string"},optionalAndDefaultExample:{type:"string",default:"abc"},booleanOptionalExample:{type:"boolean"},colorExample:{type:"string",format:"color",default:"#000000"},textareaExample:{type:"string",format:"textarea"},patternExample:{type:"string",pattern:"^[A-z]{3}$",default:"abc"},imagePreviewExample:{type:"string",default:"http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg"},markdownExample:{type:"string",format:"markdown",default:"###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```"},codeExample:{type:"string",format:"code",default:"function foo(bar) {\n    console.log(bar);\n}\n"},itemTitleExample:{type:"array",items:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},required:["propertyExample1","propertyExample2"],collapsed:!0},default:[{propertyExample1:"foo",propertyExample2:1},{propertyExample1:"bar",propertyExample2:2},{propertyExample1:"baz",propertyExample2:3},{propertyExample1:"abc",propertyExample2:4},{propertyExample1:"def",propertyExample2:5},{propertyExample1:"ghi",propertyExample2:6}]},optionalObjectExample:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},maxProperties:1,minProperties:0},propertyOrderExample:{type:"object",properties:{propertyExample1:{type:"string",propertyOrder:3},propertyExample2:{type:"number",propertyOrder:1},propertyExample3:{type:"number",propertyOrder:2}}},collapsedObjectExample:{type:"object",properties:{propertyExample1:{type:"string"}},collapsed:!0},emptyEnumExample:{type:"string",enum:[]}},required:["stringExample","booleanExample","numberExample","integerExample","nullExample","objectExample","arrayExample","readOnlyExample","enumExample","colorExample","textareaExample","patternExample","imagePreviewExample","markdownExample","codeExample","performanceExample","itemTitleExample","optionalObjectExample","propertyOrderExample","collapsedObjectExample","emptyEnumExample"]},n={title:"Schema:",type:"string",format:"code"}},541:function(e,t,a){function r(e){var t=n[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"./zh-CN.js":[544,0]};r.keys=function(){return Object.keys(n)},r.id=541,e.exports=r}},[148]);