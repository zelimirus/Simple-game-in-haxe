import pixi.interaction.EventTarget;
import pixi.core.sprites.Sprite;
import pixi.core.display.Container;
import pixi.core.textures.Texture;
import pixi.core.text.Text;
import pixi.plugins.app.Application;
import pixi.extras.TilingSprite;
import pixi.core.graphics.Graphics;
import pixi.core.display.DisplayObject;
import js.Browser;
import pixi.interaction.EventTarget;

class Main extends Application {

	var texture1:Texture;
	var gameStateZERO           = 0;
    var gameStateINIT           = 1;
    var gameStateMOVING         = 2;
    var gameStateCHECK_WIN      = 3;
    var gameStatusStop          = 4;
    var slotNumber              = 5;
    var initalX                 = 395;
    var tileHEIGHT              = 100;
    var tileWIDTH               = 100;
    var nCycly                  = 5;
    var tTiles                  = 7;
    var selectCandidateInitalY  = 535;
    var selectCandidateInitalX  = 380;
    var selectCandidateHight    = 70;
    var selectCandidateWidth    = 70;
    var volume                  = 1;
    var creditValue             = "5000";
    var result                  = [];
    var gameStatus              = 0;
    var finalTileY1             = [];
    var finalTileY2             = [];
    var finalTileY3             = [];
    var slotSprite1             = [];
    var slotSprite2             = [];
    var slotSprite3             = [];
    var preChoosedPosition1 = [0, 2, 4, 6, 1];
    var preChoosedPosition2 = [2, 0, 6, 3, 4];
    var preChoosedPosition3 = [6, 1, 2, 4, 0];
    var yourCandidate           = 0;
    var finalCandidate          = '';
    var invested                = 0;
    var isAnimated              = true;
    var _width                   = 1300;
    var _height                  = 650;
    var amount                  = 20;
    var dolar                   = [];
    var gravity                 = 0.5;
    var maxX                    = 1300;
    var minX                    = 0;
    var maxY                    = 650;
    var minY                    = 0;
    var startDolarCount         = 0;
    var count                   = 0;
    var i = 0;
    var inc = [25, 35, 50, 70, 100];
    var imgSlot             = "assets/images/slot3.png";
    var imgSlot3            = "assets/images/slot3.png";    
    var imgSlot2            = "assets/images/slot3.png";


	public function new() {
		super();
		_init();
	}

