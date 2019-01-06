package database;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class FishToken {

    @Id
    private Long token_Id;
    private String ownerAdress;
    private String name;
    private float speed;
    private String headType;
    private String tailType;

}
