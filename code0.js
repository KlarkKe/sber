gdjs.StartSceneCode = {};
gdjs.StartSceneCode.localVariables = [];
gdjs.StartSceneCode.GDNewSpriteObjects1= [];
gdjs.StartSceneCode.GDNewSpriteObjects2= [];
gdjs.StartSceneCode.GDNewSprite2Objects1= [];
gdjs.StartSceneCode.GDNewSprite2Objects2= [];
gdjs.StartSceneCode.GDroolbuttonObjects1= [];
gdjs.StartSceneCode.GDroolbuttonObjects2= [];
gdjs.StartSceneCode.GDleaderboardButtonObjects1= [];
gdjs.StartSceneCode.GDleaderboardButtonObjects2= [];


gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.StartSceneCode.GDNewSprite2Objects1});
gdjs.StartSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDroolbuttonObjects1Objects = Hashtable.newFrom({"roolbutton": gdjs.StartSceneCode.GDroolbuttonObjects1});
gdjs.StartSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RoolScreen", false);
}}

}


};gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDleaderboardButtonObjects1Objects = Hashtable.newFrom({"leaderboardButton": gdjs.StartSceneCode.GDleaderboardButtonObjects1});
gdjs.StartSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderBoardScreen", false);
}}

}


};gdjs.StartSceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.StartSceneCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("roolbutton"), gdjs.StartSceneCode.GDroolbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDroolbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboardButton"), gdjs.StartSceneCode.GDleaderboardButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartSceneCode.mapOfGDgdjs_9546StartSceneCode_9546GDleaderboardButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.StartSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.StartSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.StartSceneCode.GDroolbuttonObjects1.length = 0;
gdjs.StartSceneCode.GDroolbuttonObjects2.length = 0;
gdjs.StartSceneCode.GDleaderboardButtonObjects1.length = 0;
gdjs.StartSceneCode.GDleaderboardButtonObjects2.length = 0;

gdjs.StartSceneCode.eventsList3(runtimeScene);
gdjs.StartSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.StartSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.StartSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.StartSceneCode.GDroolbuttonObjects1.length = 0;
gdjs.StartSceneCode.GDroolbuttonObjects2.length = 0;
gdjs.StartSceneCode.GDleaderboardButtonObjects1.length = 0;
gdjs.StartSceneCode.GDleaderboardButtonObjects2.length = 0;


return;

}

gdjs['StartSceneCode'] = gdjs.StartSceneCode;
