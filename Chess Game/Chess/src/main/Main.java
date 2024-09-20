package main;

import javax.swing.JFrame;

public class Main {
    public static void main(String[] args) throws Exception {
        
        JFrame window = new JFrame("Chess Game");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setResizable(false);

        //adding the panel
        GamePanel gp = new GamePanel();
        window.add(gp);
        window.pack();


        window.setLocationRelativeTo(null);
        window.setVisible(true);

        gp.launchGame();

    }
}
