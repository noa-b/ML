const constants={};

constants.DATA_DIR="../data";
constants.RAW_DIR=constants.DATA_DIR+"/raw";
constants.DATASET_DIR=constants.DATA_DIR+"/dataset";

constants.JSON_DIR=constants.DATASET_DIR+"/json";
constants.IMG_DIR=constants.DATASET_DIR+"/img";
constants.FEATURES=constants.DATASET_DIR+"/features.json";
constants.SAMPLES=constants.DATASET_DIR+"/samples.json";
constants.TRAINING=constants.DATASET_DIR+"/training.json";
constants.TESTING=constants.DATASET_DIR+"/testing.json";
constants.TRAINING_CSV=constants.DATASET_DIR+"/training.csv";
constants.TESTING_CSV=constants.DATASET_DIR+"/testing.csv";

constants.JS_OBJECTS="../common/js_objects";
constants.SAMPLES_JS=constants.JS_OBJECTS+"/samples.js";
constants.FEATURES_JS=constants.JS_OBJECTS+"/features.js";
constants.MIN_MAX_JS=constants.JS_OBJECTS+"/minMax.js";
constants.TRAINING_JS=constants.DATASET_DIR+"/training.js";
constants.TESTING_JS=constants.DATASET_DIR+"/testing.js";
constants.MODEL_JS=constants.DATASET_DIR+"/model.js";
constants.DECISION_BOUNDARY=constants.DATASET_DIR+"/dicision_boundery.png";
constants.MODEL=constants.DATASET_DIR+"/model.json";




if(typeof module!=='undefined'){
module.exports=constants;
}