	function _init() {
		backgroundColor = 0xffffff;
		super.start();
	    var texture1            = Texture.fromImage("assets/images/ram2.png");
	    var texture2            = Texture.fromImage("assets/images/start.png");
	    var texture4            = Texture.fromImage("assets/images/start-down.png");
	    var texture5            = Texture.fromImage("assets/images/start-hover.png");
	    var textureVucic        = Texture.fromImage("assets/images/vucic.jpg");
	    var textureDacic        = Texture.fromImage("assets/images/dacic.jpg");
	    var textureToma         = Texture.fromImage("assets/images/toma.jpg");
	    var textureTadic        = Texture.fromImage("assets/images/tadic.jpg");
	    var textureCeda         = Texture.fromImage("assets/images/ceda.jpg");
	    var textureCanak        = Texture.fromImage("assets/images/canak.jpg");
	    var textureSeselj       = Texture.fromImage("assets/images/seselj.jpg");
	    var textureVucicFrame   = Texture.fromImage("assets/images/vucic-ram.png");
	    var textureDacicFrame   = Texture.fromImage("assets/images/dacic-ram.png");
	    var textureTomaFrame    = Texture.fromImage("assets/images/toma-ram.png");
	    var textureTadicFrame   = Texture.fromImage("assets/images/tadic-ram.png");
	    var textureCedaFrame    = Texture.fromImage("assets/images/ceda-ram.png");
	    var textureCanakFrame   = Texture.fromImage("assets/images/canak-ram.png");
	    var textureSeseljFrame  = Texture.fromImage("assets/images/seselj-ram.png");
		var texture3 = Texture.fromImage(imgSlot);


		 var selectVucic     = new Sprite(textureVucicFrame);
    selectVucic.height  = selectCandidateHight;
    selectVucic.width   = selectCandidateWidth;
    selectVucic.y       = selectCandidateInitalY;
    selectVucic.x       = selectCandidateInitalX;

    stage.addChild(selectVucic);
    selectVucic.interactive = true;
    // selectVucic
    //     .on('mouseover', onVucicDown)
    //     .on('touchstart', addVucic)
    //     .on('click', addVucic)
    //     .on('mouseout', onVucicUp)
    //     .on('touchend', onVucicUp);

    var selectDacic     = new Sprite(textureDacicFrame);
    selectDacic.height  = selectCandidateHight;
    selectDacic.width   = selectCandidateWidth;
    selectDacic.y       = selectCandidateInitalY;
    selectDacic.x       = selectCandidateInitalX + 80;

    stage.addChild(selectDacic);
    selectDacic.interactive = true;
    // selectDacic
    //     .on('mouseover', onDacicDown)
    //     .on('touchstart', addDacic)
    //     .on('click', addDacic)
    //     .on('mouseout', onDacicUp)
    //     .on('touchend', onDacicUp);

    var selectToma      = new Sprite(textureTomaFrame);
    selectToma.height   = selectCandidateHight;
    selectToma.width    = selectCandidateWidth;
    selectToma.y        = selectCandidateInitalY;
    selectToma.x        = selectCandidateInitalX + 160;

    stage.addChild(selectToma);
    selectToma.interactive = true;
    // selectToma
    //     .on('mouseover', onTomaDown)
    //     .on('touchstart', addToma)
    //     .on('click', addToma)
    //     .on('mouseout', onTomaUp)
    //     .on('touchend', onTomaUp);

    var selectTadic     = new Sprite(textureTadicFrame);
    selectTadic.height  = selectCandidateHight;
    selectTadic.width   = selectCandidateWidth;
    selectTadic.y       = selectCandidateInitalY;
    selectTadic.x       = selectCandidateInitalX + 240;

    stage.addChild(selectTadic);
    selectTadic.interactive = true;
    // selectTadic
    //     .on('mouseover', onTadicDown)
    //     .on('touchstart', addTadic)
    //     .on('click', addTadic)
    //     .on('mouseout', onTadicUp)
    //     .on('touchend', onTadicUp);

    var selectCeda      = new Sprite(textureCedaFrame);
    selectCeda.height   = selectCandidateHight;
    selectCeda.width    = selectCandidateWidth;
    selectCeda.y        = selectCandidateInitalY;
    selectCeda.x        = selectCandidateInitalX + 320;

    stage.addChild(selectCeda);
    selectCeda.interactive = true;
    // selectCeda
    //     .on('mouseover', onCedaDown)
    //     .on('touchstart', addCeda)
    //     .on('click', addCeda)
    //     .on('mouseout', onCedaUp)
    //     .on('touchend', onCedaUp);

    var selectCanak     = new Sprite(textureCanakFrame);
    selectCanak.height  = selectCandidateHight;
    selectCanak.width   = selectCandidateWidth;
    selectCanak.y       = selectCandidateInitalY;
    selectCanak.x       = selectCandidateInitalX + 400;

    stage.addChild(selectCanak);
    selectCanak.interactive = true;
    // selectCanak
    //     .on('mouseover', onCanakDown)
    //     .on('touchstart', addCanak)
    //     .on('click', addCanak)
    //     .on('mouseout', onCanakUp)
    //     .on('touchend', onCanakUp);

    var selectSeselj    = new Sprite(textureSeseljFrame);
    selectSeselj.height = selectCandidateHight;
    selectSeselj.width  = selectCandidateWidth;
    selectSeselj.y      = selectCandidateInitalY;
    selectSeselj.x      = selectCandidateInitalX + 480;

    stage.addChild(selectSeselj);
    selectSeselj.interactive = true;
    // selectSeselj
    //     .on('mouseover', onSeseljDown)
    //     .on('touchstart', addSeselj)
    //     .on('click', addSeselj)
    //     .on('mouseout', onSeseljUp)
    //     .on('touchend', onSeseljUp);

    var yourCandidateImg        = new Sprite(textureVucicFrame);
    yourCandidateImg.height = 250;
    yourCandidateImg.width  = yourCandidateImg.height;
    yourCandidateImg.y      = 150;
    yourCandidateImg.x      = 50;

    stage.addChild(yourCandidateImg);

    var winnerCandidateImg          = new Sprite(textureVucicFrame);
    winnerCandidateImg.height   = 250;
    winnerCandidateImg.width    = winnerCandidateImg.height;
    winnerCandidateImg.y        = 150;
    winnerCandidateImg.x        = 1000;

    stage.addChild(winnerCandidateImg);

    var volumeStyle = {
        font: '20px Arial',
        fill: '#ff0000',
        align: 'center'

    }

    var volumeOnOF          = new Text('Isključi zvuk', volumeStyle);
    volumeOnOF.x            = 1170;
    volumeOnOF.y            = 10;
    volumeOnOF.interactive  = true;

    stage.addChild(volumeOnOF);

    // volumeOnOF
    //     .on('touchstart', volumeClick)
    //     .on('click', volumeClick)
    //     .on('mouseover', mHover)
    //     .on('mouseout', mHoverOut);

    var messageStyle = {font: 'bold 15px Arial',fill: '#ff0000',align: 'center'};

    var message = new Text('dobrodošli', messageStyle);
    message.x   = 613;
    message.y   = 45;
    stage.addChild(message);

    var creditStyle = {font: 'bold 18px Arial'}

    var credit  = new Text('CREDIT:', creditStyle);
    credit.x    = 595;
    credit.y    = 10;
    stage.addChild(credit);

    var creditValueShow = new Text(creditValue, creditStyle);
    creditValueShow.x   = 670;
    creditValueShow.y   = 10;
    stage.addChild(creditValueShow);

    var candidatePresent    = new Text("Tvoj kandidat", creditStyle);
    candidatePresent.x      = 120;
    candidatePresent.y      = 120;
    stage.addChild(candidatePresent);

    var winnerPresent   = new Text("Pobednik", creditStyle);
    winnerPresent.x     = 1090;
    winnerPresent.y     = 120;
    stage.addChild(winnerPresent);

    var select  = new Text("Izaberi svog kandidata i uloži kintu", creditStyle);
    select.x    = 509;
    select.y    = 500;
    stage.addChild(select);


    var imgBody     = new Sprite(texture1);
    imgBody.x       = 353;
    imgBody.y       = 70;
    imgBody.width   = 608;
    imgBody.height  = 378;
		

		
		
	    while (i < slotNumber) {
	        slotSprite1[i] = new TilingSprite(texture3,tileHEIGHT,tileWIDTH);
	        slotSprite1[i].tilePosition.x   = 0;
	        slotSprite1[i].tilePosition.y   = (-preChoosedPosition1[i] * 100);
	        slotSprite1[i].x                = initalX + (i * 105);
	        slotSprite1[i].y                = 105;
	        stage.addChild(slotSprite1[i]);
	        i++;
	    }
	    i = 0;
	     while (i < slotNumber) {
	        slotSprite2[i] = new TilingSprite(texture3,tileHEIGHT,tileWIDTH);
	        slotSprite2[i].tilePosition.x   = 0;
	        slotSprite2[i].tilePosition.y   = (-preChoosedPosition2[i] * 100);
	        slotSprite2[i].x                = initalX + (i * 105);
	        slotSprite2[i].y                = 210;
	        stage.addChild(slotSprite2[i]);
	        i++;
	    }
	    i = 0;
	     while (i < slotNumber) {
	        slotSprite3[i] = new TilingSprite(texture3,tileHEIGHT,tileWIDTH);
	        slotSprite3[i].tilePosition.x   = 0;
	        slotSprite3[i].tilePosition.y   = (-preChoosedPosition3[i] * 100);
	        slotSprite3[i].x                = initalX + (i * 105);
	        slotSprite3[i].y                = 315;
	        stage.addChild(slotSprite3[i]);
	        i++;
	    }


            var imgButton           = new Sprite(texture2);
    imgButton.x             = 606;
    imgButton.y             = 450;
    imgButton.height        = 40;
    imgButton.width         = 100;
    imgButton.interactive   = true;
   

    imgButton
         .on('mousedown', startAnimation);
    imgButton
         .on('mousedown', restart);
        // .on('touchstart', onButtonDown)
    //     .on('mouseup', onButtonUp)
    //     .on('touchend', onButtonUp)
    //     .on('mouseover', onButtonOver)
    //     .on('mouseout', onButtonUp);


	stage.addChild(imgBody);
    stage.addChild(imgButton);

    var line1           = new Graphics();
    var line2           = new Graphics();
    var winnerCheck     = new Graphics();
    var winnerCheck2    = new Graphics();
    var arrowRight      = new Graphics();
    var arrowLeft       = new Graphics();

    arrowLeft.beginFill(0xA4CC00);

    arrowLeft.moveTo(545, 635);
    arrowLeft.lineTo(565, 620);
    arrowLeft.lineTo(565, 630);
    arrowLeft.lineTo(605, 630);
    arrowLeft.lineTo(605, 640);
    arrowLeft.lineTo(565, 640);
    arrowLeft.lineTo(565, 650);

    arrowRight.beginFill(0xA4CC00);

    arrowRight.moveTo(763, 635);
    arrowRight.lineTo(743, 620);
    arrowRight.lineTo(743, 630);
    arrowRight.lineTo(703, 630);
    arrowRight.lineTo(703, 640);
    arrowRight.lineTo(743, 640);
    arrowRight.lineTo(743, 650);

    var stakeValue  = "100";
    var stake       = new Text(stakeValue, creditStyle);

    stake.y = 625;
    stake.x = 640;

    stage.addChild(arrowLeft);
    stage.addChild(arrowRight);
    stage.addChild(line1);
    stage.addChild(line2);
    stage.addChild(winnerCheck);
    stage.addChild(stake);

    arrowLeft.interactive   = true;
    arrowRight.interactive  = true;

    // arrowLeft
    //     .on('mousedown', arrowDown)
    //     .on('mouseup', arrowUp)
    //     .on('mouseover', arrowOver)
    //     .on('mouseout', arrowUp)
    //     .on('touchstart', arrowLeftClick)
    //     .on('click', arrowLeftClick)

    // arrowRight
    //     .on('mousedown', arrowDown)
    //     .on('mouseup', arrowUp)
    //     .on('mouseover', arrowOver)
    //     .on('mouseout', arrowUp)
    //     .on('touchstart', arrowRightClick)
    //     .on('click', arrowRightClick)

    var minButton           = new Text('MIN', volumeStyle);
    minButton.x             = 470;
    minButton.y             = 624;
    minButton.interactive   = true;
    stage.addChild(minButton);

    // minButton
    //     .on('touchstart', min)
    //     .on('click', min)
    //     .on('mouseover', mHover)
    //     .on('mouseout', mHoverOut)

    var maxButton           = new Text('MAX', volumeStyle);
    maxButton.x             = 797;
    maxButton.y             = minButton.y;
    maxButton.interactive   = true;
    stage.addChild(maxButton);

    // maxButton
    //     .on('touchstart', max)
    //     .on('click', max)
    //     .on('mouseover', mHover)
    //     .on('mouseout', mHoverOut)

    var tv = new Graphics();

    tv.beginFill(0xff66cc);
    tv.lineStyle(17, 0x00000, 1);
    tv.moveTo(390, 100);
    tv.lineTo(390, 420);
    tv.lineTo(923, 420);
    tv.lineTo(923, 100);
    tv.lineTo(390, 100);

    var tvAntena1 = new Graphics();

    tvAntena1.lineStyle(10, 0x00000, 1);
    tvAntena1.moveTo(600, 100);
    tvAntena1.quadraticCurveTo(480, 20, 430, 20);

    var tvAntena2 = new Graphics();

    tvAntena2.lineStyle(10, 0x00000, 1);
    tvAntena2.moveTo(700, 100);
    tvAntena2.quadraticCurveTo(820, 20, 850, 20);

    var tvAntenaEnd1 = new Graphics();

    tvAntenaEnd1.lineStyle(0);
    tvAntenaEnd1.beginFill(0x000000);
    tvAntenaEnd1.drawCircle(850, 18, 13);
    tvAntenaEnd1.endFill();

    var tvAntenaEnd2 = new Graphics();

    tvAntenaEnd2.lineStyle(0);
    tvAntenaEnd2.beginFill(0x000000);
    tvAntenaEnd2.drawCircle(430, 18, 13);
    tvAntenaEnd2.endFill();

    var congrStyle = {font: 'bold 30px Arial',align: 'center',fill: '#A4CC00'};

    var congr = new Text('Prekidamo politički program\n zbog ekskluzivnih  vesti!\n Nepoznati kladioničar\n osvojio brdo keša!', congrStyle);
    congr.x   = 450;
    congr.y   = 170;

    var winnStyle = {font: 'bold 12px Arial',align: 'center',fill: '#A4CC00'};

    var showWinn    = new Text('0', winnStyle);
    showWinn.x      = 740;
    showWinn.y      = 13;

    stage.addChild(winnerCheck2);

     
	}

  
	
