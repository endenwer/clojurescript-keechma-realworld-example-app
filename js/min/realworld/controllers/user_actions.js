// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('realworld.controllers.user_actions');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('realworld.edb');
goog.require('promesa.core');
goog.require('realworld.api');
realworld.controllers.user_actions.toggle_favorite = (function realworld$controllers$user_actions$toggle_favorite(article,app_db){
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
if(cljs.core.truth_(jwt)){
if(cljs.core.truth_(cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(article))){
return realworld.api.favorite_delete(jwt,slug);
} else {
return realworld.api.favorite_create(jwt,slug);
}
} else {
return null;
}
});
realworld.controllers.user_actions.toggle_follow = (function realworld$controllers$user_actions$toggle_follow(user,app_db){
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
var username = cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user);
if(cljs.core.truth_(jwt)){
if(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(user))){
return realworld.api.follow_delete(jwt,username);
} else {
return realworld.api.follow_create(jwt,username);
}
} else {
return null;
}
});
realworld.controllers.user_actions.current_user_article_author_QMARK_ = (function realworld$controllers$user_actions$current_user_article_author_QMARK_(article,app_db){
var author = cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(article).call(null);
var current_user = realworld.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.array_seq([cljs.core.cst$kw$user,cljs.core.cst$kw$current], 0));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,current_user);
});
realworld.controllers.user_actions.delete_article = (function realworld$controllers$user_actions$delete_article(article,app_db){
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
var jwt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$kv,cljs.core.cst$kw$jwt], null));
return promesa.core.map(((function (slug,jwt){
return (function (_){
return article;
});})(slug,jwt))
,realworld.api.article_delete(jwt,slug));
});
realworld.controllers.user_actions.controller = keechma.toolbox.pipeline.controller.constructor$((function (_){
return true;
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$toggle_DASH_favorite,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return realworld.controllers.user_actions.toggle_favorite(value,app_db);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.array_seq([cljs.core.cst$kw$article,value], 0)));
})], null)], null)),cljs.core.cst$kw$toggle_DASH_follow,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
return realworld.controllers.user_actions.toggle_follow(value,app_db);
}),(function (value,app_db){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic(app_db,cljs.core.array_seq([cljs.core.cst$kw$user,value], 0)));
})], null)], null)),cljs.core.cst$kw$delete,keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db){
if(cljs.core.truth_(realworld.controllers.user_actions.current_user_article_author_QMARK_(value,app_db))){
return keechma.toolbox.pipeline.core.make_pipeline(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$begin,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value__$1,app_db__$1){
return realworld.controllers.user_actions.delete_article(value__$1,app_db__$1);
}),(function (value__$1,app_db__$1){
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1(realworld.edb.remove_item.cljs$core$IFn$_invoke$arity$variadic(app_db__$1,cljs.core.array_seq([cljs.core.cst$kw$article,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(value__$1)], 0)));
}),(function (value__$1,app_db__$1){
return keechma.toolbox.pipeline.core.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,"home"], null));
})], null)], null));
} else {
return null;
}
})], null)], null))], null));
