package org.example.Service;

import org.example.Entity.User;
import org.example.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

//@Service

public class UserService {

//    private final UserRepository userRepository;
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public List<User> getAllUsers(){
//        return userRepository.findAll();
//    }
//
//    public Optional<User> getUserById(Long id){
//        return userRepository.findById(id);
//    }
//
//    public User createUser(User user){
//        return userRepository.save(user);
//    }
//
//    public User updateUser(Long id, User updatedUser){
//        return userRepository.findById(id).map(user ->
//        {
//            user.setUsername(updatedUser.getUsername());
//            user.setEmail(updatedUser.getEmail());
//
//            return userRepository.save(user);
//        })
//                .orElseThrow(() -> new RuntimeException("User with id " + id + " not found"));
//    }
//
//    public void deleteUser(Long id){
//        userRepository.deleteById(id);
//    }

}
