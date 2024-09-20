package main;

import java.awt.Color;
import java.awt.Graphics2D;

public class Board {

    final int MAX_COL = 8;
    final int MAX_ROW = 8;
    public static final int SQUARE_SIZE = 100;
    public static final int HALF_SQUARE_SIZE = SQUARE_SIZE/2;

    public void draw(Graphics2D g2){

        int color = 1;

        for(int row = 0; row<MAX_ROW;row++){
            for(int col = 0; col<MAX_COL;col++){
                
                if(color == 0){
                    //dark grey
                    g2.setColor(new Color(142,142,142));
                    color = 1;
                }
                else {
                    //white
                    g2.setColor(new Color(255,255,255));
                    color = 0;
                }
                //creates rectagles on (x,y,width,height)
                g2.fillRect(col*SQUARE_SIZE, row*SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
            }
            //switch the color on the first sqare in the row.
            color = color ==0 ? 1 : 0;
        }
    }

}
