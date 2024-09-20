package piece;

import main.GamePanel;
import main.Type;

public class Bishop extends Piece{

    public Bishop(int color, int col, int row) {
        super(color, col, row);

        type = Type.BISHOP;
        
        if(color == GamePanel.WHITE){
            image = getImage("/assets/piece/whiteNebun");
        }
        else {
            image = getImage("/assets/piece/blackNebun");
        }
    }
    public boolean canMove(int targetCol, int targetRow) {


        if (isWithinBoard(targetCol, targetRow) && isSameSqare(targetCol, targetRow)==false) {
            // Math.abs take the absolute number in the (), like module
            if (Math.abs(targetCol - preCol) == Math.abs(targetRow - preRow)){                
                if(isValidSqare(targetCol, targetRow) && pieceIsOnDiagonalLine(targetCol, targetRow)==false){
                    return true;
                }
                
            }
        }

        return false;
    }

}
