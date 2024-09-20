package piece;

import main.GamePanel;
import main.Type;

public class Rook extends Piece{

    public Rook(int color, int col, int row) {
        super(color, col, row);

        type = Type.ROOK;
        
        if(color == GamePanel.WHITE){
            image = getImage("/assets/piece/whiteTura");
        }
        else {
            image = getImage("/assets/piece/blackTura");
        }
    }
    public boolean canMove(int targetCol, int targetRow) {

        if (isWithinBoard(targetCol, targetRow) && isSameSqare(targetCol, targetRow)==false) {
            
            if (targetCol == preCol || targetRow == preRow){
                
                if(isValidSqare(targetCol, targetRow) && pieceIsOnStraightLine(targetCol, targetRow) == false){
                    return true;
                }
                
            }
        }

        return false;
    }

}
