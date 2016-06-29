(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
var pixi_plugins_app_Application = function() {
	this._animationFrameId = null;
	this.pixelRatio = 1;
	this.set_skipFrame(false);
	this.autoResize = true;
	this.transparent = false;
	this.antialias = false;
	this.forceFXAA = false;
	this.roundPixels = false;
	this.clearBeforeRender = true;
	this.preserveDrawingBuffer = false;
	this.backgroundColor = 16777215;
	this.width = window.innerWidth - 50;
	this.height = window.innerHeight - 5;
	this.set_fps(60);
};
pixi_plugins_app_Application.__name__ = true;
pixi_plugins_app_Application.prototype = {
	set_fps: function(val) {
		this._frameCount = 0;
		return val >= 1 && val < 60?this.fps = val | 0:this.fps = 60;
	}
	,set_skipFrame: function(val) {
		if(val) {
			console.log("pixi.plugins.app.Application > Deprecated: skipFrame - use fps property and set it to 30 instead");
			this.set_fps(30);
		}
		return this.skipFrame = val;
	}
	,start: function(rendererType,parentDom,canvasElement) {
		if(rendererType == null) rendererType = "auto";
		if(canvasElement == null) {
			var _this = window.document;
			this.canvas = _this.createElement("canvas");
			this.canvas.style.width = this.width + "px";
			this.canvas.style.height = this.height + "px";
			this.canvas.style.position = "absolute";
		} else this.canvas = canvasElement;
		if(parentDom == null) window.document.body.appendChild(this.canvas); else parentDom.appendChild(this.canvas);
		this.stage = new PIXI.Container();
		var renderingOptions = { };
		renderingOptions.view = this.canvas;
		renderingOptions.backgroundColor = this.backgroundColor;
		renderingOptions.resolution = this.pixelRatio;
		renderingOptions.antialias = this.antialias;
		renderingOptions.forceFXAA = this.forceFXAA;
		renderingOptions.autoResize = this.autoResize;
		renderingOptions.transparent = this.transparent;
		renderingOptions.clearBeforeRender = this.clearBeforeRender;
		renderingOptions.preserveDrawingBuffer = this.preserveDrawingBuffer;
		if(rendererType == "auto") this.renderer = PIXI.autoDetectRenderer(this.width,this.height,renderingOptions); else if(rendererType == "canvas") this.renderer = new PIXI.CanvasRenderer(this.width,this.height,renderingOptions); else this.renderer = new PIXI.WebGLRenderer(this.width,this.height,renderingOptions);
		if(this.roundPixels) this.renderer.roundPixels = true;
		if(parentDom == null) window.document.body.appendChild(this.renderer.view); else parentDom.appendChild(this.renderer.view);
		this.resumeRendering();
		this.addStats();
	}
	,resumeRendering: function() {
		if(this.autoResize) window.onresize = $bind(this,this._onWindowResize);
		if(this._animationFrameId == null) this._animationFrameId = window.requestAnimationFrame($bind(this,this._onRequestAnimationFrame));
	}
	,_onWindowResize: function(event) {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.renderer.resize(this.width,this.height);
		this.canvas.style.width = this.width + "px";
		this.canvas.style.height = this.height + "px";
		if(this.onResize != null) this.onResize();
	}
	,_onRequestAnimationFrame: function(elapsedTime) {
		this._frameCount++;
		if(this._frameCount == (60 / this.fps | 0)) {
			this._frameCount = 0;
			if(this.onUpdate != null) this.onUpdate(elapsedTime);
			this.renderer.render(this.stage);
		}
		this._animationFrameId = window.requestAnimationFrame($bind(this,this._onRequestAnimationFrame));
	}
	,addStats: function() {
	}
};
var Main = function() {
	this.mute = false;
	this.showWinn = new PIXI.Text("0",{ font : "bold 12px Arial", align : "center", fill : "#A4CC00"});
	this.congr = new PIXI.Text(custom_Config.winnerMessage2,{ font : "bold 30px Arial", align : "center", fill : "#A4CC00"});
	this.tvAntenaEnd2 = new PIXI.Graphics();
	this.tvAntenaEnd1 = new PIXI.Graphics();
	this.tvAntena2 = new PIXI.Graphics();
	this.tvAntena1 = new PIXI.Graphics();
	this.tv = new PIXI.Graphics();
	this.stake = new PIXI.Text("100",{ font : "bold 18px Arial"});
	this.creditValueShow = new PIXI.Text("5000",{ font : "bold 18px Arial"});
	this.credit = new PIXI.Text("CREDIT:",{ font : "bold 18px Arial"});
	this.minButton = new PIXI.Text("MIN",{ font : "20px Arial", fill : "#ff0000", align : "center"});
	this.maxButton = new PIXI.Text("MAX",{ font : "20px Arial", fill : "#ff0000", align : "center"});
	this.message = new PIXI.Text(custom_Config.welcomeMessage,{ font : "bold 15px Arial", fill : "#ff0000", align : "center"});
	this.volumeOnOF = new PIXI.Text("Isključi zvuk",{ font : "20px Arial", fill : "#ff0000", align : "center"});
	this.arrowLeft = new PIXI.Graphics();
	this.arrowRight = new PIXI.Graphics();
	this.winnerCheck2 = new PIXI.Graphics();
	this.winnerCheck = new PIXI.Graphics();
	this.line2 = new PIXI.Graphics();
	this.line1 = new PIXI.Graphics();
	this.imgBody = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.imgBody));
	this.imgButton = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.imgButton));
	this.yourCandidateImg = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectVucicFrame));
	this.selectSeselj = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectSeseljFrame));
	this.selectCanak = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectCanakFrame));
	this.selectCeda = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectCedaFrame));
	this.selectTadic = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectTadicFrame));
	this.selectToma = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectTomaFrame));
	this.selectDacic = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectDacicFrame));
	this.selectVucic = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectVucicFrame));
	this.winnerCandidateImg = new PIXI.Sprite(PIXI.Texture.fromImage(custom_Config.selectVucicFrame));
	this.textureSeseljFrame = PIXI.Texture.fromImage(custom_Config.selectSeseljFrame);
	this.textureCanakFrame = PIXI.Texture.fromImage(custom_Config.selectCanakFrame);
	this.textureCedaFrame = PIXI.Texture.fromImage(custom_Config.selectCedaFrame);
	this.textureTadicFrame = PIXI.Texture.fromImage(custom_Config.selectTadicFrame);
	this.textureTomaFrame = PIXI.Texture.fromImage(custom_Config.selectTomaFrame);
	this.textureDacicFrame = PIXI.Texture.fromImage(custom_Config.selectDacicFrame);
	this.textureVucicFrame = PIXI.Texture.fromImage(custom_Config.selectVucicFrame);
	this.imgSlot = custom_Config.imgSlot;
	this.inc = [25,35,50,70,100];
	this.i = 0;
	this.startDolarCount = 0;
	this.minY = 0;
	this.maxY = 650;
	this.minX = 0;
	this.maxX = 1300;
	this.gravity = 2.5;
	this.dolar = [];
	this.amount = 20;
	this.isAnimated = true;
	this.invested = 0;
	this.yourCandidate = 0;
	this.preChoosedPosition3 = [6,1,2,4,0];
	this.preChoosedPosition2 = [2,0,6,3,4];
	this.preChoosedPosition1 = [0,2,4,6,1];
	this.slotSprite3 = [];
	this.slotSprite2 = [];
	this.slotSprite1 = [];
	this.finalTileY3 = [];
	this.finalTileY2 = [];
	this.finalTileY1 = [];
	this.gameStatus = 0;
	this.creditValue = custom_Config.creditValue;
	this.selectCandidateWidth = 70;
	this.selectCandidateHight = 70;
	this.selectCandidateInitalX = 380;
	this.selectCandidateInitalY = 535;
	this.tTiles = 7;
	this.nCycly = 5;
	this.tileWIDTH = 100;
	this.tileHEIGHT = 100;
	this.initalX = 395;
	this.slotNumber = 5;
	this.gameStateCHECK_WIN = 3;
	this.gameStateMOVING = 2;
	this.gameStateINIT = 1;
	this.gameStateZERO = 0;
	pixi_plugins_app_Application.call(this);
	this._init();
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.__super__ = pixi_plugins_app_Application;
Main.prototype = $extend(pixi_plugins_app_Application.prototype,{
	_init: function() {
		this.backgroundColor = 16777215;
		pixi_plugins_app_Application.prototype.start.call(this);
		var texture3 = PIXI.Texture.fromImage(this.imgSlot);
		var creditStyle = { font : "bold 18px Arial"};
		var volumeStyle_font = "20px Arial";
		var volumeStyle_fill = "#ff0000";
		var volumeStyle_align = "center";
		var baseURL = "assets/sounds/";
		this.loader = new core_AssetLoader();
		this.loader.baseUrl = baseURL;
		this.loader.addAsset("win","win.mp3",false,null);
		this.loader.addAsset("vucic","tisina.mp3",false,null);
		this.loader.addAsset("dacic","miljacka2.mp3",false,null);
		this.loader.addAsset("toma","engleski.mp3",false,null);
		this.loader.addAsset("tadic","mac.mp3",false,null);
		this.loader.addAsset("ceda","gospodjo2.mp3",false,null);
		this.loader.addAsset("canak","sat.mp3",false,null);
		this.loader.addAsset("seselj","seki.mp3",false,null);
		this.loader.start($bind(this,this.onLoaded));
		this.selectVucic.height = this.selectCandidateHight;
		this.selectVucic.width = this.selectCandidateWidth;
		this.selectVucic.y = this.selectCandidateInitalY;
		this.selectVucic.x = this.selectCandidateInitalX;
		this.stage.addChild(this.selectVucic);
		this.selectVucic.interactive = true;
		this.selectVucic.on("mouseover",$bind(this,this.onVucicOver));
		this.selectVucic.on("mouseout",$bind(this,this.onVucicOut));
		this.selectVucic.on("click",$bind(this,this.addVucic));
		this.selectVucic.on("touchstart",$bind(this,this.addVucic));
		this.selectDacic.height = this.selectCandidateHight;
		this.selectDacic.width = this.selectCandidateWidth;
		this.selectDacic.y = this.selectCandidateInitalY;
		this.selectDacic.x = this.selectCandidateInitalX + 80;
		this.stage.addChild(this.selectDacic);
		this.selectDacic.interactive = true;
		this.selectDacic.on("mouseover",$bind(this,this.onDacicOver));
		this.selectDacic.on("mouseout",$bind(this,this.onDacicOut));
		this.selectDacic.on("click",$bind(this,this.addDacic));
		this.selectDacic.on("touchstart",$bind(this,this.addDacic));
		this.selectToma.height = this.selectCandidateHight;
		this.selectToma.width = this.selectCandidateWidth;
		this.selectToma.y = this.selectCandidateInitalY;
		this.selectToma.x = this.selectCandidateInitalX + 160;
		this.stage.addChild(this.selectToma);
		this.selectToma.interactive = true;
		this.selectToma.on("mouseover",$bind(this,this.onTomaOver));
		this.selectToma.on("mouseout",$bind(this,this.onTomaOut));
		this.selectToma.on("click",$bind(this,this.addToma));
		this.selectToma.on("touchstart",$bind(this,this.addToma));
		this.selectTadic.height = this.selectCandidateHight;
		this.selectTadic.width = this.selectCandidateWidth;
		this.selectTadic.y = this.selectCandidateInitalY;
		this.selectTadic.x = this.selectCandidateInitalX + 240;
		this.stage.addChild(this.selectTadic);
		this.selectTadic.interactive = true;
		this.selectTadic.on("mouseover",$bind(this,this.onTadicOver));
		this.selectTadic.on("mouseout",$bind(this,this.onTadicOut));
		this.selectTadic.on("click",$bind(this,this.addTadic));
		this.selectTadic.on("touchstart",$bind(this,this.addTadic));
		this.selectCeda.height = this.selectCandidateHight;
		this.selectCeda.width = this.selectCandidateWidth;
		this.selectCeda.y = this.selectCandidateInitalY;
		this.selectCeda.x = this.selectCandidateInitalX + 320;
		this.stage.addChild(this.selectCeda);
		this.selectCeda.interactive = true;
		this.selectCeda.on("mouseover",$bind(this,this.onCedaOver));
		this.selectCeda.on("mouseout",$bind(this,this.onCedaOut));
		this.selectCeda.on("click",$bind(this,this.addCeda));
		this.selectCeda.on("touchstart",$bind(this,this.addCeda));
		this.selectCanak.height = this.selectCandidateHight;
		this.selectCanak.width = this.selectCandidateWidth;
		this.selectCanak.y = this.selectCandidateInitalY;
		this.selectCanak.x = this.selectCandidateInitalX + 400;
		this.stage.addChild(this.selectCanak);
		this.selectCanak.interactive = true;
		this.selectCanak.on("mouseover",$bind(this,this.onCanakOver));
		this.selectCanak.on("mouseout",$bind(this,this.onCanakOut));
		this.selectCanak.on("click",$bind(this,this.addCanak));
		this.selectCanak.on("touchstart",$bind(this,this.addCanak));
		this.selectSeselj.height = this.selectCandidateHight;
		this.selectSeselj.width = this.selectCandidateWidth;
		this.selectSeselj.y = this.selectCandidateInitalY;
		this.selectSeselj.x = this.selectCandidateInitalX + 480;
		this.stage.addChild(this.selectSeselj);
		this.selectSeselj.interactive = true;
		this.selectSeselj.on("mouseover",$bind(this,this.onSeseljOver));
		this.selectSeselj.on("mouseout",$bind(this,this.onSeseljOut));
		this.selectSeselj.on("click",$bind(this,this.addSeselj));
		this.selectSeselj.on("touchstart",$bind(this,this.addSeselj));
		this.yourCandidateImg.height = 250;
		this.yourCandidateImg.width = this.yourCandidateImg.height;
		this.yourCandidateImg.y = 150;
		this.yourCandidateImg.x = 50;
		this.stage.addChild(this.yourCandidateImg);
		this.winnerCandidateImg.height = 250;
		this.winnerCandidateImg.width = this.winnerCandidateImg.height;
		this.winnerCandidateImg.y = 150;
		this.winnerCandidateImg.x = 1000;
		this.stage.addChild(this.winnerCandidateImg);
		this.volumeOnOF.x = 1170;
		this.volumeOnOF.y = 10;
		this.volumeOnOF.interactive = true;
		this.stage.addChild(this.volumeOnOF);
		this.volumeOnOF.on("touchstart",$bind(this,this.volumeClick));
		this.volumeOnOF.on("click",$bind(this,this.volumeClick));
		this.volumeOnOF.on("mouseover",$bind(this,this.volumeOnOFHover));
		this.volumeOnOF.on("mouseout",$bind(this,this.volumeOnOFHoverOut));
		this.message.x = 613;
		this.message.y = 45;
		this.stage.addChild(this.message);
		this.credit.x = 595;
		this.credit.y = 10;
		this.stage.addChild(this.credit);
		this.creditValueShow.x = 670;
		this.creditValueShow.y = 10;
		this.stage.addChild(this.creditValueShow);
		var candidatePresent = new PIXI.Text("Tvoj kandidat",creditStyle);
		candidatePresent.x = 120;
		candidatePresent.y = 120;
		this.stage.addChild(candidatePresent);
		var winnerPresent = new PIXI.Text("Pobednik",creditStyle);
		winnerPresent.x = 1090;
		winnerPresent.y = 120;
		this.stage.addChild(winnerPresent);
		var select = new PIXI.Text("Izaberi svog kandidata i uloži kintu",creditStyle);
		select.x = 509;
		select.y = 500;
		this.stage.addChild(select);
		this.imgBody.x = 353;
		this.imgBody.y = 70;
		this.imgBody.width = 608;
		this.imgBody.height = 378;
		while(this.i < this.slotNumber) {
			this.slotSprite1[this.i] = new PIXI.extras.TilingSprite(texture3,this.tileHEIGHT,this.tileWIDTH);
			this.slotSprite1[this.i].tilePosition.x = 0;
			this.slotSprite1[this.i].tilePosition.y = -this.preChoosedPosition1[this.i] * 100;
			this.slotSprite1[this.i].x = this.initalX + this.i * 105;
			this.slotSprite1[this.i].y = 105;
			this.stage.addChild(this.slotSprite1[this.i]);
			this.i++;
		}
		this.i = 0;
		while(this.i < this.slotNumber) {
			this.slotSprite2[this.i] = new PIXI.extras.TilingSprite(texture3,this.tileHEIGHT,this.tileWIDTH);
			this.slotSprite2[this.i].tilePosition.x = 0;
			this.slotSprite2[this.i].tilePosition.y = -this.preChoosedPosition2[this.i] * 100;
			this.slotSprite2[this.i].x = this.initalX + this.i * 105;
			this.slotSprite2[this.i].y = 210;
			this.stage.addChild(this.slotSprite2[this.i]);
			this.i++;
		}
		this.i = 0;
		while(this.i < this.slotNumber) {
			this.slotSprite3[this.i] = new PIXI.extras.TilingSprite(texture3,this.tileHEIGHT,this.tileWIDTH);
			this.slotSprite3[this.i].tilePosition.x = 0;
			this.slotSprite3[this.i].tilePosition.y = -this.preChoosedPosition3[this.i] * 100;
			this.slotSprite3[this.i].x = this.initalX + this.i * 105;
			this.slotSprite3[this.i].y = 315;
			this.stage.addChild(this.slotSprite3[this.i]);
			this.i++;
		}
		this.imgButton.x = 606;
		this.imgButton.y = 450;
		this.imgButton.height = 40;
		this.imgButton.width = 100;
		this.imgButton.interactive = true;
		this.imgButton.on("mousedown",$bind(this,this.restart));
		this.imgButton.on("mousedown",$bind(this,this.startAnimation));
		this.imgButton.on("touchstart",$bind(this,this.onButtonDown));
		this.imgButton.on("mouseup",$bind(this,this.onButtonUp));
		this.imgButton.on("touchend",$bind(this,this.onButtonUp));
		this.imgButton.on("mouseover",$bind(this,this.onButtonOver));
		this.imgButton.on("mouseout",$bind(this,this.onButtonUp));
		this.stage.addChild(this.imgBody);
		this.stage.addChild(this.imgButton);
		this.arrowLeft.beginFill(10800128);
		this.arrowLeft.moveTo(545,635);
		this.arrowLeft.lineTo(565,620);
		this.arrowLeft.lineTo(565,630);
		this.arrowLeft.lineTo(605,630);
		this.arrowLeft.lineTo(605,640);
		this.arrowLeft.lineTo(565,640);
		this.arrowLeft.lineTo(565,650);
		this.arrowRight.beginFill(10800128);
		this.arrowRight.moveTo(763,635);
		this.arrowRight.lineTo(743,620);
		this.arrowRight.lineTo(743,630);
		this.arrowRight.lineTo(703,630);
		this.arrowRight.lineTo(703,640);
		this.arrowRight.lineTo(743,640);
		this.arrowRight.lineTo(743,650);
		this.stake.y = 625;
		this.stake.x = 640;
		this.stage.addChild(this.arrowLeft);
		this.stage.addChild(this.arrowRight);
		this.stage.addChild(this.line1);
		this.stage.addChild(this.line2);
		this.stage.addChild(this.winnerCheck);
		this.stage.addChild(this.stake);
		this.arrowLeft.interactive = true;
		this.arrowRight.interactive = true;
		this.arrowLeft.on("mousedown",$bind(this,this.arrowLeftDown));
		this.arrowLeft.on("mouseup",$bind(this,this.arrowLeftUp));
		this.arrowLeft.on("mouseover",$bind(this,this.arrowLeftOver));
		this.arrowLeft.on("mouseout",$bind(this,this.arrowLeftUp));
		this.arrowLeft.on("click",$bind(this,this.arrowLeftClick));
		this.arrowRight.on("mousedown",$bind(this,this.arrowRightDown));
		this.arrowRight.on("mouseup",$bind(this,this.arrowRightUp));
		this.arrowRight.on("mouseover",$bind(this,this.arrowRightOver));
		this.arrowRight.on("mouseout",$bind(this,this.arrowRightUp));
		this.arrowRight.on("click",$bind(this,this.arrowRightClick));
		this.minButton.x = 470;
		this.minButton.y = 624;
		this.minButton.interactive = true;
		this.stage.addChild(this.minButton);
		this.minButton.on("mouseover",$bind(this,this.minHover));
		this.minButton.on("mouseout",$bind(this,this.minHoverOut));
		this.minButton.on("touchstart",$bind(this,this.min));
		this.minButton.on("click",$bind(this,this.min));
		this.maxButton.x = 797;
		this.maxButton.y = this.minButton.y;
		this.maxButton.interactive = true;
		this.stage.addChild(this.maxButton);
		this.maxButton.on("mouseover",$bind(this,this.maxHover));
		this.maxButton.on("mouseout",$bind(this,this.maxHoverOut));
		this.maxButton.on("click",$bind(this,this.max));
		this.maxButton.on("touchstart",$bind(this,this.max));
		this.tv.beginFill(16737996);
		this.tv.lineStyle(17,0,1);
		this.tv.moveTo(390,100);
		this.tv.lineTo(390,420);
		this.tv.lineTo(923,420);
		this.tv.lineTo(923,100);
		this.tv.lineTo(390,100);
		this.tvAntena1.lineStyle(10,0,1);
		this.tvAntena1.moveTo(600,100);
		this.tvAntena1.quadraticCurveTo(480,20,430,20);
		this.tvAntena2.lineStyle(10,0,1);
		this.tvAntena2.moveTo(700,100);
		this.tvAntena2.quadraticCurveTo(820,20,850,20);
		this.tvAntenaEnd1.lineStyle(0);
		this.tvAntenaEnd1.beginFill(0);
		this.tvAntenaEnd1.drawCircle(850,18,13);
		this.tvAntenaEnd1.endFill();
		this.tvAntenaEnd2.lineStyle(0);
		this.tvAntenaEnd2.beginFill(0);
		this.tvAntenaEnd2.drawCircle(430,18,13);
		this.tvAntenaEnd2.endFill();
		var congrStyle_font = "bold 30px Arial";
		var congrStyle_align = "center";
		var congrStyle_fill = "#A4CC00";
		this.congr.x = 450;
		this.congr.y = 170;
		var winnStyle_font = "bold 12px Arial";
		var winnStyle_align = "center";
		var winnStyle_fill = "#A4CC00";
		this.showWinn.x = 740;
		this.showWinn.y = 13;
		this.stage.addChild(this.winnerCheck2);
	}
	,max: function() {
		this.stake.text = this.creditValue;
	}
	,min: function() {
		this.stake.text = "100";
	}
	,minHover: function() {
		this.minButton.scale.x = 1.1;
		this.minButton.scale.y = 1.1;
		this.minButton.position.x = this.minButton.position.x - 1;
		this.minButton.position.y = this.minButton.position.y - 1;
	}
	,minHoverOut: function() {
		this.minButton.scale.x = 1.0;
		this.minButton.scale.y = 1.0;
		this.minButton.position.x = this.minButton.position.x + 1;
		this.minButton.position.y = this.minButton.position.y + 1;
	}
	,maxHover: function() {
		this.maxButton.scale.x = 1.1;
		this.maxButton.scale.y = 1.1;
		this.maxButton.position.x = this.maxButton.position.x - 1;
		this.maxButton.position.y = this.maxButton.position.y - 1;
	}
	,maxHoverOut: function() {
		this.maxButton.scale.x = 1.0;
		this.maxButton.scale.y = 1.0;
		this.maxButton.position.x = this.maxButton.position.x + 1;
		this.maxButton.position.y = this.maxButton.position.y + 1;
	}
	,volumeOnOFHover: function() {
		this.volumeOnOF.scale.x = 1.1;
		this.volumeOnOF.scale.y = 1.1;
		this.volumeOnOF.position.x = this.volumeOnOF.position.x - 1;
		this.volumeOnOF.position.y = this.volumeOnOF.position.y - 1;
	}
	,volumeOnOFHoverOut: function() {
		this.volumeOnOF.scale.x = 1.0;
		this.volumeOnOF.scale.y = 1.0;
		this.volumeOnOF.position.x = this.volumeOnOF.position.x + 1;
		this.volumeOnOF.position.y = this.volumeOnOF.position.y + 1;
	}
	,arrowRightClick: function() {
		var intStake = Std.parseInt(this.stake.text);
		var intCreditValue = Std.parseInt(this.creditValue);
		if(intStake < intCreditValue) {
			intStake = intStake + 100;
			if(intStake == null) this.stake.text = "null"; else this.stake.text = "" + intStake;
		}
	}
	,arrowLeftClick: function() {
		var intStake = Std.parseInt(this.stake.text);
		if(intStake > 100) this.stake.text = Std.string(intStake - 100);
	}
	,arrowRightDown: function() {
		this.arrowRight.tint = 16711680;
	}
	,arrowRightUp: function() {
		this.arrowRight.tint = 10800128;
	}
	,arrowLeftDown: function() {
		this.arrowLeft.tint = 16711680;
	}
	,arrowLeftUp: function() {
		this.arrowLeft.tint = 10800128;
	}
	,arrowRightOver: function() {
		this.arrowRight.tint = 6129408;
	}
	,arrowLeftOver: function() {
		this.arrowLeft.tint = 6129408;
	}
	,restart: function() {
		this.gameStatus = this.gameStateINIT;
		this.interactive(false);
		this.invested = Std.parseInt(this.stake.text);
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
		this.stage.removeChild(this.tv);
		this.stage.removeChild(this.tvAntena1);
		this.stage.removeChild(this.tvAntena2);
		this.stage.removeChild(this.tvAntenaEnd1);
		this.stage.removeChild(this.tvAntenaEnd2);
		this.stage.removeChild(this.congr);
		this.stage.removeChild(this.showWinn);
		this.stage.addChild(this.imgBody);
		this.isAnimated = true;
	}
	,draw: function() {
		if(this.gameStatus == this.gameStateZERO) this.gameStatus = this.gameStateINIT; else if(this.gameStatus == this.gameStateINIT) this.gameStatus = this.gameStateCHECK_WIN; else if(this.gameStatus == this.gameStateMOVING) {
			var i = 0;
			while(i < this.slotNumber) {
				if(this.finalTileY1[i] > 0) {
					this.slotSprite1[i].tilePosition.y = this.slotSprite1[i].tilePosition.y + this.inc[i];
					this.finalTileY1[i] = this.finalTileY1[i] - this.inc[i];
				}
				if(this.finalTileY2[i] > 0) {
					this.slotSprite2[i].tilePosition.y = this.slotSprite2[i].tilePosition.y + this.inc[i];
					this.finalTileY2[i] = this.finalTileY2[i] - this.inc[i];
				}
				if(this.finalTileY3[i] > 0) {
					this.slotSprite3[i].tilePosition.y = this.slotSprite3[i].tilePosition.y + this.inc[i];
					this.finalTileY3[i] = this.finalTileY3[i] - this.inc[i];
				}
				i++;
			}
			if(this.finalTileY1[0] - 5 <= 0) this.gameStatus = this.gameStateCHECK_WIN;
			if(this.finalTileY2[0] - 5 <= 0) this.gameStatus = this.gameStateCHECK_WIN;
			if(this.finalTileY3[0] - 5 <= 0) this.gameStatus = this.gameStateCHECK_WIN;
		} else if(this.gameStatus == this.gameStateCHECK_WIN) return;
		window.requestAnimationFrame($bind(this,this.draw));
	}
	,startAnimation: function() {
		var _g = this;
		if(this.gameStatus == this.gameStateINIT || this.gameStatus == this.gameStateCHECK_WIN) {
			this.preChoosedPosition1 = [0,2,4,6,1];
			this.preChoosedPosition2 = [0,2,4,6,1];
			this.preChoosedPosition3 = [0,2,4,6,1];
			var i = 0;
			while(i < this.slotNumber) {
				this.preChoosedPosition1[i] = this.getRandomInt(0,6);
				this.preChoosedPosition2[i] = this.getRandomInt(0,6);
				this.preChoosedPosition3[i] = this.getRandomInt(0,6);
				this.slotSprite1[i].tilePosition.y = -this.preChoosedPosition1[i] * this.tileHEIGHT;
				this.slotSprite1[i].tint = 16777215;
				this.finalTileY1[i] = this.nCycly * this.tileHEIGHT * this.tTiles;
				this.slotSprite2[i].tilePosition.y = -this.preChoosedPosition2[i] * this.tileHEIGHT;
				this.slotSprite2[i].tint = 16777215;
				this.finalTileY2[i] = this.nCycly * this.tileHEIGHT * this.tTiles;
				this.slotSprite3[i].tilePosition.y = -this.preChoosedPosition3[i] * this.tileHEIGHT;
				this.slotSprite3[i].tint = 16777215;
				this.finalTileY3[i] = this.nCycly * this.tileHEIGHT * this.tTiles;
				i++;
			}
			this.gameStatus = this.gameStateMOVING;
			if(this.preChoosedPosition3[i] != this.preChoosedPosition3[i - 1]) {
				var union = this.preChoosedPosition1.concat(this.preChoosedPosition2);
				var store = union.concat(this.preChoosedPosition3);
				var x = 0;
				var can0 = 0;
				var can1 = 0;
				var can2 = 0;
				var can3 = 0;
				var can4 = 0;
				var can5 = 0;
				var can6 = 0;
				while(x < 15) {
					var _g1 = store[x];
					switch(_g1) {
					case 0:
						can0++;
						break;
					case 1:
						can1++;
						break;
					case 2:
						can2++;
						break;
					case 3:
						can3++;
						break;
					case 4:
						can4++;
						break;
					case 5:
						can5++;
						break;
					case 6:
						can6++;
						break;
					}
					x++;
				}
				var result = [can0,can1,can2,can3,can4,can5,can6];
				var result2 = [can0,can1,can2,can3,can4,can5,can6];
				this.draw();
				window.setTimeout(function() {
					if(_g.sortThisBaby(result2)) {
						var _g11 = _g.indexOfMax(result);
						switch(_g11) {
						case 0:
							_g.winnerCandidateImg.texture = _g.textureVucicFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 0) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(0);
								_g.textUpadete(custom_Config.vucicMessage,443,45);
								_g.playSound(_g.soundVucic,_g.mute);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 1:
							_g.winnerCandidateImg.texture = _g.textureDacicFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 1) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(1);
								_g.textUpadete(custom_Config.dacicMessage,483,45);
								_g.playSound(_g.soundDacic,_g.mute);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 2:
							_g.winnerCandidateImg.texture = _g.textureTomaFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 2) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(2);
								_g.textUpadete(custom_Config.tomaMessage,432,45);
								_g.canvasLine();
								_g.calcDefeat();
								_g.playSound(_g.soundToma,_g.mute);
							}
							break;
						case 3:
							_g.winnerCandidateImg.texture = _g.textureTadicFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 3) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(3);
								_g.textUpadete(custom_Config.tadicMessage,470,45);
								_g.canvasLine();
								_g.calcDefeat();
								_g.playSound(_g.soundTadic,_g.mute);
							}
							break;
						case 4:
							_g.winnerCandidateImg.texture = _g.textureCedaFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 4) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(4);
								_g.textUpadete(custom_Config.cedaMessage,469,45);
								_g.canvasLine();
								_g.calcDefeat();
								_g.playSound(_g.soundCeda,_g.mute);
							}
							break;
						case 5:
							_g.winnerCandidateImg.texture = _g.textureCanakFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 5) {
								_g.textUpadete(custom_Config.winnerMessage,635,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(5);
								_g.textUpadete(custom_Config.canakMessage,363,45);
								_g.canvasLine();
								_g.calcDefeat();
								_g.playSound(_g.soundCanak,_g.mute);
							}
							break;
						case 6:
							_g.winnerCandidateImg.texture = _g.textureSeseljFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 6) {
								_g.textUpadete(custom_Config.winnerMessage,625,45,custom_Config.winnerColor);
								_g.playSound(_g.soundWin,_g.mute);
								_g.canvasWinerLine();
								_g.calcWin();
								_g.onWinAmin();
							} else {
								_g.hightlight(6);
								_g.textUpadete(custom_Config.seseljMessage,388,45);
								_g.canvasLine();
								_g.calcDefeat();
								_g.playSound(_g.soundSeselj,_g.mute);
							}
							break;
						default:
						}
					} else {
						_g.restart();
						_g.startAnimation();
						_g.textUpadete(custom_Config.equalMessage,500,45);
					}
				},2800);
			}
		}
	}
	,playSound: function(obj,mute) {
		obj.mute = mute;
		obj.play();
	}
	,onLoaded: function() {
		this.soundWin = this.loader.getAudio("win");
		this.soundVucic = this.loader.getAudio("vucic");
		this.soundDacic = this.loader.getAudio("dacic");
		this.soundToma = this.loader.getAudio("toma");
		this.soundTadic = this.loader.getAudio("tadic");
		this.soundCeda = this.loader.getAudio("ceda");
		this.soundCanak = this.loader.getAudio("canak");
		this.soundSeselj = this.loader.getAudio("seselj");
	}
	,onButtonDown: function() {
		this.imgButton.texture = PIXI.Texture.fromImage(custom_Config.imgButtonDown);
	}
	,onButtonUp: function() {
		this.imgButton.texture = PIXI.Texture.fromImage(custom_Config.imgButton);
	}
	,onButtonOver: function() {
		this.imgButton.texture = PIXI.Texture.fromImage(custom_Config.imgButtonHover);
	}
	,volumeClick: function() {
		if(this.mute) {
			this.volumeOnOF.text = "Isključi zvuk";
			this.mute = false;
		} else {
			this.volumeOnOF.text = "Uključi zvuk";
			this.mute = true;
		}
		return this.mute;
	}
	,onVucicOver: function() {
		this.selectVucic.texture = PIXI.Texture.fromImage(custom_Config.selectVucic);
	}
	,onVucicOut: function() {
		this.selectVucic.texture = PIXI.Texture.fromImage(custom_Config.selectVucicFrame);
	}
	,onDacicOver: function() {
		this.selectDacic.texture = PIXI.Texture.fromImage(custom_Config.selectDacic);
	}
	,onDacicOut: function() {
		this.selectDacic.texture = PIXI.Texture.fromImage(custom_Config.selectDacicFrame);
	}
	,onTomaOver: function() {
		this.selectToma.texture = PIXI.Texture.fromImage(custom_Config.selectToma);
	}
	,onTomaOut: function() {
		this.selectToma.texture = PIXI.Texture.fromImage(custom_Config.selectTomaFrame);
	}
	,onTadicOver: function() {
		this.selectTadic.texture = PIXI.Texture.fromImage(custom_Config.selectTadic);
	}
	,onTadicOut: function() {
		this.selectTadic.texture = PIXI.Texture.fromImage(custom_Config.selectTadicFrame);
	}
	,onCedaOver: function() {
		this.selectCeda.texture = PIXI.Texture.fromImage(custom_Config.selectCeda);
	}
	,onCedaOut: function() {
		this.selectCeda.texture = PIXI.Texture.fromImage(custom_Config.selectCedaFrame);
	}
	,onCanakOver: function() {
		this.selectCanak.texture = PIXI.Texture.fromImage(custom_Config.selectCanak);
	}
	,onCanakOut: function() {
		this.selectCanak.texture = PIXI.Texture.fromImage(custom_Config.selectCanakFrame);
	}
	,onSeseljOver: function() {
		this.selectSeselj.texture = PIXI.Texture.fromImage(custom_Config.selectSeselj);
	}
	,onSeseljOut: function() {
		this.selectSeselj.texture = PIXI.Texture.fromImage(custom_Config.selectSeseljFrame);
	}
	,addVucic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectVucicFrame);
		this.yourCandidate = 0;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addDacic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectDacicFrame);
		this.yourCandidate = 1;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addToma: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectTomaFrame);
		this.yourCandidate = 2;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addTadic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectTadicFrame);
		this.yourCandidate = 3;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addCeda: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectCedaFrame);
		this.yourCandidate = 4;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addCanak: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectCanakFrame);
		this.yourCandidate = 5;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addSeselj: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage(custom_Config.selectSeseljFrame);
		this.yourCandidate = 6;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,hightlight: function(value) {
		var x = 0;
		while(x < 6) {
			if(this.preChoosedPosition1[x] == value) this.slotSprite1[x].tint = 99964444;
			if(this.preChoosedPosition2[x] == value) this.slotSprite2[x].tint = 99964444;
			if(this.preChoosedPosition3[x] == value) this.slotSprite3[x].tint = 99964444;
			x++;
		}
	}
	,interactive: function(x) {
		this.selectVucic.interactive = x;
		this.selectDacic.interactive = x;
		this.selectToma.interactive = x;
		this.selectTadic.interactive = x;
		this.selectCeda.interactive = x;
		this.selectCanak.interactive = x;
		this.selectSeselj.interactive = x;
		this.imgButton.interactive = x;
		this.arrowLeft.interactive = x;
		this.arrowRight.interactive = x;
		this.maxButton.interactive = x;
		this.minButton.interactive = x;
	}
	,calcWin: function() {
		var intCreditValue = Std.parseInt(this.creditValue);
		if(this.invested > intCreditValue) {
			this.stake.text = Std.string(this.creditValue);
			this.invested = intCreditValue;
		}
		var winValue = this.invested * custom_Config.winMultiplication;
		this.creditValue = Std.string(intCreditValue + winValue);
		this.creditValueShow.text = this.creditValue;
		this.showWinn.text = "+" + winValue;
		this.showWinn.style.fill = "#A4CC00";
		this.stage.addChild(this.showWinn);
		this.renderer.render(this.stage);
	}
	,calcDefeat: function() {
		var intCreditValue = Std.parseInt(this.creditValue);
		var newCreditValue = intCreditValue - this.invested;
		if(newCreditValue == null) this.creditValue = "null"; else this.creditValue = "" + newCreditValue;
		this.creditValueShow.text = this.creditValue;
		if(this.invested > newCreditValue) this.stake.text = this.creditValue;
		if(newCreditValue == 0 || newCreditValue < 0) {
			if(window.confirm("Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?")) window.location.href = "index.html"; else window.location.href = "assets/zeljko.stojakovic.cv.pdf";
		}
		var stringInvestd = Std.string(this.invested);
		this.showWinn.text = "-" + stringInvestd;
		this.showWinn.style.fill = "#ff0000";
		this.stage.addChild(this.showWinn);
		this.renderer.render(this.stage);
	}
	,canvasLine: function() {
		this.line1.lineStyle(20,16711680);
		this.line1.moveTo(50,150);
		this.line1.lineTo(300,400);
		this.stage.addChild(this.line1);
		this.line2.lineStyle(20,16711680);
		this.line2.moveTo(300,150);
		this.line2.lineTo(50,400);
		this.stage.addChild(this.line2);
		this.renderer.render(this.stage);
	}
	,canvasWinerLine: function() {
		this.winnerCheck.lineStyle(17,10800128,1);
		this.winnerCheck.moveTo(250,180);
		this.winnerCheck.lineTo(170,350);
		this.winnerCheck.lineTo(110,290);
		this.stage.addChild(this.winnerCheck);
		this.winnerCheck2.lineStyle(17,10800128,1);
		this.winnerCheck2.moveTo(1200,180);
		this.winnerCheck2.lineTo(1120,350);
		this.winnerCheck2.lineTo(1070,290);
		this.stage.addChild(this.winnerCheck2);
		this.stage.addChild(this.tvAntena1);
		this.stage.addChild(this.tvAntena2);
		this.stage.addChild(this.tvAntenaEnd1);
		this.stage.addChild(this.tvAntenaEnd2);
		this.stage.addChild(this.tv);
		this.stage.addChild(this.congr);
		this.stage.removeChild(this.imgBody);
		this.renderer.render(this.stage);
	}
	,textUpadete: function(value,x,y,color) {
		if(color == null) color = "#ff0000";
		this.message.text = value;
		this.message.x = x;
		this.message.y = y;
		this.message.style.fill = color;
	}
	,getRandomInt: function(min,max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	,sortThisBaby: function(arr) {
		arr.sort(function(a,b) {
			return b - a;
		});
		if(arr[0] != arr[1]) return true; else return false;
	}
	,indexOfMax: function(arr) {
		if(arr.length == 0) return -1;
		var max = arr[0];
		var maxIndex = 0;
		var i = 1;
		while(i < arr.length) {
			if(arr[i] > max) {
				maxIndex = i;
				max = arr[i];
			}
			i++;
		}
		return maxIndex;
	}
	,onWinAmin: function() {
		var _g = this;
		if(this.isAnimated) {
			var wabbitTexture = PIXI.Texture.fromImage("assets/images/dolar2.png");
			var count = this.startDolarCount;
			var container = new PIXI.Container();
			this.stage.addChild(container);
			var money1 = new PIXI.Texture(wabbitTexture.baseTexture);
			var money2 = new PIXI.Texture(wabbitTexture.baseTexture);
			var money3 = new PIXI.Texture(wabbitTexture.baseTexture);
			var money4 = new PIXI.Texture(wabbitTexture.baseTexture);
			var money5 = new PIXI.Texture(wabbitTexture.baseTexture);
			var moneyTextures = [money1,money2,money3,money4,money5];
			var moneyType = 3;
			var currentTexture = moneyTextures[moneyType];
			var i = 0;
			var money = new custom_Money(currentTexture);
			while(this.startDolarCount > i) {
				money.speedX = Math.random() * 10;
				money.speedY = Math.random() * 10 - 5;
				money.anchor.x = 0.5;
				money.anchor.y = 1;
				this.dolar.push(money);
				i++;
				container.addChild(money);
			}
			if(count < 3) {
				var i1 = 0;
				var money6 = new custom_Money(currentTexture);
				while(i1 < this.amount) {
					money6.speedX = Math.random() * 10;
					money6.speedY = Math.random() * 10 - 5;
					money6.anchor.y = 1;
					this.dolar.push(money6);
					money6.scale.set(0.5 + Math.random() * 0.5);
					money6.rotation = Math.random() - 0.5;
					var random = Math.floor(Math.random() * container.children.length - 2);
					container.addChild(money6);
					count++;
					i1++;
				}
			}
			var _g1 = 0;
			var _g2 = this.dolar.length;
			while(_g1 < _g2) {
				var i2 = _g1++;
				var money7 = this.dolar[i2];
				money7.position.x += money7.speedX;
				money7.position.y += money7.speedY;
				money7.speedY += this.gravity;
				if(money7.position.x > this.maxX) {
					money7.speedX *= -1;
					money7.position.x = this.maxX;
				} else if(money7.position.x < this.minX) {
					money7.speedX *= -1;
					money7.position.x = this.minX;
				}
				if(money7.position.y > this.maxY) {
					money7.speedY *= -0.85;
					money7.position.y = this.maxY;
					if(Math.random() > 0.5) money7.speedY -= Math.random() * 6;
				} else if(money7.position.y < this.minY) {
					money7.speedY = 0;
					money7.position.y = this.minY;
				}
			}
			if(this.isAnimated) window.requestAnimationFrame($bind(this,this.onWinAmin));
			window.setTimeout(function() {
				container.removeChild(money);
				_g.stage.removeChild(container);
				_g.isAnimated = false;
			},1000);
		}
	}
});
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var core_AssetLoader = function() {
	PIXI.loaders.Loader.call(this);
	this.count = 0;
	this.pixelRatio = 1;
	this._audioAssets = new haxe_ds_StringMap();
	core_MultipackParser.loader = this;
	this["use"](core_MultipackParser.parse);
};
core_AssetLoader.__name__ = true;
core_AssetLoader.__super__ = PIXI.loaders.Loader;
core_AssetLoader.prototype = $extend(PIXI.loaders.Loader.prototype,{
	start: function(onComplete,onProgress) {
		this.load(onComplete);
		if(this.progress != null) this.on("progress",onProgress);
	}
	,addAsset: function(id,path,usePixelRatio,onAssetLoaded) {
		if(usePixelRatio == null) usePixelRatio = true;
		if(!(Reflect.field(this.resources,id) != null)) {
			var url = path;
			if(url != "") {
				this.add(id,url,{ loadType : this._getLoadtype(path)},onAssetLoaded);
				this.count++;
			}
		}
	}
	,getAudio: function(id) {
		if(this._audioAssets.get(id) == null) {
			var value = new core_AudioAsset(Reflect.field(this.resources,id).data);
			this._audioAssets.set(id,value);
		}
		return this._audioAssets.get(id);
	}
	,_getLoadtype: function(asset) {
		if(new EReg("(.png|.gif|.svg|.jpg|.jpeg|.bmp)","i").match(asset)) return 2; else if(new EReg("(.mp3|.wav|.ogg|.aac|.m4a|.oga|.webma)","i").match(asset)) return 3; else if(new EReg("(.mp4|.webm|.m3u8)","i").match(asset)) return 4;
		return 1;
	}
});
var core_AudioAsset = function(src) {
	this._src = src;
	this.mute = false;
	this.set_loop(false);
};
core_AudioAsset.__name__ = true;
core_AudioAsset.prototype = {
	play: function() {
		if(!this.mute) this._src.play();
	}
	,set_loop: function(val) {
		this._src.loop = val;
		return this.loop = val;
	}
};
var core_MultipackParser = function() { };
core_MultipackParser.__name__ = true;
core_MultipackParser.parse = function(resource,next) {
	var data = resource.data;
	if(data != null && data.multipack) {
		var textures = data.textures;
		var imgCount = textures.length;
		var imgLoadedCount = 0;
		var resolution = PIXI.utils.getResolutionOfUrl(resource.url);
		var baseURL = resource.url.split(core_MultipackParser.loader.baseUrl)[1];
		baseURL = baseURL.substring(0,baseURL.lastIndexOf("/") + 1);
		var _g = 0;
		while(_g < textures.length) {
			var texture = [textures[_g]];
			++_g;
			var url = baseURL + texture[0].meta.image;
			core_MultipackParser.loader.add(texture[0].meta.image,url,{ loadType : 2, crossOrigin : resource.crossOrigin},(function(texture) {
				return function(image) {
					var frames = texture[0].frames;
					var _g1 = 0;
					var _g2 = Reflect.fields(frames);
					while(_g1 < _g2.length) {
						var n = _g2[_g1];
						++_g1;
						var frameData = Reflect.field(frames,n);
						var rect = frameData.frame;
						if(rect != null) {
							var size = new PIXI.Rectangle(rect.x,rect.y,rect.w,rect.h);
							var trim = null;
							if(frameData.trimmed) {
								var actualSize = frameData.sourceSize;
								var realSize = frameData.spriteSourceSize;
								trim = new PIXI.Rectangle(realSize.x / resolution,realSize.y / resolution,actualSize.w / resolution,actualSize.h / resolution);
							}
							size.x /= resolution;
							size.y /= resolution;
							size.width /= resolution;
							size.height /= resolution;
							PIXI.Texture.addTextureToCache(new PIXI.Texture(image.texture.baseTexture,size,size.clone(),trim),n);
						}
					}
				};
			})(texture));
		}
		next();
	} else next();
};
var custom_Config = function() { };
custom_Config.__name__ = true;
var custom_Money = function(texture) {
	PIXI.Sprite.call(this,texture);
};
custom_Money.__name__ = true;
custom_Money.__super__ = PIXI.Sprite;
custom_Money.prototype = $extend(PIXI.Sprite.prototype,{
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {}
custom_Config.winMultiplication = 5;
custom_Config.equalMessage = "Pokradene glasačke kutije, izbori se ponavlaju";
custom_Config.winnerMessage = "Pobeda";
custom_Config.welcomeMessage = "Dobrodošli";
custom_Config.vucicMessage = "Tisina tamo, živećeš bolje 2046ste ako ne gubiš pare kao sad!";
custom_Config.dacicMessage = "Ko bi reko čuda da se dese da Miljacka pare ti odnese";
custom_Config.tomaMessage = "Doći će žuti ljudi da piju vodu sa Morave i odneće ti uložene pare";
custom_Config.tadicMessage = "Tri sekunde u reketu ministre molim te, odoše pare";
custom_Config.cedaMessage = "Nemojte da plačete gospođo,samo ste prokockali novac";
custom_Config.canakMessage = "Veliki brate oćeš da ti Jelena i ja odpevamo neku pesmu? Lakše ćeš preboleti novce";
custom_Config.seseljMessage = "Vi pripadnici Haškog tribunala možete samo da prihvatite da ste izgibili pare";
custom_Config.imgSlot = "assets/images/slot3.png";
custom_Config.imgBody = "assets/images/frame.png";
custom_Config.imgButton = "assets/images/start.png";
custom_Config.imgButtonDown = "assets/images/start-down.png";
custom_Config.imgButtonHover = "assets/images/start-hover.png";
custom_Config.selectVucic = "assets/images/vucic.jpg";
custom_Config.selectDacic = "assets/images/dacic.jpg";
custom_Config.selectToma = "assets/images/toma.jpg";
custom_Config.selectTadic = "assets/images/tadic.jpg";
custom_Config.selectCeda = "assets/images/ceda.jpg";
custom_Config.selectCanak = "assets/images/canak.jpg";
custom_Config.selectSeselj = "assets/images/seselj.jpg";
custom_Config.selectVucicFrame = "assets/images/vucic-ram.png";
custom_Config.selectDacicFrame = "assets/images/dacic-ram.png";
custom_Config.selectTomaFrame = "assets/images/toma-ram.png";
custom_Config.selectTadicFrame = "assets/images/tadic-ram.png";
custom_Config.selectCedaFrame = "assets/images/ceda-ram.png";
custom_Config.selectCanakFrame = "assets/images/canak-ram.png";
custom_Config.selectSeseljFrame = "assets/images/seselj-ram.png";
custom_Config.winnerColor = "#A4CC00";
custom_Config.creditValue = "5000";
custom_Config.winnerMessage2 = "Prekidamo politički program\n zbog ekskluzivnih  vesti!\n Nepoznati kladioničar\n osvojio brdo keša!";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=main.js.map