    function max(stake,creditValue) {
        stake.text = creditValue;
    }

     function mHover(obj) {
        obj.scale.x    = 1.1;
        obj.scale.y    = 1.1;
        obj.position.x = obj.position.x - 1;
        obj.position.y = obj.position.y - 1;
    }

    function mHoverOut(obj) {
        obj.scale.x    = 1.0;
        obj.scale.y    = 1.0;
        obj.position.x = obj.position.x + 1;
        obj.position.y = obj.position.y + 1;
    }

    function min(stake) {
        stake.text = 100;
    }

    function arrowRightClick(stake, creditValue) {
        if (stake.text < creditValue) {
            stake.text = stake.text + 100;
            renderer.render(stage);
        }
    }
    function arrowLeftClick(stake) {
        if (stake.text > 100) {
            stake.text = stake.text - 100;
            renderer.render(stage);
        }
    }

    function arrowDown(obj) {
        obj.isdown = true;
        obj.tint   = 0xFF0000;
    }

    function arrowUp(obj) {
        obj.isdown = false;
        obj.tint   = 0xA4CC00;
    }

    function arrowOver(obj) {
        obj.tint = 0x5D8700;
    }

    function restart() {
        gameStatus = gameStateINIT;
    }

    function startAnimation() {
       
       
         if (gameStatus == gameStateINIT || gameStatus == gameStateCHECK_WIN) {
            preChoosedPosition1 = [0, 2, 4, 6, 1];
            preChoosedPosition2 = [0, 2, 4, 6, 1];
            preChoosedPosition3 = [0, 2, 4, 6, 1];
            var i = 0;
            while ( i < slotNumber) {
                preChoosedPosition1[i] = getRandomInt(0, 6);
                preChoosedPosition2[i] = getRandomInt(0, 6);
                preChoosedPosition3[i] = getRandomInt(0, 6);

                slotSprite1[i].tilePosition.y   = (-preChoosedPosition1[i] * tileHEIGHT);
                slotSprite1[i].tint             = 16777215;
                finalTileY1[i]                  = (nCycly * tileHEIGHT * tTiles);
                slotSprite2[i].tilePosition.y   = (-preChoosedPosition2[i] * tileHEIGHT);
                slotSprite2[i].tint             = 16777215;
                finalTileY2[i]                  = (nCycly * tileHEIGHT * tTiles);
                slotSprite3[i].tilePosition.y   = (-preChoosedPosition3[i] * tileHEIGHT);
                slotSprite3[i].tint             = 16777215;
                finalTileY3[i]                  = (nCycly * tileHEIGHT * tTiles);
                i++;
            }
            gameStatus = gameStateMOVING;

             if (preChoosedPosition3[i] != preChoosedPosition3[i - 1]) {
                var union = preChoosedPosition1.concat(preChoosedPosition2);
                var store = union.concat(preChoosedPosition3);
                var x = 0;
                var can0 = 0;
                var can1 = 0;
                var can2 = 0;
                var can3 = 0;
                var can4 = 0;
                var can5 = 0;
                var can6 = 0;
                while (x < 15) {
                    switch store[x] {
                        case 0:
                            can0++;
            
                        case 1:
                            can1++;
                            
                        case 2:
                            can2++;
                            
                        case 3:
                            can3++;
                        
                        case 4:
                            can4++;
                            
                        case 5:
                            can5++;
                            
                        case 6:
                            can6++;
                            
                    }
                    x++;
                }
                var result  = [can0, can1, can2, can3, can4, can5, can6];
                var result2 = [can0, can1, can2, can3, can4, can5, can6];
               
                 
            

           Browser.window.setTimeout(
                function() {

                    if (sortThisBaby(result2)) {
                        
                        switch indexOfMax(result) {
                            case 0:
                           
                                // winnerCandidateImg.texture = textureVucicFrame;
                                // interactive(true);
                                // if (finalCandidate == 0) {

                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();

                                // } else {
                                    hightlight(0);
                                //     textUpadete(config.vucicMessage, 443, 45);
                                //     playSound('assets/sounds/vucic/tisina.mp3');
                                //     canvasLine();
                                //     calcDefeat();

                                // }
                                
                            case 1:
                            
                                // winnerCandidateImg.texture = textureDacicFrame;
                                // interactive(true);

                                // if (finalCandidate == 1) {
                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();

                                // } else {
                                    hightlight(1);
                                //     textUpadete(config.dacicMessage, 483, 45);
                                //     playSound('assets/sounds/dacic/miljacka2.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }
                              
                            case 2:
                             
                                // winnerCandidateImg.texture = textureTomaFrame;
                                // interactive(true);

                                // if (finalCandidate == 2) {
                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();
                                // } else {
                                    hightlight(2);
                                //     textUpadete(config.tomaMessage, 432, 45);
                                //     playSound('assets/sounds/toma/engleski.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }
                                
                            case 3:
                         
                                // winnerCandidateImg.texture = textureTadicFrame;
                                // interactive(true);

                                // if (finalCandidate == 3) {
                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();
                                // } else {
                                    hightlight(3);
                                //     textUpadete(config.tadicMessage, 470, 45);
                                //     playSound('assets/sounds/tadic/mac.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }
                               
                            case 4:
                       
                                // winnerCandidateImg.texture = textureCedaFrame;
                                // interactive(true);

                                // if (finalCandidate == 4) {
                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();
                                // } else {
                                    hightlight(4);
                                //     textUpadete(config.cedaMessage, 469, 45);
                                //     playSound('assets/sounds/ceda/gospodjo2.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }

                               
                            case 5:
                
                                // winnerCandidateImg.texture = textureCanakFrame;
                                // interactive(true);

                                // if (finalCandidate == 5) {
                                //     textUpadete(config.winnerMessage, 635, 45, config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin();
                                // } else {
                                    hightlight(5);
                                //     textUpadete(config.canakMessage, 363, 45);
                                //     playSound('assets/sounds/canak/sat.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }
                               
                            case 6:
                        
                                // winnerCandidateImg.texture = textureSeseljFrame;
                                // interactive(true);

                                // if (finalCandidate == 6) {
                                //     textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                //     canvasWinerLine();
                                //     playSound('assets/sounds/win.mp3');
                                //     canvasWinerLine();
                                //     calcWin();
                                //     onWinAmin()
                                // } else {
                                    hightlight(6);
                                //     textUpadete(config.seseljMessage, 388, 45);
                                //     playSound('assets/sounds/seselj/olja.mp3');
                                //     canvasLine();
                                //     calcDefeat();
                                // }
                              
                         // Browser.window.alert('true');
                          default:
                           
                        }
                    } else {
                        restart();
                        startAnimation();
                        // textUpadete(config.equalMessage, 500, 45);
                        // interactive(false);
                         
                    }
                }, 2800);}
        // }

    }


        if (gameStatus == gameStateZERO) {
            gameStatus = gameStateINIT;

        } else if (gameStatus == gameStateINIT) {
                    gameStatus = gameStateCHECK_WIN;
        } else if (gameStatus == gameStateMOVING) {
            var i = 0;
            while(i < slotNumber) { 
                if (finalTileY1[i] > 0) {
                    slotSprite1[i].tilePosition.y   = slotSprite1[i].tilePosition.y + inc[i];
                    finalTileY1[i]                  = finalTileY1[i] - inc[i];
                }
                if (finalTileY2[i] > 0) {
                    slotSprite2[i].tilePosition.y   = slotSprite2[i].tilePosition.y + inc[i];
                    finalTileY2[i]                  = finalTileY2[i] - inc[i];
                }
                if (finalTileY3[i] > 0) {
                    slotSprite3[i].tilePosition.y   = slotSprite3[i].tilePosition.y + inc[i];
                    finalTileY3[i]                  = finalTileY3[i] - inc[i];
                }
                 i++;
            }
            if (finalTileY1[0] - 5 <= 0) {
                gameStatus = gameStatusStop ;
            }
            if (finalTileY2[0] - 5 <= 0) {
                gameStatus = gameStatusStop ;
            }
            if (finalTileY3[0] - 5 <= 0) {
                gameStatus = gameStatusStop ;
            }
        } else if (gameStatus == gameStateCHECK_WIN) {

            return;
        }
        
        Browser.window.requestAnimationFrame(cast startAnimation);

    }

