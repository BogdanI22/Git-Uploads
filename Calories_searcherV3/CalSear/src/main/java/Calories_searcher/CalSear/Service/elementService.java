package Calories_searcher.CalSear.Service;

import java.util.List;

import Calories_searcher.CalSear.element;

public interface elementService {
    //getters
    List<element> getAllElements();
    public element getElementDetailsById(long id);
    public element getElementByName(String name);
    List<element> getAllElementsByCategory(String category);

    //add
    public element addElement(element elem);
    List<element> addMultiple(List<element> elements);

    //update
    public element updateElement(element elem);

    //delete
    public element deleteElement(element elem);



}
