package com.example.demo.Register.Controller;


import com.example.demo.Register.Helper.RequestHelper;
import com.example.demo.Register.Helper.ResponseHelper;
import com.example.demo.Register.Service.IAuthenticateService;
import com.example.demo.Register.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/register/authenticate")
public class AuthenticateController {

  @Autowired
    private IAuthenticateService iAuthenticateService;


    @Autowired
    private IUserService iUserService;



    public AuthenticateController(IAuthenticateService authenticateService) {
        this.iAuthenticateService = authenticateService;
    }

    //user gets token from responseHelper
    @PostMapping("/signIn")
    public ResponseEntity<ResponseHelper> signIn(@RequestBody RequestHelper requestHelper){
        return this.iAuthenticateService.signIn(requestHelper);
    }
   /* @PostMapping("/checkUser")
    public boolean checkIfUserExist(@RequestBody UserHelper userhelper){
        return iUserService.checkIfUserIsValid(userhelper.getUsername(),userhelper.getPassword());
    }*/

   /* @PostMapping("/auth/user")
    public ResponseHelper authenticateUser(@RequestBody RequestHelper requestHelper){
        ResponseHelper responseHelper = new ResponseHelper(requestHelper.getUsername(),"token");
        return responseHelper;
    }*/

    @PostMapping("/validate/{token}")
    public ResponseEntity<ResponseHelper> validateToken(@PathVariable("token") String token){
        return ResponseEntity.ok(this.iAuthenticateService.getResponseHelperFromValidToken(token));
    }


    /*@GetMapping("/get/user/{username}")
    public UserHelper getUser(@PathVariable("username") String username){
        return this.iUserService.getUserByUsername(username);
    }*/

}

