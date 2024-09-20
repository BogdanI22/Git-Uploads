package Project.ExAdv.Person;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Exercises.ExService.ExService;

//bean for autowired din service impl
@Component
public class LoggedPerson {
    private Long id;
    private String first;
    private String last;
    private int age;
    private Double weight;
    private Double hight;
    private String program;
    private List<Exercise> programItems;
    ArrayList<Double> programSets;

    @Autowired
    private ExService ExSrv;

    public LoggedPerson() {
    }

    public void LoggedPersonSignOut() {
        this.id = 0L;
        this.first = "";
        this.last = "";
        this.age = 0;
        this.weight = 0D;
        this.hight = 0D;
        this.program = "";
        this.programItems.removeAll(programItems);
        this.programSets.removeAll(programSets);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getHight() {
        return hight;
    }

    public void setHight(Double hight) {
        this.hight = hight;
    }

    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public List<Exercise> getProgramItems() {
        return programItems;
    }

    public void setProgramItems() {

        switch (this.program) {
            case "MASS":
                programItems = ExSrv.getExercisesByClass(this.program.toLowerCase());
                break;
            case "LOSS":
                programItems = ExSrv.getExercisesByClass(this.program.toLowerCase());
                break;
            case "DEFINE":
                programItems = ExSrv.getExercisesByClass(this.program.toLowerCase());
                break;

        }
    }

    public ArrayList<Double> getProgramSets() {
        return programSets;
    }

    public void setProgramSets() {
        this.programSets = new ArrayList<>();

        for (Exercise item : programItems) {
            
            if (this.age > 0 && this.age <= 30) {
                if(item.getDifficulty() == 1){
                    programSets.add(15D);
                }else if(item.getDifficulty() == 2){
                    programSets.add(12D);
                }else if(item.getDifficulty() == 3){
                    programSets.add(10D);
                }
                //System.out.println("0-30 : dificulty" + programSets);                             
            }
            else if (this.age > 30 && this.age <= 50){
                if(item.getDifficulty() == 1){
                    programSets.add(10D);
                }else if(item.getDifficulty() == 2){
                    programSets.add(8D);
                }else if(item.getDifficulty() == 3){
                    programSets.add(6D);
                }
                //System.out.println("30-50 : dificulty" + programSets);                  
            }
            else if (this.age > 50 && this.age <= 100) {
                if(item.getDifficulty() == 1){
                    programSets.add(5D);
                }else if(item.getDifficulty() == 2){
                    programSets.add(3D);
                }else if(item.getDifficulty() == 3){
                    programSets.add(2D);
                }
                //System.out.println("50+ : dificulty" + programSets);                   
            }
            
        }
        
    }

}
