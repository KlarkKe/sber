gdjs.LeaderBoardScreenCode = {};
gdjs.LeaderBoardScreenCode.localVariables = [];
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1= [];
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2= [];
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1= [];
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2= [];
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects1= [];
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2= [];
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects1= [];
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2= [];


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


};gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2});
gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2});
gdjs.LeaderBoardScreenCode.eventsList1 = function(runtimeScene) {

};gdjs.LeaderBoardScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}{gdjs.evtTools.network.sendAsyncRequest("https://sber-game.ru/getscores", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
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
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2.length = 0;

gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) < 10;
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDPlayerNameTextObjects2Objects, 100, 200 + runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() * 100, "Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderBoardScreenCode.mapOfGDgdjs_9546LeaderBoardScreenCode_9546GDPlayerScoreTextObjects2Objects, 600, 200 + runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() * 100, "Layer");
}{for(var i = 0, len = gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2.length ;i < len;++i) {
    gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(15).getChild(runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber()).getChild("name").getAsString());
}
}{for(var i = 0, len = gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2.length ;i < len;++i) {
    gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(15).getChild(runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber()).getChild("score").getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}}
}

}


};

gdjs.LeaderBoardScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2.length = 0;

gdjs.LeaderBoardScreenCode.eventsList2(runtimeScene);
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDLeaderBoardBGObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDBackButtonOutLBObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderBoardScreenCode.GDPlayerScoreTextObjects2.length = 0;


return;

}

gdjs['LeaderBoardScreenCode'] = gdjs.LeaderBoardScreenCode;
