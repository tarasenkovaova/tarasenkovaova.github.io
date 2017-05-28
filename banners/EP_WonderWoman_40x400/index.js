(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.wonder_woman_240x400 = function() {
	this.initialize(img.wonder_woman_240x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D16F1D").s().p("AgEAfIAAgNIAJAAIAAANgAgEgRIAAgNIAJAAIAAANg");
	this.shape.setTransform(80.5,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D16F1D").s().p("AgeAtIAAhZIA8AAIAAAIIg0AAIAAAgIAxAAIAAAGIgxAAIAAAjIA1AAIAAAIg");
	this.shape_1.setTransform(75.5,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D16F1D").s().p("AgDAtIAAhRIggAAIAAgIIBGAAIAAAIIgfAAIAABRg");
	this.shape_2.setTransform(67.8,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D16F1D").s().p("AAbA4IAAhPIgyBPIgLAAIAAhYIAIAAIAABQIAyhQIALAAIAABYgAgMgrQgEgDgCgKIAGAAQAAAGADACQAEADAFAAQAFAAADgDQAEgCABgGIAEAAQgBAJgEAEQgFAEgHAAQgIAAgEgEg");
	this.shape_3.setTransform(59.6,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16F1D").s().p("AAfAtIgLgcIgnAAIgLAcIgJAAIAkhZIAIAAIAjBZgAgRAKIAiAAIgRgtg");
	this.shape_4.setTransform(51,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D16F1D").s().p("AgPArQgIgEgFgHQgEgFgEgJQgDgJAAgJQAAgHADgKQAEgJAEgFQAFgHAIgEQAHgDAKAAQAHAAAGABIALAGQAEADAFAGQADAGAAAGIgIAAIgDgJIgHgHIgIgEQgFgBgFAAQgIAAgGADQgGADgEAGQgFAGgBAHQgCAGAAAHQAAAIACAGQABAIAFAFQAEAGAGADQAGADAIAAQAGAAAGgCQAFgDADgDQAEgEADgFQACgGAAgFIAIAAQAAAIgDAGQgDAIgFAEQgEAEgHADQgFACgKAAQgKAAgHgDg");
	this.shape_5.setTransform(42.7,-9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D16F1D").s().p("AAfAtIgLgcIgoAAIgKAcIgJAAIAkhZIAIAAIAjBZgAgRAKIAiAAIgRgtg");
	this.shape_6.setTransform(30.6,-9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D16F1D").s().p("AAaAtIAAgsIg0AAIAAAsIgIAAIAAhZIAIAAIAAAnIA0AAIAAgnIAJAAIAABZg");
	this.shape_7.setTransform(22.1,-9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D16F1D").s().p("AAbAtIAAhPIgyBPIgLAAIAAhZIAIAAIAABQIAyhQIALAAIAABZg");
	this.shape_8.setTransform(9.5,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D16F1D").s().p("AgDAtIAAhRIgfAAIAAgIIBFAAIAAAIIgfAAIAABRg");
	this.shape_9.setTransform(1.3,-9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D16F1D").s().p("AgPArQgIgEgFgHQgFgGgDgIQgDgIAAgKQAAgIADgJQADgIAFgGQAFgHAIgEQAHgDALAAQAGAAAGABIALAGQAEADAEAGQAEAGAAAGIgIAAQgBgEgDgFIgGgHIgIgEIgJgBQgIAAgHADQgGADgEAGQgEAGgCAHIgCANQAAAFACAJQACAIAEAFQAEAGAGADQAHADAIAAQAFAAAGgCQAEgCAEgEQAEgEACgFQADgGAAgFIAJAAQgBAHgDAHQgDAHgFAFQgGAFgFACQgFACgJAAQgLAAgHgDg");
	this.shape_10.setTransform(-6.5,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D16F1D").s().p("AgRArQgIgEgGgHQgEgFgEgJQgCgJAAgJQAAgHACgKQAEgJAEgFQAGgHAIgEQAHgDAKAAQALAAAIADQAHAEAFAHQAFAFADAJQADAKAAAHQAAAJgDAJQgDAJgFAFQgFAHgHAEQgIADgLAAQgKAAgHgDgAgOgjQgHADgDAGQgFAGgCAHQgBAGgBAHQABAIABAGQACAIAFAFQADAGAHADQAFADAJAAQAJAAAGgDQAHgDAEgGQAEgFABgIQACgGAAgIQAAgHgCgGQgBgHgEgGQgEgGgHgDQgGgDgJAAQgJAAgFADg");
	this.shape_11.setTransform(-15.8,-9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D16F1D").s().p("AAbAtIAAgsIg0AAIAAAsIgJAAIAAhZIAJAAIAAAnIA0AAIAAgnIAIAAIAABZg");
	this.shape_12.setTransform(-24.9,-9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D16F1D").s().p("AgiAtIAAhZIA+AAIAAAIIg1AAIAAAeIAhAAQAMAAAIAGQAGAHABAMQgBAMgGAHQgJAHgLAAgAgZAlIAfAAQAKAAAEgFQAGgEAAgJQAAgIgGgGQgFgFgJAAIgfAAg");
	this.shape_13.setTransform(-33.2,-9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D16F1D").s().p("AgSArQgHgEgFgHQgHgGgBgIQgDgHAAgLQAAgJADgIQABgIAHgGQAFgHAHgEQAIgDAKAAQALAAAHADQAIAEAGAHQAEAFAEAJQACAKAAAHQAAAJgCAJQgEAJgEAFQgGAHgIAEQgHADgLAAQgKAAgIgDgAgOgjQgHADgEAGQgEAGgBAHQgDAGAAAHQAAAIADAGQABAIAEAFQAEAGAHADQAGADAIAAQAJAAAGgDQAHgDADgGQAEgFADgIQABgGAAgIQAAgHgBgGQgDgHgEgGQgDgGgHgDQgGgDgJAAQgIAAgGADg");
	this.shape_14.setTransform(-42.3,-9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D16F1D").s().p("AggAtIAAhZIAmAAQAHAAAFACQAFACADADQADAEACAEQACAEAAAHQAAAGgCAFQgCAEgDADIgIAFIgMABIgeAAIAAAngAgYAAIAcAAQAKAAAFgEQAGgFAAgJQAAgJgGgFQgFgEgKAAIgcAAg");
	this.shape_15.setTransform(-50.8,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D16F1D").s().p("AAkA4IAAgXIhHAAIAAAXIgIAAIAAgeIAJAAQAFgJACgJIAEgRIACgSIAAgcIA2AAIAABRIALAAIAAAegAgOgKIgEASQgCAIgFAKIAyAAIAAhKIglAAg");
	this.shape_16.setTransform(-59.7,-8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D16F1D").s().p("AgRArQgIgEgGgHQgFgGgCgIQgDgIAAgKQAAgIADgJQACgIAFgGQAGgHAIgEQAHgDAKAAQALAAAHADQAJAEAFAHQAFAGACAIQADAJAAAIQAAAKgDAIQgCAIgFAGQgFAHgJAEQgHADgLAAQgKAAgHgDgAgOgjQgGADgFAGQgEAGgCAHIgCANQAAAFACAJQADAIADAFQAFAGAGADQAGADAIAAQAJAAAGgDQAGgDAFgGQADgFADgIQACgJAAgFIgCgNQgCgHgEgGQgFgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_17.setTransform(-68.5,-9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D16F1D").s().p("AAaAtIAAhRIgzAAIAABRIgJAAIAAhZIBFAAIAABZg");
	this.shape_18.setTransform(-77.6,-9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFBEIgIgBQgEgBgFgDQgEgCgDgEQgGgHgBgJQgCgJAAgOIAAhWIAbAAIABBfIABAHQABAFADACQADACAFAAIAGgBQADgBACgFQABgDAAgEIABhhIAXAAIAABUQAAAPgBAJQgCAJgEAGQgDAFgJAFQgIAEgLAAg");
	this.shape_19.setTransform(73.7,9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALBDIgPg0IgIAAIAAA0IgbAAIAAiGIAjAAIAIABQAGAAAEACQADAAAFADQAEACAEAFQAEAGACAHIACAPIgBAMQgCAHgDAFIgFAFIgHAGIAUA6gAgMgHIAIAAQAEAAADgCIAEgEQACgDABgDIAAgIIgBgIIgCgGQgEgDgCAAIgNgBg");
	this.shape_20.setTransform(64.4,9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_21.setTransform(56.9,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNBEQgGgCgGgEIgGgHIgEgIIgEgOIAWgIIABAFIAEAJIACADQABABAEABIAFABIAEgBIAFgCIADgFIABgGIgBgGIgEgFQgCgCgFgDIgVgMQgEgCgFgGQgDgFgBgGQgCgGAAgGQAAgKAEgIQACgHAGgGQAGgFAGgCQAFgDAHAAIALACIAKAEQAGAEAEAGQAEAGACAJIgVAJIgDgJIgDgEIgFgCIgEgBIgDABIgEADQgCACgBACIAAAGIABAGQAAADADACIAHAFIAVAKQAEADAGAGQAEAHABAEIABALIgBAMIgDAKIgEAHIgEAFQgGAFgHACQgIADgHAAIgNgCg");
	this.shape_22.setTransform(50.1,9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFBEIgJgBIgIgEIgIgGQgEgFgDgLQgBgKAAgNIAAhWIAbAAIAABfIACAHQABAFADACQADACAEAAQAEAAADgBQACgBADgFIABgHIAAhhIAYAAIAABUQAAAQgCAIQgBAJgFAGQgDAFgIAFQgIAEgMAAg");
	this.shape_23.setTransform(40.9,9.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBDIAAiGIAcAAIAABuIAhAAIAAAYg");
	this.shape_24.setTransform(32.7,9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBDIAAiGIAiAAIAKABQAFAAAEACQADAAAFADIAHAHQAEAGADAIQACAIAAAHIgCARIgDAIIgEAGQgEAEgEACQgFAEgEAAQgDABgFABIgPAAIAAAxgAgKgFIAKgBQADAAADgCIADgGIABgMIgBgIQAAgEgDgEQgDgCgCAAIgLgBg");
	this.shape_25.setTransform(24.2,9.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARBDIgFgdIgaAAIgFAdIgZAAIAeiGIAdAAIAeCGgAgBgjIgKA0IATAAIgJg7g");
	this.shape_26.setTransform(14.7,9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBDIAAiGIAiAAIAKABQAFAAAEACQADAAAFADIAHAHQAEAGADAIIACAPIgCARIgDAIIgEAGQgEAEgEACQgFAEgEAAQgDABgFABIgPAAIAAAxgAgKgFIAKgBQADAAADgCQACgCAAgEQACgDAAgJIgBgIQAAgEgDgEQgDgCgCAAIgLgBg");
	this.shape_27.setTransform(6.4,9.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBFIgIgCIgIgFIgIgJIgDgHQgCgDgCgHIgDgPIAAgpIADgPIAEgLIADgGQAEgGAEgDIAIgFIAIgCIAHgBIAIABQAFABADABIAIAFQADADAEAGIAEAGIADALQACAGABAJIAAApQAAAJgDAGQgBAHgCADIgEAHIgHAJIgIAFIgIACIgIABgAgFgrIgCADIgCAFQgCADAAAEIgBAtIABALQAAAFACADIACAEQAAABAAAAQAAABABAAQAAABABAAQAAAAAAABQADABACAAQAEAAABgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBIACgEIACgTIAAghIgCgTIgCgFIgEgDQgBgCgEAAQgCAAgDACg");
	this.shape_28.setTransform(-3.5,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALBDIgPg0IgIAAIAAA0IgbAAIAAiGIAjAAIAIABQAFAAAFACQADAAAFADQAFACADAFQAEAGACAHIABAPIgBAMQgBAHgDAFIgGAFIgGAGIAUA6gAgMgHIAIAAQAFAAACgCIADgEQADgDAAgDIABgIIgBgIIgDgGQgCgDgDAAIgNgBg");
	this.shape_29.setTransform(-12.9,9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFBEIgIgBQgEgBgFgDQgEgCgDgEQgGgHgBgJQgCgJAAgOIAAhWIAbAAIABBfIABAHQACAFADACQACACAFAAQADAAADgBQADgBACgFQABgDAAgEIABhhIAXAAIAABUQAAAPgBAJQgCAJgEAGQgDAFgJAFQgIAEgLAAg");
	this.shape_30.setTransform(-23,9.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiBDIAAiGIBFAAIAAAYIgpAAIAAAgIAfAAIAAAVIgfAAIAAAiIApAAIAAAXg");
	this.shape_31.setTransform(-31.8,9.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_32.setTransform(-38.8,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPBDIgNhLIgCgUIgOBfIgYAAIgZiGIAdAAIAKBPIAAAUIABgMIAEgaIAKg9IAXAAIAMBGIADAdIABgaIAKhJIAYAAIgYCGg");
	this.shape_33.setTransform(-47.1,9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPBDIgNhLQgCgIAAgMIgOBfIgYAAIgZiGIAeAAIAKBjIABgMIADgaIAJg9IAYAAIAMBGIADAdIACggIAJhDIAYAAIgYCGg");
	this.shape_34.setTransform(-60.6,9.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAPBDIgNhLIgCgUIgOBfIgYAAIgZiGIAeAAIAKBjIAAgMIAOhXIAYAAIANBQIABATIALhjIAYAAIgYCGg");
	this.shape_35.setTransform(-74.2,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-16.3,162.1,32.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(-100.5,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_1.setTransform(-100.5,40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_2.setTransform(-100.5,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_3.setTransform(-100.5,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_4.setTransform(-100.5,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_5.setTransform(-100.5,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_6.setTransform(-100.5,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_7.setTransform(-100.5,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_8.setTransform(-100.5,-39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_9.setTransform(-100.5,-52.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0095D0").s().p("AgNB+IgOgFQgIgDgHgGQgIgGgGgJIgHgNQgDgFgDgOQgDgIgCgTQgCgOAAgYQAAgWACgPIAFgbQADgNADgGIAHgNQAGgJAIgGQAHgGAIgDIAOgEIANgBIAOABIAOAEQAIADAHAGQAIAGAGAJIAHANIAGATIAFAbQACAWAAAPQAAARgCAVQgCATgDAIQgCAJgEAKIgHANQgGAJgIAGQgHAGgIADIgOAFIgOAAgAgJhPIgGAHIgEAIIgCANIAABnIACANIAEAIIAGAHQAEACAFAAQAHAAADgCIAGgHIADgIQACgFABgIIABgWIgBhRQgBgGgCgHIgDgIIgGgHQgDgCgHAAQgFAAgEACg");
	this.shape_10.setTransform(88.6,35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0095D0").s().p("AATB7IAAhqIglAAIAABqIgyAAIAAj1IAyAAIAABhIAlAAIAAhhIAyAAIAAD1g");
	this.shape_11.setTransform(71,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0095D0").s().p("AAaB7IAAh8IAFghIgBAAIgFAOIgFAQIguBuIAAARIguAAIAAj1IAuAAIgBB8IgDAYIABAAIA3iJIAAgLIAvAAIAAD1g");
	this.shape_12.setTransform(53,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0095D0").s().p("ABAB9IgKgBQgFAAgGgDQgFgBgFgEQgEgEgEgGQgFgKgBgMIgEgjQAAgHgCgIQgCgIgDgEQgEgFgFgBIgagBIAABsIgyAAIAAj1IAyAAIAABhIAQAAQAHAAAEgCIAEgEIAEgFIABgFIAFgrIAEgOQACgGADgFQAGgGADgCQAGgFAIgBIAVgBIAHACIAAAnIgDAAQgDAAgDADQgEACgCAKIgCANIgCAPIgEAMQgCAFgEAGQgEADgEADIgKADIAAABQAHABAJAGQAIAEAEAIQAFAJAAAHIAGAtIABADQAEAGAHgBIAAAqIgHACg");
	this.shape_13.setTransform(35.5,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0095D0").s().p("AhKh6IBSAAIAQADQAJABAGADQAHAEAHAGQAHAJAEAMQADAMAAANQAAALgCAKQgCALgEAFIgGAHQgEAHgMADQAJAEAHADQAIAGACAEQAGAJADANQADAMAAAKQAAAKgDAMQgDAJgGALQgGAJgHAFQgIAFgIACQgIADgJAAIhbABgAgaBRIAggBQAFgBAGgGQAEgEABgHIACgOQAAgJgDgIQgCgFgFgGQgGgEgGAAIgcAAgAgagXIASAAQAIAAAFgCQAFgCADgEQADgDABgHIACgLIgCgNQgBgGgFgFQgEgEgGgBIgJgBIgSAAg");
	this.shape_14.setTransform(9.1,35.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0095D0").s().p("AgYAKQgLgGgFgGQgEgDgFgIIAAAAIBjAAIAAAAQgDAGgGAFQgFAGgLAGQgKAEgPAAQgOAAgKgEg");
	this.shape_15.setTransform(-17.9,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0095D0").s().p("AAbB7IAAiEIADgZIgBAAIgIAbIgBADIguBuIAAARIguAAIAAj1IAuAAIAABsIgBAQQgBAOgCAKIABAAIAGgRIAyh4IAAgLIAuAAIAAD1g");
	this.shape_16.setTransform(-17.8,35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0095D0").s().p("AAfB7IgJg1IgwAAIgKA1IgtAAIA4j1IA0AAIA3D1gAgVAdIAlAAIgRhYIgBgRg");
	this.shape_17.setTransform(-34.8,35.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0095D0").s().p("AhFB7IAAj1IBPABQAJABAIACQAIACAHAFQAHAFAGAIQAHAJAFAQQADAOAAAOIgDAcIgGAQQgCAGgGAFQgFAIgIAFQgLAFgFABIgQACIgcABIAABbgAgUgKIAMAAIAIAAQAFgBAFgFQACgCADgIQADgJAAgOIgCgNQAAgHgGgHQgEgEgFgCIgVgBg");
	this.shape_18.setTransform(-50.1,35.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0095D0").s().p("Ag+B7IAAj1IB8AAIAAArIhKAAIAADKg");
	this.shape_19.setTransform(-65.6,35.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0095D0").s().p("AAbB7IAAh8IADghIgBAAIgJAeIgtBuIAAARIgvAAIAAj1IAvAAIgBB8QgBALgEANIACAAIA4iJIAAgLIAuAAIAAD1g");
	this.shape_20.setTransform(-83,35.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AweC5IAAlxMAg9AAAIAAFxg");
	this.shape_21.setTransform(0,34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkARQgPgHgKgKQgGgGgGgLIgEgHICbAAIgDAHQgHALgGAGQgJAKgQAHQgPAIgWAAQgVAAgPgIg");
	this.shape_22.setTransform(86.5,-43);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAoC4IAAjGIAFgkIgBAAIgOAtIhFCkIAAAZIhGAAIAAlvIBGAAIgCC6QAAARgFATIABAAIBVjOIAAgQIBGAAIAAFvg");
	this.shape_23.setTransform(86.7,-19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAvC4IgPhPIhIAAIgPBPIhDAAIBUlvIBOAAIBTFvgAggAtIA4AAIgVhhQgDgWgCgPIgCgZg");
	this.shape_24.setTransform(61.1,-19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABKC4IADlAIgIA9Ig0EDIgvAAIgujnIgMhZIADFAIg8AAIAAlvIBoAAIAcCbIALBoQACgoAEgaIApjBIBlAAIAAFvg");
	this.shape_25.setTransform(32,-19.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTC9QgMgCgKgFQgLgEgMgKQgKgHgLgQQgEgFgGgNQgEgIgGgUQgEgRgDgYQgDgUAAgmQAAgkADgUQADgXAEgSQAGgUAEgIIAKgTQALgQAKgHQALgJAMgFQAKgEAMgCIATgCIAUACQAMACAKAEQAMAFALAJQAKAIALAPIAKATQAEAJAFATQAFASADAXQADAZAAAfQAAAigDAYQgDAYgFARQgFASgEAKQgGANgEAFQgKAPgLAIQgLAKgMAEQgKAFgMACIgUABgAgOh3QgFAFgEAEIgFANQgDALgBAKIgCB6IACAfQABAMADAJQACAHADAGQAEAFAFAEQAFAEAJAAQAJAAAGgEQAFgEAEgFQADgGACgHQADgKABgLIACgfIAAhaIgCggQgBgKgDgLIgFgNQgEgEgFgFQgGgEgJAAQgJAAgFAEg");
	this.shape_26.setTransform(1.2,-19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdC4IAAifIg5AAIAACfIhLAAIAAlvIBLAAIAACQIA5AAIAAiQIBLAAIAAFvg");
	this.shape_27.setTransform(-25.4,-19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAoC4IAAjGIAFgkIgBAAIgMAoIhHCpIAAAZIhGAAIAAlvIBGAAIAACiIgBAYQgCASgEASIACAAQAEgOAEgMIBMi0IAAgQIBGAAIAAFvg");
	this.shape_28.setTransform(-52.4,-19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABRC6QgKgBgGgCQgIgDgHgGQgIgGgFgJQgHgOgCgSIgFg1IgDgYQgDgLgFgGQgGgHgIgDIgPgBIgYAAIAACiIhLAAIAAlvIBLAAIAACRIAYAAQAJAAAHgDIAIgGQADgDACgFIACgGIAIhCQABgMAEgIQACgIAGgJQAGgJAHgEQAJgGALgCIAWgBIALAAQAEAAAGADIAAA6IgFAAQgEAAgFADQgGAEgCAQIgHAqQgBAJgEAIQgDAJgHAHQgFAFgHAEQgFAEgKACIAAACQAOABAKAIQALAGAHANQAGAKACAPIAIA7IABAHIACAFQAGAJAKgCIAAA/QgGADgEAAIgLAAg");
	this.shape_29.setTransform(-78.7,-19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3937").s().p("AweFFIAAqJMAg9AAAIAAKJg");
	this.shape_30.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-55.5,211,111);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA838").s().p("Ayv29MAlfAAAMAAAApPMglfAEsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-147,240,294);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA838").s().p("Ayv29MAlfAAAMAAAApPMglfAEsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-146.9,240,294);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBTIgJgCQgFgCgEgFIgJgKIgFgLIgEgPIgDgbIgRAAIAABHIggAAIAAijIAgAAIAABAIARAAIAEgZIAEgMIAEgJQAFgIAIgHQAJgFAPgBIAIABIAKADIAJAGQAEAEAFAHQAGAJAEAOQADASAAAWIgDApIgFAOIgFAJIgJAKQgEAFgFACIgKACIgIABgAATg1QgDABgCADQgCAEgBADIgCAKIAABAQABAMAEAFQACADADACIAGABQADAAACgBIAFgFIACgEIABgJIABgOIgBg5IgBgJIgCgFIgFgDIgFgCg");
	this.shape.setTransform(80.1,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBSIAAhXIACgRIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhcIAAgHIAfAAIAACjg");
	this.shape_1.setTransform(65.2,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBSIgFgBIAAgcIAHAAQAEgBADgCQAFgDABgFIACgKIAAgDIACgJIADhmIBQAAIAACjIghAAIAAiGIgVAAIgBA2QAAAUgEAXQgDARgHAKQgEAFgHAEQgGADgLAAg");
	this.shape_2.setTransform(52.4,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBSIgHgjIgfAAIgHAjIgdAAIAlijIAhAAIAmCjgAgOAUIAZAAIgMg7IAAgLg");
	this.shape_3.setTransform(41.6,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBSIAAiEIgaAAIAAgfIBXAAIAAAfIgbAAIAACEg");
	this.shape_4.setTransform(32,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBSIAAhXIACgRIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAEgMIAhhQIAAgHIAfAAIAACjg");
	this.shape_5.setTransform(21.5,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBSIAAijIBBABIAKAEQAFACAEAFQAGAFACAIQACAHAAAKQAAAHgBAHQgCAIgCADIgEAFQgEAEgHADQAGACAEACIAIAGQAEAHABAIQACAHAAAIQAAAIgCAGQgBAGgEAHQgGAHgEADQgFAEgFABIgLACgAgRA2IAOAAIAHAAQAEgBAEgEQACgCABgGIABgIQAAgGgCgGQgBgDgEgEQgFgDgCAAIgTAAgAgRgPIANAAQAEAAAEgBIAFgEQACgDABgEIABgHIgBgJQgCgEgCgDQgDgDgEgBIgFgBIgNAAg");
	this.shape_6.setTransform(4.3,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBQIAAgbIAGABIANgBIAGgCQADgCACgEIACgEIABgDIgsh4IAlAAIASBBIADANIAAAAIACgLIARhDIAcAAIgoCNQgDAJgGAGQgFAFgHACQgJACgGAAQgJAAgJgDg");
	this.shape_7.setTransform(-12.7,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBTIgHgCIgHgDIgFgHQgEgHgBgHIgCgYQAAgGgBgFQgBgEgDgDQgCgDgDgBIgHgBIgLAAIAABIIghAAIAAijIAhAAIAABBIALAAQAEAAADgCIADgCIACgEIABgDIAEgdIACgJIADgHQADgDADgDQAEgCAFgBIAKgBIAFAAIAEABIAAAaIgCAAIgEACQgDABgBAHIgCATIgCAIQgCAEgEADIgEAEIgHACIAAABQAHABAEADQAEACAEAGQACAEABAHIAEAeIABACQACAEAFgBIAAAcQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_8.setTransform(-23.4,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBkIAAgkIhIAAIAAAkIgeAAIAAhAIAMAAQAHgKACgHIAKgkIAFhSIBOAAIAACGIAQAAIAABBgAgHgJQgBAJgEANQgDAKgGAMIAlAAIAAhpIgSAAg");
	this.shape_9.setTransform(-36.6,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBSQgIgDgIgIQgEgGgEgKQgCgHgCgKIAegGIABAIIADAIIADAFQACACAGAAQAHgBADgEQADgDAAgEIACgIIgCgJQAAgEgDgEQgCgDgFgDQgDgCgGAAIgKAAIAAgaIARAAQAFgCACgEQAEgEAAgEIAAgIIAAgGQAAgDgCgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDgCgDAAQgDAAgDACIgFAEIgCAHIgCAHIgcgEQAAgJAFgKQADgJAHgHQAEgEAIgDQAHgEANAAQALABAHADIALAGQAGAFADAHQADAHAAAMQAAAJgCAHQgBAGgEAGIgGAHQgFADgHABIAAAAIAIADIAGABIAGAEQAFAHACAHIACAOIAAAIIgDAMQAAAFgDAGQgDAGgFAEQgFAFgIADQgKAEgLgBQgLAAgIgCg");
	this.shape_10.setTransform(-48.7,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBSIAAijIBTAAIAAAdIgyAAIAAAmIAnAAIAAAaIgnAAIAAApIAyAAIAAAdg");
	this.shape_11.setTransform(-58.5,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHBTIgKgCQgFgCgGgFIgJgKIgEgIIgFgMIgDgTQgBgLAAgOQAAgOABgLIADgSIAFgMIAEgIQAFgHAEgEIALgGIAKgDIAIgBIAJABQAEAAAGADIAKAGQAEADAFAIIAEAIIAFAMIADASIAAAyQgBAMgCAHIgJAUQgFAIgEACQgGAFgEACQgGACgEAAIgJABgAgFg0IgEADIgDAGIgBAJIgBA2IACAYIADAFIAEAEQACACAEAAQAEAAACgCIAEgEIACgFIACgKIAAhEIgCgJIgCgGIgEgDQgDgCgDAAQgDAAgDACg");
	this.shape_12.setTransform(-70,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANBSIAAiGIgaAAIAACGIghAAIAAijIBdAAIAACjg");
	this.shape_13.setTransform(-81.8,31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAGQgGgDgFgEIgFgHIBBAAIgGAHQgEAEgHADQgGADgKAAQgJAAgHgDg");
	this.shape_14.setTransform(36.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASBSIAAhSIACgWIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhbIAAgIIAfAAIAACjg");
	this.shape_15.setTransform(36.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBSIgHgkIgfAAIgHAkIgeAAIAmijIAiAAIAlCjgAgOAUIAZAAIgLg7IgBgLg");
	this.shape_16.setTransform(24.9,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguBSIAAijIA1ABIALABQAGACAEADIAJAJQAFAGACAKQADAMAAAHIgBAJIgCALIgDAKQgBACgEAFQgFAGgFADIgKADIgTACIgKAAIAAA9gAgNgHIANAAQAEAAADgDQACgCABgFQACgFAAgKIgBgJQAAgFgEgEQgDgEgDAAIgOgBg");
	this.shape_17.setTransform(14.7,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBSIAAijIBTAAIAAAdIgxAAIAACGg");
	this.shape_18.setTransform(4.3,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASBSIAAhSIACgWIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhbIAAgIIAfAAIAACjg");
	this.shape_19.setTransform(-7.3,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAkBSIAAijIAhAAIAACjgAhEBSIAAijIAhAAIAABBIAVAAQAGAAAEABQAEABADADIAHADIADAEIAFAIIAEAKIACALIABAKQAAALgEAKQgDAKgHAHIgIAFIgHACIgJABIgIABgAgjA2IAJAAIAJgBQADgBACgCQADgDABgFIABgIIgBgLQgBgFgCgDIgBgBIgDgCIgEgCIgQAAg");
	this.shape_20.setTransform(-21.5,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxhRIBCACIAKADQAEADAFADQAEAHADAIQACAIABAJQgBAGgBAHQgCAGgDAFIgDAFQgDADgIAEQAHACAEABQAEAEACAEQAEAFACAIIACAPIgCAPQgBAHgFAGQgDAGgGADQgEAEgGACIgLABIg9ABgAgQA2IAMAAIAIAAQAEgCADgDQADgCABgFIABgJQAAgIgCgEQgCgFgCgCQgEgDgEAAIgSgBgAgQgPIALAAQAGAAACgBIAGgEQACgDABgEIAAgHIgBgJQgBgFgCgCQgDgDgEgBIgRAAg");
	this.shape_21.setTransform(-35.1,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0095D0").s().p("AgTBFQgIgEgEgHQgFgGgCgHIgCgNIAZgFQABAKADAFQADAFAIAAQAFAAAEgFQADgFAAgNQAAgIgCgFQgBgFgCgCQgCgCgCgBIgDAAIgEAAIgEACIgEADQgBACgBAEIgVgFIAFhPIBBAAIgDAbIgpAAIgCAfIAFgEIAEgDIADgCIAGgBQAFAAAGACQAFACAGAFQAFAFADAJQAEANAAAJQAAAOgDAKQgEAKgFAGQgGAGgIADQgHADgIAAQgLAAgIgEg");
	this.shape_22.setTransform(71.2,-22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0095D0").s().p("AgUBFQgHgEgFgGQgFgIgCgHIgBgMIAZgFIABAJIACAHIAFAEIAHABIACAAQADgBACgCIAEgGIAAgKQAAgIgCgEQgDgEgDgBQgDgDgCAAIgFAAIgGAAIAAgWIAGAAIAHAAQABgBADgCQACgBACgFQABgEAAgIIgBgHIgCgFIgEgCIgDAAQgDgBgCACIgDAEIgDAFIgBAHIgYgGQABgLAFgIQAFgHAFgDQAGgFAGgBIAKgCIALACQAHABAFAEQAGAEAEAHQADAIABAMQgBAMgDAJQgEAJgKADIAHADQAEACADAEQADADACAHQACAGAAAJQAAAMgEAIQgEAJgFAFQgHAFgHACQgHADgHAAQgMgBgIgFg");
	this.shape_23.setTransform(61.4,-22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0095D0").s().p("AgNA1IAAgfIAbAAIAAAfgAgNgVIAAgfIAbAAIAAAfg");
	this.shape_24.setTransform(54,-20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0095D0").s().p("AgOBIQgHgBgGgEQgGgEgEgIQgEgGAAgMQAAgHABgFQACgFADgEIAGgIIAJgHQgFgCgDgEIgFgJIgDgKIgBgIQAAgKADgIQADgHAFgGQAGgFAGgDQAIgDAHAAQAKABAHADQAIADAEAFQAFAFACAHQACAGAAAGQgBALgEAIQgFAHgJAFQAFADAEAEQAFADACAEQADAFABAGIACANQAAAKgDAHIgGAMQgEAFgFADIgKAEIgJACIgGABQgGgBgHgCgAgKASIgDAGIgBAFIAAAEQAAAHABADQACAEADADIAEABIAEABQADAAADgBIAFgFIACgGIAAgGQAAgJgEgEQgEgGgJgDIgGAGgAgEgzIgDAEIgCAGIgBAEIACAGIACAFIAEAGQACADADAAQAFgEADgEQACgEAAgHQgBgFgBgEIgCgEIgEgDIgEgBQgCAAgDACg");
	this.shape_25.setTransform(46.5,-22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0095D0").s().p("AgrBIIAAiPIAnAAIAJAAIAJABIAJADQAEACAEAEQAEAFADAHQACAHAAAIIgBAMQgCAGgCAEIgEAEQgDADgGADIAJADQAEADACADQAEAFABAHQACAIAAAGQAAAHgBAFQgCAGgEAHQgDAFgFADIgJAEIgKABIgKABgAgPAwIAMAAIAGgBQAEAAADgEQACgDABgEIABgIQAAgFgCgFQgBgEgDgCQgDgDgDAAIgGAAIgLAAgAgPgNIALAAQAEAAADgBQADgCACgCQACgCAAgEIABgGIgBgIQgBgDgCgDQgDgCgDgBIgFgBIgLAAg");
	this.shape_26.setTransform(31.2,-22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0095D0").s().p("AgSBEQgIgGgGgKQgEgKgCgOQgBgNAAgPQAAgWADgPQAFgPAGgHQAHgIAHgEQAHgDAGAAQAGAAAGACQAGACAGAEQAFAEAEAHQAEAHACALIgYAIIAAgHIgDgHIgEgFQgDgCgFAAQgEAAgEADQgDADAAAGQgCAGAAAJIgBASQACgFADgCIAGgFIAEgCIAFAAQAIAAAHAEQAFAEAFAHQADAFACAIQACAJABAIIgBAJIgCAKQgBAGgDAFQgDAFgEAEQgFAEgGADQgGADgJAAQgMAAgHgHgAgGAFIgDAGIgBAIIgBAJIABAIIABAIQABADACADQADABADAAQAEAAADgBIACgFIACgGIABgIIgBgKIgBgJQgBgEgCgDQgDgCgEAAQgEAAgCACg");
	this.shape_27.setTransform(15.4,-22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBQACgBABgFIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_28.setTransform(5.5,-22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0095D0").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape_29.setTransform(-2,-17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0095D0").s().p("AgnBJIAAgcIASgTQAJgJAHgKQAGgIAEgKQAEgKAAgLIAAgEIgBgFQgBgCgCgCQgCgCgDAAQgHAAgDAHQgDAGgBAPIgZgGQABgQAEgJQAFgJAGgFQAGgFAHgCIALgBIAFAAIAIACIAJAEQAFADADAEQAEAFACAGQACAHAAAJQAAAMgDAKQgEAKgGAIQgHAJgJAJIgTAUIAxAAIgBAbg");
	this.shape_30.setTransform(-9.5,-22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBQACgBABgFIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_31.setTransform(-19.2,-22.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0095D0").s().p("AgiALIAAgVIBFAAIAAAVg");
	this.shape_32.setTransform(-28.6,-20.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0095D0").s().p("AgTBFQgIgEgEgHQgFgGgCgHIgCgNIAZgFQABAKADAFQADAFAIAAQAFAAAEgFQADgFAAgNQAAgIgCgFQgBgFgCgCQgCgCgCgBIgDAAIgEAAIgEACIgEADQgBACgBAEIgVgFIAFhPIBBAAIgDAbIgpAAIgCAfIAFgEIAEgDIADgCIAGgBQAFAAAGACQAFACAGAFQAFAFADAJQAEANAAAJQAAAOgDAKQgEAKgFAGQgGAGgIADQgHADgIAAQgLAAgIgEg");
	this.shape_33.setTransform(-37.9,-22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBIADgGIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_34.setTransform(-47.6,-22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0095D0").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape_35.setTransform(-55.2,-17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0095D0").s().p("AgQBIQgGgCgFgEQgJgKgCgRIAYgFIADAJIADAGIAEACIADAAIAEgBQADgBACgEQACgDACgHIABgQIAAgGIAAgIQgEAHgEADQgFAEgHgBIgIgBQgFgBgGgEQgFgFgEgHIgEgLIgBgOQAAgKADgJQACgJAFgGQAFgHAIgEQAHgEAKAAQAFABAIACQAHACAGAIQAHAHAEAPQAEANAAAYQAAAMgCAOQgBAOgFALQgFALgIAIQgJAGgNABQgIAAgGgDgAgHgvQgDADgBAEIgBAIIAAAGQAAANADAEQADAFAGAAIADgBQACgBACgCIAEgHQACgFAAgJQAAgJgEgHQgDgFgGAAQgEAAgDADg");
	this.shape_36.setTransform(-62.8,-22.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0095D0").s().p("AgnBJIAAgcIASgTQAJgJAHgKQAGgIAEgKQAEgKAAgLIAAgEIgBgFQgBgCgCgCQgCgCgDAAQgHAAgDAHQgDAGgBAPIgZgGQABgQAEgJQAFgJAGgFQAGgFAHgCIALgBIAFAAIAIACIAJAEQAFADADAEQAEAFACAGQACAHAAAJQAAAMgDAKQgEAKgGAIQgHAJgJAJIgTAUIAxAAIgBAbg");
	this.shape_37.setTransform(-72.4,-22.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3937").s().p("AxuEJIAAoRMAjdAAAIAAIRg");
	this.shape_38.setTransform(0.5,21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AyvKoIAAwjMAlfgEsIAAVPgAytl5IAAQfMAlaAAAIAA1Lg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AyvKoIAAwjMAlfgEsIAAVPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-68,240,136);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBTIgJgCQgFgCgEgFIgJgKIgFgLIgEgPIgDgbIgRAAIAABHIggAAIAAijIAgAAIAABAIARAAIAEgZIAEgMIAEgJQAFgIAIgHQAJgFAPgBIAIABIAKADIAJAGQAEAEAFAHQAGAJAEAOQADASAAAWIgDApIgFAOIgFAJIgJAKQgEAFgFACIgKACIgIABgAATg1QgDABgCADQgCAEgBADIgCAKIAABAQABAMAEAFQACADADACIAGABQADAAACgBIAFgFIACgEIABgJIABgOIgBg5IgBgJIgCgFIgFgDIgFgCg");
	this.shape.setTransform(80.1,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBSIAAhXIACgRIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhcIAAgHIAfAAIAACjg");
	this.shape_1.setTransform(65.2,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBSIgFgBIAAgcIAHAAQAEgBADgCQAFgDABgFIACgKIAAgDIACgJIADhmIBQAAIAACjIghAAIAAiGIgVAAIgBA2QAAAUgEAXQgDARgHAKQgEAFgHAEQgGADgLAAg");
	this.shape_2.setTransform(52.4,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBSIgHgjIgfAAIgHAjIgdAAIAlijIAhAAIAmCjgAgOAUIAZAAIgMg7IAAgLg");
	this.shape_3.setTransform(41.6,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBSIAAiEIgaAAIAAgfIBXAAIAAAfIgbAAIAACEg");
	this.shape_4.setTransform(32,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBSIAAhXIACgRIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAEgMIAhhQIAAgHIAfAAIAACjg");
	this.shape_5.setTransform(21.5,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBSIAAijIBBABIAKAEQAFACAEAFQAGAFACAIQACAHAAAKQAAAHgBAHQgCAIgCADIgEAFQgEAEgHADQAGACAEACIAIAGQAEAHABAIQACAHAAAIQAAAIgCAGQgBAGgEAHQgGAHgEADQgFAEgFABIgLACgAgRA2IAOAAIAHAAQAEgBAEgEQACgCABgGIABgIQAAgGgCgGQgBgDgEgEQgFgDgCAAIgTAAgAgRgPIANAAQAEAAAEgBIAFgEQACgDABgEIABgHIgBgJQgCgEgCgDQgDgDgEgBIgFgBIgNAAg");
	this.shape_6.setTransform(4.3,31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBQIAAgbIAGABIANgBIAGgCQADgCACgEIACgEIABgDIgsh4IAlAAIASBBIADANIAAAAIACgLIARhDIAcAAIgoCNQgDAJgGAGQgFAFgHACQgJACgGAAQgJAAgJgDg");
	this.shape_7.setTransform(-12.7,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBTIgHgCIgHgDIgFgHQgEgHgBgHIgCgYQAAgGgBgFQgBgEgDgDQgCgDgDgBIgHgBIgLAAIAABIIghAAIAAijIAhAAIAABBIALAAQAEAAADgCIADgCIACgEIABgDIAEgdIACgJIADgHQADgDADgDQAEgCAFgBIAKgBIAFAAIAEABIAAAaIgCAAIgEACQgDABgBAHIgCATIgCAIQgCAEgEADIgEAEIgHACIAAABQAHABAEADQAEACAEAGQACAEABAHIAEAeIABACQACAEAFgBIAAAcQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_8.setTransform(-23.4,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBkIAAgkIhIAAIAAAkIgeAAIAAhAIAMAAQAHgKACgHIAKgkIAFhSIBOAAIAACGIAQAAIAABBgAgHgJQgBAJgEANQgDAKgGAMIAlAAIAAhpIgSAAg");
	this.shape_9.setTransform(-36.6,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBSQgIgDgIgIQgEgGgEgKQgCgHgCgKIAegGIABAIIADAIIADAFQACACAGAAQAHgBADgEQADgDAAgEIACgIIgCgJQAAgEgDgEQgCgDgFgDQgDgCgGAAIgKAAIAAgaIARAAQAFgCACgEQAEgEAAgEIAAgIIAAgGQAAgDgCgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDgCgDAAQgDAAgDACIgFAEIgCAHIgCAHIgcgEQAAgJAFgKQADgJAHgHQAEgEAIgDQAHgEANAAQALABAHADIALAGQAGAFADAHQADAHAAAMQAAAJgCAHQgBAGgEAGIgGAHQgFADgHABIAAAAIAIADIAGABIAGAEQAFAHACAHIACAOIAAAIIgDAMQAAAFgDAGQgDAGgFAEQgFAFgIADQgKAEgLgBQgLAAgIgCg");
	this.shape_10.setTransform(-48.7,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBSIAAijIBTAAIAAAdIgyAAIAAAmIAnAAIAAAaIgnAAIAAApIAyAAIAAAdg");
	this.shape_11.setTransform(-58.5,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHBTIgKgCQgFgCgGgFIgJgKIgEgIIgFgMIgDgTQgBgLAAgOQAAgOABgLIADgSIAFgMIAEgIQAFgHAEgEIALgGIAKgDIAIgBIAJABQAEAAAGADIAKAGQAEADAFAIIAEAIIAFAMIADASIAAAyQgBAMgCAHIgJAUQgFAIgEACQgGAFgEACQgGACgEAAIgJABgAgFg0IgEADIgDAGIgBAJIgBA2IACAYIADAFIAEAEQACACAEAAQAEAAACgCIAEgEIACgFIACgKIAAhEIgCgJIgCgGIgEgDQgDgCgDAAQgDAAgDACg");
	this.shape_12.setTransform(-70,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANBSIAAiGIgaAAIAACGIghAAIAAijIBdAAIAACjg");
	this.shape_13.setTransform(-81.8,31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAGQgGgDgFgEIgFgHIBBAAIgGAHQgEAEgHADQgGADgKAAQgJAAgHgDg");
	this.shape_14.setTransform(36.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASBSIAAhSIACgWIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhbIAAgIIAfAAIAACjg");
	this.shape_15.setTransform(36.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBSIgHgkIgfAAIgHAkIgeAAIAmijIAiAAIAlCjgAgOAUIAZAAIgLg7IgBgLg");
	this.shape_16.setTransform(24.9,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguBSIAAijIA1ABIALABQAGACAEADIAJAJQAFAGACAKQADAMAAAHIgBAJIgCALIgDAKQgBACgEAFQgFAGgFADIgKADIgTACIgKAAIAAA9gAgNgHIANAAQAEAAADgDQACgCABgFQACgFAAgKIgBgJQAAgFgEgEQgDgEgDAAIgOgBg");
	this.shape_17.setTransform(14.7,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBSIAAijIBTAAIAAAdIgxAAIAACGg");
	this.shape_18.setTransform(4.3,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASBSIAAhSIACgWIAAAAIgGASIgBACIgeBJIAAALIgfAAIAAijIAfAAIAABSIgDARIABAAIAlhbIAAgIIAfAAIAACjg");
	this.shape_19.setTransform(-7.3,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAkBSIAAijIAhAAIAACjgAhEBSIAAijIAhAAIAABBIAVAAQAGAAAEABQAEABADADIAHADIADAEIAFAIIAEAKIACALIABAKQAAALgEAKQgDAKgHAHIgIAFIgHACIgJABIgIABgAgjA2IAJAAIAJgBQADgBACgCQADgDABgFIABgIIgBgLQgBgFgCgDIgBgBIgDgCIgEgCIgQAAg");
	this.shape_20.setTransform(-21.5,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxhRIBCACIAKADQAEADAFADQAEAHADAIQACAIABAJQgBAGgBAHQgCAGgDAFIgDAFQgDADgIAEQAHACAEABQAEAEACAEQAEAFACAIIACAPIgCAPQgBAHgFAGQgDAGgGADQgEAEgGACIgLABIg9ABgAgQA2IAMAAIAIAAQAEgCADgDQADgCABgFIABgJQAAgIgCgEQgCgFgCgCQgEgDgEAAIgSgBgAgQgPIALAAQAGAAACgBIAGgEQACgDABgEIAAgHIgBgJQgBgFgCgCQgDgDgEgBIgRAAg");
	this.shape_21.setTransform(-35.1,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0095D0").s().p("AgTBFQgIgEgEgHQgFgGgCgHIgCgNIAZgFQABAKADAFQADAFAIAAQAFAAAEgFQADgFAAgNQAAgIgCgFQgBgFgCgCQgCgCgCgBIgDAAIgEAAIgEACIgEADQgBACgBAEIgVgFIAFhPIBBAAIgDAbIgpAAIgCAfIAFgEIAEgDIADgCIAGgBQAFAAAGACQAFACAGAFQAFAFADAJQAEANAAAJQAAAOgDAKQgEAKgFAGQgGAGgIADQgHADgIAAQgLAAgIgEg");
	this.shape_22.setTransform(71.2,-22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0095D0").s().p("AgUBFQgHgEgFgGQgFgIgCgHIgBgMIAZgFIABAJIACAHIAFAEIAHABIACAAQADgBACgCIAEgGIAAgKQAAgIgCgEQgDgEgDgBQgDgDgCAAIgFAAIgGAAIAAgWIAGAAIAHAAQABgBADgCQACgBACgFQABgEAAgIIgBgHIgCgFIgEgCIgDAAQgDgBgCACIgDAEIgDAFIgBAHIgYgGQABgLAFgIQAFgHAFgDQAGgFAGgBIAKgCIALACQAHABAFAEQAGAEAEAHQADAIABAMQgBAMgDAJQgEAJgKADIAHADQAEACADAEQADADACAHQACAGAAAJQAAAMgEAIQgEAJgFAFQgHAFgHACQgHADgHAAQgMgBgIgFg");
	this.shape_23.setTransform(61.4,-22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0095D0").s().p("AgNA1IAAgfIAbAAIAAAfgAgNgVIAAgfIAbAAIAAAfg");
	this.shape_24.setTransform(54,-20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0095D0").s().p("AgOBIQgHgBgGgEQgGgEgEgIQgEgGAAgMQAAgHABgFQACgFADgEIAGgIIAJgHQgFgCgDgEIgFgJIgDgKIgBgIQAAgKADgIQADgHAFgGQAGgFAGgDQAIgDAHAAQAKABAHADQAIADAEAFQAFAFACAHQACAGAAAGQgBALgEAIQgFAHgJAFQAFADAEAEQAFADACAEQADAFABAGIACANQAAAKgDAHIgGAMQgEAFgFADIgKAEIgJACIgGABQgGgBgHgCgAgKASIgDAGIgBAFIAAAEQAAAHABADQACAEADADIAEABIAEABQADAAADgBIAFgFIACgGIAAgGQAAgJgEgEQgEgGgJgDIgGAGgAgEgzIgDAEIgCAGIgBAEIACAGIACAFIAEAGQACADADAAQAFgEADgEQACgEAAgHQgBgFgBgEIgCgEIgEgDIgEgBQgCAAgDACg");
	this.shape_25.setTransform(46.5,-22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0095D0").s().p("AgrBIIAAiPIAnAAIAJAAIAJABIAJADQAEACAEAEQAEAFADAHQACAHAAAIIgBAMQgCAGgCAEIgEAEQgDADgGADIAJADQAEADACADQAEAFABAHQACAIAAAGQAAAHgBAFQgCAGgEAHQgDAFgFADIgJAEIgKABIgKABgAgPAwIAMAAIAGgBQAEAAADgEQACgDABgEIABgIQAAgFgCgFQgBgEgDgCQgDgDgDAAIgGAAIgLAAgAgPgNIALAAQAEAAADgBQADgCACgCQACgCAAgEIABgGIgBgIQgBgDgCgDQgDgCgDgBIgFgBIgLAAg");
	this.shape_26.setTransform(31.2,-22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0095D0").s().p("AgSBEQgIgGgGgKQgEgKgCgOQgBgNAAgPQAAgWADgPQAFgPAGgHQAHgIAHgEQAHgDAGAAQAGAAAGACQAGACAGAEQAFAEAEAHQAEAHACALIgYAIIAAgHIgDgHIgEgFQgDgCgFAAQgEAAgEADQgDADAAAGQgCAGAAAJIgBASQACgFADgCIAGgFIAEgCIAFAAQAIAAAHAEQAFAEAFAHQADAFACAIQACAJABAIIgBAJIgCAKQgBAGgDAFQgDAFgEAEQgFAEgGADQgGADgJAAQgMAAgHgHgAgGAFIgDAGIgBAIIgBAJIABAIIABAIQABADACADQADABADAAQAEAAADgBIACgFIACgGIABgIIgBgKIgBgJQgBgEgCgDQgDgCgEAAQgEAAgCACg");
	this.shape_27.setTransform(15.4,-22.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBQACgBABgFIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_28.setTransform(5.5,-22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0095D0").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape_29.setTransform(-2,-17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0095D0").s().p("AgnBJIAAgcIASgTQAJgJAHgKQAGgIAEgKQAEgKAAgLIAAgEIgBgFQgBgCgCgCQgCgCgDAAQgHAAgDAHQgDAGgBAPIgZgGQABgQAEgJQAFgJAGgFQAGgFAHgCIALgBIAFAAIAIACIAJAEQAFADADAEQAEAFACAGQACAHAAAJQAAAMgDAKQgEAKgGAIQgHAJgJAJIgTAUIAxAAIgBAbg");
	this.shape_30.setTransform(-9.5,-22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBQACgBABgFIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_31.setTransform(-19.2,-22.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0095D0").s().p("AgiALIAAgVIBFAAIAAAVg");
	this.shape_32.setTransform(-28.6,-20.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0095D0").s().p("AgTBFQgIgEgEgHQgFgGgCgHIgCgNIAZgFQABAKADAFQADAFAIAAQAFAAAEgFQADgFAAgNQAAgIgCgFQgBgFgCgCQgCgCgCgBIgDAAIgEAAIgEACIgEADQgBACgBAEIgVgFIAFhPIBBAAIgDAbIgpAAIgCAfIAFgEIAEgDIADgCIAGgBQAFAAAGACQAFACAGAFQAFAFADAJQAEANAAAJQAAAOgDAKQgEAKgFAGQgGAGgIADQgHADgIAAQgLAAgIgEg");
	this.shape_33.setTransform(-37.9,-22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0095D0").s().p("AgMBIQgFgBgEgDQgIgGgEgLQgFgKgBgOIgBgbIABgYQABgNAEgLIAFgKIAIgIQAEgEAFgCQAGgCAGAAQAGABAFABQAGABAEAEIAHAHQADAEACAFQAFAKACANQABAOAAAOQAAAPgBANQgCAOgFAKQgEAKgJAHQgIAFgMABQgHgBgFgCgAgFgwQgCADgBAGIgBAQIAAAXIAAAYIAAAQQABAGADADQACACADAAQADAAACgBIADgGIABgLIABgSIAAgIIAAgHIAAgKIAAgKIgBgRIgCgJIgDgEIgEAAQgDAAgCACg");
	this.shape_34.setTransform(-47.6,-22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0095D0").s().p("AgNAQIAAgfIAbAAIAAAfg");
	this.shape_35.setTransform(-55.2,-17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0095D0").s().p("AgQBIQgGgCgFgEQgJgKgCgRIAYgFIADAJIADAGIAEACIADAAIAEgBQADgBACgEQACgDACgHIABgQIAAgGIAAgIQgEAHgEADQgFAEgHgBIgIgBQgFgBgGgEQgFgFgEgHIgEgLIgBgOQAAgKADgJQACgJAFgGQAFgHAIgEQAHgEAKAAQAFABAIACQAHACAGAIQAHAHAEAPQAEANAAAYQAAAMgCAOQgBAOgFALQgFALgIAIQgJAGgNABQgIAAgGgDgAgHgvQgDADgBAEIgBAIIAAAGQAAANADAEQADAFAGAAIADgBQACgBACgCIAEgHQACgFAAgJQAAgJgEgHQgDgFgGAAQgEAAgDADg");
	this.shape_36.setTransform(-62.8,-22.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0095D0").s().p("AgnBJIAAgcIASgTQAJgJAHgKQAGgIAEgKQAEgKAAgLIAAgEIgBgFQgBgCgCgCQgCgCgDAAQgHAAgDAHQgDAGgBAPIgZgGQABgQAEgJQAFgJAGgFQAGgFAHgCIALgBIAFAAIAIACIAJAEQAFADADAEQAEAFACAGQACAHAAAJQAAAMgDAKQgEAKgGAIQgHAJgJAJIgTAUIAxAAIgBAbg");
	this.shape_37.setTransform(-72.4,-22.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3937").s().p("AxuEJIAAoRMAjdAAAIAAIRg");
	this.shape_38.setTransform(0.5,21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AyvKoIAAwjMAlfgEsIAAVPgAytl5IAAQfMAlaAAAIAA1Lg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AyvKoIAAwjMAlfgEsIAAVPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-68,240,136);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D16F1D").s().p("AgEAfIAAgNIAJAAIAAANgAgEgRIAAgNIAJAAIAAANg");
	this.shape.setTransform(80.5,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D16F1D").s().p("AgeAtIAAhZIA8AAIAAAIIg0AAIAAAgIAxAAIAAAGIgxAAIAAAjIA1AAIAAAIg");
	this.shape_1.setTransform(75.5,-9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D16F1D").s().p("AgDAtIAAhRIggAAIAAgIIBGAAIAAAIIgfAAIAABRg");
	this.shape_2.setTransform(67.8,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D16F1D").s().p("AAbA4IAAhPIgyBPIgLAAIAAhYIAIAAIAABQIAyhQIALAAIAABYgAgMgrQgEgDgCgKIAGAAQAAAGADACQAEADAFAAQAFAAADgDQAEgCABgGIAEAAQgBAJgEAEQgFAEgHAAQgIAAgEgEg");
	this.shape_3.setTransform(59.6,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16F1D").s().p("AAfAtIgLgcIgnAAIgLAcIgJAAIAkhZIAIAAIAjBZgAgRAKIAiAAIgRgtg");
	this.shape_4.setTransform(51,-9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D16F1D").s().p("AgPArQgIgEgFgHQgEgFgEgJQgDgJAAgJQAAgHADgKQAEgJAEgFQAFgHAIgEQAHgDAKAAQAHAAAGABIALAGQAEADAFAGQADAGAAAGIgIAAIgDgJIgHgHIgIgEQgFgBgFAAQgIAAgGADQgGADgEAGQgFAGgBAHQgCAGAAAHQAAAIACAGQABAIAFAFQAEAGAGADQAGADAIAAQAGAAAGgCQAFgDADgDQAEgEADgFQACgGAAgFIAIAAQAAAIgDAGQgDAIgFAEQgEAEgHADQgFACgKAAQgKAAgHgDg");
	this.shape_5.setTransform(42.7,-9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D16F1D").s().p("AAfAtIgLgcIgoAAIgKAcIgJAAIAkhZIAIAAIAjBZgAgRAKIAiAAIgRgtg");
	this.shape_6.setTransform(30.6,-9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D16F1D").s().p("AAaAtIAAgsIg0AAIAAAsIgIAAIAAhZIAIAAIAAAnIA0AAIAAgnIAJAAIAABZg");
	this.shape_7.setTransform(22.1,-9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D16F1D").s().p("AAbAtIAAhPIgyBPIgLAAIAAhZIAIAAIAABQIAyhQIALAAIAABZg");
	this.shape_8.setTransform(9.5,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D16F1D").s().p("AgDAtIAAhRIgfAAIAAgIIBFAAIAAAIIgfAAIAABRg");
	this.shape_9.setTransform(1.3,-9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D16F1D").s().p("AgPArQgIgEgFgHQgFgGgDgIQgDgIAAgKQAAgIADgJQADgIAFgGQAFgHAIgEQAHgDALAAQAGAAAGABIALAGQAEADAEAGQAEAGAAAGIgIAAQgBgEgDgFIgGgHIgIgEIgJgBQgIAAgHADQgGADgEAGQgEAGgCAHIgCANQAAAFACAJQACAIAEAFQAEAGAGADQAHADAIAAQAFAAAGgCQAEgCAEgEQAEgEACgFQADgGAAgFIAJAAQgBAHgDAHQgDAHgFAFQgGAFgFACQgFACgJAAQgLAAgHgDg");
	this.shape_10.setTransform(-6.5,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D16F1D").s().p("AgRArQgIgEgGgHQgEgFgEgJQgCgJAAgJQAAgHACgKQAEgJAEgFQAGgHAIgEQAHgDAKAAQALAAAIADQAHAEAFAHQAFAFADAJQADAKAAAHQAAAJgDAJQgDAJgFAFQgFAHgHAEQgIADgLAAQgKAAgHgDgAgOgjQgHADgDAGQgFAGgCAHQgBAGgBAHQABAIABAGQACAIAFAFQADAGAHADQAFADAJAAQAJAAAGgDQAHgDAEgGQAEgFABgIQACgGAAgIQAAgHgCgGQgBgHgEgGQgEgGgHgDQgGgDgJAAQgJAAgFADg");
	this.shape_11.setTransform(-15.8,-9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D16F1D").s().p("AAbAtIAAgsIg0AAIAAAsIgJAAIAAhZIAJAAIAAAnIA0AAIAAgnIAIAAIAABZg");
	this.shape_12.setTransform(-24.9,-9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D16F1D").s().p("AgiAtIAAhZIA+AAIAAAIIg1AAIAAAeIAhAAQAMAAAIAGQAGAHABAMQgBAMgGAHQgJAHgLAAgAgZAlIAfAAQAKAAAEgFQAGgEAAgJQAAgIgGgGQgFgFgJAAIgfAAg");
	this.shape_13.setTransform(-33.2,-9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D16F1D").s().p("AgSArQgHgEgFgHQgHgGgBgIQgDgHAAgLQAAgJADgIQABgIAHgGQAFgHAHgEQAIgDAKAAQALAAAHADQAIAEAGAHQAEAFAEAJQACAKAAAHQAAAJgCAJQgEAJgEAFQgGAHgIAEQgHADgLAAQgKAAgIgDgAgOgjQgHADgEAGQgEAGgBAHQgDAGAAAHQAAAIADAGQABAIAEAFQAEAGAHADQAGADAIAAQAJAAAGgDQAHgDADgGQAEgFADgIQABgGAAgIQAAgHgBgGQgDgHgEgGQgDgGgHgDQgGgDgJAAQgIAAgGADg");
	this.shape_14.setTransform(-42.3,-9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D16F1D").s().p("AggAtIAAhZIAmAAQAHAAAFACQAFACADADQADAEACAEQACAEAAAHQAAAGgCAFQgCAEgDADIgIAFIgMABIgeAAIAAAngAgYAAIAcAAQAKAAAFgEQAGgFAAgJQAAgJgGgFQgFgEgKAAIgcAAg");
	this.shape_15.setTransform(-50.8,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D16F1D").s().p("AAkA4IAAgXIhHAAIAAAXIgIAAIAAgeIAJAAQAFgJACgJIAEgRIACgSIAAgcIA2AAIAABRIALAAIAAAegAgOgKIgEASQgCAIgFAKIAyAAIAAhKIglAAg");
	this.shape_16.setTransform(-59.7,-8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D16F1D").s().p("AgRArQgIgEgGgHQgFgGgCgIQgDgIAAgKQAAgIADgJQACgIAFgGQAGgHAIgEQAHgDAKAAQALAAAHADQAJAEAFAHQAFAGACAIQADAJAAAIQAAAKgDAIQgCAIgFAGQgFAHgJAEQgHADgLAAQgKAAgHgDgAgOgjQgGADgFAGQgEAGgCAHIgCANQAAAFACAJQADAIADAFQAFAGAGADQAGADAIAAQAJAAAGgDQAGgDAFgGQADgFADgIQACgJAAgFIgCgNQgCgHgEgGQgFgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_17.setTransform(-68.5,-9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D16F1D").s().p("AAaAtIAAhRIgzAAIAABRIgJAAIAAhZIBFAAIAABZg");
	this.shape_18.setTransform(-77.6,-9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFBEIgIgBQgEgBgFgDQgEgCgDgEQgGgHgBgJQgCgJAAgOIAAhWIAbAAIABBfIABAHQABAFADACQADACAFAAIAGgBQADgBACgFQABgDAAgEIABhhIAXAAIAABUQAAAPgBAJQgCAJgEAGQgDAFgJAFQgIAEgLAAg");
	this.shape_19.setTransform(73.7,9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALBDIgPg0IgIAAIAAA0IgbAAIAAiGIAjAAIAIABQAGAAAEACQADAAAFADQAEACAEAFQAEAGACAHIACAPIgBAMQgCAHgDAFIgFAFIgHAGIAUA6gAgMgHIAIAAQAEAAADgCIAEgEQACgDABgDIAAgIIgBgIIgCgGQgEgDgCAAIgNgBg");
	this.shape_20.setTransform(64.4,9.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_21.setTransform(56.9,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNBEQgGgCgGgEIgGgHIgEgIIgEgOIAWgIIABAFIAEAJIACADQABABAEABIAFABIAEgBIAFgCIADgFIABgGIgBgGIgEgFQgCgCgFgDIgVgMQgEgCgFgGQgDgFgBgGQgCgGAAgGQAAgKAEgIQACgHAGgGQAGgFAGgCQAFgDAHAAIALACIAKAEQAGAEAEAGQAEAGACAJIgVAJIgDgJIgDgEIgFgCIgEgBIgDABIgEADQgCACgBACIAAAGIABAGQAAADADACIAHAFIAVAKQAEADAGAGQAEAHABAEIABALIgBAMIgDAKIgEAHIgEAFQgGAFgHACQgIADgHAAIgNgCg");
	this.shape_22.setTransform(50.1,9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFBEIgJgBIgIgEIgIgGQgEgFgDgLQgBgKAAgNIAAhWIAbAAIAABfIACAHQABAFADACQADACAEAAQAEAAADgBQACgBADgFIABgHIAAhhIAYAAIAABUQAAAQgCAIQgBAJgFAGQgDAFgIAFQgIAEgMAAg");
	this.shape_23.setTransform(40.9,9.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBDIAAiGIAcAAIAABuIAhAAIAAAYg");
	this.shape_24.setTransform(32.7,9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBDIAAiGIAiAAIAKABQAFAAAEACQADAAAFADIAHAHQAEAGADAIQACAIAAAHIgCARIgDAIIgEAGQgEAEgEACQgFAEgEAAQgDABgFABIgPAAIAAAxgAgKgFIAKgBQADAAADgCIADgGIABgMIgBgIQAAgEgDgEQgDgCgCAAIgLgBg");
	this.shape_25.setTransform(24.2,9.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARBDIgFgdIgaAAIgFAdIgZAAIAeiGIAdAAIAeCGgAgBgjIgKA0IATAAIgJg7g");
	this.shape_26.setTransform(14.7,9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBDIAAiGIAiAAIAKABQAFAAAEACQADAAAFADIAHAHQAEAGADAIIACAPIgCARIgDAIIgEAGQgEAEgEACQgFAEgEAAQgDABgFABIgPAAIAAAxgAgKgFIAKgBQADAAADgCQACgCAAgEQACgDAAgJIgBgIQAAgEgDgEQgDgCgCAAIgLgBg");
	this.shape_27.setTransform(6.4,9.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBFIgIgCIgIgFIgIgJIgDgHQgCgDgCgHIgDgPIAAgpIADgPIAEgLIADgGQAEgGAEgDIAIgFIAIgCIAHgBIAIABQAFABADABIAIAFQADADAEAGIAEAGIADALQACAGABAJIAAApQAAAJgDAGQgBAHgCADIgEAHIgHAJIgIAFIgIACIgIABgAgFgrIgCADIgCAFQgCADAAAEIgBAtIABALQAAAFACADIACAEQAAABAAAAQAAABABAAQAAABABAAQAAAAAAABQADABACAAQAEAAABgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBIACgEIACgTIAAghIgCgTIgCgFIgEgDQgBgCgEAAQgCAAgDACg");
	this.shape_28.setTransform(-3.5,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALBDIgPg0IgIAAIAAA0IgbAAIAAiGIAjAAIAIABQAFAAAFACQADAAAFADQAFACADAFQAEAGACAHIABAPIgBAMQgBAHgDAFIgGAFIgGAGIAUA6gAgMgHIAIAAQAFAAACgCIADgEQADgDAAgDIABgIIgBgIIgDgGQgCgDgDAAIgNgBg");
	this.shape_29.setTransform(-12.9,9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFBEIgIgBQgEgBgFgDQgEgCgDgEQgGgHgBgJQgCgJAAgOIAAhWIAbAAIABBfIABAHQACAFADACQACACAFAAQADAAADgBQADgBACgFQABgDAAgEIABhhIAXAAIAABUQAAAPgBAJQgCAJgEAGQgDAFgJAFQgIAEgLAAg");
	this.shape_30.setTransform(-23,9.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiBDIAAiGIBFAAIAAAYIgpAAIAAAgIAfAAIAAAVIgfAAIAAAiIApAAIAAAXg");
	this.shape_31.setTransform(-31.8,9.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_32.setTransform(-38.8,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPBDIgNhLIgCgUIgOBfIgYAAIgZiGIAdAAIAKBPIAAAUIABgMIAEgaIAKg9IAXAAIAMBGIADAdIABgaIAKhJIAYAAIgYCGg");
	this.shape_33.setTransform(-47.1,9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPBDIgNhLQgCgIAAgMIgOBfIgYAAIgZiGIAeAAIAKBjIABgMIADgaIAJg9IAYAAIAMBGIADAdIACggIAJhDIAYAAIgYCGg");
	this.shape_34.setTransform(-60.6,9.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAPBDIgNhLIgCgUIgOBfIgYAAIgZiGIAeAAIAKBjIAAgMIAOhXIAYAAIANBQIABATIALhjIAYAAIgYCGg");
	this.shape_35.setTransform(-74.2,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-16.3,162.1,32.7);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(-100.5,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_1.setTransform(-100.5,40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_2.setTransform(-100.5,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_3.setTransform(-100.5,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_4.setTransform(-100.5,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_5.setTransform(-100.5,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_6.setTransform(-100.5,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_7.setTransform(-100.5,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_8.setTransform(-100.5,-39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA838").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_9.setTransform(-100.5,-52.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0095D0").s().p("AgNB+IgOgFQgIgDgHgGQgIgGgGgJIgHgNQgDgFgDgOQgDgIgCgTQgCgOAAgYQAAgWACgPIAFgbQADgNADgGIAHgNQAGgJAIgGQAHgGAIgDIAOgEIANgBIAOABIAOAEQAIADAHAGQAIAGAGAJIAHANIAGATIAFAbQACAWAAAPQAAARgCAVQgCATgDAIQgCAJgEAKIgHANQgGAJgIAGQgHAGgIADIgOAFIgOAAgAgJhPIgGAHIgEAIIgCANIAABnIACANIAEAIIAGAHQAEACAFAAQAHAAADgCIAGgHIADgIQACgFABgIIABgWIgBhRQgBgGgCgHIgDgIIgGgHQgDgCgHAAQgFAAgEACg");
	this.shape_10.setTransform(88.6,35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0095D0").s().p("AATB7IAAhqIglAAIAABqIgyAAIAAj1IAyAAIAABhIAlAAIAAhhIAyAAIAAD1g");
	this.shape_11.setTransform(71,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0095D0").s().p("AAaB7IAAh8IAFghIgBAAIgFAOIgFAQIguBuIAAARIguAAIAAj1IAuAAIgBB8IgDAYIABAAIA3iJIAAgLIAvAAIAAD1g");
	this.shape_12.setTransform(53,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0095D0").s().p("ABAB9IgKgBQgFAAgGgDQgFgBgFgEQgEgEgEgGQgFgKgBgMIgEgjQAAgHgCgIQgCgIgDgEQgEgFgFgBIgagBIAABsIgyAAIAAj1IAyAAIAABhIAQAAQAHAAAEgCIAEgEIAEgFIABgFIAFgrIAEgOQACgGADgFQAGgGADgCQAGgFAIgBIAVgBIAHACIAAAnIgDAAQgDAAgDADQgEACgCAKIgCANIgCAPIgEAMQgCAFgEAGQgEADgEADIgKADIAAABQAHABAJAGQAIAEAEAIQAFAJAAAHIAGAtIABADQAEAGAHgBIAAAqIgHACg");
	this.shape_13.setTransform(35.5,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0095D0").s().p("AhKh6IBSAAIAQADQAJABAGADQAHAEAHAGQAHAJAEAMQADAMAAANQAAALgCAKQgCALgEAFIgGAHQgEAHgMADQAJAEAHADQAIAGACAEQAGAJADANQADAMAAAKQAAAKgDAMQgDAJgGALQgGAJgHAFQgIAFgIACQgIADgJAAIhbABgAgaBRIAggBQAFgBAGgGQAEgEABgHIACgOQAAgJgDgIQgCgFgFgGQgGgEgGAAIgcAAgAgagXIASAAQAIAAAFgCQAFgCADgEQADgDABgHIACgLIgCgNQgBgGgFgFQgEgEgGgBIgJgBIgSAAg");
	this.shape_14.setTransform(9.1,35.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0095D0").s().p("AgYAKQgLgGgFgGQgEgDgFgIIAAAAIBjAAIAAAAQgDAGgGAFQgFAGgLAGQgKAEgPAAQgOAAgKgEg");
	this.shape_15.setTransform(-17.9,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0095D0").s().p("AAbB7IAAiEIADgZIgBAAIgIAbIgBADIguBuIAAARIguAAIAAj1IAuAAIAABsIgBAQQgBAOgCAKIABAAIAGgRIAyh4IAAgLIAuAAIAAD1g");
	this.shape_16.setTransform(-17.8,35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0095D0").s().p("AAfB7IgJg1IgwAAIgKA1IgtAAIA4j1IA0AAIA3D1gAgVAdIAlAAIgRhYIgBgRg");
	this.shape_17.setTransform(-34.8,35.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0095D0").s().p("AhFB7IAAj1IBPABQAJABAIACQAIACAHAFQAHAFAGAIQAHAJAFAQQADAOAAAOIgDAcIgGAQQgCAGgGAFQgFAIgIAFQgLAFgFABIgQACIgcABIAABbgAgUgKIAMAAIAIAAQAFgBAFgFQACgCADgIQADgJAAgOIgCgNQAAgHgGgHQgEgEgFgCIgVgBg");
	this.shape_18.setTransform(-50.1,35.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0095D0").s().p("Ag+B7IAAj1IB8AAIAAArIhKAAIAADKg");
	this.shape_19.setTransform(-65.6,35.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0095D0").s().p("AAbB7IAAh8IADghIgBAAIgJAeIgtBuIAAARIgvAAIAAj1IAvAAIgBB8QgBALgEANIACAAIA4iJIAAgLIAuAAIAAD1g");
	this.shape_20.setTransform(-83,35.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AweC5IAAlxMAg9AAAIAAFxg");
	this.shape_21.setTransform(0,34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkARQgPgHgKgKQgGgGgGgLIgEgHICbAAIgDAHQgHALgGAGQgJAKgQAHQgPAIgWAAQgVAAgPgIg");
	this.shape_22.setTransform(86.5,-43);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAoC4IAAjGIAFgkIgBAAIgOAtIhFCkIAAAZIhGAAIAAlvIBGAAIgCC6QAAARgFATIABAAIBVjOIAAgQIBGAAIAAFvg");
	this.shape_23.setTransform(86.7,-19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAvC4IgPhPIhIAAIgPBPIhDAAIBUlvIBOAAIBTFvgAggAtIA4AAIgVhhQgDgWgCgPIgCgZg");
	this.shape_24.setTransform(61.1,-19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABKC4IADlAIgIA9Ig0EDIgvAAIgujnIgMhZIADFAIg8AAIAAlvIBoAAIAcCbIALBoQACgoAEgaIApjBIBlAAIAAFvg");
	this.shape_25.setTransform(32,-19.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTC9QgMgCgKgFQgLgEgMgKQgKgHgLgQQgEgFgGgNQgEgIgGgUQgEgRgDgYQgDgUAAgmQAAgkADgUQADgXAEgSQAGgUAEgIIAKgTQALgQAKgHQALgJAMgFQAKgEAMgCIATgCIAUACQAMACAKAEQAMAFALAJQAKAIALAPIAKATQAEAJAFATQAFASADAXQADAZAAAfQAAAigDAYQgDAYgFARQgFASgEAKQgGANgEAFQgKAPgLAIQgLAKgMAEQgKAFgMACIgUABgAgOh3QgFAFgEAEIgFANQgDALgBAKIgCB6IACAfQABAMADAJQACAHADAGQAEAFAFAEQAFAEAJAAQAJAAAGgEQAFgEAEgFQADgGACgHQADgKABgLIACgfIAAhaIgCggQgBgKgDgLIgFgNQgEgEgFgFQgGgEgJAAQgJAAgFAEg");
	this.shape_26.setTransform(1.2,-19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdC4IAAifIg5AAIAACfIhLAAIAAlvIBLAAIAACQIA5AAIAAiQIBLAAIAAFvg");
	this.shape_27.setTransform(-25.4,-19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAoC4IAAjGIAFgkIgBAAIgMAoIhHCpIAAAZIhGAAIAAlvIBGAAIAACiIgBAYQgCASgEASIACAAQAEgOAEgMIBMi0IAAgQIBGAAIAAFvg");
	this.shape_28.setTransform(-52.4,-19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABRC6QgKgBgGgCQgIgDgHgGQgIgGgFgJQgHgOgCgSIgFg1IgDgYQgDgLgFgGQgGgHgIgDIgPgBIgYAAIAACiIhLAAIAAlvIBLAAIAACRIAYAAQAJAAAHgDIAIgGQADgDACgFIACgGIAIhCQABgMAEgIQACgIAGgJQAGgJAHgEQAJgGALgCIAWgBIALAAQAEAAAGADIAAA6IgFAAQgEAAgFADQgGAEgCAQIgHAqQgBAJgEAIQgDAJgHAHQgFAFgHAEQgFAEgKACIAAACQAOABAKAIQALAGAHANQAGAKACAPIAIA7IABAHIACAFQAGAJAKgCIAAA/QgGADgEAAIgLAAg");
	this.shape_29.setTransform(-78.7,-19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3937").s().p("AweFFIAAqJMAg9AAAIAAKJg");
	this.shape_30.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-55.5,211,111);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46A6DB").s().p("AghACIBDgGIgFAEIg9AEg");
	this.shape.setTransform(-17.1,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2073AD").s().p("AgtBUIBWimIAFgEIhZCtg");
	this.shape_1.setTransform(-18.3,-10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2A83C2","#57AEDF"],[0,1],-3.4,0,3.5,0).s().p("AgiA/IBDiAIACADIhDCAg");
	this.shape_2.setTransform(-23.8,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2A83C2","#46A6DB"],[0,1],-3.5,0,3.5,0).s().p("AgiACIBFgGIgFAEIg+AFg");
	this.shape_3.setTransform(-28.9,-17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#333464","#085397"],[0,0.075],-2.7,7.9,6,-7.1).s().p("AgfBHQgJgPAPgeIA6hwIACADIg5BuQgPAcAIAPQAIAOAXAAIABAAIAAADQgaAAgIgQg");
	this.shape_4.setTransform(-35.7,-8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#333464","#064987"],[0,0.09],-4.6,4.7,6.5,-6.8).s().p("Ag/AIIAIgBIB1gQIABACIgBAAIh0ARIgJAAg");
	this.shape_5.setTransform(-29,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#2C5690","#2B5E99","#2A83C2","#529ED4"],[0.302,0.404,0.459,0.533],-1.2,-1.1,4,2.9).s().p("AgeA9QgDgGAIgRIA0hjIAFgEIgBAEIg1BlQgIAOADAFQACAEAIAAIAegFIACADIgCAAIgeAFIgBAAQgJAAgDgFg");
	this.shape_6.setTransform(-28.6,-11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#064987","#064987"],[0,0.486],-3.4,0,3.4,0).s().p("AgcADIA8gIIACACIhDAJg");
	this.shape_7.setTransform(-17.7,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2073AD").s().p("AgMAVIAUgoIAFgDIgYAtg");
	this.shape_8.setTransform(-1.8,-18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#2A83C2","#2A83C2","#0B9AD4","#2878AE","#1F72AA"],[0.161,0.271,0.412,0.627,0.804],5.8,0,-5.7,0).s().p("Ag4A+IAshUQAMgWAPgJQANgHAcgDIACACIgCAAQgcAEgMAGQgPAIgLAXIgtBUg");
	this.shape_9.setTransform(-8.7,-9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#085397","#2A83C2","#46A6DB"],[0,0.388,0.502],-10.3,0,10.3,0).s().p("Ag0gDQATgkAggWQAegXAmgDIAkgDIgFADIgfACQglAEgeAVQgfAXgTAjIgvBaIgFAEg");
	this.shape_10.setTransform(-10.8,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#023D77").s().p("AgIAQIAQghIABADIgQAgg");
	this.shape_11.setTransform(16.1,-9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#285A90","#2A83C2"],[0.306,0.737],-4.1,0,4.2,0).s().p("AAphNIABADIhPCVIgEADg");
	this.shape_12.setTransform(14,-14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#333464","#085397","#48A0D6"],[0,0.675,0.89],0.4,3.1,-0.1,-2.7).s().p("AAsAbQANgZgHgNQgHgNgbAAIgrADIgDABIgXACIgBgDIABAAIBCgGQAfAAAIAPQAIAOgOAag");
	this.shape_13.setTransform(23.6,-20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#333464","#184E8F","#333464"],[0,0.78,1],-5.6,0,5.7,0).s().p("Ag3AfIABAAIARgDQBAgJAbgzIACABQgcA1hBAJIgRACg");
	this.shape_14.setTransform(22.5,-14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333464").s().p("AgWACIAwgGIACACIg3AHg");
	this.shape_15.setTransform(12.6,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#023D77").s().p("AAMgXIABACIgVAqIgFADg");
	this.shape_16.setTransform(20.1,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#044886","#2A83C2","#609CD1","#2A83C2"],[0.565,0.686,0.729,0.851],-1.5,-1.3,1.2,0.5).s().p("AABAPIAAAAIABgBIAAAAIABgBIABgCIABgBIABAAIAAgBIAAgBIABgBIAAAAIABgBIAAAAIAAgBQAFgKgCgEQgCgEgJAAIgEAAIgIABIgCgDIAKAAIAEgBIAAAAQAKAAAEAGQADAGgHAKIgHALg");
	this.shape_17.setTransform(22.7,-17.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#2A83C2","#609CD1","#2A83C2"],[0,0.769,0.949],-1.5,-0.9,1.2,0.9).s().p("AgQAGIACgBIAFAAIABAAIABgBIACAAIABAAIABAAIABgBIABAAIACgBIABAAIABAAIAAAAIADgBIABgBIABAAIABAAIABAAIABgBIACgBIAAAAIABgBIACgCIABAAIAAgBIABAAIABgBIAAAAIABgBIACACQgMALgTACIgEABIgBAAIgBAAIgGABg");
	this.shape_18.setTransform(20.9,-15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#023D77").s().p("AglBDIBGiEIAFgDIhJCJg");
	this.shape_19.setTransform(42.4,-17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#184E8F","#184E8F","#48A0D6","#57ADDF","#48A0D6"],[0.067,0.184,0.282,0.412,0.514],-8.5,0,8.5,0).s().p("AhUAmQALgVASgRQAegbAjgEIBLgHIgEAEIhHAGQgjAEgcAaQgSAQgLAVg");
	this.shape_20.setTransform(37.6,-20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#184E8F","#333464","#184E8F"],[0.055,0.133,0.388],-5.5,-1.1,11.6,7.7).s().p("AgwASQgLgVARghIADABQgRAhAKATQAJARAWAAIAKgBIA5gJIACACIgBAAIgSADIgoAGIgIABIgDABQgXAAgJgTg");
	this.shape_21.setTransform(33.4,-13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A83C2").s().p("AgSAgIAhg/IAEgDIgkBFg");
	this.shape_22.setTransform(37.6,-17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#609CD1","#2A83C2","#184E8F","#333464"],[0,0.11,0.165,1],0.7,2.9,-0.4,-2.6).s().p("AgMAYQgEgKAKgSQAGgOANgLIABACIgBABIgDADIgBABIAAABIgDACIAAABIgCABIgBACIAAAAIgBACIAAAAIgCACIAAABIgBABIAAABIgBAAIAAABIAAABIgBABIAAABIgBABQgKARAFAJQADAEAGAAIABAAIALgCIACADIgBAAIgMACIgBAAQgIAAgEgGg");
	this.shape_23.setTransform(34.5,-16.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#333464","#184E8F","#333464"],[0.455,0.89,1],17,9,-1.2,-0.7).s().p("AgSAFQAMgIAJgCIAQgBIgFADIgKABIgCAAIgBAAIgBAAIAAABIAAAAIgBAAIgBAAIgBABIAAAAIgBAAIgBAAIgBAAIAAAAIgCABIAAAAIgBABIgBABIgBAAIgBABIgBAAIgCACIAAAAIgCABg");
	this.shape_24.setTransform(37.7,-20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#EF6E78","#F18DA0"],[0.373,0.663],-9.2,0,9.3,0).s().p("AhaAOIC3geIgGAEIizAcg");
	this.shape_25.setTransform(61.9,-12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#932735","#BA2339"],[0.361,0.663],-33.5,0,33.6,0).s().p("Ak1BpQDLgkCgg2QChg3B3hFIABgBIABACIgCABQh5BHieA0QiwA7jWAkg");
	this.shape_26.setTransform(11,17.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#932735","#932735"],[0.361,0.663],-6.2,0,6.3,0).s().p("Ag9gcIAFAAIB2A5IgDAAg");
	this.shape_27.setTransform(28.9,-2.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#EF6E78","#F18DA0"],[0.373,0.663],-5.2,0,5.2,0).s().p("AgzBfIBni/IgBAGIhlC7g");
	this.shape_28.setTransform(45.7,-18.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CA223C").s().p("AAMA9IgZh7IACAAIAZB9g");
	this.shape_29.setTransform(55.5,6.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B32438").s().p("Ag8gaIgBgCIB5A2IACADg");
	this.shape_30.setTransform(50.7,9.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#EF6E78","#F18DA0"],[0.373,0.663],-28.8,0,28.9,0).s().p("ABCAKQB9g9BchYIACgCIADgBIgEAEQhaBWh4A8Qh4A8jXBEIgaAHQDmhHB7g+g");
	this.shape_31.setTransform(6.3,14.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#EF6E78","#F18DA0"],[0.373,0.663],-8.9,0,9,0).s().p("AhZAPICygeIABACIitAdg");
	this.shape_32.setTransform(31.6,-7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B32438").s().p("AhVBDIADgCQBahFBIg8IAFgDQhSBEhUBCIgBABg");
	this.shape_33.setTransform(62.7,-7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#932735","#CA223C"],[0.431,0.761],-0.9,0,1,0).s().p("AgJhQIABgGIASCqIgCADg");
	this.shape_34.setTransform(51.8,-19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#C93445","#BD243D","#B32438"],[0.29,0.686,0.937],-5.5,-6.2,5.7,0.8).s().p("AhVgMICrgeQgXAugfAng");
	this.shape_35.setTransform(31.2,-4.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#CA223C","#B32438"],[0.467,0.671],-37.3,0,37.3,0).s().p("AgRCWQB7g9BchZIACgBIh5g6ICygfIBpjAIALBnQgkBthnBlQhjBhiGBCQinA3jOAiQDmhHB9g+g");
	this.shape_36.setTransform(14.8,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#D2243F","#C5233D"],[0.443,0.682],-37.1,0,37.2,0).s().p("AgRCVQB7g+BchXIADgCIh6g7ICygfIBni9IAMBsQgkBphoBjQhgBeiDBCQisA5jMAiQDlhHB9g+g");
	this.shape_37.setTransform(14.9,0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#B52839","#DA2946"],[0.455,0.682],-36.8,0,36.8,0).s().p("AgSCUQB6g+BbhWIADgCIh6g6ICzggIBli7IAMBvQglBmhmBiQhfBbiCBCQioA4jLAjQDihHB7g9g");
	this.shape_38.setTransform(15.4,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#CA223C","#B32438"],[0.443,0.682],-37.3,0,37.3,0).s().p("AgRCWQB7g9BchZIACgBIh5g6ICygfIBpjAIALBnQgkBthnBlQhjBhiGBCQinA3jOAiQDmhHB9g+g");
	this.shape_39.setTransform(14.8,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#CA223C","#EA334D","#EC5263"],[0.478,0.804,0.902],-30.3,-9,32.1,18.8).s().p("AhxCWQB7g9BchZIADgBIh5g6ICygfIBojAIATCrIC4gfQhTBFhVBCIgBABIAaB9Ih7g4IgCABQh5BHidA1QixA7jWAkQDmhHB9g+g");
	this.shape_40.setTransform(24.3,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA334D").s().p("AhxCWQB7g9BchZIADgBIh5g6ICygfIBojAIATCrIC4gfQhTBFhVBCIgBABIAaB9Ih7g4IgCABQh5BHidA1QixA7jWAkQDmhHB9g+g");
	this.shape_41.setTransform(24.3,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#ED606C","#EF7C90"],[0.369,0.663],-30.4,0,30.5,0).s().p("ABGAKQCGhABghbIAEgBIgCACQhcBZh9A8Qh7A/jmBHIgjAIQD0hKCBg/g");
	this.shape_42.setTransform(4.4,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#812634","#BD243D"],[0.361,0.663],-1,0,1.1,0).s().p("AgJhRIABgIIASCwIgCACg");
	this.shape_43.setTransform(52,-19.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJhRIABgIIASCwIgCACg");
	this.shape_44.setTransform(52,-19.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#ED606C","#EF7C90"],[0.369,0.663],-9.3,0,9.3,0).s().p("AhcAPIC3gfIACADIixAeg");
	this.shape_45.setTransform(31.2,-7.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#812634").s().p("AhYBFIACgBQBUhBBShEIAJgEQhJA9hlBOg");
	this.shape_46.setTransform(63.2,-7.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A72434").s().p("AhYBFIACgBQBUhBBShEIAJgEQhJA9hlBOg");
	this.shape_47.setTransform(63.2,-7.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#812634").s().p("Ag+gaIAAgDIB6A2IADAFg");
	this.shape_48.setTransform(50.9,9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A72434").s().p("Ag+gaIAAgDIB6A2IADAFg");
	this.shape_49.setTransform(50.9,9.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#812634","#932735"],[0.361,0.663],-35.3,0,35.4,0).s().p("Ak9BqQDWgkCvg7QCeg0B6hHIABgBIAAADQkLCcm2BEg");
	this.shape_50.setTransform(9.3,18.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A72434").s().p("AALA9IgZh9IADABIAaCAg");
	this.shape_51.setTransform(55.8,6.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#ED606C","#EF7C90"],[0.369,0.663],-9.6,0,9.7,0).s().p("AhdAPIC9gfIgIAEIi3Adg");
	this.shape_52.setTransform(62.4,-12.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#ED606C","#EF7C90"],[0.369,0.663],-5.3,0,5.4,0).s().p("Ag1BiIBrjFIgCAIIhnC/g");
	this.shape_53.setTransform(45.7,-18.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#812634","#932735"],[0.361,0.663],-6.4,0,6.5,0).s().p("AhAgdIAIABIB5A6IgFAAg");
	this.shape_54.setTransform(28.3,-2.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CA223C").s().p("AgLATIAVgnIACACIgVAog");
	this.shape_55.setTransform(-45.9,20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CA223C").s().p("AAzhiIACADIhjC+IgGAEg");
	this.shape_56.setTransform(-49.1,14.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#ED6275","#EE6E84","#ED6275","#C3273C","#932735","#C3273C"],[0.486,0.627,0.741,0.816,0.894,1],-4.5,-5.2,6.1,4.1).s().p("ABCAfQAMgZgIgPQgKgSgkAAIgEAAQgLAAgPACIgZAFIgCAAIgoAHIgBAAIgCgDIACAAIBEgLQAJgCARgBQApgBALAUQAKARgNAag");
	this.shape_57.setTransform(-36.4,6.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#932735","#A72434","#CA223C","#C3273C"],[0.22,0.49,0.608,0.949],-4.8,17,1.8,-6.2).s().p("AhMArIABAAIAJgCIAAAAIAPgDQA2gMAegVQAYgQASgiIACABQgSAjgYAQQgeAWg4AMIgXAFg");
	this.shape_58.setTransform(-37.2,14.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#932735").s().p("AgfAGIBCgPIACACIhJARg");
	this.shape_59.setTransform(-50.6,23.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A72434").s().p("AAPgeIACACIgcA3IgFAEg");
	this.shape_60.setTransform(-41,11.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#B62233","#ED5064","#ED6275","#ED5064"],[0.565,0.686,0.729,0.851],-1.5,-1.7,2.1,0.7).s().p("AAOALQAGgLgDgEQgCgFgMAAIgVADIgCgCIABAAIAGgCIABAAIAPgCIABAAQANAAADAHQADAFgGANg");
	this.shape_61.setTransform(-37.3,9.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#ED5064","#ED6275","#ED5064"],[0.388,0.729,0.867],-1.7,4.2,1.3,-2.9).s().p("AgdARIALgCQAkgIAPgbIACACQgPAcgmAIIgQADg");
	this.shape_62.setTransform(-39.2,12.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B32438").s().p("AgMAVIAUgnIAFgEIgXAtg");
	this.shape_63.setTransform(-21.1,14.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ED6275").s().p("AggAEIBBgKIgFAEIg7AJg");
	this.shape_64.setTransform(-20.5,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#A72434","#932735","#ED5064","#ED6275","#EA334D"],[0.271,0.49,0.545,0.639,0.91],-1.2,-1.1,3.2,2.3).s().p("AgXBBQgGAAgCgDQgDgGAJgRIA0hkIAGgDIg4BpQgIAPACAEQACACAEAAIAHgBIAXgGIgFAFIgEABIgVAEg");
	this.shape_65.setTransform(-20.5,7.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#932735","#CA223C"],[0.035,0.075],-5.2,6.1,5.4,-6.1).s().p("AgYAiIA5huIABgBIACACIg6BuQgPAcAHAOIgCABQgIgPAQgdg");
	this.shape_66.setTransform(-27.3,9.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#932735","#A72434"],[0.035,0.075],-1.9,1.7,8.8,-10.6).s().p("AgpgDIACgBQAGAJAQAAIACAAIAYgFIADAAIAcgGIACACIgBAAIguAKIgKABQgUAAgGgKg");
	this.shape_67.setTransform(-26.4,17.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A72434","#812634","#ED5064","#ED6275","#EA334D"],[0.271,0.49,0.545,0.639,0.91],-1.1,-0.9,3.2,2.4).s().p("AgWA8QgFAAgCgCQgCgHAIgPIAxhcIAFgDIg0BhQgHAPACADQAAACAFAAIAdgHIABACIgBABIgdAGg");
	this.shape_68.setTransform(-9.1,4.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#932735","#CA223C"],[0.035,0.075],-4.8,5.6,5,-5.6).s().p("AgXAgIA1hmIABgBIACACIgBACIg1BkQgNAZAHANIgCABQgIgPAOgZg");
	this.shape_69.setTransform(-15.6,7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#932735","#812634"],[0.035,0.075],-3.5,3.5,6.4,-7.8).s().p("AhHABIACgBQAHAMATAAIABAAQAGAAADgCIBngXIABAAIABACIgBABIhnAXIgKABIgDAAQgUAAgGgNg");
	this.shape_70.setTransform(-11.4,14.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ED6275").s().p("AggAEIBBgKIgGAEIg5AJg");
	this.shape_71.setTransform(-9.2,-0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E2495F").s().p("AgfAEIA/gJIgFADIg4AIg");
	this.shape_72.setTransform(1.2,-2.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#812634").s().p("AgrBOIBSiZIAFgEIhVCfg");
	this.shape_73.setTransform(0,5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#932735").s().p("AgfA6IA+h1IABACIg+B1g");
	this.shape_74.setTransform(-5.1,4.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#B32438","#722330"],[0.129,0.227],-0.1,1.8,0.2,-1.7).s().p("AgnAKQgBAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAEgGALgCIATgEIABAAIAqgIIAAAAIACACIgCAAIg+AMQgKABgDAGIgBADQAAACAFABIAAACQgHgCAAgDg");
	this.shape_75.setTransform(12.6,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#B32438","#EA334D","#EA334D","#ED5064","#EA334D","#EA334D","#932735","#722330"],[0.031,0.227,0.369,0.502,0.612,0.718,0.827,0.98],-2.5,-1.9,2.5,1.1).s().p("AAPAXQAHgMgEgNQgFgMgPgDIgTgFIAAgCIAUAFQARACAEAOQAFANgIAPg");
	this.shape_76.setTransform(11.5,3.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#722330").s().p("AhJAeIBOgTQA2gMARgfIACABQgRAfg3ANIhTAUg");
	this.shape_77.setTransform(5.3,9.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#722330","#B32438","#812634","#932735","#EA334D","#ED6275"],[0.133,0.275,0.404,0.541,0.78,1],0.3,5.3,-0.1,-5.1).s().p("Ag8AuQgNgDgDgLQgEgNAIgNQAXgnA2gIIBKgMIgFACIhEAMQg1AIgWAmQgIANADALQADAKALAEIAPADIABAAIALAEIAAADg");
	this.shape_78.setTransform(10.9,0.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#B32438","#722330"],[0.024,0.239],-0.6,2.5,4.4,-15.1).s().p("AgoANIA2gMQAUgDAEgFIAAgDQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgDQAEABABAEIAAAEQgEAGgWAEIg0AMg");
	this.shape_79.setTransform(4,6.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#932735").s().p("AALgVIACACIgVAmIgEADg");
	this.shape_80.setTransform(-1.2,10.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#812634").s().p("AgKASIARgiIAEgDIgUAng");
	this.shape_81.setTransform(17.6,-3.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#005A9A","#2A83C2","#60B6E4","#428FCA"],[0.075,0.153,0.325,0.431],-2.5,-1,2.1,0.7).s().p("AgVAYQgJAAgCgJQAAgLAMgUIADABQgNAUABAKQAAAHAJAAIADgBQAMgBALgMQAMgKAMgVIACABQgMAWgMAKQgLAMgNACIgEAAg");
	this.shape_82.setTransform(3.6,-11.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#096EA8","#2A83C2","#60B6E4","#609CD1"],[0.075,0.153,0.325,0.431],-2.8,-1,2.4,0.7).s().p("AgVAYQgMABgBgLQAAgMAMgVIACABQgMAUAAAMQACAJAJgBIABAAIAEAAQANgCALgMQAMgKAMgVIADAAQgNAXgMAKQgMALgOADIgEAAg");
	this.shape_83.setTransform(3.6,-11);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#096EA8","#2A83C2","#60B6E4","#609CD1"],[0.588,0.737,0.824,0.969],-1.9,-1.2,1.9,1.3).s().p("AgaAuQgMAAgBgLQAAgMAMgVQAYgsAbgDIADAAQAJAAADAGQAFAKgPAbQgNAWgMALQgLAMgPADIgEAAgAgaADQgLAVAAALQABAJAKAAIAAAAIAEgBQANgBALgMQAMgLANgVQAPgagFgLQgCgEgIAAIgDAAQgZADgZArg");
	this.shape_84.setTransform(4.2,-13.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#005A9A","#2A83C2","#60B6E4","#428FCA"],[0.588,0.737,0.824,0.949],-1.3,-0.7,2.1,1.6).s().p("AggAXQAZgrAZgDIADAAQAIAAACAEQAFALgPAZIgCgCQAOgZgEgHQgCgDgGgBIgDAAQgXADgYAqg");
	this.shape_85.setTransform(4.8,-15.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#6CB2E0","#2B8FCB","#005897","#333464"],[0,0.129,0.184,1],0.7,3.2,-0.5,-2.7).s().p("AAAAgQgJAAgEgHQgFgLALgTQAGgMALgLIADgCIABABQgOALgGAOQgKASAFAKQADAGAIAAIACAAIALgCIABAAIACACIgOACg");
	this.shape_86.setTransform(34.4,-16.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#609CD1","#2A83C2","#184E8F","#333464"],[0,0.11,0.165,1],0.7,3.2,-0.7,-3.3).s().p("AAAAgQgJAAgEgHQgFgLALgTQAGgMALgLIADgCIABABQgOALgGAOQgKASAFAKQADAGAIAAIACAAIALgCIABAAIACACIgOACg");
	this.shape_87.setTransform(34.4,-16.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#3D4269","#0C5D9C","#333464"],[0.455,0.91,1],21.8,11.6,-1.4,-0.7).s().p("AgUAGQAMgJAKgBIATgCIgDACIgQACQgJABgMAIg");
	this.shape_88.setTransform(37.8,-20.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D94CE").s().p("AgTAjIAkhFIADgCIgmBJg");
	this.shape_89.setTransform(37.9,-17.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#0089C7","#085397"],[0.141,0.569],-31.1,0,31.1,0).s().p("AE3hPQiEA5iIAlQi1A1isAMQFahTEThMg");
	this.shape_90.setTransform(-22.6,21.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#75BAE4","#66B3E1"],[0.141,0.569],-35.6,0,35.8,0).s().p("AFOhVIgYAIQkTBNlbBTIgUADQF3haEjhRg");
	this.shape_91.setTransform(-22.5,21.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#0089C7","#085397"],[0.141,0.569],-33.3,0,33.4,0).s().p("AFOhVIgYAIQkTBNlbBTIgUADQF3haEjhRg");
	this.shape_92.setTransform(-22.5,21.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#275187","#205795"],[0.141,0.569],-33.3,0,33.4,0).s().p("Ak4BTQCtgNC1g0QCIgmCEg5IAYgIQiQBAiUApQi9A2i5AMg");
	this.shape_93.setTransform(-22.5,21.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#0089C7","#085397"],[0.141,0.569],-31.1,0,31.1,0).s().p("AE3hPQiEA5iIAlIlhBBQFahTEThMg");
	this.shape_94.setTransform(-22.6,21.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#0089C7","#085397"],[0.141,0.569],-33.3,0,33.4,0).s().p("AFOhVQiQBAiUApIhZAPIBZgRQCIgmCEg5QkSBMlZBTIgXAEQF3haEjhRg");
	this.shape_95.setTransform(-22.5,21.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#69B2E1","#46A6DB"],[0.141,0.569],-36.2,0,36.2,0).s().p("AFqhdIgeALQkiBSl4BaIgbAEQGnhlEshWg");
	this.shape_96.setTransform(-22.3,21);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#184E8F").s().p("AFqhdIgeALQkiBSl4BaIgbAEQGnhlEshWg");
	this.shape_97.setTransform(-22.3,21);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#314578","#2B4678"],[0.141,0.569],-36.2,0,36.2,0).s().p("AlOBaQC5gMC+g3QCTgpCQhAIAegLQidBJijAuQjPA7jEAJg");
	this.shape_98.setTransform(-22.3,21);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#085397").s().p("AgMhFIA4gFIAKgBIACAAQAaAAAGAMQAHAMgNAZQgbAzg/AJIgRACIgCABIgRAgIgtAHgAgLAGIAIgBIADAAIADAAQAcgEAMgWQAHgLgEgHQgDgHgLAAIgGAAIgIABIgCAAg");
	this.shape_99.setTransform(19.6,-14.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#314578","#005B9C","#5AACDE"],[0,0.675,0.89],0.3,2.9,-0.1,-2.5).s().p("AArAZQANgZgHgLQgGgMgaAAIgDAAIgJAAIg4AGIgBgCIAXgCIADgBIArgDQAbAAAHANQAHANgOAZg");
	this.shape_100.setTransform(23.5,-19.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#333464","#085397","#48A0D6"],[0,0.675,0.89],0.8,8.4,-0.1,-2.4).s().p("AArAZQANgZgHgLQgGgMgaAAIgDAAIgJAAIg4AGIgBgCIAXgCIADgBIArgDQAbAAAHANQAHANgOAZg");
	this.shape_101.setTransform(23.5,-19.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#2C447C","#005F9A","#314578"],[0,0.216,0.431],0.3,2.8,-0.6,-8).s().p("Ag2AgIgBgBIACAAIARgCQA/gJAbgzIACAAQgcA0hAAJIgQACg");
	this.shape_102.setTransform(22.4,-14.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2F487B").s().p("AgVACIAsgFIACACIgxAGg");
	this.shape_103.setTransform(12.7,-7.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#004C84").s().p("AgIAPIAQgfIABABIgQAgg");
	this.shape_104.setTransform(16,-9.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#0F659C","#2D8ECA"],[0.306,0.737],-4,0,4.1,0).s().p("AAnhKIABACIhMCRIgDACg");
	this.shape_105.setTransform(14.3,-14.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#005694","#378AC7","#6DA3D5","#378AC7"],[0.565,0.671,0.71,0.851],-1.6,-1.5,1.4,0.5).s().p("AADARIAHgLQAGgKgDgGQgDgGgKAAIAAAAIgEABIgIAAIgCAAIgBgBIACAAIAJgBIAEAAQALAAAEAHQADAHgGAKIgIALg");
	this.shape_106.setTransform(22.7,-17.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#378AC7","#74AEDC","#378AC7"],[0,0.773,0.949],-1.5,-0.6,1.5,1.4).s().p("AgaAYIAFAAIACgBIABAAIAEAAQATgDALgLIAIgLQAGgKgDgHQgDgFgKAAIgBAAIgEABIgJAAIAAAAIgBgBIABAAIAIgBIAGAAQALgBADAHQAEAHgHALIgHALQgMANgUACIgEAAIgDAAIgIACg");
	this.shape_107.setTransform(21.4,-16.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#49C4ED").s().p("AgaAYIAFAAIACgBIABAAIAEAAQAagEAMgVQAGgKgDgHQgDgFgKAAIgBAAIgEABIgJAAIAAAAIgBgBIABAAIAIgBIAGAAQALgBADAHQAEAHgHALQgMAWgbAEIgEAAIgDAAIgIACg");
	this.shape_108.setTransform(21.4,-16.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#004C84").s().p("AANgZIABABIgYAwIgDACg");
	this.shape_109.setTransform(19.8,-16.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#085397").s().p("AhQA2QgKgUARgfQAKgTASgRQAcgaAjgDIBDgHIhFCBIg5AJIgJABQgWAAgIgQgAALgjQgMACgNAMQgMAKgGALQgLAVAFAKQAEAHAKAAIACAAIAOgCIAlhIg");
	this.shape_110.setTransform(36.9,-17.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#005A9A","#0063A0","#61B4E1","#57ADDF","#61ADDE"],[0,0.141,0.275,0.412,0.514],-6.9,-1.6,7,1.6).s().p("AhRAlQALgVASgQQAcgaAjgEIBHgGIgDACIhDAGQgjADgcAaQgSAQgKAVg");
	this.shape_111.setTransform(37.5,-20.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#184E8F","#184E8F","#48A0D6","#57ADDF","#48A0D6"],[0.067,0.184,0.282,0.412,0.514],-4.9,-2.6,5,2.5).s().p("AhRAlQALgVASgQQAcgaAjgEIBHgGIgDACIhDAGQgjADgcAaQgSAQgKAVg");
	this.shape_112.setTransform(37.5,-20.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#005A9A","#333C73","#005899"],[0.055,0.208,0.576],-5.2,-1,4.7,4.1).s().p("AguASQgLgTARghIACABQgRAfAKATQAIAQAWAAIAJgBIA5gJIABACIg6AJIgJABQgXAAgIgRg");
	this.shape_113.setTransform(33.4,-13.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#004C84").s().p("AgjBBIBEiBIADgCIhGCFg");
	this.shape_114.setTransform(42.1,-17.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#3191CA","#0089C7","#085397"],[0,0.161,0.173],-4.4,-3.8,19.9,17.4).s().p("Ag5BQQgGAAgJgCQgMgDgFgJQgFgJACgOQADgOAJgSQAKgRANgPQAPgRAQgLQARgNARgHQAUgIASgCIAIAAIACAAQAMAAAIADQALAFAEAIQAEAIgDANQgCAPgJAQQgKARgMANQgLAOgRANQgQANgRAIQgTAJgTADIgPABgAgbABQgMAWAAAMQABALAMgBIABAAIADAAQAPgDALgLQANgLAMgWQAQgbgFgKQgDgHgJAAIgEAAQgaADgZAsg");
	this.shape_115.setTransform(4.1,-13.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#5EB3E1","#78C2E9","#5EB3E1"],[0.275,0.569,0.835],-6.4,0,6.5,0).s().p("AhAAtQAJgRAPgQQAPgRAQgLQAOgLAVgJQASgHAUgDIAAACQgRACgVAIQgSAHgQANQgQALgPAQQgNAPgKASg");
	this.shape_116.setTransform(2.3,-16.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#1C6CB1","#134480"],[0.141,0.608],-6.2,0,6.2,0).s().p("Ag9AsQATgDATgIQASgIAPgNQASgMAKgOQANgNAJgSIACAAQgIAQgOAQQgMAOgRANQgPAMgSAIQgQAIgWAEg");
	this.shape_117.setTransform(6.2,-9.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#5EB3E1","#2A83C2","#085397","#1C6CB1"],[0.11,0.208,0.541,0.925],-2.8,-0.9,3.3,2.2).s().p("AAKAjQgKAAgFgBQgNgEgFgJQgFgJACgOQADgOAJgTIACABQgJASgDAOQgCANAFAJQAFAJAMADQAIACAGAAIACAAIAPgBIAAABIgPABg");
	this.shape_118.setTransform(-2.7,-8.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#5EB3E1","#285A90","#134480"],[0.141,0.275,0.608],-0.8,-4.1,2.4,3.1).s().p("AALAjQAIgQADgPQACgMgEgIQgDgIgLgFQgHgDgMAAIgCAAIgIAAIAAgCIAKAAQAMAAAIADQALAFAEAJQAEAJgCANQgCANgKARg");
	this.shape_119.setTransform(11.2,-17.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#333464","#285A90","#285A90","#085397","#46A6DB","#46A6DB","#60B8E5"],[0,0.435,0.502,0.694,0.737,0.902,1],3.6,4.6,-3.5,-4.5).s().p("Ag5BQQgGAAgJgCQgMgDgFgJQgFgJACgOQADgOAJgSQAKgRANgPQAPgRAQgLQARgNARgHQAUgIASgCIAIAAIACAAQAMAAAIADQALAFAEAIQAEAIgDANQgCAPgJAQQgKARgMANQgLAOgRANQgQANgRAIQgTAJgTADIgPABgAgbABQgMAWAAAMQABALAMgBIABAAIADAAQAPgDALgLQANgLAMgWQAQgbgFgKQgDgHgJAAIgEAAQgaADgZAsg");
	this.shape_120.setTransform(4.1,-13.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#085397","#289FD5"],[0.141,0.894],-38.5,26.6,10.3,-7.5).s().p("AgwAAQASgkAegVQAegWAlgEIATgBIAAAAIAJgBIgUAlQgcAEgNAHQgQAJgMAXIgrBSIg5AJg");
	this.shape_121.setTransform(-10.7,-11.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#0068A6","#328ECA","#5EB3E1"],[0,0.404,0.557],-9.8,0,9.9,0).s().p("AgygBQATgkAfgWQAegWAlgDIAfgDIgDACIgJABIAAAAIgTABQglAEgeAWQgeAVgSAkIguBWIgDACg");
	this.shape_122.setTransform(-10.8,-11.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#3090CB","#2FA1D9","#0E83B9","#057AB2"],[0.161,0.412,0.627,0.749],5.8,0,-5.7,0).s().p("Ag4A+IAshSQAMgXAPgJQANgIAcgDIABACQgcADgNAIQgQAIgLAWIgsBUg");
	this.shape_123.setTransform(-8.8,-9.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1B7CB5").s().p("AgLATIATgkIAEgDIgVApg");
	this.shape_124.setTransform(-2.1,-18);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#005390","#005390"],[0.204,0.486],-3.1,0,3.1,0).s().p("AgaADIA4gHIABABIg9AJg");
	this.shape_125.setTransform(-17.5,-3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#085397","#00AFE1"],[0.141,0.894],-14.9,11.1,35.4,-24.1).s().p("AiVBrQgMgVAQgeQAWgsA5gVIAJgEIgIgFQgIgEgCgKQgCgLAHgPQAPgdAjgRQAigRAzgEIBagHIgWArIhNAGQg4AGgMAYQgEAHADAHQAEAIANAAIAGAAIA9gGIgWAoIg7AHQgZAEgSAKQgTAKgHANQgHAPAFAJQAGALAYAAIADAAIBmgOIgZAvIhOANQgUAEgNAAIgEABQgxAAgOgag");
	this.shape_126.setTransform(-46.6,-10.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#2B4678","#0060A1","#4091CC"],[0,0.129,0.424],-4.9,5.5,3.9,-7.5).s().p("AgsA1QgLgWAQgeQAVgsA6gXIAFgBIAEAAIgJADQg4AXgWArQgPAeALAUQAFAJAKAGIgCABQgKgGgFgJg");
	this.shape_127.setTransform(-57.3,-5.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#333464","#0060A1","#4A8FC9"],[0,0.09,0.424],-4.9,5.5,3.9,-7.5).s().p("AgsA1QgLgWAQgeQAVgsA6gXIAFgBIAEAAIgJADQg4AXgWArQgPAeALAUQAFAJAKAGIgCABQgKgGgFgJg");
	this.shape_128.setTransform(-57.3,-5.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#2B4678","#004C89","#2D497C"],[0,0.09,0.263],-2.7,3.6,6.1,-9.4).s().p("AggAJQgfAAgUgKIACgBQASAKAfAAIAEgBQANAAATgDIBPgNIABACIhQANQgTAEgNgBg");
	this.shape_129.setTransform(-51.9,1.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#2D4476","#1C5C9E","#53ABDD"],[0,0.141,0.447],-4.2,8.6,3.5,-9.6).s().p("AhlA8IgFgDQgJgGgCgKQgDgKAIgRQAPgcAkgRQAjgSAzgDIBegIIgEACIhaAHQgyAEgjARQgjARgPAcQgHAPACALQACAKAIAEIAIAFg");
	this.shape_130.setTransform(-42.6,-18);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#26487E","#185F9F","#185F9F","#215FA1","#5FA1D6","#609CD1","#398DC9"],[0.035,0.208,0.314,0.416,0.478,0.596,0.91],-1,-3,1.2,4.2).s().p("AgmAnQgYAAgGgLQgEgJAHgOQAGgNATgKQATgKAYgDIA8gHIABACIg9AHQgYADgSAKQgSAJgHANQgGANAEAIQAFAKAXAAIADAAIBqgOIgEACIhmAOg");
	this.shape_131.setTransform(-47.9,-6.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#16609C").s().p("AgMAVIAVgpIAEgCIgYAtg");
	this.shape_132.setTransform(-40.4,-12.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#165693").s().p("AgNAYIAYguIADgDIgaAzg");
	this.shape_133.setTransform(-42.3,-1.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#16609C").s().p("AgMAVIAVgpIAEgCIgYAtg");
	this.shape_134.setTransform(-32,-21.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#26487E","#185F9F","#185F9F","#215FA1","#5FA1D6","#609CD1","#398DC9"],[0.035,0.176,0.314,0.416,0.478,0.596,0.91],-0.5,-2,1,3).s().p("AgYAbQgPAAgDgIQgEgHAEgIQANgWA3gGIAFAAIACgBIACAAIACAAIAHgBIAAACIgDAAIgBABIgFAAIAAAAIgFAAIgBABIgDAAQg2AFgMAWQgEAHADAGQAEAHANAAIABAAIBEgHIgDACIg8AHg");
	this.shape_135.setTransform(-43.6,-16.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#333464","#085397","#0060A2","#215FA1","#2A83C2"],[0,0.161,0.314,0.404,0.91],-0.5,-2,1,3).s().p("AgYAbQgPAAgDgIQgEgHAEgIQANgWA3gGIAFAAIACgBIACAAIACAAIAHgBIAAACIgDAAIgBABIgFAAIAAAAIgFAAIgBABIgDAAQg2AFgMAWQgEAHADAGQAEAHANAAIABAAIBEgHIgDACIg8AHg");
	this.shape_136.setTransform(-43.6,-16.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#333464","#185F9F","#256EA6","#16609C"],[0,0.161,0.404,0.91],-0.7,-1.3,0.8,3.6).s().p("AgdABIA6gDIABABIAAAAIg7AFg");
	this.shape_137.setTransform(-36.2,-19.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#085397","#00AFE1"],[0.141,0.894],-27.9,18.9,21.4,-15.6).s().p("AhYBbQgXAAgHgOQgHgOANgaIA6huIA6gFIgyBgQgJARAEAHQADAHAKAAIABAAIAggEIACgBIBDiAIA5gFIhVCiIh0ARIgHABg");
	this.shape_138.setTransform(-26.6,-9.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#268AC8","#57ADDF"],[0.012,1],-3.1,0,3.2,0).s().p("AgfACIA/gFIgEACIg6AFg");
	this.shape_139.setTransform(-29,-17.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1B7CB5").s().p("AgsBSIBViiIADgDIhWCng");
	this.shape_140.setTransform(-18.6,-10.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#3D89C6","#63B9E5"],[0,1],-3.4,0,3.5,0).s().p("AgiBAIBDiBIACADIhECAg");
	this.shape_141.setTransform(-23.6,-11.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#304A80","#005F9D","#0063A3"],[0,0.086,0.553],-2.7,7.7,5.7,-6.9).s().p("AAABUQgXAAgIgOQgIgPAPgcIA5huIABACIg5BtQgNAbAHAOQAHANAWAAIABAAIAAACg");
	this.shape_142.setTransform(-35.5,-8.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#333464","#085397"],[0,0.075],-8,0,8.1,0).s().p("AhNBGQgIgPAPgcIA6huIABACIg6BtQgNAbAHAOQAHANAXAAIABAAIAHgBIB0gRIABACIh0ARIgJABQgYAAgIgOg");
	this.shape_143.setTransform(-30.9,-8.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#51AFE0").s().p("AgeACIA9gFIgEADIg3AEg");
	this.shape_144.setTransform(-17.2,-18.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#146AA8","#315A9D","#4298D1","#4EA5D9"],[0.306,0.404,0.467,0.533],-1.2,-1.2,4.2,3.1).s().p("AgPBBQgKAAgEgGQgDgIAJgRIAyhgIADgCIg0BjQgJAQAEAIQADAEAJAAIABAAIAegEIACAAIABACIghAEg");
	this.shape_145.setTransform(-28.9,-11.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#46A6DB","#1C6CB1","#333464","#314578"],[0.11,0.208,0.541,0.925],-2.9,-1,3.6,2.3).s().p("AgEAjQgOgEgFgKQgGgJACgPQACgPAKgTIADABQgKATgCAOQgCAOAFAJQAFAJANAEQAFABAKAAIACAAIAPgBIAAADIgPACQgMAAgGgDg");
	this.shape_146.setTransform(-2.8,-8.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#333464","#285A90","#285A90","#085397","#0C98CF","#0AA9DC"],[0,0.435,0.502,0.694,0.737,0.89],3.1,5.8,-9,-10.3).s().p("AgEAjQgOgEgFgKQgGgJACgPQACgPAKgTIADABQgKATgCAOQgCAOAFAJQAFAJANAEQAFABAKAAIACAAIAPgBIAAADIgPACQgMAAgGgDg");
	this.shape_147.setTransform(-2.8,-8.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#314578","#085397","#333464"],[0.086,0.165,0.4],-6.3,0,6.3,0).s().p("Ag+AtQAWgFARgHQASgIAPgNQAQgMANgOQAOgQAHgQIADABQgKARgMAQQgNANgQAOQgQAMgSAIQgUAJgUADg");
	this.shape_148.setTransform(6.4,-9.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#333464","#285A90","#285A90","#085397","#0C98CF","#0AA9DC"],[0,0.435,0.502,0.694,0.737,0.89],2.4,2.5,-4.8,-7.2).s().p("AhGAuQgOgFgFgKIACgBQAFAJANAEQAHACAJAAIACAAIAQgBQAWgFAPgHQASgIAQgNQARgLAMgPQAOgQAIgQIADACQgKARgNAPQgNAOgQANQgQAMgTAJQgTAIgTAEIgPABQgMAAgIgCg");
	this.shape_149.setTransform(3.7,-9.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#46A6DB","#60B6E4","#46A6DB"],[0.337,0.608,0.925],-7.2,3.1,7.1,-3.6).s().p("AhBAuQALgUANgOQAPgQARgMQAQgNATgHQAVgJATgBIAAACQgVADgSAHQgVAJgOALQgPALgQAQQgOAQgJASg");
	this.shape_150.setTransform(2.2,-16.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#333464","#285A90","#285A90","#085397","#0C98CF","#0AA9DC"],[0,0.435,0.502,0.694,0.737,0.89],6.1,8.1,-1.1,-1.6).s().p("AhBAuQALgUANgOQAPgQARgMQAQgNATgHQAVgJATgBIAAACQgVADgSAHQgVAJgOALQgPALgQAQQgOAQgJASg");
	this.shape_151.setTransform(2.2,-16.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#46A6DB","#085397","#333464"],[0.173,0.302,0.608],-0.9,-4.4,2.5,3.2).s().p("AALAkQAJgRACgOQADgNgFgJQgDgJgMgEQgHgEgNAAIgKABIAAgDIAIAAQANgBAKAEQAMAFAFAKQAFALgDANQgCANgKASg");
	this.shape_152.setTransform(11.3,-17.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#EA334D","#CA223C","#C3273C"],[0.545,0.553,0.851],-12.9,-11.3,19.7,16).s().p("AgnBUQgQAAgEgJQgHgMAPgcIA5htIA4gJIg0BgQgKASAEAGQACAEAHAAIABAAIAHgBIAOgDIABAAIgTAjIgaAGIgDABIgQAEQgEABgGAAg");
	this.shape_153.setTransform(-24.2,9.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#EA334D","#CA223C","#C3273C"],[0.545,0.553,0.851],-13.4,-11.8,20.4,16.6).s().p("AgnBUQgQAAgEgJQgHgMAPgcIA5htIA4gJIg0BgQgKASAEAGQACAEAHAAIABAAIAHgBIAOgDIABAAIgTAjIgaAGIgDABIgQAEQgEABgGAAg");
	this.shape_154.setTransform(-24.2,9.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#B32438","#D23048"],[0.035,0.067],-5.1,6.1,5.3,-5.9).s().p("AgYAjIA6huIABABIg5BuQgPAbAHAMIgCABQgHgOAPgbg");
	this.shape_155.setTransform(-27.1,9.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#BD243D","#CA223C"],[0.035,0.075],-1.8,1.7,8.7,-10.3).s().p("AgRAHQgRAAgFgJIACgBQAEAIAQAAIABAAQAFAAAFgBIAOgEIAEAAIAbgGIABACIgcAFIgDABIgYAFg");
	this.shape_156.setTransform(-26.4,17.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#BD243D","#B32438","#EF7693","#EC5C75","#ED6275"],[0.271,0.49,0.545,0.639,0.91],-1.1,-1.1,3.2,2.3).s().p("AgUBAQgHAAgCgFQgEgFAKgSIAzhhIADgCIg1BkQgJAQADAGQADADAFABIABAAIATgFIAFgBIgDADIgBAAIgNADIgHABg");
	this.shape_157.setTransform(-20.8,7.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EF7693").s().p("AgdAEIA7gJIgDADIg3AIg");
	this.shape_158.setTransform(-20.7,1.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CA223C").s().p("AgKASIASgiIADgDIgUAng");
	this.shape_159.setTransform(-21.4,15);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CA223C").s().p("AhPAxIA1gLQAWgFAEgHQABgDgBgDQAAgEgFgBIgMgDIAAgBIgPgEQgKgDgDgHQgDgLAIgMQAVgmA0gIIBCgLIgRAfIgqAIIgBAAIgTAEQgMACgEAHQgCADAAADQACAEAHACIAUAEQAPADAEAMQAEALgHAMQgRAfg0ANIhMARg");
	this.shape_160.setTransform(8.1,3.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#BD243D","#932735"],[0.173,0.263],-0.1,2,0.2,-1.9).s().p("AgoALQAAgEACgCQAEgHAMgBIATgEIABAAIApgJIACACIgBAAIgqAIIAAAAIgUAEQgLACgEAGQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQABADAGACIAAACQgHgDgCgDg");
	this.shape_161.setTransform(12.4,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#B32438","#722330"],[0.129,0.227],-1.1,13.4,0.2,-2).s().p("AgoALQAAgEACgCQAEgHAMgBIATgEIABAAIApgJIACACIgBAAIgqAIIAAAAIgUAEQgLACgEAGQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAQABADAGACIAAACQgHgDgCgDg");
	this.shape_162.setTransform(12.4,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#BD243D","#ED5064","#EF7693","#ED5064","#932735"],[0.031,0.227,0.369,0.553,0.741],-2.3,-1.7,3.9,2).s().p("AAPAWQAHgNgEgLQgEgLgOgDIgUgEIAAgCIAUAEQAPAEAEALQAFAOgIAMg");
	this.shape_163.setTransform(11.3,3.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#B32438","#722330"],[0.129,0.227],-0.8,9.6,0.5,-5.8).s().p("AAPAWQAHgNgEgLQgEgLgOgDIgUgEIAAgCIAUAEQAPAEAEALQAFAOgIAMg");
	this.shape_164.setTransform(11.3,3.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#B32438","#932735"],[0.129,0.227],-0.3,3.8,1.1,-11.6).s().p("AhHAdIBLgRQA1gMARgfIABABQgSAeg1ANIhOATg");
	this.shape_165.setTransform(5.4,9.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#7F2637","#CD2541","#932C3D","#AC293E","#ED6275","#EF7693"],[0.133,0.275,0.4,0.596,0.78,1],0.2,5,-0.1,-4.9).s().p("AgrAwIgBAAIgPgEQgLgDgDgKQgDgLAIgNQAWgmA1gIIBEgMIgDADIhBALQg0AIgWAlQgHAMADALQADAIAKADIAOAEIABABIAMADIgBACg");
	this.shape_166.setTransform(10.8,0.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#722330","#B32438","#812634","#932735","#EA334D","#ED6275"],[0.133,0.275,0.404,0.541,0.78,1],-10.7,0,7.6,0).s().p("AgrAwIgBAAIgPgEQgLgDgDgKQgDgLAIgNQAWgmA1gIIBEgMIgDADIhBALQg0AIgWAlQgHAMADALQADAIAKADIAOAEIABABIAMADIgBACg");
	this.shape_167.setTransform(10.8,0.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#BD243D","#812634"],[0.141,0.412],-4.1,0,14.2,0).s().p("AgoAQIA1gMQAWgEADgGIABgEQgBgEgEgBIAAgBQAFABABAEQABACgBADQgFAHgWAEIg0AMg");
	this.shape_168.setTransform(4.1,6.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A22A39").s().p("AgJAQIAQgeIADgDIgRAjg");
	this.shape_169.setTransform(17.3,-3.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A22A39").s().p("AAKgSIABABIgSAiIgDADg");
	this.shape_170.setTransform(-1,10.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#EA334D","#CA223C","#CA223C"],[0.545,0.553,0.725],-21,-18.2,11.9,9.4).s().p("AhTBYQgTAAgFgLQgHgNANgYIA2hkIAAgBIA1gJIgvBZQgJARADAGQADAEAGAAIAAAAIAHgBIAYgGIACAAIA+h1IA1gJIhRCWIhmAYIgJABg");
	this.shape_171.setTransform(-7.4,6.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#ED6275").s().p("AgcAEIA5gIIgDACIg1AHg");
	this.shape_172.setTransform(1,-2.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#B32438","#932735","#EF7693","#ED6275","#EB4459"],[0.271,0.471,0.533,0.639,0.91],-1.1,-1,3.4,2.5).s().p("AgTA8QgGAAgCgFQgDgGAJgQIAvhZIADgDIgBADIgwBZQgIAQACAGQACADAFAAIABAAIAdgHIABAAIABABIgBABIgYAGIgGABg");
	this.shape_173.setTransform(-9.4,5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#B32438","#D23048"],[0.035,0.075],-4.7,5.5,4.9,-5.5).s().p("AgXAgIA1hkIABgBIABABIAAAAIg1BlQgNAYAHAMIgCABQgHgNANgZg");
	this.shape_174.setTransform(-15.4,7.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#B32438","#932735"],[0.035,0.075],-3.4,3.4,6.2,-7.7).s().p("AgsAOQgTgBgGgMIABgBQAGAMASAAIACAAIAJgCIBmgWIABABIAAAAIhnAXQgEABgFABg");
	this.shape_175.setTransform(-11.4,14);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EF7693").s().p("AgcAEIA5gJIgDADIg1AIg");
	this.shape_176.setTransform(-9.4,-0.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A22A39").s().p("AgpBMIBQiVIADgDIhSCZg");
	this.shape_177.setTransform(-0.3,5.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B32438").s().p("AgfA6IA+h1IABACIg+B1g");
	this.shape_178.setTransform(-4.9,4.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#EA334D","#CA223C","#C3273C"],[0.545,0.553,0.851],-6.1,-4.2,26.8,23.4).s().p("AgXhVIAngHIACAAIAZgFQARgCAKAAIAEAAQAjAAAJARQAIAPgLAYQgSAhgYAQQgeAWg1ALIgPADIAAAAIgLACIgVApIg/APgAAgg+IgFABIgBABIgIACIgiBAIAUgDQAogHAPgeQAHgNgEgIQgDgIgOAAIgBAAg");
	this.shape_179.setTransform(-41.4,14);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#BD243D").s().p("AgdAGIA+gOIABACIhDAPg");
	this.shape_180.setTransform(-50.5,23.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#EF7693","#EF82A0","#ED6275","#EA334D","#B32438","#EA334D"],[0.486,0.627,0.741,0.816,0.894,1],-4.4,-5,5.8,3.9).s().p("ABBAdQAMgYgIgOQgKgSgjABIgDAAQgLAAgPACIgZAEIgDAAIgnAHIgBgCIAAAAIAogGIACgBIAagEQAPgDALAAIADAAQAlAAAJASQAJAQgMAYg");
	this.shape_181.setTransform(-36.4,6.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#ED6275","#EE6E84","#ED6275","#C3273C","#932735","#C3273C"],[0.486,0.627,0.741,0.816,0.894,1],-4.4,-5,6.2,4.2).s().p("ABBAdQAMgYgIgOQgKgSgjABIgDAAQgLAAgPACIgZAEIgDAAIgnAHIgBgCIAAAAIAogGIACgBIAagEQAPgDALAAIADAAQAlAAAJASQAJAQgMAYg");
	this.shape_182.setTransform(-36.4,6.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#932735","#BD243D","#CA223C","#EA334D"],[0.22,0.49,0.608,0.949],-6.1,21.4,1.8,-6.1).s().p("AhKAtIgBgCIAKgCIAAAAIAPgDQA1gLAfgWQAYgQARghIACABQgSAhgZARQgdAUg2ANIgPADIgBAAIgIACg");
	this.shape_183.setTransform(-37.4,14.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#ED5064").s().p("AAxhfIABACIhgC6IgEACg");
	this.shape_184.setTransform(-48.8,14.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#DD2843").s().p("AgKATIAUgnIABACIgUAng");
	this.shape_185.setTransform(-46.1,20.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#D2213F","#EC546E","#EE6A80","#EC5C75"],[0.565,0.651,0.729,0.851],-1.6,-1.9,2.3,0.7).s().p("AAQANQAHgMgEgGQgDgGgMAAIgBAAIgQACIAAAAIgGABIgCAAIgBgBIAIgCIABAAIAFgBIALgBIABAAQAOAAADAHQAEAHgHANg");
	this.shape_186.setTransform(-37.3,9.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#B62233","#ED5064","#ED6275","#ED5064"],[0.565,0.686,0.729,0.851],-1.7,-1.9,2.3,0.8).s().p("AAQANQAHgMgEgGQgDgGgMAAIgBAAIgQACIAAAAIgGABIgCAAIgBgBIAIgCIABAAIAFgBIALgBIABAAQAOAAADAHQAEAHgHANg");
	this.shape_187.setTransform(-37.3,9.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#ED6275","#EF7693","#EC5C75"],[0.467,0.741,0.965],-2.3,-1.4,1.7,1.2).s().p("AghATIAQgDQAmgIAPgcIACABQgPAdgnAIIgVADg");
	this.shape_188.setTransform(-39.3,12.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DC2543").s().p("AARggIABABIgfA9IgEADg");
	this.shape_189.setTransform(-41.2,11.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#1F4B86").s().p("AgOAXIAYgtIAFgDIgbAzg");
	this.shape_190.setTransform(-31.7,-21.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgOAXIAYgtIAFgDIgbAzg");
	this.shape_191.setTransform(-31.7,-21.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1F4B86").s().p("AgOAYIAYguIAFgDIgbAzg");
	this.shape_192.setTransform(-40.1,-12.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgOAYIAYguIAFgDIgbAzg");
	this.shape_193.setTransform(-40.1,-12.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#1F4B86").s().p("AgPAaIAagyIAFgEIgdA5g");
	this.shape_194.setTransform(-42,-1.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgPAaIAagyIAFgEIgdA5g");
	this.shape_195.setTransform(-42,-1.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#333464","#085397","#085397","#085397","#2A83C2","#609CD1","#2A83C2"],[0,0.161,0.314,0.404,0.459,0.529,0.91],-0.5,-1.9,0.9,2.8).s().p("AgcAZQgMAAgEgHQgDgGAEgHQAMgWA2gFIAVgCIAAADIgVACQg1AFgLAUQgDAHACADQADAGAMAAIBGgHIAEAAIgFADIhFAHg");
	this.shape_196.setTransform(-43.3,-16.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#333464","#085397","#085397","#085397","#2A83C2","#609CD1","#2A83C2"],[0,0.161,0.314,0.404,0.459,0.529,0.91],-0.5,-1.9,0.9,2.8).s().p("AgcAZQgMAAgEgHQgDgGAEgHQAMgWA2gFIAVgCIAAADIgVACQg1AFgLAUQgDAHACADQADAGAMAAIBGgHIAEAAIgFADIhFAHg");
	this.shape_197.setTransform(-43.3,-16.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#333464","#085397","#085397","#085397","#2A83C2"],[0,0.161,0.314,0.404,0.91],-0.5,-1.6,0.9,3.1).s().p("AgcABIA3gEIAAAAIACADIgBAAIg4AEg");
	this.shape_198.setTransform(-35.9,-19.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#333464","#085397","#2A83C2"],[0,0.09,0.424],-4.8,5.6,4,-7.5).s().p("AgrA2QgMgXAQgfQAYguA5gXIAHABIgGACQg5AWgWAsQgQAfAMAVQAFAJAKAHIgCACQgKgHgGgJg");
	this.shape_199.setTransform(-57.7,-5.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#333464","#064987","#333464"],[0,0.09,0.263],-2.8,3.7,6,-9.4).s().p("AhUgBIABgCQATAKAfAAIAFAAQAMAAAUgDIBPgNIACACIgBABIhPANQgPACgSABIgFAAQghAAgSgLg");
	this.shape_200.setTransform(-51.9,2.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#333464","#085397","#48A0D6"],[0,0.09,0.424],-4.4,8.9,3.5,-9.9).s().p("AhtA9QgJgGgDgLQgDgNAJgQQAPgdAkgRQAlgSAzgFIBjgHIgFADIheAIQgzADgjASQgkARgPAcQgIARADAKQACAKAJAGIAFADg");
	this.shape_201.setTransform(-42.5,-18.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#333464","#085397","#085397","#085397","#2A83C2","#609CD1","#2A83C2"],[0,0.161,0.314,0.404,0.459,0.529,0.91],-1.1,-2.8,1,4.1).s().p("AgpAlQgXAAgGgKQgEgIAHgNQAGgNASgJQATgKAYgDIA8gHIACACIgBAAIg9AIQgXADgSAJQgRAKgHALQgFAMADAHQAFAIAYAAIAWgCIBYgNIgFAEIhpAOg");
	this.shape_202.setTransform(-47.6,-6.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A72434").s().p("AhcAPIC3gfIACADIixAeg");
	this.shape_203.setTransform(31.2,-7.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#BBBDBF").s().p("ACfglQCAgiBLgWQidBKijAsQjPA7jEAKQEJhAD/hDg");
	this.shape_204.setTransform(-22.3,21.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#BBBDBF").s().p("AhKBSQgNgDgGgLQgGgJADgQQACgPAKgSQAKgSAOgQQAPgRAQgMQATgNARgHQAVgIASgCIAIAAQANgBALAEQAMAFAFAKQAFALgDAOQgCANgKASQgJAQgNAQQgPARgOAKQgPANgTAIQgQAIgYAEIgOABIgEAAQgIAAgIgCgAgXAEQgLAWAAAIQAAAHAJAAIADAAQAMgCALgLQANgNALgTQAOgZgDgIQgDgEgGAAIgCAAQgZADgXAqg");
	this.shape_205.setTransform(4.2,-13.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#BBBDBF").s().p("AhxBPQgHgOANgaIA3hmIAAgBIBAgLIgzBgQgIAQACADQABACAEAAIAegHIA+h1IBAgKIhWCfIgBAAIhnAYQgEACgGAAIgCAAQgTAAgIgOg");
	this.shape_206.setTransform(-7.2,6.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#BBBDBF").s().p("Ah8BQQgIgQAPgdIA7hwIBFgHIg2BpQgIAPADAFQACAEAIAAIAfgFIBDiAIBEgHIhaCsIgCAAIh0ASIgIABQgbAAgJgQg");
	this.shape_207.setTransform(-26.4,-9.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#BBBDBF").s().p("AiMB+QgJgGgHgLQgMgXARgfQAWguA7gWQgJgGgDgLQgDgNAJgQQAPgeAkgSQAjgSA1gEIBigHIAAgBIABABIgcA0IgBAAIhPAHQg2AFgKAVQgDAHACADQADAGAMAAIBKgIIgcA0IgBAAIg8AHQgYADgSAJQgRAKgGAMQgGANADAGQAFAJAYgBIAWgCIBYgMIgeA5IgBAAIhPAOQgQADgSABIgFAAQghAAgSgMg");
	this.shape_208.setTransform(-46.3,-10.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#BBBDBF").s().p("Ag0gCQATgmAggWQAegVAmgFIAkgDIgZAvIgBAAQgcAEgMAGQgPAJgMAWIgsBUIhEAKg");
	this.shape_209.setTransform(-10.7,-11.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#BBBDBF").s().p("AgYhaIACgBIBDgLQAPgDAMAAQApgBALAVQAKARgNAaQgSAigZARQgdAWg4AMIgXAFIgWAoIhLASgAAXg3IgcA3IAKgCQAWgEANgLQAKgHAHgNQAGgLgDgGQgCgFgMAAg");
	this.shape_210.setTransform(-41.5,14.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#BBBDBF").s().p("AhBBOQgIgOAQgeIA5huIABgBIBDgMIg4BpQgIAPACAFQABACAFAAIAegHIgYAuIgBAAIgtALIgLACQgUAAgGgMg");
	this.shape_211.setTransform(-24,9.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BBBDBF").s().p("AhRAtIA3gLQAUgFADgGIAAgCQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgbgIQgMgEgDgKQgEgLAIgOQANgYAXgMQAQgJAZgEIBKgMIgWAoIgBAAIg/ANQgKABgEAHIAAACQAAABAFABIAUAFQARADAFAOQAFANgJAOQgSAhg1ANIhVATg");
	this.shape_212.setTransform(8.2,3.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#BBBDBF").s().p("AhVA4QgMgVASgiQALgTASgSQAdgbAkgEIBLgHIhJCKIgCAAIhBAKIgDABQgXAAgJgTgAgFgZIgBABIgBABIgBAAIAAABIgBAAIgFAFIgBABIgEADIAAABIgCACIgBACIgBABIgBABIgBAAIAAABIgBABIgBABIAAABIgBABIAAAAIAAABIgBAAIAAABIgBAAIAAABQgKATAEAIQADAFAHAAIABAAIAMgCIAhg/IgLABIgCAAIgBAAIgBAAIgBABIgBAAIAAAAIgBAAIgBABIgBAAIAAAAIAAABIgBAAIgBABIgBABIgBAAg");
	this.shape_213.setTransform(37.2,-17.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BBBDBF").s().p("AgNhKIACAAIA4gFIAKgBQAfAAAIAPQAHAOgNAbQgdA1hBAJIgRACIgRAhIg3AIgAAdgqIgJABIgWAqIACgBIAEAAIACAAIACAAIACAAIAAAAIACgBIAAAAIADgBIABAAIAEgBIAAgBIADgBIABgBIABAAIABAAIABgBIAAAAIABgBIACgCIABAAIAAgBIABAAIAAgBIABAAIABgBIADgEIAAAAIABgBIAAAAIABgBIAAgBIABgBIAAAAIAAgBIABAAIAAgCQAFgJgCgFQgCgEgKAAg");
	this.shape_214.setTransform(19.5,-14.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#BBBDBF").s().p("AhzCbQCFhBBghaIh8g9IC3ggIBsjFIATCwIC+ggQhIA+hmBOIAbCBIh/g5QkKCcm4BFQD0hKCDg+g");
	this.shape_215.setTransform(23.1,0.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#9EA1A2").s().p("AFqhdQidBJijAuQjPA7jEAJQGohlErhWg");
	this.shape_216.setTransform(-22.2,21.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9EA1A2").s().p("AhKBSQgOgEgFgKQgGgJADgQQACgPAKgSQALgTANgPQAOgQARgNQASgNASgHQATgIAUgCIAIAAQANgBALAEQAMAFAFAKQAEAKgCAPQgCANgKASQgJAQgNAQQgNAOgQAOQgSANgQAHQgUAJgUADIgPACQgMAAgHgDgAgXAEQgLAUAAAKQAAAHAIAAIAEAAQALgCAMgLQAMgMAMgUQAPgagFgHQgBgEgHAAIgCAAQgZADgXAqg");
	this.shape_217.setTransform(4.3,-13);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#9EA1A2").s().p("AhxBPQgIgPAPgZIA2hmIABgBIBAgLIg0BhQgHAPACADQAAACAFAAIAdgGIA+h2IBAgKIhVCfIgCAAIhnAZIgJABIgDAAQgUAAgHgOg");
	this.shape_218.setTransform(-7.1,6.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#9EA1A2").s().p("Ah8BQQgJgQAPgdIA8hwIBFgHIgBAEIg1BlQgIAPADAFQABADAIAAIAggEIBCiAIBFgHIhbCsIgBAAIh1ASIgHABIgEAAQgXAAgJgQg");
	this.shape_219.setTransform(-26.3,-9.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#9EA1A2").s().p("AiMB+QgLgIgFgIQgMgXAQggQAYguA6gWQgJgGgDgLQgDgNAJgQQAPgeAkgSQAjgSA1gEIBhgHIABgBIABABIgcA0IgCAAIhOAHQg2AFgKAVQgDAHACADQADAGALAAIBHgHIAEAAIgcAzIgBAAIg8AHQgYADgSAJQgRAKgHAMQgFAMADAHQAFAJAYgBIAWgCIBYgMIgeA5IgCAAIhOAOQgVAEgNAAIgFAAQggAAgTgMg");
	this.shape_220.setTransform(-46.2,-10.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#9EA1A2").s().p("Ag0gDQATgkAfgWQAfgXAmgDIAhgDIADAAIgZAuIgBABQgcADgMAGQgPAJgLAWIgtBVIhEAJg");
	this.shape_221.setTransform(-10.6,-11.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#9EA1A2").s().p("AgYhaIBEgMQAKgCASgBQApgBALAVQAKASgNAZQgSAjgZAQQgeAWg3AMIgYAFIgVAoIhLASgAAXg3IgcA3IAKgBQAkgIAQgcQAGgLgDgGQgDgFgLAAg");
	this.shape_222.setTransform(-41.4,14.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#9EA1A2").s().p("AhBBOQgHgQAPgdIA6htIAAgBIBDgMIgBAEIg3BlQgIAPACAEQACACAEABIAGgBIAZgGIgYAuIgCAAIgtALIgLABQgUAAgGgLg");
	this.shape_223.setTransform(-23.9,9.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#9EA1A2").s().p("AhSAtIA3gMQAVgEADgFIAAgDIgCgCIgbgIQgOgEgCgKQgEgNAIgNQAXgoA2gHIBJgNIgUApIgCAAIg/AMQgKACgEAFIgBADQACACAEABIATAEQARADAGAOQAEANgIAOQgRAgg3ANIhTAUg");
	this.shape_224.setTransform(8.3,3.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#9EA1A2").s().p("AhVA4QgLgWARghQAMgUARgRQAegbAkgEIBLgHIhKCKIgCAAIgRADIgoAGIgIABIgDABQgXAAgJgTgAgLgUIgBABIgCACIgBABIgBABIgEAEIAAABIgCACIgBABIgBABIAAABIgBABIgBABIAAAAIgBABIgBABIAAABIAAAAIgBABIAAAAIgBABQgKATAFAIQADAFAGAAIACAAIALgCIAhg/IgKABIgCAAIgBAAIgBAAIgBABIAAAAIgBAAIgBAAIgBABIAAAAIgBAAIgBAAIAAABIgCABIAAAAIgBABIgBAAIgBABIAAAAIgBABIgBAAIgCACIAAAAg");
	this.shape_225.setTransform(37.2,-17.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#9EA1A2").s().p("AgNhKIABAAIBDgGQAeAAAJAPQAIAPgPAaQgbA1hCAJIgRACIgRAhIg3AIgAAcgqIgIABIgWAqIACgBIAEAAIACAAIAEAAIAAAAIACgBIAAAAIABAAIABAAIABgBIABAAIABAAIAAAAIABgBIABAAIABAAIAAAAIABgBIABAAIABgBIAAAAIABAAIAAgBIABAAIABAAIABgBIAAAAIABgBIABgBIAAAAIACgBIAAAAIABgBIABgBIAAAAIABgBIACgDIABgBIABgBIABgBIAAgBIAAgBIABgBIAAAAIABgBQAFgKgCgFQgCgEgKAAg");
	this.shape_226.setTransform(19.6,-14.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9EA1A2").s().p("Ah0CbQCGhBBghaIh9g9IC4ggIBrjFIAUCwIC/ggQhJA+hmBPIAaCAIh+g5QkLCdm2BEQD0hKCBg+g");
	this.shape_227.setTransform(23.2,0.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#ADAFB0").s().p("AFqhdQidBJijAuQjPA7jEAJQGnhlEshWg");
	this.shape_228.setTransform(-22.1,21.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#ADAFB0").s().p("AhKBTQgNgFgGgKQgFgKACgPQACgPAJgSQAJgPAPgTQAPgQARgMQARgNASgIQASgHAWgDIAIgBQAPAAAJAEQAMAFAFAKQAEAKgCAOQgDAQgJAQQgJAQgNAPQgNAQgRAMQgRAOgRAHQgSAJgVADIgPABQgLAAgIgBgAgXADQgMAWABAJQAAAHAIAAIAEgBQALgBAMgLQANgNALgTQAPgagFgHQgCgEgGAAIgCAAQgZADgXApg");
	this.shape_229.setTransform(4.4,-12.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#ADAFB0").s().p("AhxBPQgHgOANgaIA3hmIAAgBIBBgLIg0BhQgIAOACAEQACACADAAIAGAAIAYgGIA+h2IBAgKIhVCfIgCAAIhnAZIgJABIgDAAQgUAAgHgOg");
	this.shape_230.setTransform(-7,6.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#ADAFB0").s().p("AhqBeQgNgEgFgKQgJgQAPgdIA8hwIBFgHIg2BpQgIAOADAGQABADAIAAIAggEIBCiAIBFgHIhbCsIgBABIh1ARIgIABIgDAAQgHAAgHgCg");
	this.shape_231.setTransform(-26.2,-9.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#ADAFB0").s().p("AiMB+QgKgGgGgKQgMgWAQghQAWgtA8gXQgKgGgCgLQgDgNAIgQQAQgeAkgSQAjgSA0gEIBigHIAAAAIABgBIABABIgcA0IgCAAIhOAHQg2AFgKAWQgDAFACAFQADAFALAAIBKgHIgbAzIgCAAIg7AHQgYADgSAJQgSAKgGANQgGAMAEAGQAEAJAZgBQALAAAKgCIBZgMIgeA5IgCAAIhOAOQgVAEgNAAIgFAAQggAAgTgMg");
	this.shape_232.setTransform(-46.1,-10.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#ADAFB0").s().p("Ag0gCQATgmAfgWQAfgVAlgEIAlgEIgZAvIgBAAQgcAEgMAHQgPAIgMAWIgsBUIhEALg");
	this.shape_233.setTransform(-10.5,-11.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#ADAFB0").s().p("AgYhaIACgBIBegOQApgBALAVQAKARgNAaQgSAjgZARQgdAVg4AMIgPADIgIACIgWApIhLARgAAug6IgXADIgcA3IAKgBQAmgIAOgcQAGgLgDgGQgDgFgJAAIgCABg");
	this.shape_234.setTransform(-41.4,14.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#ADAFB0").s().p("AhBBOQgHgPAPgdIA6huIAAgCIBDgLIg4BpQgIAOACAFQABADAFgBIAGAAIAZgGIgZAuIgBAAIgtALIgLABIgEABQgQAAgGgMg");
	this.shape_235.setTransform(-23.8,9.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#ADAFB0").s().p("AhRAuIA3gMQAUgFADgFIABgDQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgbgIQgMgDgDgKQgEgMAIgOQANgYAXgLQAPgJAagFIBKgMIgWAoIgBABIgsAIIgTAEQgKABgDAHIgBACQAAACAFABIAUAEQARADAFAOQAFANgIAPQgTAfg1AOIhVATg");
	this.shape_236.setTransform(8.3,3.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#ADAFB0").s().p("AhVA4QgMgVASgiQAMgUARgRQAegbAjgEIBLgHIhJCKIgCAAIg5AKIgIAAIgDABQgXAAgJgTgAgQgPIgBAAIAAABIgBABIgDADIgCADIgBABIAAABIgBAAIAAABIgBABIAAABIgBABIgBABIgBAAIAAABIAAAAIgBACQgJASADAIQADAFAHAAIABAAIAMgBIAhhAIgLABIgBAAIAAAAIgCAAIgBABIgBAAIAAAAIgBAAIgBABIgBAAIgBAAIAAABIAAAAIgCABIAAAAIgBABIgBAAIgBABIAAAAIgBABIgBAAIgBABIgBABIgCABIAAAAIAAAAg");
	this.shape_237.setTransform(37.3,-17.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#ADAFB0").s().p("AgNhJIACgBIBCgGQAfAAAIAPQAIAOgOAbQgcA1hCAJIgQACIgSAhIg3AIgAgCABIACAAIAEgBIADAAIAFgBIACAAIAAAAIACAAIAAgBIADgBIAAAAIABAAIABAAIABgBIAAAAIACgBIABgBIACgBIAAAAIACgBIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIAAAAIABgBIABgBIABgBIAAgBIACgCIAAAAIABgBIAAgBIABgCIABAAIAAgBQAGgKgDgFQgCgEgKAAIgIABIgEAAg");
	this.shape_238.setTransform(19.6,-14.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#ADAFB0").s().p("AhzCbQCFhBBghaIh9g8IC4ghIBsjFIATCwIC/ggQhJA+hmBPIAbCAIh/g5QkLCdm3BEQD1hKCCg+g");
	this.shape_239.setTransform(23.2,0.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#BBBDBF").s().p("ACfglQCAgiBLgWQieBJiiAuQjQA7jDAIQEJg/D/hDg");
	this.shape_240.setTransform(-22,21.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#BBBDBF").s().p("AhJBSQgOgDgGgLQgFgKACgPQADgPAJgSQAKgSAOgQQANgQASgNQAQgMAUgIQAVgIASgCIAIAAQAPgBAJAEQANAFAEAKQAFAKgDAPQgDAOgJARQgIAPgOARQgPARgOAKQgPAMgTAJQgTAJgUADIgPABIgEAAQgIAAgHgCgAAZgpQgZADgXAqQgLAWAAAIQAAAIAJgBIADAAQANgDAKgKQAMgMAMgUQAOgZgDgJQgDgDgFAAg");
	this.shape_241.setTransform(4.4,-12.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#BBBDBF").s().p("AhxBPQgIgOAOgaIA3hnIBAgLIgzBhQgIAPACAEQABABAEAAIAegHIA+h1IBAgKIhVCfIgCAAIhnAZIgJABQgXAAgHgOg");
	this.shape_242.setTransform(-6.9,6.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#BBBDBF").s().p("Ah8BQQgJgRAPgcIA8hwIBFgHIgCAEIg0BkQgIAPACAGQADADAHAAIAggEIBCiAIBFgHIhbCsIgBAAIh9ATQgbAAgIgQg");
	this.shape_243.setTransform(-26.1,-9.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#BBBDBF").s().p("AiMB+QgKgHgFgKQgMgWAQggQAWguA7gWQgJgGgDgLQgDgNAJgQQAPgeAlgSQAjgSA0gEIBigHIAAgBIAAAAIABABIgcA0IgBAAIhPAHQg2AFgKAVQgDAGACAEQAEAHALgBIAEAAIBGgIIgcA0IgBAAIg8AHQgYADgSAJQgRAKgGAMQgGANADAGQAFAIAYAAIBvgPIgfA6IgBAAQgCABhNANQgPADgTABIgFAAQghAAgSgMg");
	this.shape_244.setTransform(-46.1,-10.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BBBDBF").s().p("Ag0gDQATglAfgVQAfgXAlgDIAigEIADAAIgZAvIgBAAQgcADgMAIQgQAHgLAXIgsBUIhEALg");
	this.shape_245.setTransform(-10.4,-11);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#BBBDBF").s().p("AgYhaIACgBIBDgLQAQgDALAAQApgBALAVQAKAQgNAbQgSAigZARQgdAWg4AMIgXAFIgWAoIhLASgAAXg3IgcA3IAKgCQAmgHAOgcQAGgLgDgGQgDgFgLAAg");
	this.shape_246.setTransform(-41.3,14.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#BBBDBF").s().p("AhBBOQgHgPAPgdIA6hvIBDgMIg4BpQgJAPADAFQABACAFAAIAfgHIgZAuIgBAAIgtALIgLACQgUAAgGgMg");
	this.shape_247.setTransform(-23.7,9.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BBBDBF").s().p("AhRAtIA3gLQAVgGACgFIABgCQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgbgIQgMgDgDgKQgEgMAIgPQANgXAXgMQAPgJAagEIBGgLIAEgBIgWApIgBAAIg/AMQgJACgFAFIAAADQAAABAFACIAUAEQARAEAFANQAFANgIAOQgTAhg1AMIhVAUg");
	this.shape_248.setTransform(8.4,3.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#BBBDBF").s().p("AhVA5QgMgWASgiQAMgUARgRQAegbAjgDIBLgIIhJCKIgCAAIhBALQgaAAgJgSgAgMgTIgBABIgBAAIgFAGIAAABIgDACIAAABIgCABIAAACIgCABIAAABIgBABIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBACQgKARAEAKQAEAGAGgCIABAAIAMgBIAhhAIgLABIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIAAAAIgBAAIgBABIgBAAIAAAAIAAABIgBAAIgBABIAAAAIgBABIgBAAIgBAAIAAABIgBABIgBAAIgBABIAAAAIgBABIgCABIAAAAg");
	this.shape_249.setTransform(37.4,-17);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#BBBDBF").s().p("AgNhKIACAAIBCgGQAfAAAIAPQAHAOgNAbQgdA1hBAJIgQACIgSAhIg3AIgAAUgpIgWAqIACgBIAEAAIACAAIACAAIAGgBIAAAAIAFgCIAAAAIABgBIACAAIAAAAIABgBIABgBIABAAIABAAIABgBIAAAAIABgBIABgBIABgBIABAAIAAgBIABAAIAAgBIABAAIACgCIAAgBIABgBIABgBIABgBIAAgBIABgBIAAAAIABgBIAAAAIAAgBIABAAIAAgCQAGgJgDgFQgCgEgKAAIgDAAg");
	this.shape_250.setTransform(19.7,-14.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BBBDBF").s().p("AhzCaQCFhABghaIh9g9IC4ggIBsjFIATCwIC/ggQhJA9hmBPIAbCBIh/g5QkKCcm4BFQD1hKCCg/g");
	this.shape_251.setTransform(23.3,0.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D3D4D5").s().p("ACfglQCAgiBLgWQidBJijAuQjPA7jEAJQEJhAD/hDg");
	this.shape_252.setTransform(-21.9,21.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#D3D4D5").s().p("AhKBTQgNgFgGgKQgFgKACgPQACgPAKgSQAKgSAOgQQANgPASgNQARgOATgHQARgIAWgCIAIgBQAPABAJADQAMAFAFAKQAEAJgCAQQgEAQgIAPQgJARgNAOQgLAOgSAOQgRANgRAIQgVAJgTADIgPACQgLAAgIgCgAgXAEQgLAUAAAKQAAAHAIAAIAEAAQAMgCALgLQAMgLAMgVQAPgagFgIQgBgDgHAAIgCAAQgZADgXAqg");
	this.shape_253.setTransform(4.6,-12.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D3D4D5").s().p("AhxBPQgHgOANgaIA3hmIAAgBIBBgLIg0BhQgIANACAGQACABADAAIAGAAIAYgGIA+h1IBAgLIhVCfIgCAAIhnAZIgJABIgDAAQgUAAgHgOg");
	this.shape_254.setTransform(-6.8,6.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D3D4D5").s().p("Ah8BQQgJgQAPgdIA8hwIBFgHIgBAEIg1BlQgIAPADAFQABADAIAAIAggEIBCiAIBFgHIhbCsIgBABIh1ARIgHABIgEAAQgYAAgIgQg");
	this.shape_255.setTransform(-26,-9.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D3D4D5").s().p("AiMB+QgLgHgFgJQgMgWAQghQAXgtA7gXQgWgOAQggQAPgeAkgSQAjgSA1gEIBhgHIABgBIABABIgcA0IgCAAIhOAHQg2AFgKAWQgDAFACAFQAEAGAKgBIAEAAIBDgHIAEAAIgcAzIgBAAIg8AHQgYADgSAJQgRAKgHANQgGAMAEAGQAFAJAYgBQALAAAKgCIBZgMIgeA5IgCAAIhOAOQgVAEgNAAIgHAAQgeAAgTgMg");
	this.shape_256.setTransform(-45.9,-10.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D3D4D5").s().p("Ag0gCQATglAfgXQAfgWAlgDIAlgDIgZAuIgBAAQgcAEgMAGQgPAJgMAWIgsBUIhEAKg");
	this.shape_257.setTransform(-10.3,-10.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D3D4D5").s().p("AgYhbIBggOQApgBALAVQAKARgNAaQgSAigZARQgeAVg3ANIgYAFIgVAoIhMASgAAug7IgLABIgMADIgcA3IAJgCQAlgIAQgbQAFgMgCgFQgDgFgJAAIgCAAg");
	this.shape_258.setTransform(-41.1,14.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D3D4D5").s().p("AhBBOQgHgPAPgdIA6huIAAgCIBDgLIg4BpQgIAPACAEQABADAFAAIAfgHIgZAuIgBAAIgtALIgLABIgEABQgQAAgGgMg");
	this.shape_259.setTransform(-23.6,9.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#D3D4D5").s().p("AhRAuIA3gNQAUgEADgGIABgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgcgHQgMgEgDgKQgEgNAIgOQANgXAXgMQAPgIAagFIBKgMIgWAoIgBABIg/AMQgKACgDAFIgBADQABACAEABIAUAEQARAEAFANQAFANgIAOQgSAgg2ANIhQAUIgFAAg");
	this.shape_260.setTransform(8.5,4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#D3D4D5").s().p("AhVA4QgLgWARghQAMgUARgRQAegbAjgEIBLgHIhJCKIgCAAIg5AKIgIAAIgDABQgXAAgJgTgAgDgZIgBAAIgBABIAAAAIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIgJAJIAAAAIgBACIgBABIgBABIAAABIgBAAIAAABIgBABIAAABIgBABIgBABIgBAAIAAABIAAAAIgBACQgKATAFAHQACAFAHAAIACAAIALgBIAhhAIgKABIgCAAIgCAAIgBABIAAAAIgBAAIgBAAIgBABIAAAAIgBAAIgBABIAAAAIgCABIAAAAg");
	this.shape_261.setTransform(37.5,-17);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#D3D4D5").s().p("AgNhJIABgBIBDgGQAeAAAJAPQAIAPgPAaQgbA1hCAJIgRACIgRAhIg3AIgAAggqIgMABIgWAqIACAAIAEgBIACAAIACAAIACAAIAAAAIACAAIAAgBIACAAIABAAIAAgBIACAAIAAAAIABgBIABAAIABAAIAAAAIABgBIABAAIABgBIABAAIABgBIABAAIABgBIABgBIABAAIAAgBIABAAIABgBIAAAAIABgBIAAAAIABgBIAAAAIABgBIABgBIABgBIAAgBIACgCIAAAAIABgBIAAgCIABAAIAAgBIAAAAIABgBQAFgKgCgFQgDgEgHAAIgCAAg");
	this.shape_262.setTransform(19.9,-14.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D3D4D5").s().p("AhzCbQCFhBBghaIh9g8IC4ghIBsjFIATCwIC/ggQhJA+hmBPIAbCAIh/g5QkLCdm3BEQD1hKCCg+g");
	this.shape_263.setTransform(23.4,0.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#ECEEEE").s().p("AFqhdQidBJijAuQjPA7jEAJQGnhlEshWg");
	this.shape_264.setTransform(-21.8,21.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#ECEEEE").s().p("AhJBTQgPgFgFgKQgFgLACgOQADgQAJgRQAKgRAOgRQAOgPARgNQASgOASgHQARgIAWgCIAIgBQAPABAJADQANAGAEAJQAFAJgDAPQgDAQgJAQQgJAQgNAPQgNAQgQAMQgPAMgTAKQgTAIgUADIgPABQgMAAgHgBgAgXADQgLAXAAAIQAAAHAJAAIADAAQAMgCALgLQAOgNAKgTQAOgZgDgJQgCgDgGAAIgDAAQgYADgYApg");
	this.shape_265.setTransform(4.7,-12.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#ECEEEE").s().p("AhxBPQgHgOANgaIA3hmIAAgBIBBgLIg0BhQgIAOACAFQABABAEAAIAGAAIAYgGIA+h1IBAgLIhVCfIgCAAIhnAZIgJABIgDAAQgUAAgHgOg");
	this.shape_266.setTransform(-6.7,6.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#ECEEEE").s().p("Ah8BQQgJgQAPgdIA8hwIBFgHIg2BpQgIAPACAFQACADAIAAIAggEIBCiAIBFgHIhbCsIgBABIh1ARIgIABIgEAAQgXAAgIgQg");
	this.shape_267.setTransform(-25.9,-9.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#ECEEEE").s().p("AiMB+QgKgGgFgKQgMgWAQghQAWgtA7gXQgWgPAQgfQAPgeAkgSQAkgSA0gEIBhgHIABgBIABABIgcA0IgBAAIhPAHQg2AFgKAWQgCAFABAFQAFAGAKgBIAEAAIBCgHIAEAAIgcAzIgBAAIg8AHQgYADgSAJQgRAKgGANQgGAMADAGQAFAJAYgBQALAAALgCIBZgMIgfA5IgBAAIhPAOQgVAEgNAAIgHAAQgeAAgTgMg");
	this.shape_268.setTransform(-45.8,-10.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#ECEEEE").s().p("Ag0gCQATglAfgXQAegVAngEIAkgEIgZAvIgBAAQgdAEgLAGQgPAJgMAWIgsBUIhEAKg");
	this.shape_269.setTransform(-10.2,-10.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#ECEEEE").s().p("AgYhbIACAAIBegOQApgBALAVQAKAQgNAbQgSAigZARQgdAVg4ANIgPADIgIACIgWAoIhLASgAAug7IgXAEIgcA3IAKgCQAmgIAOgbQAGgLgDgGQgDgFgKAAIgBAAg");
	this.shape_270.setTransform(-41,14.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#ECEEEE").s().p("AhBBOQgIgPAQgdIA6huIAAgCIBDgLIg4BpQgIAOACAFQABADAFAAIAfgHIgZAuIgBAAIgtALIgLABIgEABQgQAAgGgMg");
	this.shape_271.setTransform(-23.5,9.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#ECEEEE").s().p("AhRAuIA3gNQAUgEADgGIABgCQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgbgIQgMgDgDgKQgEgLAIgQQANgXAXgLQAPgKAagEIBKgMIgWAoIgBABIg/AMQgJABgFAGIAAADQAAABAFACIAUAEQARADAFAOQAFAMgIAQQgTAgg1ANIhRATIgEAAg");
	this.shape_272.setTransform(8.7,4.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#ECEEEE").s().p("AhVA4QgMgVASgiQAMgUARgRQAegbAjgEIBLgHIhJCKIgCAAIg5AKIgIAAIgDABQgXAAgJgTgAgQgPIgBAAIAAABIgBABIgBAAIAAABIgCACIgCADIgBABIAAABIgCABIAAABIgBABIAAAAIAAABIgBABIgBAAIAAABIAAAAIgBACQgKASAEAIQADAFAHAAIABAAIAMgBIAhhAIgLABIgBAAIgCAAIgBABIgBAAIgBAAIAAAAIgBABIgBAAIgBAAIAAABIAAAAIgBAAIgBABIAAAAIgBABIgBAAIgBABIAAAAIgBABIgBAAIgBABIAAAAIgBABIgBAAIgBABIAAAAIAAAAg");
	this.shape_273.setTransform(37.7,-16.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#ECEEEE").s().p("AgNhJIACgBIBCgGQAfAAAIAPQAIAOgOAbQgdA1hBAJIgQACIgSAhIg3AIgAgCABIACAAIAEgBIACAAIACAAIACAAIAAAAIACAAIAAgBIACAAIACAAIAAgBIABAAIAAAAIACgBIAAAAIABAAIACgBIAAAAIACgBIABAAIABgBIABgBIAAAAIACgBIAAgBIABAAIACgCIABgBIAAAAIABgBIABgBIABgBIAAgBIACgCIAAAAIABgBIAAAAIABgCIAAgBIABAAIAAgBQAGgKgDgFQgCgEgKAAIgIABIgEAAg");
	this.shape_274.setTransform(20,-14.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#ECEEEE").s().p("AhzCbQCFhBBghaIh9g8IC4ghIBsjFIATCwIC/ggQhJA+hmBPIAbCAIh/g5QkLCdm3BEQD1hKCCg+g");
	this.shape_275.setTransform(23.6,0.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgaAPQgFgCAFgJIAFgHQALgEAogHQgsAdgLAAIgBAAg");
	this.shape_276.setTransform(80.9,-39.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AnNGIQAEgIAMgHQAYgQApAIQAUAEAUgKQAUgKgJgEQgGgDiaATQiLARgmAGIg/AIQgoAFgDgBQgFgCAPgcQARgfAagWQASgOAfgNQAagLACgEQgrAEgJACQgPADALgbIAGgPQACgEAGgGQAGgGAIgBIADgBIgJgBIgHgBQAXgLgDgLQgBgFALgQQAIgMgKgBIATgPQAUgRgZgJIAGgDQAIgDALgCQASgEAVgKQAWgKAAgHQACgNghAEQgeADgMAJQACgDgDgCQgFgFgUACQgTAChRAQIhNAPQAcg6AggPQAPgIAMABQABgEgPgBQgOgBgFABQgDAAAEgMQADgMAGgIQAFgHAGgFIANgJQAHgGgJgDIAHAAQAHgBADgCQADgCAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgSABQgBAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAgBIAHgNIAEgKIACgEIAYgGIAdgFQAHAAACgDIAAgEQgBgEgkAFIgNAEQgHABAEgEQACgDAEgNQAFgOAJgMQAJgNAIgCQAIgCABgBQADgEgIgEIgHgDIAIgDQAGgEADgGQAHgPAIgNQABgBAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAIgFgBQgCAAAEgFIAGgHIAHgNQABgDASACIAGgDQgPgDgJADQgGABADgFIAIgLIAJgQIAVgEQAPgCAmAAQAGAAAEgEQAEgEgFAAIghAEQgdADgDgFQgDgEAAgGIAAgEIGQguQgBAGgDAGQgHAOgNAGIEggZQASgBAJABQAGABhBAHQhGAIgGACQgHADgfAEIgMABQBKgFA5gIQAfgFDigUQBPgIAXgWIBDgEQBHgEAYgEQAlgGA9gFQBFgHACAFQACADgxAKIgvAJQAFACAigFQAngHAZgJQAZgKAcAFQgFASgNAWQgZAtgmAYIAUgGQADgCgWAqQgVAqgHAEIgJAEQgIAFADABQAHABAGgBIAMgCIBJgOQBEgMAPABQgMAegRAiQgjBDgZAQIAGAAQAFABABACQABADgSAZIgHgBQgGAAAAABIAGACQAGACgBACIgOAWQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgFAAQgGACADADQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgCAEQgBADAFACIAFABQgGAJgIAOQgPAbgHAcIgWANQgVAMgBAIQgBAHAXgBQAMAAAMgCIAQgBQATgCAMgEQgLAkgmA8IgkA2QABACi/AhQjCAhgJAEQABgFgEgFQgHgJgWABQgVABhZAOIhnARIAsgOQANgEA6gHQAKgBgHgFQgGgFgSAFIgwAKQghAGgXALQgRAHhVALIhoAMIjxAeIgEABQgMAAAEgJg");
	this.shape_277.setTransform(-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,-40.8,167.6,81.6);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D16F1D").s().p("AADARIgDgFIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEAAIgDADIgBADIgBADQAAAFADADQACADAFAAIAAAFQgHAAgEgFQgDgEAAgHIABgFIACgFIAEgDQABgBAFAAIAVAAQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgCIAEAAIABACIAAABIgBADIgBACIgGABIAHAGIABADIABAFIgBAGIgCAEIgEADIgFABQgFAAgCgCgAAAgGIAAACIACAMQABACACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAEgBIACgCQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIgBgFIgDgEIgEgDIgFgBIgGAAg");
	this.shape.setTransform(7.2,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D16F1D").s().p("AgUAWIAAgHIAjgPIgjgPIAAgGIApAAIAAAFIghAAIAhAOIAAAEIghAPIAAAAIAhAAIAAAFg");
	this.shape_1.setTransform(7.2,-21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D16F1D").s().p("AADARQgCgBgBgEIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEABIgDACIgBADIgBAEQAAAEADADQACADAFABIAAAFQgHgCgEgDQgDgFAAgHIABgFIACgEIAEgEQACgBAEgBIAVAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgCIAEAAIABACIAAABIgBADIgBACIgDABIgDAAIAAABIAEACIADADIABADIABAFIgBAGQAAACgCACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABQgFAAgCgCgAAAgGIACANIADAGQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAEgBIACgBIACgDIABgEIgBgFQgBgCgCgCIgEgDIgFgBIgGAAg");
	this.shape_2.setTransform(7.2,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D16F1D").s().p("AAPAUIABgBIAAgDIAAgCIgCgBIgDgCIgGgCIgZgCIAAgaIApAAIAAAFIgkAAIAAARIAPABQAEgBAFACIAGACIAEADIACADIAAADIAAABIAAADIgBAAg");
	this.shape_3.setTransform(7.2,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16F1D").s().p("AgUASIAAgFIAVAAIgVgWIAAgHIARARIAYgSIAAAGIgVAPIAHAJIAOAAIAAAFg");
	this.shape_4.setTransform(7.2,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D16F1D").s().p("AgHARIgHgDQgDgCgCgEQgCgDAAgFQAAgFACgDQACgDADgCIAIgEIAHgBIAAAgIAGgBQAEgBABgCIAEgEQACgCAAgEQAAgFgDgDQgEgDgEgBIAAgFQAHACAEAEQAEAEAAAHQAAAFgCADIgFAGIgHADIgIABgAgHgLIgFACIgDAFQgCACAAACIACAGIADADIAFADIAFACIAAgag");
	this.shape_5.setTransform(7.2,-2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D16F1D").s().p("AgbAVIAAgYIABgHQAAgDACgCIAGgEQACgBAEAAQAFAAACABIAFAEIADAFIABAHIAAATIAYAAIAAAFgAgUgLQgDAEAAAFIAAASIAXAAIAAgSQAAgFgDgEQgCgEgHAAQgGAAgCAEg");
	this.shape_6.setTransform(6.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA838").s().p("AgFAVIAAgPIgPAAIAAgLIAPAAIAAgPIALAAIAAAPIAOAAIAAALIgOAAIAAAPg");
	this.shape_7.setTransform(5,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFA838").s().p("AgUAmIAAgPIAKgKQAFgFADgFQACgDADgGQACgEAAgHIAAgBIgBgDIgBgCIgDgBQgDAAgCADQgCAFAAAGIgNgDQABgIACgFQACgFADgCQADgDAEgBIAIgBIAFACIAEACIAEADIAEAGIABAJQAAAGgCAFQgCAFgEAEIgRAUIAZAAIgBAOg");
	this.shape_8.setTransform(0,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA838").s().p("AgTAmIAAgNIAMAAIAAgrIgFAGIgGAFIAAgQIAEgCIAIgIIAEgFIAKAAIAAA/IALAAIAAANg");
	this.shape_9.setTransform(-4.9,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D16F1D").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgnAAgbgcg");
	this.shape_10.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-28.3,19,56.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D16F1D").s().p("AADARIgDgFIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEAAIgDADIgBADIgBADQAAAFADADQACADAFAAIAAAFQgHAAgEgFQgDgEAAgHIABgFIACgFIAEgDQABgBAFAAIAVAAQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgCIAEAAIABACIAAABIgBADIgBACIgGABIAHAGIABADIABAFIgBAGIgCAEIgEADIgFABQgFAAgCgCgAAAgGIAAACIACAMQABACACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAEgBIACgCQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIgBgFIgDgEIgEgDIgFgBIgGAAg");
	this.shape.setTransform(7.2,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D16F1D").s().p("AgUAWIAAgHIAjgPIgjgPIAAgGIApAAIAAAFIghAAIAhAOIAAAEIghAPIAAAAIAhAAIAAAFg");
	this.shape_1.setTransform(7.2,-21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D16F1D").s().p("AADARQgCgBgBgEIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEABIgDACIgBADIgBAEQAAAEADADQACADAFABIAAAFQgHgCgEgDQgDgFAAgHIABgFIACgEIAEgEQACgBAEgBIAVAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgCIAEAAIABACIAAABIgBADIgBACIgDABIgDAAIAAABIAEACIADADIABADIABAFIgBAGQAAACgCACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABQgFAAgCgCgAAAgGIACANIADAGQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAEgBIACgBIACgDIABgEIgBgFQgBgCgCgCIgEgDIgFgBIgGAAg");
	this.shape_2.setTransform(7.2,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D16F1D").s().p("AAPAUIABgBIAAgDIAAgCIgCgBIgDgCIgGgCIgZgCIAAgaIApAAIAAAFIgkAAIAAARIAPABQAEgBAFACIAGACIAEADIACADIAAADIAAABIAAADIgBAAg");
	this.shape_3.setTransform(7.2,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16F1D").s().p("AgUASIAAgFIAVAAIgVgWIAAgHIARARIAYgSIAAAGIgVAPIAHAJIAOAAIAAAFg");
	this.shape_4.setTransform(7.2,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D16F1D").s().p("AgHARIgHgDQgDgCgCgEQgCgDAAgFQAAgFACgDQACgDADgCIAIgEIAHgBIAAAgIAGgBQAEgBABgCIAEgEQACgCAAgEQAAgFgDgDQgEgDgEgBIAAgFQAHACAEAEQAEAEAAAHQAAAFgCADIgFAGIgHADIgIABgAgHgLIgFACIgDAFQgCACAAACIACAGIADADIAFADIAFACIAAgag");
	this.shape_5.setTransform(7.2,-2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D16F1D").s().p("AgbAVIAAgYIABgHQAAgDACgCIAGgEQACgBAEAAQAFAAACABIAFAEIADAFIABAHIAAATIAYAAIAAAFgAgUgLQgDAEAAAFIAAASIAXAAIAAgSQAAgFgDgEQgCgEgHAAQgGAAgCAEg");
	this.shape_6.setTransform(6.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA838").s().p("AgFAVIAAgPIgPAAIAAgLIAPAAIAAgPIALAAIAAAPIAOAAIAAALIgOAAIAAAPg");
	this.shape_7.setTransform(5,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFA838").s().p("AgUAmIAAgPIAKgKQAFgFADgFQACgDADgGQACgEAAgHIAAgBIgBgDIgBgCIgDgBQgDAAgCADQgCAFAAAGIgNgDQABgIACgFQACgFADgCQADgDAEgBIAIgBIAFACIAEACIAEADIAEAGIABAJQAAAGgCAFQgCAFgEAEIgRAUIAZAAIgBAOg");
	this.shape_8.setTransform(0,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA838").s().p("AgTAmIAAgNIAMAAIAAgrIgFAGIgGAFIAAgQIAEgCIAIgIIAEgFIAKAAIAAA/IALAAIAAANg");
	this.shape_9.setTransform(-4.9,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D16F1D").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgnAAgbgcg");
	this.shape_10.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-28.3,19,56.8);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA838").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.afisha_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.stopCycle) == "undefined") {     
		    this.btnMain.addEventListener("click", function (e) {
		        var t = e.nativeEvent;
		        if (t.which == 1 || t.button == 0) {
		            window.callClick();
		        };
		    });
		    this.stopCycle = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(114));

	// Слой 2
	this.btnMain = new lib.Button_1();
	this.btnMain.parent = this;
	this.btnMain.setTransform(120,200);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.Button_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(114));

	// FlashAICB
	this.instance = new lib.Анимация11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120,469);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,332);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true,y:332},7).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},7).wait(42).to({startPosition:0},0).to({y:468},9).wait(38));

	// FlashAICB
	this.instance_2 = new lib.Символ4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.1,293);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121.1,293);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,alpha:1},4).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},4).wait(9).to({startPosition:0},0).to({y:245},7).wait(42).to({startPosition:0},0).to({x:123.1,y:-51.1},9).wait(38));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D16F1D").s().p("AADARIgDgFIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEAAIgDADIgBADIgBADQAAAFADADQACADAFAAIAAAFQgHAAgEgFQgDgEAAgHIABgFIACgFIAEgDQABgBAFAAIAVAAQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgCIAEAAIABACIAAABIgBADIgBACIgGABIAHAGIABADIABAFIgBAGIgCAEIgEADIgFABQgFAAgCgCgAAAgGIAAACIACAMQABACACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIAEgBIACgCQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgDIgBgFIgDgEIgEgDIgFgBIgGAAg");
	this.shape.setTransform(229.2,336.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D16F1D").s().p("AgUAWIAAgHIAjgPIgjgPIAAgGIApAAIAAAFIghAAIAhAOIAAAEIghAPIAAAAIAhAAIAAAFg");
	this.shape_1.setTransform(229.2,341.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D16F1D").s().p("AADARQgCgBgBgEIgCgHIgBgHIAAgDIgBgCIgBgBIgDAAIgEABIgDACIgBADIgBAEQAAAEADADQACADAFABIAAAFQgHgCgEgDQgDgFAAgHIABgFIACgEIAEgEQACgBAEgBIAVAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgCIAEAAIABACIAAABIgBADIgBACIgDABIgDAAIAAABIAEACIADADIABADIABAFIgBAGQAAACgCACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgFABQgFAAgCgCgAAAgGIACANIADAGQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAEgBIACgBIACgDIABgEIgBgFQgBgCgCgCIgEgDIgFgBIgGAAg");
	this.shape_2.setTransform(229.2,346.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D16F1D").s().p("AAPAUIABgBIAAgDIAAgCIgCgBIgDgCIgGgCIgZgCIAAgaIApAAIAAAFIgkAAIAAARIAPABQAEgBAFACIAGACIAEADIACADIAAADIAAABIAAADIgBAAg");
	this.shape_3.setTransform(229.2,351.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16F1D").s().p("AgUASIAAgFIAVAAIgVgWIAAgHIARARIAYgSIAAAGIgVAPIAHAJIAOAAIAAAFg");
	this.shape_4.setTransform(229.2,355.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D16F1D").s().p("AgHARIgHgDQgDgCgCgEQgCgDAAgFQAAgFACgDQACgDADgCIAIgEIAHgBIAAAgIAGgBQAEgBABgCIAEgEQACgCAAgEQAAgFgDgDQgEgDgEgBIAAgFQAHACAEAEQAEAEAAAHQAAAFgCADIgFAGIgHADIgIABgAgHgLIgFACIgDAFQgCACAAACIACAGIADADIAFADIAFACIAAgag");
	this.shape_5.setTransform(229.2,360.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D16F1D").s().p("AgbAVIAAgYIABgHQAAgDACgCIAGgEQACgBAEAAQAFAAACABIAFAEIADAFIABAHIAAATIAYAAIAAAFgAgUgLQgDAEAAAFIAAASIAXAAIAAgSQAAgFgDgEQgCgEgHAAQgGAAgCAEg");
	this.shape_6.setTransform(228.4,364.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA838").s().p("AgFAVIAAgPIgPAAIAAgLIAPAAIAAgPIALAAIAAAPIAOAAIAAALIgOAAIAAAPg");
	this.shape_7.setTransform(227,381.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFA838").s().p("AgUAmIAAgPIAKgKQAFgFADgFQACgDADgGQACgEAAgHIAAgBIgBgDIgBgCIgDgBQgDAAgCADQgCAFAAAGIgNgDQABgIACgFQACgFADgCQADgDAEgBIAIgBIAFACIAEACIAEADIAEAGIABAJQAAAGgCAFQgCAFgEAEIgRAUIAZAAIgBAOg");
	this.shape_8.setTransform(222,381.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA838").s().p("AgTAmIAAgNIAMAAIAAgrIgFAGIgGAFIAAgQIAEgCIAIgIIAEgFIAKAAIAAA/IALAAIAAANg");
	this.shape_9.setTransform(217.1,381.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D16F1D").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgnAAgbgcg");
	this.shape_10.setTransform(222,381.9);

	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(222,363);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(226,231);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_4}]},18).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},42).to({state:[{t:this.instance_5}]},9).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({_off:true,x:226,y:231},7).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},7).wait(42).to({startPosition:0},0).to({x:225.5,y:-62.4},9).wait(38));

	// FlashAICB
	this.instance_6 = new lib.Символ3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,208);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Анимация8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,208);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,alpha:1},5).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},5).wait(13).to({startPosition:0},0).to({y:167},7).wait(42).to({startPosition:0},0).to({y:-126.9},9).wait(38));

	// FlashAICB
	this.instance_8 = new lib.Анимация6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.3,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({startPosition:0},0).to({y:59},7).wait(42).to({startPosition:0},0).to({y:-233.9},9).wait(38));

	// FlashAICB
	this.instance_9 = new lib.Анимация17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,147);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация18("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,-145.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},67).to({state:[{t:this.instance_10}]},9).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({_off:true,y:-145.9},9).wait(38));

	// Слой 1
	this.instance_11 = new lib.wonder_woman_240x400();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67).to({_off:false},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFA838",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./wonder_woman_240x400.jpg", id:"wonder_woman_240x400"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;