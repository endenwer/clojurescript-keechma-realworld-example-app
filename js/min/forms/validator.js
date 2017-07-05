// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('forms.validator');
goog.require('cljs.core');
goog.require('forms.util');
cljs.core.enable_console_print_BANG_();
forms.validator.get_by_key = (function forms$validator$get_by_key(key,next,parent_data,parent_errors,full_data,prev_path){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_data,key);
var errors = (function (){var or__9992__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_errors,key);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var res = (function (){var G__21621 = data;
var G__21622 = errors;
var G__21623 = full_data;
var G__21624 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_path,key);
return (next.cljs$core$IFn$_invoke$arity$4 ? next.cljs$core$IFn$_invoke$arity$4(G__21621,G__21622,G__21623,G__21624) : next.call(null,G__21621,G__21622,G__21623,G__21624));
})();
if(!(((res == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,res)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent_errors,key,res);
} else {
return parent_errors;
}
});
forms.validator.get_list = (function forms$validator$get_list(next,parent_data,parent_errors,full_data,prev_path){
var data = cljs.core.reduce_kv((function (m,k,v){
var errors = (function (){var or__9992__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var res = (function (){var G__21629 = v;
var G__21630 = errors;
var G__21631 = full_data;
var G__21632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_path,k);
return (next.cljs$core$IFn$_invoke$arity$4 ? next.cljs$core$IFn$_invoke$arity$4(G__21629,G__21630,G__21631,G__21632) : next.call(null,G__21629,G__21630,G__21631,G__21632));
})();
if(!(((res == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,res)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
return m;
}
}),parent_errors,parent_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY)){
return null;
} else {
return data;
}
});
forms.validator.validate_attr = (function forms$validator$validate_attr(validators,value,full_data,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (failed,v){
var vec__21636 = v;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(0),null);
var validator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(1),null);
if(cljs.core.not((validator.cljs$core$IFn$_invoke$arity$3 ? validator.cljs$core$IFn$_invoke$arity$3(value,full_data,path) : validator.call(null,value,full_data,path)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(failed,name);
} else {
return failed;
}
}),cljs.core.PersistentVector.EMPTY,validators);
});
forms.validator.validate_with_nested_validators = (function forms$validator$validate_with_nested_validators(nested_validators,value,errors,full_data,path){
if(!(cljs.core.empty_QMARK_(nested_validators))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return (v.cljs$core$IFn$_invoke$arity$4 ? v.cljs$core$IFn$_invoke$arity$4(value,acc,full_data,path) : v.call(null,value,acc,full_data,path));
}),errors,nested_validators);
} else {
return errors;
}
});
forms.validator.attr_errors = (function forms$validator$attr_errors(validators,value,errors,full_data,path){
var nested_validators = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.fn_QMARK_,validators));
var normal_validators = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.fn_QMARK_),validators));
var with_nested_errors = forms.validator.validate_with_nested_validators(nested_validators,value,errors,full_data,path);
var failed = forms.validator.validate_attr(normal_validators,value,full_data,path);
if((cljs.core.count(failed) > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$$errors$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$failed,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__9992__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(with_nested_errors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$errors$,cljs.core.cst$kw$failed], null));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),failed)], null)], null);
} else {
return with_nested_errors;
}
});
forms.validator.key_to_getter = (function forms$validator$key_to_getter(key){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,cljs.core.cst$kw$_STAR_)){
return forms.validator.get_list;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(forms.validator.get_by_key,key);
}
});
forms.validator.make_validator = (function forms$validator$make_validator(path,validators){
var iterator = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(forms.validator.key_to_getter,path));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (iterator){
return (function (acc,v){
if((acc == null)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(forms.validator.attr_errors,validators));
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,acc);
}
});})(iterator))
,null,iterator);
});
forms.validator.validate_map = (function forms$validator$validate_map(var_args){
var args21639 = [];
var len__11171__auto___21646 = arguments.length;
var i__11172__auto___21647 = (0);
while(true){
if((i__11172__auto___21647 < len__11171__auto___21646)){
args21639.push((arguments[i__11172__auto___21647]));

var G__21648 = (i__11172__auto___21647 + (1));
i__11172__auto___21647 = G__21648;
continue;
} else {
}
break;
}

var G__21641 = args21639.length;
switch (G__21641) {
case 4:
return forms.validator.validate_map.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return forms.validator.validate_map.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21639.length)].join('')));

}
});

