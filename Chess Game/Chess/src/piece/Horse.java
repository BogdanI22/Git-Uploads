package piece;

import main.GamePanel;
import main.Type;

public class Horse extends Piece{

    public Horse(int color, int col, int row) {
        super(color, col, row);

        type = Type.HORSE;
        
        if(color == GamePanel.WHITE){
            image = getImage("/assets/piece/whiteHorse");
        }
        else {
            image = getImage("/assets/piece/blackHorse");
        }
    }
    public boolean canMove(int targetCol, int targetRow) {

        if (isWithinBoard(targetCol, targetRow) && isSameSqare(targetCol, targetRow)==false) {
            // Math.abs take the absolute number in the (), like module
            if (Math.abs(targetCol - preCol) * Math.abs(targetRow - preRow) == 2) {
                
                if(isValidSqare(targetCol, targetRow)){
                    return true;
                }
                
            }
        }

        return false;
    }

}
