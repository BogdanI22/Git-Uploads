package Project.ExAdv.Person;

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
@Table(name = "People")
@Data

@AllArgsConstructor
@NoArgsConstructor

public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column
    private Long id;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private int age;

    @Column
    private double weight;

    @Column
    private double hight;

    @Column
    private String preferedExSet;

}