forms.validator.validate_map.cljs$core$IFn$_invoke$arity$4 = (function (input,errors,key,attr_validators){
return forms.validator.validate_map.cljs$core$IFn$_invoke$arity$6(input,errors,key,attr_validators,null,null);
});

forms.validator.validate_map.cljs$core$IFn$_invoke$arity$6 = (function (input,errors,key,attr_validators,full_data,prev_path){
var path = forms.util.key_to_path(key);
var validator = forms.validator.make_validator(path,attr_validators);
var G__21642 = input;
var G__21643 = errors;
var G__21644 = (function (){var or__9992__auto__ = full_data;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return input;
}
})();
var G__21645 = (function (){var or__9992__auto__ = prev_path;
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return (validator.cljs$core$IFn$_invoke$arity$4 ? validator.cljs$core$IFn$_invoke$arity$4(G__21642,G__21643,G__21644,G__21645) : validator.call(null,G__21642,G__21643,G__21644,G__21645));
});

forms.validator.validate_map.cljs$lang$maxFixedArity = 6;

forms.validator.validator_runner = (function forms$validator$validator_runner(var_args){
var args21650 = [];
var len__11171__auto___21653 = arguments.length;
var i__11172__auto___21654 = (0);
while(true){
if((i__11172__auto___21654 < len__11171__auto___21653)){
args21650.push((arguments[i__11172__auto___21654]));

var G__21655 = (i__11172__auto___21654 + (1));
i__11172__auto___21654 = G__21655;
continue;
} else {
}
break;
}

var G__21652 = args21650.length;
switch (G__21652) {
case 2:
return forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21650.length)].join('')));

}
});

forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$2 = (function (validators,input){
return forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$3(validators,input,cljs.core.PersistentArrayMap.EMPTY);
});

forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$3 = (function (validators,input,errors){
return forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$5(validators,input,errors,null,null);
});

forms.validator.validator_runner.cljs$core$IFn$_invoke$arity$5 = (function (validators,input,errors,full_data,prev_path){
return cljs.core.reduce_kv((function (errors__$1,key,attr_validators){
return forms.validator.validate_map.cljs$core$IFn$_invoke$arity$6(input,errors__$1,key,attr_validators,full_data,prev_path);
}),errors,validators);
});

forms.validator.validator_runner.cljs$lang$maxFixedArity = 5;

