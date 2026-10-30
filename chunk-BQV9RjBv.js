import {f,M as Ms,C as CM,v as vM,w as wn,$ as $t,b as bS,a as $e,E as Ee,u as ud,k as ke,K,D,p as pe,G as Gi$1,c as an,I as Ii$1,S as Si$1,X as Xo,d as Ei,Q as Qi$1,e as wr,W as Wi$1,H as Ha,R as Rd,T as Td,F as Fd,q as q5,g as W5,J as Jx,A as Ad,h as Qa,i as et,j as Je,l as Dl,m as Ml,o as oM,n as iM,r as io,s as KT,t as Ci$1,x as nv,y as Ka,z as gT,B as uo,L as lo,N as pS,O as hr,P as tv,U as oS,V as yT,Y as fo,Z as Hx,_ as Qb,a0 as K4,a1 as G4,a2 as q4,a3 as Z4,a4 as Y4,a5 as Hn$1,a6 as vv,a7 as J,a8 as X,a9 as br,aa as pt,ab as ct,ac as tn,ad as S,ae as x,af as U,ag as qe$1,ah as Z,ai as M,aj as g,ak as Ot,al as tt$1,am as pn,an as de,ao as vr,ap as Ui$1,aq as be,ar as Yt,as as le,at as mr,au as xe,av as xt,aw as rf,ax as Ae,ay as Si$2,az as Xa,aA as Qa$1,aB as cv,aC as Ki$1,aD as Ai$1,aE as q,aF as Ye,aG as w_,aH as Tv,aI as Bn$1,aJ as ll,aK as Mn$1,aL as lt,aM as ut,aN as mf,aO as ef,aP as ze,aQ as Q,aR as I_,aS as qo,aT as j,aU as Tt,aV as p5,aW as Pd,aX as Wi$2,aY as Sk,aZ as Vf,a_ as bo,a$ as en,b0 as Ga,b1 as Jt,b2 as Tx,b3 as jx,b4 as Ux,b5 as Di$1,b6 as Fo,b7 as xs,b8 as ie,b9 as Id,ba as la$1,bb as ca$1,bc as Xf,bd as kr,be as L,bf as Lr,bg as Gf,bh as sh,bi as Te,bj as lx,bk as Jp,bl as xT,bm as qa,bn as mp,bo as hp,bp as Hn$2,bq as Go,br as Ii$2,bs as tf,bt as wT,bu as IT,bv as C,bw as dt,bx as Yf,by as tI,bz as rI,bA as Vp,bB as Hp,bC as mT,bD as _v,bE as eS,bF as bv,bG as nf,bH as ov,bI as iS}from'./main-MDR3T3Z4.js';import {F}from'./chunk-HOHvOCID.js';var Mn=new g("CdkAccordion");var En=(()=>{class i{accordion=f(Mn,{optional:true,skipSelf:true});_changeDetectorRef=f(Ai$1);_expansionDispatcher=f(tt$1);_openCloseAllSubscription=q.EMPTY;closed=new Z;opened=new Z;destroyed=new Z;expandedChange=new Z;id=f(Ot).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n);}else this.closed.emit();this._changeDetectorRef.markForCheck();}}_expanded=false;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=$e(false);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=false);}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions());}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe();}toggle(){this.disabled||(this.expanded=!this.expanded);}close(){this.disabled||(this.expanded=false);}open(){this.disabled||(this.expanded=true);}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e);})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Q({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",le],disabled:[2,"disabled","disabled",le]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[rf([{provide:Mn,useValue:void 0}])]})}return i})(),Tn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({})}return i})();var jn=["body"],Wn=["bodyWrapper"],Kn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Qn=["mat-expansion-panel-header","*","mat-action-row"];function Un(i,m){}var Xn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Yn=["mat-panel-title","mat-panel-description","*"];function $n(i,m){i&1&&(lt(0,"span",1),Jp(),lt(1,"svg",2),dt(2,"path",3),ut()());}var On=new g("MAT_ACCORDION"),In=new g("MAT_EXPANSION_PANEL"),tt=(()=>{class i{_template=f(ze);_expansionPanel=f(In,{optional:true});static \u0275fac=function(n){return new(n||i)};static \u0275dir=Q({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),Dn=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),nt=(()=>{class i extends En{_viewContainerRef=f(ct);_animationsDisabled=tn();_document=f(S);_ngZone=f(x);_elementRef=f(U);_renderer=f(qe$1);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e;}_hideToggle=false;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e;}_togglePosition;afterExpand=new Z;afterCollapse=new Z;_inputChanges=new M;accordion=f(On,{optional:true,skipSelf:true});_lazyContent;_body;_bodyWrapper;_portal;_headerId=f(Ot).getId("mat-expansion-panel-header-");constructor(){super();let e=f(Dn,{optional:true});this._expansionDispatcher=f(tt$1),e&&(this.hideToggle=e.hideToggle);}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":false}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded;}close(){this.expanded=false;}open(){this.expanded=true;}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(pn(null),de(()=>this.expanded&&!this._portal),Ee(1)).subscribe(()=>{this._portal=new vr(this._lazyContent._template,this._viewContainerRef);}),this._setupAnimationEvents();}ngOnChanges(e){this._inputChanges.next(e);}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete();}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return  false}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit();});};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled");},200);});}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(n,t,a){if(n&1&&cv(a,tt,5),n&2){let h;Xa(h=Qa$1())&&(t._lazyContent=h.first);}},viewQuery:function(n,t){if(n&1&&Si$2(jn,5)(Wn,5),n&2){let a;Xa(a=Qa$1())&&(t._body=a.first),Xa(a=Qa$1())&&(t._bodyWrapper=a.first);}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,t){n&2&&Ae("mat-expanded",t.expanded)("mat-expansion-panel-spacing",t._hasSpacing());},inputs:{hideToggle:[2,"hideToggle","hideToggle",le],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[rf([{provide:On,useValue:void 0},{provide:In,useExisting:i}]),be,Yt],ngContentSelectors:Qn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,t){n&1&&(mr(Kn),xe(0),io(1,"div",2,0)(3,"div",3,1)(5,"div",4),xe(6,1),lo(7,Un,0,0,"ng-template",5),Ci$1(),xe(8,2),Ci$1()()),n&2&&(hr(),xt("inert",t.expanded?null:""),hr(2),tv("id",t.id),xt("aria-labelledby",t._headerId),hr(4),tv("cdkPortalOutlet",t._portal));},dependencies:[Ui$1],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return i})();var Pn=(()=>{class i{panel=f(nt,{host:true});_element=f(U);_focusMonitor=f(Ki$1);_changeDetectorRef=f(Ai$1);_parentChangeSubscription=q.EMPTY;constructor(){f(Ye).load(w_);let e=this.panel,n=f(Dn,{optional:true}),t=f(new Tv("tabindex"),{optional:true}),a=e.accordion?e.accordion._stateChanges.pipe(de(h=>!!(h.hideToggle||h.togglePosition))):Bn$1;this.tabIndex=parseInt(t||"")||0,this._parentChangeSubscription=ll(e.opened,e.closed,a,e._inputChanges.pipe(de(h=>!!(h.hideToggle||h.disabled||h.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(de(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight);}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle();}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return !this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Mn$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n);}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this);});}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element);}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,t){n&1&&Ka("click",function(){return t._toggle()})("keydown",function(h){return t._keydown(h)}),n&2&&(xt("id",t.panel._headerId)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),ef("height",t._getHeaderHeight()),Ae("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after",t._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",t._getTogglePosition()==="before"));},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)]},ngContentSelectors:Yn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,t){n&1&&(mr(Xn),lt(0,"span",0),xe(1),xe(2,1),xe(3,2),ut(),uo(4,$n,3,0,"span",1)),n&2&&(Ae("mat-content-hide-toggle",!t._showToggle()),hr(4),fo(t._showToggle()?4:-1));},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return i})();var Vn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({imports:[Tn,br,pt]})}return i})();var Jn=["input"],ei=["formField"],ti=["*"],qe=class{source;value;constructor(m,e){this.source=m,this.value=e;}},ni={provide:qo,useExisting:Go(()=>it),multi:true},Bn=new g("MatRadioGroup"),ii=new g("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),it=(()=>{class i{_changeDetector=f(Ai$1);_value=null;_name=f(Ot).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Z;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new qe(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Q({type:i,selectors:[["mat-radio-group"]],contentQueries:function(n,t,a){if(n&1&&cv(a,je,5),n&2){let h;Xa(h=Qa$1())&&(t._radios=h);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",le],required:[2,"required","required",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[rf([ni,{provide:Bn,useExisting:i}])]})}return i})(),je=(()=>{class i{_elementRef=f(U);_changeDetector=f(Ai$1);_focusMonitor=f(Ki$1);_radioDispatcher=f(tt$1);_defaultOptions=f(ii,{optional:true});_ngZone=f(x);_renderer=f(qe$1);_uniqueId=f(Ot).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new Z;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=tn();_injector=f(j);constructor(){f(Ye).load(w_);let e=f(Bn,{optional:true}),n=f(new Tv("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,n&&(this.tabIndex=mf(n,0));}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new qe(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let t=this._inputElement?.nativeElement;t&&(t.setAttribute("tabindex",n+""),this._previousTabIndex=n,Tt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===t&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===t&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-radio-button"]],viewQuery:function(n,t){if(n&1&&Si$2(Jn,5)(ei,7,U),n&2){let a;Xa(a=Qa$1())&&(t._inputElement=a.first),Xa(a=Qa$1())&&(t._rippleTrigger=a.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(n,t){n&1&&Ka("focus",function(){return t._inputElement.nativeElement.focus()}),n&2&&(xt("id",t.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Ae("mat-primary",t.color==="primary")("mat-accent",t.color==="accent")("mat-warn",t.color==="warn")("mat-mdc-radio-checked",t.checked)("mat-mdc-radio-disabled",t.disabled)("mat-mdc-radio-disabled-interactive",t.disabledInteractive)("_mat-animation-noopable",t._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],checked:[2,"checked","checked",le],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",le],required:[2,"required","required",le],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:ti,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(n,t){n&1&&(mr(),io(0,"div",2,0)(2,"div",3)(3,"div",4),Ka("click",function(h){return t._onTouchTargetClick(h)}),Ci$1(),io(4,"input",5,1),Ka("change",function(h){return t._onInputInteraction(h)}),Ci$1(),io(6,"div",6),nv(7,"div",7)(8,"div",8),Ci$1(),io(9,"div",9),nv(10,"div",10),Ci$1()(),io(11,"label",11),xe(12),Ci$1()()),n&2&&(tv("labelPosition",t.labelPosition),hr(2),Ae("mdc-radio--disabled",t.disabled),hr(2),tv("id",t.inputId)("checked",t.checked)("disabled",t.disabled&&!t.disabledInteractive)("required",t.required),xt("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),hr(5),tv("matRippleTrigger",t._rippleTrigger.nativeElement)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",true),hr(2),tv("for",t.inputId));},dependencies:[p5,Pd],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})(),An=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({imports:[I_,je,pt]})}return i})();var si=["trigger"],ci=["panel"],mi=[[["mat-select-trigger"]],"*"],pi=["mat-select-trigger","*"];function _i(i,m){if(i&1&&(io(0,"span",4),KT(1),Ci$1()),i&2){let e=IT();hr(),vv(e.placeholder);}}function hi(i,m){i&1&&xe(0);}function ui(i,m){if(i&1&&(io(0,"span",11),KT(1),Ci$1()),i&2){let e=IT(2);hr(),vv(e.triggerValue);}}function gi(i,m){if(i&1&&(io(0,"span",5),uo(1,hi,1,0)(2,ui,2,1,"span",11),Ci$1()),i&2){let e=IT();hr(),fo(e.customTrigger?1:2);}}function fi(i,m){if(i&1){let e=wT();io(0,"div",12,1),Ka("keydown",function(t){Vp(e);let a=IT();return Hp(a._handleKeydown(t))}),xe(2,1),Ci$1();}if(i&2){let e=IT();tf(e.panelClass),Ae("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),xt("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var bi=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=f(j);return ()=>Yf(i)}}),Ci=new g("MAT_SELECT_CONFIG"),vi=new g("MatSelectTrigger"),at=class{source;value;constructor(m,e){this.source=m,this.value=e;}},Fn=(()=>{class i{_viewportRuler=f(bo);_changeDetectorRef=f(Ai$1);_elementRef=f(U);_dir=f(en,{optional:true});_idGenerator=f(Ot);_renderer=f(qe$1);_parentFormField=f(Ga,{optional:true});ngControl=f(Jt,{self:true,optional:true});_liveAnnouncer=f(Tx);_defaultOptions=f(Ci,{optional:true});_animationsDisabled=tn();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let t=this.panel.nativeElement,a=jx(e,this.options,this.optionGroups),h=n._getHostElement();e===0&&a===1?t.scrollTop=0:t.scrollTop=Ux(h.offsetTop,h.offsetHeight,t.scrollTop,t.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new at(this,e)}_scrollStrategyFactory=f(bi);_panelOpen=false;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=$e(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Di$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Fo(()=>{let e=this.options;return e?e.changes.pipe(pn(e),xs(()=>ll(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(xs(()=>this.optionSelectionChanges))});openedChange=new Z;_openedStream=this.openedChange.pipe(de(e=>e),ie(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),ie(()=>{}));selectionChange=new Z;valueChange=new Z;constructor(){let e=f(Id),n=f(la$1,{optional:true}),t=f(ca$1,{optional:true}),a=f(new Tv("tabindex"),{optional:true}),h=f(Xf,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new kr(e,this.ngControl,t,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=h?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new L(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Lr(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Lr(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect());}),this.options.changes.pipe(pn(null),Lr(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby");}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(Ee(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(t),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),t=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let n=e.keyCode,t=n===40||n===38||n===37||n===39,a=n===13||n===32,h=this._keyManager;if(!h.isTyping()&&a&&!Mn$1(e)||(this.multiple||e.altKey)&&t)e.preventDefault(),this.open();else if(!this.multiple){let k=this.selected;h.onKeydown(e);let S=this.selected;S&&k!==S&&this._liveAnnouncer.announce(S.viewValue,1e4);}}_handleOpenKeydown(e){let n=this._keyManager,t=e.keyCode,a=t===40||t===38,h=n.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!h&&(t===13||t===32)&&n.activeItem&&!Mn$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!h&&this._multiple&&t===65&&e.ctrlKey){e.preventDefault();let k=this.options.some(S=>!S.disabled&&!S.selected);this.options.forEach(S=>{S.disabled||(k?S.select():S.deselect());});}else {let k=n.activeItemIndex;n.onKeydown(e),this._multiple&&a&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==k&&n.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Mn$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else {let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let n=this.options.find(t=>{if(this._selectionModel.isSelected(t))return  false;try{return (t.value!=null||this.canSelectNullableOptions)&&this._compareWith(t.value,e)}catch{return  false}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Gf?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new sh(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ll(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Lr(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ll(...this.options.map(n=>n._stateChanges)).pipe(Lr(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,n){let t=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(t!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),t!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,t)=>this.sortComparator?this.sortComparator(n,t,e):e.indexOf(n)-e.indexOf(t)),this.stateChanges.next();}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(t=>t.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby");}onContainerClick(e){let n=Te(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-select"]],contentQueries:function(n,t,a){if(n&1&&cv(a,vi,5)(a,Fd,5)(a,hp,5),n&2){let h;Xa(h=Qa$1())&&(t.customTrigger=h.first),Xa(h=Qa$1())&&(t.options=h),Xa(h=Qa$1())&&(t.optionGroups=h);}},viewQuery:function(n,t){if(n&1&&Si$2(si,5)(ci,5)(lx,5),n&2){let a;Xa(a=Qa$1())&&(t.trigger=a.first),Xa(a=Qa$1())&&(t.panel=a.first),Xa(a=Qa$1())&&(t._overlayDir=a.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,t){n&1&&Ka("keydown",function(h){return t._handleKeydown(h)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),n&2&&(xt("id",t.id)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),Ae("mat-mdc-select-disabled",t.disabled)("mat-mdc-select-invalid",t.errorState)("mat-mdc-select-required",t.required)("mat-mdc-select-empty",t.empty)("mat-mdc-select-multiple",t.multiple)("mat-select-open",t.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",le],placeholder:"placeholder",required:[2,"required","required",le],multiple:[2,"multiple","multiple",le],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",le],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",mf],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",le]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[rf([{provide:qa,useExisting:i},{provide:mp,useExisting:i}]),Yt],ngContentSelectors:pi,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,t){if(n&1&&(mr(mi),io(0,"div",2,0),Ka("click",function(){return t.open()}),io(3,"div",3),uo(4,_i,2,1,"span",4)(5,gi,3,1,"span",5),Ci$1(),io(6,"div",6)(7,"div",7),Jp(),io(8,"svg",8),nv(9,"path",9),Ci$1()()()(),lo(10,fi,3,16,"ng-template",10),Ka("detach",function(){return t.close()})("backdropClick",function(){return t.close()})("overlayKeydown",function(h){return t._handleOverlayKeydown(h)})),n&2){let a=xT(1);hr(3),xt("id",t._valueId),hr(),fo(t.empty?4:5),hr(6),tv("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",t._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayWidth",t._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",t._popoverLocation);}},dependencies:[Gf,lx],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return i})();var zn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({imports:[Wi$2,Sk,pt,Vf,Qi$1,Sk]})}return i})();var xi=["switch"],wi=["*"];function ki(i,m){i&1&&(io(0,"span",11),Jp(),io(1,"svg",13),nv(2,"path",14),Ci$1(),io(3,"svg",15),nv(4,"path",16),Ci$1()());}var Si=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),We=class{source;checked;constructor(m,e){this.source=m,this.checked=e;}},ot=(()=>{class i{_elementRef=f(U);_focusMonitor=f(Ki$1);_changeDetectorRef=f(Ai$1);defaults=f(Si);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new We(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=tn();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new Z;toggleChange=new Z;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){f(Ye).load(w_);let e=f(new Tv("tabindex"),{optional:true}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=f(Ot).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??false,this.disabledInteractive=n.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new We(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(n,t){if(n&1&&Si$2(xi,5),n&2){let a;Xa(a=Qa$1())&&(t._switchElement=a.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,t){n&2&&(Ii$2("id",t.id),xt("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),tf(t.color?"mat-"+t.color:""),Ae("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",le],color:"color",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],checked:[2,"checked","checked",le],hideIcon:[2,"hideIcon","hideIcon",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[rf([{provide:qo,useExisting:Go(()=>i),multi:true},{provide:Hn$2,useExisting:i,multi:true}]),Yt],ngContentSelectors:wi,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,t){if(n&1&&(mr(),io(0,"div",1)(1,"button",2,0),Ka("click",function(){return t._handleClick()}),nv(3,"div",3)(4,"span",4),io(5,"span",5)(6,"span",6)(7,"span",7),nv(8,"span",8),Ci$1(),io(9,"span",9),nv(10,"span",10),Ci$1(),uo(11,ki,5,0,"span",11),Ci$1()()(),io(12,"label",12),Ka("click",function(h){return h.stopPropagation()}),xe(13),Ci$1()()),n&2){let a=xT(2);tv("labelPosition",t.labelPosition),hr(),Ae("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),tv("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),xt("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),hr(9),tv("matRippleTrigger",a)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",true),hr(),fo(t.hideIcon?-1:11),hr(),tv("for",t.buttonId),xt("id",t._labelId);}},dependencies:[p5,Pd],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return i})(),Nn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=J({type:i});static \u0275inj=X({imports:[ot,pt]})}return i})();var rt=class{_document;_textarea;constructor(m,e){this._document=e;let n=this._textarea=this._document.createElement("textarea"),t=n.style;t.position="fixed",t.top=t.opacity="0",t.left="-999em",n.setAttribute("aria-hidden","true"),n.value=m,n.readOnly=true,(this._document.fullscreenElement||this._document.body).appendChild(n);}copy(){let m=this._textarea,e=false;try{if(m){let n=this._document.activeElement;m.select(),m.setSelectionRange(0,m.value.length),e=this._document.execCommand("copy"),n&&n.focus();}}catch{}return e}destroy(){let m=this._textarea;m&&(m.remove(),this._textarea=void 0);}},Hn=(()=>{class i{_document=f(S);copy(e){let n=this.beginCopy(e),t=n.copy();return n.destroy(),t}beginCopy(e){return new rt(e,this._document)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function Oi(i,m){if(i&1&&nv(0,"markdown",2),i&2){let e=IT();tv("src",e.data.src);}}function Ii(i,m){if(i&1&&nv(0,"markdown",3),i&2){let e=IT();tv("data",e.dataSnippet);}}function Di(i,m){if(i&1){let e=wT();io(0,"button",7),Ka("click",function(){Vp(e);let t=IT();return Hp(t.copy())}),io(1,"mat-icon"),KT(2,"content_copy"),Ci$1(),KT(3," Copy "),Ci$1();}}var Gn=(()=>{class i{constructor(){this.data=f(Hx,{optional:true})??{},this.snackbarService=f(Qb),this.clipboard=f(Hn),this.dataSnippet="",this.data?.data&&(this.dataSnippet=`\`\`\`ts
// Configure the demo page and copy the config to your application:
${this.data.data}
\`\`\``,setTimeout(()=>{window.dispatchEvent(new Event("resize"));},150));}copy(){this.data.showCopy&&this.data.data&&(this.clipboard.copy(this.data.data),this.snackbarService.openSnackbar("Copied","Close"));}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-markdown"]],decls:9,vars:3,consts:[["mat-dialog-title",""],[1,"lf-dialog-content"],[3,"src"],[3,"data"],["align","end",1,"lf-dialog-actions"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",1,"ml-4"],["mat-flat-button","","color","primary",1,"ml-4",3,"click"]],template:function(n,t){n&1&&(io(0,"h2",0),KT(1),Ci$1(),io(2,"mat-dialog-content",1),uo(3,Oi,1,1,"markdown",2)(4,Ii,1,1,"markdown",3),Ci$1(),io(5,"mat-dialog-actions",4)(6,"button",5),KT(7,"Close"),Ci$1(),uo(8,Di,4,0,"button",6),Ci$1()),n&2&&(hr(),vv(t.data.title),hr(2),fo(t.data.src&&!t.data.data?3:!t.data.src&&t.data.data?4:-1),hr(5),fo(t.data.showCopy?8:-1));},dependencies:[K4,G4,q4,Z4,Y4,q5,W5,et,Je,Hn$1],styles:[".lf-dialog-content[_ngcontent-%COMP%]{padding:0 24px 16px!important}.lf-dialog-content[_ngcontent-%COMP%]     pre{max-height:400px;margin:0!important;overflow-x:hidden}@media screen and (max-width:800px){.lf-dialog-content[_ngcontent-%COMP%]     pre{overflow-x:auto}}.lf-dialog-actions[_ngcontent-%COMP%]{padding:0 24px 16px!important}"]});}}return i})();var Pi=()=>["/documentation"],Vi=i=>({menuButton:i,isLeftButton:true,isNavButton:false}),Bi=i=>({menuButton:i,isLeftButton:false,isNavButton:false}),Ai=i=>({menuButton:i,isLeftButton:false,isNavButton:true}),Ri=i=>({navigationLink:i}),Li=()=>["center","right"],Fi=(i,m)=>m.key;function zi(i,m){if(i&1){let e=wT();io(0,"div",9),Ka("click",function(){let t=Vp(e).$implicit,a=IT();return Hp(a.setTheme(t.key))}),io(1,"div",10),nv(2,"div",11),io(3,"div",12),nv(4,"div",13),Ci$1()()();}if(i&2){let e=m.$implicit,n=IT();Ae("light",!e.dark)("dark",e.dark)("active",n.themeKey()===e.key),tv("title",e.label),hr(2),tv("ngClass",e.primary),hr(2),tv("ngClass",e.accent);}}function Ni(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return a.scaffoldService.updateScaffoldProperty("loadingOverlayConfig",{gradient:t}),Hp(a.showContainerLoading())}),KT(2," Gradient loading spinner "),Ci$1(),tI(),Ci$1();}i&2&&(hr(),tv("ngModel",m.gradient),rI());}function Hi(i,m){if(i&1&&ov(0,18),i&2){let e=m.$implicit;IT(5);let n=xT(37);tv("ngTemplateOutlet",n)("ngTemplateOutletContext",iS(2,Bi,e));}}function Gi(i,m){if(i&1){let e=wT();io(0,"h4"),KT(1,"Left Button (Icon only)"),Ci$1(),ov(2,18),io(3,"h4"),KT(4,"Right Buttons (Label has priority over icon)"),Ci$1(),gT(5,Hi,1,4,"ng-container",18,mT),io(7,"button",4),Ka("click",function(){Vp(e);let t=IT(4);return Hp(t.addHeaderButton(false))}),KT(8," Add button "),Ci$1();}if(i&2){let e=IT(2);IT(2);let n=xT(37);hr(2),tv("ngTemplateOutlet",n)("ngTemplateOutletContext",iS(2,Vi,e.leftMenuButton)),hr(3),yT(e.rightMenuButtons);}}function qi(i,m){if(i&1){let e=wT();io(0,"p"),KT(1),Ci$1(),io(2,"mat-form-field")(3,"mat-label"),KT(4,"Label"),Ci$1(),io(5,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(5);return Hp(a.updateInputConfig("label",t))}),Ci$1(),tI(),Ci$1(),io(6,"mat-form-field")(7,"mat-label"),KT(8,"Material Icon"),Ci$1(),io(9,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(5);return Hp(a.updateInputConfig("matIconSubmit",t))}),Ci$1(),tI(),Ci$1();}if(i&2){let e=IT(3),n=IT(2);hr(),nf("\xA0Value: ",n.inputValue()||""),hr(4),tv("ngModel",e.inputConfig.label),rI(),hr(4),tv("ngModel",e.inputConfig.matIconSubmit),rI();}}function ji(i,m){if(i&1){let e=wT();io(0,"h3"),KT(1,"Header Input Field"),Ci$1(),io(2,"p")(3,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(4);return Hp(a.updateInputConfig("enable",t))}),KT(4," Enable "),Ci$1(),tI(),Ci$1(),uo(5,qi,10,3);}if(i&2){let e=IT(2);hr(3),tv("ngModel",e.inputConfig.enable),rI(),hr(2),fo(e.inputConfig.enable?5:-1);}}function Wi(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{loading:t}))}),KT(2," Loading "),Ci$1(),tI(),Ci$1(),io(3,"p")(4,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{showRouteLoading:t}))}),KT(5," Show header loading on navigation "),Ci$1(),tI(),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{gradient:t}))}),KT(8," Gradient "),Ci$1(),tI(),Ci$1(),io(9,"mat-form-field")(10,"mat-label"),KT(11,"Image Logo (url)"),Ci$1(),io(12,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return a.scaffoldService.updateScaffoldProperty("headerConfig",{imgLogo:t}),Hp(a.headerImgLogoChange(t))}),Ci$1(),tI(),Ci$1(),io(13,"mat-form-field")(14,"mat-label"),KT(15,"Titel"),Ci$1(),io(16,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{title:t}))}),Ci$1(),tI(),Ci$1(),io(17,"mat-form-field")(18,"mat-label"),KT(19,"Subtitel"),Ci$1(),io(20,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{subtitle:t}))}),Ci$1(),tI(),Ci$1(),io(21,"h3"),KT(22,"Header Menu Buttons"),Ci$1(),io(23,"mat-expansion-panel")(24,"mat-expansion-panel-header"),KT(25,"Edit Buttons"),Ci$1(),lo(26,Gi,9,4,"ng-template",17),Ci$1(),uo(27,ji,6,2);}if(i&2){let e=IT();hr(),tv("ngModel",e.loading),rI(),hr(3),tv("ngModel",e.showRouteLoading),rI(),hr(3),tv("ngModel",e.gradient),rI(),hr(5),tv("ngModel",e.imgLogo),rI(),hr(4),tv("ngModel",e.title),rI(),hr(4),tv("ngModel",e.subtitle),rI(),hr(7),fo(e.inputConfig?27:-1);}}function Ki(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Header"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("HeaderConfig","headerConfig.md"))}),KT(3," View HeaderConfig "),Ci$1(),io(4,"p"),KT(5," The header is a fixed responsive toolbar with a customizable logo, title, subtitle, menu-buttons and an input field. "),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("headerConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,Wi,28,7),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function Qi(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{showBackButton:t}))}),KT(2," Show back button "),Ci$1(),tI(),Ci$1(),io(3,"mat-form-field")(4,"mat-label"),KT(5,"Label"),Ci$1(),io(6,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:t}))}),Ci$1(),tI(),Ci$1();}if(i&2){let e=IT();hr(),tv("ngModel",e.showBackButton),rI(),hr(5),tv("ngModel",e.label),rI();}}function Ui(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Title Card"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("ContentTitleCardConfig","contentTitleCardConfig.md"))}),KT(3," View ContentTitleCardConfig "),Ci$1(),io(4,"p"),KT(5," The title card is a card below the header that can display a custom label such as a page title and also has a back button. "),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,Qi,7,2),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function Xi(i,m){if(i&1&&ov(0,18),i&2){let e=m.$implicit;IT(5);let n=xT(37);tv("ngTemplateOutlet",n)("ngTemplateOutletContext",iS(2,Ai,e));}}function Yi(i,m){if(i&1){let e=wT();gT(0,Xi,1,4,"ng-container",18,mT),io(2,"button",4),Ka("click",function(){Vp(e);let t=IT(4);return Hp(t.addNavButton())}),KT(3,"Add button"),Ci$1();}if(i&2){let e=IT(2);yT(e.buttons);}}function $i(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("navbarConfig",{showAllLabels:t}))}),KT(2," Always show labels "),Ci$1(),tI(),Ci$1(),io(3,"mat-expansion-panel")(4,"mat-expansion-panel-header"),KT(5,"Edit Nav Button"),Ci$1(),lo(6,Yi,4,0,"ng-template",17),Ci$1();}if(i&2){let e=IT();hr(),tv("ngModel",e.showAllLabels),rI();}}function Zi(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Navbar"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("NavbarConfig","navbarConfig.md"))}),KT(3," View NavbarConfig "),Ci$1(),io(4,"p"),KT(5," The navbar is a fixed navigation element that is positioned vertically left on desktop and responsively moves to the bottom horizontally on mobile. It can show up to 5 navigation items. "),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("navbarConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,$i,7,1),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function Ji(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("drawerConfig",{open:t}))}),KT(2," Open "),Ci$1(),tI(),Ci$1(),io(3,"p")(4,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("drawerConfig",{fixed:t}))}),KT(5," Fixed "),Ci$1(),tI(),Ci$1(),io(6,"p"),KT(7," Content can either be set by using content projection "),io(8,"code"),KT(9,"<ng-content drawerContent>"),Ci$1(),KT(10," or by using the component portal "),io(11,"code"),KT(12,"scaffoldService.drawerPortal"),Ci$1(),KT(13," . "),Ci$1(),io(14,"button",19),Ka("click",function(){Vp(e);let t=IT(3);return Hp(t.updateDrawerContent(true))}),KT(15," Navigation "),Ci$1(),io(16,"button",20),Ka("click",function(){Vp(e);let t=IT(3);return Hp(t.updateDrawerContent(false))}),KT(17," Not found "),Ci$1();}if(i&2){let e=IT();hr(),tv("ngModel",e.open),rI(),hr(3),tv("ngModel",e.fixed),rI();}}function ea(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Drawer"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("DrawerConfig","drawerConfig.md"))}),KT(3," View DrawerConfig "),Ci$1(),io(4,"p"),KT(5," The drawer is a collapsible element that allows you to place custom dynamic side content. It is responsive and changes to overlay mode on mobile. "),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("drawerConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,Ji,18,2),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function ta(i,m){if(i&1&&ov(0,18),i&2){let e=m.$implicit;IT(5);let n=xT(39);tv("ngTemplateOutlet",n)("ngTemplateOutletContext",iS(2,Ri,e));}}function na(i,m){if(i&1){let e=wT();gT(0,ta,1,4,"ng-container",18,mT),io(2,"button",4),Ka("click",function(){Vp(e);let t=IT(4);return Hp(t.addFooterLink())}),KT(3,"Add link"),Ci$1();}if(i&2){let e=IT(2);yT(e.links);}}function ia(i,m){if(i&1){let e=wT();io(0,"mat-form-field")(1,"mat-label"),KT(2,"Image Logo (url)"),Ci$1(),io(3,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return a.scaffoldService.updateScaffoldProperty("footerConfig",{imgLogo:t}),Hp(a.footerImgLogoChange(t))}),Ci$1(),tI(),Ci$1(),io(4,"mat-form-field")(5,"mat-label"),KT(6,"Copyright"),Ci$1(),io(7,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("footerConfig",{copyright:t}))}),Ci$1(),tI(),Ci$1(),io(8,"h3"),KT(9,"Footer Links"),Ci$1(),io(10,"mat-expansion-panel")(11,"mat-expansion-panel-header"),KT(12," Edit Links (Route has priority over link) "),Ci$1(),lo(13,na,4,0,"ng-template",17),Ci$1();}if(i&2){let e=IT();hr(3),tv("ngModel",e.imgLogo),rI(),hr(4),tv("ngModel",e.copyright),rI();}}function aa(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Footer"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("FooterConfig","footerConfig.md"))}),KT(3," View FooterConfig "),Ci$1(),io(4,"p"),KT(5,"The footer is a simple bottom element with a logo, navigation links and the copyright."),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("footerConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,ia,14,2),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function oa(i,m){if(i&1&&(io(0,"mat-icon",22),KT(1),Ci$1()),i&2){let e=IT(2);hr(),nf(" ",e.matIcon," ");}}function ra(i,m){if(i&1&&(io(0,"mat-option",6),KT(1),Ci$1()),i&2){let e=m.$implicit;tv("value",e),hr(),nf(" ",e," ");}}function la(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{sticky:t}))}),KT(2," Sticky "),Ci$1(),tI(),Ci$1(),io(3,"p")(4,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{secondaryButton:t?a.secondaryButton:void 0}))}),KT(5," Split "),Ci$1(),tI(),Ci$1(),io(6,"mat-form-field")(7,"mat-label"),KT(8,"Event id"),Ci$1(),io(9,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{id:t}))}),Ci$1(),tI(),Ci$1(),io(10,"mat-form-field")(11,"mat-label"),KT(12,"Label"),Ci$1(),io(13,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{label:t}))}),Ci$1(),tI(),Ci$1(),io(14,"mat-form-field",21)(15,"mat-label"),KT(16,"Material Icon"),Ci$1(),io(17,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{matIcon:t}))}),Ci$1(),tI(),uo(18,oa,2,1,"mat-icon",22),Ci$1(),io(19,"mat-form-field")(20,"mat-label"),KT(21,"Tooltip"),Ci$1(),io(22,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{tooltip:t}))}),Ci$1(),tI(),Ci$1(),io(23,"mat-form-field")(24,"mat-label"),KT(25,"Position"),Ci$1(),io(26,"mat-select",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(3);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{horizontalPosition:t}))}),gT(27,ra,2,2,"mat-option",6,mT),Ci$1(),tI(),Ci$1();}if(i&2){let e=IT();hr(),tv("ngModel",e.sticky),rI(),hr(3),tv("ngModel",!!e.secondaryButton),rI(),hr(5),tv("ngModel",e.id),rI(),hr(4),tv("ngModel",e.label),rI(),hr(4),tv("ngModel",e.matIcon),rI(),hr(),fo(e.matIcon?18:-1),hr(4),tv("ngModel",e.tooltip),rI(),hr(4),tv("ngModel",e.horizontalPosition),rI(),hr(),yT(oS(8,Li));}}function da(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Floating Button"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("FloatingButtonConfig","floatingButtonConfig.md"))}),KT(3," View FloatingButtonConfig "),Ci$1(),io(4,"p"),KT(5," The floating button is a fixed action button that scrolls to the top on default, but you can also add an id for custom actions. By adding a label, the button will expand into a rounded rectangle shape. "),Ci$1(),io(6,"p")(7,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT(2);return Hp(a.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{enable:t}))}),KT(8," Enable "),Ci$1(),tI(),Ci$1(),uo(9,la,29,9),nv(10,"mat-divider");}if(i&2){let e=m;hr(7),tv("ngModel",e.enable),rI(),hr(2),fo(e.enable?9:-1);}}function sa(i,m){if(i&1){let e=wT();io(0,"p")(1,"mat-checkbox",15),_v("ngModelChange",function(t){let a=Vp(e).$implicit;return eS(a.checked,t)||(a.checked=t),Hp(t)}),Ka("ngModelChange",function(){Vp(e);let t=IT(3);return Hp(t.selectBottomBarItem())}),KT(2),Ci$1(),tI(),Ci$1();}if(i&2){let e=m.$implicit;hr(),bv("ngModel",e.checked),rI(),hr(),nf(" ",e.label," ");}}function ca(i,m){if(i&1){let e=wT();io(0,"h2",23),KT(1,"Bottom Bar"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT(2);return Hp(t.openMarkdownDialog("BottomBarConfig","bottomBarConfig.md"))}),KT(3," View BottomBarConfig "),Ci$1(),io(4,"p"),KT(5," The bottom bar is a fixed element at the bottom of the page and above the mobile navbar (if enabled). It can be used to handle custom bulk actions for selected items in large lists. "),Ci$1(),io(6,"p"),KT(7,"(select items to test the bottom bar)"),Ci$1(),gT(8,sa,3,2,"p",null,mT);}if(i&2){let e=IT(2);hr(8),yT(e.bottomBarDemoList());}}function ma(i,m){if(i&1){let e=wT();io(0,"h2"),KT(1,"Scaffold"),Ci$1(),io(2,"span",14),Ka("click",function(){Vp(e);let t=IT();return Hp(t.openMarkdownDialog("ScaffoldConfig","scaffoldConfig.md"))}),KT(3," View ScaffoldConfig "),Ci$1(),io(4,"p"),KT(5," The "),io(6,"code"),KT(7,"<lf-scaffold>"),Ci$1(),KT(8," component is the global wrapper element that contains all UI elements and displays them based on the provided "),io(9,"code"),KT(10,"ScaffoldConfig"),Ci$1(),KT(11," . "),Ci$1(),io(12,"p")(13,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT();return Hp(a.scaffoldService.updateScaffoldProperty("scrollPositionRestoration",t))}),KT(14," Reset scroll position after navigation "),Ci$1(),tI(),Ci$1(),uo(15,Ni,3,1,"p"),nv(16,"mat-divider"),uo(17,Ki,11,2),uo(18,Ui,11,2),uo(19,Zi,11,2),uo(20,ea,11,2),uo(21,aa,11,2),uo(22,da,11,2),uo(23,ca,10,0);}if(i&2){let e,n,t,a,h,k,S,z,K=IT();hr(13),tv("ngModel",m.scrollPositionRestoration),rI(),hr(2),fo((e=K.loadingOverlayConfig())?15:-1,e),hr(2),fo((n=K.headerConfig())?17:-1,n),hr(),fo((t=K.contentTitleCardConfig())?18:-1,t),hr(),fo((a=K.navbarConfig())?19:-1,a),hr(),fo((h=K.drawerConfig())?20:-1,h),hr(),fo((k=K.footerConfig())?21:-1,k),hr(),fo((S=K.floatingButtonConfig())?22:-1,S),hr(),fo((z=K.bottomBarConfig())?23:-1,z);}}function pa(i,m){if(i&1&&(io(0,"mat-icon",22),KT(1),Ci$1()),i&2){let e=IT(2).menuButton;hr(),vv(e.matIcon);}}function _a(i,m){if(i&1){let e=wT();io(0,"div",24)(1,"mat-form-field")(2,"mat-label"),KT(3,"Event id"),Ci$1(),io(4,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(),h=a.menuButton,k=a.isLeftButton,S=a.isNavButton,z=IT();return Hp(z.updateHeaderButton(h,k,S,"id",t))}),Ci$1(),tI(),Ci$1(),io(5,"mat-form-field")(6,"mat-label"),KT(7,"Label"),Ci$1(),io(8,"input",25),Ka("ngModelChange",function(t){Vp(e);let a=IT(),h=a.menuButton,k=a.isLeftButton,S=a.isNavButton,z=IT();return Hp(z.updateHeaderButton(h,k,S,"label",t))}),Ci$1(),tI(),Ci$1(),io(9,"mat-form-field",21)(10,"mat-label"),KT(11,"Material Icon"),Ci$1(),io(12,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(),h=a.menuButton,k=a.isLeftButton,S=a.isNavButton,z=IT();return Hp(z.updateHeaderButton(h,k,S,"matIcon",t))}),Ci$1(),tI(),uo(13,pa,2,1,"mat-icon",22),Ci$1(),io(14,"mat-form-field")(15,"mat-label"),KT(16,"Tooltop"),Ci$1(),io(17,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT(),h=a.menuButton,k=a.isLeftButton,S=a.isNavButton,z=IT();return Hp(z.updateHeaderButton(h,k,S,"tooltip",t))}),Ci$1(),tI(),Ci$1(),io(18,"button",26),Ka("click",function(){Vp(e);let t=IT(),a=t.menuButton,h=t.isLeftButton,k=t.isNavButton,S=IT();return Hp(S.removeHeaderButton(a,h,k))}),io(19,"mat-icon"),KT(20,"delete"),Ci$1()()();}if(i&2){let e=IT(),n=e.menuButton,t=e.isLeftButton;hr(4),tv("ngModel",n.id),rI(),hr(4),tv("disabled",t)("ngModel",n.label),rI(),hr(4),tv("ngModel",n.matIcon),rI(),hr(),fo(n.matIcon?13:-1),hr(4),tv("ngModel",n.tooltip),rI();}}function ha(i,m){if(i&1&&uo(0,_a,21,6,"div",24),i&2){let e=m.menuButton;fo(e?0:-1);}}function ua(i,m){if(i&1){let e=wT();io(0,"div",24)(1,"mat-form-field")(2,"mat-label"),KT(3,"Label"),Ci$1(),io(4,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT().navigationLink,h=IT();return Hp(h.updateFooterLink(a,"label",t))}),Ci$1(),tI(),Ci$1(),io(5,"mat-form-field")(6,"mat-label"),KT(7,"Route (internal)"),Ci$1(),io(8,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT().navigationLink,h=IT();return Hp(h.updateFooterLink(a,"routerLink",t))}),Ci$1(),tI(),Ci$1(),io(9,"mat-form-field")(10,"mat-label"),KT(11,"Link (external)"),Ci$1(),io(12,"input",16),Ka("ngModelChange",function(t){Vp(e);let a=IT().navigationLink,h=IT();return Hp(h.updateFooterLink(a,"href",t))}),Ci$1(),tI(),Ci$1(),io(13,"mat-slide-toggle",15),Ka("ngModelChange",function(t){Vp(e);let a=IT().navigationLink,h=IT();return Hp(h.updateFooterLink(a,"externalTab",t))}),KT(14," External Tab "),Ci$1(),tI(),io(15,"button",27),Ka("click",function(){Vp(e);let t=IT().navigationLink,a=IT();return Hp(a.removeFooterLink(t))}),io(16,"mat-icon"),KT(17,"delete"),Ci$1()()();}if(i&2){let e=IT().navigationLink;hr(4),tv("ngModel",e.label),rI(),hr(4),tv("ngModel",e.routerLink),rI(),hr(4),tv("ngModel",e.href),rI(),hr(),tv("ngModel",e.externalTab),rI();}}function ga(i,m){if(i&1&&uo(0,ua,18,4,"div",24),i&2){let e=m.navigationLink;fo(e?0:-1);}}var qn=(()=>{class i{constructor(){this.scaffoldService=f(Ms),this.themeService=f(CM),this.dialogService=f(vM),this.logger=f(wn),this.scaffoldConfig=$t(this.scaffoldService.scaffoldConfig$,{initialValue:null}),this.loadingOverlayConfig=bS(()=>this.scaffoldConfig()?.loadingOverlayConfig||{}),this.headerConfig=bS(()=>this.scaffoldConfig()?.headerConfig||{}),this.navbarConfig=bS(()=>this.scaffoldConfig()?.navbarConfig||{}),this.drawerConfig=bS(()=>this.scaffoldConfig()?.drawerConfig||{}),this.footerConfig=bS(()=>this.scaffoldConfig()?.footerConfig||{}),this.contentTitleCardConfig=bS(()=>this.scaffoldConfig()?.contentTitleCardConfig||{}),this.secondaryButton={id:"floatingButton_secondary",matIcon:"expand_less",tooltip:"More actions",menuButtons:[{id:"floatingButton_print",matIcon:"print",label:"Print"},{id:"floatingButton_share",matIcon:"share",label:"Share"}]},this.floatingButtonConfig=bS(()=>this.scaffoldConfig()?.floatingButtonConfig||{}),this.bottomBarConfig=bS(()=>this.scaffoldConfig()?.bottomBarConfig||{}),this.bottomBarDemoList=$e([{checked:false,label:"Demo item 1"},{checked:false,label:"Demo item 2"},{checked:false,label:"Demo item 3"}]),this.themes=[{label:"Pink, light",key:"",primary:"pink",accent:"blue",dark:false},{label:"Pink, dark",key:"theme2",primary:"pink",accent:"blue",dark:true},{label:"Blue, light",key:"theme3",primary:"blue",accent:"pink",dark:false},{label:"Blue, dark",key:"theme4",primary:"blue",accent:"pink",dark:true}],this.theme=$t(this.themeService.currentTheme$),this.inputValue=$t(this.scaffoldService.headerInputChangeValue$),this.isM2=bS(()=>(this.theme()??"").startsWith("m2")),this.themeKey=bS(()=>(this.theme()??"").replace(/^m2-?/,"")),this.scaffoldService.scaffoldConfig$.pipe(Ee(1),ud()).subscribe(e=>{e&&this.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:"Demo"});}),this.scaffoldService.buttonClickEventValue$.pipe(ud()).subscribe(e=>{e==="bottom-bar_submit"?this.bottomBarButtonClicked():e==="bottom-bar_close"&&this.bottomBarCloseClicked();}),f(ke).onDestroy(()=>this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:false}));}copyConfig(){let e=(t,a)=>{if(!(a===""||a===null||a===void 0||a===false)&&!(a&&typeof a=="object"&&"enable"in a&&a.enable===false)&&!(a&&typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0))return a},n="public scaffoldConfig: ScaffoldConfig = "+JSON.stringify(this.scaffoldConfig(),e,2).replace(/"([^"]+)":/g,"$1:").replace(/"/g,"'");this.openMarkdownDialog("Copy current config","",n,true);}openMarkdownDialog(e,n,t,a=false){this.dialogService.openCustomDialog(Gn,{autoFocus:false,data:{title:e,src:n?`md/${n}`:"",data:t,showCopy:a},maxWidth:"1000px"});}showContainerLoading(){this.scaffoldService.updateScaffoldProperty("loading",true),setTimeout(()=>{this.scaffoldService.updateScaffoldProperty("loading",false);},2e3);}updateInputConfig(e,n){this.scaffoldService.updateScaffoldProperty("headerConfig",{inputConfig:K(D({},this.headerConfig()?.inputConfig),{[e]:n})});}headerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:"logo"});}footerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:"logo"});}setTheme(e){this.themeService.setTheme(this.themeClass(e,this.isM2()),true);}setMaterialVersion(e){this.themeService.setTheme(this.themeClass(this.themeKey(),e),true);}themeClass(e,n){return n?e?`m2-${e}`:"m2":e}addHeaderButton(e){e?e&&!this.headerConfig()?.leftMenuButton&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:{id:""}}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:[...this.headerConfig().rightMenuButtons||[],{id:""}]});}removeHeaderButton(e,n,t){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig().buttons?.filter(a=>a!==e)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:void 0}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig().rightMenuButtons?.filter(a=>a!==e)});}updateHeaderButton(e,n,t,a,h){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig()?.buttons?.map(k=>k===e?K(D({},k),{[a]:h}):k)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:K(D({},this.headerConfig().leftMenuButton),{[a]:h})}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig()?.rightMenuButtons?.map(k=>k===e?K(D({},k),{[a]:h}):k)});}addNavButton(){this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:[...this.navbarConfig().buttons||[],{id:""}]});}addFooterLink(){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:[...this.footerConfig().links||[],{}]});}removeFooterLink(e){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig().links?.filter(n=>n!==e)});}updateFooterLink(e,n,t){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig()?.links?.map(a=>a===e?K(D({},a),{[n]:t}):a)});}updateDrawerContent(e){this.scaffoldService.drawerPortal=e?null:F;}async bottomBarButtonClicked(){let e=this.bottomBarDemoList().filter(t=>t.checked).length,n=await this.dialogService.openConfirmDialog({title:"Selection:",message:`You have selected ${e} items`,closeLabel:"Close",confirmLabel:"Confirm"});this.logger.log("close result: ",n);}bottomBarCloseClicked(){this.bottomBarDemoList.update(e=>e.map(n=>K(D({},n),{checked:false}))),this.updateBottomBar();}selectBottomBarItem(){this.updateBottomBar();}updateBottomBar(){let e=this.bottomBarDemoList().filter(n=>n.checked).length;e>0?this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:true,message:`${e} selected`,closeButtonId:"bottom-bar_close",buttons:[{id:"bottom-bar_submit",label:"Submit"}]}):this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:false});}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-start"]],decls:40,vars:6,consts:[["menuButtonFormTemplate",""],["navigationLinkTemplate",""],[1,"lf-startpage"],[1,"lf-link",3,"routerLink"],["mat-flat-button","","color","accent",3,"click"],[1,"version-selector","mb-4","gap-4",3,"change","value"],[3,"value"],[1,"theme-selector"],[1,"theme-button",3,"light","dark","active","title"],[1,"theme-button",3,"click","title"],[1,"preview"],[1,"header",3,"ngClass"],[1,"body"],[1,"accent",3,"ngClass"],[1,"link",3,"click"],[3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel"],["matExpansionPanelContent",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","primary",3,"click"],[1,"lf-form-field-small"],["matPrefix",""],["id","test"],[1,"flex-row","mb-2"],["matInput","",3,"ngModelChange","disabled","ngModel"],["mat-icon-button","","color","warn","matTooltip","Remove button",3,"click"],["mat-icon-button","","color","warn","matTooltip","Remove link",3,"click"]],template:function(n,t){if(n&1&&(io(0,"div",2)(1,"h1"),KT(2,"Demo"),Ci$1(),io(3,"p"),KT(4," This is a simple demo page for the Angular Scaffold library "),io(5,"code"),KT(6,"@lukfel/ng-scaffold."),Ci$1(),nv(7,"br"),KT(8," Play around with the individual UI elements and copy the configuration to your Angular application. For more technical information see the "),io(9,"a",3),KT(10,"Documentation"),Ci$1(),KT(11," . "),Ci$1(),io(12,"button",4),Ka("click",function(){return t.copyConfig()}),io(13,"mat-icon"),KT(14,"content_copy"),Ci$1(),KT(15," Copy current config "),Ci$1(),nv(16,"mat-divider"),io(17,"h2"),KT(18,"Themes"),Ci$1(),io(19,"p"),KT(20,"The library ships both a Material 3 and a Material 2 theming API."),Ci$1(),io(21,"mat-radio-group",5),Ka("change",function(h){return t.setMaterialVersion(h.value)}),io(22,"mat-radio-button",6),KT(23,"Material 3"),Ci$1(),io(24,"mat-radio-button",6),KT(25,"Material 2"),Ci$1()(),io(26,"p"),KT(27," Define multiple themes and change them dynamically by using the library's "),io(28,"code"),KT(29,"ThemeService"),Ci$1(),KT(30," or manually setting the corresponding css class of the theme. "),Ci$1(),io(31,"div",7),gT(32,zi,5,9,"div",8,Fi),Ci$1(),nv(34,"mat-divider"),uo(35,ma,24,9),Ci$1(),lo(36,ha,1,1,"ng-template",null,0,pS)(38,ga,1,1,"ng-template",null,1,pS)),n&2){let a;hr(9),tv("routerLink",oS(5,Pi)),hr(12),tv("value",t.isM2()),hr(),tv("value",false),hr(2),tv("value",true),hr(8),yT(t.themes),hr(3),fo((a=t.scaffoldConfig())?35:-1,a);}},dependencies:[Gi$1,an,Ii$1,Si$1,Xo,Ei,Vn,nt,Pn,tt,Qi$1,wr,Wi$1,Ha,Rd,Td,An,it,je,zn,Fn,Fd,q5,W5,Jx,Ad,Qa,Nn,ot,et,Je,Dl,Ml,oM,iM],styles:[".lf-startpage[_ngcontent-%COMP%]{max-width:960px;margin:auto}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%], .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{cursor:pointer;color:var(--color-primary);text-decoration:unset}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]:hover, .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:64px 0}.lf-startpage[_ngcontent-%COMP%]   .version-selector[_ngcontent-%COMP%]{display:flex}.lf-startpage[_ngcontent-%COMP%]   .theme-selector[_ngcontent-%COMP%]{display:flex;gap:24px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]{width:48px;height:40px;border-radius:var(--border-radius);overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px #0000001a;transition:all .2s;cursor:pointer}.lf-startpage[_ngcontent-%COMP%]   .theme-button.light[_ngcontent-%COMP%]{background-color:#fdfdfd}.lf-startpage[_ngcontent-%COMP%]   .theme-button.dark[_ngcontent-%COMP%]{background-color:#1e1e1e}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.lf-startpage[_ngcontent-%COMP%]   .theme-button.active[_ngcontent-%COMP%]{outline:2px solid var(--color-primary);outline-offset:2px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;overflow:hidden}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;height:8px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{width:16px;height:8px;border-radius:var(--border-radius)}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#e91e63}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{background-color:#2196f3}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:0 8px 8px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.lf-startpage[_ngcontent-%COMP%]   .lf-form-field-small[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:112px!important}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]{text-decoration:unset;color:var(--color-primary)}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{display:flex!important;flex-flow:row wrap;align-items:center}"]});}}return i})();var Jr=[{path:"",component:qn}];export{Jr as START_ROUTES};