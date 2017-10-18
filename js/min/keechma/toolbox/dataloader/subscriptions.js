// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.dataloader.subscriptions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('keechma.toolbox.dataloader.core');
keechma.toolbox.dataloader.subscriptions.map_loader = (function keechma$toolbox$dataloader$subscriptions$map_loader(loader){
return (function (reqs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(loader,reqs);
});
});
/**
 * Returns a map with subscriptions based on the datasources
 */
keechma.toolbox.dataloader.subscriptions.make_subscriptions = (function keechma$toolbox$dataloader$subscriptions$make_subscriptions(datasources,edb_schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24512){
var vec__24513 = p__24512;
var datasource_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24513,(0),null);
var datasource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24513,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(datasource_key)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-meta")].join('')),((function (vec__24513,datasource_key,datasource){
return (function (app_db_atom){
return reagent.ratom.make_reaction(((function (vec__24513,datasource_key,datasource){
return (function (){
var app_db = cljs.core.deref(app_db_atom);
return keechma.toolbox.dataloader.core.get_meta(app_db,datasource_key);
});})(vec__24513,datasource_key,datasource))
);
});})(vec__24513,datasource_key,datasource))
),datasource_key,((function (vec__24513,datasource_key,datasource){
return (function (app_db_atom){
return reagent.ratom.make_reaction(((function (vec__24513,datasource_key,datasource){
return (function (){
var app_db = cljs.core.deref(app_db_atom);
return keechma.toolbox.dataloader.core.get_data(app_db,edb_schema,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(datasource));
});})(vec__24513,datasource_key,datasource))
);
});})(vec__24513,datasource_key,datasource))
);
}),cljs.core.PersistentArrayMap.EMPTY,datasources);
});
