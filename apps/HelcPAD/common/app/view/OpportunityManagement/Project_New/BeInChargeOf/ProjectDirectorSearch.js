/*
 * File: app/view/ProjectDirectorSearch.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPAD.view.OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorSearch', {
    extend: 'Ext.Panel',
    id:'projectdirectorsearch_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '相似条件查找',
                cls:'textf',
                items: [
                    /*{
                    	id:'projectdirectorsearch_new_id_FH',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },*/
                    {
                    	xtype:'hiddenfield',
                    	id:'directorSearchOpportunity'
                    }
                ]
            },{
        		id:'projectdirectorresult_new_id_JR',
        		xtype:'list',
        		docked: 'top',
        		cls:'textSpecilF',
        		scrollable:false,
        		height:60,
        		itemTpl:[
					'<table width=100% style="color:#666;" border=0 height=15%>',						
					'  <tr>',
					'	 <td rowspan="3" width="15%"><b>源商机</b></td>',
					'    <td style="color:#000;padding-left:20px;font-size:12px;">{OpportunityNumber}</td>',
					'  </tr>',
					'  <tr>',
					'    <td width=40% style="padding-left:20px;font-size:12px;">{OpptyStatus}</td>',
					'    <td width=60% style="padding-left:20px;font-size:12px;">{Name}</td>',
					'  </tr>',
					'  <tr>',
					'	<td colspan = "2" style="padding-left:20px;font-size:12px;">{Account}</td>',
					'  </tr>',
					'</table>'
        		],
        		
        	},{
            	xtype:'toolbar',
                docked: 'top',
                height: 165,
                layout: 'hbox',
                style: 'background:#EDEBF1;',
                html:'<div style="width=100%">'+
		         	  '<div class="anOneDiv">'+
		    			'<div class="ysZhOne anOne" style="width:29%;" onclick="object.getController(\'OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorSearchCtrl\').projectdirectorsearch_new_id_FH();">'+SYB+'</div>'+
		    			'<div class="ysZhTwo anOne" id="aroundFound" style="width:29%;" onclick="object.getController(\'OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorSearchCtrl\').aroundFound();">范围查找</div>'+
		    			'<div class="ysZhThree anOne" id="keyFound" onclick="object.getController(\'OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorSearchCtrl\').keyFound();" style="width:29%;">关键字查找</div>'+
		    		  '</div>'+
	    		  		'<div class="anTwoDiv ysZhFour anOne" id="aroundFound" style="width:96%;" onclick="object.getController(\'OpportunityManagement.Project_New.BeInChargeOf.ProjectDirectorSearchCtrl\').aroundFound(\'true\');">联合查找</div>'+
		    		  '<div>'+
		    			  '<input type="text" class="anTwoDiv" id="letterKey" placeholder=" 请输入商机名称、客户、使用单位" />'+
		    		  '</div>'+
		    		  '<div width="100%" height="10" style="float:left;"></div>'+
		    		  '<div class="zDefineSelect">'+
						 '<select id="aroundPlace">'+
						 	'<option value="500">500米</option>'+
						 	'<option value="1000" selected>1000米</option>'+
						 	'<option value="1500">1500米</option>'+
						 	'<option value="2000">2000米</option>'+
						 	'<option value="2500">2500米</option>'+
						 '</select>'+
					  '</div>'+
				  '</div>',
            },{
            	xtype:'list',
            	id:'similarOpptyQueryList',
            	store:'DirectorOpptyResultStore',
            	cls:'textSpecilF',
            	height:'100%',
                itemTpl:[
							'<table border=0 width=100% style="color:#666"height=80>',
							'  <tr>',
							'    <td style="color:#000;padding-left:20px;font-size:12px;" colspan = "2">{OpportunityNumber}</td>',
							'  </tr>',
							'  <tr>',
							'    <td width=40% style="padding-left:20px;font-size:12px;">{OpptyStatus}</td>',
							'    <td width=60% style="padding-left:20px;font-size:12px;">{Name}</td>',
							'  </tr>',
							'  <tr>',
							'	<td colspan = "2" style="padding-left:20px;font-size:12px;">{Account}</td>',
							'  </tr>',
							'</table>'
                ],
                onItemDisclosure: true
            }
            /*{
                xtype: 'fieldset',
                title: '查找条件',
                cls:'textf',
                items: [
                    {
                    	id:'letterKey',
                        xtype: 'textfield',
                        label: '关键字',
                        placeHolder: '请输入客户或使用单位',
                        style:'float:left',
                        labelWidth:'40%',
                        width:'75%'
                    },{
                    	id:'keyFound',
                    	xtype:'button',
                    	text:'查找',
                    	style:'float:left',
                    	width:'25%',
                    	margin:'10 0 0 0',
                    },
                    {
                    	id:'aroundPlace',
                        xtype: 'selectfield',
                        label: '范围',
                        style:'float:left',
                        labelWidth:'40%',
                        width:'75%',
                        value:'1000米',
                        options:[
                            {text:'请选择周边范围',value:''},
                            {text:'500米',value:'500'},
                            {text:'1000米',value:'1000'},
                            {text:'1500米',value:'1500'},
                            {text:'2000米',value:'2000'},
                            {text:'2500米',value:'2500'},
                        ]
                        
                    },{
                    	id:'aroundFound',
                    	xtype:'button',
                    	text:'查找',
                    	width:'25%',
                    	style:'float:left',
                    	margin:'10 0 0 0',
                        
                    }
                ]
            }*/
        ]
    }

});