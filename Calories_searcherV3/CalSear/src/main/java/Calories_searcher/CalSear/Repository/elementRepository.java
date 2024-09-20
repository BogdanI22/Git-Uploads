package Calories_searcher.CalSear.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Calories_searcher.CalSear.element;
import java.util.List;
import java.util.Optional;


public interface elementRepository extends JpaRepository<element,Long>{

    Optional <List<element>> findByCategory(String category);

    Optional <element> findByName(String name);
} 
