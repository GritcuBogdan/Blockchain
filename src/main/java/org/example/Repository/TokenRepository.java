package org.example.Repository;

import org.example.Entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, Integer> {

    @Query("""
            select t from Token t inner join User u on t.user.id = u.id\s
            where u.id = :id and (t.expired = false or t.revoked = false)\s\s
            """)
    List<Token> findAllValidTokensByUser(Integer id);

    Optional<Token> findByToken(String token);

    @Modifying
    @Transactional
    @Query("delete from Token t where t.expired = true and t.revoked = true")
    int deleteExpiredTokens();
}
