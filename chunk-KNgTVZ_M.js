import {f,x as xs,Q as Q1,G as G1,C as Cn,H as Ht,_ as _S,z as ze,E as Ee,c as cd,K,D,p as pe,b as br,a as bn$1,k as ki$1,d as xi$1,q as qo,w as wi$1,e as Hi$1,y as yr,j as ji$1,g as za,I as Id,h as Ed,A as Ad,W as W5,$ as $5,i as e0,R as Rd,l as Ga,m as Ke,Y as Ye$1,n as kl,o as wl,s as sM,r as io,X as XT,t as Ii$1,u as ev,v as Xa,B as lo,F as co,J as mS,L as pr,M as Jy,N as aS,O as uo,U as Ux,P as X1,S as Y4,T as z4,V as W4,Z as q4,a0 as G4,a1 as Hn$1,a2 as gv,a3 as ee,a4 as X,a5 as Dr,a6 as pt,a7 as ct,a8 as tn,a9 as S,aa as x,ab as U,ac as qe,ad as Z,ae as M,af as g,ag as kt,ah as tt,ai as pn,aj as de,ak as _r,al as $i$1,am as be,an as Yt,ao as le,ap as yr$1,aq as Me,ar as At,as as of,at as xe,au as Mi$1,av as Qa,aw as Ja,ax as sv,ay as Xi$1,az as Ni$1,aA as Y,aB as Ye$2,aC as C_,aD as Sv,aE as Bn$1,aF as ul,aG as Mn$1,aH as lt,aI as ut,aJ as mf,aK as tf,aL as We,aM as J,aN as Gi$1,aO as n1,aP as Vf,aQ as vo,aR as en,aS as Ha,aT as Jt,aU as Sx,aV as gx,aW as _x,aX as yi$1,aY as Po,aZ as As,a_ as ie,a$ as Sd,b0 as ra,b1 as aa,b2 as Xf,b3 as xr,b4 as L,b5 as Br,b6 as Gf,b7 as sh,b8 as Te,b9 as ux,ba as Qp,bb as AT,bc as Ua,bd as mp,be as hp,bf as f5,bg as Td,bh as Uo,bi as zn$1,bj as Wo,bk as Ti$1,bl as nf,bm as C,bn as TT,bo as CT,bp as dt,bq as j,br as Yf,bs as nI,bt as oI,bu as Vp,bv as Hp,bw as yT,bx as gT,by as vT,bz as vv,bA as tS,bB as yv,bC as rf,bD as nv,bE as cS}from'./main-TBQWFXXC.js';import {F}from'./chunk-hBe_9QP4.js';var bn=new g("CdkAccordion");var vn=(()=>{class i{accordion=f(bn,{optional:true,skipSelf:true});_changeDetectorRef=f(Ni$1);_expansionDispatcher=f(tt);_openCloseAllSubscription=Y.EMPTY;closed=new Z;opened=new Z;destroyed=new Z;expandedChange=new Z;id=f(kt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n);}else this.closed.emit();this._changeDetectorRef.markForCheck();}}_expanded=false;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e);}_disabled=ze(false);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=false);}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions());}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe();}toggle(){this.disabled||(this.expanded=!this.expanded);}close(){this.disabled||(this.expanded=false);}open(){this.disabled||(this.expanded=true);}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e);})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=J({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",le],disabled:[2,"disabled","disabled",le]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[of([{provide:bn,useValue:void 0}])]})}return i})(),xn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({})}return i})();var An=["body"],Ln=["bodyWrapper"],Fn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Rn=["mat-expansion-panel-header","*","mat-action-row"];function Nn(i,m){}var zn=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Hn=["mat-panel-title","mat-panel-description","*"];function jn(i,m){i&1&&(lt(0,"span",1),Qp(),lt(1,"svg",2),dt(2,"path",3),ut()());}var yn=new g("MAT_ACCORDION"),wn=new g("MAT_EXPANSION_PANEL"),Ue=(()=>{class i{_template=f(We);_expansionPanel=f(wn,{optional:true});static \u0275fac=function(n){return new(n||i)};static \u0275dir=J({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]})}return i})(),Sn=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Xe=(()=>{class i extends vn{_viewContainerRef=f(ct);_animationsDisabled=tn();_document=f(S);_ngZone=f(x);_elementRef=f(U);_renderer=f(qe);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e;}_hideToggle=false;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e;}_togglePosition;afterExpand=new Z;afterCollapse=new Z;_inputChanges=new M;accordion=f(yn,{optional:true,skipSelf:true});_lazyContent;_body;_bodyWrapper;_portal;_headerId=f(kt).getId("mat-expansion-panel-header-");constructor(){super();let e=f(Sn,{optional:true});this._expansionDispatcher=f(tt),e&&(this.hideToggle=e.hideToggle);}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":false}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded;}close(){this.expanded=false;}open(){this.expanded=true;}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(pn(null),de(()=>this.expanded&&!this._portal),Ee(1)).subscribe(()=>{this._portal=new _r(this._lazyContent._template,this._viewContainerRef);}),this._setupAnimationEvents();}ngOnChanges(e){this._inputChanges.next(e);}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete();}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return  false}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit();});};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled");},200);});}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(n,t,o){if(n&1&&sv(o,Ue,5),n&2){let g;Qa(g=Ja())&&(t._lazyContent=g.first);}},viewQuery:function(n,t){if(n&1&&Mi$1(An,5)(Ln,5),n&2){let o;Qa(o=Ja())&&(t._body=o.first),Qa(o=Ja())&&(t._bodyWrapper=o.first);}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,t){n&2&&xe("mat-expanded",t.expanded)("mat-expansion-panel-spacing",t._hasSpacing());},inputs:{hideToggle:[2,"hideToggle","hideToggle",le],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[of([{provide:yn,useValue:void 0},{provide:wn,useExisting:i}]),be,Yt],ngContentSelectors:Rn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,t){n&1&&(yr$1(Fn),Me(0),io(1,"div",2,0)(3,"div",3,1)(5,"div",4),Me(6,1),co(7,Nn,0,0,"ng-template",5),Ii$1(),Me(8,2),Ii$1()()),n&2&&(pr(),At("inert",t.expanded?null:""),pr(2),Jy("id",t.id),At("aria-labelledby",t._headerId),pr(4),Jy("cdkPortalOutlet",t._portal));},dependencies:[$i$1],styles:[`.mat-expansion-panel {
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
`],encapsulation:2})}return i})();var Mn=(()=>{class i{panel=f(Xe,{host:true});_element=f(U);_focusMonitor=f(Xi$1);_changeDetectorRef=f(Ni$1);_parentChangeSubscription=Y.EMPTY;constructor(){f(Ye$2).load(C_);let e=this.panel,n=f(Sn,{optional:true}),t=f(new Sv("tabindex"),{optional:true}),o=e.accordion?e.accordion._stateChanges.pipe(de(g=>!!(g.hideToggle||g.togglePosition))):Bn$1;this.tabIndex=parseInt(t||"")||0,this._parentChangeSubscription=ul(e.opened,e.closed,o,e._inputChanges.pipe(de(g=>!!(g.hideToggle||g.disabled||g.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(de(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight);}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle();}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return !this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Mn$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n);}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this);});}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element);}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,t){n&1&&Xa("click",function(){return t._toggle()})("keydown",function(g){return t._keydown(g)}),n&2&&(At("id",t.panel._headerId)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),tf("height",t._getHeaderHeight()),xe("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after",t._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",t._getTogglePosition()==="before"));},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)]},ngContentSelectors:Hn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,t){n&1&&(yr$1(zn),lt(0,"span",0),Me(1),Me(2,1),Me(3,2),ut(),lo(4,jn,3,0,"span",1)),n&2&&(xe("mat-content-hide-toggle",!t._showToggle()),pr(4),uo(t._showToggle()?4:-1));},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2})}return i})();var kn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[xn,Dr,pt]})}return i})();var Un=["trigger"],Xn=["panel"],Yn=[[["mat-select-trigger"]],"*"],$n=["mat-select-trigger","*"];function Zn(i,m){if(i&1&&(io(0,"span",4),XT(1),Ii$1()),i&2){let e=TT();pr(),gv(e.placeholder);}}function Jn(i,m){i&1&&Me(0);}function ei(i,m){if(i&1&&(io(0,"span",11),XT(1),Ii$1()),i&2){let e=TT(2);pr(),gv(e.triggerValue);}}function ti(i,m){if(i&1&&(io(0,"span",5),lo(1,Jn,1,0)(2,ei,2,1,"span",11),Ii$1()),i&2){let e=TT();pr(),uo(e.customTrigger?1:2);}}function ni(i,m){if(i&1){let e=CT();io(0,"div",12,1),Xa("keydown",function(t){Vp(e);let o=TT();return Hp(o._handleKeydown(t))}),Me(2,1),Ii$1();}if(i&2){let e=TT();nf(e.panelClass),xe("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),At("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var ii=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=f(j);return ()=>Yf(i)}}),ai=new g("MAT_SELECT_CONFIG"),oi=new g("MatSelectTrigger"),Ye=class{source;value;constructor(m,e){this.source=m,this.value=e;}},On=(()=>{class i{_viewportRuler=f(vo);_changeDetectorRef=f(Ni$1);_elementRef=f(U);_dir=f(en,{optional:true});_idGenerator=f(kt);_renderer=f(qe);_parentFormField=f(Ha,{optional:true});ngControl=f(Jt,{self:true,optional:true});_liveAnnouncer=f(Sx);_defaultOptions=f(ai,{optional:true});_animationsDisabled=tn();_popoverLocation;_initialized=new M;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let t=this.panel.nativeElement,o=gx(e,this.options,this.optionGroups),g=n._getHostElement();e===0&&o===1?t.scrollTop=0:t.scrollTop=_x(g.offsetTop,g.offsetHeight,t.scrollTop,t.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new Ye(this,e)}_scrollStrategyFactory=f(ii);_panelOpen=false;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new M;_errorStateTracker;stateChanges=new M;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=ze(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(yi$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Po(()=>{let e=this.options;return e?e.changes.pipe(pn(e),As(()=>ul(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(As(()=>this.optionSelectionChanges))});openedChange=new Z;_openedStream=this.openedChange.pipe(de(e=>e),ie(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),ie(()=>{}));selectionChange=new Z;valueChange=new Z;constructor(){let e=f(Sd),n=f(ra,{optional:true}),t=f(aa,{optional:true}),o=f(new Sv("tabindex"),{optional:true}),g=f(Xf,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new xr(e,this.ngControl,t,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=g?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new L(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Br(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Br(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect());}),this.options.changes.pipe(pn(null),Br(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby");}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(Ee(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(t),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),t=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let n=e.keyCode,t=n===40||n===38||n===37||n===39,o=n===13||n===32,g=this._keyManager;if(!g.isTyping()&&o&&!Mn$1(e)||(this.multiple||e.altKey)&&t)e.preventDefault(),this.open();else if(!this.multiple){let w=this.selected;g.onKeydown(e);let S=this.selected;S&&w!==S&&this._liveAnnouncer.announce(S.viewValue,1e4);}}_handleOpenKeydown(e){let n=this._keyManager,t=e.keyCode,o=t===40||t===38,g=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!g&&(t===13||t===32)&&n.activeItem&&!Mn$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!g&&this._multiple&&t===65&&e.ctrlKey){e.preventDefault();let w=this.options.some(S=>!S.disabled&&!S.selected);this.options.forEach(S=>{S.disabled||(w?S.select():S.deselect());});}else {let w=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==w&&n.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Mn$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else {let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let n=this.options.find(t=>{if(this._selectionModel.isSelected(t))return  false;try{return (t.value!=null||this.canSelectNullableOptions)&&this._compareWith(t.value,e)}catch{return  false}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Gf?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new sh(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ul(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Br(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ul(...this.options.map(n=>n._stateChanges)).pipe(Br(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,n){let t=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(t!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),t!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,t)=>this.sortComparator?this.sortComparator(n,t,e):e.indexOf(n)-e.indexOf(t)),this.stateChanges.next();}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(t=>t.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby");}onContainerClick(e){let n=Te(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-select"]],contentQueries:function(n,t,o){if(n&1&&sv(o,oi,5)(o,Ad,5)(o,hp,5),n&2){let g;Qa(g=Ja())&&(t.customTrigger=g.first),Qa(g=Ja())&&(t.options=g),Qa(g=Ja())&&(t.optionGroups=g);}},viewQuery:function(n,t){if(n&1&&Mi$1(Un,5)(Xn,5)(ux,5),n&2){let o;Qa(o=Ja())&&(t.trigger=o.first),Qa(o=Ja())&&(t.panel=o.first),Qa(o=Ja())&&(t._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,t){n&1&&Xa("keydown",function(g){return t._handleKeydown(g)})("focus",function(){return t._onFocus()})("blur",function(){return t._onBlur()}),n&2&&(At("id",t.id)("tabindex",t.disabled?-1:t.tabIndex)("aria-controls",t.panelOpen?t.id+"-panel":null)("aria-expanded",t.panelOpen)("aria-label",t.ariaLabel||null)("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-activedescendant",t._getAriaActiveDescendant()),xe("mat-mdc-select-disabled",t.disabled)("mat-mdc-select-invalid",t.errorState)("mat-mdc-select-required",t.required)("mat-mdc-select-empty",t.empty)("mat-mdc-select-multiple",t.multiple)("mat-select-open",t.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",le],placeholder:"placeholder",required:[2,"required","required",le],multiple:[2,"multiple","multiple",le],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",le],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",mf],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",le]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[of([{provide:Ua,useExisting:i},{provide:mp,useExisting:i}]),Yt],ngContentSelectors:$n,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,t){if(n&1&&(yr$1(Yn),io(0,"div",2,0),Xa("click",function(){return t.open()}),io(3,"div",3),lo(4,Zn,2,1,"span",4)(5,ti,3,1,"span",5),Ii$1(),io(6,"div",6)(7,"div",7),Qp(),io(8,"svg",8),ev(9,"path",9),Ii$1()()()(),co(10,ni,3,16,"ng-template",10),Xa("detach",function(){return t.close()})("backdropClick",function(){return t.close()})("overlayKeydown",function(g){return t._handleOverlayKeydown(g)})),n&2){let o=AT(1);pr(3),At("id",t._valueId),pr(),uo(t.empty?4:5),pr(6),Jy("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",t._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",t._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayWidth",t._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",t._popoverLocation);}},dependencies:[Gf,ux],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return i})();var Dn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[Gi$1,n1,pt,Vf,Hi$1,n1]})}return i})();var li=["switch"],si=["*"];function di(i,m){i&1&&(io(0,"span",11),Qp(),io(1,"svg",13),ev(2,"path",14),Ii$1(),io(3,"svg",15),ev(4,"path",16),Ii$1()());}var ci=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),Fe=class{source;checked;constructor(m,e){this.source=m,this.checked=e;}},$e=(()=>{class i{_elementRef=f(U);_focusMonitor=f(Xi$1);_changeDetectorRef=f(Ni$1);defaults=f(ci);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new Fe(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=tn();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new Z;toggleChange=new Z;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){f(Ye$2).load(C_);let e=f(new Sv("tabindex"),{optional:true}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=f(kt).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??false,this.disabledInteractive=n.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Fe(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=pe({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(n,t){if(n&1&&Mi$1(li,5),n&2){let o;Qa(o=Ja())&&(t._switchElement=o.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,t){n&2&&(Ti$1("id",t.id),At("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),nf(t.color?"mat-"+t.color:""),xe("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",le],color:"color",disabled:[2,"disabled","disabled",le],disableRipple:[2,"disableRipple","disableRipple",le],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mf(e)],checked:[2,"checked","checked",le],hideIcon:[2,"hideIcon","hideIcon",le],disabledInteractive:[2,"disabledInteractive","disabledInteractive",le]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[of([{provide:Uo,useExisting:Wo(()=>i),multi:true},{provide:zn$1,useExisting:i,multi:true}]),Yt],ngContentSelectors:si,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,t){if(n&1&&(yr$1(),io(0,"div",1)(1,"button",2,0),Xa("click",function(){return t._handleClick()}),ev(3,"div",3)(4,"span",4),io(5,"span",5)(6,"span",6)(7,"span",7),ev(8,"span",8),Ii$1(),io(9,"span",9),ev(10,"span",10),Ii$1(),lo(11,di,5,0,"span",11),Ii$1()()(),io(12,"label",12),Xa("click",function(g){return g.stopPropagation()}),Me(13),Ii$1()()),n&2){let o=AT(2);Jy("labelPosition",t.labelPosition),pr(),xe("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),Jy("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),At("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),pr(9),Jy("matRippleTrigger",o)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",true),pr(),uo(t.hideIcon?-1:11),pr(),Jy("for",t.buttonId),At("id",t._labelId);}},dependencies:[f5,Td],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})(),In=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ee({type:i});static \u0275inj=X({imports:[$e,pt]})}return i})();var Ze=class{_document;_textarea;constructor(m,e){this._document=e;let n=this._textarea=this._document.createElement("textarea"),t=n.style;t.position="fixed",t.top=t.opacity="0",t.left="-999em",n.setAttribute("aria-hidden","true"),n.value=m,n.readOnly=true,(this._document.fullscreenElement||this._document.body).appendChild(n);}copy(){let m=this._textarea,e=false;try{if(m){let n=this._document.activeElement;m.select(),m.setSelectionRange(0,m.value.length),e=this._document.execCommand("copy"),n&&n.focus();}}catch{}return e}destroy(){let m=this._textarea;m&&(m.remove(),this._textarea=void 0);}},Pn=(()=>{class i{_document=f(S);copy(e){let n=this.beginCopy(e),t=n.copy();return n.destroy(),t}beginCopy(e){return new Ze(e,this._document)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=C({token:i,factory:i.\u0275fac})}return i})();function _i(i,m){if(i&1&&ev(0,"markdown",2),i&2){let e=TT();Jy("src",e.data.src);}}function hi(i,m){if(i&1&&ev(0,"markdown",3),i&2){let e=TT();Jy("data",e.dataSnippet);}}function ui(i,m){if(i&1){let e=CT();io(0,"button",7),Xa("click",function(){Vp(e);let t=TT();return Hp(t.copy())}),io(1,"mat-icon"),XT(2,"content_copy"),Ii$1(),XT(3," Copy "),Ii$1();}}var Vn=(()=>{class i{constructor(){this.data=f(Ux,{optional:true})??{},this.snackbarService=f(X1),this.clipboard=f(Pn),this.dataSnippet="",this.data?.data&&(this.dataSnippet=`\`\`\`ts
// Configure the demo page and copy the config to your application:
${this.data.data}
\`\`\``,setTimeout(()=>{window.dispatchEvent(new Event("resize"));},150));}copy(){this.data.showCopy&&this.data.data&&(this.clipboard.copy(this.data.data),this.snackbarService.openSnackbar("Copied","Close"));}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-markdown"]],decls:9,vars:3,consts:[["mat-dialog-title",""],[1,"lf-dialog-content"],[3,"src"],[3,"data"],["align","end",1,"lf-dialog-actions"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",1,"ml-4"],["mat-flat-button","","color","primary",1,"ml-4",3,"click"]],template:function(n,t){n&1&&(io(0,"h2",0),XT(1),Ii$1(),io(2,"mat-dialog-content",1),lo(3,_i,1,1,"markdown",2)(4,hi,1,1,"markdown",3),Ii$1(),io(5,"mat-dialog-actions",4)(6,"button",5),XT(7,"Close"),Ii$1(),lo(8,ui,4,0,"button",6),Ii$1()),n&2&&(pr(),gv(t.data.title),pr(2),uo(t.data.src&&!t.data.data?3:!t.data.src&&t.data.data?4:-1),pr(5),uo(t.data.showCopy?8:-1));},dependencies:[Y4,z4,W4,q4,G4,W5,$5,Ke,Ye$1,Hn$1],styles:[".lf-dialog-content[_ngcontent-%COMP%]{padding:0 24px 16px!important}.lf-dialog-content[_ngcontent-%COMP%]     pre{max-height:400px;margin:0!important;overflow-x:hidden}@media screen and (max-width:800px){.lf-dialog-content[_ngcontent-%COMP%]     pre{overflow-x:auto}}.lf-dialog-actions[_ngcontent-%COMP%]{padding:0 24px 16px!important}"]});}}return i})();var fi=()=>["/documentation"],Ci=i=>({menuButton:i,isLeftButton:true,isNavButton:false}),bi=i=>({menuButton:i,isLeftButton:false,isNavButton:false}),vi=i=>({menuButton:i,isLeftButton:false,isNavButton:true}),xi=i=>({navigationLink:i}),yi=()=>["center","right"];function wi(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return o.scaffoldService.updateScaffoldProperty("loadingOverlayConfig",{gradient:t}),Hp(o.showContainerLoading())}),XT(2," Gradient loading spinner "),Ii$1(),nI(),Ii$1();}i&2&&(pr(),Jy("ngModel",m.gradient),oI());}function Si(i,m){if(i&1&&nv(0,18),i&2){let e=m.$implicit;TT(5);let n=AT(48);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,bi,e));}}function Mi(i,m){if(i&1){let e=CT();io(0,"h4"),XT(1,"Left Button (Icon only)"),Ii$1(),nv(2,18),io(3,"h4"),XT(4,"Right Buttons (Label has priority over icon)"),Ii$1(),yT(5,Si,1,4,"ng-container",18,gT),io(7,"button",4),Xa("click",function(){Vp(e);let t=TT(4);return Hp(t.addHeaderButton(false))}),XT(8," Add button "),Ii$1();}if(i&2){let e=TT(2);TT(2);let n=AT(48);pr(2),Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,Ci,e.leftMenuButton)),pr(3),vT(e.rightMenuButtons);}}function ki(i,m){if(i&1){let e=CT();io(0,"p"),XT(1),Ii$1(),io(2,"mat-form-field")(3,"mat-label"),XT(4,"Label"),Ii$1(),io(5,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(5);return Hp(o.updateInputConfig("label",t))}),Ii$1(),nI(),Ii$1(),io(6,"mat-form-field")(7,"mat-label"),XT(8,"Material Icon"),Ii$1(),io(9,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(5);return Hp(o.updateInputConfig("matIconSubmit",t))}),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT(3),n=TT(2);pr(),rf("\xA0Value: ",n.inputValue()||""),pr(4),Jy("ngModel",e.inputConfig.label),oI(),pr(4),Jy("ngModel",e.inputConfig.matIconSubmit),oI();}}function Ei(i,m){if(i&1){let e=CT();io(0,"h3"),XT(1,"Header Input Field"),Ii$1(),io(2,"p")(3,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(4);return Hp(o.updateInputConfig("enable",t))}),XT(4," Enable "),Ii$1(),nI(),Ii$1(),lo(5,ki,10,3);}if(i&2){let e=TT(2);pr(3),Jy("ngModel",e.inputConfig.enable),oI(),pr(2),uo(e.inputConfig.enable?5:-1);}}function Ti(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{loading:t}))}),XT(2," Loading "),Ii$1(),nI(),Ii$1(),io(3,"p")(4,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{showRouteLoading:t}))}),XT(5," Show header loading on navigation "),Ii$1(),nI(),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{gradient:t}))}),XT(8," Gradient "),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field")(10,"mat-label"),XT(11,"Image Logo (url)"),Ii$1(),io(12,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return o.scaffoldService.updateScaffoldProperty("headerConfig",{imgLogo:t}),Hp(o.headerImgLogoChange(t))}),Ii$1(),nI(),Ii$1(),io(13,"mat-form-field")(14,"mat-label"),XT(15,"Titel"),Ii$1(),io(16,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{title:t}))}),Ii$1(),nI(),Ii$1(),io(17,"mat-form-field")(18,"mat-label"),XT(19,"Subtitel"),Ii$1(),io(20,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{subtitle:t}))}),Ii$1(),nI(),Ii$1(),io(21,"h3"),XT(22,"Header Menu Buttons"),Ii$1(),io(23,"mat-expansion-panel")(24,"mat-expansion-panel-header"),XT(25,"Edit Buttons"),Ii$1(),co(26,Mi,9,4,"ng-template",17),Ii$1(),lo(27,Ei,6,2);}if(i&2){let e=TT();pr(),Jy("ngModel",e.loading),oI(),pr(3),Jy("ngModel",e.showRouteLoading),oI(),pr(3),Jy("ngModel",e.gradient),oI(),pr(5),Jy("ngModel",e.imgLogo),oI(),pr(4),Jy("ngModel",e.title),oI(),pr(4),Jy("ngModel",e.subtitle),oI(),pr(7),uo(e.inputConfig?27:-1);}}function Oi(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Header"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("HeaderConfig","headerConfig.md"))}),XT(3," View HeaderConfig "),Ii$1(),io(4,"p"),XT(5," The header is a fixed responsive toolbar with a customizable logo, title, subtitle, menu-buttons and an input field. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("headerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Ti,28,7),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Di(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{showBackButton:t}))}),XT(2," Show back button "),Ii$1(),nI(),Ii$1(),io(3,"mat-form-field")(4,"mat-label"),XT(5,"Label"),Ii$1(),io(6,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:t}))}),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.showBackButton),oI(),pr(5),Jy("ngModel",e.label),oI();}}function Ii(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Title Card"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("ContentTitleCardConfig","contentTitleCardConfig.md"))}),XT(3," View ContentTitleCardConfig "),Ii$1(),io(4,"p"),XT(5," The title card is a card below the header that can display a custom label such as a page title and also has a back button. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Di,7,2),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Pi(i,m){if(i&1&&nv(0,18),i&2){let e=m.$implicit;TT(5);let n=AT(48);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,vi,e));}}function Vi(i,m){if(i&1){let e=CT();yT(0,Pi,1,4,"ng-container",18,gT),io(2,"button",4),Xa("click",function(){Vp(e);let t=TT(4);return Hp(t.addNavButton())}),XT(3,"Add button"),Ii$1();}if(i&2){let e=TT(2);vT(e.buttons);}}function Bi(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("navbarConfig",{showAllLabels:t}))}),XT(2," Always show labels "),Ii$1(),nI(),Ii$1(),io(3,"mat-expansion-panel")(4,"mat-expansion-panel-header"),XT(5,"Edit Nav Button"),Ii$1(),co(6,Vi,4,0,"ng-template",17),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.showAllLabels),oI();}}function Ai(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Navbar"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("NavbarConfig","navbarConfig.md"))}),XT(3," View NavbarConfig "),Ii$1(),io(4,"p"),XT(5," The navbar is a fixed navigation element that is positioned vertically left on desktop and responsively moves to the bottom horizontally on mobile. It can show up to 5 navigation items. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("navbarConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Bi,7,1),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Li(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{open:t}))}),XT(2," Open "),Ii$1(),nI(),Ii$1(),io(3,"p")(4,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{fixed:t}))}),XT(5," Fixed "),Ii$1(),nI(),Ii$1(),io(6,"p"),XT(7," Content can either be set by using content projection "),io(8,"code"),XT(9,"<ng-content drawerContent>"),Ii$1(),XT(10," or by using the component portal "),io(11,"code"),XT(12,"scaffoldService.drawerPortal"),Ii$1(),XT(13," . "),Ii$1(),io(14,"button",19),Xa("click",function(){Vp(e);let t=TT(3);return Hp(t.updateDrawerContent(true))}),XT(15," Navigation "),Ii$1(),io(16,"button",20),Xa("click",function(){Vp(e);let t=TT(3);return Hp(t.updateDrawerContent(false))}),XT(17," Not found "),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.open),oI(),pr(3),Jy("ngModel",e.fixed),oI();}}function Fi(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Drawer"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("DrawerConfig","drawerConfig.md"))}),XT(3," View DrawerConfig "),Ii$1(),io(4,"p"),XT(5," The drawer is a collapsible element that allows you to place custom dynamic side content. It is responsive and changes to overlay mode on mobile. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("drawerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Li,18,2),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Ri(i,m){if(i&1&&nv(0,18),i&2){let e=m.$implicit;TT(5);let n=AT(50);Jy("ngTemplateOutlet",n)("ngTemplateOutletContext",cS(2,xi,e));}}function Ni(i,m){if(i&1){let e=CT();yT(0,Ri,1,4,"ng-container",18,gT),io(2,"button",4),Xa("click",function(){Vp(e);let t=TT(4);return Hp(t.addFooterLink())}),XT(3,"Add link"),Ii$1();}if(i&2){let e=TT(2);vT(e.links);}}function zi(i,m){if(i&1){let e=CT();io(0,"mat-form-field")(1,"mat-label"),XT(2,"Image Logo (url)"),Ii$1(),io(3,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return o.scaffoldService.updateScaffoldProperty("footerConfig",{imgLogo:t}),Hp(o.footerImgLogoChange(t))}),Ii$1(),nI(),Ii$1(),io(4,"mat-form-field")(5,"mat-label"),XT(6,"Copyright"),Ii$1(),io(7,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("footerConfig",{copyright:t}))}),Ii$1(),nI(),Ii$1(),io(8,"h3"),XT(9,"Footer Links"),Ii$1(),io(10,"mat-expansion-panel")(11,"mat-expansion-panel-header"),XT(12," Edit Links (Route has priority over link) "),Ii$1(),co(13,Ni,4,0,"ng-template",17),Ii$1();}if(i&2){let e=TT();pr(3),Jy("ngModel",e.imgLogo),oI(),pr(4),Jy("ngModel",e.copyright),oI();}}function Hi(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Footer"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("FooterConfig","footerConfig.md"))}),XT(3," View FooterConfig "),Ii$1(),io(4,"p"),XT(5,"The footer is a simple bottom element with a logo, navigation links and the copyright."),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("footerConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,zi,14,2),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function ji(i,m){if(i&1&&(io(0,"mat-icon",22),XT(1),Ii$1()),i&2){let e=TT(2);pr(),rf(" ",e.matIcon," ");}}function qi(i,m){if(i&1&&(io(0,"mat-option",23),XT(1),Ii$1()),i&2){let e=m.$implicit;Jy("value",e),pr(),rf(" ",e," ");}}function Wi(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{sticky:t}))}),XT(2," Sticky "),Ii$1(),nI(),Ii$1(),io(3,"mat-form-field")(4,"mat-label"),XT(5,"Event id"),Ii$1(),io(6,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{id:t}))}),Ii$1(),nI(),Ii$1(),io(7,"mat-form-field")(8,"mat-label"),XT(9,"Label"),Ii$1(),io(10,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{label:t}))}),Ii$1(),nI(),Ii$1(),io(11,"mat-form-field",21)(12,"mat-label"),XT(13,"Material Icon"),Ii$1(),io(14,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{matIcon:t}))}),Ii$1(),nI(),lo(15,ji,2,1,"mat-icon",22),Ii$1(),io(16,"mat-form-field")(17,"mat-label"),XT(18,"Tooltip"),Ii$1(),io(19,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{tooltip:t}))}),Ii$1(),nI(),Ii$1(),io(20,"mat-form-field")(21,"mat-label"),XT(22,"Position"),Ii$1(),io(23,"mat-select",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(3);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{horizontalPosition:t}))}),yT(24,qi,2,2,"mat-option",23,gT),Ii$1(),nI(),Ii$1();}if(i&2){let e=TT();pr(),Jy("ngModel",e.sticky),oI(),pr(5),Jy("ngModel",e.id),oI(),pr(4),Jy("ngModel",e.label),oI(),pr(4),Jy("ngModel",e.matIcon),oI(),pr(),uo(e.matIcon?15:-1),pr(4),Jy("ngModel",e.tooltip),oI(),pr(4),Jy("ngModel",e.horizontalPosition),oI(),pr(),vT(aS(7,yi));}}function Ki(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Floating Button"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("FloatingButtonConfig","floatingButtonConfig.md"))}),XT(3," View FloatingButtonConfig "),Ii$1(),io(4,"p"),XT(5," The floating button is a fixed action button that scrolls to the top on default, but you can also add an id for custom actions. By adding a label, the button will expand into a rounded rectangle shape. "),Ii$1(),io(6,"p")(7,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT(2);return Hp(o.scaffoldService.updateScaffoldProperty("floatingButtonConfig",{enable:t}))}),XT(8," Enable "),Ii$1(),nI(),Ii$1(),lo(9,Wi,26,8),ev(10,"mat-divider");}if(i&2){let e=m;pr(7),Jy("ngModel",e.enable),oI(),pr(2),uo(e.enable?9:-1);}}function Gi(i,m){if(i&1){let e=CT();io(0,"p")(1,"mat-checkbox",15),vv("ngModelChange",function(t){let o=Vp(e).$implicit;return tS(o.checked,t)||(o.checked=t),Hp(t)}),Xa("ngModelChange",function(){Vp(e);let t=TT(3);return Hp(t.selectBottomBarItem())}),XT(2),Ii$1(),nI(),Ii$1();}if(i&2){let e=m.$implicit;pr(),yv("ngModel",e.checked),oI(),pr(),rf(" ",e.label," ");}}function Qi(i,m){if(i&1){let e=CT();io(0,"h2",24),XT(1,"Bottom Bar"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT(2);return Hp(t.openMarkdownDialog("BottomBarConfig","bottomBarConfig.md"))}),XT(3," View BottomBarConfig "),Ii$1(),io(4,"p"),XT(5," The bottom bar is a fixed element at the bottom of the page and above the mobile navbar (if enabled). It can be used to handle custom bulk actions for selected items in large lists. "),Ii$1(),io(6,"p"),XT(7,"(select items to test the bottom bar)"),Ii$1(),yT(8,Gi,3,2,"p",null,gT);}if(i&2){let e=TT(2);pr(8),vT(e.bottomBarDemoList());}}function Ui(i,m){if(i&1){let e=CT();io(0,"h2"),XT(1,"Scaffold"),Ii$1(),io(2,"span",14),Xa("click",function(){Vp(e);let t=TT();return Hp(t.openMarkdownDialog("ScaffoldConfig","scaffoldConfig.md"))}),XT(3," View ScaffoldConfig "),Ii$1(),io(4,"p"),XT(5," The "),io(6,"code"),XT(7,"<lf-scaffold>"),Ii$1(),XT(8," component is the global wrapper element that contains all UI elements and displays them based on the provided "),io(9,"code"),XT(10,"ScaffoldConfig"),Ii$1(),XT(11," . "),Ii$1(),io(12,"p")(13,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT();return Hp(o.scaffoldService.updateScaffoldProperty("scrollPositionRestoration",t))}),XT(14," Reset scroll position after navigation "),Ii$1(),nI(),Ii$1(),lo(15,wi,3,1,"p"),ev(16,"mat-divider"),lo(17,Oi,11,2),lo(18,Ii,11,2),lo(19,Ai,11,2),lo(20,Fi,11,2),lo(21,Hi,11,2),lo(22,Ki,11,2),lo(23,Qi,10,0);}if(i&2){let e,n,t,o,g,w,S,V,z=TT();pr(13),Jy("ngModel",m.scrollPositionRestoration),oI(),pr(2),uo((e=z.loadingOverlayConfig())?15:-1,e),pr(2),uo((n=z.headerConfig())?17:-1,n),pr(),uo((t=z.contentTitleCardConfig())?18:-1,t),pr(),uo((o=z.navbarConfig())?19:-1,o),pr(),uo((g=z.drawerConfig())?20:-1,g),pr(),uo((w=z.footerConfig())?21:-1,w),pr(),uo((S=z.floatingButtonConfig())?22:-1,S),pr(),uo((V=z.bottomBarConfig())?23:-1,V);}}function Xi(i,m){if(i&1&&(io(0,"mat-icon",22),XT(1),Ii$1()),i&2){let e=TT(2).menuButton;pr(),gv(e.matIcon);}}function Yi(i,m){if(i&1){let e=CT();io(0,"div",25)(1,"mat-form-field")(2,"mat-label"),XT(3,"Event id"),Ii$1(),io(4,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(),g=o.menuButton,w=o.isLeftButton,S=o.isNavButton,V=TT();return Hp(V.updateHeaderButton(g,w,S,"id",t))}),Ii$1(),nI(),Ii$1(),io(5,"mat-form-field")(6,"mat-label"),XT(7,"Label"),Ii$1(),io(8,"input",26),Xa("ngModelChange",function(t){Vp(e);let o=TT(),g=o.menuButton,w=o.isLeftButton,S=o.isNavButton,V=TT();return Hp(V.updateHeaderButton(g,w,S,"label",t))}),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field",21)(10,"mat-label"),XT(11,"Material Icon"),Ii$1(),io(12,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(),g=o.menuButton,w=o.isLeftButton,S=o.isNavButton,V=TT();return Hp(V.updateHeaderButton(g,w,S,"matIcon",t))}),Ii$1(),nI(),lo(13,Xi,2,1,"mat-icon",22),Ii$1(),io(14,"mat-form-field")(15,"mat-label"),XT(16,"Tooltop"),Ii$1(),io(17,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT(),g=o.menuButton,w=o.isLeftButton,S=o.isNavButton,V=TT();return Hp(V.updateHeaderButton(g,w,S,"tooltip",t))}),Ii$1(),nI(),Ii$1(),io(18,"button",27),Xa("click",function(){Vp(e);let t=TT(),o=t.menuButton,g=t.isLeftButton,w=t.isNavButton,S=TT();return Hp(S.removeHeaderButton(o,g,w))}),io(19,"mat-icon"),XT(20,"delete"),Ii$1()()();}if(i&2){let e=TT(),n=e.menuButton,t=e.isLeftButton;pr(4),Jy("ngModel",n.id),oI(),pr(4),Jy("disabled",t)("ngModel",n.label),oI(),pr(4),Jy("ngModel",n.matIcon),oI(),pr(),uo(n.matIcon?13:-1),pr(4),Jy("ngModel",n.tooltip),oI();}}function $i(i,m){if(i&1&&lo(0,Yi,21,6,"div",25),i&2){let e=m.menuButton;uo(e?0:-1);}}function Zi(i,m){if(i&1){let e=CT();io(0,"div",25)(1,"mat-form-field")(2,"mat-label"),XT(3,"Label"),Ii$1(),io(4,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,g=TT();return Hp(g.updateFooterLink(o,"label",t))}),Ii$1(),nI(),Ii$1(),io(5,"mat-form-field")(6,"mat-label"),XT(7,"Route (internal)"),Ii$1(),io(8,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,g=TT();return Hp(g.updateFooterLink(o,"routerLink",t))}),Ii$1(),nI(),Ii$1(),io(9,"mat-form-field")(10,"mat-label"),XT(11,"Link (external)"),Ii$1(),io(12,"input",16),Xa("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,g=TT();return Hp(g.updateFooterLink(o,"href",t))}),Ii$1(),nI(),Ii$1(),io(13,"mat-slide-toggle",15),Xa("ngModelChange",function(t){Vp(e);let o=TT().navigationLink,g=TT();return Hp(g.updateFooterLink(o,"externalTab",t))}),XT(14," External Tab "),Ii$1(),nI(),io(15,"button",28),Xa("click",function(){Vp(e);let t=TT().navigationLink,o=TT();return Hp(o.removeFooterLink(t))}),io(16,"mat-icon"),XT(17,"delete"),Ii$1()()();}if(i&2){let e=TT().navigationLink;pr(4),Jy("ngModel",e.label),oI(),pr(4),Jy("ngModel",e.routerLink),oI(),pr(4),Jy("ngModel",e.href),oI(),pr(),Jy("ngModel",e.externalTab),oI();}}function Ji(i,m){if(i&1&&lo(0,Zi,18,4,"div",25),i&2){let e=m.navigationLink;uo(e?0:-1);}}var Bn=(()=>{class i{constructor(){this.scaffoldService=f(xs),this.themeService=f(Q1),this.dialogService=f(G1),this.logger=f(Cn),this.scaffoldConfig=Ht(this.scaffoldService.scaffoldConfig$,{initialValue:null}),this.loadingOverlayConfig=_S(()=>this.scaffoldConfig()?.loadingOverlayConfig||{}),this.headerConfig=_S(()=>this.scaffoldConfig()?.headerConfig||{}),this.navbarConfig=_S(()=>this.scaffoldConfig()?.navbarConfig||{}),this.drawerConfig=_S(()=>this.scaffoldConfig()?.drawerConfig||{}),this.footerConfig=_S(()=>this.scaffoldConfig()?.footerConfig||{}),this.contentTitleCardConfig=_S(()=>this.scaffoldConfig()?.contentTitleCardConfig||{}),this.floatingButtonConfig=_S(()=>this.scaffoldConfig()?.floatingButtonConfig||{}),this.bottomBarConfig=_S(()=>this.scaffoldConfig()?.bottomBarConfig||{}),this.bottomBarDemoList=ze([{checked:false,label:"Demo item 1"},{checked:false,label:"Demo item 2"},{checked:false,label:"Demo item 3"}]),this.theme=Ht(this.themeService.currentTheme$),this.inputValue=Ht(this.scaffoldService.headerInputChangeValue$),this.scaffoldService.scaffoldConfig$.pipe(Ee(1),cd()).subscribe(e=>{e&&this.scaffoldService.updateScaffoldProperty("contentTitleCardConfig",{label:"Demo"});}),this.scaffoldService.buttonClickEventValue$.pipe(cd()).subscribe(e=>{e==="bottom-bar_submit"?this.bottomBarButtonClicked():e==="bottom-bar_close"&&this.bottomBarCloseClicked();});}copyConfig(){let e=(t,o)=>{if(!(o===""||o===null||o===void 0||o===false)&&!(o&&typeof o=="object"&&"enable"in o&&o.enable===false)&&!(o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).length===0))return o},n="public scaffoldConfig: ScaffoldConfig = "+JSON.stringify(this.scaffoldConfig(),e,2).replace(/"([^"]+)":/g,"$1:").replace(/"/g,"'");this.openMarkdownDialog("Copy current config","",n,true);}openMarkdownDialog(e,n,t,o=false){this.dialogService.openCustomDialog(Vn,{autoFocus:false,data:{title:e,src:n?`assets/md/${n}`:"",data:t,showCopy:o},maxWidth:"1000px"});}showContainerLoading(){this.scaffoldService.updateScaffoldProperty("loading",true),setTimeout(()=>{this.scaffoldService.updateScaffoldProperty("loading",false);},2e3);}updateInputConfig(e,n){this.scaffoldService.updateScaffoldProperty("headerConfig",{inputConfig:K(D({},this.headerConfig()?.inputConfig),{[e]:n})});}headerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("headerConfig",{svgLogo:"logo"});}footerImgLogoChange(e){e?this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:""}):this.scaffoldService.updateScaffoldProperty("footerConfig",{svgLogo:"logo"});}setTheme(e){this.themeService.setTheme(e,true);}addHeaderButton(e){e?e&&!this.headerConfig()?.leftMenuButton&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:{id:""}}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:[...this.headerConfig().rightMenuButtons||[],{id:""}]});}removeHeaderButton(e,n,t){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig().buttons?.filter(o=>o!==e)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:void 0}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig().rightMenuButtons?.filter(o=>o!==e)});}updateHeaderButton(e,n,t,o,g){t?this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:this.navbarConfig()?.buttons?.map(w=>w===e?K(D({},w),{[o]:g}):w)}):n?n&&this.headerConfig()?.leftMenuButton===e&&this.scaffoldService.updateScaffoldProperty("headerConfig",{leftMenuButton:K(D({},this.headerConfig().leftMenuButton),{[o]:g})}):this.scaffoldService.updateScaffoldProperty("headerConfig",{rightMenuButtons:this.headerConfig()?.rightMenuButtons?.map(w=>w===e?K(D({},w),{[o]:g}):w)});}addNavButton(){this.scaffoldService.updateScaffoldProperty("navbarConfig",{buttons:[...this.navbarConfig().buttons||[],{id:""}]});}addFooterLink(){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:[...this.footerConfig().links||[],{}]});}removeFooterLink(e){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig().links?.filter(n=>n!==e)});}updateFooterLink(e,n,t){this.scaffoldService.updateScaffoldProperty("footerConfig",{links:this.footerConfig()?.links?.map(o=>o===e?K(D({},o),{[n]:t}):o)});}updateDrawerContent(e){this.scaffoldService.drawerPortal=e?null:F;}async bottomBarButtonClicked(){let e=this.bottomBarDemoList().filter(t=>t.checked).length,n=await this.dialogService.openConfirmDialog({title:"Selection:",message:`You have selected ${e} items`,closeLabel:"Close",confirmLabel:"Confirm"});this.logger.log("close result: ",n);}bottomBarCloseClicked(){this.bottomBarDemoList.update(e=>e.map(n=>K(D({},n),{checked:false}))),this.updateBottomBar();}selectBottomBarItem(){this.updateBottomBar();}updateBottomBar(){let e=this.bottomBarDemoList().filter(n=>n.checked).length;e>0?this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:true,message:`${e} selected`,buttons:[{id:"bottom-bar_submit",label:"Submit"}]}):this.scaffoldService.updateScaffoldProperty("bottomBarConfig",{enable:false});}static{this.\u0275fac=function(n){return new(n||i)};}static{this.\u0275cmp=pe({type:i,selectors:[["app-start"]],decls:51,vars:3,consts:[["menuButtonFormTemplate",""],["navigationLinkTemplate",""],[1,"lf-startpage"],[1,"lf-link",3,"routerLink"],["mat-flat-button","","color","accent",3,"click"],[1,"theme-selector"],[1,"theme-button","light",3,"click"],[1,"preview"],[1,"header","pink"],[1,"body"],[1,"accent","blue"],[1,"theme-button","dark",3,"click"],[1,"header","blue"],[1,"accent","pink"],[1,"link",3,"click"],[3,"ngModelChange","ngModel"],["matInput","",3,"ngModelChange","ngModel"],["matExpansionPanelContent",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","primary",3,"click"],[1,"lf-form-field-small"],["matPrefix",""],[3,"value"],["id","test"],[1,"flex-row","mb-2"],["matInput","",3,"ngModelChange","disabled","ngModel"],["mat-icon-button","","color","warn","matTooltip","Remove button",3,"click"],["mat-icon-button","","color","warn","matTooltip","Remove link",3,"click"]],template:function(n,t){if(n&1&&(io(0,"div",2)(1,"h1"),XT(2,"Demo"),Ii$1(),io(3,"p"),XT(4," This is a simple demo page for the Angular Scaffold library "),io(5,"code"),XT(6,"@lukfel/ng-scaffold."),Ii$1(),ev(7,"br"),XT(8," Play around with the individual UI elements and copy the configuration to your Angular application. For more technical information see the "),io(9,"a",3),XT(10,"Documentation"),Ii$1(),XT(11," . "),Ii$1(),io(12,"button",4),Xa("click",function(){return t.copyConfig()}),io(13,"mat-icon"),XT(14,"content_copy"),Ii$1(),XT(15," Copy current config "),Ii$1(),ev(16,"mat-divider"),io(17,"h2"),XT(18,"Themes"),Ii$1(),io(19,"p"),XT(20," Define multiple themes and change them dynamically by using the library's "),io(21,"code"),XT(22,"ThemeService"),Ii$1(),XT(23," or manually setting the corresponding css class of the theme. "),Ii$1(),io(24,"div",5)(25,"div",6),Xa("click",function(){return t.setTheme("")}),io(26,"div",7),ev(27,"div",8),io(28,"div",9),ev(29,"div",10),Ii$1()()(),io(30,"div",11),Xa("click",function(){return t.setTheme("theme2")}),io(31,"div",7),ev(32,"div",8),io(33,"div",9),ev(34,"div",10),Ii$1()()(),io(35,"div",6),Xa("click",function(){return t.setTheme("theme3")}),io(36,"div",7),ev(37,"div",12),io(38,"div",9),ev(39,"div",13),Ii$1()()(),io(40,"div",11),Xa("click",function(){return t.setTheme("theme4")}),io(41,"div",7),ev(42,"div",12),io(43,"div",9),ev(44,"div",13),Ii$1()()()(),ev(45,"mat-divider"),lo(46,Ui,24,9),Ii$1(),co(47,$i,1,1,"ng-template",null,0,mS)(49,Ji,1,1,"ng-template",null,1,mS)),n&2){let o;pr(9),Jy("routerLink",aS(2,fi)),pr(37),uo((o=t.scaffoldConfig())?46:-1,o);}},dependencies:[br,bn$1,ki$1,xi$1,qo,wi$1,kn,Xe,Mn,Ue,Hi$1,yr,ji$1,za,Id,Ed,Dn,On,Ad,W5,$5,e0,Rd,Ga,In,$e,Ke,Ye$1,kl,wl,sM],styles:[".lf-startpage[_ngcontent-%COMP%]{max-width:960px;margin:auto}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%], .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{cursor:pointer;color:var(--color-primary);text-decoration:unset}.lf-startpage[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]:hover, .lf-startpage[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin:64px 0}.lf-startpage[_ngcontent-%COMP%]   .theme-selector[_ngcontent-%COMP%]{display:flex;gap:24px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]{width:48px;height:40px;border-radius:8px;overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px #0000001a;transition:all .2s;cursor:pointer}.lf-startpage[_ngcontent-%COMP%]   .theme-button.light[_ngcontent-%COMP%]{background-color:#fdfdfd}.lf-startpage[_ngcontent-%COMP%]   .theme-button.dark[_ngcontent-%COMP%]{background-color:#1e1e1e}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;overflow:hidden}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;height:8px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{width:16px;height:8px;border-radius:4px}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .pink[_ngcontent-%COMP%]{background-color:#e91e63}.lf-startpage[_ngcontent-%COMP%]   .theme-button[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%]{background-color:#2196f3}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin:0 8px 8px 0}.lf-startpage[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.lf-startpage[_ngcontent-%COMP%]   .lf-form-field-small[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{width:112px!important}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]{text-decoration:unset;color:var(--color-primary)}.lf-startpage[_ngcontent-%COMP%]   .lf-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.lf-startpage[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{display:flex!important;flex-flow:row wrap;align-items:center}"]});}}return i})();var ur=[{path:"",component:Bn}];export{ur as START_ROUTES};