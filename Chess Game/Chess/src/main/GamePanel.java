package main;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.util.ArrayList;

import javax.swing.JPanel;

import piece.Bishop;
import piece.Horse;
import piece.King;
import piece.Pawn;
import piece.Piece;
import piece.Queen;
import piece.Rook;

public class GamePanel extends JPanel implements Runnable {

    public static final int WIDTH = 1100;
    public static final int HEIGHT = 800;
    final int FPS = 60;
    Thread gameThread;
    Board board = new Board();
    Mouse mouse = new Mouse();

    // COLORS
    public static final int WHITE = 0;
    public static final int BLACK = 1;
    int currentColor = WHITE;

    // PIECES
    // backup list
    public static ArrayList<Piece> pieces = new ArrayList<>();
    // the one we work with
    public static ArrayList<Piece> simPieces = new ArrayList<>();
    // for the propotion
    ArrayList<Piece> promoPieces = new ArrayList<>();
    Piece activPiece, checkingPiece;
    public static Piece castlingP;

    // BOOLEANS
    boolean canMove;
    boolean validSqare;
    boolean promotion;
    boolean gameover;
    boolean stalemate;

    public GamePanel() {
        setPreferredSize(new Dimension(WIDTH, HEIGHT));
        setBackground(Color.BLACK);
        addMouseMotionListener(mouse);
        addMouseListener(mouse);

        setPieces();
        copyPieces(pieces, simPieces);
    }

    public void launchGame() {
        gameThread = new Thread(this);
        // this calls the run method
        gameThread.start();
    }

    public void setPieces() {

        // WHITE
        pieces.add(new Pawn(WHITE, 0, 6));
        pieces.add(new Pawn(WHITE, 1, 6));
        pieces.add(new Pawn(WHITE, 2, 6));
        pieces.add(new Pawn(WHITE, 3, 6));
        pieces.add(new Pawn(WHITE, 4, 6));
        pieces.add(new Pawn(WHITE, 5, 6));
        pieces.add(new Pawn(WHITE, 6, 6));
        pieces.add(new Pawn(WHITE, 7, 6));
        pieces.add(new Rook(WHITE, 0, 7));
        pieces.add(new Rook(WHITE, 7, 7));
        pieces.add(new Horse(WHITE, 1, 7));
        pieces.add(new Horse(WHITE, 6, 7));
        pieces.add(new Bishop(WHITE, 2, 7));
        pieces.add(new Bishop(WHITE, 5, 7));
        pieces.add(new Queen(WHITE, 3, 7));
        pieces.add(new King(WHITE, 4, 7));

        // BLACK
        pieces.add(new Pawn(BLACK, 0, 1));
        pieces.add(new Pawn(BLACK, 1, 1));
        pieces.add(new Pawn(BLACK, 2, 1));
        pieces.add(new Pawn(BLACK, 3, 1));
        pieces.add(new Pawn(BLACK, 4, 1));
        pieces.add(new Pawn(BLACK, 5, 1));
        pieces.add(new Pawn(BLACK, 6, 1));
        pieces.add(new Pawn(BLACK, 7, 1));
        pieces.add(new Rook(BLACK, 0, 0));
        pieces.add(new Rook(BLACK, 7, 0));
        pieces.add(new Horse(BLACK, 1, 0));
        pieces.add(new Horse(BLACK, 6, 0));
        pieces.add(new Bishop(BLACK, 2, 0));
        pieces.add(new Bishop(BLACK, 5, 0));
        pieces.add(new Queen(BLACK, 3, 0));
        pieces.add(new King(BLACK, 4, 0));

    }

    public void copyPieces(ArrayList<Piece> source, ArrayList<Piece> target) {
        target.clear();
        for (int i = 0; i < source.size(); i++) {
            target.add(source.get(i));
        }
    }

    // from Runnable
    // create a game loop
    @Override
    public void run() {

        // GAME LOOP
        // call the update and paintComponent 60 times/ second
        double drawInterval = 1000000000 / FPS;
        double delta = 0;
        long lastTime = System.nanoTime();
        long currentTime;

        while (gameThread != null) {
            currentTime = System.nanoTime();
            delta += (currentTime - lastTime) / drawInterval;
            lastTime = currentTime;

            if (delta >= 1) {
                update();
                repaint();
                delta--;
            }
        }
    }

