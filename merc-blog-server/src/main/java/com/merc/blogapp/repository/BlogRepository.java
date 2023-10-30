package com.merc.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.merc.blogapp.model.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {

}
