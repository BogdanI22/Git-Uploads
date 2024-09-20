package Calories_searcher.CalSear;

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
@Data
@Table

@AllArgsConstructor
@NoArgsConstructor

public class element {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    @Column(name = "ID")
    private long id;
    @Column(name = "Category")
    private String category;
    @Column(name = "Name")
    private String name;
    @Column(name = "CaloryNumber")
    private long caloryNumber;

    //public element(){}

    public element(String category, String name, long caloryNumber) {
        this.category = category;
        this.name = name;
        this.caloryNumber = caloryNumber;
    }

    


}
