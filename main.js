(function (console, $hx_exports) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
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
	this.width = window.innerWidth;
	this.height = window.innerHeight;
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
		if(window.Perf != null) new Perf().addInfo(["UNKNOWN","WEBGL","CANVAS"][this.renderer.type] + " - " + this.pixelRatio);
	}
};
var Main = function() {
	this.test = 0;
	this.showWinn = new PIXI.Text("0",{ font : "bold 12px Arial", align : "center", fill : "#A4CC00"});
	this.congr = new PIXI.Text("Prekidamo politički program\n zbog ekskluzivnih  vesti!\n Nepoznati kladioničar\n osvojio brdo keša!",{ font : "bold 30px Arial", align : "center", fill : "#A4CC00"});
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
	this.message = new PIXI.Text("dobrodošli",{ font : "bold 15px Arial", fill : "#ff0000", align : "center"});
	this.volumeOnOF = new PIXI.Text("Isključi zvuk",{ font : "20px Arial", fill : "#ff0000", align : "center"});
	this.arrowLeft = new PIXI.Graphics();
	this.arrowRight = new PIXI.Graphics();
	this.winnerCheck2 = new PIXI.Graphics();
	this.winnerCheck = new PIXI.Graphics();
	this.line2 = new PIXI.Graphics();
	this.line1 = new PIXI.Graphics();
	this.imgBody = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/ram2.png"));
	this.imgButton = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/start.png"));
	this.yourCandidateImg = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/vucic-ram.png"));
	this.selectSeselj = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/seselj-ram.png"));
	this.selectCanak = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/canak-ram.png"));
	this.selectCeda = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/ceda-ram.png"));
	this.selectTadic = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/tadic-ram.png"));
	this.selectToma = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/toma-ram.png"));
	this.selectDacic = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/dacic-ram.png"));
	this.selectVucic = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/vucic-ram.png"));
	this.winnerCandidateImg = new PIXI.Sprite(PIXI.Texture.fromImage("assets/images/vucic-ram.png"));
	this.textureSeseljFrame = PIXI.Texture.fromImage("assets/images/seselj-ram.png");
	this.textureCanakFrame = PIXI.Texture.fromImage("assets/images/canak-ram.png");
	this.textureCedaFrame = PIXI.Texture.fromImage("assets/images/ceda-ram.png");
	this.textureTadicFrame = PIXI.Texture.fromImage("assets/images/tadic-ram.png");
	this.textureTomaFrame = PIXI.Texture.fromImage("assets/images/toma-ram.png");
	this.textureDacicFrame = PIXI.Texture.fromImage("assets/images/dacic-ram.png");
	this.textureVucicFrame = PIXI.Texture.fromImage("assets/images/vucic-ram.png");
	this.imgSlot = "assets/images/slot3.png";
	this.inc = [25,35,50,70,100];
	this.i = 0;
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
	this.creditValue = "5000";
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
		var texture1 = PIXI.Texture.fromImage("assets/images/ram2.png");
		var texture2 = PIXI.Texture.fromImage("assets/images/start.png");
		var texture4 = PIXI.Texture.fromImage("assets/images/start-down.png");
		var texture5 = PIXI.Texture.fromImage("assets/images/start-hover.png");
		var textureVucic = PIXI.Texture.fromImage("assets/images/vucic.jpg");
		var textureDacic = PIXI.Texture.fromImage("assets/images/dacic.jpg");
		var textureToma = PIXI.Texture.fromImage("assets/images/toma.jpg");
		var textureTadic = PIXI.Texture.fromImage("assets/images/tadic.jpg");
		var textureCeda = PIXI.Texture.fromImage("assets/images/ceda.jpg");
		var textureCanak = PIXI.Texture.fromImage("assets/images/canak.jpg");
		var textureSeselj = PIXI.Texture.fromImage("assets/images/seselj.jpg");
		var texture3 = PIXI.Texture.fromImage(this.imgSlot);
		var creditStyle = { font : "bold 18px Arial"};
		var volumeStyle_font = "20px Arial";
		var volumeStyle_fill = "#ff0000";
		var volumeStyle_align = "center";
		this.selectVucic.height = this.selectCandidateHight;
		this.selectVucic.width = this.selectCandidateWidth;
		this.selectVucic.y = this.selectCandidateInitalY;
		this.selectVucic.x = this.selectCandidateInitalX;
		this.stage.addChild(this.selectVucic);
		this.selectVucic.interactive = true;
		this.selectVucic.on("mouseover",$bind(this,this.onVucicOver));
		this.selectVucic.on("mouseout",$bind(this,this.onVucicOut));
		this.selectVucic.on("click",$bind(this,this.addVucic));
		this.selectDacic.height = this.selectCandidateHight;
		this.selectDacic.width = this.selectCandidateWidth;
		this.selectDacic.y = this.selectCandidateInitalY;
		this.selectDacic.x = this.selectCandidateInitalX + 80;
		this.stage.addChild(this.selectDacic);
		this.selectDacic.interactive = true;
		this.selectDacic.on("mouseover",$bind(this,this.onDacicOver));
		this.selectDacic.on("mouseout",$bind(this,this.onDacicOut));
		this.selectDacic.on("click",$bind(this,this.addDacic));
		this.selectToma.height = this.selectCandidateHight;
		this.selectToma.width = this.selectCandidateWidth;
		this.selectToma.y = this.selectCandidateInitalY;
		this.selectToma.x = this.selectCandidateInitalX + 160;
		this.stage.addChild(this.selectToma);
		this.selectToma.interactive = true;
		this.selectToma.on("mouseover",$bind(this,this.onTomaOver));
		this.selectToma.on("mouseout",$bind(this,this.onTomaOut));
		this.selectToma.on("click",$bind(this,this.addToma));
		this.selectTadic.height = this.selectCandidateHight;
		this.selectTadic.width = this.selectCandidateWidth;
		this.selectTadic.y = this.selectCandidateInitalY;
		this.selectTadic.x = this.selectCandidateInitalX + 240;
		this.stage.addChild(this.selectTadic);
		this.selectTadic.interactive = true;
		this.selectTadic.on("mouseover",$bind(this,this.onTadicOver));
		this.selectTadic.on("mouseout",$bind(this,this.onTadicOut));
		this.selectTadic.on("click",$bind(this,this.addTadic));
		this.selectCeda.height = this.selectCandidateHight;
		this.selectCeda.width = this.selectCandidateWidth;
		this.selectCeda.y = this.selectCandidateInitalY;
		this.selectCeda.x = this.selectCandidateInitalX + 320;
		this.stage.addChild(this.selectCeda);
		this.selectCeda.interactive = true;
		this.selectCeda.on("mouseover",$bind(this,this.onCedaOver));
		this.selectCeda.on("mouseout",$bind(this,this.onCedaOut));
		this.selectCeda.on("click",$bind(this,this.addCeda));
		this.selectCanak.height = this.selectCandidateHight;
		this.selectCanak.width = this.selectCandidateWidth;
		this.selectCanak.y = this.selectCandidateInitalY;
		this.selectCanak.x = this.selectCandidateInitalX + 400;
		this.stage.addChild(this.selectCanak);
		this.selectCanak.interactive = true;
		this.selectCanak.on("mouseover",$bind(this,this.onCanakOver));
		this.selectCanak.on("mouseout",$bind(this,this.onCanakOut));
		this.selectCanak.on("click",$bind(this,this.addCanak));
		this.selectSeselj.height = this.selectCandidateHight;
		this.selectSeselj.width = this.selectCandidateWidth;
		this.selectSeselj.y = this.selectCandidateInitalY;
		this.selectSeselj.x = this.selectCandidateInitalX + 480;
		this.stage.addChild(this.selectSeselj);
		this.selectSeselj.interactive = true;
		this.selectSeselj.on("mouseover",$bind(this,this.onSeseljOver));
		this.selectSeselj.on("mouseout",$bind(this,this.onSeseljOut));
		this.selectSeselj.on("click",$bind(this,this.addSeselj));
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
		this.imgButton.on("mousedown",$bind(this,this.call));
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
		var stakeValue = "100";
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
		this.test = 0;
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
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(0);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 1:
							_g.winnerCandidateImg.texture = _g.textureDacicFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 1) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(1);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 2:
							_g.winnerCandidateImg.texture = _g.textureTomaFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 2) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(2);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 3:
							_g.winnerCandidateImg.texture = _g.textureTadicFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 3) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(3);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 4:
							_g.winnerCandidateImg.texture = _g.textureCedaFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 4) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(4);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 5:
							_g.winnerCandidateImg.texture = _g.textureCanakFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 5) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(5);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						case 6:
							_g.winnerCandidateImg.texture = _g.textureSeseljFrame;
							_g.interactive(true);
							if(_g.yourCandidate == 6) {
								_g.canvasWinerLine();
								_g.calcWin();
							} else {
								_g.hightlight(6);
								_g.canvasLine();
								_g.calcDefeat();
							}
							break;
						default:
						}
					} else {
						_g.restart();
						_g.startAnimation();
					}
				},2800);
			}
		}
	}
	,call: function() {
		this.startAnimation();
	}
	,onVucicOver: function() {
		this.selectVucic.texture = PIXI.Texture.fromImage("assets/images/vucic.jpg");
	}
	,onVucicOut: function() {
		this.selectVucic.texture = PIXI.Texture.fromImage("assets/images/vucic-ram.png");
	}
	,onDacicOver: function() {
		this.selectDacic.texture = PIXI.Texture.fromImage("assets/images/dacic.jpg");
	}
	,onDacicOut: function() {
		this.selectDacic.texture = PIXI.Texture.fromImage("assets/images/dacic-ram.png");
	}
	,onTomaOver: function() {
		this.selectToma.texture = PIXI.Texture.fromImage("assets/images/toma.jpg");
	}
	,onTomaOut: function() {
		this.selectToma.texture = PIXI.Texture.fromImage("assets/images/toma-ram.png");
	}
	,onTadicOver: function() {
		this.selectTadic.texture = PIXI.Texture.fromImage("assets/images/tadic.jpg");
	}
	,onTadicOut: function() {
		this.selectTadic.texture = PIXI.Texture.fromImage("assets/images/tadic-ram.png");
	}
	,onCedaOver: function() {
		this.selectCeda.texture = PIXI.Texture.fromImage("assets/images/ceda.jpg");
	}
	,onCedaOut: function() {
		this.selectCeda.texture = PIXI.Texture.fromImage("assets/images/ceda-ram.png");
	}
	,onCanakOver: function() {
		this.selectCanak.texture = PIXI.Texture.fromImage("assets/images/canak.jpg");
	}
	,onCanakOut: function() {
		this.selectCanak.texture = PIXI.Texture.fromImage("assets/images/canak-ram.png");
	}
	,onSeseljOver: function() {
		this.selectSeselj.texture = PIXI.Texture.fromImage("assets/images/seselj.jpg");
	}
	,onSeseljOut: function() {
		this.selectSeselj.texture = PIXI.Texture.fromImage("assets/images/seselj-ram.png");
	}
	,addVucic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/vucic-ram.png");
		this.yourCandidate = 0;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addDacic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/dacic-ram.png");
		this.yourCandidate = 1;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addToma: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/toma-ram.png");
		this.yourCandidate = 2;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addTadic: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/tadic-ram.png");
		this.yourCandidate = 3;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addCeda: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/ceda-ram.png");
		this.yourCandidate = 4;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addCanak: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/canak-ram.png");
		this.yourCandidate = 5;
		this.stage.removeChild(this.line1);
		this.stage.removeChild(this.line2);
		this.stage.removeChild(this.winnerCheck);
		this.stage.removeChild(this.winnerCheck2);
	}
	,addSeselj: function() {
		this.yourCandidateImg.texture = PIXI.Texture.fromImage("assets/images/seselj-ram.png");
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
		var winValue = this.invested * 5;
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
});
Math.__name__ = true;
var Perf = $hx_exports.Perf = function(pos,offset) {
	if(offset == null) offset = 0;
	if(pos == null) pos = "TR";
	this._perfObj = window.performance;
	if(Reflect.field(this._perfObj,"memory") != null) this._memoryObj = Reflect.field(this._perfObj,"memory");
	this._memCheck = this._perfObj != null && this._memoryObj != null && this._memoryObj.totalJSHeapSize > 0;
	this._pos = pos;
	this._offset = offset;
	this.currentFps = 60;
	this.currentMs = 0;
	this.currentMem = "0";
	this.lowFps = 60;
	this.avgFps = 60;
	this._measureCount = 0;
	this._totalFps = 0;
	this._time = 0;
	this._ticks = 0;
	this._fpsMin = 60;
	this._fpsMax = 60;
	if(this._perfObj != null && ($_=this._perfObj,$bind($_,$_.now)) != null) this._startTime = this._perfObj.now(); else this._startTime = new Date().getTime();
	this._prevTime = -Perf.MEASUREMENT_INTERVAL;
	this._createFpsDom();
	this._createMsDom();
	if(this._memCheck) this._createMemoryDom();
	if(($_=window,$bind($_,$_.requestAnimationFrame)) != null) this.RAF = ($_=window,$bind($_,$_.requestAnimationFrame)); else if(window.mozRequestAnimationFrame != null) this.RAF = window.mozRequestAnimationFrame; else if(window.webkitRequestAnimationFrame != null) this.RAF = window.webkitRequestAnimationFrame; else if(window.msRequestAnimationFrame != null) this.RAF = window.msRequestAnimationFrame;
	if(($_=window,$bind($_,$_.cancelAnimationFrame)) != null) this.CAF = ($_=window,$bind($_,$_.cancelAnimationFrame)); else if(window.mozCancelAnimationFrame != null) this.CAF = window.mozCancelAnimationFrame; else if(window.webkitCancelAnimationFrame != null) this.CAF = window.webkitCancelAnimationFrame; else if(window.msCancelAnimationFrame != null) this.CAF = window.msCancelAnimationFrame;
	if(this.RAF != null) this._raf = Reflect.callMethod(window,this.RAF,[$bind(this,this._tick)]);
};
Perf.__name__ = true;
Perf.prototype = {
	_tick: function(val) {
		var time;
		if(this._perfObj != null && ($_=this._perfObj,$bind($_,$_.now)) != null) time = this._perfObj.now(); else time = new Date().getTime();
		this._ticks++;
		if(this._raf != null && time > this._prevTime + Perf.MEASUREMENT_INTERVAL) {
			this.currentMs = Math.round(time - this._startTime);
			this.ms.innerHTML = "MS: " + this.currentMs;
			this.currentFps = Math.round(this._ticks * 1000 / (time - this._prevTime));
			if(this.currentFps > 0 && val > Perf.DELAY_TIME) {
				this._measureCount++;
				this._totalFps += this.currentFps;
				this.lowFps = this._fpsMin = Math.min(this._fpsMin,this.currentFps);
				this._fpsMax = Math.max(this._fpsMax,this.currentFps);
				this.avgFps = Math.round(this._totalFps / this._measureCount);
			}
			this.fps.innerHTML = "FPS: " + this.currentFps + " (" + this._fpsMin + "-" + this._fpsMax + ")";
			if(this.currentFps >= 30) this.fps.style.backgroundColor = Perf.FPS_BG_CLR; else if(this.currentFps >= 15) this.fps.style.backgroundColor = Perf.FPS_WARN_BG_CLR; else this.fps.style.backgroundColor = Perf.FPS_PROB_BG_CLR;
			this._prevTime = time;
			this._ticks = 0;
			if(this._memCheck) {
				this.currentMem = this._getFormattedSize(this._memoryObj.usedJSHeapSize,2);
				this.memory.innerHTML = "MEM: " + this.currentMem;
			}
		}
		this._startTime = time;
		if(this._raf != null) this._raf = Reflect.callMethod(window,this.RAF,[$bind(this,this._tick)]);
	}
	,_createDiv: function(id,top) {
		if(top == null) top = 0;
		var div;
		var _this = window.document;
		div = _this.createElement("div");
		div.id = id;
		div.className = id;
		div.style.position = "absolute";
		var _g = this._pos;
		switch(_g) {
		case "TL":
			div.style.left = this._offset + "px";
			div.style.top = top + "px";
			break;
		case "TR":
			div.style.right = this._offset + "px";
			div.style.top = top + "px";
			break;
		case "BL":
			div.style.left = this._offset + "px";
			div.style.bottom = (this._memCheck?48:32) - top + "px";
			break;
		case "BR":
			div.style.right = this._offset + "px";
			div.style.bottom = (this._memCheck?48:32) - top + "px";
			break;
		}
		div.style.width = "80px";
		div.style.height = "12px";
		div.style.lineHeight = "12px";
		div.style.padding = "2px";
		div.style.fontFamily = Perf.FONT_FAMILY;
		div.style.fontSize = "9px";
		div.style.fontWeight = "bold";
		div.style.textAlign = "center";
		window.document.body.appendChild(div);
		return div;
	}
	,_createFpsDom: function() {
		this.fps = this._createDiv("fps");
		this.fps.style.backgroundColor = Perf.FPS_BG_CLR;
		this.fps.style.zIndex = "995";
		this.fps.style.color = Perf.FPS_TXT_CLR;
		this.fps.innerHTML = "FPS: 0";
	}
	,_createMsDom: function() {
		this.ms = this._createDiv("ms",16);
		this.ms.style.backgroundColor = Perf.MS_BG_CLR;
		this.ms.style.zIndex = "996";
		this.ms.style.color = Perf.MS_TXT_CLR;
		this.ms.innerHTML = "MS: 0";
	}
	,_createMemoryDom: function() {
		this.memory = this._createDiv("memory",32);
		this.memory.style.backgroundColor = Perf.MEM_BG_CLR;
		this.memory.style.color = Perf.MEM_TXT_CLR;
		this.memory.style.zIndex = "997";
		this.memory.innerHTML = "MEM: 0";
	}
	,_getFormattedSize: function(bytes,frac) {
		if(frac == null) frac = 0;
		var sizes = ["Bytes","KB","MB","GB","TB"];
		if(bytes == 0) return "0";
		var precision = Math.pow(10,frac);
		var i = Math.floor(Math.log(bytes) / Math.log(1024));
		return Math.round(bytes * precision / Math.pow(1024,i)) / precision + " " + sizes[i];
	}
	,addInfo: function(val) {
		this.info = this._createDiv("info",this._memCheck?48:32);
		this.info.style.backgroundColor = Perf.INFO_BG_CLR;
		this.info.style.color = Perf.INFO_TXT_CLR;
		this.info.style.zIndex = "998";
		this.info.innerHTML = val;
	}
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
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
Date.__name__ = ["Date"];
Perf.MEASUREMENT_INTERVAL = 1000;
Perf.FONT_FAMILY = "Helvetica,Arial";
Perf.FPS_BG_CLR = "#00FF00";
Perf.FPS_WARN_BG_CLR = "#FF8000";
Perf.FPS_PROB_BG_CLR = "#FF0000";
Perf.MS_BG_CLR = "#FFFF00";
Perf.MEM_BG_CLR = "#086A87";
Perf.INFO_BG_CLR = "#00FFFF";
Perf.FPS_TXT_CLR = "#000000";
Perf.MS_TXT_CLR = "#000000";
Perf.MEM_TXT_CLR = "#FFFFFF";
Perf.INFO_TXT_CLR = "#000000";
Perf.DELAY_TIME = 4000;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);

//# sourceMappingURL=main.js.map