class h{constructor(t){this.columnConfig=t,this._field=t?.field,this._title=t?.title,this._visible=t.visible??!0,this._width=t?.width,this._sort=t.sort??"none",this._searchable=t.searchable??!0,this._filter={type:t?.filter?.type??"string",value:t?.filter?.value??"",min:t?.filter?.min??null,max:t?.filter?.max??null,static:t?.filter?.static??!1},this._template=t.template??""}get field(){return this._field}get title(){return this._title}set title(t){this._title=t}get visible(){return this._visible}set visible(t){this._visible=t}get width(){return this._width}set width(t){this._width=t}get sort(){return this._sort}set sort(t){this._sort=t}get searchable(){return this._searchable}set searchable(t){this._searchable=t}get filter(){return this._filter}set filter(t){this._filter=t}set template(t){this._template=t}get template(){return this._template}}class a{constructor(t){this.state=t??{},this._title=t?.title??"",this._showFilter=t?.showFilter??!0,this._filterByExtent=t?.filterByExtent??!1,this._columns={},this._open=!0,this._filtered=!0,this._search=t?.search??!0,this._searchFilter=t?.searchFilter??"",this._applyToMap=t?.applyToMap??!1,this._controls=t?.controls??["zoom","details"],this.parsecolumns()}parsecolumns(){this.state.columns&&this.state.columns.forEach(t=>{this._columns[t.field]=new h(t)})}getColumnFilterValue(t,e){const s=this._columns[t].filter;return e==="min"?s.min:e==="max"?s.max:s.value}setColumnFilterValue(t,e,s){let i=e;if(e&&typeof e=="string"){const l=/[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;i=e.replace(l,"\\$&")}s==="min"?this._columns[t].filter.min=i:s==="max"?this._columns[t].filter.max=i:this._columns[t].filter.value=i,this._columns[t].filter.value!==""?this._filtered=!0:this._checkFilters()}clearFilters(){Object.entries(this._columns).forEach(([,t])=>{t.filter.static||(t.filter.min=null,t.filter.max=null,t.filter.value="")}),this._filterByExtent=!1,this._filtered=!1,this._searchFilter=""}_checkFilters(){this._filtered=Object.values(this._columns).some(t=>t.filter.value!==""||t.filter.min||t.filter.max)}get filtered(){return this._filtered}get title(){return this._title}set title(t){this._title=t}get colFilter(){return this._showFilter}set colFilter(t){this._showFilter=t}get filterByExtent(){return this._filterByExtent}set filterByExtent(t){this._filterByExtent=t}get open(){return this._open}set open(t){this._open=t}get search(){return this._search}set search(t){this._search=t}get searchFilter(){return this._searchFilter}set searchFilter(t){this._searchFilter=t}get applyToMap(){return this._applyToMap}set applyToMap(t){this._applyToMap=t}get columns(){return this._columns}set columns(t){this._columns=t}get controls(){return this._controls}}export{h as C,a as T};