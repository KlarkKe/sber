gdjs.ScoreScreenCode = {};
gdjs.ScoreScreenCode.localVariables = [];
gdjs.ScoreScreenCode.GDNewSpriteObjects1= [];
gdjs.ScoreScreenCode.GDNewSpriteObjects2= [];
gdjs.ScoreScreenCode.GDscorePOPUPObjects1= [];
gdjs.ScoreScreenCode.GDscorePOPUPObjects2= [];
gdjs.ScoreScreenCode.GDinputFieldObjects1= [];
gdjs.ScoreScreenCode.GDinputFieldObjects2= [];
gdjs.ScoreScreenCode.GDNicknameInputObjects1= [];
gdjs.ScoreScreenCode.GDNicknameInputObjects2= [];
gdjs.ScoreScreenCode.GDSubmitObjects1= [];
gdjs.ScoreScreenCode.GDSubmitObjects2= [];
gdjs.ScoreScreenCode.GDNewSprite4Objects1= [];
gdjs.ScoreScreenCode.GDNewSprite4Objects2= [];


gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.ScoreScreenCode.GDNewSprite4Objects1});
gdjs.ScoreScreenCode.asyncCallback15435428 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ScoreScreenCode.asyncCallback15435428(runtimeScene, asyncObjectsList)));
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


};gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.ScoreScreenCode.GDSubmitObjects1});
gdjs.ScoreScreenCode.asyncCallback12071692 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ScoreScreenCode.asyncCallback12071692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ScoreScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NicknameInput"), gdjs.ScoreScreenCode.GDNicknameInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(17).setString((( gdjs.ScoreScreenCode.GDNicknameInputObjects1.length === 0 ) ? "" :gdjs.ScoreScreenCode.GDNicknameInputObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(16).getChild("name").setString(runtimeScene.getGame().getVariables().getFromIndex(17).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(16).getChild("score").setNumber(runtimeScene.getGame().getVariables().getFromIndex(18).getAsNumber());
}{gdjs.evtTools.network.sendAsyncRequest("https://sber-game.ru/addscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(16)), "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.ScoreScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ScoreScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.ScoreScreenCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ScoreScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.ScoreScreenCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ScoreScreenCode.mapOfGDgdjs_9546ScoreScreenCode_9546GDSubmitObjects1Objects, runtimeScene, true, false);
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
gdjs.ScoreScreenCode.GDscorePOPUPObjects1.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects2.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects1.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects2.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.ScoreScreenCode.GDSubmitObjects1.length = 0;
gdjs.ScoreScreenCode.GDSubmitObjects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects2.length = 0;

gdjs.ScoreScreenCode.eventsList4(runtimeScene);
gdjs.ScoreScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.ScoreScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects1.length = 0;
gdjs.ScoreScreenCode.GDscorePOPUPObjects2.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects1.length = 0;
gdjs.ScoreScreenCode.GDinputFieldObjects2.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.ScoreScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.ScoreScreenCode.GDSubmitObjects1.length = 0;
gdjs.ScoreScreenCode.GDSubmitObjects2.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.ScoreScreenCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['ScoreScreenCode'] = gdjs.ScoreScreenCode;
