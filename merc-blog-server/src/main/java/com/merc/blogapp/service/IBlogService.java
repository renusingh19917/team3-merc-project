package com.merc.blogapp.service;

import java.util.List;

import com.merc.blogapp.model.Blog;

public interface IBlogService {
	
	public abstract List<Blog> getAllBlogs();

	public abstract Blog getBlogById(Integer blogId);

//	public List<Blog> getEmpByFirstName(String firstName);

	public abstract Blog addBlog(Blog blog);

//	public abstract Blog updateBlog(Employee emp);

	public abstract Blog deleteBlog(Integer blogId);
}
