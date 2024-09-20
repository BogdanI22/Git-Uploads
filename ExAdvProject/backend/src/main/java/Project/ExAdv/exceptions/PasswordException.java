package Project.ExAdv.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class PasswordException extends RuntimeException{

    public PasswordException(String message){
        super(message);
    }

}
