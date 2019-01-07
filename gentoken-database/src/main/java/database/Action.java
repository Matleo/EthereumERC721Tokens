package database;

import lombok.Data;


@Data
public class Action<T> {

private DatabaseAction databaseAction;
private T token;
public DatabaseAction getDatabaseAction() {
	return databaseAction;
}
public void setDatabaseAction(DatabaseAction databaseAction) {
	this.databaseAction = databaseAction;
}
public T getToken() {
	return token;
}
public void setToken(T token) {
	this.token = token;
}

}
