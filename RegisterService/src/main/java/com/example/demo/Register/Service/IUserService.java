package com.example.demo.Register.Service;

import com.example.demo.Register.Helper.GeneralResponse;
import com.example.demo.Register.Helper.UserHelper;

public interface IUserService {

    GeneralResponse checkIfUserExist(String username, String password);

    boolean checkIfUserIsValid(String username, String password);

    GeneralResponse<?> getUserByUsername(String username);

    Object getUserRole(String username);


}
