import pixi.core.sprites.Sprite;
import pixi.core.display.Container;
import pixi.core.textures.Texture;
import pixi.core.text.Text;
import pixi.plugins.app.Application;
import pixi.extras.TilingSprite;
import pixi.core.graphics.Graphics;
import pixi.core.display.DisplayObject;
import pixi.core.display.Container;
import js.Browser;
import pixi.interaction.EventTarget;
import custom.Config;

class Main extends Application {
	var texture1:Texture;
	var gameStateZERO           = 0;
    var gameStateINIT           = 1;
    var gameStateMOVING         = 2;
    var gameStateCHECK_WIN      = 3;
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
    var volume                  = true;
    var creditValue             = Config.creditValue;
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
    var imgSlot             = Config.imgSlot;
    var imgSlot3            = Config.imgSlot;    
    var imgSlot2            = Config.imgSlot;
    var textureVucicFrame   = Texture.fromImage(Config.selectVucicFrame);
    var textureDacicFrame   = Texture.fromImage(Config.selectDacicFrame);
    var textureTomaFrame    = Texture.fromImage(Config.selectTomaFrame);
    var textureTadicFrame   = Texture.fromImage(Config.selectTadicFrame);
    var textureCedaFrame    = Texture.fromImage(Config.selectCedaFrame);
    var textureCanakFrame   = Texture.fromImage(Config.selectCanakFrame);
    var textureSeseljFrame  = Texture.fromImage(Config.selectSeseljFrame);
    var winnerCandidateImg  = new Sprite(Texture.fromImage(Config.selectVucicFrame));
    var selectVucic         = new Sprite(Texture.fromImage(Config.selectVucicFrame));
    var selectDacic         = new Sprite(Texture.fromImage(Config.selectDacicFrame));
    var selectToma          = new Sprite(Texture.fromImage(Config.selectTomaFrame));
    var selectTadic         = new Sprite(Texture.fromImage(Config.selectTadicFrame));
    var selectCeda          = new Sprite(Texture.fromImage(Config.selectCedaFrame));
    var selectCanak         = new Sprite(Texture.fromImage(Config.selectCanakFrame));
    var selectSeselj        = new Sprite(Texture.fromImage(Config.selectSeseljFrame));
    var yourCandidateImg    = new Sprite(Texture.fromImage(Config.selectVucicFrame));
    var imgButton           = new Sprite(Texture.fromImage(Config.imgButton));
    var imgBody             = new Sprite(Texture.fromImage(Config.imgBody));
    var line1               = new Graphics();
    var line2               = new Graphics();
    var winnerCheck         = new Graphics();
    var winnerCheck2        = new Graphics();
    var arrowRight          = new Graphics();
    var arrowLeft           = new Graphics();
    var volumeOnOF          = new Text('Isključi zvuk',{ font: '20px Arial',fill: '#ff0000',align: 'center'});
    var message             = new Text('dobrodošli', {font: 'bold 15px Arial',fill: '#ff0000',align: 'center'});
    var maxButton           = new Text('MAX', { font: '20px Arial',fill: '#ff0000',align: 'center'});
    var minButton           = new Text('MIN', { font: '20px Arial',fill: '#ff0000',align: 'center'});
    var credit              = new Text('CREDIT:',{font: 'bold 18px Arial'} );
    var creditValueShow     = new Text("5000",{font: 'bold 18px Arial'});
    var stake               = new Text("100", {font: 'bold 18px Arial'});
    var tv                  = new Graphics();
    var tvAntena1           = new Graphics();
    var tvAntena2           = new Graphics();
    var tvAntenaEnd1        = new Graphics();
    var tvAntenaEnd2        = new Graphics();
    var congr               = new Text(Config.winnerMessage2, {font: 'bold 30px Arial',align: 'center',fill: '#A4CC00'});
    var showWinn            = new Text('0', {font: 'bold 12px Arial',align: 'center',fill: '#A4CC00'});
    var test                = 0;

    


	public function new() {
		super();
		_init();
	}

