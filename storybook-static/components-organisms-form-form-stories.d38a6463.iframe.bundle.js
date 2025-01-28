(self.webpackChunktodo_app_ang=self.webpackChunktodo_app_ang||[]).push([[345],{"./src/components/atoms/Button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/Button/button.css?ngResource"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{primary=!0;backgroundColor;size="medium";label="Button";type="button";buttonClick=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;onClick(){this.buttonClick.emit()}get classes(){const mode=this.primary?"storybook-button--primary":"storybook-button--secondary";return["storybook-button",`storybook-button--${this.size}`,mode]}static propDecorators={primary:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],buttonClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"storybook-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:' <button\n  type="button"\n  (click)="onClick()"\n  [ngClass]="classes"\n  [type]="type" \n  [ngStyle]="{ \'background-color\': backgroundColor }"\n>\n  {{ label }}\n</button>',styles:[_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],ButtonComponent)},"./src/components/atoms/InputBox/input-box.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>InputBoxComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_input_box_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/InputBox/input-box.component.css?ngResource"),_input_box_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_input_box_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let InputBoxComponent=class InputBoxComponent{id=`input-${Math.random().toString(36).substr(2,9)}`;label;type="text";placeholder="";value="";required=!1;disabled=!1;errorMessage="This field is required.";valueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter;isInvalid=!1;onInput(event){const target=event.target;this.value=target.value,this.isInvalid=this.required&&!this.value.trim(),this.valueChange.emit(this.value)}static propDecorators={id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],value:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],errorMessage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],valueChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};InputBoxComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-input-box",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_4__.YN],template:'\n   <label *ngIf="label" [for]="id">{{ label }}</label>\n  <div class="storybook-input">\n      <input\n        [id]="id"\n        [type]="type"\n        [value]="value || \'\'"\n        [placeholder]="placeholder"\n        [required]="required"\n        [disabled]="disabled"\n        (input)="onInput($event)"\n        [ngClass]="{\'invalid\': isInvalid}"\n        class="storybook-input"\n      />\n      <p *ngIf="errorMessage && isInvalid" class="error-message">{{ errorMessage }}</p>\n    </div>',styles:[_input_box_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],InputBoxComponent)},"./src/components/organisms/form/form.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyForm:()=>EmptyForm,FilledForm:()=>FilledForm,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),form_componentngResource=__webpack_require__("./src/components/organisms/form/form.component.css?ngResource"),form_componentngResource_default=__webpack_require__.n(form_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),button_component=__webpack_require__("./src/components/atoms/Button/button.component.ts"),input_box_component=__webpack_require__("./src/components/atoms/InputBox/input-box.component.ts");let FormComponent=class FormComponent{title;desc;submitEvent=new core.EventEmitter;onSubmit(){console.log("Form submitted with title: ",this.title," and description: ",this.desc),this.submitEvent.emit({title:this.title,desc:this.desc}),this.title="",this.desc=""}static propDecorators={submitEvent:[{type:core.Output}]}};FormComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-form",standalone:!0,imports:[fesm2022_forms.YN,button_component.Q,input_box_component.z,FormComponent],template:'\n  <form class="text-center" (ngSubmit)="onSubmit()">\n\n   <app-input-box label="Title" placeholder="Enter a title" [value]="title" [required]="true"\n     [errorMessage]="\'Title is required!\'" (valueChange)="title = $event">\n   </app-input-box>\n\n   <app-input-box label="Description" placeholder="Enter a description" [value]="desc" [required]="true"\n     [errorMessage]="\'Description is required!\'" (valueChange)="desc = $event">\n   </app-input-box>\n  \n   <storybook-button type="submit" size="medium" label="Add Todo" [primary]="true"></storybook-button>\n\n  </form>\n',styles:[form_componentngResource_default()]})],FormComponent);const form_stories={title:"Organisms/Form",component:FormComponent,argTypes:{submitEvent:{action:"submitted"}}},Template={render:args=>({component:FormComponent,props:args})},Default={...Template,args:{title:"Sample Todo",desc:"This is a sample todo description"}},EmptyForm={...Template,args:{title:"",desc:""}},WithError={...Template,args:{title:"",desc:""},parameters:{docs:{description:{story:"This form is shown with empty fields to show validation errors."}}}},FilledForm={...Template,args:{title:"Learn Storybook",desc:"Understand how to use Storybook with Angular."},parameters:{docs:{description:{story:"This form is filled with pre-populated values."}}}},__namedExportsOrder=["Default","EmptyForm","WithError","FilledForm"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    title: 'Sample Todo',\n    desc: 'This is a sample todo description'\n  }\n}",...Default.parameters?.docs?.source}}},EmptyForm.parameters={...EmptyForm.parameters,docs:{...EmptyForm.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    title: '',\n    desc: ''\n  }\n}",...EmptyForm.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    title: '',\n    // Empty to trigger error message\n    desc: ''\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'This form is shown with empty fields to show validation errors.'\n      }\n    }\n  }\n}",...WithError.parameters?.docs?.source}}},FilledForm.parameters={...FilledForm.parameters,docs:{...FilledForm.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    title: 'Learn Storybook',\n    desc: 'Understand how to use Storybook with Angular.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'This form is filled with pre-populated values.'\n      }\n    }\n  }\n}",...FilledForm.parameters?.docs?.source}}}},"./src/components/atoms/Button/button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n.storybook-button--primary {\n  background-color: #1ea7fd;\n  color: white;\n}\n.storybook-button--secondary {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n.storybook-button--small {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n.storybook-button--medium {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n.storybook-button--large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/components/atoms/InputBox/input-box.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* Container for the input and its label */\n.storybook-input {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px; /* Add spacing between form fields */\n    width: 100%; /* Make the input stretch to fill its container */\n    outline: none;\n  }\n  \n  /* Label Styling */\n  label {\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 8px;\n    color: #333;\n  }\n  \n  /* Input Box Styling */\n  input.storybook-input {\n    padding: 10px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: border-color 0.3s, box-shadow 0.3s;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  \n  /* input.storybook-input:focus {\n    border-color: #007bff;\n    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);\n    outline: none;\n  } */\n  \n  /* Invalid Input Styling */\n  input.storybook-input.invalid {\n    border-color: #dc3545; /* Red for invalid input */\n    background-color: #f8d7da;\n    color: #721c24;\n  }\n  \n  input.storybook-input.invalid:focus {\n    box-shadow: 0 0 4px rgba(220, 53, 69, 0.25);\n  }\n  \n  /* Disabled Input Styling */\n  input.storybook-input:disabled {\n    background-color: #e9ecef;\n    cursor: not-allowed;\n    color: #6c757d;\n  }\n  \n  /* Error Message Styling */\n  .error-message {\n    margin-top: 4px;\n    font-size: 12px;\n    color: #dc3545; /* Match the invalid input border color */\n  }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/components/organisms/form/form.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);