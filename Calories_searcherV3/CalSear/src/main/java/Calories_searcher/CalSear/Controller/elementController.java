package Calories_searcher.CalSear.Controller;

import org.springframework.web.bind.annotation.RestController;

import Calories_searcher.CalSear.element;
import Calories_searcher.CalSear.Service.elementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@RequestMapping("/categories")
@CrossOrigin
public class elementController {

    @Autowired
    private elementService elemService;

    @GetMapping("/elements")
    public List<element> getAllElements() {
        return elemService.getAllElements();
    }

    //the mapping was ambiguous because if the parameters are given at the same root (i.e. "/element/..."), 
    //therefore the mapping does not support polymorphism so it didn't know witch method to use => server error.(500)
    @GetMapping("/element/id/{id}")
    public element fetchElementDetailsById(@PathVariable long id){
        return elemService.getElementDetailsById(id);
    }
    
    @GetMapping("/element/name/{name}")  
    public element fetchElementDetailsByName(@PathVariable String name){
        return elemService.getElementByName(name);
    }

    //the request should be like: http://localhost:8080/categories?category=drinks
    @RequestMapping(method = RequestMethod.GET) 
    public List<element> fetchElementDetailsByCategory(@RequestParam(value = "category") String category){
        return elemService.getAllElementsByCategory(category);
    }

    @PostMapping("/add")
    public element addElement(@RequestBody element elem) {
        
        return elemService.addElement(elem);
    }

    @PostMapping("/add/multiple")
    public List<element> addMultipElements(@RequestBody List<element> elems) {
        
        return elemService.addMultiple(elems);
    }
    
    @PutMapping("/update")
    public element updateElement(@RequestBody element elem) {
        
        return elemService.updateElement(elem);
    }

    @DeleteMapping("/delete")
    public element deleteElement(@RequestBody element elem){
        return elemService.deleteElement(elem);
    }
    

}
