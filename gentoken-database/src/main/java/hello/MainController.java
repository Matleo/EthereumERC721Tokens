package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@Controller    // This means that this class is a Controller
public class MainController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private SimpleTokenRepository simpleTokenRepository;


	@CrossOrigin(origins ="*")
	@GetMapping(path="/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Iterable<SimpleToken> getAllSimpleTokens() {
		// This returns a JSON or XML with the users
		return simpleTokenRepository.findAll();
	}


	@CrossOrigin( origins = "*")
	@GetMapping(path="/",  produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody SimpleToken getSimpleToken(@RequestParam Integer token_id){

		return simpleTokenRepository.findById(token_id).get();
	}


	@CrossOrigin( origins = "*")
	@PostMapping(path="/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Action addOrUpdateSimpleToken(@RequestBody SimpleToken simpleToken){
		Optional<SimpleToken> existingToken = simpleTokenRepository.findById(simpleToken.getToken_id());

		Action action = new Action();

		if(existingToken.isPresent()){

			SimpleToken updateToken = existingToken.get();
			updateToken.setName(simpleToken.getName());
			updateToken.setHash(simpleToken.getHash());
			simpleTokenRepository.save(updateToken);

			action.setDatabaseAction(DatabaseAction.updated);
			action.setSimpleToken(updateToken);
			return action;
		}
		else {

			simpleTokenRepository.save(simpleToken);
			action.setDatabaseAction(DatabaseAction.created);
			action.setSimpleToken(simpleToken);
			return action;
		}

	}


	@CrossOrigin( origins = "*")
	@DeleteMapping(path="/", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Action deleteSimpleToken(@RequestBody SimpleToken simpleToken){

		Action action = new Action();
		action.setDatabaseAction(DatabaseAction.deleted);

		Optional<SimpleToken>  existingToken = simpleTokenRepository.findById(simpleToken.getToken_id());

		if(existingToken.isPresent()){

			SimpleToken deleteToken = existingToken.get();
			action.setSimpleToken(deleteToken);
			simpleTokenRepository.delete(deleteToken);
		}
		return  action;
	}




}
