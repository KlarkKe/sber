gdjs.ScoreScreenCode = {};
gdjs.ScoreScreenCode.localVariables = [];
gdjs.ScoreScreenCode.GDNewSpriteObjects1= [];
gdjs.ScoreScreenCode.GDNewSpriteObjects2= [];
gdjs.ScoreScreenCode.GDSendButtonObjects1= [];
gdjs.ScoreScreenCode.GDSendButtonObjects2= [];
gdjs.ScoreScreenCode.GDscorePOPUPObjects1= [];
gdjs.ScoreScreenCode.GDscorePOPUPObjects2= [];
gdjs.ScoreScreenCode.GDinputFieldObjects1= [];
gdjs.ScoreScreenCode.GDinputFieldObjects2= [];
gdjs.ScoreScreenCode.GDNicknameInputObjects1= [];
gdjs.ScoreScreenCode.GDNicknameInputObjects2= [];
gdjs.ScoreScreenCode.GDNewSprite2Objects1= [];
gdjs.ScoreScreenCode.GDNewSprite2Objects2= [];
gdjs.ScoreScreenCode.GDNewSprite3Objects1= [];
gdjs.ScoreScreenCode.GDNewSprite3Objects2= [];
gdjs.ScoreScreenCode.GDNewSprite4Objects1= [];
gdjs.ScoreScreenCode.GDNewSprite4Objects2= [];


gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.ScoreScreenCode.GDNewSprite3Objects1});
gdjs.ScoreScreenCode.asyncCallback18388652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ScoreScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}gdjs.ScoreScreenCode.localVariables.length = 0;
}
gdjs.ScoreScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ScoreScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ScoreScreenCode.asyncCallback18388652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ScoreScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ScoreScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.ScoreScreenCode.GDNewSprite4Objects1});
gdjs.ScoreScreenCode.asyncCallback18434796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ScoreScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}gdjs.ScoreScreenCode.localVariables.length = 0;
}
gdjs.ScoreScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ScoreScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ScoreScreenCode.asyncCallback18434796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ScoreScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ScoreScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ScoreScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ScoreScreenCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ScoreScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ScoreScreenCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ScoreScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.ScoreScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.ScoreScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.ScoreScreenCode.GDSendButtonObjects1.length = 0;
gdjs.ScoreScreenCode.GDSendButtonObjects2.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects1.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects2.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects1.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects2.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects2.length = 0;

gdjs.ScoreScreenCode.eventsList4(runtimeScene);
gdjs.ScoreScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.ScoreScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.ScoreScreenCode.GDSendButtonObjects1.length = 0;
gdjs.ScoreScreenCode.GDSendButtonObjects2.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects1.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects2.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects1.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects2.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['ScoreScreenCode'] = gdjs.ScoreScreenCode;
