package Project.ExAdv.Person.PersonService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Person.LoggedPerson;
import Project.ExAdv.Person.Person;
import Project.ExAdv.Person.PersonRepository.PrsRepository;
import Project.ExAdv.exceptions.EmailException;
import Project.ExAdv.exceptions.PasswordException;
import Project.ExAdv.exceptions.UserExistsException;

@Service
public class PrsServiceImpl implements PrsService {

    @Autowired
    private PrsRepository PRepository;

    @Autowired
    private LoggedPerson LPers;

    @Override
    public Person getPerson(Long id) {
        return PRepository.findById(id).orElse(null);
    }

    // merge

    @Override
    public Person getByCredentials(String email, String password) {
        if (PRepository.existsByEmail(email)) {
            Person loggedPerson = PRepository.findByEmail(email);
            if (loggedPerson.getPassword().equals(password)) {
                LPers.setId(loggedPerson.getId());
                LPers.setFirst(loggedPerson.getFirstName());
                LPers.setLast(loggedPerson.getLastName());
                LPers.setAge(loggedPerson.getAge());
                LPers.setWeight(loggedPerson.getWeight());
                LPers.setHight(loggedPerson.getHight());
                LPers.setProgram(loggedPerson.getPreferedExSet());
                LPers.setProgramItems();
                LPers.setProgramSets();
                return loggedPerson;
            } else {
                // aici zicem ca parola nu e corecta
                // System.out.println("nu a gasit parola");
                throw new PasswordException("The password is not valid!");
            }

        } else {
            // aici zicem ca userul nu exista
            // System.out.println("nu a gasit mailul");
            throw new EmailException("The email is not valid!");
        }
        
    }

    // trebuie adaugata optiunea de a verifica daca exista deja userul si sa nu il
    // inregistreze in momentul adaugarii
    // foloseste exceptia creata - probabil

    // DONE
    @Override
    public Person addPerson(Person prs) {
        if (PRepository.existsByEmail(prs.getEmail())) {
            throw new UserExistsException("User already exists!");
        } else {
            PRepository.save(prs);
            return null;
        }
    }

    @Override
    public Person updatePerson(Person prs) {
        Person updatPrs = PRepository.findById(prs.getId()).orElse(null);
        if (updatPrs != null) {
            updatPrs.setFirstName(prs.getFirstName());
            updatPrs.setLastName(prs.getLastName());
            updatPrs.setHight(prs.getHight());
            updatPrs.setWeight(prs.getWeight());
            updatPrs.setPreferedExSet(prs.getPreferedExSet());
            updatPrs.setAge(prs.getAge());
            updatPrs.setEmail(prs.getEmail());
            updatPrs.setPassword(prs.getPassword());
            PRepository.save(updatPrs);
        }
        return null;
    }

    @Override
    public Person deletePerson(Person prs) {
        PRepository.deleteById(prs.getId());
        return null;
    }

    // trebuie implementat buton de logout.
    @Override
    public void LogOut() {
        LPers.LoggedPersonSignOut();
    }

    // pentru pagina de profil unde returnam datele persoanei logate
    @Override
    public LoggedPerson getLoggedPersonData() {
        return LPers;
    }

    // pentru pagina de profil unde returnam programul persoanei logate
    @Override
    public List<Exercise> getLoggedPersonsProgram() {
        return LPers.getProgramItems();
    }

    // pentru pagina de profil unde returnam numarul seturilor pentru fiecare exercitiu persoanei logate
    @Override
    public ArrayList<Double> getLoggedPersonSets() {
        return LPers.getProgramSets();
    }

    @Override
    public List<Person> getAllPersons() {
        return PRepository.findAll();
    }

    @Override
    public void deletePersonById(Long id) {
        System.out.println("person deleted: " +id);
        PRepository.deleteById(id);
    }

}