	function _init() {
		backgroundColor = 0xffffff;
		super.start();
	   
		var texture3 = Texture.fromImage(imgSlot);
        var creditStyle = {font: 'bold 18px Arial'};
        var volumeStyle = { font: '20px Arial',fill: '#ff0000',align: 'center'};
	
    selectVucic.height  = selectCandidateHight;
    selectVucic.width   = selectCandidateWidth;
    selectVucic.y       = selectCandidateInitalY;
    selectVucic.x       = selectCandidateInitalX;

    stage.addChild(selectVucic);
    selectVucic.interactive = true;

    selectVucic.on('mouseover', onVucicOver);
    selectVucic.on('mouseout',onVucicOut);
    selectVucic.on('click', addVucic);
    selectVucic.on('touchstart', addVucic);
  
    
    selectDacic.height  = selectCandidateHight;
    selectDacic.width   = selectCandidateWidth;
    selectDacic.y       = selectCandidateInitalY;
    selectDacic.x       = selectCandidateInitalX + 80;

    stage.addChild(selectDacic);
    selectDacic.interactive = true;
    selectDacic.on('mouseover', onDacicOver);
    selectDacic.on('mouseout',onDacicOut);
    selectDacic.on('click', addDacic);
    selectDacic.on('touchstart', addDacic);


    selectToma.height   = selectCandidateHight;
    selectToma.width    = selectCandidateWidth;
    selectToma.y        = selectCandidateInitalY;
    selectToma.x        = selectCandidateInitalX + 160;

    stage.addChild(selectToma);
    selectToma.interactive = true;
    selectToma.on('mouseover', onTomaOver);
    selectToma.on('mouseout',onTomaOut);
    selectToma.on('click', addToma);
    selectToma.on('touchstart', addToma);
   

    selectTadic.height  = selectCandidateHight;
    selectTadic.width   = selectCandidateWidth;
    selectTadic.y       = selectCandidateInitalY;
    selectTadic.x       = selectCandidateInitalX + 240;

    stage.addChild(selectTadic);
    selectTadic.interactive = true;
    selectTadic.on('mouseover', onTadicOver);
    selectTadic.on('mouseout',onTadicOut);
    selectTadic.on('click', addTadic);
    selectTadic.on('touchstart', addTadic);
   

    
    selectCeda.height   = selectCandidateHight;
    selectCeda.width    = selectCandidateWidth;
    selectCeda.y        = selectCandidateInitalY;
    selectCeda.x        = selectCandidateInitalX + 320;

    stage.addChild(selectCeda);
    selectCeda.interactive = true;
    selectCeda.on('mouseover', onCedaOver);
    selectCeda.on('mouseout',onCedaOut);
    selectCeda.on('click', addCeda);
    selectCeda.on('touchstart', addCeda);
   

    selectCanak.height  = selectCandidateHight;
    selectCanak.width   = selectCandidateWidth;
    selectCanak.y       = selectCandidateInitalY;
    selectCanak.x       = selectCandidateInitalX + 400;

    stage.addChild(selectCanak);
    selectCanak.interactive = true;
    selectCanak.on('mouseover', onCanakOver);
    selectCanak.on('mouseout',onCanakOut);
    selectCanak.on('click', addCanak);
    selectCanak.on('touchstart', addCanak);


    selectSeselj.height = selectCandidateHight;
    selectSeselj.width  = selectCandidateWidth;
    selectSeselj.y      = selectCandidateInitalY;
    selectSeselj.x      = selectCandidateInitalX + 480;

    stage.addChild(selectSeselj);
    selectSeselj.interactive = true;
    selectSeselj.on('mouseover', onSeseljOver);
    selectSeselj.on('mouseout',onSeseljOut);
    selectSeselj.on('click', addSeselj);
    selectSeselj.on('touchstart', addSeselj);


    
    yourCandidateImg.height = 250;
    yourCandidateImg.width  = yourCandidateImg.height;
    yourCandidateImg.y      = 150;
    yourCandidateImg.x      = 50;

    stage.addChild(yourCandidateImg);

   
    winnerCandidateImg.height   = 250;
    winnerCandidateImg.width    = winnerCandidateImg.height;
    winnerCandidateImg.y        = 150;
    winnerCandidateImg.x        = 1000;

    stage.addChild(winnerCandidateImg);

  
    volumeOnOF.x            = 1170;
    volumeOnOF.y            = 10;
    volumeOnOF.interactive  = true;

    stage.addChild(volumeOnOF);

    volumeOnOF.on('touchstart', volumeClick);
    volumeOnOF.on('click', volumeClick);
    volumeOnOF.on('mouseover', volumeOnOFHover);
    volumeOnOF.on('mouseout', volumeOnOFHoverOut);


   
    message.x   = 613;
    message.y   = 45;
    stage.addChild(message);

   

    
    credit.x    = 595;
    credit.y    = 10;
    stage.addChild(credit);

    
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


           
    imgButton.x             = 606;
    imgButton.y             = 450;
    imgButton.height        = 40;
    imgButton.width         = 100;
    imgButton.interactive   = true;
   

    imgButton.on('mousedown', restart);
    imgButton.on('mousedown', call);
    imgButton.on('touchstart', onButtonDown);
    imgButton.on('mouseup', onButtonUp);
    imgButton.on('touchend', onButtonUp);
    imgButton.on('mouseover', onButtonOver);
    imgButton.on('mouseout', onButtonUp);


	stage.addChild(imgBody);
    stage.addChild(imgButton);

   

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

    arrowLeft.on('mousedown', arrowLeftDown);
    arrowLeft.on('mouseup', arrowLeftUp);
    arrowLeft.on('mouseover', arrowLeftOver);
    arrowLeft.on('mouseout', arrowLeftUp);
    arrowLeft.on('click', arrowLeftClick);

    arrowRight.on('mousedown', arrowRightDown);
    arrowRight.on('mouseup', arrowRightUp);
    arrowRight.on('mouseover', arrowRightOver);
    arrowRight.on('mouseout', arrowRightUp);
    arrowRight.on('click', arrowRightClick);

    
    minButton.x             = 470;
    minButton.y             = 624;
    minButton.interactive   = true;
    stage.addChild(minButton);

   
    minButton.on('mouseover', minHover);
    minButton.on('mouseout', minHoverOut);
    minButton.on('touchstart', min);
    minButton.on('click', min);

  
    maxButton.x             = 797;
    maxButton.y             = minButton.y;
    maxButton.interactive   = true;
    stage.addChild(maxButton);

  

    maxButton.on('mouseover', maxHover);
    maxButton.on('mouseout', maxHoverOut);
    maxButton.on('click', max);
    maxButton.on('touchstart', max);
 
    tv.beginFill(0xff66cc);
    tv.lineStyle(17, 0x00000, 1);
    tv.moveTo(390, 100);
    tv.lineTo(390, 420);
    tv.lineTo(923, 420);
    tv.lineTo(923, 100);
    tv.lineTo(390, 100);

    

    tvAntena1.lineStyle(10, 0x00000, 1);
    tvAntena1.moveTo(600, 100);
    tvAntena1.quadraticCurveTo(480, 20, 430, 20);

    

    tvAntena2.lineStyle(10, 0x00000, 1);
    tvAntena2.moveTo(700, 100);
    tvAntena2.quadraticCurveTo(820, 20, 850, 20);

    

    tvAntenaEnd1.lineStyle(0);
    tvAntenaEnd1.beginFill(0x000000);
    tvAntenaEnd1.drawCircle(850, 18, 13);
    tvAntenaEnd1.endFill();

    

    tvAntenaEnd2.lineStyle(0);
    tvAntenaEnd2.beginFill(0x000000);
    tvAntenaEnd2.drawCircle(430, 18, 13);
    tvAntenaEnd2.endFill();

    var congrStyle = {font: 'bold 30px Arial',align: 'center',fill: '#A4CC00'};

    
    congr.x   = 450;
    congr.y   = 170;

    var winnStyle = {font: 'bold 12px Arial',align: 'center',fill: '#A4CC00'};

    
    showWinn.x      = 740;
    showWinn.y      = 13;

    stage.addChild(winnerCheck2);

     
	}

  
	
