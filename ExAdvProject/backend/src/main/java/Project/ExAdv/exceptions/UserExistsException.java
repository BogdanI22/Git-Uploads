package Project.ExAdv.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.ALREADY_REPORTED)
public class UserExistsException extends RuntimeException{

    public UserExistsException(String message) {
        super(message);
    }

}
