package database;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class SimpleToken {

	@Id
    private Integer token_id;
    private String hash;
    private String name;
	public Integer getToken_id() {
		return token_id;
	}
	public void setToken_id(Integer token_id) {
		this.token_id = token_id;
	}
	public String getHash() {
		return hash;
	}
	public void setHash(String hash) {
		this.hash = hash;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

    
}

