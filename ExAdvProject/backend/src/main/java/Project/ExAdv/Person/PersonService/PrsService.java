package Project.ExAdv.Person.PersonService;



import java.util.ArrayList;
import java.util.List;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Person.LoggedPerson;
import Project.ExAdv.Person.Person;

public interface PrsService {

    public Person getPerson(Long id);
    public Person getByCredentials(String email, String password);
    public Person addPerson(Person prs);
    public Person updatePerson(Person prs);
    public Person deletePerson(Person prs);
    public void LogOut();
    public LoggedPerson getLoggedPersonData();
    public List<Exercise> getLoggedPersonsProgram();
    public ArrayList<Double> getLoggedPersonSets();


    //for admin 

    public List<Person> getAllPersons();
    public void deletePersonById(Long id);
    
}
