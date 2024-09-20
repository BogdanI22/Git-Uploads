package Project.ExAdv.Exercises;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Exercises")
@Data

@AllArgsConstructor
@NoArgsConstructor

public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column
    private long id;
    @Column
    private String exName;
    @Column
    private String exClass; 
    @Column 
    private int difficulty;
    //difficulty from 1 to 3 (1 for efortless and 3 to maximum effort)




}
