package com.merc.blogapp.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.merc.blogapp.model.Blog;
import com.merc.blogapp.repository.BlogRepository;
//import com.merc.blogapp.repository.BlogRepository;


@Service
public class BlogService implements IBlogService{
	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	BlogRepository blogRepository;

	@Override
	public List<Blog> getAllBlogs() {
		LOG.info("getAllBlogs");
		return blogRepository.findAll();
	}

	@Override
	public Blog getBlogById(Integer blogid) { // 101, 109
		LOG.info(blogid.toString());
		Optional<Blog> blogOpt = blogRepository.findById(blogid);
		if (blogOpt.isPresent()) {
			return blogOpt.get(); // 200
		}	 
//			else {
//			String errorMessage = "Employee with eid " + eid + " not found!";
//			LOG.warn(errorMessage);
//			throw new EmployeeNotFoundException(errorMessage); // 404
//		}
		
		return null;
	}

//	@Override
//	public List<Employee> getEmpByFirstName(String firstName) {
//		LOG.info(firstName);
//		return empRepository.findByFirstName(firstName);
//	}

	

//	@Override
//	public Employee updateEmployee(Employee emp) {
//		LOG.info(emp.toString());
//		this.getEmpById(emp.getEid());
//		return empRepository.save(emp);
//	}

	@Override
	public Blog deleteBlog(Integer blogid) {
		LOG.info(blogid.toString());
		Blog blog = this.getBlogById(blogid);
		blogRepository.deleteById(blogid);
		return blog;
	}

	@Override
	public Blog addBlog(Blog blog) {
//		depService.getDepartmentById(emp.getDepartment().getDid());
		LOG.info(blog.toString());
		return blogRepository.save(blog);
	}

	
}
