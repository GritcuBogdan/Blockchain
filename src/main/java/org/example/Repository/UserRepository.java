package org.example.Repository;

import org.example.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    // TO-DO: implementeaza metoda findByUsername
    User findByUsername(String username);
    Optional<User> findById(Long id);
}
