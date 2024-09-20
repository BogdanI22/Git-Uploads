package Project.ExAdv.Person.PersonRepository;

//import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import Project.ExAdv.Person.Person;


public interface PrsRepository extends JpaRepository<Person, Long> {

    Person findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByfirstName(String firstName);

    boolean existsBylastName(String lastName);

    boolean existsByAge(int age);

}
