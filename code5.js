gdjs.RoolScreenCode = {};
gdjs.RoolScreenCode.localVariables = [];
gdjs.RoolScreenCode.GDBG_9595RoolsObjects1= [];
gdjs.RoolScreenCode.GDBG_9595RoolsObjects2= [];
gdjs.RoolScreenCode.GDBackButtonObjects1= [];
gdjs.RoolScreenCode.GDBackButtonObjects2= [];


gdjs.RoolScreenCode.mapOfGDgdjs_9546RoolScreenCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.RoolScreenCode.GDBackButtonObjects1});
gdjs.RoolScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScene", false);
}}

}


};gdjs.RoolScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.RoolScreenCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolScreenCode.mapOfGDgdjs_9546RoolScreenCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.RoolScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolScreenCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolScreenCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolScreenCode.GDBackButtonObjects1.length = 0;
gdjs.RoolScreenCode.GDBackButtonObjects2.length = 0;

gdjs.RoolScreenCode.eventsList1(runtimeScene);
gdjs.RoolScreenCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolScreenCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolScreenCode.GDBackButtonObjects1.length = 0;
gdjs.RoolScreenCode.GDBackButtonObjects2.length = 0;


return;

}

gdjs['RoolScreenCode'] = gdjs.RoolScreenCode;
