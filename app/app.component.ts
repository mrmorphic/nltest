import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialDesignLightLayoutManager } from './materialdesignlayoutmanager';
import { ComponentNode } from './componentnode.interface';

@Component({
  selector: 'layout-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  	<div class="layout-editor">
  	  <h1>Layout Editor</h1>
	  <nlcomponent [data]="getComponentData()" [layoutManager]="layoutManager"></nlcomponent>
 	</div>
  `,
  styles: [`
  	.layout-editor {
  	  padding: 3px;
  	  margin: 5px;
  	  background-color: #eee;
  	}
  `]
})
export class AppComponent  {
	name = 'Page';

	layoutManager = new MaterialDesignLightLayoutManager();

	getComponentData(): ComponentNode {
		var data = JSON.parse(`
			{
				"TypeName":"verticalBox",
				"Children":[
					{
						"TypeName":"horizontalBox",
						"Children":[
							{
								"TypeName":"plainText",
								"Children":[],
								"BindingDefs":{
									"text":{
										"Property":"text",
										"Kind":0,
										"Value":"hello"
									}
								},
								"LayoutDefs":{
									"materialDesignLite": {
										"columns": {
											"sm": {
												"width": "6"
											}
										}
									}
								}
							},
							{
								"TypeName":"plainText",
								"Children":[],
								"BindingDefs":{
									"text":{"Property":"text","Kind":1,"Value":"foo"}
								},
								"LayoutDefs":{
									"materialDesignLite": {
										"columns": {
											"sm": {
												"width": "6"
											}
										}
									}
								}
							}
						],
						"BindingDefs":{},
						"LayoutDefs": {}
					}
				],
				"BindingDefs":{},
				"LayoutDefs":{}
			}
		`);
		return data;
	}
}