    public void update() {

        if (promotion) {
            promoting();

        } else if(gameover == false && stalemate == false){
            // MOUSE BUTTON PRESSED
            if (mouse.pressed) {
                // if tge activPiece is null,check if you can pick up a piece
                if (activPiece == null) {
                    // if the mouse is on an ally piece, pick it up as the activePiece
                    for (Piece piece : simPieces) {
                        if (piece.color == currentColor &&
                                piece.col == mouse.x / Board.SQUARE_SIZE &&
                                piece.row == mouse.y / Board.SQUARE_SIZE) {

                            activPiece = piece;

                        }
                    }
                } else {
                    // if the player is holding a piece, simulate the move
                    simulate();
                }
            }
            // MOUSE BUTTON RELEASED
            else {
                if (activPiece != null) {
                    if (validSqare) {

                        // MOVE CONFIRMED

                        // Update the piece list in case a piece has been captured and removed during
                        // simulation
                        copyPieces(simPieces, pieces);
                        activPiece.updatePosition();
                        if (castlingP != null) {
                            castlingP.updatePosition();
                        }

                        if(isKingInCheck() && isCheckmate()){
                            gameover = true;
                        }
                        else if(isStalemate() && isKingInCheck() == false){
                            stalemate = true;
                        }
                        else{
                            if (canPromote()) {
                                promotion = true;
                            } else {
                                changePlayer();
                            }
                        }                     

                    } else {

                        // the move is not valid so reset everything
                        copyPieces(pieces, simPieces);
                        activPiece.resetPosition();
                        activPiece = null;
                    }
                }
            }
        }

    }

    public void simulate() {
        canMove = false;
        validSqare = false;

        // Reset the piece list in every loop
        // This is for restoring the removed piece during simulation
        copyPieces(pieces, simPieces);

        // Reset the castling piece's position
        if (castlingP != null) {
            castlingP.col = castlingP.preCol;
            castlingP.x = castlingP.getX(castlingP.col);
            castlingP = null;
        }

        // if a piece is being held, update it's position
        activPiece.x = mouse.x - Board.HALF_SQUARE_SIZE;
        activPiece.y = mouse.y - Board.HALF_SQUARE_SIZE;
        activPiece.col = activPiece.getCol(activPiece.x);
        activPiece.row = activPiece.getRow(activPiece.y);

        // Check if the piece is hovering over a reachable sqare
        if (activPiece.canMove(activPiece.col, activPiece.row)) {
            canMove = true;

            // if hitting a piece, remove it from the list.
            if (activPiece.hittingP != null) {
                simPieces.remove(activPiece.hittingP.getIndex());
            }

            checkCastling();
            if(ilegalKingMove(activPiece) == false && opponentCanCaptureKing() == false){
                validSqare = true;
            }
        }

    }

    private void changePlayer() {
        if (currentColor == WHITE) {
            currentColor = BLACK;
            // Reset black's two stepped status
            for (Piece piece : pieces) {
                if (piece.color == BLACK) {
                    piece.twoStepped = false;
                }
            }
        } else {
            currentColor = WHITE;
            // Reset white's two stepped status
            for (Piece piece : pieces) {
                if (piece.color == WHITE) {
                    piece.twoStepped = false;
                }
            }
        }
        activPiece = null;
    }

    private void checkCastling() {
        if (castlingP != null) {
            if (castlingP.col == 0) {
                castlingP.col += 3;
            } else if (castlingP.col == 7) {
                castlingP.col -= 2;
            }
            castlingP.x = castlingP.getX(castlingP.col);
        }
    }

    private boolean canPromote() {
        if (activPiece.type == Type.PAWN) {
            if (currentColor == WHITE && activPiece.row == 0 || currentColor == BLACK && activPiece.row == 7) {
                promoPieces.clear();
                promoPieces.add(new Rook(currentColor, 9, 2));
                promoPieces.add(new Horse(currentColor, 9, 3));
                promoPieces.add(new Bishop(currentColor, 9, 4));
                promoPieces.add(new Queen(currentColor, 9, 5));
                return true;
            }
        }

        return false;
    }

    private void promoting(){
        if(mouse.pressed){
            for(Piece piece : promoPieces){
                if(piece.col == mouse.x/Board.SQUARE_SIZE && piece.row == mouse.y/Board.SQUARE_SIZE){
                    switch(piece.type){
                        case ROOK: simPieces.add(new Rook(currentColor, activPiece.col, activPiece.row)); break;
                        case HORSE: simPieces.add(new Horse(currentColor, activPiece.col, activPiece.row)); break;
                        case BISHOP: simPieces.add(new Bishop(currentColor, activPiece.col, activPiece.row)); break;
                        case QUEEN: simPieces.add(new Queen(currentColor, activPiece.col, activPiece.row)); break;
                        default: break;
                    }
                    simPieces.remove(activPiece.getIndex());
                    copyPieces(simPieces, pieces);
                    activPiece = null;
                    promotion = false;
                    changePlayer();
                }
            }
        }
    }