    function max() {
        stake.text = creditValue;
    }
     function min() {
        stake.text = "100";
    }

     function minHover() {
        minButton.scale.x    = 1.1;
        minButton.scale.y    = 1.1;
        minButton.position.x = minButton.position.x - 1;
        minButton.position.y = minButton.position.y - 1;
    }

    function minHoverOut() {
        minButton.scale.x    = 1.0;
        minButton.scale.y    = 1.0;
        minButton.position.x = minButton.position.x + 1;
        minButton.position.y = minButton.position.y + 1;
    }

     function maxHover() {
        maxButton.scale.x    = 1.1;
        maxButton.scale.y    = 1.1;
        maxButton.position.x = maxButton.position.x - 1;
        maxButton.position.y = maxButton.position.y - 1;
    }

    function maxHoverOut() {
        maxButton.scale.x    = 1.0;
        maxButton.scale.y    = 1.0;
        maxButton.position.x = maxButton.position.x + 1;
        maxButton.position.y = maxButton.position.y + 1;
    }

     function volumeOnOFHover() {
        volumeOnOF.scale.x    = 1.1;
        volumeOnOF.scale.y    = 1.1;
        volumeOnOF.position.x = volumeOnOF.position.x - 1;
        volumeOnOF.position.y = volumeOnOF.position.y - 1;
    }

