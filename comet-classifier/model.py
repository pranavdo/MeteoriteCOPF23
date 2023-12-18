import numpy as np
import pandas as pd
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import mutual_info_classif
from sklearn.model_selection import train_test_split
from sklearn import svm

def model():
    amor_asteroids = pd.read_csv("amor-asteroids.csv")
    apollo_asteroids = pd.read_csv("apollo-asteroids.csv")
    aten_asteroids = pd.read_csv("aten-asteroids.csv")
    atira_asteroids = pd.read_csv("atira-asteroids.csv")
    centaur_objects = pd.read_csv("centaur-objects.csv")
    comets = pd.read_csv("comets.csv")
    hyperbolic_asteroids = pd.read_csv("hyperbolic-asteroids.csv")
    inner_main_belt = pd.read_csv("inner-main-belt-asteroids.csv")
    jupiter_trojan_asteroids = pd.read_csv("jupiter-trojan-asteroids.csv")
    mars_crossin_asteroids = pd.read_csv("mars-crossing-asteroids.csv")
    other_asteroids = pd.read_csv("other-asteroids.csv")
    outer_main_belt_asteroids = pd.read_csv("outer-main-belt-asteroids.csv")
    trans_neptunian_objects = pd.read_csv("trans-neptunian-objects.csv")

    asteroid_frames = [amor_asteroids, apollo_asteroids, aten_asteroids, atira_asteroids, centaur_objects, 
                   hyperbolic_asteroids, inner_main_belt, jupiter_trojan_asteroids, mars_crossin_asteroids, other_asteroids,
                   outer_main_belt_asteroids, trans_neptunian_objects]
    asteroids = pd.concat(asteroid_frames)
    asteroids = asteroids.drop(columns=['condition_code','n_del_obs_used','n_dop_obs_used', 'full_name','H'])
    classification_comets = comets.drop(columns=['full_name','A1','A2','A3','DT','class','tp_cal','two_body', 'condition_code','n_del_obs_used','n_dop_obs_used', 'H'])
    asteroids = asteroids.sample(300, random_state=233243234)
    classification_comets = classification_comets.sample(1000, random_state=4210)
    classification = np.zeros(300)
    temp = np.ones(1000)
    classification = np.append(classification, temp)
    a_mean = asteroids.mean()
    asteroids.fillna(a_mean,inplace=True)
    c_mean = classification_comets.mean()
    classification_comets.fillna(c_mean,inplace=True)
    space_objects = pd.concat([asteroids, classification_comets])
    space_objects = space_objects.drop(columns=['per_y'])
    sel = SelectKBest(mutual_info_classif, k=3)
    sel.fit(space_objects, classification)
    transformed_space_objects = sel.transform(space_objects)
    X_train, X_test, y_train, y_test = train_test_split(transformed_space_objects, classification, test_size=0.3,random_state=109)
    clf = svm.SVC(kernel='linear')
    clf.fit(X_train, y_train)
    return clf
