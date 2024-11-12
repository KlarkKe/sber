gdjs.LeaderBoardScreenCode = {};
gdjs.LeaderBoardScreenCode.localVariables = [];
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1= [];
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2= [];
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1= [];
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2= [];


gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDBackButtonOutLBObjects1Objects = Hashtable.newFrom({"BackButtonOutLB": gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1});
gdjs.LeaderBoardScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScene", false);
}}

}


};gdjs.LeaderBoardScreenCode.eventsList1 = function(runtimeScene) {

};gdjs.LeaderBoardScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}{gdjs.evtTools.network.sendAsyncRequest("https://mts-game.ru/getscores", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButtonOutLB"), gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDBackButtonOutLBObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderBoardScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(15));
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(15));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) < 10;
if (isConditionTrue_0)
{
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LeaderBoardScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2.length = 0;

gdjs.LeaderBoardScreenCode.eventsList2(runtimeScene);
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2.length = 0;


return;

}

gdjs['LeaderBoardScreenCode'] = gdjs.LeaderBoardScreenCode;