    function volumeOnOFHoverOut() {
        volumeOnOF.scale.x    = 1.0;
        volumeOnOF.scale.y    = 1.0;
        volumeOnOF.position.x = volumeOnOF.position.x + 1;
        volumeOnOF.position.y = volumeOnOF.position.y + 1;
    
    }
   

    function arrowRightClick() {
        var intStake = Std.parseInt(stake.text);
        var intCreditValue = Std.parseInt(creditValue);
        if (intStake < intCreditValue) {
            intStake = intStake + 100;
            stake.text = Std.string(intStake);
            
        }
    }
    function arrowLeftClick() {
        var intStake = Std.parseInt(stake.text);
        if (intStake > 100) {
            stake.text = Std.string(intStake - 100);
            
        }
    }

    function arrowRightDown() {
        arrowRight.tint   = 0xFF0000;
    }

    function arrowRightUp() {
        arrowRight.tint   = 0xA4CC00;
    }

     function arrowLeftDown() {
        arrowLeft.tint   = 0xFF0000;
    }

    function arrowLeftUp() {
        arrowLeft.tint   = 0xA4CC00;
    }

    function arrowRightOver() {
        arrowRight.tint = 0x5D8700;
    }

     function arrowLeftOver() {
        arrowLeft.tint = 0x5D8700;
    }

    function restart() {
        test = 0;
        gameStatus = gameStateINIT;
        interactive(false);
        invested = Std.parseInt(stake.text);
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
        stage.removeChild(tv);
        stage.removeChild(tvAntena1);
        stage.removeChild(tvAntena2);
        stage.removeChild(tvAntenaEnd1);
        stage.removeChild(tvAntenaEnd2);
        stage.removeChild(congr);
        stage.removeChild(showWinn);
        stage.addChild(imgBody);
       

        
    }


