(ns realworld.datasources
  (:require [keechma.toolbox.ajax :refer [GET]]
            [keechma.toolbox.dataloader.subscriptions :refer [map-loader]]))

(def api-endpoint "https://conduit.productionready.io/api")

(def api-loader
  (map-loader
   (fn [req]
     (when-let [params (:params req)]
       (GET (str api-endpoint (:url params))
            {:params (dissoc params :url)
             :response-format :json
             :keywords? true})))))

(defn tag->entity [tag]
  {:tag tag})

(defn process-articles [data] 
  {:data (map (fn [article]
                (assoc article :tagList (map tag->entity (:tagList article))))
              (:articles data))
   :meta {:count (:articlesCount data)}})

(defn process-tags [data]
  (map tag->entity (:tags data)))

(def datasources
  {:articles {:target    [:edb/collection :article/list]
              :params    (fn [_ _ _]
                           {:url "/articles"})
              :processor process-articles
              :loader    api-loader}
   :tags     {:target    [:edb/collection :tag/list]
              :params    (fn [_ _ _]
                           {:url "/tags"})
              :processor process-tags
              :loader    api-loader}})