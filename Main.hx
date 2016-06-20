import pixi.interaction.EventTarget;
import pixi.core.sprites.Sprite;
import pixi.core.display.Container;
import pixi.core.textures.Texture;
import pixi.plugins.app.Application;
import pixi.extras.TilingSprite;
import js.Browser;

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
    var volume                  = 1;
    var creditValue             = 5000;
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

	public function new() {
		super();
		_init();
	}

	function _init() {
		backgroundColor = 0xE0E6F8;
	
		super.start();

		
		texture1 = Texture.fromImage("assets/images/slot3.png");
		


    while (i < slotNumber) {
        slotSprite1[i] = new TilingSprite(texture1,tileHEIGHT,tileWIDTH);
        slotSprite1[i].tilePosition.x   = 0;
        slotSprite1[i].tilePosition.y   = (-preChoosedPosition1[i] * 100);
        slotSprite1[i].x                = initalX + (i * 105);
        slotSprite1[i].y                = 105;
        stage.addChild(slotSprite1[i]);
        i++;
    }
    i = 0;
     while (i < slotNumber) {
        slotSprite2[i] = new TilingSprite(texture1,tileHEIGHT,tileWIDTH);
        slotSprite2[i].tilePosition.x   = 0;
        slotSprite2[i].tilePosition.y   = (-preChoosedPosition2[i] * 100);
        slotSprite2[i].x                = initalX + (i * 105);
        slotSprite2[i].y                = 210;
        stage.addChild(slotSprite2[i]);
        i++;
    }
    i = 0;
     while (i < slotNumber) {
        slotSprite3[i] = new TilingSprite(texture1,tileHEIGHT,tileWIDTH);
        slotSprite3[i].tilePosition.x   = 0;
        slotSprite3[i].tilePosition.y   = (-preChoosedPosition3[i] * 100);
        slotSprite3[i].x                = initalX + (i * 105);
        slotSprite3[i].y                = 315;
        stage.addChild(slotSprite3[i]);
        i++;
    }


	}

	

	static function main() {
		new Main();
	}
}