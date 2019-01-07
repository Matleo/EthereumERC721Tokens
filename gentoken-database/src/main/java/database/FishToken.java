package database;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FishToken {

    @Id
    private Long token_Id;
    private String name;
    private float speed;
    private String headType;
    private String tailType;
    public Long getToken_Id() {
		return token_Id;
	}
	public void setToken_Id(Long token_Id) {
		this.token_Id = token_Id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getSpeed() {
		return speed;
	}
	public void setSpeed(float speed) {
		this.speed = speed;
	}
	public String getHeadType() {
		return headType;
	}
	public void setHeadType(String headType) {
		this.headType = headType;
	}
	public String getTailType() {
		return tailType;
	}
	public void setTailType(String tailType) {
		this.tailType = tailType;
	}


}
