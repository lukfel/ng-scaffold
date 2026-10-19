import {f,k as ks,m as m1,d as d1,y as yn,$ as $t,_ as _S,z as ze,E as Ee,u as ud,K,D,p as pe,a as $i$1,b as an,S as Si,M as Mi,X as Xo,c as Di$1,W as Wi$1,w as wr,q as qi$1,U as Ua,R as Rd,T as Td,F as Fd,G as G5,e as z5,g as e0,A as Ad,h as Xa,J as Je,i as Ke,j as Dl,l as Ml,n as iM,s as sM,o as io,r as XT,I as Ii$1,t as ev,v as Xa$1,x as yT,B as lo,C as co,H as mS,L as pr,N as Jy,O as aS,P as vT,Q as uo,V as Ux,Y as jb,Z as Z4,a0 as W4,a1 as G4,a2 as Y4,a3 as q4,a4 as Hn$1,a5 as gv,a6 as ee,a7 as X,a8 as Dr,a9 as pt,aa as ct,ab as tn,ac as S,ad as x,ae as U,af as qe$1,ag as Z,ah as M,ai as g,aj as kt,ak as tt$1,al as pn,am as de,an as _r,ao as $i$2,ap as be,aq as Yt,ar as le,as as yr,at as Me,au as At,av as of,aw as xe,ax as Mi$1,ay as Qa,az as Ja,aA as sv,aB as Xi$1,aC as Ni$1,aD as Y,aE as Ye,aF as C_,aG as Sv,aH as Bn,aI as ul,aJ as Mn$1,aK as lt,aL as ut,aM as mf,aN as tf,aO as We$1,aP as J,aQ as T_,aR as qo,aS as j,aT as St,aU as h5,aV as Pd,aW as Gi$1,aX as bM,aY as Vf,aZ as vo,a_ as en,a$ as qa,b0 as Jt,b1 as Sx,b2 as Ax,b3 as Ox,b4 as ki$1,b5 as Po,b6 as As,b7 as ie,b8 as Id,b9 as sa$1,ba as la$1,bb as Xf,bc as kr,bd as L,be as Br,bf as Gf,bg as sh,bh as Te,bi as ux,bj as Qp,bk as AT,bl as $a,bm as fp,bn as pp,bo as jn$1,bp as Wo,bq as Ti$1,br as nf,bs as CT,bt as TT,bu as C,bv as dt,bw as Yf,bx as nI,by as oI,bz as Vp,bA as Hp,bB as gT,bC as vv,bD as tS,bE as yv,bF as rf,bG as nv,bH as cS}from'./main-IF7DRSMR.js';import {F}from'./chunk-C9h_45lN.js';var Sn=new g("CdkAccordion");var Mn=(()=>{class i{accordion=f(Sn,{optional:true,skipSelf:true});_changeDetectorRef=f(Ni$1);_expansionDispatcher=f(tt$1);_openCloseAllSubscription=Y.EMPTY;closed=new Z;opened=new Z;destroyed=new Z;expandedChange=new Z;id=f(kt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n);}else this.closed.emit();this._changeDetectorRef.markForCheck();}}_expanded=false;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=ze(false);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=false);}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions());}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe();}toggle(){this.disabled||(this.expanded=!this.expanded);}close(){this.disabled||(this.expanded=false);}open(){this.disabled||(this.expanded=true);}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e);})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=J({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",le],disabled:[2,"disabled","disabled",le]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[of([{provide:Sn,useValue:void 0}])]})}return i})(),En=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({})}return i})();var qn=["body"],jn=["bodyWrapper"],Wn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Kn=["mat-expansion-panel-header","*","mat-action-row"];function Qn(i,c){}var Un=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Xn=["mat-panel-title","mat-panel-description","*"];function Yn(i,c){i&1&&(lt(0,"span",1),Qp(),lt(1,"svg",2),dt(2,"path",3),ut()());}var Tn=new g("MAT_ACCORDION"),On=new g("MAT_EXPANSION_PANEL"),tt=(()=>{class i{_template=f(We$1);_expansionPanel=f(On,{optional:true});static \u0275fac=function(n){return new(n||i)};static \u0275dir=J({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),In=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),nt=(()=>{class i extends Mn{_viewContainerRef=f(ct);_animationsDisabled=tn();_document=f(S);_ngZone=f(x);_elementRef=f(U);_renderer=f(qe$1);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e;}_hideToggle=false;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e;}_togglePosition;afterExpand=new Z;afterCollapse=new Z;_inputChanges=new M;accordion=f(Tn,{optional:true,skipSelf:true});_lazyContent;_body;_bodyWrapper;_portal;_headerId=f(kt).getId("mat-expansion-panel-header-");constructor(){super();let e=f(In,{optional:true});this._expansionDispatcher=f(tt$1),e&&(this.hideToggle=e.hideToggle);}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":false}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded;}close(){this.expanded=false;}open(){this.expanded=true;}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(pn(null),de(()=>this.expanded&&!this._portal),Ee(1)).subscribe(()=>{this._portal=new _r(this._lazyContent._template,this._viewContainerRef);}),this._setupAnimationEvents();}ngOnChanges(e){this._inputChanges.next(e);}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete();}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return  false}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit();});};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled");},200);});}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(n,t,o){if(n&1&&sv(o,tt,5),n&2){let _;Qa(_=Ja())&&(t._lazyContent=_.first);}},viewQuery:function(n,t){if(n&1&&Mi$1(qn,5)(jn,5),n&2){let o;Qa(o=Ja())&&(t._body=o.first),Qa(o=Ja())&&(t._bodyWrapper=o.first);}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,t){n&2&&xe("mat-expanded",t.expanded)("mat-expansion-panel-spacing",t._hasSpacing());},inputs:{hideToggle:[2,"hideToggle","hideToggle",le],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[of([{provide:Tn,useValue:void 0},{provide:On,useExisting:i}]),be,Yt],ngContentSelectors:Kn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,t){n&1&&(yr(Wn),Me(0),io(1,"div",2,0)(3,"div",3,1)(5,"div",4),Me(6,1),co(7,Qn,0,0,"ng-template",5),Ii$1(),Me(8,2),Ii$1()()),n&2&&(pr(),At("inert",t.expanded?null:""),pr(2),Jy("id",t.id),At("aria-labelledby",t._headerId),pr(4),Jy("cdkPortalOutlet",t._portal));},dependencies:[$i$2],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return i})();var Dn=(()=>{class i{panel=f(nt,{host:true});_element=f(U);_focusMonitor=f(Xi$1);_changeDetectorRef=f(Ni$1);_parentChangeSubscription=Y.EMPTY;constructor(){f(Ye).load(C_);let e=this.panel,n=f(In,{optional:true}),t=f(new Sv("tabindex"),{optional:true}),o=e.accordion?e.accordion._stateChanges.pipe(de(_=>!!(_.hideToggle||_.togglePosition))):Bn;this.tabIndex=parseInt(t||"")||0,this._parentChangeSubscription=ul(e.opened,e.closed,o,e._inputChanges.pipe(de(_=>!!(_.hideToggle||_.disabled||_.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(de(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight);}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle();}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return !this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Mn$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n);}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this);});}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element);}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,t){n&1&&Xa$1("click",function(){return t._toggle()})("keydown",function(_){return t._keydown(_)}),n&2&&(At("id",t.panel._headerId)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),tf("height",t._getHeaderHeight()),xe("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after",t._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",t._getTogglePosition()==="before"));},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)]},ngContentSelectors:Xn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,t){n&1&&(yr(Un),lt(0,"span",0),Me(1),Me(2,1),Me(3,2),ut(),lo(4,Yn,3,0,"span",1)),n&2&&(xe("mat-content-hide-toggle",!t._showToggle()),pr(4),uo(t._showToggle()?4:-1));},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return i})();var Pn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[En,Dr,pt]})}return i})();var Zn=["input"],Jn=["formField"],ei=["*"],qe=class{source;value;constructor(c,e){this.source=c,this.value=e;}},ti={provide:qo,useExisting:Wo(()=>it),multi:true},Vn=new g("MatRadioGroup"),ni=new g("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),it=(()=>{class i{_changeDetector=f(Ni$1);_value=null;_name=f(kt).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Z;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new qe(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(n){return new(n||i)};static \u0275dir=J({type:i,selectors:[["mat-radio-group"]],contentQueries:function(n,t,o){if(n&1&&sv(o,je,5),n&2){let _;Qa(_=Ja())&&(t._radios=_);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",le],required:[2,"required","required",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[of([ti,{provide:Vn,useExisting:i}])]})}return i})(),je=(()=>{class i{_elementRef=f(U);_changeDetector=f(Ni$1);_focusMonitor=f(Xi$1);_radioDispatcher=f(tt$1);_defaultOptions=f(ni,{optional:true});_ngZone=f(x);_renderer=f(qe$1);_uniqueId=f(kt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new Z;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=tn();_injector=f(j);constructor(){f(Ye).load(C_);let e=f(Vn,{optional:true}),n=f(new Sv("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,n&&(this.tabIndex=mf(n,0));}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new qe(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let t=this._inputElement?.nativeElement;t&&(t.setAttribute("tabindex",n+""),this._previousTabIndex=n,St(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===t&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===t&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-radio-button"]],viewQuery:function(n,t){if(n&1&&Mi$1(Zn,5)(Jn,7,U),n&2){let o;Qa(o=Ja())&&(t._inputElement=o.first),Qa(o=Ja())&&(t._rippleTrigger=o.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(n,t){n&1&&Xa$1("focus",function(){return t._inputElement.nativeElement.focus()}),n&2&&(At("id",t.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),xe("mat-primary",t.color==="primary")("mat-accent",t.color==="accent")("mat-warn",t.color==="warn")("mat-mdc-radio-checked",t.checked)("mat-mdc-radio-disabled",t.disabled)("mat-mdc-radio-disabled-interactive",t.disabledInteractive)("_mat-animation-noopable",t._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],checked:[2,"checked","checked",le],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",le],required:[2,"required","required",le],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:ei,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(n,t){n&1&&(yr(),io(0,"div",2,0)(2,"div",3)(3,"div",4),Xa$1("click",function(_){return t._onTouchTargetClick(_)}),Ii$1(),io(4,"input",5,1),Xa$1("change",function(_){return t._onInputInteraction(_)}),Ii$1(),io(6,"div",6),ev(7,"div",7)(8,"div",8),Ii$1(),io(9,"div",9),ev(10,"div",10),Ii$1()(),io(11,"label",11),Me(12),Ii$1()()),n&2&&(Jy("labelPosition",t.labelPosition),pr(2),xe("mdc-radio--disabled",t.disabled),pr(2),Jy("id",t.inputId)("checked",t.checked)("disabled",t.disabled&&!t.disabledInteractive)("required",t.required),At("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),pr(5),Jy("matRippleTrigger",t._rippleTrigger.nativeElement)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",true),pr(2),Jy("for",t.inputId));},dependencies:[h5,Pd],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return i})(),An=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[T_,je,pt]})}return i})();var di=["trigger"],si=["panel"],ci=[[["mat-select-trigger"]],"*"],mi=["mat-select-trigger","*"];function pi(i,c){if(i&1&&(io(0,"span",4),XT(1),Ii$1()),i&2){let e=TT();pr(),gv(e.placeholder);}}function _i(i,c){i&1&&Me(0);}function hi(i,c){if(i&1&&(io(0,"span",11),XT(1),Ii$1()),i&2){let e=TT(2);pr(),gv(e.triggerValue);}}function ui(i,c){if(i&1&&(io(0,"span",5),lo(1,_i,1,0)(2,hi,2,1,"span",11),Ii$1()),i&2){let e=TT();pr(),uo(e.customTrigger?1:2);}}function gi(i,c){if(i&1){let e=CT();io(0,"div",12,1),Xa$1("keydown",function(t){Vp(e);let o=TT();return Hp(o._handleKeydown(t))}),Me(2,1),Ii$1();}if(i&2){let e=TT();nf(e.panelClass),xe("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),At("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var fi=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=f(j);return ()=>Yf(i)}}),bi=new g("MAT_SELECT_CONFIG"),vi=new g("MatSelectTrigger"),at=class{source;value;constructor(c,e){this.source=c,this.value=e;}},Ln=(()=>{class i{_viewportRuler=f(vo);_changeDetectorRef=f(Ni$1);_elementRef=f(U);_dir=f(en,{optional:true});_idGenerator=f(kt);_renderer=f(qe$1);_parentFormField=f(qa,{optional:true});ngControl=f(Jt,{self:true,optional:true});_liveAnnouncer=f(Sx);_defaultOptions=f(bi,{optional:true});_animationsDisabled=tn();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let t=this.panel.nativeElement,o=Ax(e,this.options,this.optionGroups),_=n._getHostElement();e===0&&o===1?t.scrollTop=0:t.scrollTop=Ox(_.offsetTop,_.offsetHeight,t.scrollTop,t.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new at(this,e)}_scrollStrategyFactory=f(fi);_panelOpen=false;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=ze(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ki$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Po(()=>{let e=this.options;return e?e.changes.pipe(pn(e),As(()=>ul(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(As(()=>this.optionSelectionChanges))});openedChange=new Z;_openedStream=this.openedChange.pipe(de(e=>e),ie(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),ie(()=>{}));selectionChange=new Z;valueChange=new Z;constructor(){let e=f(Id),n=f(sa$1,{optional:true}),t=f(la$1,{optional:true}),o=f(new Sv("tabindex"),{optional:true}),_=f(Xf,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new kr(e,this.ngControl,t,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=_?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new L(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Br(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Br(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect());}),this.options.changes.pipe(pn(null),Br(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby");}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(Ee(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(t),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),t=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let n=e.keyCode,t=n===40||n===38||n===37||n===39,o=n===13||n===32,_=this._keyManager;if(!_.isTyping()&&o&&!Mn$1(e)||(this.multiple||e.altKey)&&t)e.preventDefault(),this.open();else if(!this.multiple){let k=this.selected;_.onKeydown(e);let S=this.selected;S&&k!==S&&this._liveAnnouncer.announce(S.viewValue,1e4);}}_handleOpenKeydown(e){let n=this._keyManager,t=e.keyCode,o=t===40||t===38,_=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!_&&(t===13||t===32)&&n.activeItem&&!Mn$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!_&&this._multiple&&t===65&&e.ctrlKey){e.preventDefault();let k=this.options.some(S=>!S.disabled&&!S.selected);this.options.forEach(S=>{S.disabled||(k?S.select():S.deselect());});}else {let k=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==k&&n.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Mn$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else {let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let n=this.options.find(t=>{if(this._selectionModel.isSelected(t))return  false;try{return (t.value!=null||this.canSelectNullableOptions)&&this._compareWith(t.value,e)}catch{return  false}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Gf?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new sh(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ul(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Br(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ul(...this.options.map(n=>n._stateChanges)).pipe(Br(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,n){let t=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(t!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),t!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,t)=>this.sortComparator?this.sortComparator(n,t,e):e.indexOf(n)-e.indexOf(t)),this.stateChanges.next();}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(t=>t.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby");}onContainerClick(e){let n=Te(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-select"]],contentQueries:function(n,t,o){if(n&1&&sv(o,vi,5)(o,Fd,5)(o,pp,5),n&2){let _;Qa(_=Ja())&&(t.customTrigger=_.first),Qa(_=Ja())&&(t.options=_),Qa(_=Ja())&&(t.optionGroups=_);}},viewQuery:function(n,t){if(n&1&&Mi$1(di,5)(si,5)(ux,5),n&2){let o;Qa(o=Ja())&&(t.trigger=o.first),Qa(o=Ja())&&(t.panel=o.first),Qa(o=Ja())&&(t._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,t){n&1&&Xa$1("keydown",function(_){return t._handleKeydown(_)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),n&2&&(At("id",t.id)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),xe("mat-mdc-select-disabled",t.disabled)("mat-mdc-select-invalid",t.errorState)("mat-mdc-select-required",t.required)("mat-mdc-select-empty",t.empty)("mat-mdc-select-multiple",t.multiple)("mat-select-open",t.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",le],placeholder:"placeholder",required:[2,"required","required",le],multiple:[2,"multiple","multiple",le],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",le],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",mf],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",le]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[of([{provide:$a,useExisting:i},{provide:fp,useExisting:i}]),Yt],ngContentSelectors:mi,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,t){if(n&1&&(yr(ci),io(0,"div",2,0),Xa$1("click",function(){return t.open()}),io(3,"div",3),lo(4,pi,2,1,"span",4)(5,ui,3,1,"span",5),Ii$1(),io(6,"div",6)(7,"div",7),Qp(),io(8,"svg",8),ev(9,"path",9),Ii$1()()()(),co(10,gi,3,16,"ng-template",10),Xa$1("detach",function(){return t.close()})("backdropClick",function(){return t.close()})("overlayKeydown",function(_){return t._handleOverlayKeydown(_)})),n&2){let o=AT(1);pr(3),At("id",t._valueId),pr(),uo(t.empty?4:5),pr(6),Jy("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",t._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayWidth",t._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",t._popoverLocation);}},dependencies:[Gf,ux],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return i})();var Fn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[Gi$1,bM,pt,Vf,Wi$1,bM]})}return i})();var yi=["switch"],xi=["*"];function wi(i,c){i&1&&(io(0,"span",11),Qp(),io(1,"svg",13),ev(2,"path",14),Ii$1(),io(3,"svg",15),ev(4,"path",16),Ii$1()());}var ki=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),We=class{source;checked;constructor(c,e){this.source=c,this.checked=e;}},ot=(()=>{class i{_elementRef=f(U);_focusMonitor=f(Xi$1);_changeDetectorRef=f(Ni$1);defaults=f(ki);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new We(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=tn();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new Z;toggleChange=new Z;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){f(Ye).load(C_);let e=f(new Sv("tabindex"),{optional:true}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=f(kt).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??false,this.disabledInteractive=n.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new We(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(n,t){if(n&1&&Mi$1(yi,5),n&2){let o;Qa(o=Ja())&&(t._switchElement=o.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,t){n&2&&(Ti$1("id",t.id),At("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),nf(t.color?"mat-"+t.color:""),xe("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",le],color:"color",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],checked:[2,"checked","checked",le],hideIcon:[2,"hideIcon","hideIcon",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[of([{provide:qo,useExisting:Wo(()=>i),multi:true},{provide:jn$1,useExisting:i,multi:true}]),Yt],ngContentSelectors:xi,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,t){if(n&1&&(yr(),io(0,"div",1)(1,"button",2,0),Xa$1("click",function(){return t._handleClick()}),ev(3,"div",3)(4,"span",4),io(5,"span",5)(6,"span",6)(7,"span",7),ev(8,"span",8),Ii$1(),io(9,"span",9),ev(10,"span",10),Ii$1(),lo(11,wi,5,0,"span",11),Ii$1()()(),io(12,"label",12),Xa$1("click",function(_){return _.stopPropagation()}),Me(13),Ii$1()()),n&2){let o=AT(2);Jy("labelPosition",t.labelPosition),pr(),xe("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),Jy("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),At("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),pr(9),Jy("matRippleTrigger",o)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",true),pr(),uo(t.hideIcon?-1:11),pr(),Jy("for",t.buttonId),At("id",t._labelId);}},dependencies:[h5,Pd],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})(),zn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[ot,pt]})}return i})();var rt=class{_document;_textarea;constructor(c,e){this._document=e;let n=this._textarea=this._document.createElement("textarea"),t=n.style;t.position="fixed",t.top=t.opacity="0",t.left="-999em",n.setAttribute("aria-hidden","true"),n.value=c,n.readOnly=true,(this._document.fullscreenElement||this._document.body).appendChild(n);}copy(){let c=this._textarea,e=false;try{if(c){let n=this._document.activeElement;c.select(),c.setSelectionRange(0,c.value.length),e=this._document.execCommand("copy"),n&&n.focus();}}catch{}return e}destroy(){let c=this._textarea;c&&(c.remove(),this._textarea=void 0);}},Nn=(()=>{class i{_document=f(S);copy(e){let n=this.beginCopy(e),t=n.copy();return n.destroy(),t}beginCopy(e){return new rt(e,this._document)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function Ti(i,c){if(i&1&&ev(0,"markdown",2),i&2){let e=TT();Jy("src",e.data.src);}}function Oi(i,c){if(i&1&&ev(0,"markdown",3),i&2){let e=TT();Jy("data",e.dataSnippet);}}function Ii(i,c){if(i&1){let e=CT();io(0,"button",7),Xa$1("click",function(){Vp(e);let t=TT();return Hp(t.copy())}),io(1,"mat-icon"),XT(2,"content_copy"),Ii$1(),XT(3," Copy "),Ii$1();}}var Hn=(()=>{class i{constructor(){this.data=f(Ux,{optional:true})??{},this.snackbarService=f(jb),this.clipboard=f(Nn),this.dataSnippet="",this.data?.data&&(this.dataSnippet=`\`\`\`ts
// Configure the demo page and copy the config to your application:
${this.data.data}
\`\`\``,setTimeout(()=>{window.dispatchEvent(new Event("resize"));},150));}copy(){this.data.showCopy&&this.data.data&&(this.clipboard.copy(this.data.data),this.snackbarService.openSnackbar("Copied","Close"));}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-markdown"]],decls:9,vars:3,consts:[["mat-dialog-title",""],[1,"lf-dialog-content"],[3,"src"],[3,"data"],["align","end",1,"lf-dialog-actions"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",1,"ml-4"],["mat-flat-button","","color","primary",1,"ml-4",3,"click"]],template:function(n,t){n&1&&(io(0,"h2",0),XT(1),Ii$1(),io(2,"mat-dialog-content",1),lo(3,Ti,1,1,"markdown",2)(4,Oi,1,1,"markdown",3),Ii$1(),io(5,"mat-dialog-actions",4)(6,"button",5),XT(7,"Close"),Ii$1(),lo(8,Ii,4,0,"button",6),Ii$1()),n&2&&(pr(),gv(t.data.title),pr(2),uo(t.data.src&&!t.data.data?3:!t.data.src&&t.data.data?4:-1),pr(5),uo(t.data.showCopy?8:-1));},dependencies:[Z4,W4,G4,Y4,q4,G5,z5,Je,Ke,Hn$1],styles:[".lf-dialog-content[_ngcontent-%COMP%]{padding:0 24px 16px!important}.lf-dialog-content[_ngcontent-%COMP%]     pre{max-height:400px;margin:0!important;overflow-x:hidden}@media screen and (max-width:800px){.lf-dialog-content[_ngcontent-%COMP%]     pre{overflow-x:auto}}.lf-dialog-actions[_ngcontent-%COMP%]{padding:0 24px 16px!important}"]});}}return i})();var Di=()=>["/documentation"],Pi=i=>({menuButton:i,isLeftButton:true,isNavButton:false}),Vi=i=>({menuButton:i,isLeftButton:false,isNavButton:false}),Ai=i=>({menuButton:i,isLeftButton:false,isNavButton:true}),Bi=i=>({navigationLink:i}),Ri=()=>["center","right"],Li=(i,c)=>c.key;function Fi(i,c){if(i&1){let e=CT();io(0,"div",9),Xa$1("click",function(){let t=Vp(e).$implicit,o=TT();return Hp(o.setTheme(t.key))}),io(1,"div",10),ev(2,"div",11),io(3,"div",12),ev(4,"div",13),Ii$1()()();}if(i&2){let e=c.$implicit,n=TT();xe("light",!e.dark)("dark",e.dark)("active",n.themeKey()===e.key),Jy("title",e.label),pr(2),Jy("ngClass",e.primary),pr(2),Jy("ngClass",e.accent);}}function zi(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return o.scaffoldService.updateScaffoldProperty("loadingOverlayConfig",{gradient:t}),Hp(o.showContainerLoading())}),XT(2," Gradient loading spinner "),Ii$1(),nI(),Ii$1();}i&2&&(pr(),Jy("ngModel",c.gradient),oI());}function Ni(i,c){if(i&1&&nv(0,18),i&2){let e=c.$implicit;TT(5);let n=AT(37);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,Vi,e));}}function Hi(i,c){if(i&1){let e=CT();io(0,"h4"),XT(1,"Left Button (Icon only)"),Ii$1(),nv(2,18),io(3,"h4"),XT(4,"Right Buttons (Label has priority over icon)"),Ii$1(),yT(5,Ni,1,4,"ng-container",18,gT),io(7,"button",4),Xa$1("click",function(){Vp(e);let t=TT(4);return Hp(t.addHeaderButton(false))}),XT(8," Add button "),Ii$1();}if(i&2){let e=TT(2);TT(2);let n=AT(37);pr(2),Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,Pi,e.leftMenuButton)),pr(3),vT(e.rightMenuButtons);}}function Gi(i,c){if(i&1){let e=CT();io(0,"p"),XT(1),Ii$1(),io(2,"mat-form-field")(3,"mat-label"),XT(4,"Label"),Ii$1(),io(5,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(5);return Hp(o.updateInputConfig("label",t))}),Ii$1(),nI(),Ii$1(),io(6,"mat-form-field")(7,"mat-label"),XT(8,"Material Icon"),Ii$1(),io(9,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(5);return Hp(o.updateInputConfig("matIconSubmit",t))}),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT(3),n=TT(2);pr(),rf("\xA0Value: ",n.inputValue()||""),pr(4),Jy("ngModel",e.inputConfig.label),oI(),pr(4),Jy("ngModel",e.inputConfig.matIconSubmit),oI();}}function qi(i,c){if(i&1){let e=CT();io(0,"h3"),XT(1,"Header Input Field"),Ii$1(),io(2,"p")(3,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(4);return Hp(o.updateInputConfig("enable",t))}),XT(4," Enable "),Ii$1(),nI(),Ii$1(),lo(5,Gi,10,3);}if(i&2){let e=TT(2);pr(3),Jy("ngModel",e.inputConfig.enable),oI(),pr(2),uo(e.inputConfig.enable?5:-1);}}function ji(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{loading:t}))}),XT(2," Loading "),Ii$1(),nI(),Ii$1(),io(3,"p")(4,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{showRouteLoading:t}))}),XT(5," Show header loading on navigation "),Ii$1(),nI(),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{gradient:t}))}),XT(8," Gradient "),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field")(10,"mat-label"),XT(11,"Image Logo (url)"),Ii$1(),io(12,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return o.scaffoldService.updateScaffoldProperty("headerConfig",{imgLogo:t}),Hp(o.headerImgLogoChange(t))}),Ii$1(),nI(),Ii$1(),io(13,"mat-form-field")(14,"mat-label"),XT(15,"Titel"),Ii$1(),io(16,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{title:t}))}),Ii$1(),nI(),Ii$1(),io(17,"mat-form-field")(18,"mat-label"),XT(19,"Subtitel"),Ii$1(),io(20,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{subtitle:t}))}),Ii$1(),nI(),Ii$1(),io(21,"h3"),XT(22,"Header Menu Buttons"),Ii$1(),io(23,"mat-expansion-panel")(24,"mat-expansion-panel-header"),XT(25,"Edit Buttons"),Ii$1(),co(26,Hi,9,4,"ng-template",17),Ii$1(),lo(27,qi,6,2);}if(i&2){let e=TT();pr(),Jy("ngModel",e.loading),oI(),pr(3),Jy("ngModel",e.showRouteLoading),oI(),pr(3),Jy("ngModel",e.gradient),oI(),pr(5),Jy("ngModel",e.imgLogo),oI(),pr(4),Jy("ngModel",e.title),oI(),pr(4),Jy("ngModel",e.subtitle),oI(),pr(7),uo(e.inputConfig?27:-1);}}function Wi(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Header"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("HeaderConfig","headerConfig.md"))}),XT(3," View HeaderConfig "),Ii$1(),io(4,"p"),XT(5," The header is a fixed responsive toolbar with a customizable logo, title, subtitle, menu-buttons and an input field. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,ji,28,7),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Ki(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{showBackButton:t}))}),XT(2," Show back button "),Ii$1(),nI(),Ii$1(),io(3,"mat-form-field")(4,"mat-label"),XT(5,"Label"),Ii$1(),io(6,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:t}))}),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.showBackButton),oI(),pr(5),Jy("ngModel",e.label),oI();}}function Qi(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Title Card"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("ContentTitleCardConfig","contentTitleCardConfig.md"))}),XT(3," View ContentTitleCardConfig "),Ii$1(),io(4,"p"),XT(5," The title card is a card below the header that can display a custom label such as a page title and also has a back button. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Ki,7,2),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Ui(i,c){if(i&1&&nv(0,18),i&2){let e=c.$implicit;TT(5);let n=AT(37);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,Ai,e));}}function Xi(i,c){if(i&1){let e=CT();yT(0,Ui,1,4,"ng-container",18,gT),io(2,"button",4),Xa$1("click",function(){Vp(e);let t=TT(4);return Hp(t.addNavButton())}),XT(3,"Add button"),Ii$1();}if(i&2){let e=TT(2);vT(e.buttons);}}function Yi(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("navbarConfig",{showAllLabels:t}))}),XT(2," Always show labels "),Ii$1(),nI(),Ii$1(),io(3,"mat-expansion-panel")(4,"mat-expansion-panel-header"),XT(5,"Edit Nav Button"),Ii$1(),co(6,Xi,4,0,"ng-template",17),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.showAllLabels),oI();}}function $i(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Navbar"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("NavbarConfig","navbarConfig.md"))}),XT(3," View NavbarConfig "),Ii$1(),io(4,"p"),XT(5," The navbar is a fixed navigation element that is positioned vertically left on desktop and responsively moves to the bottom horizontally on mobile. It can show up to 5 navigation items. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("navbarConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Yi,7,1),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Zi(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{open:t}))}),XT(2," Open "),Ii$1(),nI(),Ii$1(),io(3,"p")(4,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{fixed:t}))}),XT(5," Fixed "),Ii$1(),nI(),Ii$1(),io(6,"p"),XT(7," Content can either be set by using content projection "),io(8,"code"),XT(9,"<ng-content drawerContent>"),Ii$1(),XT(10," or by using the component portal "),io(11,"code"),XT(12,"scaffoldService.drawerPortal"),Ii$1(),XT(13," . "),Ii$1(),io(14,"button",19),Xa$1("click",function(){Vp(e);let t=TT(3);return Hp(t.updateDrawerContent(true))}),XT(15," Navigation "),Ii$1(),io(16,"button",20),Xa$1("click",function(){Vp(e);let t=TT(3);return Hp(t.updateDrawerContent(false))}),XT(17," Not found "),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.open),oI(),pr(3),Jy("ngModel",e.fixed),oI();}}function Ji(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Drawer"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("DrawerConfig","drawerConfig.md"))}),XT(3," View DrawerConfig "),Ii$1(),io(4,"p"),XT(5," The drawer is a collapsible element that allows you to place custom dynamic side content. It is responsive and changes to overlay mode on mobile. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Zi,18,2),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function ea(i,c){if(i&1&&nv(0,18),i&2){let e=c.$implicit;TT(5);let n=AT(39);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,Bi,e));}}function ta(i,c){if(i&1){let e=CT();yT(0,ea,1,4,"ng-container",18,gT),io(2,"button",4),Xa$1("click",function(){Vp(e);let t=TT(4);return Hp(t.addFooterLink())}),XT(3,"Add link"),Ii$1();}if(i&2){let e=TT(2);vT(e.links);}}function na(i,c){if(i&1){let e=CT();io(0,"mat-form-field")(1,"mat-label"),XT(2,"Image Logo (url)"),Ii$1(),io(3,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return o.scaffoldService.updateScaffoldProperty("footerConfig",{imgLogo:t}),Hp(o.footerImgLogoChange(t))}),Ii$1(),nI(),Ii$1(),io(4,"mat-form-field")(5,"mat-label"),XT(6,"Copyright"),Ii$1(),io(7,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("footerConfig",{copyright:t}))}),Ii$1(),nI(),Ii$1(),io(8,"h3"),XT(9,"Footer Links"),Ii$1(),io(10,"mat-expansion-panel")(11,"mat-expansion-panel-header"),XT(12," Edit Links (Route has priority over link) "),Ii$1(),co(13,ta,4,0,"ng-template",17),Ii$1();}if(i&2){let e=TT();pr(3),Jy("ngModel",e.imgLogo),oI(),pr(4),Jy("ngModel",e.copyright),oI();}}function ia(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Footer"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("FooterConfig","footerConfig.md"))}),XT(3," View FooterConfig "),Ii$1(),io(4,"p"),XT(5,"The footer is a simple bottom element with a logo, navigation links and the copyright."),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("footerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,na,14,2),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function aa(i,c){if(i&1&&(io(0,"mat-icon",22),XT(1),Ii$1()),i&2){let e=TT(2);pr(),rf(" ",e.matIcon," ");}}function oa(i,c){if(i&1&&(io(0,"mat-option",6),XT(1),Ii$1()),i&2){let e=c.$implicit;Jy("value",e),pr(),rf(" ",e," ");}}function ra(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{sticky:t}))}),XT(2," Sticky "),Ii$1(),nI(),Ii$1(),io(3,"mat-form-field")(4,"mat-label"),XT(5,"Event id"),Ii$1(),io(6,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{id:t}))}),Ii$1(),nI(),Ii$1(),io(7,"mat-form-field")(8,"mat-label"),XT(9,"Label"),Ii$1(),io(10,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{label:t}))}),Ii$1(),nI(),Ii$1(),io(11,"mat-form-field",21)(12,"mat-label"),XT(13,"Material Icon"),Ii$1(),io(14,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{matIcon:t}))}),Ii$1(),nI(),lo(15,aa,2,1,"mat-icon",22),Ii$1(),io(16,"mat-form-field")(17,"mat-label"),XT(18,"Tooltip"),Ii$1(),io(19,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{tooltip:t}))}),Ii$1(),nI(),Ii$1(),io(20,"mat-form-field")(21,"mat-label"),XT(22,"Position"),Ii$1(),io(23,"mat-select",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{horizontalPosition:t}))}),yT(24,oa,2,2,"mat-option",6,gT),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.sticky),oI(),pr(5),Jy("ngModel",e.id),oI(),pr(4),Jy("ngModel",e.label),oI(),pr(4),Jy("ngModel",e.matIcon),oI(),pr(),uo(e.matIcon?15:-1),pr(4),Jy("ngModel",e.tooltip),oI(),pr(4),Jy("ngModel",e.horizontalPosition),oI(),pr(),vT(aS(7,Ri));}}function la(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Floating Button"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("FloatingButtonConfig","floatingButtonConfig.md"))}),XT(3," View FloatingButtonConfig "),Ii$1(),io(4,"p"),XT(5," The floating button is a fixed action button that scrolls to the top on default, but you can also add an id for custom actions. By adding a label, the button will expand into a rounded rectangle shape. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,ra,26,8),ev(10,"mat-divider");}if(i&2){let e=c;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function da(i,c){if(i&1){let e=CT();io(0,"p")(1,"mat-checkbox",15),vv("ngModelChange",function(t){let o=Vp(e).$implicit;return tS(o.checked,t)||(o.checked=t),Hp(t)}),Xa$1("ngModelChange",function(){Vp(e);let t=TT(3);return Hp(t.selectBottomBarItem())}),XT(2),Ii$1(),nI(),Ii$1();}if(i&2){let e=c.$implicit;pr(),yv("ngModel",e.checked),oI(),pr(),rf(" ",e.label," ");}}function sa(i,c){if(i&1){let e=CT();io(0,"h2",23),XT(1,"Bottom Bar"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("BottomBarConfig","bottomBarConfig.md"))}),XT(3," View BottomBarConfig "),Ii$1(),io(4,"p"),XT(5," The bottom bar is a fixed element at the bottom of the page and above the mobile navbar (if enabled). It can be used to handle custom bulk actions for selected items in large lists. "),Ii$1(),io(6,"p"),XT(7,"(select items to test the bottom bar)"),Ii$1(),yT(8,da,3,2,"p",null,gT);}if(i&2){let e=TT(2);pr(8),vT(e.bottomBarDemoList());}}function ca(i,c){if(i&1){let e=CT();io(0,"h2"),XT(1,"Scaffold"),Ii$1(),io(2,"span",14),Xa$1("click",function(){Vp(e);let t=TT();return Hp(t.openMarkdownDialog("ScaffoldConfig","scaffoldConfig.md"))}),XT(3," View ScaffoldConfig "),Ii$1(),io(4,"p"),XT(5," The "),io(6,"code"),XT(7,"<lf-scaffold>"),Ii$1(),XT(8," component is the global wrapper element that contains all UI elements and displays them based on the provided "),io(9,"code"),XT(10,"ScaffoldConfig"),Ii$1(),XT(11," . "),Ii$1(),io(12,"p")(13,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT();return Hp(o.scaffoldService.updateScaffoldProperty("scrollPositionRestoration",t))}),XT(14," Reset scroll position after navigation "),Ii$1(),nI(),Ii$1(),lo(15,zi,3,1,"p"),ev(16,"mat-divider"),lo(17,Wi,11,2),lo(18,Qi,11,2),lo(19,$i,11,2),lo(20,Ji,11,2),lo(21,ia,11,2),lo(22,la,11,2),lo(23,sa,10,0);}if(i&2){let e,n,t,o,_,k,S,z,K=TT();pr(13),Jy("ngModel",c.scrollPositionRestoration),oI(),pr(2),uo((e=K.loadingOverlayConfig())?15:-1,e),pr(2),uo((n=K.headerConfig())?17:-1,n),pr(),uo((t=K.contentTitleCardConfig())?18:-1,t),pr(),uo((o=K.navbarConfig())?19:-1,o),pr(),uo((_=K.drawerConfig())?20:-1,_),pr(),uo((k=K.footerConfig())?21:-1,k),pr(),uo((S=K.floatingButtonConfig())?22:-1,S),pr(),uo((z=K.bottomBarConfig())?23:-1,z);}}function ma(i,c){if(i&1&&(io(0,"mat-icon",22),XT(1),Ii$1()),i&2){let e=TT(2).menuButton;pr(),gv(e.matIcon);}}function pa(i,c){if(i&1){let e=CT();io(0,"div",24)(1,"mat-form-field")(2,"mat-label"),XT(3,"Event id"),Ii$1(),io(4,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(),_=o.menuButton,k=o.isLeftButton,S=o.isNavButton,z=TT();return Hp(z.updateHeaderButton(_,k,S,"id",t))}),Ii$1(),nI(),Ii$1(),io(5,"mat-form-field")(6,"mat-label"),XT(7,"Label"),Ii$1(),io(8,"input",25),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(),_=o.menuButton,k=o.isLeftButton,S=o.isNavButton,z=TT();return Hp(z.updateHeaderButton(_,k,S,"label",t))}),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field",21)(10,"mat-label"),XT(11,"Material Icon"),Ii$1(),io(12,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(),_=o.menuButton,k=o.isLeftButton,S=o.isNavButton,z=TT();return Hp(z.updateHeaderButton(_,k,S,"matIcon",t))}),Ii$1(),nI(),lo(13,ma,2,1,"mat-icon",22),Ii$1(),io(14,"mat-form-field")(15,"mat-label"),XT(16,"Tooltop"),Ii$1(),io(17,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT(),_=o.menuButton,k=o.isLeftButton,S=o.isNavButton,z=TT();return Hp(z.updateHeaderButton(_,k,S,"tooltip",t))}),Ii$1(),nI(),Ii$1(),io(18,"button",26),Xa$1("click",function(){Vp(e);let t=TT(),o=t.menuButton,_=t.isLeftButton,k=t.isNavButton,S=TT();return Hp(S.removeHeaderButton(o,_,k))}),io(19,"mat-icon"),XT(20,"delete"),Ii$1()()();}if(i&2){let e=TT(),n=e.menuButton,t=e.isLeftButton;pr(4),Jy("ngModel",n.id),oI(),pr(4),Jy("disabled",t)("ngModel",n.label),oI(),pr(4),Jy("ngModel",n.matIcon),oI(),pr(),uo(n.matIcon?13:-1),pr(4),Jy("ngModel",n.tooltip),oI();}}function _a(i,c){if(i&1&&lo(0,pa,21,6,"div",24),i&2){let e=c.menuButton;uo(e?0:-1);}}function ha(i,c){if(i&1){let e=CT();io(0,"div",24)(1,"mat-form-field")(2,"mat-label"),XT(3,"Label"),Ii$1(),io(4,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,_=TT();return Hp(_.updateFooterLink(o,"label",t))}),Ii$1(),nI(),Ii$1(),io(5,"mat-form-field")(6,"mat-label"),XT(7,"Route (internal)"),Ii$1(),io(8,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,_=TT();return Hp(_.updateFooterLink(o,"routerLink",t))}),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field")(10,"mat-label"),XT(11,"Link (external)"),Ii$1(),io(12,"input",16),Xa$1("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,_=TT();return Hp(_.updateFooterLink(o,"href",t))}),Ii$1(),nI(),Ii$1(),io(13,"mat-slide-toggle",15),Xa$1("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,_=TT();return Hp(_.updateFooterLink(o,"externalTab",t))}),XT(14," External Tab "),Ii$1(),nI(),io(15,"button",27),Xa$1("click",function(){Vp(e);let t=TT().navigationLink,o=TT();return Hp(o.removeFooterLink(t))}),io(16,"mat-icon"),XT(17,"delete"),Ii$1()()();}if(i&2){let e=TT().navigationLink;pr(4),Jy("ngModel",e.label),oI(),pr(4),Jy("ngModel",e.routerLink),oI(),pr(4),Jy("ngModel",e.href),oI(),pr(),Jy("ngModel",e.externalTab),oI();}}function ua(i,c){if(i&1&&lo(0,ha,18,4,"div",24),i&2){let e=c.navigationLink;uo(e?0:-1);}}var Gn=(()=>{class i{constructor(){this.scaffoldService=f(ks),this.themeService=f(m1),this.dialogService=f(d1),this.logger=f(yn),this.scaffoldConfig=$t(this.scaffoldService.scaffoldConfig$,{initialValue:null}),this.loadingOverlayConfig=_S(()=>this.scaffoldConfig()?.loadingOverlayConfig||{}),this.headerConfig=_S(()=>this.scaffoldConfig()?.headerConfig||{}),this.navbarConfig=_S(()=>this.scaffoldConfig()?.navbarConfig||{}),this.drawerConfig=_S(()=>this.scaffoldConfig()?.drawerConfig||{}),this.footerConfig=_S(()=>this.scaffoldConfig()?.footerConfig||{}),this.contentTitleCardConfig=_S(()=>this.scaffoldConfig()?.contentTitleCardConfig||{}),this.floatingButtonConfig=_S(()=>this.scaffoldConfig()?.floatingButtonConfig||{}),this.bottomBarConfig=_S(()=>this.scaffoldConfig()?.bottomBarConfig||{}),this.bottomBarDemoList=ze([{checked:false,label:"Demo item 1"},{checked:false,label:"Demo item 2"},{checked:false,label:"Demo item 3"}]),this.themes=[{label:"Pink, light",key:"",primary:"pink",accent:"blue",dark:false},{label:"Pink, dark",key:"theme2",primary:"pink",accent:"blue",dark:true},{label:"Blue, light",key:"theme3",primary:"blue",accent:"pink",dark:false},{label:"Blue, dark",key:"theme4",primary:"blue",accent:"pink",dark:true}],this.theme=$t(this.themeService.currentTheme$),this.inputValue=$t(this.scaffoldService.headerInputChangeValue$),this.isM2=_S(()=>(this.theme()??"").startsWith("m2")),this.themeKey=_S(()=>(this.theme()??"").replace(/^m2-?/,"")),this.scaffoldService.scaffoldConfig$.pipe(Ee(1),ud()).subscribe(e=>{e&&this.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:"Demo"});}),this.scaffoldService.buttonClickEventValue$.pipe(ud()).subscribe(e=>{e==="bottom-bar_submit"?this.bottomBarButtonClicked():e==="bottom-bar_close"&&this.bottomBarCloseClicked();});}copyConfig(){let e=(t,o)=>{if(!(o===""||o===null||o===void 0||o===false)&&!(o&&typeof o=="object"&&"enable"in o&&o.enable===false)&&!(o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).length===0))return o},n="public scaffoldConfig: ScaffoldConfig = "+JSON.stringify(this.scaffoldConfig(),e,2).replace(/"([^"]+)":/g,"$1:").replace(/"/g,"'");this.openMarkdownDialog("Copy current config","",n,true);}openMarkdownDialog(e,n,t,o=false){this.dialogService.openCustomDialog(Hn,{autoFocus:false,data:{title:e,src:n?`md/${n}`:"",data:t,showCopy:o},maxWidth:"1000px"});}showContainerLoading(){this.scaffoldService.updateScaffoldProperty("loading",true),setTimeout(()=>{this.scaffoldService.updateScaffoldProperty("loading",false);},2e3);}updateInputConfig(e,n){this.scaffoldService.updateScaffoldProperty("headerConfig",{inputConfig:K(D({},this.headerConfig()?.inputConfig),{[e]:n})});}headerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:"logo"});}footerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:"logo"});}setTheme(e){this.themeService.setTheme(this.themeClass(e,this.isM2()),true);}setMaterialVersion(e){this.themeService.setTheme(this.themeClass(this.themeKey(),e),true);}themeClass(e,n){return n?e?`m2-${e}`:"m2":e}addHeaderButton(e){e?e&&!this.headerConfig()?.leftMenuButton&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:{id:""}}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:[...this.headerConfig().rightMenuButtons||[],{id:""}]});}removeHeaderButton(e,n,t){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig().buttons?.filter(o=>o!==e)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:void 0}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig().rightMenuButtons?.filter(o=>o!==e)});}updateHeaderButton(e,n,t,o,_){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig()?.buttons?.map(k=>k===e?K(D({},k),{[o]:_}):k)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:K(D({},this.headerConfig().leftMenuButton),{[o]:_})}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig()?.rightMenuButtons?.map(k=>k===e?K(D({},k),{[o]:_}):k)});}addNavButton(){this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:[...this.navbarConfig().buttons||[],{id:""}]});}addFooterLink(){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:[...this.footerConfig().links||[],{}]});}removeFooterLink(e){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig().links?.filter(n=>n!==e)});}updateFooterLink(e,n,t){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig()?.links?.map(o=>o===e?K(D({},o),{[n]:t}):o)});}updateDrawerContent(e){this.scaffoldService.drawerPortal=e?null:F;}async bottomBarButtonClicked(){let e=this.bottomBarDemoList().filter(t=>t.checked).length,n=await this.dialogService.openConfirmDialog({title:"Selection:",message:`You have selected ${e} items`,closeLabel:"Close",confirmLabel:"Confirm"});this.logger.log("close result: ",n);}bottomBarCloseClicked(){this.bottomBarDemoList.update(e=>e.map(n=>K(D({},n),{checked:false}))),this.updateBottomBar();}selectBottomBarItem(){this.updateBottomBar();}updateBottomBar(){let e=this.bottomBarDemoList().filter(n=>n.checked).length;e>0?this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:true,message:`${e} selected`,buttons:[{id:"bottom-bar_submit",label:"Submit"}]}):this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:false});}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-start"]],decls:40,vars:6,consts:[["menuButtonFormTemplate",""],["navigationLinkTemplate",""],[1,"lf-startpage"],[1,"lf-link",3,"routerLink"],["mat-flat-button","","color","accent",3,"click"],[1,"version-selector","mb-4","gap-4",3,"change","value"],[3,"value"],[1,"theme-selector"],[1,"theme-button",3,"light","dark","active","title"],[1,"theme-button",3,"click","title"],[1,"preview"],[1,"header",3,"ngClass"],[1,"body"],[1,"accent",3,"ngClass"],[1,"link",3,"click"],[3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel"],["matExpansionPanelContent",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","primary",3,"click"],[1,"lf-form-field-small"],["matPrefix",""],["id","test"],[1,"flex-row","mb-2"],["matInput","",3,"ngModelChange","disabled","ngModel"],["mat-icon-button","","color","warn","matTooltip","Remove button",3,"click"],["mat-icon-button","","color","warn","matTooltip","Remove link",3,"click"]],template:function(n,t){if(n&1&&(io(0,"div",2)(1,"h1"),XT(2,"Demo"),Ii$1(),io(3,"p"),XT(4," This is a simple demo page for the Angular Scaffold library "),io(5,"code"),XT(6,"@lukfel/ng-scaffold."),Ii$1(),ev(7,"br"),XT(8," Play around with the individual UI elements and copy the configuration to your Angular application. For more technical information see the "),io(9,"a",3),XT(10,"Documentation"),Ii$1(),XT(11," . "),Ii$1(),io(12,"button",4),Xa$1("click",function(){return t.copyConfig()}),io(13,"mat-icon"),XT(14,"content_copy"),Ii$1(),XT(15," Copy current config "),Ii$1(),ev(16,"mat-divider"),io(17,"h2"),XT(18,"Themes"),Ii$1(),io(19,"p"),XT(20,"The library ships both a Material 3 and a Material 2 theming API."),Ii$1(),io(21,"mat-radio-group",5),Xa$1("change",function(_){return t.setMaterialVersion(_.value)}),io(22,"mat-radio-button",6),XT(23,"Material 3"),Ii$1(),io(24,"mat-radio-button",6),XT(25,"Material 2"),Ii$1()(),io(26,"p"),XT(27," Define multiple themes and change them dynamically by using the library's "),io(28,"code"),XT(29,"ThemeService"),Ii$1(),XT(30," or manually setting the corresponding css class of the theme. "),Ii$1(),io(31,"div",7),yT(32,Fi,5,9,"div",8,Li),Ii$1(),ev(34,"mat-divider"),lo(35,ca,24,9),Ii$1(),co(36,_a,1,1,"ng-template",null,0,mS)(38,ua,1,1,"ng-template",null,1,mS)),n&2){let o;pr(9),Jy("routerLink",aS(5,Di)),pr(12),Jy("value",t.isM2()),pr(),Jy("value",false),pr(2),Jy("value",true),pr(8),vT(t.themes),pr(3),uo((o=t.scaffoldConfig())?35:-1,o);}},dependencies:[$i$1,an,Si,Mi,Xo,Di$1,Pn,nt,Dn,tt,Wi$1,wr,qi$1,Ua,Rd,Td,An,it,je,Fn,Ln,Fd,G5,z5,e0,Ad,Xa,zn,ot,Je,Ke,Dl,Ml,iM,sM],styles:[".lf-startpage[_ngcontent-%COMP%]{max-width:960px;margin:auto}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%], .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{cursor:pointer;color:var(--color-primary);text-decoration:unset}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]:hover, .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:64px 0}.lf-startpage[_ngcontent-%COMP%]   .version-selector[_ngcontent-%COMP%]{display:flex}.lf-startpage[_ngcontent-%COMP%]   .theme-selector[_ngcontent-%COMP%]{display:flex;gap:24px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]{width:48px;height:40px;border-radius:var(--border-radius);overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px #0000001a;transition:all .2s;cursor:pointer}.lf-startpage[_ngcontent-%COMP%]   .theme-button.light[_ngcontent-%COMP%]{background-color:#fdfdfd}.lf-startpage[_ngcontent-%COMP%]   .theme-button.dark[_ngcontent-%COMP%]{background-color:#1e1e1e}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.lf-startpage[_ngcontent-%COMP%]   .theme-button.active[_ngcontent-%COMP%]{outline:2px solid var(--color-primary);outline-offset:2px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;overflow:hidden}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;height:8px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{width:16px;height:8px;border-radius:var(--border-radius)}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#e91e63}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{background-color:#2196f3}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:0 8px 8px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.lf-startpage[_ngcontent-%COMP%]   .lf-form-field-small[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:112px!important}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]{text-decoration:unset;color:var(--color-primary)}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{display:flex!important;flex-flow:row wrap;align-items:center}"]});}}return i})();var Zr=[{path:"",component:Gn}];export{Zr as START_ROUTES};