/**
 * Creates a form validator. Validator is a map where keys represent the path
 *   to data that will be validated and the value is a vector of attribute validators.
 * 
 *   Attribute validators are tuples where the first element is the attribute validator name
 *   and the second one is the validation function. Validation function receives the value for
 *   the key path and returns a boolean. It should return `true` if the attribute is valid and 
 *   `false` if it's invalid. Attribute validators receive `full-data` (whole object that is
 *   being validated) and the attribute `path` as the second and third arguments.
 * 
 *   **Example attribute validator**
 * 
 *   ```clojure
 *   (def not-empty [:not-empty ;; Name of the attribute validator
 *                (fn [value _ _]
 *                  (not (empty? v)))]
 *   ```
 * 
 *   If you want to build more complex validators `full-data` and `path` arguments allow you
 *   to do so. For instance, let's say we're writing the validator that can check if the email
 *   confirmation is the same as the email:
 * 
 *   ```clojure
 *   (def email-confirmation [:confirmed-email?
 *                         (fn [value full-data path]
 *                           (let [email (:email full-data)
 *                                 email-confirmation (:email-confirmation full-data)]
 *                             (= email email-confirmation)))]
 *   ```
 * 
 * 
 *   `validator` returns the function that accepts the data and returns the map of validation
 *   errors.
 * 
 *   **Simple example:**
 * 
 *   ```clojure
 *   (def not-empty [:not-empty (fn [v _ _] (not (empty? v)))])
 *   (def form-validator-1 (validator {:username [not-empty]}))
 *   
 *   (form-validator-1 {:username ""})
 *   ;; returns {:username {:$errors$ {:value "" :failed [:not-empty]}}}
 *   ```
 * 
 *   **Validators can validate nested paths:**
 * 
 *   ```clojure
 *   (def form-validator-2 (validator {:user.name [not-empty]}))
 *   (form-validator-2 {:user {:username ""}})
 *   ;; returns {:user {:username {:$errors$ {:value "" :failed [:not-empty]}}}}
 *   ```
 * 
 *   **Validators can validate objects in the list:**
 * 
 *   ```clojure
 *   (def form-validator-3 (validator {:user.accounts.*.network [not-empty]}))
 *   (form-validator-3 {:user {:accounts [{:network ""}]}})
 *   ;; returns {:user {:accounts {0 {:network {:$errors$ {:value "" :failed [:not-empty]}}}}}}
 *   ```
 * 
 *   **Validators can validate values in the list:**
 * 
 *   ```clojure
 *   (def form-validator-4 (validator {:user.phone-numbers.* [not-empty]}))
 *   (form-validator-3 {:user {:phone-numbers [""]}})
 *   ;; returns {:user {:phone-numbers {0 {:$errors$ {:value "" :failed [:not-empty]}}}}}
 *   ```
 * 
 *   **Validators can be nested inside other validators:**
 * 
 *   ```clojure
 *   (def user-validator (validator {:username [not-empty]}))
 *   (def article-validator (validator {:title [not-empty]
 *                                   :user [user-validator]}))
 * 
 *   (article-validator {:title "" :user {:username ""}})
 *   ;; returns {:title {:$errors {:value "" :failed [:not-empty]}}
 *   ;;          :user {:username {:$errors$ {:value "" :failed [:not-nil]}}}}
 *   ```
 * 
 *   Features provided by the validator ensure that you can validate any data structure, no matter how deeply nested it is. You can also create small focused validators that can be nested or composed which ensures
 *   that your validation logic stays DRY and allows reuse of the validators.
 *   
 */
forms.validator.validator = (function forms$validator$validator(validators){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(forms.validator.validator_runner,validators);
});
/**
 * Creates a validator that is a composition of the validators passed as the arguments:
 * 
 *   ```clojure
 *   (def not-empty [:not-empty (fn [v] (not (empty? v)))])
 * 
 *   (def username-validator (validator {:username [not-empty]}))
 *   (def password-validator (validator {:password [not-empty]}))
 * 
 *   (def user-validator (comp-validators username-validator password-validator))
 * 
 *   (user-validator {:username "" :password ""})
 *   ;; returns {:username {:$errors$ {:value "" :failed [:not-empty]}}
 *   ;;          :password {:$errors$ {:value "" :failed [:not-empty]}}}
 *   ```
 */
forms.validator.comp_validators = (function forms$validator$comp_validators(var_args){
var args__11178__auto__ = [];
var len__11171__auto___21658 = arguments.length;
var i__11172__auto___21659 = (0);
while(true){
if((i__11172__auto___21659 < len__11171__auto___21658)){
args__11178__auto__.push((arguments[i__11172__auto___21659]));

var G__21660 = (i__11172__auto___21659 + (1));
i__11172__auto___21659 = G__21660;
continue;
} else {
}
break;
}

var argseq__11179__auto__ = ((((0) < args__11178__auto__.length))?(new cljs.core.IndexedSeq(args__11178__auto__.slice((0)),(0),null)):null);
return forms.validator.comp_validators.cljs$core$IFn$_invoke$arity$variadic(argseq__11179__auto__);
});

forms.validator.comp_validators.cljs$core$IFn$_invoke$arity$variadic = (function (validators){
return (function (input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
var or__9992__auto__ = (v.cljs$core$IFn$_invoke$arity$2 ? v.cljs$core$IFn$_invoke$arity$2(input,acc) : v.call(null,input,acc));
if(cljs.core.truth_(or__9992__auto__)){
return or__9992__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}),cljs.core.PersistentArrayMap.EMPTY,validators);
});
});

forms.validator.comp_validators.cljs$lang$maxFixedArity = (0);

forms.validator.comp_validators.cljs$lang$applyTo = (function (seq21657){
return forms.validator.comp_validators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21657));
});

