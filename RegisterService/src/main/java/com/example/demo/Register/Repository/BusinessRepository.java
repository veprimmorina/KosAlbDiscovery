package com.example.demo.Register.Repository;

import com.example.demo.Register.Models.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Integer> {

    @Modifying
    @Transactional
    @Query(value = "update business set business_activity=:businessActivity,business_number=:businessNumber,email=:email,fiscal_Number=:fiscalNumber,name=:name,owner_id=:ownerId,password=:password,tel_number=:telNumber,username=:username,role=:role,status=:status where business_id=:id", nativeQuery = true)
    public void updateBusiness(@Param("id") int id, @Param("businessActivity") String businessActivity, @Param("businessNumber") String businessNumber, @Param("email") String email, @Param("fiscalNumber") String fiscal_Number, @Param("name") String name, @Param("ownerId") String ownerId, @Param("password") String password, @Param("telNumber") String telNumber, @Param("username") String username, @Param("role") String role, @Param("status") String status);

    @Query(value = "select * from business where username=:username", nativeQuery = true)
    public Optional<Business> findBusinessByUsername(@Param("username") String username);

    @Query(value = "select * from business where username=:username and password=:password", nativeQuery = true)
    public Optional<Business> findBusinessByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
    // @Query(value = "update business set name=:name,email=:email,password=:password,username=:username,tel_Number=:tel_Number.owner_ID=:owner_ID,fiscal_Number=:fiscal_Number,business_Activity=:business_Activity,status=:status,role=:role",nativeQuery = true)
    /// public void updateBusiness(@Param("name") String name,@Param("email") String email,@Param("password") String password,
    //      @Param("username") String username,@Param("tel_Number") String tel_Number,
    //    @Param("owner_ID") String owner_ID,@Param("fiscal_Number") String fiscal_Number,
    //  @Param("business_Activity") String business_Activity,@Param("status") String status,@Param("role") String role);
}
