package piece;

import main.GamePanel;
import main.Type;

public class Queen extends Piece {

    public Queen(int color, int col, int row) {
        super(color, col, row);

        type = Type.QUEEN;

        if (color == GamePanel.WHITE) {
            image = getImage("/assets/piece/whiteQueen");
        } else {
            image = getImage("/assets/piece/blackQueen");
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
            if (targetCol == preCol || targetRow == preRow){
                if(isValidSqare(targetCol, targetRow) && pieceIsOnStraightLine(targetCol, targetRow) == false){
                    return true;
                }
                
            }
        }

        return false;
    }
}
