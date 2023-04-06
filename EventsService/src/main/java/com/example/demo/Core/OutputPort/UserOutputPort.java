package com.example.demo.Core.OutputPort;

import com.example.demo.Core.Helper.UserHelper;

public interface UserOutputPort {

     String getUserFullNameByUsername(String username);
     UserHelper getUserByUsername(String username);
}
