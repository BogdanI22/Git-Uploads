package Project.ExAdv.Exercises.ExService;

import java.util.List;

import Project.ExAdv.Exercises.Exercise;

public interface ExService {

    public Exercise getExercice(long id);
    public List<Exercise> getExercisesByClass(String ExClass);
    public Exercise addExercise(Exercise ex);
    public Exercise updatExercise(Exercise ex);
    public Exercise delExercise(Exercise ex);

    //for admin

    public List<Exercise> getAllExercises();
    public void deleteExerciseByID(long id);

}
