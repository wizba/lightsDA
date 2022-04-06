package com.light.light.ErrorHandling;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ErroCheck extends ResponseEntityExceptionHandler
{


    @ExceptionHandler(value={Exception.class})
    public ResponseEntity<Object> genException(Exception ex , WebRequest request)
    {

        return new ResponseEntity<>(ex,new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    /*
    //thrown when user is not found
    @ExceptionHandler(value={UserNotFound.class})
    public ResponseEntity<ErrorMessage> UserNotFound(UserNotFound ex , WebRequest request)
    {

        ErrorMessage errorMessage= new ErrorMessage(new Date(), ex.getMessage(),request.getDescription(false));

        return new ResponseEntity<>(errorMessage,new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
*/
}
