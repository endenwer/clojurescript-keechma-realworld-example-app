// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('keechma.toolbox.forms.helpers');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.forms.core');
goog.require('reagent.ratom');
goog.require('forms.util');
goog.require('forms.core');
keechma.toolbox.forms.helpers.form_state = (function keechma$toolbox$forms$helpers$form_state(ctx,form_props){
return keechma.ui_component.subscription.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$form_DASH_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props], null));
});
keechma.toolbox.forms.helpers.form_state_sub = (function keechma$toolbox$forms$helpers$form_state_sub(app_db,form_props){
return reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db) : cljs.core.deref.call(null,app_db)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,keechma.toolbox.forms.core.id_key,cljs.core.cst$kw$states,form_props], null));
}));
});
keechma.toolbox.forms.helpers.attr_assoc_in = (function keechma$toolbox$forms$helpers$attr_assoc_in(form_state,path,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.cst$kw$data,cljs.core.assoc_in(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state),forms.util.key_to_path(path),value));
});
keechma.toolbox.forms.helpers.attr_get_in = (function keechma$toolbox$forms$helpers$attr_get_in(form_state,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(form_state),forms.util.key_to_path(path));
});
keechma.toolbox.forms.helpers.attr_errors = (function keechma$toolbox$forms$helpers$attr_errors(form_state,path){
var path__$1 = forms.util.key_to_path(path);
var is_dirty_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$dirty_DASH_paths.cljs$core$IFn$_invoke$arity$1(form_state),path__$1);
if(is_dirty_QMARK_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(form_state),path__$1);
} else {
return null;
}
});
keechma.toolbox.forms.helpers.attr_valid_QMARK_ = (function keechma$toolbox$forms$helpers$attr_valid_QMARK_(form_state,path){
return (keechma.toolbox.forms.helpers.attr_errors(form_state,path) == null);
});
keechma.toolbox.forms.helpers.form_errors = (function keechma$toolbox$forms$helpers$form_errors(form_state){
return cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(form_state);
});
keechma.toolbox.forms.helpers.form_valid_QMARK_ = (function keechma$toolbox$forms$helpers$form_valid_QMARK_(form_state){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(form_state));
});
keechma.toolbox.forms.helpers.form_invalid_QMARK_ = (function keechma$toolbox$forms$helpers$form_invalid_QMARK_(form_state){
return cljs.core.not(keechma.toolbox.forms.helpers.form_valid_QMARK_(form_state));
});
keechma.toolbox.forms.helpers.form_submit_attempted_QMARK_ = (function keechma$toolbox$forms$helpers$form_submit_attempted_QMARK_(form_state){
return cljs.core.cst$kw$submit_DASH_attempted_QMARK_.cljs$core$IFn$_invoke$arity$1(form_state);
});
keechma.toolbox.forms.helpers.mark_dirty_paths = (function keechma$toolbox$forms$helpers$mark_dirty_paths(var_args){
var args22223 = [];
var len__11171__auto___22226 = arguments.length;
var i__11172__auto___22227 = (0);
while(true){
if((i__11172__auto___22227 < len__11171__auto___22226)){
args22223.push((arguments[i__11172__auto___22227]));

var G__22228 = (i__11172__auto___22227 + (1));
i__11172__auto___22227 = G__22228;
continue;
} else {
}
break;
}

var G__22225 = args22223.length;
switch (G__22225) {
case 2:
return keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22223.length)].join('')));

}
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$2 = (function (form_state,dirty_paths){
return keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$3(form_state,dirty_paths,false);
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$3 = (function (form_state,dirty_paths,cache_QMARK_){
var cached_dirty_paths = cljs.core.cst$kw$cached_DASH_dirty_DASH_key_DASH_paths.cljs$core$IFn$_invoke$arity$1(form_state);
var new_dirty_paths = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(dirty_paths,cached_dirty_paths));
var new_cached_dirty_paths = (cljs.core.truth_(cache_QMARK_)?new_dirty_paths:cached_dirty_paths);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$dirty_DASH_paths,new_dirty_paths,cljs.core.cst$kw$cached_DASH_dirty_DASH_paths,cljs.core.array_seq([new_cached_dirty_paths], 0));
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.helpers.errors__GT_paths = (function keechma$toolbox$forms$helpers$errors__GT_paths(errors){
return cljs.core.set(forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1(errors));
});
keechma.toolbox.forms.helpers.make_component_helpers = (function keechma$toolbox$forms$helpers$make_component_helpers(ctx,form_props){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$on_DASH_change,(function (path){
var path__$1 = forms.util.key_to_path(path);
return ((function (path__$1){
return (function (e){
var el = e.target;
var value = el.value;
var caret_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",el.type))?el.selectionStart:null);
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$on_DASH_change,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1,el,value,caret_pos], null));
});
;})(path__$1))
}),cljs.core.cst$kw$on_DASH_blur,(function (path){
var path__$1 = forms.util.key_to_path(path);
return ((function (path__$1){
return (function (e){
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$on_DASH_blur,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1], null));
});
;})(path__$1))
}),cljs.core.cst$kw$validate,(function() { 
var G__22230__delegate = function (args){
var dirty_only_QMARK_ = (function (){var or__9992__auto__ = cljs.core.first(args);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return false;
}
})();
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$on_DASH_validate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,dirty_only_QMARK_], null));
};
var G__22230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22231__i = 0, G__22231__a = new Array(arguments.length -  0);
while (G__22231__i < G__22231__a.length) {G__22231__a[G__22231__i] = arguments[G__22231__i + 0]; ++G__22231__i;}
  args = new cljs.core.IndexedSeq(G__22231__a,0);
} 
return G__22230__delegate.call(this,args);};
G__22230.cljs$lang$maxFixedArity = 0;
G__22230.cljs$lang$applyTo = (function (arglist__22232){
var args = cljs.core.seq(arglist__22232);
return G__22230__delegate(args);
});
G__22230.cljs$core$IFn$_invoke$arity$variadic = G__22230__delegate;
return G__22230;
})()
,cljs.core.cst$kw$set_DASH_value,(function (path,value){
var path__$1 = forms.util.key_to_path(path);
return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$on_DASH_change,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1,null,value,null], null));
}),cljs.core.cst$kw$submit,(function (e){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

return keechma.ui_component.send_command.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$on_DASH_submit,form_props);
})], null);
});
