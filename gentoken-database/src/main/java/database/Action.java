package database;

import lombok.Data;


@Data
public class Action<T> {

private DatabaseAction databaseAction;
private T token;

}
