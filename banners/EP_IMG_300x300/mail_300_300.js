(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"./capsul2pngcopy.png", id:"capsul2pngcopy"},
		{src:"./flashjpgcopy2.jpg", id:"flashjpgcopy2"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.capsul2pngcopy = function() {
	this.initialize(img.capsul2pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,56);


(lib.flashjpgcopy2 = function() {
	this.initialize(img.flashjpgcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,635,306);


(lib.Tween47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGfAwIgGgDIgFgEQgEgEgBgIQgBgGgBgKIAAg7IAUAAIAABBIACAGQABADACABQABACAFAAIAEgBQACgBABgDIACgFIAAhDIAQAAIAAA5QAAALgBAHQgBAGgDAEQgDAEgFADIgGACIgNABgADeAvQgFgBgDgCIgFgGIgDgFIgCgGIgBgEIAQgGIAAAEIAEAGIABACIADACIAFABIADgBIAEgCIACgDIAAgFIgBgEQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQgBgCgDgCIgQgIIgHgEIgDgIIgBgIQABgIACgGQACgFAEgEQAEgDAEgCQAFgCAFAAIAIABIAHADQADADADAFQAEAEABAGIgPAHIgCgHIgCgDIgEgCIgDAAIgCAAIgEADIgCACIAAAEIABAFQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAIAGAEIAPAIIAHAEQACAEACAEIABAIIgBAJIgCAHIgEAEIgDAEQgDADgGACQgFACgFAAIgKgCgACUAwIgGgDIgFgEQgEgEgBgIQgBgGAAgKIAAg7IATAAIABBBIABAGQAAADACABQADACAEAAIAEgBQACgBACgDIABgFIAAhDIARAAIAAA5QgBALgBAHQgBAGgDAEQgDAEgFADIgGACIgNABgAjOAwIgGgBIgFgDIgGgHIgDgEIgDgIIgBgKIgBgPIABgOIABgKIADgIIADgEIAGgHIAFgDIAGgBIAFgBIAFABIAHABIAFADIAFAHIADAEIADAIIACAKIABAOIgBAPIgCAKIgDAIIgDAEIgFAHIgFADIgHABIgFABgAjNgdIgCACIgBADIgBAGIgBAdIABAIIABAGIABADIACACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgCIACgDIABgGIAAglIgBgGIgCgDIgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAlvAwIgGgDIgFgEQgEgEgBgIQgBgGgBgKIAAg7IAUAAIAABBIABAGQACADACABQABACAEAAIAFgBQACgBABgDIABgFIAAhDIARAAIAAA5QAAALgBAHQgBAGgDAEQgDAEgFADIgGACIgNABgAFnAvIgLgmIgHAAIAAAmIgTAAIAAhdIAfAAIAHABIAHACQADACACAEQADAEABAFIABAKIgBAJQgBAFgCAEIgEACIgEAEIAOApgAFVgEIAGAAQADAAACgCIADgCIACgFIABgFIgBgHIgCgDQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgEgBIgGAAgAEXAvIAAgUIASAAIAAAUgABGAvIAAhdIATAAIAABMIAZAAIAAARgAgDAvIAAhdIAeAAIAGABIAGACIAFAGQADADABAHIACAKIgCALIgCAGIgCADQgDAEgDABIgGADIgGABIgMAAIAAAjgAAOgDIAJAAIAEgDIABgDIABgJIAAgFQAAgDgCgCQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgEgBIgFAAgAgnAvIgEgUIgTAAIgEAUIgRAAIAVhdIAVAAIAWBdgAgtALIgIgnIAAAEIgHAjIAPAAgAiVAvIAAhdIAgAAIAHABIAFACIAGAGQADADABAHIABAKIgBALIgCAGIgDADQgDAEgDABIgGADIgGABIgMAAIAAAjgAiCgDIAJAAIAEgDIACgDIABgJIgBgFQAAgDgCgCQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgEgBIgFAAgAkMAvIgLgmIgHAAIAAAmIgTAAIAAhdIAgAAIAHABIAGACQADACADAEQADAEAAAFIABAKIgBAJQAAAFgCAEIgEACIgFAEIAOApgAkegEIAHAAQADAAACgCIADgCIACgFIAAgFIgBgHIgBgDQgCgCgDgBIgDgBIgHAAgAnEAvIAAhdIAxAAIAAARIgeAAIAAAVIAXAAIAAAPIgXAAIAAAXIAeAAIAAARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-4.9,90.8,9.9);


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL1BwQgHgBgEgDQgKgGgGgHQgGgIgDgKQgDgKgBgKIgCgTIACgtIAFgTQAEgKAGgIQAGgGAJgGQAJgFAPAAIAMABIAJADIAMAJQAGAFADAIIAFAOIADAOIAAAKIgfADQAAgNgCgGIgDgJQgCgFgEgBQgEgDgEAAQgIAAgEAHIgDAEIgCAKIgCAoIABAcQABAKACAFQACAGAEABQADADAGAAQAFAAADgDQAEgCACgFQADgEABgHIABgOIAeADIgDAWIgFANQgDAHgEAGQgIAIgIADQgJAEgKAAQgHAAgGgCgAB6BwQgHgBgEgDQgKgGgGgHQgGgIgDgKQgDgKgBgKIgDghIADgfIAFgTQAEgKAGgIQAGgGAJgGQAJgFAPAAIAMABIAJADIAMAJQAGAFADAIIAFAOIADAOIAAAKIgfADQAAgNgCgGIgDgJQgCgFgEgBQgEgDgEAAQgIAAgEAHIgDAEIgCAKIgCAoIABAcQABAKACAFQACAGAEABQADADAGAAQAFAAADgDQAEgCACgFQADgEABgHIABgOIAeADIgDAWIgFANQgDAHgEAGQgIAIgIADQgJAEgKAAQgHAAgGgCgAomBvIAAgdIAMABIAIgBQAEAAADgCQADgDACgDIADgHIgvh+IAoAAIASA+IABAEIADAPIABAAIABgMIAShFIAeAAIgqCTQgDAJgHAHQgGAGgHABQgIADgIAAQgKAAgJgDgAsKBwQgHgBgEgDQgKgGgGgHQgGgIgDgKQgDgKgBgKIgCgTIACgtIAFgTQAEgKAGgIQAGgGAJgGQAJgFAPAAIAMABIAJADIAMAJQAGAFADAIIAFAOIADAOIAAAKIgfADQAAgNgCgGIgDgJQgCgFgEgBQgEgDgEAAQgIAAgEAHIgDAEIgCAKIgCAoIABAcQABAKACAFQACAGAEABQADADAGAAQAFAAADgDQAEgCACgFQADgEABgHIABgOIAeADIgDAWIgFANQgDAHgEAGQgIAIgIADQgJAEgKAAQgHAAgGgCgAq1BxIgGgCIAAgeIAIAAIAHgCQAFgDACgGIADgNIAEh0IBWAAIAACqIgjAAIAAiLIgXAAIgBA3QgCAbgDASQgCASgIAKQgFAGgGAEQgIADgLAAgAKXBvIgHglIghAAIgHAlIggAAIAniqIAlAAIAnCqgAKNAuIgNg9IgBgMIgNBJIAbAAgAIQBvIAAhHIgYADIgJgBQgFAAgFgDQgEgCgFgEQgEgEgCgGQgEgIAAgHIgBhDIAkAAIAAA+QAAAEADADQACADAEABIAGABIAHgBIAFgCIAAhHIAjAAIAACqgAGPBvIAAhSIACgcIAAAAIgGATIghBPIAAAMIghAAIAAiqIAhAAIAABKIgEAcIABAAIAoheIAAgIIAgAAIAACqgADWBvIAAiqIBZAAIAAAfIg3AAIAAAlIAqAAIAAAdIgqAAIAAAqIA3AAIAAAfgAgzBvIAAhSIACgcIAAAAIgGATIghBPIAAAMIghAAIAAiqIAhAAIAABKIgEAcIABAAIAoheIAAgIIAgAAIAACqgAixBvIgHglIghAAIgHAlIggAAIAniqIAlAAIAnCqgAi7AuIgNg9IgBgMIgNBJIAbAAgAmtBvIAAiqIAiAAIAACLIAZAAIAAiLIAiAAIAACLIAaAAIAAiLIAiAAIAACqgAFqhMQgHgEgEgFIgGgIIgEgIIgBgHIAAgFIAbAAIAAAGIACAGQACAEADACIAFABQAEAAADgCQADgCABgDIACgGIAAgGIAbAAIgBAMIgEAIIgGAIQgEAFgHAEQgHADgLAAQgKAAgHgDgAhYhMQgHgEgEgFIgGgIIgEgIIgBgHIAAgFIAbAAIAAAGIACAGQACAEADACIAFABQAEAAADgCQADgCABgDIACgGIAAgGIAbAAIgBAMIgEAIIgGAIQgEAFgHAEQgHADgLAAQgKAAgHgDg");
	this.shape.setTransform(-0.3,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.4,-15,164.4,22.9);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("AvXCHIAAhWIAPAAQAIgLAEgLIAHgWIAGgaIAIhuIBqAAIAACyIAVAAIAABYIgmAAIAAgwIhiAAIAAAwgAuKgLQgDAQgEAOQgEAOgHAPIAyAAIAAiMIgZAAgAl9BYQgIgBgGgEQgNgHgGgKQgIgJgFgNQgDgNgCgNIgDgoIADgqQACgMAFgNQAFgNAIgKQAHgIAMgHQAMgHASAAQAJAAAGACIAMAEIAJAFIAHAGQAHAHAEAJIAGASIAEASIABAPIgpAEQAAgSgCgIIgEgLQgDgHgEgCQgFgDgGAAQgKAAgFAIIgEAGIgDAMIgCA3QAAAUABANQABAMADAHQAEAIAEACQAFADAGAAQAGAAAGgDQAEgDADgHQACgFACgJIABgRIAnADIgEAdIgGARQgDAIgHAHQgJALgLAEQgLAEgNAAQgJAAgIgCgApgBYIgKgCIgJgFQgDgDgEgGQgEgIgBgLIgGguQgBgGgDgCQgEgFgFgBIgQgBIAABfIgsAAIAAhfIgRABQgFABgEAFQgDACgBAGIgFAuQgCALgEAIQgDAGgEADIgJAFIgJACIgKABIgGgBIgHgBIAAgmQAHABADgFIACgHIAFgkQABgGADgHQAEgGAHgFQAGgFAJgBIAAgBIgJgEIgHgFQgFgFgCgEIgGgjQgCgKgDgCIgGgCIgCAAIAAgjIAFgBIAHgBIANABQAGABAGAEQAFADADAFIAEAKIAEANIAFAmIABAEIACAFIAGADIAJACIAIAAIAAhXIAsAAIAABXIAIAAIAIgCIAFgDIAEgFIABgEIAIgzIAFgKQADgFAEgDQAGgEAGgBIAOgBIAHABIAFABIAAAjIgCAAIgHACQgDACgBAKIgHAjQgBAEgGAFIgHAFIgJAEIAAABQAKABAGAFQAHAFADAGQADAHACAGIAEAkIABAEIACADQADAFAGgBIAAAbIAvjPIAvAAIAyDaIgtAAIgJgwIgrAAIgJAwIgmAAIgGABIgHABgAn2AEIgPhPIgCgPIgQBeIAhAAgANaBXIAAjaIBIABIAQACQAHACAGAEQAGAFAGAHQAGAJAEAOQADANAAALIgDAaIgFAOQgDAGgEAGQgFAHgIAEQgGABgHACIgOACIgbABIAABRgAOGgfIATAAQAFgBAEgEQADgDACgGQACgHAAgNIgBgMQgBgIgFgFQgEgEgEgBIgJgBIgLAAgALTBXIAAjaIBzAAIAAAnIhGAAIAAAyIA1AAIAAAlIg1AAIAAA1IBGAAIAAAngAIyiDIB4AAIAAAoIhNAAIAAAwIApAAIAMADIALAEQAGAEAGAFQAIAIAEANQADAMAAAOQAAAPgEAOQgGAOgIAJQgGAFgGADIgMAFIhcACgAJdAyIATAAIAKgCQAHgBAFgFQAEgFAAgGIABgLIgBgLQAAgFgFgEQgGgFgFAAIgdgBgAHmBXIAAh1IADgWIAAAAIgGAUIgCAEIgBADIgpBhIAAAPIgqAAIAAjaIAqAAIgBBwIgEATIABAAIAGgNIAthsIAAgKIAqAAIAADagADriDIB4AAIAAAoIhMAAIAAAwIAoAAIAMADIAMAEQAGAEAFAFQAIAIAEANQAEAMAAAOQAAAPgFAOQgFAOgJAJQgFAFgGADIgNAFIhcACgAEXAyIATAAIAKgCQAHgBAEgFQAEgFABgGIAAgLIAAgLQgBgFgFgEQgFgFgFAAIgdgBgABSBXIAAhdIgiAAIAABdIgtAAIAAjaIAtAAIAABWIAiAAIAAhWIAtAAIAADagAhGBXIAAh1IADgWIAAAAIgGAUIgCAEIgBADIgpBhIAAAPIgqAAIAAjaIAqAAIgBBwIgEATIABAAIAzh5IAAgKIAqAAIAADagAkCBXIAAixIgkAAIAAgpIB2AAIAAApIglAAIAACxg");
	this.shape.setTransform(98.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.9,27.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("Ar7CGIAAgxIgqAAIgJgwIgrAAIgJAwIgoAAIAxjaIAwAAIAuDNIAAgZIAQAAQAHgLAEgLIAIgWIAGgaIAHhuIBqAAIAACzIAWAAIAAAaIAujNIAwAAIAyDaIguAAIgJgwIgrAAIgJAwIglAAIAAAwIgmAAIAAgwIhjAAIAAAxgAqugNQgCAQgEAOQgFAOgHAPIAzAAIAAiMIgaAAgAn3ACIgPhPIgCgOIgBALIgPBSIAhAAgAszACIgRhdIgBALIgQBSIAiAAgAidBYIgHgDIAAgmIAKAAQAGAAADgDQAHgEACgGIADgOIAAgEIAGiVIBuAAIAADaIgtAAIAAizIgdAAIgCBKQgCAggDAYQgDAXgLANQgGAHgIAEQgJAFgOAAgAM5BVIAAiwIglAAIAAgqIB3AAIAAAqIglAAIAACwgAKTBVIAAjaIBIABIAPACQAHACAHAEQAFAFAGAHQAHAJADAOQAEANAAAMIgEAZIgEAOQgDAGgEAGQgGAHgHAEQgGACgIABIgOACIgaABIAABRgAK/ghIATAAQAEgBAFgEQADgDABgGQACgGAAgOIgBgMQgBgHgEgFQgEgFgEgBIgJgBIgLAAgAIMBVIAAjaIByAAIAAAnIhFAAIAAAzIA1AAIAAAkIg1AAIAAA1IBFAAIAAAngAFriFIB3AAIAAAoIhMAAIAAAwIAoABIAMACIAMAFQAGADAFAFQAIAIAEAOQAEALAAAOQAAAQgFANQgFAPgIAIQgGAFgGAEIgMAEIhcACgAGWAwIATAAIAKgCQAHgBAEgFQAEgEAAgHIACgLIgCgKQAAgGgFgDQgFgGgFAAIgdAAgAEdBVIADi+IgKBBIgbB9IgcAAIgah/IgIg/IACC+IgkAAIAAjaIA9AAIARBdIAHA8IAFglIAXh0IA9AAIAADagABgBVIgJgwIgrAAIgJAwIgmAAIAvjaIAwAAIAxDagABSACIgRhdIgBALIgPBSIAhAAgAkrBVIACi+IgKBBIgbB9IgbAAIgbh/IgIg/IABC+IgkAAIAAjaIA+AAIAWB9IACAcIAEglIAYh0IA9AAIAADag");
	this.shape.setTransform(90.8,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.5,26.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("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");
	this.shape.setTransform(88.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,29.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("AFnBtIAAh0IADgWIgBAAIgGATIgBAFIgCADIgpBgIAAAPIgqAAIAAjZIAqAAIgBBtIgDAWIABAAIAzh6IAAgJIApAAIAADZgAC/BtIAAheIgjAAIAABeIgsAAIAAjZIAsAAIAABWIAjAAIAAhWIAtAAIAADZgAA1BtIgJgvIgrAAIgHAvIgoAAIAvjZIAwAAIAxDZgAAnAaIgQhOIgBgPIgRBdIAiAAgAhnBtIACi9IgJBAIgbB9IgcAAIgah/IgJg+IACC9IgkAAIAAjZIA+AAIAVB6IACAfIAFgoIAXhxIA9AAIAADZgAk2BtIAAh0IADgWIAAAAIgHATIgBAFIgBADIgqBgIAAAPIgpAAIAAjZIApAAIAABtIgEAWIABAAIAFgQIAuhqIAAgJIAqAAIAADZg");
	this.shape.setTransform(40.1,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,22);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("ANaBvQgIgCgGgDQgMgIgHgJQgIgKgEgNQgEgNgCgNIgCg6IACgXQADgNAEgNQAFgMAIgKQAHgIAMgIQAMgHASAAQAJAAAHACIAMAEIAJAGIAGAFQAHAIAEAJIAHASIADASIABAPIgoAEQgBgSgCgJIgDgLQgDgGgFgDQgFgCgFAAQgLAAgFAIIgDAGIgDAMIgDA0QAAAXABAMQACANADAHQADAHAEADQAFACAHAAQAGAAAFgDQAEgDADgGQADgFABgKIACgQIAmACIgEAdIgGARQgDAJgGAHQgKAKgLAEQgLAFgMAAQgKAAgIgCgAqNBwIgGgDIAAglIAJgBQAGAAAEgDQAGgEACgGIADgOIAGiYIBuAAIAADZIgtAAIAAizIgdAAIgCBIQgBAigEAYQgDAXgLANQgFAHgJAFQgJAEgOAAgAs2BvIgKgDIgIgFQgFgDgDgGQgEgHgBgMIgFguQgCgGgDgEQgEgEgFgBIgJgBIgOAAIAABgIgtAAIAAjZIAtAAIAABWIAOAAQAGAAADgBIAGgEIADgFIABgEIAFgnIADgMIAFgKQADgFAFgCQAFgEAHgBIAMgBIAHAAIAGACIAAAiIgDAAIgFACQgEACgBAKIgEAZIgDAKQgCAFgEAFIgHAFQgEADgFABIAAABQAIABAGAEQAHADAEAHQAEAHABAIIAEAkIACAHQADAFAHgCIAAAmIgGACIgHAAgALfBtIAAh0IADgWIAAAAIgHATIgBAFIgBADIgqBgIAAAPIgpAAIAAjZIApAAIAABtIgEAWIABAAIAFgQIAuhqIAAgJIAqAAIAADZgAHzBtIAAjZIBIAAIAPADQAIACAGAEQAGAEAFAHQAHAKADANQAEAOAAALIgEAaIgEANQgDAFgEAFQgGAHgHAEQgGAEgHACIgOACIgbAAIAABRgAIfgIIATgBQAFAAAEgFQADgCACgHQACgGAAgOIgBgMQgBgHgFgFQgEgFgEgBIgJgBIgLAAgAFhBtIAAjZIBIAAIAPADQAHACAGAEQAGAEAGAHQAHAKADANQADAOAAALIgDAaIgFANQgCAFgFAFQgFAHgHAEQgHAEgHACIgoACIAABRgAGNgIIATgBQAEAAAEgFQADgCACgHQACgGAAgOIgBgMQgBgHgEgFQgEgFgFgBIgIgBIgLAAgAEmBtIgJgvIgrAAIgJAvIhUAAIgTg1IgEgPQgCgJAAgNIgEAdIgXA9IgqAAIAwhxIgshoIAzAAIANAmIAGAlIAFgeIAPgtIAsAAIgtBlIAvBtIAwjSIAvAAIAyDZgAEYAaIgRhdIgQBdIAhAAgAhOBtIAAheIgiAAIAABeIgtAAIAAjZIAtAAIAABWIAiAAIAAhWIAtAAIAADZgAjoBtIAAh0IADgWIAAAAIgHATIgBAFIgBADIgqBgIAAAPIgpAAIAAjZIApAAIAABtIgEAWIABAAIAFgQIAuhqIAAgJIAqAAIAADZgAnfhsIBZABQAHACAHADQAGADAGAGQAHAIADAKQADAMAAALQAAAJgCAJQgCAKgDAFIgGAHQgEAFgKAEQAIACAGACQAGAFADAFQAGAHACAMQADALAAAJQAAAKgDAJQgCAJgGAJQgFAIgHAFQgHAEgHACIgPADIhTAAgAmzBIIAcgBQAGgBAFgFQADgEACgGIABgMQAAgJgDgGQgCgGgEgEQgFgEgFAAIgaAAgAmzgUIAQAAQAHAAAFgCQAFgCADgDQACgDABgGIABgKIgBgLQgCgGgDgEQgEgEgFgBIgJgBIgQAAgAsLBtIAAjZIByAAIAAAmIhFAAIAAAzIA1AAIAAAjIg1AAIAAA3IBFAAIAAAmg");
	this.shape.setTransform(94.1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.3,22.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52A4FB").s().p("ALABwIgOgEQgGgDgHgFQgGgFgHgJIgFgLIgGgRIgEgYQgCgPAAgTQAAgSACgOIAEgZIAGgRIAFgLQAHgJAGgFQAHgFAGgDIAOgEIAMgBIAMABIANAEQAHADAGAFQAIAFAFAJIAGALIAFARIAFAZQACAOAAASQAAATgCAPIgFAYIgFARIgGALQgFAJgIAFQgGAFgHADIgNAEIgMABgALDhGIgFAGIgEAHIgCAMIAABbIACAMIAEAHIAFAGQADACAGAAQAFAAAEgCIAFgGIADgHIAEgfIgEhUIgDgHIgFgGQgEgCgFAAQgGAAgDACgAvKBwIgGgDIAAglIAJgBQAGAAAEgDQAGgEACgGIADgOIAGiYIBuAAIAADZIgtAAIAAizIgdAAIgCBIQgBAigEAYQgEAXgKANQgFAHgJAFQgJAEgPAAgAJiBvIgKgDIgIgFQgFgDgDgGQgEgHgBgMIgFguQgBgGgDgEQgFgEgEgBIgJgBIgPAAIAABgIgtAAIAAjZIAtAAIAABWIAPAAQAGAAADgBIAFgEIADgFIACgEIAEgnIADgMIAFgKQADgFAFgCQAFgEAHgBIANgBIAHAAIAFACIAAAiIgDAAIgFACQgDACgCAKIgEAZIgDAKQgCAFgEAFIgGAFQgEADgGABIAAABQAIABAGAEQAHADAEAHQAEAHABAIIAEAkIADAHQADAFAGgCIAAAmIgGACIgHAAgAQbBtIgJgvIgqAAIgJAvIgpAAIAyjZIAwAAIAxDZgAQOAaIgRhdIgBALIgQBSIAiAAgAMthsIBZABQAGACAHADQAHADAFAGQAHAIADAKQADAMAAALQAAAJgBAJQgCAKgEAFIgFAHQgFAFgKAEQAIACAGACQAGAFAEAFQAFAHACAMQADALAAAJQAAAKgDAJQgCAJgFAJQgGAIgHAFQgGAEgHACIgQADIhSAAgANYBIIAdgBQAFgBAFgFQAEgEABgGIABgMQAAgJgDgGQgCgGgEgEQgFgEgFAAIgaAAgANYgUIAQAAQAHAAAGgCQAEgCADgDQACgDABgGIABgKIgBgLQgCgGgDgEQgEgEgFgBIgJgBIgQAAgAGgBtIAAh0IADgWIgBAAIgGATIgBAFIgBADIgqBgIAAAPIgpAAIAAjZIApAAIgBBtIgDAWIABAAIAzh6IAAgJIApAAIAADZgAD4BtIAAheIgjAAIAABeIgtAAIAAjZIAtAAIAABWIAjAAIAAhWIAtAAIAADZgABcBtIACi9IgJBAIgbB9IgcAAIgciIIgFg1IABC9IgkAAIAAjZIA8AAIAVB6IADAfIAEgoIAYhxIA8AAIAADZgAisBtIAAjZIByAAIAAAmIhGAAIAAAzIA2AAIAAAjIg2AAIAAA3IBGAAIAAAmgAkPBtIAAiwIgkAAIAAgpIB2AAIAAApIglAAIAACwgAmnBtIgJgvIgqAAIgJAvIgpAAIAyjZIAwAAIAxDZgAm0AaIgQhOIgBgPIgBALIgQBSIAiAAgApGBtIAAheIgjAAIAABeIgsAAIAAjZIAsAAIAABWIAjAAIAAhWIAtAAIAADZgAscBtIAAjZIByAAIAAAmIhFAAIAAAzIA1AAIAAAjIg1AAIAAA3IBFAAIAAAmgAxIBtIAAjZIByAAIAAAmIhGAAIAAAzIA2AAIAAAjIg2AAIAAA3IBGAAIAAAmg");
	this.shape.setTransform(109.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.5,22.7);


(lib.Hits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE4DRQgJgDgIgIQgFgGgDgJQgEgKAAgKIAfgFIABAJQAAAFADADIADAEQADADAFAAQAIAAAEgFQADgEABgEIAAgIIAAgKQgBgEgDgFQgCgCgFgDQgEgCgGAAIgLAAIAAgdIASAAQAEgBAEgFQADgDABgFIABgJIgBgGQAAgDgCgDIgEgDQgCgCgEAAQgEAAgDACQgDABgCAEIgDAHIgBAIIgegFQABgJAEgKQAEgKAIgHQAEgEAIgEQAIgDANAAQAMAAAIADIALAHQAFAEAEAIQAEAHAAAOQAAAHgCAIQgCAIgEAFIgHAHQgEADgHACIAAABIAIABIAKAGIACACQAGAHACAHIABAPIAAAJIgBALIgFAMQgDAGgFAFQgFAFgJADQgIAEgPAAQgLAAgIgEgACqDSIAAgdIALABIAIgBQAEAAADgCQAEgDABgDIADgHIguiAIAnAAIATBAIAAAEIAEAPIAAAAIACgMIAShHIAdAAIgqCVQgCAJgIAHQgGAGgHABQgIADgIAAQgKAAgIgDgArgDUIgLgDIgKgHQgFgEgFgHIgEgIIgFgNIgDgTQgCgLAAgQQAAgPACgMIADgTIAFgNIAEgIQAFgHAFgEIAKgHIALgDIATAAIAKADIALAHQAFAEAEAHIAFAIIAEANIAEATQABAMAAAPQAAAPgBAMIgEATIgEANIgFAIQgEAHgFAEIgLAHIgKADIgKABgAreBEIgEAFIgCAFIgCAKIgBA5IABAPIACAKIACAFIAEAFQADACAEAAQAFAAACgCIAEgFIADgFIACgKIAAhIIgCgKIgDgFIgEgFQgCgCgFAAQgEAAgDACgAqIDUIgGgCIAAgeIAIAAIAHgCQAFgDACgGIADgNIAEh2IBWAAIAACsIgjAAIAAiNIgXAAIgBA5QgCAbgDASQgCASgIAKQgFAGgGAEQgIADgLAAgAKvDTIgIgCIgHgEQgDgCgCgFQgEgGgBgJIgEgkQgBgFgCgCQgDgEgEgBIgHgBIgMAAIAABMIgiAAIAAisIAiAAIAABEIAMAAIAHgBIAEgDIADgEIAEgiIADgJIADgIQADgEAEgCQAEgDAFAAIAKgBIAFAAIAFABIAAAbIgCAAIgFACQgDACgBAHIAAAJIgCALIgDAIIgFAHIgFAEQgDACgEABIAAABQAGABAFADQAFADAEAGQACAFABAHIAEAfIABACQADAEAFgBIAAAeIgFABgANsDSIAAgnIAiAAIAAAngAMgDSIABhdIACgRIgBAAIgGATIghBPIAAAMIggAAIAAisIAgAAIAABMIgDAcIAAAAIAohgIAAgIIAhAAIAACsgAILDSIAAisIAiAAIAACsgAGdAmIAiAAIAABEIAhABIAJAEIAGAEIAEAEIAGAJIADAKIACAMIABALQAAAMgEAKQgDALgHAGQgEADgEACIgJADIgJABIg6ABgAG/C1IALAAIAIgBIAGgDQADgEABgFIAAgUQgBgFgCgDIgCgCIgCgBIgFgCIgGgBIgLAAgABmDSIACiWIgdCWIgWAAIgbiWIACCWIgcAAIAAisIAwAAIAQBiIACAXIAWh5IAwAAIAACsgAi2DSIAAisIBZAAIAAAfIg2AAIAAAnIApAAIAAAdIgpAAIAAAqIA2AAIAAAfgAlzDSIAAisIAiAAIAACNIAZAAIAAiNIAiAAIAACNIAaAAIAAiNIAiAAIAACsgAn3AmIAjAAIAABDIAXAAQAMAAAIAFQAHAEAEAEIADAEIAEAIIADANQACAHAAALQAAAQgFAKQgFAJgFAEQgDADgFACIgJADIgKABIg7ABgAnUC1IARgBQAEgBADgCQAEgEABgFIAAgTQAAgGgEgEIgFgEQgEgCgFAAIgLAAgAuQDSIAAisIBdAAIAAAfIg7AAIAAAmIAfAAIAKACIAJAEQAFACADAEQAHAHADAKQADALAAAKQAAAMgEALQgEALgGAHQgFAEgFADIgJADIgKACgAtuC1IAPAAIAIgBQAFgBADgEQADgEABgFIABgJIgBgIQgBgEgDgEQgEgEgEgBIgXAAgANyCeIgIh4IAnAAIgJB4gAIIgkIgKgDIgLgHQgFgEgEgHIgFgIIgEgNIgEgTQgBgLAAgQQAAgPABgMIAEgTIAEgNIAFgIQAEgHAFgEIALgHIAKgDIATAAIALADIAKAHQAFAEAFAHIAEAIIAFANIADATQACAMAAAPQAAAPgCAMIgDATIgFANIgEAIQgFAHgFAEIgKAHIgLADIgJABgAILi0IgEAFIgDAFIgCAKIgBA5IABAPIACAKIADAFIAEAFQACACAFAAQAEAAADgCIAEgFIACgFIACgKIAAhIIgCgKIgCgFIgEgFQgDgCgEAAQgFAAgCACgApngkIgLgDIgKgHQgFgEgFgHIgEgIIgFgNIgDgTQgCgLAAgQQAAgPACgMIADgTIAFgNIAEgIQAFgHAFgEIAKgHIALgDIATAAIAKADIALAHQAFAEAEAHIAFAIIAEANIAEATQABAMAAAPQAAAPgBAMIgEATIgEANIgFAIQgEAHgFAEIgLAHIgKADIgKABgApli0IgEAFIgCAFIgCAKIgBA5IABAPIACAKIACAFIAEAFQADACAEAAQAFAAACgCIAEgFIADgFIACgKIAAhIIgCgKIgDgFIgEgFQgCgCgFAAQgEAAgDACgAoPgkIgGgCIAAgeIAIAAIAHgCQAFgDACgGIADgNIAEh2IBWAAIAACsIgjAAIAAiNIgXAAIgBA5QgCAbgDASQgCASgIAKQgFAGgGAEQgIADgLAAgALzgmIAAgnIAiAAIAAAngAJnjSIA6AAIAMABIAKAEQAFACAFAFQAFAGACAJQADAIAAAKQAAAHgCAHQgBAHgDAEIgEAFQgEAEgHADQAGACAFAEQAEADADAEQAEAGACAIQACAJAAAHQAAAIgCAHQgCAHgEAHQgEAHgGADQgFAEgGABIgLACIhBABgAKJhDIAOAAIAIgBQAFgBAEgEQACgDABgFIABgJQAAgHgCgFQgCgFgDgDQgDgCgFgBIgUAAgAKJiNIANAAQAGAAADgBQAEgCACgCQACgDABgEIABgIIgBgJQgCgFgDgDQgCgDgEgBIgUAAgAGJgmIAAiMIgbAAIAAggIBcAAIAAAgIgdAAIAACMgAE2gmIAAhdIACgRIAAAAIgnBiIAAAMIghAAIAAisIAhAAIAABMIgEAcIABAAIAohgIAAgIIAgAAIAACsgAC0gmIgPgqIgDgMQgCgHAAgJIgDAWIgSAwIghAAIAmhaIgihSIAnAAIAKAfIAFAcIAEgXIAMgkIAiAAIgjBPIAnBdgAg9gmIAAisIBXAAIAAAfIg0AAIAAAnIAnAAIAAAdIgnAAIAAAqIA0AAIAAAfgAj6gmIAAisIAiAAIAACNIAZAAIAAiNIAiAAIAACNIAaAAIAAiNIAiAAIAACsgAl+jSIAjAAIAABDIAXAAQAMAAAIAFQAHAEAEAEIADAEIAEAIIADANQACAHAAALQAAAQgFAKQgFAJgFAEQgDADgFACIgJADIhFACgAlbhDIARgBQAEgBADgCQAEgEABgFIAAgTQAAgGgEgEIgFgEQgEgCgFAAIgLAAgAsXgmIAAisIBdAAIAAAfIg7AAIAAAmIAfAAIAKACIAJAEQAFACADAEQAHAHADAKQADALAAAKQAAAMgEALQgEALgGAHQgFAEgFADIgJADIgKACgAr1hDIAPAAIAIgBQAFgBADgEQADgEABgFIABgJIgBgIQgBgEgDgEQgEgEgEgBIgXAAgAL5haIgIh4IAnAAIgJB4g");
	this.shape.setTransform(91.3,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.7,42.7);


(lib.Capsula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.capsul2pngcopy();
	this.instance.setTransform(-33,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-44,130,56);


(lib.Allpeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flashjpgcopy2();
	this.instance.setTransform(-11.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-13.5,635,306);


(lib.Peoplesanimations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 25 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_342 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_343 = new cjs.Graphics().p("A02a1MAdJg1kIMkgFMgdCA1pg");
	var mask_graphics_344 = new cjs.Graphics().p("A1Sa1MAdKg1kINbgFMgdDA1pg");
	var mask_graphics_345 = new cjs.Graphics().p("A1pa1MAdKg1kIOJgFMgdDA1pg");
	var mask_graphics_346 = new cjs.Graphics().p("A18a1MAdKg1kIOvgFMgdDA1pg");
	var mask_graphics_347 = new cjs.Graphics().p("A2Ka1MAdJg1kIPMgFMgdCA1pg");
	var mask_graphics_348 = new cjs.Graphics().p("A2Va1MAdJg1kIPigFMgdCA1pg");
	var mask_graphics_349 = new cjs.Graphics().p("A2ba1MAdJg1kIPugFMgdCA1pg");
	var mask_graphics_350 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_351 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_352 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_353 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_354 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_355 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_356 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_357 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_358 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_359 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_360 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_361 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_362 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_363 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_364 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_365 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_366 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_367 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_368 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_369 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_370 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_371 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_372 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_373 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_374 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_375 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_376 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_377 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_378 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_379 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_380 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_381 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_382 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_383 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_384 = new cjs.Graphics().p("A2ea1MAdKg1kIPzgFMgdDA1pg");
	var mask_graphics_385 = new cjs.Graphics().p("A1+a1MAdJg1kIO0gFMgdCA1pg");
	var mask_graphics_386 = new cjs.Graphics().p("A1ja1MAdKg1kIN9gFMgdDA1pg");
	var mask_graphics_387 = new cjs.Graphics().p("A1La1MAdJg1kINOgFMgdCA1pg");
	var mask_graphics_388 = new cjs.Graphics().p("A04a1MAdJg1kIMogFMgdCA1pg");
	var mask_graphics_389 = new cjs.Graphics().p("A0qa1MAdKg1kIMKgFMgdCA1pg");
	var mask_graphics_390 = new cjs.Graphics().p("A0fa1MAdKg1kIL1gFMgdDA1pg");
	var mask_graphics_391 = new cjs.Graphics().p("A0Za1MAdKg1kILpgFMgdDA1pg");
	var mask_graphics_392 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_393 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_394 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_395 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_396 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_397 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_398 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_399 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_400 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_401 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_402 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_403 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_404 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_405 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_406 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_407 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_408 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_409 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_410 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_411 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_412 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_413 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_414 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_415 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_416 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_417 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_418 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_419 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_420 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_421 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_422 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_423 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_424 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_425 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_426 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_427 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_428 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_429 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_430 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_431 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_432 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_433 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_434 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_435 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_436 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_437 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_438 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_439 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_440 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_441 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_442 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_443 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_444 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_445 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_446 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_447 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_448 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_449 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_450 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_451 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_452 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_453 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_454 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_455 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_456 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_457 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_458 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_459 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_460 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_461 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_462 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_463 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_464 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_465 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_466 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_467 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_468 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_469 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_470 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_471 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_472 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_473 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_474 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_475 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_476 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_477 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_478 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_479 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_480 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_481 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_482 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_483 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_484 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_485 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_486 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_487 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_488 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_489 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_490 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_491 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_492 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_493 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_494 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_495 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_496 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_497 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_498 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_499 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_500 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_501 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_502 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_503 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_504 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_505 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_506 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_507 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_508 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_509 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_510 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_511 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_512 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_513 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_514 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_515 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_516 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_517 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_518 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_519 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_520 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_521 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_522 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_523 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");
	var mask_graphics_524 = new cjs.Graphics().p("A0Xa1MAdKg1kILkgFMgdCA1pg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(342).to({graphics:mask_graphics_342,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_343,x:244,y:184}).wait(1).to({graphics:mask_graphics_344,x:244.3,y:184}).wait(1).to({graphics:mask_graphics_345,x:244.6,y:184}).wait(1).to({graphics:mask_graphics_346,x:244.8,y:184}).wait(1).to({graphics:mask_graphics_347,x:245,y:184}).wait(1).to({graphics:mask_graphics_348,x:245.1,y:184}).wait(1).to({graphics:mask_graphics_349,x:245.1,y:184}).wait(1).to({graphics:mask_graphics_350,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_351,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_352,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_353,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_354,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_355,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_356,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_357,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_358,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_359,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_360,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_361,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_362,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_363,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_364,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_365,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_366,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_367,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_368,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_369,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_370,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_371,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_372,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_373,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_374,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_375,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_376,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_377,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_378,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_379,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_380,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_381,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_382,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_383,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_384,x:245.2,y:184}).wait(1).to({graphics:mask_graphics_385,x:244.8,y:184}).wait(1).to({graphics:mask_graphics_386,x:244.5,y:184}).wait(1).to({graphics:mask_graphics_387,x:244.2,y:184}).wait(1).to({graphics:mask_graphics_388,x:244,y:184}).wait(1).to({graphics:mask_graphics_389,x:243.9,y:184}).wait(1).to({graphics:mask_graphics_390,x:243.8,y:184}).wait(1).to({graphics:mask_graphics_391,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_392,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_393,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_394,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_395,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_396,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_397,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_398,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_399,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_400,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_401,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_402,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_403,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_404,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_405,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_406,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_407,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_408,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_409,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_410,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_411,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_412,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_413,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_414,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_415,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_416,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_417,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_418,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_419,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_420,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_421,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_422,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_423,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_424,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_425,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_426,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_427,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_428,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_429,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_430,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_431,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_432,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_433,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_434,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_435,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_436,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_437,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_438,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_439,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_440,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_441,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_442,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_443,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_444,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_445,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_446,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_447,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_448,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_449,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_450,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_451,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_452,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_453,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_454,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_455,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_456,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_457,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_458,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_459,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_460,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_461,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_462,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_463,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_464,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_465,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_466,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_467,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_468,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_469,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_470,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_471,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_472,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_473,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_474,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_475,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_476,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_477,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_478,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_479,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_480,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_481,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_482,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_483,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_484,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_485,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_486,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_487,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_488,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_489,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_490,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_491,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_492,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_493,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_494,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_495,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_496,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_497,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_498,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_499,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_500,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_501,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_502,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_503,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_504,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_505,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_506,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_507,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_508,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_509,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_510,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_511,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_512,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_513,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_514,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_515,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_516,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_517,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_518,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_519,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_520,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_521,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_522,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_523,x:243.7,y:184}).wait(1).to({graphics:mask_graphics_524,x:243.7,y:184}).wait(4));

	// Layer 24
	this.instance = new lib.Allpeople();
	this.instance.setTransform(91.5,203,1,1,0,0,0,315.5,151);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(342).to({_off:false},0).wait(47).to({_off:true},136).wait(3));

	// Layer 23 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_291 = new cjs.Graphics().p("A7hbfMAeFg29IY+AAMgeFA29g");
	var mask_1_graphics_292 = new cjs.Graphics().p("A74bfMAeFg29IZtAAMgeGA29g");
	var mask_1_graphics_293 = new cjs.Graphics().p("A8NbfMAeGg29IaVAAMgeGA29g");
	var mask_1_graphics_294 = new cjs.Graphics().p("A8ebfMAeFg29Ia4AAMgeGA29g");
	var mask_1_graphics_295 = new cjs.Graphics().p("A8sbfMAeFg29IbUAAMgeGA29g");
	var mask_1_graphics_296 = new cjs.Graphics().p("A83bfMAeFg29IbqAAMgeFA29g");
	var mask_1_graphics_297 = new cjs.Graphics().p("A8/bfMAeGg29Ib5AAMgeGA29g");
	var mask_1_graphics_298 = new cjs.Graphics().p("A9DbfMAeFg29IcCAAMgeFA29g");
	var mask_1_graphics_299 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_300 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_301 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_302 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_303 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_304 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_305 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_306 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_307 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_308 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_309 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_310 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_311 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_312 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_313 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_314 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_315 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_316 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_317 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_318 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_319 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_320 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_321 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_322 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_323 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_324 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_325 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_326 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_327 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_328 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_329 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_330 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_331 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_332 = new cjs.Graphics().p("A9FbfMAeFg29IcGAAMgeGA29g");
	var mask_1_graphics_333 = new cjs.Graphics().p("A8tbfMAeFg29IbWAAMgeFA29g");
	var mask_1_graphics_334 = new cjs.Graphics().p("A8ZbfMAeFg29IauAAMgeFA29g");
	var mask_1_graphics_335 = new cjs.Graphics().p("A8IbfMAeFg29IaMAAMgeGA29g");
	var mask_1_graphics_336 = new cjs.Graphics().p("A76bfMAeFg29IZwAAMgeGA29g");
	var mask_1_graphics_337 = new cjs.Graphics().p("A7vbfMAeFg29IZaAAMgeFA29g");
	var mask_1_graphics_338 = new cjs.Graphics().p("A7nbfMAeFg29IZKAAMgeFA29g");
	var mask_1_graphics_339 = new cjs.Graphics().p("A7ibfMAeFg29IZBAAMgeGA29g");
	var mask_1_graphics_340 = new cjs.Graphics().p("A7hbfMAeFg29IY+AAMgeFA29g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(291).to({graphics:mask_1_graphics_291,x:-86.7,y:185}).wait(1).to({graphics:mask_1_graphics_292,x:-84.4,y:185}).wait(1).to({graphics:mask_1_graphics_293,x:-82.4,y:185}).wait(1).to({graphics:mask_1_graphics_294,x:-80.6,y:185}).wait(1).to({graphics:mask_1_graphics_295,x:-79.2,y:185}).wait(1).to({graphics:mask_1_graphics_296,x:-78.1,y:185}).wait(1).to({graphics:mask_1_graphics_297,x:-77.4,y:185}).wait(1).to({graphics:mask_1_graphics_298,x:-76.9,y:185}).wait(1).to({graphics:mask_1_graphics_299,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_300,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_301,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_302,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_303,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_304,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_305,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_306,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_307,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_308,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_309,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_310,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_311,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_312,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_313,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_314,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_315,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_316,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_317,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_318,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_319,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_320,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_321,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_322,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_323,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_324,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_325,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_326,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_327,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_328,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_329,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_330,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_331,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_332,x:-76.7,y:185}).wait(1).to({graphics:mask_1_graphics_333,x:-79.1,y:185}).wait(1).to({graphics:mask_1_graphics_334,x:-81.1,y:185}).wait(1).to({graphics:mask_1_graphics_335,x:-82.8,y:185}).wait(1).to({graphics:mask_1_graphics_336,x:-84.2,y:185}).wait(1).to({graphics:mask_1_graphics_337,x:-85.3,y:185}).wait(1).to({graphics:mask_1_graphics_338,x:-86.1,y:185}).wait(1).to({graphics:mask_1_graphics_339,x:-86.6,y:185}).wait(1).to({graphics:mask_1_graphics_340,x:-86.7,y:185}).wait(1).to({graphics:null,x:0,y:0}).wait(187));

	// Layer 22
	this.instance_1 = new lib.Allpeople();
	this.instance_1.setTransform(231.5,208,1,1,0,0,0,315.5,151);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(291).to({_off:false},0).to({x:247.8},4).to({x:254},4).to({x:253.5},33).to({x:233.5},8).to({_off:true},1).wait(187));

	// Layer 21 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_242 = new cjs.Graphics().p("A5RayMAc6g1jIVpAAMgc6A1jg");
	var mask_2_graphics_243 = new cjs.Graphics().p("A5jayMAc7g1jIWMAAMgc7A1jg");
	var mask_2_graphics_244 = new cjs.Graphics().p("A5yayMAc7g1jIWqAAMgc7A1jg");
	var mask_2_graphics_245 = new cjs.Graphics().p("A5/ayMAc7g1jIXEAAMgc7A1jg");
	var mask_2_graphics_246 = new cjs.Graphics().p("A6KayMAc7g1jIXZAAMgc6A1jg");
	var mask_2_graphics_247 = new cjs.Graphics().p("A6SayMAc7g1jIXqAAMgc7A1jg");
	var mask_2_graphics_248 = new cjs.Graphics().p("A6YayMAc7g1jIX1AAMgc6A1jg");
	var mask_2_graphics_249 = new cjs.Graphics().p("A6bayMAc7g1jIX8AAMgc7A1jg");
	var mask_2_graphics_250 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_251 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_252 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_253 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_254 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_255 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_256 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_257 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_258 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_259 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_260 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_261 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_262 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_263 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_264 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_265 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_266 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_267 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_268 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_269 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_270 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_271 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_272 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_273 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_274 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_275 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_276 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_277 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_278 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_279 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_280 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_281 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_282 = new cjs.Graphics().p("A6cayMAc6g1jIX/AAMgc6A1jg");
	var mask_2_graphics_283 = new cjs.Graphics().p("A6TayMAc7g1jIXsAAMgc7A1jg");
	var mask_2_graphics_284 = new cjs.Graphics().p("A6KayMAc7g1jIXZAAMgc6A1jg");
	var mask_2_graphics_285 = new cjs.Graphics().p("A6AayMAc7g1jIXGAAMgc6A1jg");
	var mask_2_graphics_286 = new cjs.Graphics().p("A53ayMAc7g1jIW0AAMgc7A1jg");
	var mask_2_graphics_287 = new cjs.Graphics().p("A5tayMAc6g1jIWhAAMgc6A1jg");
	var mask_2_graphics_288 = new cjs.Graphics().p("A5kayMAc7g1jIWOAAMgc7A1jg");
	var mask_2_graphics_289 = new cjs.Graphics().p("A5aayMAc6g1jIV7AAMgc6A1jg");
	var mask_2_graphics_290 = new cjs.Graphics().p("A5RayMAc6g1jIVpAAMgc6A1jg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(242).to({graphics:mask_2_graphics_242,x:347.4,y:185.7}).wait(1).to({graphics:mask_2_graphics_243,x:345.6,y:185.7}).wait(1).to({graphics:mask_2_graphics_244,x:344.1,y:185.7}).wait(1).to({graphics:mask_2_graphics_245,x:342.8,y:185.7}).wait(1).to({graphics:mask_2_graphics_246,x:341.8,y:185.7}).wait(1).to({graphics:mask_2_graphics_247,x:340.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_248,x:340.4,y:185.7}).wait(1).to({graphics:mask_2_graphics_249,x:340,y:185.7}).wait(1).to({graphics:mask_2_graphics_250,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_251,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_252,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_253,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_254,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_255,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_256,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_257,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_258,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_259,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_260,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_261,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_262,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_263,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_264,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_265,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_266,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_267,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_268,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_269,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_270,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_271,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_272,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_273,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_274,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_275,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_276,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_277,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_278,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_279,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_280,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_281,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_282,x:339.9,y:185.7}).wait(1).to({graphics:mask_2_graphics_283,x:340.8,y:185.7}).wait(1).to({graphics:mask_2_graphics_284,x:341.8,y:185.7}).wait(1).to({graphics:mask_2_graphics_285,x:342.7,y:185.7}).wait(1).to({graphics:mask_2_graphics_286,x:343.6,y:185.7}).wait(1).to({graphics:mask_2_graphics_287,x:344.6,y:185.7}).wait(1).to({graphics:mask_2_graphics_288,x:345.5,y:185.7}).wait(1).to({graphics:mask_2_graphics_289,x:346.5,y:185.7}).wait(1).to({graphics:mask_2_graphics_290,x:347.4,y:185.7}).wait(1).to({graphics:null,x:0,y:0}).wait(237));

	// Layer 20
	this.instance_2 = new lib.Allpeople();
	this.instance_2.setTransform(61.5,204,1,1,0,0,0,315.5,151);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(242).to({_off:false},0).to({x:46},8).wait(32).to({x:61.5},8).to({_off:true},1).wait(237));

	// Layer 19 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_189 = new cjs.Graphics().p("A0OayMAdWg1jILHAAMgdNA1jg");
	var mask_3_graphics_190 = new cjs.Graphics().p("A0mayMAdWg1jIL3AAMgdMA1jg");
	var mask_3_graphics_191 = new cjs.Graphics().p("A08ayMAdXg1jIMhAAMgdMA1jg");
	var mask_3_graphics_192 = new cjs.Graphics().p("A1OayMAdWg1jINGAAMgdMA1jg");
	var mask_3_graphics_193 = new cjs.Graphics().p("A1cayMAdWg1jINjAAMgdMA1jg");
	var mask_3_graphics_194 = new cjs.Graphics().p("A1oayMAdWg1jIN7AAMgdNA1jg");
	var mask_3_graphics_195 = new cjs.Graphics().p("A1wayMAdWg1jIOLAAMgdMA1jg");
	var mask_3_graphics_196 = new cjs.Graphics().p("A11ayMAdWg1jIOVAAMgdMA1jg");
	var mask_3_graphics_197 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_198 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_199 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_200 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_201 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_202 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_203 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_204 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_205 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_206 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_207 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_208 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_209 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_210 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_222 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_223 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_224 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_225 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_226 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_227 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_228 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_229 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_230 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_231 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_232 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_233 = new cjs.Graphics().p("A12ayMAdVg1jIOZAAMgdMA1jg");
	var mask_3_graphics_234 = new cjs.Graphics().p("A1qayMAdXg1jIN9AAMgdMA1jg");
	var mask_3_graphics_235 = new cjs.Graphics().p("A1cayMAdWg1jINjAAMgdMA1jg");
	var mask_3_graphics_236 = new cjs.Graphics().p("A1PayMAdWg1jINJAAMgdMA1jg");
	var mask_3_graphics_237 = new cjs.Graphics().p("A1CayMAdWg1jIMvAAMgdMA1jg");
	var mask_3_graphics_238 = new cjs.Graphics().p("A01ayMAdWg1jIMVAAMgdMA1jg");
	var mask_3_graphics_239 = new cjs.Graphics().p("A0oayMAdWg1jIL7AAMgdMA1jg");
	var mask_3_graphics_240 = new cjs.Graphics().p("A0aayMAdWg1jILfAAMgdLA1jg");
	var mask_3_graphics_241 = new cjs.Graphics().p("A0OayMAdWg1jILHAAMgdNA1jg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_3_graphics_189,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_190,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_191,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_192,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_193,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_194,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_195,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_196,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_197,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_198,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_199,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_200,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_201,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_202,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_203,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_204,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_205,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_206,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_207,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_208,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_209,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_210,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_211,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_212,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_213,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_214,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_215,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_216,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_217,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_218,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_219,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_220,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_221,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_222,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_223,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_224,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_225,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_226,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_227,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_228,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_229,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_230,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_231,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_232,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_233,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_234,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_235,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_236,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_237,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_238,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_239,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_240,x:25.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_241,x:25.8,y:189.5}).wait(1).to({graphics:null,x:0,y:0}).wait(286));

	// Layer 18
	this.instance_3 = new lib.Allpeople();
	this.instance_3.setTransform(209.5,209,1,1,0,0,0,315.5,151);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(44).to({_off:true},9).wait(286));

	// Layer 17 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_139 = new cjs.Graphics().p("A0QayMAdHg1jILaAAMgdMA1jg");
	var mask_4_graphics_140 = new cjs.Graphics().p("A0wayMAdIg1jIMZAAMgdMA1jg");
	var mask_4_graphics_141 = new cjs.Graphics().p("A1LayMAdHg1jINQAAMgdMA1jg");
	var mask_4_graphics_142 = new cjs.Graphics().p("A1iayMAdHg1jIN+AAMgdLA1jg");
	var mask_4_graphics_143 = new cjs.Graphics().p("A11ayMAdHg1jIOkAAMgdMA1jg");
	var mask_4_graphics_144 = new cjs.Graphics().p("A2EayMAdHg1jIPCAAMgdMA1jg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A2OayMAdGg1jIPXAAMgdMA1jg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A2VayMAdHg1jIPkAAMgdMA1jg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_148 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_149 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_150 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_152 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_154 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_155 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_156 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_157 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_158 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_159 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_160 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_161 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_162 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_163 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_164 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_165 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_166 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_167 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_168 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_169 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_170 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_171 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_172 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_173 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_174 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_175 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_176 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_177 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_178 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_179 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_180 = new cjs.Graphics().p("A2XayMAdHg1jIPoAAMgdMA1jg");
	var mask_4_graphics_181 = new cjs.Graphics().p("A2VayMAdHg1jIPkAAMgdMA1jg");
	var mask_4_graphics_182 = new cjs.Graphics().p("A2OayMAdGg1jIPXAAMgdMA1jg");
	var mask_4_graphics_183 = new cjs.Graphics().p("A2EayMAdHg1jIPCAAMgdMA1jg");
	var mask_4_graphics_184 = new cjs.Graphics().p("A11ayMAdHg1jIOkAAMgdMA1jg");
	var mask_4_graphics_185 = new cjs.Graphics().p("A1iayMAdHg1jIN+AAMgdLA1jg");
	var mask_4_graphics_186 = new cjs.Graphics().p("A1LayMAdHg1jINQAAMgdMA1jg");
	var mask_4_graphics_187 = new cjs.Graphics().p("A0wayMAdIg1jIMZAAMgdMA1jg");
	var mask_4_graphics_188 = new cjs.Graphics().p("A0QayMAdHg1jILaAAMgdMA1jg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_4_graphics_139,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_140,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_141,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_142,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_143,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_144,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_145,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_146,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_147,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_148,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_149,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_150,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_151,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_152,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_153,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_154,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_155,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_156,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_157,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_158,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_159,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_160,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_161,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_162,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_163,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_164,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_165,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_166,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_167,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_168,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_169,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_170,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_171,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_172,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_173,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_174,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_175,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_176,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_177,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_178,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_179,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_180,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_181,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_182,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_183,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_184,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_185,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_186,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_187,x:171,y:189.5}).wait(1).to({graphics:mask_4_graphics_188,x:171,y:189.5}).wait(1).to({graphics:null,x:0,y:0}).wait(339));

	// Layer 16
	this.instance_4 = new lib.Allpeople();
	this.instance_4.setTransform(129.5,209,1,1,0,0,0,315.5,151);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(139).to({_off:false},0).wait(41).to({_off:true},9).wait(339));

	// Layer 8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_91 = new cjs.Graphics().p("A0OayMAdMg1jILRAAMgdLA1jg");
	var mask_5_graphics_92 = new cjs.Graphics().p("A0xayMAdMg1jIMXAAMgdLA1jg");
	var mask_5_graphics_93 = new cjs.Graphics().p("A1QayMAdNg1jINUAAMgdLA1jg");
	var mask_5_graphics_94 = new cjs.Graphics().p("A1qayMAdNg1jIOIAAMgdLA1jg");
	var mask_5_graphics_95 = new cjs.Graphics().p("A1/ayMAdNg1jIOyAAMgdLA1jg");
	var mask_5_graphics_96 = new cjs.Graphics().p("A2QayMAdNg1jIPUAAMgdMA1jg");
	var mask_5_graphics_97 = new cjs.Graphics().p("A2bayMAdNg1jIPqAAMgdLA1jg");
	var mask_5_graphics_98 = new cjs.Graphics().p("A2iayMAdNg1jIP4AAMgdLA1jg");
	var mask_5_graphics_99 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_100 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_101 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_102 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_103 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_104 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_105 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_106 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_107 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_108 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_109 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_110 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_111 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_112 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_113 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_114 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_115 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_116 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_117 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_118 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_119 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_120 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_121 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_122 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_123 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_124 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_125 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_126 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_127 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_128 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_129 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_130 = new cjs.Graphics().p("A2kayMAdNg1jIP8AAMgdKA1jg");
	var mask_5_graphics_131 = new cjs.Graphics().p("A2iayMAdNg1jIP4AAMgdLA1jg");
	var mask_5_graphics_132 = new cjs.Graphics().p("A2bayMAdNg1jIPqAAMgdLA1jg");
	var mask_5_graphics_133 = new cjs.Graphics().p("A2QayMAdNg1jIPUAAMgdMA1jg");
	var mask_5_graphics_134 = new cjs.Graphics().p("A1/ayMAdNg1jIOyAAMgdLA1jg");
	var mask_5_graphics_135 = new cjs.Graphics().p("A1qayMAdNg1jIOIAAMgdLA1jg");
	var mask_5_graphics_136 = new cjs.Graphics().p("A1QayMAdNg1jINUAAMgdLA1jg");
	var mask_5_graphics_137 = new cjs.Graphics().p("A0xayMAdNg1jIMWAAMgdKA1jg");
	var mask_5_graphics_138 = new cjs.Graphics().p("A0OayMAdMg1jILSAAMgdLA1jg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_5_graphics_91,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_92,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_93,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_94,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_95,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_96,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_97,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_98,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_99,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_100,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_101,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_102,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_103,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_104,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_105,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_106,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_107,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_108,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_109,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_110,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_111,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_112,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_113,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_114,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_115,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_116,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_117,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_118,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_119,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_120,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_121,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_122,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_123,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_124,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_125,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_126,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_127,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_128,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_129,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_130,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_131,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_132,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_133,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_134,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_135,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_136,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_137,x:98.2,y:189.5}).wait(1).to({graphics:mask_5_graphics_138,x:98.2,y:189.5}).wait(1).to({graphics:null,x:0,y:0}).wait(389));

	// Layer 7
	this.instance_5 = new lib.Allpeople();
	this.instance_5.setTransform(164.5,208.5,1,1,0,0,0,315.5,151);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(91).to({_off:false},0).wait(39).to({_off:true},9).wait(389));

	// Layer 15 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_27 = new cjs.Graphics().p("EgKyAssMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_28 = new cjs.Graphics().p("EgKyAqAMAdMg1jIVaAAMgc/A1jg");
	var mask_6_graphics_29 = new cjs.Graphics().p("EgKyAnkMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_30 = new cjs.Graphics().p("EgKyAlWMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_31 = new cjs.Graphics().p("EgKyAjXMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_32 = new cjs.Graphics().p("EgKyAhnMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_33 = new cjs.Graphics().p("EgKyAgGMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_34 = new cjs.Graphics().p("Aqye0MAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AqydwMAdMg1jIVaAAMgc/A1jg");
	var mask_6_graphics_36 = new cjs.Graphics().p("Aqyc8MAdMg1jIVaAAMgc/A1jg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AqycXMAdMg1kIVaAAMgc/A1kg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AqycAMAdMg1jIVaAAMgc/A1jg");
	var mask_6_graphics_39 = new cjs.Graphics().p("Aqyb5MAdMg1kIVaAAMgc/A1kg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_6_graphics_27,x:254.8,y:286.1}).wait(1).to({graphics:mask_6_graphics_28,x:254.8,y:268.9}).wait(1).to({graphics:mask_6_graphics_29,x:254.8,y:253.2}).wait(1).to({graphics:mask_6_graphics_30,x:254.8,y:239}).wait(1).to({graphics:mask_6_graphics_31,x:254.8,y:226.3}).wait(1).to({graphics:mask_6_graphics_32,x:254.8,y:215.1}).wait(1).to({graphics:mask_6_graphics_33,x:254.8,y:205.4}).wait(1).to({graphics:mask_6_graphics_34,x:254.8,y:197.2}).wait(1).to({graphics:mask_6_graphics_35,x:254.8,y:190.5}).wait(1).to({graphics:mask_6_graphics_36,x:254.8,y:185.3}).wait(1).to({graphics:mask_6_graphics_37,x:254.8,y:181.5}).wait(1).to({graphics:mask_6_graphics_38,x:254.8,y:179.3}).wait(1).to({graphics:mask_6_graphics_39,x:254.8,y:178.6}).wait(489));

	// Layer 14
	this.instance_6 = new lib.Allpeople();
	this.instance_6.setTransform(61.5,419,1,1,0,0,0,315.5,151);
	this.instance_6._off = true;

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({y:204},12,cjs.Ease.get(1)).wait(489));

	// Layer 13 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_21 = new cjs.Graphics().p("EgLQAsmMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_22 = new cjs.Graphics().p("EgLPAqBMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_23 = new cjs.Graphics().p("EgLOAnqMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_24 = new cjs.Graphics().p("EgLNAliMAdUg1kIKjAAMgdUA1kg");
	var mask_7_graphics_25 = new cjs.Graphics().p("EgLMAjoMAdUg1kIKjAAMgdUA1kg");
	var mask_7_graphics_26 = new cjs.Graphics().p("EgLLAh8MAdUg1kIKjAAMgdUA1kg");
	var mask_7_graphics_27 = new cjs.Graphics().p("EgLLAgeMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_28 = new cjs.Graphics().p("ArKfPMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_29 = new cjs.Graphics().p("ArKePMAdUg1kIKjAAMgdUA1kg");
	var mask_7_graphics_30 = new cjs.Graphics().p("ArJdcMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_31 = new cjs.Graphics().p("ArJc4MAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_32 = new cjs.Graphics().p("ArJcjMAdUg1kIKjAAMgdUA1kg");
	var mask_7_graphics_33 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_34 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_35 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_36 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_37 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_38 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_39 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_40 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_41 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");
	var mask_7_graphics_42 = new cjs.Graphics().p("ArJcbMAdUg1jIKjAAMgdUA1jg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_7_graphics_21,x:183.2,y:285.5}).wait(1).to({graphics:mask_7_graphics_22,x:183.3,y:269}).wait(1).to({graphics:mask_7_graphics_23,x:183.4,y:253.9}).wait(1).to({graphics:mask_7_graphics_24,x:183.5,y:240.2}).wait(1).to({graphics:mask_7_graphics_25,x:183.6,y:228}).wait(1).to({graphics:mask_7_graphics_26,x:183.6,y:217.2}).wait(1).to({graphics:mask_7_graphics_27,x:183.7,y:207.9}).wait(1).to({graphics:mask_7_graphics_28,x:183.7,y:200}).wait(1).to({graphics:mask_7_graphics_29,x:183.8,y:193.5}).wait(1).to({graphics:mask_7_graphics_30,x:183.8,y:188.5}).wait(1).to({graphics:mask_7_graphics_31,x:183.9,y:184.9}).wait(1).to({graphics:mask_7_graphics_32,x:183.9,y:182.7}).wait(1).to({graphics:mask_7_graphics_33,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_34,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_35,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_36,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_37,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_38,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_39,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_40,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_41,x:183.9,y:182}).wait(1).to({graphics:mask_7_graphics_42,x:183.9,y:182}).wait(486));

	// Layer 12
	this.instance_7 = new lib.Allpeople();
	this.instance_7.setTransform(91.5,419,1,1,0,0,0,315.5,151);
	this.instance_7._off = true;

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({y:203},12,cjs.Ease.get(1)).wait(495));

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_15 = new cjs.Graphics().p("EgRtAseMAdMg1kILVAAMgdNA1kg");
	var mask_8_graphics_16 = new cjs.Graphics().p("EgRoAp5MAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_17 = new cjs.Graphics().p("EgRjAnjMAdMg1kILVAAMgdNA1kg");
	var mask_8_graphics_18 = new cjs.Graphics().p("EgReAlbMAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_19 = new cjs.Graphics().p("EgRaAjhMAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_20 = new cjs.Graphics().p("EgRWAh2MAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_21 = new cjs.Graphics().p("EgRTAgZMAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_22 = new cjs.Graphics().p("AxRfKMAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_23 = new cjs.Graphics().p("AxPeKMAdMg1kILVAAMgdNA1kg");
	var mask_8_graphics_24 = new cjs.Graphics().p("AxNdYMAdMg1kILVAAMgdNA1kg");
	var mask_8_graphics_25 = new cjs.Graphics().p("AxMc0MAdMg1jILVAAMgdNA1jg");
	var mask_8_graphics_26 = new cjs.Graphics().p("AxLcfMAdMg1kILVAAMgdNA1kg");
	var mask_8_graphics_27 = new cjs.Graphics().p("AxLcYMAdMg1kILVAAMgdNA1kg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_8_graphics_15,x:146,y:284.6}).wait(1).to({graphics:mask_8_graphics_16,x:146.6,y:268.2}).wait(1).to({graphics:mask_8_graphics_17,x:147.1,y:253.1}).wait(1).to({graphics:mask_8_graphics_18,x:147.5,y:239.6}).wait(1).to({graphics:mask_8_graphics_19,x:147.9,y:227.4}).wait(1).to({graphics:mask_8_graphics_20,x:148.3,y:216.7}).wait(1).to({graphics:mask_8_graphics_21,x:148.6,y:207.4}).wait(1).to({graphics:mask_8_graphics_22,x:148.9,y:199.5}).wait(1).to({graphics:mask_8_graphics_23,x:149.1,y:193}).wait(1).to({graphics:mask_8_graphics_24,x:149.3,y:188}).wait(1).to({graphics:mask_8_graphics_25,x:149.4,y:184.5}).wait(1).to({graphics:mask_8_graphics_26,x:149.5,y:182.3}).wait(1).to({graphics:mask_8_graphics_27,x:149.5,y:181.6}).wait(501));

	// Peoples
	this.instance_8 = new lib.Allpeople();
	this.instance_8.setTransform(129.5,419,1,1,0,0,0,315.5,151);
	this.instance_8._off = true;

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({y:209},12,cjs.Ease.get(1)).wait(501));

	// Layer 5 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_9 = new cjs.Graphics().p("EgUKAwlMAdWg1uIK/AAMgdWA1ug");
	var mask_9_graphics_10 = new cjs.Graphics().p("EgUKAtWMAdWg1uIK/AAMgdWA1ug");
	var mask_9_graphics_11 = new cjs.Graphics().p("EgUKAqZMAdWg1uIK/AAMgdWA1ug");
	var mask_9_graphics_12 = new cjs.Graphics().p("EgUKAnuMAdWg1uIK/AAMgdWA1ug");
	var mask_9_graphics_13 = new cjs.Graphics().p("EgUKAlVMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_14 = new cjs.Graphics().p("EgUKAjOMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_15 = new cjs.Graphics().p("EgUKAhZMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_16 = new cjs.Graphics().p("A0Kf2MAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_17 = new cjs.Graphics().p("A0KelMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_18 = new cjs.Graphics().p("A0KdmMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_19 = new cjs.Graphics().p("A0Kc5MAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_20 = new cjs.Graphics().p("A0KceMAdWg1tIK/AAMgdWA1tg");
	var mask_9_graphics_21 = new cjs.Graphics().p("A0KcVMAdWg1tIK/AAMgdWA1tg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_9_graphics_9,x:97.7,y:310.9}).wait(1).to({graphics:mask_9_graphics_10,x:97.6,y:290.2}).wait(1).to({graphics:mask_9_graphics_11,x:97.4,y:271.3}).wait(1).to({graphics:mask_9_graphics_12,x:97.3,y:254.2}).wait(1).to({graphics:mask_9_graphics_13,x:97.3,y:239}).wait(1).to({graphics:mask_9_graphics_14,x:97.2,y:225.5}).wait(1).to({graphics:mask_9_graphics_15,x:97.1,y:213.8}).wait(1).to({graphics:mask_9_graphics_16,x:97.1,y:203.9}).wait(1).to({graphics:mask_9_graphics_17,x:97,y:195.8}).wait(1).to({graphics:mask_9_graphics_18,x:97,y:189.5}).wait(1).to({graphics:mask_9_graphics_19,x:96.9,y:185}).wait(1).to({graphics:mask_9_graphics_20,x:96.9,y:182.3}).wait(1).to({graphics:mask_9_graphics_21,x:96.9,y:181.4}).wait(507));

	// Layer 3
	this.instance_9 = new lib.Allpeople();
	this.instance_9.setTransform(164.5,419,1,1,0,0,0,315.5,151);
	this.instance_9._off = true;

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({y:208.5},12,cjs.Ease.get(1)).wait(507));

	// Layer 11 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_3 = new cjs.Graphics().p("EgULAsrMAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_4 = new cjs.Graphics().p("EgULArTMAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_5 = new cjs.Graphics().p("EgULAp8MAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_6 = new cjs.Graphics().p("EgULAokMAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_7 = new cjs.Graphics().p("EgULAnNMAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_8 = new cjs.Graphics().p("EgULAl1MAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_9 = new cjs.Graphics().p("EgULAkeMAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_10 = new cjs.Graphics().p("EgULAjGMAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_11 = new cjs.Graphics().p("EgULAhvMAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_12 = new cjs.Graphics().p("EgULAgXMAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_13 = new cjs.Graphics().p("A0LfAMAdWg1kILBAAMgdWA1kg");
	var mask_10_graphics_14 = new cjs.Graphics().p("A0LdoMAdWg1jILBAAMgdWA1jg");
	var mask_10_graphics_15 = new cjs.Graphics().p("A0LcRMAdWg1kILBAAMgdWA1kg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_10_graphics_3,x:25.3,y:285.9}).wait(1).to({graphics:mask_10_graphics_4,x:25.3,y:277.2}).wait(1).to({graphics:mask_10_graphics_5,x:25.3,y:268.4}).wait(1).to({graphics:mask_10_graphics_6,x:25.3,y:259.7}).wait(1).to({graphics:mask_10_graphics_7,x:25.3,y:250.9}).wait(1).to({graphics:mask_10_graphics_8,x:25.3,y:242.2}).wait(1).to({graphics:mask_10_graphics_9,x:25.3,y:233.4}).wait(1).to({graphics:mask_10_graphics_10,x:25.3,y:224.7}).wait(1).to({graphics:mask_10_graphics_11,x:25.3,y:215.9}).wait(1).to({graphics:mask_10_graphics_12,x:25.3,y:207.2}).wait(1).to({graphics:mask_10_graphics_13,x:25.3,y:198.4}).wait(1).to({graphics:mask_10_graphics_14,x:25.3,y:189.7}).wait(1).to({graphics:mask_10_graphics_15,x:25.3,y:180.9}).wait(513));

	// Layer 10
	this.instance_10 = new lib.Allpeople();
	this.instance_10.setTransform(209.5,419,1,1,0,0,0,315.5,151);
	this.instance_10._off = true;

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({y:209},12).wait(513));

	// Layer 11 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("ACDpEIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_1 = new cjs.Graphics().p("ACDqcIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ACDr0IArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ACDtMIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ACDujIArhPIEaAAIUQAAMgeIA2+I4nABg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ACDv7IArhPIEaAAIUQAAMgeIA2+I4nABg");
	var mask_11_graphics_6 = new cjs.Graphics().p("ACDxTIArhPIEaAAIUQAAMgeIA2+I4nABg");
	var mask_11_graphics_7 = new cjs.Graphics().p("ACDyrIArhPIEaAAIUQAAMgeIA2+I4nABg");
	var mask_11_graphics_8 = new cjs.Graphics().p("ACD0DIArhPIEaAAIUQAAMgeIA2+I4nABg");
	var mask_11_graphics_9 = new cjs.Graphics().p("ACD1bIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_10 = new cjs.Graphics().p("ACD2zIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_11 = new cjs.Graphics().p("ACD4LIArhPIEaAAIUQABMgeIA2+I4nABg");
	var mask_11_graphics_12 = new cjs.Graphics().p("ACD5jIArhPIEaAAIUQABMgeIA2+I4nABg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:-87.6,y:286.1}).wait(1).to({graphics:mask_11_graphics_1,x:-87.6,y:277.3}).wait(1).to({graphics:mask_11_graphics_2,x:-87.6,y:268.5}).wait(1).to({graphics:mask_11_graphics_3,x:-87.6,y:259.8}).wait(1).to({graphics:mask_11_graphics_4,x:-87.6,y:251}).wait(1).to({graphics:mask_11_graphics_5,x:-87.6,y:242.2}).wait(1).to({graphics:mask_11_graphics_6,x:-87.6,y:233.4}).wait(1).to({graphics:mask_11_graphics_7,x:-87.6,y:224.6}).wait(1).to({graphics:mask_11_graphics_8,x:-87.6,y:215.8}).wait(1).to({graphics:mask_11_graphics_9,x:-87.6,y:207}).wait(1).to({graphics:mask_11_graphics_10,x:-87.6,y:198.2}).wait(1).to({graphics:mask_11_graphics_11,x:-87.6,y:189.4}).wait(1).to({graphics:mask_11_graphics_12,x:-87.6,y:180.6}).wait(516));

	// Layer 10
	this.instance_11 = new lib.Allpeople();
	this.instance_11.setTransform(231.5,419,1,1,0,0,0,315.5,151);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:208},12).wait(516));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,254.5,183.2,306);


// stage content:



(lib.mail_300300_v4_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#112847").s().p("AgXApIAAgQIALgLIAJgKIAEgJQACgGAAgHIAAgCIAAgCIgCgDQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgEAAgCAEQgCADAAAJIgPgEQABgIACgGQADgFADgDQAEgDAEgBIAGAAIACAAIAEABIAFACIAFAEQACADABAEQACADAAAGQAAAGgCAGQgCAFgEAEIgJAKIgKAMIAbAAIgBAPgAhSApIAAgOIANAAIAAguIgDAEIgGAFIgEACIAAgQIAEgDIAFgEIAIgJIANAAIAABDIAMAAIAAAOgAA2AXIAAgQIgPAAIAAgLIAPAAIAAgQIAOAAIAAAPIAPABIAAALIgPAAIAAAQg");
	this.shape.setTransform(287.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(392));

	// Layer 15
	this.instance = new lib.Symbol7();
	this.instance.setTransform(-117,259.5,1,1,0,0,0,109.8,11.3);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237).to({_off:false},0).to({x:160.1},6).to({x:150.5},5).wait(30).to({x:140.5},6).to({x:416},5).wait(103));

	// Layer 10
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(-112.2,262.4,1,1,0,0,0,90.8,13.4);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(287).to({_off:false},0).to({x:-67.6},1).to({x:155.1},5).to({x:150.1},5).wait(30).to({x:145.1},6).to({x:391.6},5).wait(53));

	// Layer 11
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(-118.4,262,1,1,0,0,0,98.5,13.6);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(338).to({_off:false},0).to({x:175.2},6).to({x:150.3},5).wait(30).to({x:145.3},6).to({x:400.3},5).wait(2));

	// Layer 6
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(-115.6,259.3,1,1,0,0,0,40.1,11);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({_off:false},0).to({x:177.7},6).to({x:150.2},5).wait(30).to({x:145.2},6).to({x:349.7},5).wait(203));

	// Layer 9
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(-114.8,256.1,1,1,0,0,0,88.2,14.6);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(187).to({_off:false},0).to({x:167.2},6).to({x:150.2},5).wait(30).to({x:145.2},6).to({x:390.2},5).wait(153));

	// Layer 1
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(-113.3,260,1,1,0,0,0,94.1,11.3);
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(87).to({_off:false},0).to({x:178.2},6).to({x:150},5).wait(30).to({x:145},6).to({x:398.2},5).wait(253));

	// Layer 5
	this.instance_6 = new lib.Tween47("synched",0);
	this.instance_6.setTransform(150.6,276.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({alpha:1},17).to({startPosition:0},30).to({alpha:0},13).to({startPosition:0},16).wait(299));

	// Layer 3
	this.instance_7 = new lib.Hits();
	this.instance_7.setTransform(150.5,235,1,1,0,0,0,91.3,21.3);
	this.instance_7.alpha = 0;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},17).wait(47).to({alpha:0.148},11).to({alpha:0},2).to({y:237.8},8).to({y:238.5},2).to({y:242.5},11).to({y:245},7).wait(287));

	// Layer 2
	this.instance_8 = new lib.Tween46("synched",0);
	this.instance_8.setTransform(150.5,229);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).to({alpha:1},8).wait(309));

	// Capsula
	this.instance_9 = new lib.Capsula();
	this.instance_9.setTransform(124.1,178.6,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(392));

	// Radius border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.267],16.2,-66.2,16.2,193.8).s().p("A32K9IAA0eQLIhbM6AAQMtAAK+BYIAAUhg");
	this.shape_1.setTransform(148.8,232.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2356AB").s().p("A32AZQLIhZM6AAQMtAAK+BWIAAAoQq+hWstAAQs6AArIBZg");
	this.shape_2.setTransform(148.8,164.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E02B58").s().p("A32AZQLIhZM6AAQMtAAK+BWIAAAoQq+hWstAAQs6AArIBZg");
	this.shape_3.setTransform(148.8,160.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(392));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.6,32.4,0.6,-10.6).s().p("A32n4MAvtAAAIAAPsQq+ifstAAQs6AArICkg");
	this.shape_4.setTransform(148.8,140.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(392));

	// Layer 1 copy
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(43,107,204,0.4)").s().p("AmqM6IKXzKIAjhAIgBAAIAAAAIgoABIAAgBIDDlpIAAZzg");
	this.shape_5.setTransform(258.9,219.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(43,107,204,0.314)").s().p("AovKFIK30BIA+gBIFCgGIAngBIAAAAIABAAIgiBAIqXTJg");
	this.shape_6.setTransform(230.1,237.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(43,107,204,0.353)").s().p("ArJKFIKzz7IhRABIADgGIMugJIgEAIIq5UBg");
	this.shape_7.setTransform(172.6,237.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(43,107,204,0.502)").s().p("AoXJ5IALzxIQNAAIAXAAIqsTxg");
	this.shape_8.setTransform(47.6,239);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(43,107,204,0.431)").s().p("AquJ+IKtzxIgXgBIJ3gIIBQgBIqxT7g");
	this.shape_9.setTransform(101.5,238.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(392));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AAAY6QtgAArkBkMAAAg08MAyJAAAMAAAA09QrkhlthAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:145,y:14.5}).wait(391));

	// Peoples
	this.peoples = new lib.Peoplesanimations();
	this.peoples.setTransform(158.6,83.9,0.77,0.77,0,0,0,146.7,187.8);
	this.peoples._off = true;

	this.peoples.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.peoples).wait(1).to({_off:false},0).wait(391));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144,154.7,307.6,297.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;