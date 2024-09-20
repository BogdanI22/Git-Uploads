package Calories_searcher.CalSear.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Calories_searcher.CalSear.element;
import Calories_searcher.CalSear.Repository.elementRepository;


@Service
public class elementServiceImpl implements elementService{

    @Autowired
    private elementRepository elemRepository;
    
    //getters
    @Override
    public List<element> getAllElements(){
        return elemRepository.findAll();
    }

    @Override
    public element getElementDetailsById(long id){
        return elemRepository.findById(id).orElse(null);
    }

    @Override
    public element getElementByName(String name){
        return elemRepository.findByName(name).orElse(null);
    }

    @Override
    public List<element> getAllElementsByCategory(String category){
        return elemRepository.findByCategory(category).orElse(null);
    }

    //add
    @Override
    public element addElement(element elem){
        return elemRepository.save(elem);
    }

    @Override
    public List<element> addMultiple(List<element> elements){
        return elemRepository.saveAll(elements);
    }

    //update
    @Override
    public element updateElement(element elem){

        element updateDetails = elemRepository.findById(elem.getId()).orElse(null);
        if(updateDetails!=null){
            updateDetails.setCaloryNumber(elem.getCaloryNumber());
            elemRepository.save(updateDetails);
            return updateDetails;

        }

        return null;
    }

    //delete
    @Override
    public element deleteElement(element elem){
        
        elemRepository.deleteById(elem.getId());
        
        return null;
    }

}