     function draw() {
    
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
                gameStatus = gameStateCHECK_WIN ;
            }
            if (finalTileY2[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN ;
            }
            if (finalTileY3[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN ;
            }
        } else if (gameStatus == gameStateCHECK_WIN) {

            return;
        }

        Browser.window.requestAnimationFrame(cast draw);
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
               
             
            draw();

           Browser.window.setTimeout(
                function() {

                    if (sortThisBaby(result2)) {
                        
                        switch indexOfMax(result) {
                            case 0:
                                
                                winnerCandidateImg.texture = textureVucicFrame;
                                interactive(true);
                                if (yourCandidate == 0) {

                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();

                                } else {
                                    hightlight(0);
                                    textUpadete(Config.vucicMessage, 443, 45);
                                //     playSound('assets/sounds/vucic/tisina.mp3');
                                    canvasLine();
                                    calcDefeat();

                                }
                                
                            case 1:
                                
                                winnerCandidateImg.texture = textureDacicFrame;
                                interactive(true);

                                if (yourCandidate == 1) {
                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();

                                } else {
                                    hightlight(1);
                                    textUpadete(Config.dacicMessage, 483, 45);
                                //     playSound('assets/sounds/dacic/miljacka2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                              
                            case 2:
                                
                                winnerCandidateImg.texture = textureTomaFrame;
                                interactive(true);

                                if (yourCandidate == 2) {
                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();
                                } else {
                                    hightlight(2);
                                    textUpadete(Config.tomaMessage, 432, 45);
                                //     playSound('assets/sounds/toma/engleski.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                
                            case 3:
                                
                                winnerCandidateImg.texture = textureTadicFrame;
                                interactive(true);

                                if (yourCandidate == 3) {
                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();
                                } else {
                                    hightlight(3);
                                    textUpadete(Config.tadicMessage, 470, 45);
                                //     playSound('assets/sounds/tadic/mac.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                               
                            case 4:
                                
                                winnerCandidateImg.texture = textureCedaFrame;
                                interactive(true);

                                if (yourCandidate == 4) {
                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();
                                } else {
                                    hightlight(4);
                                    textUpadete(Config.cedaMessage, 469, 45);
                                //     playSound('assets/sounds/ceda/gospodjo2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }

                               
                            case 5:
                                
                                winnerCandidateImg.texture = textureCanakFrame;
                                interactive(true);

                                if (yourCandidate == 5) {
                                    textUpadete(Config.winnerMessage, 635, 45, Config.winnerColor);
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin();
                                } else {
                                    hightlight(5);
                                    textUpadete(Config.canakMessage, 363, 45);
                                //     playSound('assets/sounds/canak/sat.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                               
                            case 6:
                                
                                winnerCandidateImg.texture = textureSeseljFrame;
                                interactive(true);

                                if (yourCandidate == 6) {
                                    textUpadete(Config.winnerMessage, 625, 45, Config.winnerColor);
                                //     canvasWinerLine();
                                //     playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                //     onWinAmin()
                                } else {
                                    hightlight(6);
                                    textUpadete(Config.seseljMessage, 388, 45);
                                //     playSound('assets/sounds/seselj/olja.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                              
                         // Browser.window.alert('true');
                          default:
                           
                        }
                    } else {
                        restart();
                        startAnimation();
                        textUpadete(Config.equalMessage, 500, 45);
                        // interactive(false);
                         
                    }
        
                }, 2800);}

    }


    }

    function call(){
       startAnimation();
       // draw();
       
    }

    function onButtonDown(){
        imgButton.texture = Texture.fromImage(Config.imgButtonDown);
    }

    function onButtonUp() {
        imgButton .texture = Texture.fromImage(Config.imgButton);
    }

    function onButtonOver() {
        imgButton.texture = Texture.fromImage(Config.imgButtonHover);
    }

    function volumeClick() {
        if (volume) {
            volumeOnOF.text = 'Uključi zvuk';
            volume          = false;
        } else {
            volumeOnOF.text = 'Isključi zvuk';
            volume          = true;
        }
    }

    function onVucicOver() {
        selectVucic.texture    = Texture.fromImage(Config.selectVucic);
           }

    function onVucicOut(){
        selectVucic.texture    = Texture.fromImage(Config.selectVucicFrame);
    }

    function onDacicOver() {
        selectDacic.texture    = Texture.fromImage(Config.selectDacic);
           }

    function onDacicOut(){
        selectDacic.texture    = Texture.fromImage(Config.selectDacicFrame);
    }

    function onTomaOver() {
        selectToma.texture    = Texture.fromImage(Config.selectToma);
           }

    function onTomaOut(){
        selectToma.texture    = Texture.fromImage(Config.selectTomaFrame);
    }

    function onTadicOver() {
        selectTadic.texture    = Texture.fromImage(Config.selectTadic);
           }

    function onTadicOut(){
        selectTadic.texture    = Texture.fromImage(Config.selectTadicFrame);
    }
    function onCedaOver() {
        selectCeda.texture    = Texture.fromImage(Config.selectCeda);
           }

    function onCedaOut(){
        selectCeda.texture    = Texture.fromImage(Config.selectCedaFrame);
    }
    function onCanakOver() {
        selectCanak.texture    = Texture.fromImage(Config.selectCanak);
           }

    function onCanakOut(){
        selectCanak.texture    = Texture.fromImage(Config.selectCanakFrame);
    }

    function onSeseljOver() {
        selectSeselj.texture    = Texture.fromImage(Config.selectSeselj);
           }

    function onSeseljOut(){
        selectSeselj.texture    = Texture.fromImage(Config.selectSeseljFrame);
    }

    function addVucic() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectVucicFrame);
        yourCandidate               = 0;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addDacic() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectDacicFrame);
        yourCandidate               = 1;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addToma() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectTomaFrame);
        yourCandidate               = 2;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addTadic() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectTadicFrame);
        yourCandidate               = 3;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addCeda() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectCedaFrame);
        yourCandidate               = 4;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addCanak() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectCanakFrame);
        yourCandidate               = 5;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

      function addSeselj() {
        yourCandidateImg.texture    = Texture.fromImage(Config.selectSeseljFrame);
        yourCandidate               = 6;
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

    function interactive(x) {

        selectVucic.interactive     = x;
        selectDacic.interactive     = x;
        selectToma.interactive      = x;
        selectTadic.interactive     = x;
        selectCeda.interactive      = x;
        selectCanak.interactive     = x;
        selectSeselj.interactive    = x;
        imgButton.interactive       = x;
        arrowLeft.interactive       = x;
        arrowRight.interactive      = x;
        maxButton.interactive       = x;
        minButton.interactive       = x;
    }

     function calcWin() {
        var intCreditValue = Std.parseInt(creditValue);
        if (invested > intCreditValue) {
            stake.text  = Std.string(creditValue);
            invested    = intCreditValue;
        }
        var winValue = invested * Config.winMultiplication;
        creditValue             = Std.string(intCreditValue + winValue);
        creditValueShow.text    = creditValue;

        showWinn.text           = "+" + winValue;
        showWinn.style.fill     = '#A4CC00';
        stage.addChild(showWinn);
        renderer.render(stage);
    }

      function calcDefeat() {
        var intCreditValue = Std.parseInt(creditValue);
        var newCreditValue = intCreditValue - invested;
        creditValue             = Std.string(newCreditValue);
        creditValueShow.text    = creditValue;

        if (invested > newCreditValue) {
            stake.text = creditValue;
        }

        if (newCreditValue == 0 || newCreditValue < 0) {
             if (Browser.window.confirm('Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?')) {

                Browser.window.location.href = "index.html";

            } else {
                Browser.window.location.href = "assets/zeljko.stojakovic.cv.pdf";
            }

        }
        var stringInvestd = Std.string(invested);
        showWinn.text       = "-" + stringInvestd;
        showWinn.style.fill = '#ff0000';
        stage.addChild(showWinn);
        renderer.render(stage);
    }

     function canvasLine() {
        line1.lineStyle(20, 0xff0000);
        line1.moveTo(50, 150);
        line1.lineTo(300, 400);
        stage.addChild(line1);
        line2.lineStyle(20, 0xff0000);
        line2.moveTo(300, 150);
        line2.lineTo(50, 400);
        stage.addChild(line2);
        renderer.render(stage);

    }

    function canvasWinerLine() {
        winnerCheck.lineStyle(17, 0xA4CC00, 1);
        winnerCheck.moveTo(250, 180);
        winnerCheck.lineTo(170, 350);
        winnerCheck.lineTo(110, 290);
        stage.addChild(winnerCheck);
        winnerCheck2.lineStyle(17, 0xA4CC00, 1);
        winnerCheck2.moveTo(1200, 180);
        winnerCheck2.lineTo(1120, 350);
        winnerCheck2.lineTo(1070, 290);
        stage.addChild(winnerCheck2);
        stage.addChild(tvAntena1);
        stage.addChild(tvAntena2);
        stage.addChild(tvAntenaEnd1);
        stage.addChild(tvAntenaEnd2);
        stage.addChild(tv);
        stage.addChild(congr);
        stage.removeChild(imgBody);
        renderer.render(stage);
    }

     function playSound(x,volume) {

        // var audio       = new Audio(x);
        // audio.volume    = volume;
        // audio.play();

    }

    function textUpadete(value,x,y,color = "#ff0000" ) {
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