     function onButtonUp(obj, texture2) {
        obj.isdown     = false;
        obj.texture    = texture2;
    }

    function onButtonOver(obj,texture5) {
        obj.texture = texture5;
    }

    function volumeClick(volume, volumeOnOF,volValue) {
        if (volume) {
            volumeOnOF.text = 'Uključi zvuk';
            volume          = volValue;
        } else {
            volumeOnOF.text = 'Isključi zvuk';
            volume          = volValue;
        }
    }

    function onDown(obj,textureSeselj) {
        obj.isdown     = true;
        obj.texture    = textureSeselj;
    }

    function onUp(obj,textureSeseljFrame) {
        obj.isdown     = false;
        obj.texture    = textureSeseljFrame;
    }

    function add(yourCandidateImg,yourCandidate,line1,line2,winnerCheck,winnerCheck2,textureSeseljFrame,candNum) {
        yourCandidateImg.texture    = textureSeseljFrame;
        yourCandidate               = candNum;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

     function hightlight(value) {
        var x = 0;
        while (x < 6) {
            if (preChoosedPosition1[x] == value) {
                slotSprite1[x].tint = 99964444;
            }

            if (preChoosedPosition2[x] == value) {
                slotSprite2[x].tint = 99964444;
            }

            if (preChoosedPosition3[x] == value) {
                slotSprite3[x].tint = 99964444;
            }
         x++;
        }
    }

    function interactive(obj,x) {

        obj.interactive     = x;
    }

     function calcWin(invested,creditValue,stake,invested,showWinn,creditValueShow) {

        if (invested > creditValue) {
            stake.text  = creditValue;
            invested    = creditValue;
        }
        creditValue             = creditValue + invested * 5;
        creditValueShow.text    = creditValue;
        // showWinn.text           = "+" + invested * 5;
        // showWinn.style.fill     = '#A4CC00';
        // stage.addChild(showWinn);
        renderer.render(stage);
    }

      function calcDefeat(creditValue,creditValueShow,invested,stake) {

        creditValue             = creditValue - invested;
        creditValueShow.text    = creditValue;

        if (invested > creditValue) {
            stake.text = creditValue;
        }

        if (creditValue == 0 || creditValue < 0) {
             if (Browser.window.confirm('Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?')) {

                Browser.window.location.href = "index.html";

            } else {
                Browser.window.location.href = "assets/zeljko.stojakovic.cv.pdf";
            }

        }
        // showWinn.text       = "-" + invested;
        // showWinn.style.fill = '#ff0000';
        // stage.addChild(showWinn);
        renderer.render(stage);
    }

     function canvasLine(line1,line2) {
        // line1.lineStyle(20, 0xff0000);
        // line1.moveTo(50, 150);
        // line1.lineTo(300, 400);
        // stage.addChild(line1);
        // line2.lineStyle(20, 0xff0000);
        // line2.moveTo(300, 150);
        // line2.lineTo(50, 400);
        // stage.addChild(line2);
        // renderer.render(stage);

    }

    function canvasWinerLine(winnerCheck,winnerCheck2,tvAntena1,tvAntena2,tvAntenaEnd1,tvAntenaEnd2,tv,congr,imgBody) {
        // winnerCheck.lineStyle(17, 0xA4CC00, 1);
        // winnerCheck.moveTo(250, 180);
        // winnerCheck.lineTo(170, 350);
        // winnerCheck.lineTo(110, 290);
        // stage.addChild(winnerCheck);
        // winnerCheck2.lineStyle(17, 0xA4CC00, 1);
        // winnerCheck2.moveTo(1200, 180);
        // winnerCheck2.lineTo(1120, 350);
        // winnerCheck2.lineTo(1070, 290);
        // stage.addChild(winnerCheck2);
        // stage.addChild(tvAntena1);
        // stage.addChild(tvAntena2);
        // stage.addChild(tvAntenaEnd1);
        // stage.addChild(tvAntenaEnd2);
        // stage.addChild(tv);
        // stage.addChild(congr);
        // stage.removeChild(imgBody);
        // renderer.render(stage);
    }

     function playSound(x,volume) {

        // var audio       = new Audio(x);
        // audio.volume    = volume;
        // audio.play();

    }

    function textUpadete(value, x, y, color = " #ff0000",message) {
        message.text        = value;
        message.x           = x;
        message.y           = y;
        message.style.fill  = color;
    }

    function creditUpadete(value,creditValue) {
        creditValue.text = value;
    }

    function getRandomInt(min, max) {
        return untyped Math.floor(Math.random() * (max - min + 1)) + min;
    }

     function getRandomPositions() {
        var x = untyped getRandomInt(0, 100);
        if (x > 50) {
            x = untyped getRandomInt(0, 6);
            return [x, x, x, x, x];
        }
        return [getRandomInt(0, 6), getRandomInt(0, 6), getRandomInt(0, 6)];
    }

    function sortThisBaby(arr:Array<Int>) {
       arr.sort(function(a, b) {
            return b - a;
        });
        if (arr[0] != arr[1]) {
            return true;
        }
        else{
            return false;
        }
        
    }

    function indexOfMax(arr:Array<Int>) {
        if (arr.length == 0) return -1;

        var max = arr[0];
        var maxIndex = 0;
        var i = 1;
        while (i < arr.length) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
            i++;
        }
        return maxIndex;
    }


	static function main() {
		new Main();
	}
}