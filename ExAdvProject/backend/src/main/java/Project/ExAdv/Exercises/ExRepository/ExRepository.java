package Project.ExAdv.Exercises.ExRepository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Project.ExAdv.Exercises.Exercise;


public interface ExRepository extends JpaRepository<Exercise,Long>{

    List<Exercise> findByExClass(String exClass);
}
