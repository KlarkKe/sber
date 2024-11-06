gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDNewSpriteObjects1= [];
gdjs.EndScreenCode.GDNewSpriteObjects2= [];
gdjs.EndScreenCode.GDStartAgainObjects1= [];
gdjs.EndScreenCode.GDStartAgainObjects2= [];
gdjs.EndScreenCode.GDcheckUPObjects1= [];
gdjs.EndScreenCode.GDcheckUPObjects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDStartAgainObjects1Objects = Hashtable.newFrom({"StartAgain": gdjs.EndScreenCode.GDStartAgainObjects1});
gdjs.EndScreenCode.asyncCallback17819484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScene", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback17819484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDcheckUPObjects1Objects = Hashtable.newFrom({"checkUP": gdjs.EndScreenCode.GDcheckUPObjects1});
gdjs.EndScreenCode.userFunc0x8e50d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'https://changellenge.com/event/bca-2025/?utm_source=miniapp&utm_medium=sber&utm_campaign=sber';
  } else {
    window.open('https://changellenge.com/event/bca-2025/?utm_source=miniapp&utm_medium=sber&utm_campaign=sber', '_blank');
  }
};
gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.EndScreenCode.userFunc0x8e50d8(runtimeScene);

}


};gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartAgain"), gdjs.EndScreenCode.GDStartAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDStartAgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("checkUP"), gdjs.EndScreenCode.GDcheckUPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDcheckUPObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.EndScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.EndScreenCode.GDStartAgainObjects1.length = 0;
gdjs.EndScreenCode.GDStartAgainObjects2.length = 0;
gdjs.EndScreenCode.GDcheckUPObjects1.length = 0;
gdjs.EndScreenCode.GDcheckUPObjects2.length = 0;

gdjs.EndScreenCode.eventsList4(runtimeScene);
gdjs.EndScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.EndScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.EndScreenCode.GDStartAgainObjects1.length = 0;
gdjs.EndScreenCode.GDStartAgainObjects2.length = 0;
gdjs.EndScreenCode.GDcheckUPObjects1.length = 0;
gdjs.EndScreenCode.GDcheckUPObjects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
