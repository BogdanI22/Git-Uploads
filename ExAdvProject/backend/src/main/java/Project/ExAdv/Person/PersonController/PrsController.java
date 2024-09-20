package Project.ExAdv.Person.PersonController;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Person.LoggedPerson;
import Project.ExAdv.Person.Person;
import Project.ExAdv.Person.PersonService.PrsService;

import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/login")
@CrossOrigin
public class PrsController {


    @Autowired
    private PrsService PService;

    @GetMapping("/id/{id}")
    public Person getPerson(@PathVariable long id){
        return PService.getPerson(id);
    }

    @GetMapping("/email")
    public Person getPersonByCredentials(@RequestParam String email, @RequestParam String password) {
        return PService.getByCredentials(email,password);
    }

    @PostMapping("/add")
    public Person addPerson(@RequestBody Person prs) {
        return PService.addPerson(prs);
    }

    @PutMapping("/update")
    public Person upadatPerson(@RequestBody Person prs) {
        return PService.updatePerson(prs);
    }

    @DeleteMapping("/delete")
    public Person delPerson(@RequestBody Person prs){
        return PService.deletePerson(prs);
    }

    @GetMapping("/logout")
    public void LogOut() {
        PService.LogOut();
    }
    
    @GetMapping("/profile")
    public LoggedPerson getLoggedPersonData() {
        return PService.getLoggedPersonData();
    }
    
    @GetMapping("/profile/exercises")
    public List<Exercise> LoggedPersonsProgram() {
        return PService.getLoggedPersonsProgram();
    }

    @GetMapping("/profile/exercises/sets")
    public ArrayList<Double> LoggedPersonsProgramSets() {
        return PService.getLoggedPersonSets();
    }

    @GetMapping("/admin/users")      
    public List<Person> GetAllPersons(){
        return PService.getAllPersons();
    }

    @DeleteMapping("/delete/{id}")
    public void deletePersonByID(@PathVariable long id){
        PService.deletePersonById(id);
    }

}
