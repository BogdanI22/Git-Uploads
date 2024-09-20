package Project.ExAdv.Exercises.ExController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Project.ExAdv.Exercises.Exercise;
import Project.ExAdv.Exercises.ExService.ExService;



@RestController
@RequestMapping("/exercises")
@CrossOrigin
public class ExController {

    @Autowired
    private ExService EService;

    @GetMapping("/id/{id}")
    public Exercise getExercisebyId(@PathVariable long id){
        return EService.getExercice(id);
    }

    @GetMapping("/exclass/{exclass}")
    public List<Exercise> getExerciseByClass(@PathVariable String exclass){
        return EService.getExercisesByClass(exclass);
    }

    @PostMapping("/add")
    public Exercise addExercise(@RequestBody Exercise ex){
        return EService.addExercise(ex);
    }

    @PutMapping("/update")
    public Exercise updaExercise(@RequestBody Exercise ex){
        return EService.updatExercise(ex);
    }

    @DeleteMapping("/delete")
    public Exercise deletExercise(@RequestBody Exercise ex){
        return EService.delExercise(ex);
    }

    @GetMapping("/getall")
    public List<Exercise> getAllExercises(){
        return EService.getAllExercises();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteExerciseById(@PathVariable long id){
        EService.deleteExerciseByID(id);
    }
    
    

}
