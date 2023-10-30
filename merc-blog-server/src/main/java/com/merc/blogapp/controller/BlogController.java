package com.merc.blogapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.merc.blogapp.model.Blog;
import com.merc.blogapp.service.IBlogService;


@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class BlogController {
	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	IBlogService blogService;

//	http://localhost:8090/api/get-all-emps


	@RequestMapping(path = "get-all-blogs", method = RequestMethod.GET, produces = "application/json")
	
	public ResponseEntity<List<Blog>> getAllBlogs() {
		List<Blog> blogList = blogService.getAllBlogs();
		HttpStatus status = HttpStatus.OK;
		ResponseEntity<List<Blog>> response = new ResponseEntity<List<Blog>>(blogList, status);
		LOG.info(Integer.toString(blogList.size()));
		return response;
	}

	@RequestMapping(path = "get-blog-by-id/{blogid}", method = RequestMethod.GET, produces = "application/json")
	
	public ResponseEntity<Blog> getEmpById(@PathVariable(name = "blogid") Integer id) {
		Blog blogObj = blogService.getBlogById(id);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Blog found successfully.");
		ResponseEntity<Blog> response = new ResponseEntity<Blog>(blogObj, headers, status);
		LOG.info(blogObj.toString());
		return response;
	}

//	@RequestMapping(path = "get-emp-by-name/{ename}", method = RequestMethod.GET, produces = "application/json")
//	public ResponseEntity<List<Employee>> getEmpByName(@PathVariable(name = "ename") String firstName) {
//		List<Employee> empList = empService.getEmpByFirstName(firstName);
//		HttpStatus status = HttpStatus.OK;
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("message", "Employees found successfully.");
//		ResponseEntity<List<Employee>> response = new ResponseEntity<List<Employee>>(empList, headers, status);
//		LOG.info(empList.toString());
//		return response;
//	}

	@RequestMapping(path = "add-blog", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<Blog> addEmp(@RequestBody /* @Valid */ Blog emp) {
		Blog blogObj = blogService.addBlog(emp);
		HttpStatus status = HttpStatus.CREATED;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Blog added successfully.");
		ResponseEntity<Blog> response = new ResponseEntity<Blog>(blogObj, headers, status);
		LOG.info(blogObj.toString());
		return response;
	}

//	@RequestMapping(path = "update-emp", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
//	public ResponseEntity<Employee> updateEmp(@RequestBody Employee emp) {
//		Employee empObj = empService.updateEmployee(emp);
//		HttpStatus status = HttpStatus.CREATED;
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("message", "Employee updated successfully.");
//		ResponseEntity<Employee> response = new ResponseEntity<Employee>(empObj, headers, status);
//		LOG.info(empObj.toString());
//		return response;
//	}

	@RequestMapping(path = "delete-emp/{blogid}", method = RequestMethod.DELETE, produces = "application/json")
	public ResponseEntity<Blog> deleteEmp(@PathVariable(name = "blogid") Integer id) {
		Blog blogObj = blogService.deleteBlog(id);
		HttpStatus status = HttpStatus.OK;
		HttpHeaders headers = new HttpHeaders();
		headers.add("message", "Blog deleted successfully.");
		ResponseEntity<Blog> response = new ResponseEntity<Blog>(blogObj, headers, status);
		LOG.info(blogObj.toString());
		return response;
	}

}
