package com.light.light.Validation;

//ensures that the email is in a correct fromat
public class Validate
{
    static public boolean emailValid(String email)
    {

        //checks if the email matches the expression
        if(!email.trim().matches("^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$") || email.trim().equals(" "))
        {
            return false;
        }else
        {
            return true;
        }
    }
}