    private boolean ilegalKingMove(Piece king){
        if(king.type == Type.KING){
            for(Piece piece : simPieces){
                if(piece != king && piece.color != king.color && piece.canMove(king.col, king.row)){
                    return true;
                }
            }
        }


        return false;
    }

    private boolean isKingInCheck(){

        Piece king  = getKing(true);
        if(activPiece.canMove(king.col, king.row)){
            checkingPiece = activPiece;
            return true;
        }
        else{
            checkingPiece = null;
        }

        return false;
    }

    private Piece getKing(boolean opponent){
        Piece king = null;
        for(Piece piece : simPieces){
            if(opponent){
                if(piece.type == Type.KING && piece.color != currentColor){
                    king = piece;
                }
            }
            else{
                if(piece.type == Type.KING && piece.color == currentColor){
                    king = piece;
                }
            }
        }
        return king;
    }

    private boolean opponentCanCaptureKing(){

        Piece king = getKing(false);

        for(Piece piece : simPieces){
            if(piece.color != king.color && piece.canMove(king.col, king.row)){
                return true;
            }
        }

        return false;
    }

    private boolean isCheckmate(){

        Piece king = getKing(true);
        if(kingCanMove(king)){
            return false;
        }
        else{
            //Check if the attack can be blocked


            //Check the position of the checking piece and the king in check
            int colDiff = Math.abs(checkingPiece.col - king.col);
            int rowDiff = Math.abs(checkingPiece.row - king.row);
            if(colDiff == 0 ){
                //the checking piece is attacking vertically
                if(checkingPiece.row < king.row){
                    //the checking piece is attaking form above
                    for(int row = checkingPiece.row; row < king.row; row++){
                        for(Piece piece : simPieces){
                            if(piece!=king && piece.color != currentColor && piece.canMove(checkingPiece.col, row)){
                                return false;
                            }
                        }
                    }
                }
                if(checkingPiece.row > king.row){
                    //the checking piece is attaking from below
                    for(int row = checkingPiece.row; row > king.row; row--){
                        for(Piece piece : simPieces){
                            if(piece!=king && piece.color != currentColor && piece.canMove(checkingPiece.col, row)){
                                return false;
                            }
                        }
                    }
                }
            }
            else if(rowDiff == 0){
                //the checking piece is attaking horizontally
                if(checkingPiece.col < king.col){
                    //the checking piece is attaking form left
                    for(int col = checkingPiece.col; col < king.col; col++){
                        for(Piece piece : simPieces){
                            if(piece!=king && piece.color != currentColor && piece.canMove(col, checkingPiece.row)){
                                return false;
                            }
                        }
                    }
                }
                if(checkingPiece.col > king.col){
                    //the checking piece is attaking from right
                    for(int col = checkingPiece.col; col > king.col; col--){
                        for(Piece piece : simPieces){
                            if(piece!=king && piece.color != currentColor && piece.canMove(col, checkingPiece.row)){
                                return false;
                            }
                        }
                    }
                }
                
            }
            else if(colDiff == rowDiff){
                //the checking piece is attaking diagonally
                if(checkingPiece.row < king.row){
                    //above
                    if(checkingPiece.col < king.col){
                        //upper left
                        for(int col = checkingPiece.col, row = checkingPiece.row ; col < king.col ; col ++, row++){
                            for(Piece piece : simPieces){
                                if(piece != king && piece.color != currentColor && piece.canMove(col, row)){
                                    return false;
                                }
                            }
                        }
                    }
                    if(checkingPiece.col > king.col){
                        //upper right
                        for(int col = checkingPiece.col, row = checkingPiece.row ; col > king.col ; col --, row++){
                            for(Piece piece : simPieces){
                                if(piece != king && piece.color != currentColor && piece.canMove(col, row)){
                                    return false;
                                }
                            }
                        }
                    }
                }
                if(checkingPiece.row > king.row){
                    //below
                    if(checkingPiece.col < king.col){
                        //lower left
                        for(int col = checkingPiece.col, row = checkingPiece.row ; col < king.col ; col ++, row--){
                            for(Piece piece : simPieces){
                                if(piece != king && piece.color != currentColor && piece.canMove(col, row)){
                                    return false;
                                }
                            }
                        }
                    }
                    if(checkingPiece.col > king.col){
                        //lower right
                        for(int col = checkingPiece.col, row = checkingPiece.row ; col > king.col ; col --, row--){
                            for(Piece piece : simPieces){
                                if(piece != king && piece.color != currentColor && piece.canMove(col, row)){
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        }


        return true;
    }

    private boolean kingCanMove(Piece king){

        //simulate if the king can move to any square safe
        if(isValidMove(king, -1, -1)){return true;}
        if(isValidMove(king, 0, -1)){return true;}
        if(isValidMove(king, 1, -1)){return true;}
        if(isValidMove(king, -1, 0)){return true;}
        if(isValidMove(king, 0, 0)){return true;}
        if(isValidMove(king, 1, 0)){return true;}
        if(isValidMove(king, -1, 1)){return true;}
        if(isValidMove(king, 0, 1)){return true;}
        if(isValidMove(king, 1, 1)){return true;}

        return false;
    }

    private boolean isValidMove(Piece king, int colPlus, int rowPlus){
        
        boolean isValidMove = false;

        //Update the king's position for a second
        king.col += colPlus;
        king.row =+ rowPlus;

        if(king.canMove(king.col, king.row)){
            if(king.hittingP != null){
                simPieces.remove(king.hittingP.getIndex());
            }
            if(ilegalKingMove(king) == false){
                isValidMove = true;
            }
        }

        //Reset the king's position and restore the removed piece
        king.resetPosition();
        copyPieces(pieces, simPieces);

        return isValidMove;
    }

    private boolean isStalemate(){
        int count = 0;
        //count the number of pieces
        for(Piece piece : simPieces){
            if(piece.color != currentColor){
                count++;
            }
        }
        if(count == 1){
            if(kingCanMove(getKing(true))== false){
                return true; 
            }
        }
        return false;
    }

    // component of JComponent
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        Graphics2D g2D = (Graphics2D) g;

        // BOARD
        board.draw(g2D);

        // PIECES
        for (Piece p : simPieces) {
            p.draw(g2D);
        }

        if (activPiece != null) {
            if (canMove) {
                if(ilegalKingMove(activPiece) || opponentCanCaptureKing()){
                    g2D.setColor(Color.red);
                    // facem un patrat transparent
                    g2D.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.7f));
                    g2D.fillRect(activPiece.col * Board.SQUARE_SIZE, activPiece.row * Board.SQUARE_SIZE, Board.SQUARE_SIZE,
                            Board.SQUARE_SIZE);
                    g2D.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1f));
                }
                else{
                    g2D.setColor(Color.green);
                    // facem un patrat transparent
                    g2D.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.7f));
                    g2D.fillRect(activPiece.col * Board.SQUARE_SIZE, activPiece.row * Board.SQUARE_SIZE, Board.SQUARE_SIZE,
                            Board.SQUARE_SIZE);
                    g2D.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1f));
                }
                
            }

            // Draw the active piece in the end so it won't be hidden by the board oe the
            // colored sqare
            activPiece.draw(g2D);
        }

        // STATUS MESSAGES
        g2D.setFont(new Font("Book Antiqua", Font.PLAIN, 40));
        g2D.setColor(Color.WHITE);

        if(promotion){
            g2D.drawString("Promote to:", 840, 150);
            for(Piece piece : promoPieces){
                g2D.drawImage(piece.image, piece.getX(piece.col), piece.getY(piece.row), 
                                Board.SQUARE_SIZE, Board.SQUARE_SIZE,null);
            }
        }
        else{
            if (currentColor == WHITE) {
                g2D.drawString("White's turn", 840, 550);
                if(checkingPiece != null && checkingPiece.color == BLACK){
                    g2D.setColor(Color.red);
                    g2D.drawString("The king", 840, 650);
                    g2D.drawString("is in check!!!", 840, 700);
                }
            } else {
                g2D.drawString("Black's turn", 840, 250);
                if(checkingPiece != null && checkingPiece.color == WHITE){
                    g2D.setColor(Color.red);
                    g2D.drawString("The king", 840, 100);
                    g2D.drawString("is in check!!!", 840, 150);
                }
            }   
        }
        
        if(gameover){
            String s = "";
            if(currentColor == WHITE){
                s = "Black Wins!";
            }
            else{
                s = "White Wins!";
            }
            g2D.setFont(new Font("Arial", Font.PLAIN, 90));
            g2D.setColor(Color.green);
            g2D.drawString(s, 200, 420);
        }

        if(stalemate){
            g2D.setFont(new Font("Arial", Font.PLAIN, 90));
            g2D.setColor(Color.gray);
            g2D.drawString("Stalemate!!", 200, 420);
        }
        
    }

}


