package org.example.Blockchain;

import lombok.Getter;

@Getter
public class PublicKey {
    private String key;

    //TO-DO: Treb de implementat cumva sa criptam un array de tip byte (treb sa fie ceva algoritm) si doar sa reprezentam cheia prin string
    // cheia insasi va fi array-ul de tip byte, dupa criptare va fi afisata ca un string
    public PublicKey(String key) {
        this.key = key;
    }

    @Override
    public String toString() {
        return "PublicKey{" +
                "key='" + key + '\'' +
                '}';
    }
}
