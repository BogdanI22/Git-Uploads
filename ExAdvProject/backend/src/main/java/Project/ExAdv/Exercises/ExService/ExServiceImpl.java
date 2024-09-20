package Project.ExAdv.Exercises.ExService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Exercises.ExRepository.ExRepository;


@Service
public class ExServiceImpl implements ExService{

    @Autowired
    private ExRepository ERepository;

    @Override
    public Exercise getExercice(long id) {
        return ERepository.findById(id).orElse(null);
    }

    @Override
    public List<Exercise> getExercisesByClass(String ExClass) {
        return ERepository.findByExClass(ExClass);
    }

    @Override
    public Exercise addExercise(Exercise ex) {
        ERepository.save(ex);
        return null;
    }

    @Override
    public Exercise updatExercise(Exercise ex) {
        Exercise tempEx = ERepository.findById(ex.getId()).orElse(null);
        if(tempEx != null){
            tempEx.setId(ex.getId());
            tempEx.setExName(ex.getExName());
            tempEx.setExClass(ex.getExClass());
            tempEx.setDifficulty(ex.getDifficulty());
            ERepository.save(tempEx);
        }
        return null;
    }

    @Override
    public Exercise delExercise(Exercise ex) {
        ERepository.deleteById(ex.getId());
        return null;
    }

    @Override
    public List<Exercise> getAllExercises() {
        return ERepository.findAll();
    }

    @Override
    public void deleteExerciseByID(long id) {
        ERepository.deleteById(id);
    }

}
